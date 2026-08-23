# Ramanan P. — AI & Machine Learning Portfolio

Production-ready AI & ML Portfolio built with React, Vite, Tailwind CSS, and Motion.

## 🚀 Deploy to Vercel

You can deploy this portfolio to **Vercel** in 2 simple ways:

---

### Option 1: Direct GitHub Integration (Recommended)

1. **Export to GitHub**:
   - In Google AI Studio Build, click the **Settings / Export** icon in the top right corner.
   - Choose **Export to GitHub** (or download as **ZIP** and push to your GitHub account).
2. **Import into Vercel**:
   - Go to [vercel.com](https://vercel.com) and log in.
   - Click **"Add New..."** > **"Project"**.
   - Select your GitHub repository (`ramanan-portfolio` or your repo name).
3. **Configure & Deploy**:
   - Framework Preset: **Vite** (auto-detected via `vercel.json`).
   - Build Command: `npm run build` (auto-detected).
   - Output Directory: `dist` (auto-detected).
   - Click **"Deploy"**.

Your live URL will be ready in seconds (e.g., `https://ramanan-portfolio.vercel.app`)!

---

### Option 2: Deploy with Vercel CLI

If you have the code downloaded on your local machine:

```bash
# 1. Install Vercel CLI (if not already installed)
npm install -g vercel

# 2. Login to Vercel
vercel login

# 3. Deploy
vercel --prod
```

---

## 🛠️ Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```
