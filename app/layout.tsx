import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  title: {
    default: 'Boris Public Health - Professional Cleaning Services',
    template: '%s | Boris Public Health'
  },
  description: 'Masters of all cleaning types using ISO certified, EPA approved, and FDA compliant products to ensure public health and safety.',
  keywords: 'cleaning services, professional cleaning, ISO certified, EPA approved, FDA compliant, commercial cleaning, sanitization, office cleaning, medical facility cleaning, industrial cleaning',
  authors: [{ name: 'Boris Public Health' }],
  creator: 'Boris Public Health',
  publisher: 'Boris Public Health',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://www.borispublichealth.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Boris Public Health - Professional Cleaning Services',
    description: 'Masters of all cleaning types using the highest standard of products. ISO certified, EPA approved, and FDA compliant.',
    url: 'https://www.borispublichealth.com',
    siteName: 'Boris Public Health',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Boris Public Health - Professional Cleaning Services',
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Boris Public Health - Professional Cleaning Services',
    description: 'Masters of all cleaning types using the highest standard of products',
    images: ['/twitter-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/site.webmanifest',
  themeColor: '#1e6091',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body className="font-sans antialiased bg-white text-gray-900">
        {children}
      </body>
    </html>
  )
}