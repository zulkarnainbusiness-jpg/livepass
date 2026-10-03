import os

files = os.listdir('IMAGE')
print("All files in IMAGE folder:")
for f in sorted(files):
    if any(ext in f.lower() for ext in ['.png', '.jpg', '.jpeg', '.webp']):
        print(" -", f)
