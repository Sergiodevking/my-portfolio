# Customization Guide

This guide will help you personalize your portfolio with your own information.

## 📝 Step 1: Update Your Personal Information

Edit `app/data/portfolio.ts`:

### Basic Information
```typescript
name: 'Your Name',
title: 'Your Title (e.g., Senior Full Stack Engineer)',
tagline: 'Your one-sentence highlight',
location: 'Your Location',
email: 'your.email@example.com',
github: 'https://github.com/yourusername',
linkedin: 'https://linkedin.com/in/yourusername',
resume: '/resume.pdf', // Place your resume in the public folder
```

### About Section
Update the `about` object with:
- Your introduction
- Your specialization
- Your strengths (array of strings)
- What you're looking for

### Skills
Update the `skills` array with your actual skills. Each skill has:
- `name`: The technology name
- `category`: 'frontend', 'backend', 'cloud', or 'tools'
- `level`: 'expert', 'advanced', or 'intermediate'

### Projects
Replace the sample projects with your own. Each project needs:
- `id`: Unique identifier
- `title`: Project name
- `description`: Short description (shown on card)
- `longDescription`: Detailed description
- `techStack`: Array of technologies used
- `image`: URL to project screenshot
- `liveUrl`: Link to live demo (optional)
- `githubUrl`: Link to GitHub repository (optional)
- `featured`: true/false

## 🎨 Step 2: Customize Colors

Edit `tailwind.config.ts` to change the color scheme:

```typescript
colors: {
  primary: {
    // Change these hex values to your preferred color
    500: '#0ea5e9', // Main color
    600: '#0284c7', // Hover color
    // ... other shades
  },
}
```

## 🖼️ Step 3: Add Project Screenshots

1. Take screenshots of your projects
2. Upload them to:
   - Your own image hosting
   - Unsplash (for placeholders)
   - Or add to `public/images/` folder and reference as `/images/project1.png`

3. Update the `image` field in each project in `portfolio.ts`

## 📄 Step 4: Add Your Resume

1. Export your resume as PDF
2. Place it in the `public` folder as `resume.pdf`
3. The contact section will automatically link to it

## 🎯 Step 5: Update SEO

Edit `app/layout.tsx`:

```typescript
export const metadata: Metadata = {
  title: 'Your Name | Your Title',
  description: 'Your portfolio description',
  keywords: ['your', 'keywords', 'here'],
}
```

## 🎭 Step 6: Customize Animations

Animations are handled by Framer Motion. To adjust:

- Edit animation durations in component files
- Change `whileHover` and `whileTap` effects
- Modify `initial`, `animate`, and `transition` props

## 📱 Step 7: Test Responsiveness

1. Test on mobile devices
2. Test on tablets
3. Test on different browsers
4. Adjust breakpoints in Tailwind classes if needed

## 🔗 Step 8: Update Social Links

Make sure all social links in:
- `app/data/portfolio.ts`
- `components/Footer.tsx`
- `components/sections/Hero.tsx`
- `components/sections/Contact.tsx`

Point to your actual profiles.

## ✨ Step 9: Add Favicon

1. Create or download a favicon
2. Place it in `public` folder as `favicon.ico`
3. Add to `app/layout.tsx`:

```typescript
export const metadata: Metadata = {
  // ... existing metadata
  icons: {
    icon: '/favicon.ico',
  },
}
```

## 🚀 Step 10: Deploy

Follow the `DEPLOYMENT_GUIDE.md` to deploy your portfolio!

## 💡 Pro Tips

1. **Keep it updated**: Regularly update projects and skills
2. **Quality over quantity**: 3-5 great projects are better than 10 mediocre ones
3. **Use real screenshots**: Don't use placeholders for too long
4. **Test everything**: Make sure all links work
5. **Mobile first**: Most recruiters view on mobile
6. **Fast loading**: Optimize images and code
7. **Accessibility**: Ensure good contrast and readable fonts

