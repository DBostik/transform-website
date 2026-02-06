#!/usr/bin/env python3
"""
Transform Personal Training - WordPress Media Library Scraper
Downloads images by finding them in the WordPress uploads directory structure
"""

import os
import requests
from bs4 import BeautifulSoup
from urllib.parse import urljoin, urlparse
import time
from pathlib import Path
import re

def scrape_wordpress_images(base_url, output_dir="transform_images_v2"):
    """
    Scrape images from WordPress site by analyzing page source
    and finding all wp-content/uploads URLs
    """
    
    print("🚀 Transform Personal Training - WordPress Media Scraper v2")
    print("=" * 60)
    print(f"Website: {base_url}")
    print(f"Output directory: {output_dir}")
    print("=" * 60)
    print()
    
    # Create output directory
    Path(output_dir).mkdir(exist_ok=True)
    
    # Track found images
    image_urls = set()
    
    print("📡 Scanning website HTML source for WordPress media URLs...")
    print()
    
    # Pages to scan
    pages_to_scan = [
        "",  # Homepage
        "/studio-services/",
        "/online-training/",
        "/success-stories/",
        "/meet-the-team/",
        "/contact/",
        "/blog/",
        "/join-the-team/",
    ]
    
    # Scan each page
    for page in pages_to_scan:
        url = urljoin(base_url, page)
        try:
            print(f"  Scanning: {url}")
            response = requests.get(url, timeout=15)
            html = response.text
            
            # Find all wp-content/uploads URLs in the HTML
            # This regex finds URLs in the WordPress uploads directory
            pattern = r'https?://[^"\s]+/wp-content/uploads/[^"\s]+\.(?:jpg|jpeg|png|gif|webp|svg)'
            found_urls = re.findall(pattern, html, re.IGNORECASE)
            
            for img_url in found_urls:
                # Clean up URL (remove query strings, size suffixes)
                clean_url = img_url.split('?')[0]
                # Remove WordPress size suffixes like -150x150, -300x200, etc.
                clean_url = re.sub(r'-\d+x\d+\.', '.', clean_url)
                image_urls.add(clean_url)
            
            print(f"    Found {len(found_urls)} image references")
            time.sleep(0.5)
            
        except Exception as e:
            print(f"  ⚠️  Error scanning {url}: {e}")
    
    print()
    print(f"✅ Found {len(image_urls)} unique images")
    print()
    
    if len(image_urls) == 0:
        print("❌ No images found. This could mean:")
        print("   - Images are loaded via JavaScript (Elementor)")
        print("   - Images are protected or require authentication")
        print("   - Site structure is different than expected")
        print()
        print("💡 Recommendation: Use the WordPress plugin method instead:")
        print("   1. Install 'Export Media URLs' plugin")
        print("   2. Or download via Hostinger File Manager:")
        print("      public_html/wp-content/uploads/")
        return
    
    print("📥 Downloading images...")
    print()
    
    downloaded = 0
    failed = 0
    
    # Download each image
    for i, img_url in enumerate(sorted(image_urls), 1):
        try:
            # Get filename from URL
            parsed = urlparse(img_url)
            filename = os.path.basename(parsed.path)
            
            # Download image
            print(f"  [{i}/{len(image_urls)}] {filename[:50]}...")
            response = requests.get(img_url, timeout=15)
            
            if response.status_code == 200:
                # Save image
                output_path = os.path.join(output_dir, filename)
                with open(output_path, 'wb') as f:
                    f.write(response.content)
                downloaded += 1
            else:
                print(f"      ⚠️  HTTP {response.status_code}")
                failed += 1
            
            time.sleep(0.3)  # Be polite
            
        except Exception as e:
            print(f"      ⚠️  Error: {e}")
            failed += 1
    
    print()
    print("=" * 60)
    print("✅ Download Complete!")
    print("=" * 60)
    print(f"📁 Location: {os.path.abspath(output_dir)}")
    print(f"📊 Successfully downloaded: {downloaded} images")
    if failed > 0:
        print(f"⚠️  Failed: {failed} images")
    print()
    print("Next steps:")
    print("1. Open the folder and review images")
    print("2. Delete duplicates or unwanted images")
    print("3. Organize into folders:")
    print("   - trainers/")
    print("   - testimonials/")
    print("   - studio/")
    print("   - transformations/")
    print("   - other/")
    print()

if __name__ == "__main__":
    base_url = "https://www.transformpersonaltraining.com"
    scrape_wordpress_images(base_url)
