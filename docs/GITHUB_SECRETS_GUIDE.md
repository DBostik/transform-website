# How to Retrieve FTP Credentials & Set Up GitHub Secrets

To enable automated deployment, we need to give GitHub permission to upload files to your Hostinger account. We do this securely using "**Secrets**".

## Part 1: Get Your FTP Details from Hostinger

1.  Log in to your **Hostinger Dashboard**.
2.  Click on **Hosting** -> **Manage** (next to `transformpersonaltraining.com`).
3.  On the left sidebar, look for **Files** -> **FTP Accounts**.
4.  You will see your "Main FTP Account".
    *   **FTP Host**: (Usually something like `ftp.transformpersonaltraining.com` or an IP address).
    *   **FTP Username**: (Usually `u123456789`).
    *   **FTP Password**: This is the same password you use to log in to the Hostinger dashboard (or you can click "Change Password" here to create a specific one for FTP).

> **Write these down (or keep the tab open).**
> *   Host
> *   Username
> *   Password

## Part 2: Add Secrets to GitHub

1.  Go to your GitHub Repository: `https://github.com/DaveBostik/Transform-Website` (or your specific repo URL).
2.  Click **Settings** (Top right tab).
3.  On the left sidebar, under **Security**, click **Secrets and variables** -> **Actions**.
4.  Click the green button: **New repository secret**.

You need to add **3 Secrets** one by one:

### Secret 1
*   **Name**: `FTP_SERVER`
*   **Secret**: (Paste your **FTP Host** here, e.g., `ftp.transformpersonaltraining.com`)
*   Click **Add secret**.

### Secret 2
*   **Name**: `FTP_USERNAME`
*   **Secret**: (Paste your **FTP Username** here, e.g., `u123456789`)
*   Click **Add secret**.

### Secret 3
*   **Name**: `FTP_PASSWORD`
*   **Secret**: (Paste your **FTP Password** here)
*   Click **Add secret**.

## Part 3: Trigger the First Deployment

1.  Once the secrets are added, tell me "Done!".
2.  I will push a small change to the `main` branch.
3.  GitHub will see the new code and the new Secrets, and it will automatically deploy the site!
