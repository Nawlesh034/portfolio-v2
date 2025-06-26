# 🚀 Deploy Your Portfolio to GitHub Pages

## Step 1: Create GitHub Repository
1. Go to [GitHub.com](https://github.com) and sign in
2. Click "+" → "New repository"
3. Repository name: `portfolio-v2` (or your preferred name)
4. Set to **Public**
5. **Don't** check "Initialize with README"
6. Click "Create repository"

## Step 2: Connect Local Repository to GitHub
Replace `YOUR_USERNAME` with your actual GitHub username:

```bash
git remote add origin https://github.com/YOUR_USERNAME/portfolio-v2.git
git push -u origin main
```

## Step 3: Enable GitHub Pages
1. Go to your repository on GitHub
2. Click "Settings" tab
3. Scroll down to "Pages" in the left sidebar
4. Under "Source", select "Deploy from a branch"
5. Select branch: **main**
6. Select folder: **/ (root)**
7. Click "Save"

## Step 4: Access Your Live Website
After 2-3 minutes, your site will be available at:
```
https://YOUR_USERNAME.github.io/portfolio-v2/
```

## Alternative: Use Your Existing Repository
If you want to use your existing portfolio repository (`Nawlesh034/portfolio`):

```bash
git remote add origin https://github.com/Nawlesh034/portfolio.git
git push -u origin main
```

Your site would then be available at:
```
https://nawlesh034.github.io/portfolio/
```

## Quick Commands Summary
```bash
# After creating GitHub repository, run these commands:
git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git
git push -u origin main
```

## Troubleshooting
- If you get authentication errors, you may need to use a Personal Access Token
- Make sure your repository is public for GitHub Pages to work on free accounts
- It may take a few minutes for changes to appear on the live site

## Future Updates
To update your portfolio:
```bash
git add .
git commit -m "Update portfolio"
git push
```

Changes will automatically deploy to GitHub Pages!
