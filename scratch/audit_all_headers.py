import os
import glob
import re

html_files = glob.glob(r"d:\uncle hong\*.html")

issues_found = []

for filepath in html_files:
    filename = os.path.basename(filepath)
    with open(filepath, "r", encoding="utf-8") as f:
        content = f.read()

    # Count <header> or site-header occurrences
    header_count = len(re.findall(r'class="site-header"', content))
    nav_flex_count = len(re.findall(r'class="nav-flex"', content))
    h1_count = len(re.findall(r'<h1', content, re.IGNORECASE))
    
    if header_count > 1 or nav_flex_count > 0 or h1_count > 1:
        issues_found.append((filename, header_count, nav_flex_count, h1_count))

print(f"Audit completed. Found {len(issues_found)} files with header/h1 anomalies:")
for filename, h_count, nf_count, h1_c in issues_found:
    print(f"File: {filename} -> site-header: {h_count}, nav-flex: {nf_count}, h1 count: {h1_c}")
