import Link from 'next/link'
import { Home, Search } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="max-w-md w-full text-center">
        <div className="mb-8">
          <h1 className="text-9xl font-heading font-bold text-brand-blue opacity-20">404</h1>
          <div className="relative -mt-20">
            <Search className="h-16 w-16 text-gray-400 mx-auto" />
          </div>
        </div>
        <h2 className="text-2xl font-heading font-bold text-gray-900 mb-2">
          Page Not Found
        </h2>
        <p className="text-gray-600 mb-8">
          Sorry, we couldn't find the page you're looking for. It might have been moved or deleted.
        </p>
        <div className="space-y-3">
          <Link
            href="/"
            className="btn-primary w-full inline-flex items-center justify-center gap-2"
          >
            <Home className="h-4 w-4" />
            Go to Homepage
          </Link>
          <Link
            href="/contact"
            className="btn-secondary w-full inline-block"
          >
            Contact Us
          </Link>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-500">
            Need help? Call us at{' '}
            <a href="tel:1234567890" className="text-brand-blue hover:underline">
              (123) 456-7890
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}