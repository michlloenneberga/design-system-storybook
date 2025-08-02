# Deployment Guide: Publishing Storybook to GitHub Pages

This guide will walk you through the process of publishing your Design System Storybook to GitHub Pages.

## Prerequisites

1. **GitHub Account**: You need a GitHub account
2. **Git Installed**: Git should be installed on your system (✅ Already done)
3. **Node.js**: Node.js should be installed (✅ Already done)

## Step 1: Create a GitHub Repository

1. Go to [GitHub.com](https://github.com) and sign in
2. Click the "+" icon in the top right corner and select "New repository"
3. Name your repository (e.g., `design-system-storybook`)
4. Make it **Public** (required for GitHub Pages)
5. **Don't** initialize with README, .gitignore, or license (we already have these)
6. Click "Create repository"

## Step 2: Connect Your Local Repository to GitHub

After creating the repository, GitHub will show you commands. Run these in your terminal:

```bash
# Add the remote repository (replace YOUR_USERNAME and REPO_NAME)
git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git

# Push your code to GitHub
git branch -M main
git push -u origin main
```

## Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on "Settings" tab
3. Scroll down to "Pages" section (in the left sidebar)
4. Under "Source", select "GitHub Actions"
5. This will use the workflow we already created in `.github/workflows/deploy.yml`

## Step 4: Trigger the First Deployment

The deployment will automatically trigger when you push to the main branch. If you want to trigger it manually:

1. Go to your repository on GitHub
2. Click on "Actions" tab
3. You should see the workflow running or completed

## Step 5: Access Your Published Storybook

Once the deployment is complete:

1. Go to your repository settings
2. Scroll down to "Pages" section
3. You'll see a URL like: `https://YOUR_USERNAME.github.io/REPO_NAME`

## File Structure Overview

```
Storybook/
├── .github/workflows/deploy.yml    # GitHub Actions workflow
├── src/
│   ├── components/                 # React components
│   ├── styles/                     # Design tokens
│   └── utils/                      # Utility functions
├── .storybook/                     # Storybook configuration
├── package.json                    # Dependencies and scripts
└── README.md                       # Project documentation
```

## Components Included

- **Button**: Multiple variants (primary, secondary, outline, ghost)
- **Input**: Text input with validation states
- **Card**: Flexible card component with elevation
- **Slider**: Interactive range slider with size variants

## Design System Features

- **TypeScript Support**: Fully typed components
- **Design Tokens**: Consistent colors, spacing, typography
- **Responsive Design**: Mobile-first approach
- **Accessibility**: WCAG compliant components
- **Interactive Documentation**: Live examples in Storybook

## Troubleshooting

### If the deployment fails:

1. Check the GitHub Actions logs for errors
2. Ensure all dependencies are properly installed
3. Verify the workflow file is correct
4. Make sure the repository is public

### If the page doesn't load:

1. Wait a few minutes for GitHub Pages to build
2. Check the repository settings for the correct URL
3. Ensure the main branch is selected as source

## Next Steps

After successful deployment:

1. **Customize**: Update the README.md with your specific information
2. **Add Components**: Continue building your design system
3. **Documentation**: Add more stories and documentation
4. **CI/CD**: The workflow will automatically deploy on every push to main

## Support

If you encounter issues:

1. Check the GitHub Actions logs
2. Verify all files are committed and pushed
3. Ensure the repository is public
4. Check GitHub Pages settings

---

**Note**: The deployment process typically takes 2-5 minutes for the first build, and 1-2 minutes for subsequent updates. 