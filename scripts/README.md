# Image Extraction Scripts - Quick Start Guide

I've created **two automated scripts** to download all images from your website. Choose whichever is easier for you!

---

## 🚀 Quick Start - Choose Your Method

### **Method 1: Python Script** ⭐ **RECOMMENDED**
**Best if:** You have Python installed (most Macs do)

```bash
# Navigate to project folder
cd "/Users/davebostik/Desktop/Transform Website"

# Run the Python script
python3 scripts/download_images.py
```

**What it does:**
- Scans all pages of your website
- Finds all images
- Downloads them to `transform_images/` folder
- Shows progress as it downloads
- Takes about 2-5 minutes

---

### **Method 2: Bash Script (wget)**
**Best if:** You prefer command-line tools

```bash
# Navigate to project folder
cd "/Users/davebostik/Desktop/Transform Website"

# Run the bash script
./scripts/download_images.sh
```

**What it does:**
- Downloads all images from your website
- Saves to `transform_images/` folder
- Faster but less organized

---

## 📋 Step-by-Step Instructions

### For Python Script (Recommended):

1. **Open Terminal** (Applications → Utilities → Terminal)

2. **Copy and paste this command:**
   ```bash
   cd "/Users/davebostik/Desktop/Transform Website" && python3 scripts/download_images.py
   ```

3. **Press Enter**

4. **Wait 2-5 minutes** while it downloads

5. **Done!** All images will be in the `transform_images/` folder

---

### For Bash Script:

1. **Open Terminal**

2. **Copy and paste this command:**
   ```bash
   cd "/Users/davebostik/Desktop/Transform Website" && ./scripts/download_images.sh
   ```

3. **Press Enter**

4. **Wait a few minutes**

5. **Done!** Images in `transform_images/` folder

---

## 🔧 Troubleshooting

### "Python not found" or "wget not found"
If you get an error, install the missing tool:

**Install wget (if needed):**
```bash
brew install wget
```

**Install Python dependencies (if needed):**
```bash
pip3 install requests beautifulsoup4
```

**Don't have Homebrew?** Install it:
```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

---

## 📁 What You'll Get

After running either script, you'll have a folder called `transform_images/` containing all the images from your website.

**Next steps:**
1. Open the `transform_images/` folder
2. Review all the images
3. Create subfolders and organize:
   - `trainers/` - Trainer photos
   - `testimonials/` - Client photos
   - `studio/` - Studio interior
   - `transformations/` - Before/after photos
   - `delete/` - Images you don't want

---

## 🎯 Alternative: Use a Plugin Instead

If the scripts don't work or you prefer using WordPress, go back to the plugins you found:

**Best plugin from your screenshot:**
- **"Export Media URLs"** (2nd row, 3rd plugin with the badge icon)
- Install it
- Go to Media → Export Media URLs
- Download the CSV
- Use the URLs to batch download

---

## ❓ Which Method Should I Use?

| Method | Pros | Cons | Best For |
|--------|------|------|----------|
| **Python Script** | Smart, organized, shows progress | Needs Python + libraries | Most people |
| **Bash Script** | Fast, simple | Less organized | Command-line users |
| **WordPress Plugin** | No terminal needed | Requires WordPress access | Non-technical users |

**My recommendation:** Try the Python script first. If it doesn't work, use a WordPress plugin.

---

## 🆘 Need Help?

Just let me know if:
- You get any error messages
- The scripts don't work
- You need help organizing the images
- You want me to try a different approach

I'm here to help! 🚀

