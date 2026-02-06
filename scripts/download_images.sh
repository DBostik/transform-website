#!/bin/bash

# Transform Personal Training - Image Extraction Script
# This script downloads all images from your website

echo "🚀 Starting image extraction from transformpersonaltraining.com..."
echo ""

# Create directory for downloaded images
mkdir -p transform_images
cd transform_images

echo "📥 Downloading all images (JPG, PNG, GIF, WebP)..."
echo "This may take a few minutes depending on how many images you have."
echo ""

# Download all images from the website
# --recursive: Download recursively
# --no-parent: Don't ascend to parent directory
# --accept: Only download these file types
# --domains: Only download from this domain
# --no-directories: Save all files in one directory (easier to sort)
# --adjust-extension: Add proper file extensions
# --convert-links: Convert links for local viewing
# --page-requisites: Get images needed to display pages

wget \
  --recursive \
  --level=inf \
  --no-parent \
  --accept jpg,jpeg,png,gif,webp,svg \
  --domains transformpersonaltraining.com \
  --no-directories \
  --adjust-extension \
  --execute robots=off \
  --user-agent="Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36" \
  https://www.transformpersonaltraining.com/

echo ""
echo "✅ Download complete!"
echo ""
echo "📁 All images have been saved to: $(pwd)"
echo ""
echo "Next steps:"
echo "1. Review the downloaded images"
echo "2. Delete any you don't want to keep"
echo "3. Organize into folders (trainers, testimonials, studio, etc.)"
echo ""
echo "Total images downloaded: $(ls -1 | wc -l)"
