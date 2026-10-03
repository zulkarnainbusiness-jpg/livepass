import os
import glob
import re

html_files = glob.glob(r"d:\uncle hong\*.html")

fixed_count = 0
log = []

for filepath in html_files:
    filename = os.path.basename(filepath)
    with open(filepath, "r", encoding="utf-8") as f:
        content = f.read()

    # Find the position of </section> for class="hero-section"
    # and position of <section class="controls-sec">
    if '<section class="hero-section">' in content and '<section class="controls-sec">' in content:
        hero_start = content.find('<section class="hero-section">')
        hero_end = content.find('</section>', hero_start) + len('</section>')
        controls_start = content.find('<section class="controls-sec">')
        
        middle_chunk = content[hero_end:controls_start]
        # Check if middle_chunk has duplicate nav-flex or state-hero or breadcrumb
        if 'nav-flex' in middle_chunk or 'state-hero' in middle_chunk or 'brand-logo' in middle_chunk:
            # Replace middle_chunk with just clean newlines
            new_content = content[:hero_end] + "\n\n  " + content[controls_start:]
            with open(filepath, "w", encoding="utf-8") as f:
                f.write(new_content)
            fixed_count += 1
            log.append(f"Cleaned middle duplicate block in {filename}")

print(f"Scanned {len(html_files)} files. Fixed duplicate blocks in {fixed_count} files.")
for line in log:
    print(line)
