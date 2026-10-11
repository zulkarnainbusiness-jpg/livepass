#!/usr/bin/env python3
"""
Update _redirects and sitemap.xml for the /country/slug URL migration
"""

import os
import re

ROOT = r"d:\livepass"

EXCLUDE = {
    "index.html",
    "country.html",
    "about.html",
    "privacy.html",
    "terms.html",
}

html_files = sorted([
    f for f in os.listdir(ROOT)
    if f.endswith(".html") and f not in EXCLUDE
    and os.path.isfile(os.path.join(ROOT, f))
])

# ──── 1. Update _redirects ────────────────────────────────────────────────────
redirects_path = os.path.join(ROOT, "public", "_redirects")
with open(redirects_path, "r", encoding="utf-8") as fh:
    existing = fh.read()

# Build new redirect block for pass pages
new_pass_redirects = []
for filename in html_files:
    slug = filename.replace(".html", "")
    new_pass_redirects.append(f"/{filename} /country/{slug} 301")
    new_pass_redirects.append(f"/{slug} /country/{slug} 301")

# Insert before the SPA fallback line
spa_line = "# SPA Fallback for Dynamic Routes"
new_block = "\n# Pass page redirects: old URLs -> /country/slug\n" + \
            "\n".join(new_pass_redirects) + "\n\n"

if "# Pass page redirects:" in existing:
    # Already has the block — replace it
    existing = re.sub(
        r"# Pass page redirects:.*?(?=\n# SPA Fallback|\Z)",
        new_block.strip() + "\n\n",
        existing,
        flags=re.DOTALL
    )
else:
    existing = existing.replace(spa_line, new_block + spa_line)

with open(redirects_path, "w", encoding="utf-8") as fh:
    fh.write(existing)

print("Updated _redirects with", len(new_pass_redirects), "rules")

# ──── 2. Update sitemap.xml ───────────────────────────────────────────────────
today = "2026-10-11"
sitemap_path = os.path.join(ROOT, "sitemap.xml")
with open(sitemap_path, "r", encoding="utf-8") as fh:
    sitemap = fh.read()

for filename in html_files:
    slug = filename.replace(".html", "")
    old_loc = f"https://www.livepasswatch.info/{filename}"
    new_loc = f"https://www.livepasswatch.info/country/{slug}"

    sitemap = sitemap.replace(f"<loc>{old_loc}</loc>", f"<loc>{new_loc}</loc>")
    sitemap = sitemap.replace(
        f"<loc>https://www.livepasswatch.info/{slug}</loc>",
        f"<loc>{new_loc}</loc>"
    )
    # Update lastmod for migrated pages
    sitemap = sitemap.replace(
        f"<loc>{new_loc}</loc>\n    <lastmod>",
        f"<loc>{new_loc}</loc>\n    <lastmod>{today}</lastmod>\n    <lastmod>PLACEHOLDER"
    )

# Fix the double lastmod introduced above (clean up)
sitemap = re.sub(r"<lastmod>[^<]+<lastmod>PLACEHOLDER", "", sitemap)

with open(sitemap_path, "w", encoding="utf-8") as fh:
    fh.write(sitemap)

print("Updated sitemap.xml with new /country/ URLs")

# ──── 3. Also update public/sitemap.xml if it exists ─────────────────────────
pub_sitemap = os.path.join(ROOT, "public", "sitemap.xml")
if os.path.exists(pub_sitemap):
    import shutil
    shutil.copy(sitemap_path, pub_sitemap)
    print("Copied updated sitemap.xml to public/")

print("Done!")
