import os
import glob
import re

html_files = glob.glob(r"d:\uncle hong\*.html")

fixed_count = 0
audit_results = []

for filepath in html_files:
    filename = os.path.basename(filepath)
    with open(filepath, "r", encoding="utf-8") as f:
        content = f.read()

    # Check for duplicate nav bar (e.g. nav-flex or brand-logo after site-header)
    # The pattern in nagaland.html:
    # <header class="site-header"> ... </header>
    # <section class="hero-section"> ... </section>
    # <div class="container nav-flex"> ... </nav>
    # <div class="container"> ... <div class="hero-meta-grid"> ... </div></div>

    if "site-header" in content and "nav-flex" in content:
        # Regex to remove old nav-flex and old hero block if site-header and hero-section exist
        pattern = r'<div class="container nav-flex">.*?</div>\s*</nav>\s*<!-- STATE HERO -->\s*<div class="container">.*?</div>\s*</div>'
        new_content = re.sub(pattern, '', content, flags=re.DOTALL)
        if new_content != content:
            with open(filepath, "w", encoding="utf-8") as f:
                f.write(new_content)
            fixed_count += 1
            audit_results.append(f"Fixed nav-flex pattern in {filename}")
        else:
            # Let's try alternative regex for nav-flex block
            pattern2 = r'<div class="container nav-flex">.*?</nav>'
            new_content = re.sub(pattern2, '', content, flags=re.DOTALL)
            # also check if there is an unclosed old hero block right after
            pattern3 = r'<!-- STATE HERO -->\s*<div class="container">\s*<div class="breadcrumb">.*?</div>\s*<h1 class="hero-title">.*?</h1>\s*<p class="hero-desc">.*?</p>\s*<div class="hero-meta-grid">.*?</div>\s*</div>'
            new_content = re.sub(pattern3, '', new_content, flags=re.DOTALL)
            if new_content != content:
                with open(filepath, "w", encoding="utf-8") as f:
                    f.write(new_content)
                fixed_count += 1
                audit_results.append(f"Fixed pattern2/3 in {filename}")

print(f"Total files scanned: {len(html_files)}")
print(f"Total files fixed: {fixed_count}")
for res in audit_results:
    print(res)
