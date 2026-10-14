#!/usr/bin/env python3
"""
Fix sitemap.xml: update all pass page URLs to /country/slug and fix duplicate lastmod
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

today = "2026-10-11"
sitemap_path = os.path.join(ROOT, "sitemap.xml")

with open(sitemap_path, "r", encoding="utf-8") as fh:
    sitemap = fh.read()

# First: update all loc URLs from old -> new
for filename in html_files:
    slug = filename.replace(".html", "")
    old_loc = f"https://livepasswatch.info/{filename}"
    new_loc = f"https://livepasswatch.info/country/{slug}"
    sitemap = sitemap.replace(f"<loc>{old_loc}</loc>", f"<loc>{new_loc}</loc>")

# Second: fix duplicate lastmod lines - remove the PLACEHOLDER ones
# Pattern: <lastmod>DATE</lastmod>\n    <lastmod>PLACEHOLDER...
sitemap = re.sub(
    r'(<lastmod>2026-10-11</lastmod>\r?\n\s*<lastmod>PLACEHOLDER[^<]*</lastmod>)',
    '<lastmod>2026-10-11</lastmod>',
    sitemap
)

# Also clean any remaining PLACEHOLDER lastmod lines
sitemap = re.sub(r'\s*<lastmod>PLACEHOLDER[^<]*</lastmod>', '', sitemap)

with open(sitemap_path, "w", encoding="utf-8", newline='\r\n') as fh:
    fh.write(sitemap)

# Also copy to public/
pub_sitemap = os.path.join(ROOT, "public", "sitemap.xml")
if os.path.exists(pub_sitemap):
    import shutil
    shutil.copy(sitemap_path, pub_sitemap)

print("Sitemap fixed and saved!")

# Verify: count /country/ entries
count = sitemap.count("https://livepasswatch.info/country/")
print(f"Found {count} /country/ URLs in sitemap")

# Verify: no PLACEHOLDER left
if "PLACEHOLDER" in sitemap:
    print("WARNING: Still has PLACEHOLDER entries!")
else:
    print("Clean: no PLACEHOLDER entries remain")
