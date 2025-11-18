# Developer Portfolio

A modern, responsive developer portfolio built with Next.js, TypeScript, TailwindCSS, and Framer Motion.

## Features

- 🎨 Modern, clean design
- 🌓 Dark/Light mode toggle
- 📱 Fully responsive
- ✨ Smooth animations with Framer Motion
- ⚡ Fast and optimized with Next.js 14
- 🎯 SEO friendly

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** TailwindCSS
- **Animations:** Framer Motion
- **Theme:** next-themes
- **Icons:** Lucide React

## Prerequisites

Before you begin, make sure you have **Node.js** installed on your system:

- **Node.js** (v18 or higher recommended)
- **npm** (comes with Node.js)

### Installing Node.js

If you don't have Node.js installed:

1. Visit [nodejs.org](https://nodejs.org/)
2. Download the **LTS (Long Term Support)** version
3. Run the installer and follow the setup wizard
4. **Important:** Make sure "Add to PATH" is checked during installation
5. Restart your terminal/PowerShell after installation

**Verify installation:**
```bash
node --version
npm --version
```

📖 **Detailed setup instructions:** See `SETUP_INSTRUCTIONS.md` for Windows-specific guidance.

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and deploy

### Deploy to Netlify

1. Build the project: `npm run build`
2. Deploy the `.next` folder to Netlify
3. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`

## Customization

1. Update your information in `app/data/portfolio.ts`
2. Add your projects in the projects array
3. Update social links in the contact section
4. Customize colors in `tailwind.config.ts`

## License

MIT

