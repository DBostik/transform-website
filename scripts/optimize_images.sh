#!/bin/bash

# Directory to search
SEARCH_DIR="public/images"

# Check if cwebp is installed
if ! command -v cwebp &> /dev/null; then
    echo "Error: cwebp is not installed."
    exit 1
fi

echo "Starting image optimization..."

# Find all images (jpg, jpeg, png)
find "$SEARCH_DIR" -type f \( -iname "*.jpg" -o -iname "*.jpeg" -o -iname "*.png" \) | while read -r file; do
    # Get the directory and filename without extension
    dir=$(dirname "$file")
    filename=$(basename "$file")
    name="${filename%.*}"
    
    # Define output webp file path
    output="${dir}/${name}.webp"
    
    # Check if webp already exists (optional: modify to overwrite or skip)
    if [ ! -f "$output" ]; then
        echo "Converting: $file -> $output"
        cwebp -q 80 "$file" -o "$output" -quiet
    else
        echo "Skipping (already exists): $output"
    fi
done

echo "Image optimization complete."
