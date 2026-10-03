import os
import glob
import re

html_files = glob.glob("d:/livepass/*.html")

fixed_count = 0

for file_path in html_files:
    with open(file_path, "r", encoding="utf-8") as f:
        content = f.read()

    new_content = content

    # Replace white gradient overlay in prefers-color-scheme dark with dark green gradient overlay
    old_white_gradient = "linear-gradient(rgba(255, 255, 255, 0.94), rgba(255, 255, 255, 0.94))"
    new_dark_gradient = "linear-gradient(rgba(13, 56, 30, 0.82), rgba(13, 56, 30, 0.92))"

    if old_white_gradient in content:
        new_content = new_content.replace(old_white_gradient, new_dark_gradient)
        fixed_count += 1
        with open(file_path, "w", encoding="utf-8") as f:
            f.write(new_content)
        print(f"Fixed {os.path.basename(file_path)}")

print(f"Done! Fixed white gradient bug in {fixed_count} HTML files.")
