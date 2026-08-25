"""
LivePassWatch — WSDOT Mountain Pass Scraper
============================================
Fetches all Washington State pass conditions from the WSDOT
official public API and writes them to Supabase.

Run:  python wsdot_scraper.py
Env:  WSDOT_ACCESS_CODE, SUPABASE_URL, SUPABASE_KEY

Get your free WSDOT API key at:
https://wsdot.wa.gov/traffic/api/
"""

import os
import re
import sys
import json
import logging
from datetime import datetime, timezone
from typing import Optional

import requests
from supabase import create_client, Client

# ── Logging ──────────────────────────────────────────────────
logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s [%(levelname)s] %(message)s",
)
log = logging.getLogger(__name__)


# ── Config ───────────────────────────────────────────────────
WSDOT_API_URL = (
    "https://wsdot.wa.gov/Traffic/api/MountainPassConditions/"
    "MountainPassConditionsREST.svc/GetMountainPassConditionsAsJson"
)

# Map WSDOT MountainPassName → your site's slug
# Update this if WSDOT adds or renames passes
PASS_NAME_TO_SLUG: dict[str, str] = {
    "Snoqualmie Pass":           "snoqualmie-pass",
    "Stevens Pass":              "stevens-pass",
    "White Pass":                "white-pass",
    "Chinook Pass":              "chinook-pass",
    "Cayuse Pass":               "cayuse-pass",
    "Blewett Pass":              "blewett-pass",
    "Loup Loup Pass":            "loup-loup-pass",
    "Sherman Pass":              "sherman-pass",
    "North Cascades Highway":    "north-cascades-pass",
    "Washington Pass":           "north-cascades-pass",  # WSDOT sometimes uses this name
}


# ── Helpers ──────────────────────────────────────────────────

def parse_wsdot_date(raw: Optional[str]) -> Optional[str]:
    """
    WSDOT dates look like: /Date(1700000000000-0800)/
    Convert to ISO-8601 UTC string for Postgres.
    """
    if not raw:
        return None
    match = re.search(r"/Date\((\d+)([+-]\d{4})?\)/", raw)
    if not match:
        return None
    ms = int(match.group(1))
    dt = datetime.fromtimestamp(ms / 1000, tz=timezone.utc)
    return dt.isoformat()


def derive_status(pass_data: dict) -> str:
    """
    Derive a clean OPEN / CLOSED / RESTRICTED status
    from WSDOT's RoadCondition and restriction fields.
    """
    condition = (pass_data.get("RoadCondition") or "").lower()
    advisory  = pass_data.get("TravelAdvisoryActive", False)
    r1 = (pass_data.get("RestrictionOne", {}) or {}).get("RestrictionText", "") or ""
    r2 = (pass_data.get("RestrictionTwo", {}) or {}).get("RestrictionText", "") or ""
    restrictions = (r1 + " " + r2).lower()

    if "closed" in condition or "closed" in restrictions:
        return "CLOSED"
    if (
        advisory
        or "chain" in restrictions
        or "traction tires" in restrictions
        or "restricted" in condition
    ):
        return "RESTRICTED"
    return "OPEN"


def parse_pass(raw: dict) -> Optional[dict]:
    """
    Transform one raw WSDOT pass dict into our DB schema shape.
    Returns None if the pass isn't in our slug map.
    """
    name = raw.get("MountainPassName", "")
    slug = PASS_NAME_TO_SLUG.get(name)

    if not slug:
        log.debug("Skipping unknown pass: %s", name)
        return None

    r1 = (raw.get("RestrictionOne") or {})
    r2 = (raw.get("RestrictionTwo") or {})

    # Figure out which direction is east/west from RestrictionOne/Two
    def restriction_text(r: dict) -> Optional[str]:
        text = (r.get("RestrictionText") or "").strip()
        return text if text and text.lower() not in ("none", "") else None

    restriction_eb = None
    restriction_wb = None
    for r in [r1, r2]:
        direction = (r.get("TravelDirection") or "").upper()
        text = restriction_text(r)
        if not text:
            continue
        if "EAST" in direction:
            restriction_eb = text
        elif "WEST" in direction:
            restriction_wb = text
        else:
            # No direction label — put in eastbound as default
            restriction_eb = text

    return {
        "pass_slug":            slug,
        "status":               derive_status(raw),
        "road_condition":       (raw.get("RoadCondition") or "").strip() or None,
        "weather_condition":    (raw.get("WeatherCondition") or "").strip() or None,
        "temperature_f":        raw.get("TemperatureInFahrenheit"),
        "travel_advisory":      bool(raw.get("TravelAdvisoryActive", False)),
        "restriction_eastbound": restriction_eb,
        "restriction_westbound": restriction_wb,
        "source":               "WSDOT_API",
        "source_confidence":    "high",
        "official_updated_at":  parse_wsdot_date(raw.get("DateUpdated")),
        "scraped_at":           datetime.now(timezone.utc).isoformat(),
    }


# ── Main ─────────────────────────────────────────────────────

def run():
    # Load env vars
    access_code  = os.environ.get("WSDOT_ACCESS_CODE")
    supabase_url = os.environ.get("SUPABASE_URL")
    supabase_key = os.environ.get("SUPABASE_KEY")

    if not all([access_code, supabase_url, supabase_key]):
        log.error(
            "Missing env vars. Need: WSDOT_ACCESS_CODE, SUPABASE_URL, SUPABASE_KEY"
        )
        sys.exit(1)

    sb: Client = create_client(supabase_url, supabase_key)

    # ── 1. Fetch from WSDOT API ───────────────────────────────
    log.info("Fetching WSDOT mountain pass data...")
    try:
        resp = requests.get(
            WSDOT_API_URL,
            params={"AccessCode": access_code},
            timeout=15,
        )
        resp.raise_for_status()
        raw_passes = resp.json()
        log.info("Received %d passes from WSDOT", len(raw_passes))
    except Exception as exc:
        log.error("WSDOT API request failed: %s", exc)
        _log_scrape(sb, "WSDOT_API", 0, False, str(exc))
        sys.exit(1)

    # ── 2. Parse & filter ─────────────────────────────────────
    records = []
    for raw in raw_passes:
        parsed = parse_pass(raw)
        if parsed:
            records.append(parsed)
            log.info(
                "  %-30s → %s  (%s)",
                parsed["pass_slug"],
                parsed["status"],
                parsed["road_condition"] or "no condition text",
            )

    log.info("Matched %d/%d passes to site slugs", len(records), len(raw_passes))

    if not records:
        log.warning("No matching passes found — check PASS_NAME_TO_SLUG mapping")
        _log_scrape(sb, "WSDOT_API", 0, False, "No slug matches")
        sys.exit(1)

    # ── 3. Write to Supabase ──────────────────────────────────
    log.info("Writing to Supabase...")
    try:
        sb.table("pass_status").insert(records).execute()
        log.info("✓ Inserted %d status records", len(records))
    except Exception as exc:
        log.error("Supabase insert failed: %s", exc)
        _log_scrape(sb, "WSDOT_API", 0, False, str(exc))
        sys.exit(1)

    # ── 4. Log success ────────────────────────────────────────
    _log_scrape(sb, "WSDOT_API", len(records), True, None)
    log.info("Done ✓")


def _log_scrape(sb: Client, source: str, count: int, success: bool, error: Optional[str]):
    try:
        sb.table("scrape_log").insert({
            "source":        source,
            "passes_synced": count,
            "success":       success,
            "error_msg":     error,
        }).execute()
    except Exception as exc:
        log.warning("Failed to write scrape log: %s", exc)


if __name__ == "__main__":
    run()
