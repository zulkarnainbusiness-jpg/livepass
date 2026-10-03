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

    # If the file has both site-header AND (nav-flex OR state-hero OR duplicate hero-title)
    if "site-header" in content:
        # Pattern A: nav-flex block + optional state-hero block between </section> (end of hero-section) and <section class="controls-sec"> or similar
        # E.g.: </section>\s*<div class="container">.*?<section class="(state-hero|controls-sec)"
        
        # Let's match from </section>\s*(<div class="container">.*?</div>\s*</header>)?\s*(<!-- HERO SECTION -->\s*<section class="state-hero">.*?</section>)?
        # specifically if it contains nav-flex or state-hero
        
        # Method: Find the site-header section, then hero-section section.
        # Everything from hero-section end to controls-sec / passes-grid start that contains nav-flex or state-hero should be removed!

        pattern = r'(</section>\s*)(?:<div class="container">\s*<div class="nav-flex">.*?</header>\s*)?(?:<!-- HERO SECTION -->\s*<section class="state-hero">.*?</section>\s*)?(?=<section class="controls-sec"|<div class="container controls-sec"|<main|<div class="controls-sec")'
        
        # Specifically targeting duplicate nav/hero blocks:
        dup_pattern = r'(</section>\s*)<div class="container">\s*<div class="nav-flex">.*?</section>\s*(?=<section class="controls-sec"|<div class="controls-sec"|<div class="container controls-sec")'
        
        new_content = re.sub(dup_pattern, r'\1', content, flags=re.DOTALL)
        
        # Also check if there's leftover state-hero without nav-flex
        dup_pattern2 = r'(</section>\s*)<!-- HERO SECTION -->\s*<section class="state-hero">.*?</section>\s*(?=<section class="controls-sec"|<div class="controls-sec"|<div class="container controls-sec")'
        new_content = re.sub(dup_pattern2, r'\1', new_content, flags=re.DOTALL)
        
        # Also check for unclosed nav-flex header
        dup_pattern3 = r'(</section>\s*)<div class="container nav-flex">.*?</header>\s*(?=<section class="controls-sec"|<div class="controls-sec"|<div class="container controls-sec")'
        new_content = re.sub(dup_pattern3, r'\1', new_content, flags=re.DOTALL)

        if new_content != content:
            with open(filepath, "w", encoding="utf-8") as f:
                f.write(new_content)
            fixed_count += 1
            log.append(f"Cleaned duplicate block in {filename}")

print(f"Scanned {len(html_files)} files. Fixed duplicate blocks in {fixed_count} files.")
for line in log:
    print(line)
