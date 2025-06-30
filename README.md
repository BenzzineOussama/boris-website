# Boris Public Health - Professional Cleaning Services Website

A modern, professional website built with React, Next.js 14, and TypeScript for Boris Public Health - a cleaning company specializing in ISO certified, EPA approved, and FDA compliant cleaning services.

## 🚀 Features

- **Modern Tech Stack**: Next.js 14.2.3, React 18, TypeScript
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Performance Optimized**: Static Site Generation (SSG) for fast loading
- **SEO Ready**: Complete meta tags, sitemap, robots.txt
- **Professional Design**: Clean, minimalist aesthetic with brand colors
- **Contact Form**: Integrated contact form with API route
- **Error Handling**: Custom 404, error, and loading pages
- **PWA Support**: Web manifest for progressive web app features

## 📁 Project Structure

```
boris-website/
├── app/                    # Next.js App Router pages
│   ├── about/             # About Us page
│   ├── api/               # API routes
│   │   └── contact/       # Contact form handler
│   ├── contact/           # Contact/Quote page
│   ├── services/          # Services page
│   ├── standards/         # Standards & Certifications page
│   ├── error.tsx          # Error boundary
│   ├── loading.tsx        # Loading state
│   ├── not-found.tsx      # 404 page
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Homepage
├── components/
│   ├── layout/            # Header, Footer components
│   └── sections/          # Homepage section components
├── lib/                   # Utility functions
├── public/                # Static assets
│   ├── favicon.svg        # Site favicon
│   ├── robots.txt         # SEO robots file
│   ├── sitemap.xml        # XML sitemap
│   └── site.webmanifest   # PWA manifest
└── [config files]         # Various configuration files
```

## 🎨 Design System

### Colors
- **Primary Blue**: #1e6091 (from company logo)
- **White**: Primary background color
- **Gray Scale**: For text and subtle backgrounds

### Typography
- **Headings**: Poppins font
- **Body**: Inter font

### Key Features
- ISO Certified badge
- EPA Approved badge
- FDA Compliant badge
- 24/7 Emergency Service
- 100% Satisfaction Guarantee

## 🛠️ Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run development server**:
   ```bash
   npm run dev
   ```

3. **Build for production**:
   ```bash
   npm run build
   ```

4. **Start production server**:
   ```bash
   npm start
   ```

## 📱 Pages

1. **Homepage** (`/`): Hero section, trust bar, services overview, testimonials
2. **About Us** (`/about`): Company mission, values, timeline, leadership team
3. **Services** (`/services`): Detailed service offerings with features
4. **Standards** (`/standards`): Certifications and compliance information
5. **Contact** (`/contact`): Contact form and company information

## 🔧 Technical Details

- **Framework**: Next.js 14.2.3 with App Router
- **Language**: TypeScript with strict mode
- **Styling**: Tailwind CSS with custom configuration
- **Forms**: React Hook Form for validation
- **Icons**: Lucide React icons
- **Fonts**: Google Fonts (Inter, Poppins)
- **Deployment**: Optimized for Vercel

## 📈 Performance Optimizations

- Static Site Generation for all pages
- Optimized images with Next.js Image component
- Font optimization with next/font
- Lazy loading for better performance
- Minimal JavaScript bundle size

## 🔐 Environment Variables

No environment variables are required for basic functionality. For production, you may want to add:

- Email service credentials for contact form
- Analytics tracking codes
- API endpoints

## 📝 Notes

- All TypeScript errors are due to missing node_modules (run `npm install`)
- The contact form currently logs submissions to console (integrate with email service in production)
- Add actual images to replace placeholder content
- Consider adding analytics tracking
- Implement actual map integration for contact page

## 🚀 Deployment

The site is optimized for deployment on Vercel:

1. Push to GitHub
2. Import project in Vercel
3. Deploy with default settings

---

Built with ❤️ for Boris Public Health - Masters of all cleaning types