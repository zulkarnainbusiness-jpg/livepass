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

    # Check if there are TWO hero-section tags or duplicate nav-inner / breadcrumb-list
    if content.count('<section class="hero-section">') >= 2 or 'nav-inner' in content:
        # Find first <section class="hero-section"> end: </section>
        hero_start = content.find('<section class="hero-section">')
        if hero_start != -1:
            hero_end = content.find('</section>', hero_start) + len('</section>')
            
            # Find next main element or controls-sec or map-banner-card
            main_match = re.search(r'(<main|<section class="controls-sec"|<div class="map-banner-card"|<!-- MAIN CONTENT|<!-- CONTROLS ROW)', content[hero_end:])
            if main_match:
                main_start = hero_end + main_match.start()
                
                middle_chunk = content[hero_end:main_start]
                # If middle_chunk contains hero-section or nav-inner or breadcrumb-list
                if 'hero-section' in middle_chunk or 'nav-inner' in middle_chunk or 'breadcrumb-list' in middle_chunk:
                    new_content = content[:hero_end] + "\n\n  " + content[main_start:]
                    with open(filepath, "w", encoding="utf-8") as f:
                        f.write(new_content)
                    fixed_count += 1
                    log.append(f"Fixed US state duplicate block in {filename}")

print(f"Scanned {len(html_files)} files. Fixed {fixed_count} US state files.")
for line in log:
    print(line)
