# VentiStudio v6 – Architecture Complète

## System Architecture

```
┌─────────────────────────────┐
│   CDN / Edge Network        │
│   (Cloudflare / Vercel)     │
└────────────┬────────────────┘
             │
    ┌────────▼────────┐
    │  GitHub Pages   │
    │   / Vercel      │
    │  / Netlify      │
    └────────┬────────┘
             │
    ┌────────▼──────────┐
    │   Frontend        │
    │   (HTML/CSS/JS)   │
    │   ─────────────   │
    │   - Service Worker│
    │   - PWA support   │
    │   - Offline mode  │
    └────────┬──────────┘
             │
    ┌────────▼──────────┐
    │   Analytics       │
    │   - Plausible     │
    │   - Google SC     │
    │   - Lighthouse CI │
    └───────────────────┘
```

## File Structure

```
ventistudio.fr-fullpreview/
├── index.html              (Main landing page)
├── README.md               (Documentation)
├── manifest.json           (PWA manifest)
├── robots.txt              (SEO)
├── sitemap.xml             (SEO)
│
├── css/
│   ├── base.css            (Design system)
│   ├── components.css       (UI components)
│   ├── layout.css           (Grid, layout)
│   └── animations.css       (Keyframes)
│
├── js/
│   ├── app.js              (Main controller)
│   ├── animations.js        (Scroll, interactions)
│   ├── forms.js             (Validation)
│   └── service-worker.js    (PWA)
│
├── assets/
│   ├── data/
│   │   ├── projects.json
│   │   ├── team.json
│   │   └── services.json
│   ├── images/             (Optimized)
│   └── favicons/
│
├── docs/
│   ├── REFONTE.md
│   ├── IMPLEMENTATION.md
│   └── ARCHITECTURE.md
│
└── .github/workflows/
    ├── lighthouse-ci.yml
    └── deploy.yml
```

## CSS Architecture

### Variables (50+)
```css
:root {
    --clr-primary: #00d9ff;
    --clr-secondary: #8b5cf6;
    --ff-body: 'Inter', sans-serif;
    --sp-md: 1.5rem;
    /* ... more */
}
```

### Layers
1. **base.css** – Reset, variables, typography
2. **components.css** – Buttons, cards, forms
3. **layout.css** – Grid, containers, sections
4. **animations.css** – Keyframes, transitions

## JavaScript Modules

### app.js
- Main application controller
- Event listener setup
- Intersection Observer
- Service Worker registration

### animations.js
- Scroll animations
- Konami code easter egg
- Animation utilities

### forms.js
- Form validation
- Input sanitization
- Submission handling

### service-worker.js
- Offline support
- Cache strategy
- Background sync

## Performance Strategy

### Images
- WebP format (primary)
- JPEG fallback
- Responsive sizes (1920, 1280, 640, 320)
- Lazy loading via Intersection Observer

### CSS
- CSS variables for theming
- Critical CSS inline
- Non-critical deferred
- Minified in production

### JavaScript
- Vanilla JS (no deps)
- Async/defer attributes
- Code splitting
- Minified in production

## Security

### Headers
- Content-Security-Policy
- X-Frame-Options: DENY
- X-Content-Type-Options: nosniff
- X-XSS-Protection: 1; mode=block

### Input Validation
- Client-side validation
- Email regex check
- Sanitization before display
- No inline event handlers

## Monitoring

### Performance
- Lighthouse CI on every commit
- Core Web Vitals tracking
- Real User Monitoring (RUM)

### Errors
- Sentry integration
- Console error logging
- User feedback collection

### Analytics
- Plausible (privacy-focused)
- Event tracking
- Conversion funnels
