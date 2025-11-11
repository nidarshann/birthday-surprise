# Birthday Site - Deploy Instructions (Ready-to-deploy)

This project has been prepared for deployment to Vercel (recommended) or Netlify.
A basic-auth Edge Middleware file `middleware.ts` has been added to protect the root page.

## Credentials (change before sharing)
- Username: guest
- Password: surprise123

Change `middleware.ts` if you want a different username/password.

---

## Quick deploy to Vercel (recommended)

1. Make sure you have a GitHub repository and pushed this project.
   ```bash
   git init
   git add .
   git commit -m "prepare for vercel deploy with basic auth middleware"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<repo>.git
   git push -u origin main
   ```

2. On Vercel:
   - Sign in at https://vercel.com
   - Click "Add New Project" → Import Git Repository → choose this repo
   - Vercel auto-detects Next.js. Use defaults.
   - Deploy. The site will be available at: https://<project-name>.vercel.app

3. Test
   - Visit site; browser will prompt for credentials. Use the credentials above.

---

## If you prefer Netlify
Netlify supports Next.js but some features (like Middleware) may not work the same. Vercel is recommended.

---

## Notes
- If you want to hide credentials from source code, you can implement a cookie-based secret page or use Vercel Protect (paid).
- If audio autoplay doesn't work on some mobile devices, consider using a visible play button or an initial click interaction.

