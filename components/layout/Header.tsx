'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X, Phone, Mail } from 'lucide-react'
import { cn } from '@/lib/utils'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'Our Standards', href: '/standards' },
  { name: 'About Us', href: '/about' },
  { name: 'Contact', href: '/contact' },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      {/* Top Bar */}
      <div className="bg-brand-blue text-white py-2">
        <div className="container flex justify-between items-center text-sm">
          <div className="flex items-center gap-4">
            <a href="tel:+9611234567" className="flex items-center gap-2 hover:text-gray-200 transition-colors">
              <Phone className="h-4 w-4" />
              <span>+961 1 234 567</span>
            </a>
            <a href="mailto:info@borispublichealth.com" className="hidden sm:flex items-center gap-2 hover:text-gray-200 transition-colors">
              <Mail className="h-4 w-4" />
              <span>info@borispublichealth.com</span>
            </a>
          </div>
          <div className="flex items-center gap-3 text-xs font-medium">
            <span className="bg-white/20 px-2 py-1 rounded">ISO Certified</span>
            <span className="bg-white/20 px-2 py-1 rounded">EPA Approved</span>
            <span className="bg-white/20 px-2 py-1 rounded hidden sm:inline">FDA Compliant</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="container">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-heading font-bold text-brand-blue">
              Boris Public Health
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-brand-blue transition-colors font-medium"
              >
                {item.name}
              </Link>
            ))}
            <Link href="/contact" className="btn-primary">
              Get a Free Quote
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-brand-blue hover:bg-gray-100 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">Open main menu</span>
            {mobileMenuOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={cn(
            'md:hidden transition-all duration-300 ease-in-out',
            mobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
          )}
        >
          <div className="py-4 space-y-1 border-t border-gray-100">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-brand-blue hover:bg-gray-50 rounded-md transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/contact"
              className="block px-3 py-2 text-base font-medium text-white bg-brand-blue hover:bg-brand-blue-dark rounded-md transition-colors text-center mt-4"
              onClick={() => setMobileMenuOpen(false)}
            >
              Get a Free Quote
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
}