# Deployment Guide

This guide will help you deploy your portfolio to various platforms.

## 🚀 Deploy to Vercel (Recommended)

Vercel is the easiest and best option for Next.js projects.

### Steps:

1. **Push your code to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/portfolio.git
   git push -u origin main
   ```

2. **Import to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Sign in with GitHub
   - Click "New Project"
   - Import your repository
   - Vercel will auto-detect Next.js settings
   - Click "Deploy"

3. **Custom Domain (Optional)**
   - In Vercel dashboard, go to Settings → Domains
   - Add your custom domain
   - Update DNS records as instructed

## 🌐 Deploy to Netlify

1. **Build the project locally:**
   ```bash
   npm run build
   ```

2. **Deploy to Netlify:**
   - Go to [netlify.com](https://netlify.com)
   - Sign in with GitHub
   - Click "New site from Git"
   - Select your repository
   - Build settings:
     - Build command: `npm run build`
     - Publish directory: `.next`
   - Click "Deploy site"

## ☁️ Deploy to AWS

### Using AWS Amplify:

1. Go to [AWS Amplify Console](https://console.aws.amazon.com/amplify)
2. Click "New app" → "Host web app"
3. Connect your GitHub repository
4. Configure build settings:
   - Build command: `npm run build`
   - Output directory: `.next`
5. Deploy

### Using AWS EC2:

1. Launch an EC2 instance
2. Install Node.js and npm
3. Clone your repository
4. Run `npm install` and `npm run build`
5. Use PM2 or similar to run `npm start`
6. Configure security groups for port 3000

## 📝 Pre-Deployment Checklist

- [ ] Update `app/data/portfolio.ts` with your information
- [ ] Replace placeholder images with your project screenshots
- [ ] Update social media links
- [ ] Add your resume PDF to `public/resume.pdf`
- [ ] Test all links and functionality
- [ ] Optimize images
- [ ] Test on mobile devices
- [ ] Check SEO metadata in `app/layout.tsx`

## 🔧 Environment Variables

If you need environment variables:

1. In Vercel: Settings → Environment Variables
2. In Netlify: Site settings → Environment variables
3. In AWS: Use AWS Systems Manager Parameter Store or Secrets Manager

## 📊 Performance Optimization

- Images: Use Next.js Image component (already implemented)
- Fonts: Already optimized with next/font
- Code splitting: Automatic with Next.js
- Caching: Configure in `next.config.js` if needed

## 🎯 SEO Optimization

Your portfolio already includes:
- Meta tags in `app/layout.tsx`
- Semantic HTML
- Proper heading structure
- Alt text for images (add when you replace placeholders)

## 🔒 Security

- Don't commit `.env` files
- Use environment variables for sensitive data
- Keep dependencies updated
- Use HTTPS (automatic on Vercel/Netlify)

