# GitHub Pages Deployment Setup

Your code has been pushed to GitHub! Now you need to complete the deployment setup.

## ✅ What's Already Done

- ✓ Repository created at https://github.com/ValentinBauza/vicarslibrary
- ✓ Code pushed to main branch
- ✓ GitHub Actions workflow configured (`.github/workflows/deploy.yml`)
- ✓ Vite configured for GitHub Pages with base path `/vicarslibrary/`

## 🔧 Required Manual Steps

### 1. Add Password Hash as GitHub Secret

The deployment workflow needs the password hash to build the site.

1. Go to: https://github.com/ValentinBauza/vicarslibrary/settings/secrets/actions

2. Click **"New repository secret"**

3. Add the secret:
   - **Name**: `VITE_PASSWORD_HASH`
   - **Value**: `45bd527b4fea7541d0861f6573003a234fe2d0909c9806720f4d95b47dc3682d`
   
4. Click **"Add secret"**

### 2. Enable GitHub Pages

1. Go to: https://github.com/ValentinBauza/vicarslibrary/settings/pages

2. Under **"Build and deployment"**:
   - **Source**: Select **"GitHub Actions"**

3. Save the settings

### 3. Trigger the Deployment

The site should automatically deploy when you:
- Push to the main branch, OR
- Go to: https://github.com/ValentinBauza/vicarslibrary/actions
- Click on the **"Deploy to GitHub Pages"** workflow
- Click **"Run workflow"** → **"Run workflow"**

## 📱 After Deployment

Your site will be live at:

**https://valentinbauza.github.io/vicarslibrary/**

## 🔄 Future Deployments

Every time you push to the `main` branch, GitHub Actions will automatically:
1. Build the site
2. Deploy to GitHub Pages
3. Update the live site

No manual intervention needed!

## 🐛 Troubleshooting

If the deployment fails:

1. **Check GitHub Actions logs**:
   - Go to https://github.com/ValentinBauza/vicarslibrary/actions
   - Click on the failed workflow run
   - Review the error messages

2. **Common issues**:
   - Password hash secret not set → Add it in repository secrets
   - GitHub Pages not enabled → Enable it in settings
   - Build errors → Check the build logs for specific errors

## 📝 Notes

- The password for the site is: **Vicar**
- This is stored as a SHA-256 hash in the GitHub secret
- The `.env` file is NOT pushed to GitHub (it's gitignored)
- The site uses the environment variable from GitHub Actions during build
