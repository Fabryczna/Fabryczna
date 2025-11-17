# toMy Kawiarnia Warszawa - Development Plan

## Project Overview
Modern, multilingual cafe website optimized for GitHub Pages deployment with black/white color palette.

## Tech Stack
- React + TypeScript + Vite
- Shadcn-ui components
- Tailwind CSS
- i18next for internationalization (PL/UK/EN/TR)
- Hash-based routing for GitHub Pages compatibility

## Files to Create/Modify

### 1. Configuration Files
- `vite.config.ts` - Update base path for GitHub Pages
- `public/CNAME` - Optional for custom domain
- `public/.nojekyll` - Prevent Jekyll processing

### 2. Internationalization Setup
- `src/i18n/config.ts` - i18next configuration
- `src/i18n/locales/pl.json` - Polish translations
- `src/i18n/locales/uk.json` - Ukrainian translations
- `src/i18n/locales/en.json` - English translations
- `src/i18n/locales/tr.json` - Turkish translations

### 3. Components
- `src/components/LanguageSwitcher.tsx` - Language selection component
- `src/components/Hero.tsx` - Hero section with cafe name and visual
- `src/components/About.tsx` - About section with social mission
- `src/components/Menu.tsx` - Menu/offerings section
- `src/components/Gallery.tsx` - Photo gallery
- `src/components/Contact.tsx` - Contact info with map and hours
- `src/components/Navigation.tsx` - Navigation bar with language switcher

### 4. Main Files
- `src/pages/Index.tsx` - Main page with all sections
- `src/App.tsx` - Update for hash routing
- `index.html` - Update title and meta tags

### 5. Assets
- Logo image in public/assets/
- Hero background image
- Gallery images (cafe interior, coffee, pastries, ceramics)

## Key Features
- Responsive design (mobile-first)
- Black/white color palette with accent colors
- Smooth scrolling navigation
- Embedded Google Maps
- Social media links
- GitHub Pages compatible (hash routing, proper base paths)

## Content Sections
1. Hero - Compelling visual with cafe name
2. About - Social mission, Fundacja Leny Grochowskiej, awards
3. Menu - Coffee, pastries, ceramics, workshops
4. Gallery - Cafe photos
5. Contact - Address, phone, hours, map

## Implementation Order
1. Setup i18n and language files
2. Create reusable components
3. Build main page sections
4. Add images and styling
5. Configure for GitHub Pages
6. Test routing and asset loading