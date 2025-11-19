# Personal Portfolio - AI Coding Agent Instructions

## Project Overview

This is a **single-page React portfolio website** built with React 19, TypeScript, Vite 7, Tailwind CSS 4, and Framer Motion. The site features a dynamic color system, responsive design, and a maintenance mode landing page.

**Current Status**: Site runs in "maintenance mode" showing only `TempLanding.tsx` (controlled by `tempLanding: true` in `portfolio.ts`). Full multi-page site exists but is disabled via routing wildcard in `App.tsx`.

## Architecture & Key Concepts

### 1. Single Source of Truth: `src/data/portfolio.ts`
All portfolio content lives in this **single TypeScript file**. This is the ONLY file users need to edit for content updates:
- Personal info, social links, skills, experience, projects, testimonials
- **Color palettes**: 6 predefined color pairs (e.g., Ocean Blue, Purple Haze)
- **`tempLanding` flag**: When `true`, site shows only temporary landing page

**Pattern**: Components import from this file and render data, never hardcode content.

### 2. Dynamic Color System via CSS Variables
- On app load, `ColorContext.tsx` randomly selects one palette from `portfolio.ts`
- Sets `--color-primary` and `--color-secondary` CSS variables on `:root`
- Colors persist in `sessionStorage` for session consistency
- Applied throughout via `var(--color-primary)` in CSS and Tailwind classes

**Why**: Allows instant visual variety without code changes. Users refresh to see different color schemes.

### 3. Maintenance Mode Routing
```tsx
// App.tsx - current state
<Route path="*" element={<TempLanding />} />
```
The wildcard `*` catches all routes, showing only the temporary landing page. Full routing (Home, About, Projects, Contact) exists but is commented out.

**To restore full site**: 
1. Set `personalInfo.tempLanding = false` in `portfolio.ts`
2. Uncomment proper routes in `App.tsx`

### 4. Light-Only Theme (Dark Mode Disabled)
- `ThemeContext.tsx` is a no-op returning only `'light'` theme
- `tailwind.config.js` has `darkMode: false`
- All dark mode features removed for simplicity per project decisions

**Historical Note**: Dark mode existed but was removed. Don't add dark classes.

### 5. Context Providers Wrapper
```tsx
<ThemeProvider>
  <ColorProvider>
    <Router>
      <Layout>
        {/* routes */}
```
Always maintain this nesting order. Color system depends on being inside ThemeProvider.

## Development Workflows

### Local Development
```bash
cd frontend
npm run dev  # Starts Vite dev server at localhost:5173
```

### Build for Production
```bash
npm run build  # TypeScript compile + Vite build → dist/
npm run preview # Preview production build locally
```

### Environment Requirements
- **Node.js 20+** required (Vite 7 dependency)
- If user has Node 16, point to `setup.sh` or `QUICKSTART.md`

### Linting
```bash
npm run lint  # ESLint with React hooks rules
```

## Project-Specific Conventions

### Component Structure
- **Pages** (`src/pages/`): Full page components (Home, About, Projects, Contact, TempLanding)
- **Components** (`src/components/`): Reusable pieces (NavBar, Footer, Layout)
- **Layout.tsx**: Wraps all pages with NavBar + Footer, previously had Framer Motion animations (removed)

### Styling Patterns
1. **Tailwind CSS 4** with `@import` syntax in `index.css` (not `@tailwind` directives)
2. Custom button classes in `index.css`: `.btn`, `.btn-primary`, `.btn-outline`
3. Use CSS variables for colors: `var(--color-primary)`, `var(--color-secondary)`
4. Responsive: mobile-first with `sm:`, `md:`, `lg:` breakpoints

### Icon Usage
- **Lucide React** for all icons (e.g., `<Github />`, `<Mail />`)
- Icons referenced by string names in data, mapped in components
- Example: `portfolio.ts` has `icon: 'Github'`, component maps to `<Github />`

### Animation Strategy (Currently Disabled)
- Framer Motion is installed but page-level animations removed from Layout
- **Reason**: Stabilized navigation and button behavior per inline comments
- Re-add animations only after confirming routing works

## Critical Files & Their Roles

| File | Purpose |
|------|---------|
| `src/data/portfolio.ts` | **Single source of truth** for all content |
| `src/App.tsx` | Router setup, maintenance mode routing |
| `src/context/ColorContext.tsx` | Dynamic color palette selection |
| `src/context/ThemeContext.tsx` | No-op theme provider (light-only) |
| `src/components/Layout.tsx` | Page wrapper with NavBar/Footer |
| `src/pages/TempLanding.tsx` | Maintenance landing page with resume downloads |
| `tailwind.config.js` | Dark mode disabled, content paths |
| `src/index.css` | Tailwind imports, custom button styles, CSS variables |

## Common Tasks

### Adding a New Project
Edit `portfolio.ts` → `projects` array:
```typescript
{
  id: 4,
  title: 'New Project',
  description: 'Short description',
  techStack: ['React', 'TypeScript'],
  githubUrl: 'https://github.com/...',
  liveUrl: 'https://...',
  featured: true // Shows on home page
}
```

### Changing Color Palette Options
Edit `portfolio.ts` → `colorPalettes` array. Add/remove/modify palette objects with `name`, `primary`, `secondary`.

### Switching to Full Site
1. `portfolio.ts`: Set `personalInfo.tempLanding = false`
2. `App.tsx`: Replace `<Route path="*" element={<TempLanding />} />` with full routes:
```tsx
<Route path="/" element={<Home />} />
<Route path="/about" element={<About />} />
<Route path="/projects" element={<Projects />} />
<Route path="/contact" element={<Contact />} />
```

### Updating Personal Info
Edit `portfolio.ts` → `personalInfo` object. Includes name, email, phone, bio, resume URLs, etc.

## External Dependencies

- **React Router 7**: Client-side routing (`react-router-dom`)
- **Framer Motion**: Animation library (currently unused)
- **Lucide React**: Icon library
- **Tailwind CSS 4**: Utility-first CSS framework
- **Vite 7**: Build tool and dev server

## SEO & Meta Tags
Update `index.html` for:
- Page title
- Meta descriptions
- Open Graph tags (`og:title`, `og:description`)
- Twitter Card tags

## Documentation Files
- `PROJECT_SUMMARY.md`: Feature list and implementation overview
- `FEATURES_GUIDE.md`: Visual guide to pages and color system
- `QUICKSTART.md`: Setup instructions, Node version requirements
- `TAILWIND_FIX.md`: Tailwind CSS 4 migration notes (if exists)

## Key Decisions & "Why"

1. **Single data file**: Easier for non-technical users to update content
2. **Random colors on load**: Creates visual interest without complexity
3. **Light-only mode**: Simplified based on user preference/requirements
4. **Maintenance landing**: Allows deploying before full site is ready
5. **No page animations**: Removed to stabilize routing (can be re-added)
6. **Session storage for colors**: Prevents jarring color changes during browsing

---

When making changes, always check `portfolio.ts` first—it's the content hub. Respect the CSS variable pattern for colors. Don't add dark mode styles (project doesn't support it).
