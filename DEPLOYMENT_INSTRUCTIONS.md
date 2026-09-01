# Deployment Instructions for Transform Personal Training

## 1. Overview
This project uses an automated deployment pipeline via Hostinger's Git Webhook integration. Hostinger does **not** build the site; it simply serves the `dist/` folder exactly as it is checked into the `main` branch. 

Because of this, the compiled `dist/` directory **MUST** be checked into Git. The project uses a **husky pre-commit hook** to enforce this by automatically running `npm run build` and staging the `dist/` output whenever you commit.

## 2. The Deployment Process (For AI Agents & Developers)

Follow these steps exactly to deploy changes to the live site. Do **not** bypass Git hooks (`--no-verify`) and do **not** force push.

### Step 1: Clean Environment (Crucial for AI Agents)
If previous commits failed or hung, you may have a stuck lockfile or iCloud duplicate artifacts. Clear them first:
```bash
rm -f .git/index.lock
find dist .git -type f \( -name "* 2" -o -name "* 2.*" -o -name "* 3" -o -name "* 3.*" \) -print0 2>/dev/null | xargs -0 rm -f
```

*Note: iCloud also drops duplicates INSIDE `.git` (like `refs/heads/main 2`), which breaks pull and push with "bad object" errors. The command above cleans those too, and it handles the spaces in these filenames (a plain `xargs rm` does not).*

### Step 2: Stage Your Changes
Stage the source files you have modified (e.g., in `src/`, `docs/`, `public/`). 
```bash
git add src/content/blog/YOUR_POST.md
```

### Step 3: Commit (CRITICAL: Disable Telemetry)
Astro sometimes prompts for telemetry data during builds. In non-interactive terminal environments (like AI agent sessions), this prompt causes the pre-commit hook to hang indefinitely, resulting in a timeout and a stuck `.git/index.lock`.

You **must** disable telemetry and update checks when committing:
```bash
export ASTRO_TELEMETRY_DISABLED=1 ASTRO_DISABLE_UPDATE_CHECK=true && git commit -m "Your commit message"
```
*Note: Wait for this command to finish. The husky hook will build all pages (approx. 97) and automatically stage the `dist/` directory into your commit.*

### Step 4: Push to GitHub
Once the commit finishes and the build is successful, push the code to `main`.
```bash
git push origin main
```

### Step 5: Live Verification
Pushing to the `main` branch automatically triggers the Hostinger webhook. The live site will instantly pull the new `dist/` folder and perform a zero-downtime update. Wait a few seconds, then verify the changes are live on `https://transformpersonaltraining.com`.

## 3. Post-Launch Checklist
After the automated deploy, verify the following:
- [ ] **Homepage**: Loads correctly and looks as expected.
- [ ] **Sitemap**: Visit `https://transformpersonaltraining.com/sitemap.xml`.
- [ ] **Forms**: Test the forms (GHL embeds) to ensure they load properly.
- [ ] **Mobile**: Check the site on mobile devices for responsiveness.
- [ ] **Internal Links**: Check navigation to ensure no 404 errors.
