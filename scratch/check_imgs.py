import re

pages = ['france.html', 'italy.html', 'switzerland.html', 'austria.html', 'pakistan.html', 'country.html']

for page in pages:
    print(f"=== {page} ===")
    try:
        content = open(page, 'r', encoding='utf-8').read()
        matches = re.findall(r'<img[^>]+src=["\']([^"\']+)["\']', content)
        for m in matches:
            print("  ", m)
    except Exception as e:
        print(" Error:", e)
