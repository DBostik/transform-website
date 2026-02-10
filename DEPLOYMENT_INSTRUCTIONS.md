# Deployment Instructions for Transform Personal Training

## 1. Prerequisites
- **Production Build**: The `dist/` folder in your project root contains the production-ready website.
- **Hostinger Access**: Login to your Hostinger File Manager in control panel.

## 2. Prepare for Upload
1. Locate the `dist` folder in your project directory: `/Users/davebostik/Desktop/Transform Website/dist`
2. (Optional but recommended) Zip the contents of the `dist` folder into a single file named `dist.zip`. This makes uploading faster.

## 3. Hostinger Deployment (Blue/Green Method)
This method ensures **Zero Downtime**. We will upload the new site to a temporary directory, then perform an "atomic swap".

### Step 1: Upload New Build
1. Open Hostinger File Manager and navigate to `domains/transformpersonaltraining.com/`. You should see `public_html` in the file list. **DO NOT GO INSIDE IT.**
2. Create a **new folder** named `public_html_new` (right next to the existing `public_html`).
3. **Double Click** into `public_html_new` so you are inside it.
4. Upload the **CONTENTS** of your `dist` folder here.
   - **Do NOT** upload the `dist` folder itself. You want the *files* inside it.
   - **Do NOT** upload the `public` folder.
   - If you zipped the `dist` folder, upload `dist.zip`, extract it, and make sure the files (`index.html`, `_astro`, etc.) are sitting directly in `public_html_new`.

### Step 2: Swap Folders (Go Live)
1. Locate your current live folder: `public_html`.
2. **Rename** `public_html` to `public_html_backup_DATE` (e.g., `public_html_backup_2024_05_20`).
   - *The site is momentarily offline, but this step is instant.*
3. Immediately **Rename** `public_html_new` to `public_html`.
   - *The new site is now LIVE.*

### Step 3: Cleanup (Optional)
- Once you confirm the new site is working perfectly, you can delete the old `public_html_backup...` folder.

## 4. Post-Launch Checklist
After the swap, verify the following on the live site:

- [ ] **Homepage**: Loads correctly and looks as expected.
- [ ] **Sitemap**: Visit `https://transformpersonaltraining.com/sitemap.xml`. ensure it loads the XML file.
- [ ] **Forms**: Test the "Contact Us" or "Lead" forms to ensure submissions work.
- [ ] **Mobile**: Check the site on your phone to verify responsiveness.
- [ ] **SSL**: Ensure the lock icon appears in the browser address bar (https).
- [ ] **Internal Links**: Click a few menu items (e.g., Blog, Services) to ensure no 404 errors.

> **Note on Sitemap**: Use `sitemap.xml` for your sitemap submission to Google Search Console. The generic `sitemap-index.xml` was skipped in favor of the manually curated `sitemap.xml` which contains all recent posts.
