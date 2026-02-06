#!/usr/bin/env python3
"""
Transform Personal Training - Image Downloader
Downloads all images from the website and organizes them
"""

import os
import requests
from bs4 import BeautifulSoup
from urllib.parse import urljoin, urlparse
import time
from pathlib import Path

def download_images_from_site(base_url, output_dir="transform_images"):
    """Download all images from the Transform Personal Training website"""
    
    print("🚀 Transform Personal Training - Image Downloader")
    print("=" * 60)
    print(f"Website: {base_url}")
    print(f"Output directory: {output_dir}")
    print("=" * 60)
    print()
    
    # Create output directory
    Path(output_dir).mkdir(exist_ok=True)
    
    # Track downloaded images
    downloaded = set()
    image_urls = set()
    
    # Common image extensions
    image_extensions = {'.jpg', '.jpeg', '.png', '.gif', '.webp', '.svg'}
    
    print("📡 Scanning website for images...")
    
    # Pages to scan
    pages_to_scan = [
        "",  # Homepage
        "/studio-services/",
        "/online-training/",
        "/success-stories/",
        "/meet-the-team/",
        "/contact/",
        "/blog/",
    ]
    
    # Scan each page for images
    for page in pages_to_scan:
        url = urljoin(base_url, page)
        try:
            print(f"  Scanning: {url}")
            response = requests.get(url, timeout=10)
            soup = BeautifulSoup(response.content, 'html.parser')
            
            # Find all img tags
            for img in soup.find_all('img'):
                src = img.get('src') or img.get('data-src')
                if src:
                    full_url = urljoin(base_url, src)
                    # Check if it's an image
                    parsed = urlparse(full_url)
                    ext = os.path.splitext(parsed.path)[1].lower()
                    if ext in image_extensions:
                        image_urls.add(full_url)
            
            time.sleep(0.5)  # Be polite, don't hammer the server
            
        except Exception as e:
            print(f"  ⚠️  Error scanning {url}: {e}")
    
    print()
    print(f"✅ Found {len(image_urls)} unique images")
    print()
    print("📥 Downloading images...")
    
    # Download each image
    for i, img_url in enumerate(image_urls, 1):
        try:
            # Get filename from URL
            filename = os.path.basename(urlparse(img_url).path)
            if not filename:
                filename = f"image_{i}.jpg"
            
            # Download image
            print(f"  [{i}/{len(image_urls)}] {filename}")
            response = requests.get(img_url, timeout=10)
            
            # Save image
            output_path = os.path.join(output_dir, filename)
            with open(output_path, 'wb') as f:
                f.write(response.content)
            
            downloaded.add(filename)
            time.sleep(0.3)  # Be polite
            
        except Exception as e:
            print(f"  ⚠️  Error downloading {img_url}: {e}")
    
    print()
    print("=" * 60)
    print("✅ Download Complete!")
    print("=" * 60)
    print(f"📁 Location: {os.path.abspath(output_dir)}")
    print(f"📊 Downloaded: {len(downloaded)} images")
    print()
    print("Next steps:")
    print("1. Review the downloaded images")
    print("2. Delete any you don't want")
    print("3. Organize into folders:")
    print("   - trainers/")
    print("   - testimonials/")
    print("   - studio/")
    print("   - transformations/")
    print("   - other/")
    print()

if __name__ == "__main__":
    base_url = "https://www.transformpersonaltraining.com"
    download_images_from_site(base_url)
