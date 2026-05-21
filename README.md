# Mr D

A futuristic AI-powered productivity web app built with React, Tailwind CSS, Framer Motion, and browser-based local storage.

## Features

- Responsive dashboard with mood, streak, and productivity metrics
- Smart task system with emoji support, reorder controls, skip detection, and completion animations
- AI journal system with daily prompts and rich text reflection
- Mood tracker with emoji selection, heatmap, and TensorFlow.js trend prediction
- Productivity analytics and coach chat integrations with Claude API examples
- PIN lock placeholder, export/import support, offline PWA support

## Run locally

1. Install dependencies:

```bash
npm install
```

2. Start development server:

```bash
npm run dev
```

3. Build for production:

```bash
npm run build
```

4. Preview production build:

```bash
npm run preview
```

## Deployment

Ready for GitHub Pages deployment:

```bash
npm run deploy
```

## Notes

- Add your Claude API key in `src/lib/claude.ts` or manage it through environment variables.
- Data is stored locally in `localStorage` unless AI features are triggered.
- The app includes a service worker for basic offline caching.
