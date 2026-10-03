import os, glob

target_dir = r"d:\livepass"
extensions = ['*.html', '*.xml', '*.txt', '*.js', '*.ts', '*.json', '*.mjs']

count_files = 0
count_replacements = 0

for ext in extensions:
    for filepath in glob.glob(os.path.join(target_dir, ext)):
        try:
            with open(filepath, 'r', encoding='utf-8') as f:
                content = f.read()
            
            new_content = content.replace("https://livepasswatch.com/", "https://www.livepasswatch.info/")
            new_content = new_content.replace("https://livepasswatch.com", "https://www.livepasswatch.info")
            new_content = new_content.replace("http://livepasswatch.com/", "https://www.livepasswatch.info/")
            new_content = new_content.replace("http://livepasswatch.com", "https://www.livepasswatch.info")
            new_content = new_content.replace("livepasswatch.com", "livepasswatch.info")
            
            if content != new_content:
                with open(filepath, 'w', encoding='utf-8') as f:
                    f.write(new_content)
                count_files += 1
                print(f"Updated: {os.path.basename(filepath)}")
        except Exception as e:
            print(f"Error processing {filepath}: {e}")

print(f"\nDone! Updated {count_files} files.")
