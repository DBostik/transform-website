
import os
import glob
import re

blog_dir = 'src/content/blog'
files = glob.glob(os.path.join(blog_dir, '*.md'))

count = 0
for file_path in files:
    with open(file_path, 'r') as f:
        content = f.read()
    
    # Replace .png or .jpg with .webp in the image: frontmatter field
    # Regex to match image: "..." line
    new_content = re.sub(r'(image:\s*"[^"]+)\.(png|jpg|jpeg|PNG|JPG|JPEG)"', r'\1.webp"', content)
    
    if content != new_content:
        with open(file_path, 'w') as f:
            f.write(new_content)
        count += 1
        print(f"Updated {file_path}")

print(f"Total files updated: {count}")
