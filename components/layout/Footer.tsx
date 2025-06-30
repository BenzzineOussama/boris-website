import Link from 'next/link'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'

const footerLinks = {
  services: [
    { name: 'Commercial Cleaning', href: '/services#commercial' },
    { name: 'Office Sanitization', href: '/services#office' },
    { name: 'Medical Facility Cleaning', href: '/services#medical' },
    { name: 'Industrial Cleaning', href: '/services#industrial' },
  ],
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Our Standards', href: '/standards' },
    { name: 'Certifications', href: '/standards#certifications' },
    { name: 'Contact', href: '/contact' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-heading font-bold">Boris Public Health</h3>
            <p className="text-gray-400">
              Masters of all cleaning types using the highest standard of products to ensure public health and safety.
            </p>
            <div className="flex gap-3 pt-2">
              <span className="bg-brand-blue px-3 py-1 rounded text-sm">ISO Certified</span>
              <span className="bg-brand-blue px-3 py-1 rounded text-sm">EPA Approved</span>
              <span className="bg-brand-blue px-3 py-1 rounded text-sm">FDA Compliant</span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-heading font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-heading font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-heading font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-brand-blue mt-0.5" />
                <div>
                  <p className="font-medium">+961 1 234 567</p>
                  <p className="text-sm text-gray-400">24/7 Emergency Service</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-brand-blue mt-0.5" />
                <a href="mailto:info@borispublichealth.com" className="text-gray-400 hover:text-white transition-colors">
                  info@borispublichealth.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-brand-blue mt-0.5" />
                <p className="text-gray-400">
                  Achrafieh District<br />
                  Sassine Square<br />
                  Beirut, Lebanon
                </p>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-brand-blue mt-0.5" />
                <div className="text-gray-400">
                  <p>Mon-Fri: 8:00 AM - 6:00 PM</p>
                  <p>Sat: 9:00 AM - 2:00 PM</p>
                  <p>Sun: Closed</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Boris Public Health. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}