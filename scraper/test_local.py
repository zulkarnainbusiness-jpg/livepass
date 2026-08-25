"""
Local test — run this BEFORE setting up GitHub Actions.
It hits the real WSDOT API and prints what would be written to Supabase,
without actually writing anything.

Usage:
  export WSDOT_ACCESS_CODE=your_key_here
  python scraper/test_local.py
"""

import os
import sys
import json
import requests
from wsdot_scraper import WSDOT_API_URL, parse_pass

access_code = os.environ.get("WSDOT_ACCESS_CODE")
if not access_code:
    print("❌  Set WSDOT_ACCESS_CODE env var first.")
    print("    Get a free key at: https://wsdot.wa.gov/traffic/api/")
    sys.exit(1)

print("Fetching from WSDOT API...")
resp = requests.get(WSDOT_API_URL, params={"AccessCode": access_code}, timeout=15)
resp.raise_for_status()
raw_passes = resp.json()
print(f"✓  Got {len(raw_passes)} passes from WSDOT\n")

matched = 0
for raw in raw_passes:
    parsed = parse_pass(raw)
    if parsed:
        matched += 1
        print(
            f"  {parsed['pass_slug']:<30} "
            f"[{parsed['status']:<12}] "
            f"{parsed['road_condition'] or '—'}"
        )

print(f"\n✓  {matched}/{len(raw_passes)} passes matched your slug map.")
print("\nIf this looks right, you're ready to connect Supabase and deploy to GitHub Actions.")
