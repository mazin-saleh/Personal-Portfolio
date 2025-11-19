# 🎯 QUICK START GUIDE

## ⚠️ CRITICAL: Node.js Version Issue

Your current Node version (v16.15.1) is **too old** for this project. Vite 7 requires Node.js 20+.

## 🔧 Fix Node Version (Choose ONE method)

### Method 1: Using nvm (Recommended - macOS/Linux)

```bash
# Run the automated setup script
cd frontend
chmod +x setup.sh
./setup.sh
```

OR manually:

```bash
# Install nvm if you don't have it
curl -fsSL https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.4/install.sh | bash

# Restart terminal or run:
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"

# Install and use Node 20
nvm install 20
nvm use 20
nvm alias default 20

# Verify
node -v  # Should show v20.x.x
```

### Method 2: Using Homebrew (macOS)

```bash
brew update
brew upgrade node
node -v  # Should show v20+ or v22+
```

### Method 3: Download from nodejs.org

Download the LTS installer from https://nodejs.org and run it.

---

## 🚀 Once Node is Updated

```bash
cd frontend

# Install dependencies
npm install

# Start development server
npm run dev
```

Open http://localhost:5173 in your browser!

---

## 📝 Customize Your Portfolio

### 1. Update Personal Data (REQUIRED)

Edit `src/data/portfolio.ts`:

```typescript
export const personalInfo = {
  name: 'Your Name',                    // ← Change this
  title: 'Your Title',                   // ← Change this
  email: 'your.email@example.com',      // ← Change this
  phone: '+1 (555) 123-4567',           // ← Change this
  location: 'Your City, State',         // ← Change this
  bio: 'Your bio here...',              // ← Change this
  resumeUrl: '/resume.pdf',
}
```

Update ALL sections in this file:
- `socialLinks` - Your GitHub, LinkedIn, Twitter, Email
- `skills` - Your technical skills
- `services` - What you offer
- `experience` - Your work history
- `projects` - Your portfolio projects
- `testimonials` - Testimonials from clients/colleagues

### 2. Update SEO Tags (REQUIRED)

Edit `index.html`:
- Change `<title>` tag
- Update meta descriptions
- Change og:title, og:description
- Update twitter:title, twitter:description

### 3. Add Your Files

Place these files in the `public/` folder:
- `resume.pdf` - Your resume
- `projects/*.jpg` - Project screenshots
- `testimonials/*.jpg` - Testimonial avatars
- `og-image.jpg` - Social media preview image

---

## 🎨 What You Built

### Pages
- **Home** (`/`) - Hero section with CTA buttons
- **About** (`/about`) - Skills, services, experience timeline
- **Projects** (`/projects`) - Project cards with filters
- **Contact** (`/contact`) - Social links + testimonials

### Features
✅ Dark mode toggle
✅ Dynamic color themes (6 palettes, random on load)
✅ Smooth scroll animations
✅ Mobile responsive navbar
✅ Project filtering
✅ Experience timeline
✅ Testimonials section
✅ SEO optimized
✅ Fast HMR with Vite

### Tech Stack
- React 19 + TypeScript
- Vite 7 (build tool)
- Tailwind CSS 4 (styling)
- React Router 7 (routing)
- Framer Motion (animations)
- Lucide React (icons)

---

## 🏗️ Build for Production

```bash
# Create optimized build
npm run build

# Preview production build locally
npm run preview
```

The `dist/` folder is ready to deploy!

---

## 🚢 Deploy

### Vercel (Recommended)
```bash
npm i -g vercel
vercel
```

### Netlify
1. Drag `dist/` folder to https://app.netlify.com/drop
2. Or connect your Git repository

### GitHub Pages
1. Build: `npm run build`
2. Push `dist/` to `gh-pages` branch

---

## 📂 Project Structure

```
frontend/
├── src/
│   ├── data/
│   │   └── portfolio.ts        ← EDIT THIS with your data!
│   ├── pages/
│   │   ├── Home.tsx
│   │   ├── About.tsx
│   │   ├── Projects.tsx
│   │   └── Contact.tsx
│   ├── components/
│   │   ├── NavBar.tsx
│   │   ├── Footer.tsx
│   │   └── Layout.tsx
│   └── context/
│       ├── ThemeContext.tsx    (dark mode)
│       └── ColorContext.tsx    (dynamic colors)
├── public/
│   └── resume.pdf              ← ADD YOUR RESUME HERE
├── index.html                  ← UPDATE SEO TAGS
└── tailwind.config.js
```

---

## ❓ Troubleshooting

### "Module not found" errors
```bash
rm -rf node_modules package-lock.json
npm install
```

### Port 5173 already in use
```bash
npm run dev -- --port 3000
```

### Dark mode not working
Check browser console for errors. Ensure localStorage is enabled.

### Colors not changing
Colors change on each **page refresh**. Clear session storage to test:
```javascript
// In browser console
sessionStorage.clear()
location.reload()
```

---

## 📚 Documentation

See `README.md` for full documentation.

---

## 🎉 You're All Set!

Your modern portfolio is ready to customize and deploy. Update the data file, add your content, and share it with the world! 🚀
