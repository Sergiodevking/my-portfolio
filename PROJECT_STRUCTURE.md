# Project Structure

```
portfolio/
├── app/                          # Next.js App Router
│   ├── data/
│   │   └── portfolio.ts         # All portfolio data (UPDATE THIS FIRST!)
│   ├── globals.css              # Global styles and Tailwind
│   ├── layout.tsx               # Root layout with metadata
│   └── page.tsx                 # Home page
│
├── components/                   # React components
│   ├── sections/                # Page sections
│   │   ├── Hero.tsx            # Hero/Introduction section
│   │   ├── About.tsx           # About me section
│   │   ├── Skills.tsx          # Skills section
│   │   ├── Projects.tsx        # Projects showcase
│   │   └── Contact.tsx         # Contact section
│   ├── Footer.tsx              # Footer component
│   ├── Navbar.tsx              # Navigation bar
│   └── ThemeProvider.tsx      # Dark/light mode provider
│
├── public/                      # Static assets
│   └── resume.pdf              # Your resume (ADD THIS!)
│
├── CUSTOMIZATION_GUIDE.md      # How to customize
├── DEPLOYMENT_GUIDE.md         # How to deploy
├── PROJECT_README_TEMPLATE.md  # Template for project READMEs
├── QUICK_START.md              # Quick start guide
├── README.md                   # Main README
│
├── next.config.js              # Next.js configuration
├── tailwind.config.ts          # Tailwind CSS configuration
├── tsconfig.json               # TypeScript configuration
└── package.json                # Dependencies

```

## Key Files to Edit

1. **`app/data/portfolio.ts`** - Update all your information here
2. **`public/resume.pdf`** - Add your resume
3. **`app/layout.tsx`** - Update SEO metadata
4. **Project images** - Replace placeholder URLs with your screenshots

## Component Overview

- **Hero**: Introduction with name, title, tagline, and top skills
- **About**: Personal introduction, specialization, strengths
- **Skills**: Categorized skills with proficiency levels
- **Projects**: Featured projects with images, tech stack, and links
- **Contact**: Contact information and social links
- **Navbar**: Navigation with theme toggle
- **Footer**: Footer with copyright and social links

## Styling

- Uses TailwindCSS for all styling
- Custom color scheme in `tailwind.config.ts`
- Dark mode support via `next-themes`
- Responsive breakpoints: sm, md, lg

## Animations

- Framer Motion for smooth animations
- Scroll-triggered animations
- Hover effects on interactive elements

