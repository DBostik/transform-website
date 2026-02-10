# Website Owner's Manual: Transform Personal Training

## 1. How Your Website Updates Now (The "Easy" Way)
We have set up **Automated Deployment via Hostinger Git**. This means you never have to log into Hostinger to manually upload files.

**The New Process:**
1.  **Ask for a Change:** You ask me (your AI assistant) to make a change.
2.  **AI Does the Work:** I write the code and save it.
3.  **Build & Launch:** I will run a special command (`npm run build`) to package the site.
4.  **Automatic Launch:** Once I "push" this package to GitHub, Hostinger instantly detects it and updates the live site.

**It takes about 30-60 seconds for a change to go live.**

---

## 2. Managing Content

### Adding a Blog Post
1.  Tell me the Title, Content, and any specific images you want.
2.  I will create a new file in `src/content/blog/`.
3.  I will verify it looks good locally.
4.  I will run the build command and push the change.
5.  It will be live in under a minute.

### Changing Text or Images
Just tell me what needs to change.
*   **Text:** "Change the headline on the homepage to X."
*   **Images:** "Swap the hero image with this new one."

---

## 3. Important Links
*   **Live Website:** [https://transformpersonaltraining.com](https://transformpersonaltraining.com)
*   **GitHub Repository:** [https://github.com/DBostik/Transform-Website](https://github.com/DBostik/Transform-Website)
*   **Deployment Status:** Check your **Hostinger Dashboard > Git** to see the history of updates.

---

## 4. Troubleshooting

### "I don't see my changes yet!"
1.  **Wait 1 minute.** The automation is fast but not instant.
2.  **Clear your Browser Cache:** Open the site in an Incognito/Private window.
3.  **Check Hostinger Dashboard:** Go to Git Settings and look at the "Latest Deployment" timestamp.
    *   If it says "Just now", it worked.
    *   If the timestamp is old, click **"Deploy"** manually to force it.

### "The formatting looks weird / broken."
This is usually a **Caching Issue** (your browser remembering the old style).
1.  Try `Ctrl + Shift + R` (Windows) or `Cmd + Shift + R` (Mac) to force-refresh.
2.  Check in Incognito/Private mode.

---

## 5. Backups
Your code is safely stored in **GitHub**. This is your primary backup. Even if Hostinger deleted everything tomorrow, we could rebuild the entire site from GitHub in minutes.
