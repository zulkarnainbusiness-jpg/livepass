#!/usr/bin/env python3
"""
Migrate all pass pages from /pagename.html to /country/pagename
- Copies each HTML file to country/<pagename>/index.html
- Updates canonical URLs, og:url, breadcrumbs, JSON-LD URLs inside each file
- Generates 301 redirect rules for _redirects
- Updates sitemap.xml
"""

import os
import re
import shutil

ROOT = r"d:\livepass"
COUNTRY_DIR = os.path.join(ROOT, "country")

# Pages that should NOT be moved (top-level structural pages)
EXCLUDE = {
    "index.html",
    "country.html",   # the country browser page itself
    "about.html",
    "privacy.html",
    "terms.html",
}

# Collect all HTML pass pages
html_files = [
    f for f in os.listdir(ROOT)
    if f.endswith(".html") and f not in EXCLUDE
    and os.path.isfile(os.path.join(ROOT, f))
]

html_files.sort()
print(f"Found {len(html_files)} pass pages to migrate:")
for f in html_files:
    print(f"  {f}")

# Create country/ directory
os.makedirs(COUNTRY_DIR, exist_ok=True)

redirect_lines = []
sitemap_updates = {}  # old_loc -> new_loc

for filename in html_files:
    slug = filename.replace(".html", "")
    old_url = f"https://www.livepasswatch.info/{filename}"
    new_url = f"https://www.livepasswatch.info/country/{slug}"
    old_path_no_ext = f"https://www.livepasswatch.info/{slug}"

    # Create destination dir
    dest_dir = os.path.join(COUNTRY_DIR, slug)
    os.makedirs(dest_dir, exist_ok=True)
    dest_file = os.path.join(dest_dir, "index.html")

    # Read source
    src_file = os.path.join(ROOT, filename)
    with open(src_file, "r", encoding="utf-8") as fh:
        content = fh.read()

    # Update canonical URL
    content = re.sub(
        rf'<link rel="canonical" href="https://www\.livepasswatch\.info/{re.escape(filename)}"',
        f'<link rel="canonical" href="{new_url}"',
        content
    )
    # Also handle slug without .html (in case some pages already use clean URLs)
    content = re.sub(
        rf'<link rel="canonical" href="https://www\.livepasswatch\.info/{re.escape(slug)}"',
        f'<link rel="canonical" href="{new_url}"',
        content
    )

    # Update og:url
    content = re.sub(
        rf'<meta property="og:url" content="https://www\.livepasswatch\.info/{re.escape(filename)}"',
        f'<meta property="og:url" content="{new_url}"',
        content
    )
    content = re.sub(
        rf'<meta property="og:url" content="https://www\.livepasswatch\.info/{re.escape(slug)}"',
        f'<meta property="og:url" content="{new_url}"',
        content
    )

    # Update JSON-LD @id / url references for this page
    content = re.sub(
        rf'"url": "https://www\.livepasswatch\.info/{re.escape(filename)}"',
        f'"url": "{new_url}"',
        content
    )
    content = re.sub(
        rf'"url": "https://www\.livepasswatch\.info/{re.escape(slug)}"',
        f'"url": "{new_url}"',
        content
    )
    content = re.sub(
        rf'"@id": "https://www\.livepasswatch\.info/{re.escape(filename)}"',
        f'"@id": "{new_url}"',
        content
    )
    content = re.sub(
        rf'"@id": "https://www\.livepasswatch\.info/{re.escape(slug)}"',
        f'"@id": "{new_url}"',
        content
    )
    # Breadcrumb item references
    content = re.sub(
        rf'"item": "https://www\.livepasswatch\.info/{re.escape(filename)}"',
        f'"item": "{new_url}"',
        content
    )
    content = re.sub(
        rf'"item": "https://www\.livepasswatch\.info/{re.escape(slug)}"',
        f'"item": "{new_url}"',
        content
    )

    # Write the updated content to country/slug/index.html
    with open(dest_file, "w", encoding="utf-8") as fh:
        fh.write(content)

    print(f"  [OK] Created country/{slug}/index.html")

    # Build redirect rule: old .html -> new /country/slug
    redirect_lines.append(f"/{filename} /country/{slug} 301")
    redirect_lines.append(f"/{slug} /country/{slug} 301")

    # Sitemap: track old->new
    sitemap_updates[f"https://www.livepasswatch.info/{filename}"] = new_url
    sitemap_updates[f"https://www.livepasswatch.info/{slug}"] = new_url

print(f"\n📍 Generated {len(redirect_lines)} redirect rules")
print("\n--- _redirects additions ---")
for r in redirect_lines:
    print(r)

print("\n--- Sitemap URL updates ---")
for old, new in sitemap_updates.items():
    print(f"  {old} -> {new}")
