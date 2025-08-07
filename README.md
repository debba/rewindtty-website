<p align="center">
  <picture>
    <img style="max-width:200px;height:auto"  src="https://www.rewindtty.dev/assets/images/logo.png" alt="rewindtty logo">
  </picture>
</p>

# rewindtty Website

This is a static Next.js website for the rewindtty project - a terminal session recorder and replayer written in C.

## Getting Started

### Prerequisites

- Node.js 18 or later
- npm or yarn

### Installation

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

To create a static export suitable for hosting on any static file server:

```bash
npm run build 
```

This will generate a static version of the site in the `out/` directory.

## Features

- **Static Export**: Fully static site generated with Next.js
- **Responsive Design**: Mobile-friendly layout
- **Modern UI**: Clean design with gradients and cards
- **Documentation**: Complete usage and API documentation
- **Browser Player Info**: Dedicated page for the web-based player

## Pages

- `/` - Homepage with features and quick start guide
- `/docs` - Complete documentation and usage guide  
- `/browser-player` - Information about the web-based player

## Deployment

The site is configured for static export and can be deployed to:

- GitHub Pages
- Netlify
- Vercel
- Any static file hosting service

Simply upload the contents of the `out/` directory after running `npm run build`.
