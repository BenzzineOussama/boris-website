import Link from 'next/link'
import { ArrowRight, Phone } from 'lucide-react'

export default function CTASection() {
  return (
    <section className="bg-brand-blue text-white section-padding">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold mb-6">
            Ready to Experience the Highest Standards in Professional Cleaning?
          </h2>
          <p className="text-lg sm:text-xl mb-8 text-white/90">
            Join hundreds of satisfied businesses who trust Boris Public Health for their cleaning needs. 
            Get your free quote today and discover the difference our certified services can make.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="inline-flex items-center justify-center rounded-md bg-white text-brand-blue px-8 py-4 text-lg font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all group"
            >
              Get Your Free Quote
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
            
            <a 
              href="tel:1234567890" 
              className="inline-flex items-center justify-center rounded-md border-2 border-white text-white px-8 py-4 text-lg font-medium hover:bg-white hover:text-brand-blue transition-all"
            >
              <Phone className="mr-2 h-5 w-5" />
              Call (123) 456-7890
            </a>
          </div>
          
          <div className="mt-12 pt-12 border-t border-white/20">
            <p className="text-sm text-white/80 mb-4">Trusted by leading businesses with our certifications:</p>
            <div className="flex flex-wrap justify-center gap-6 text-sm font-medium">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <span>ISO Certified</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <span>EPA Approved</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <span>FDA Compliant</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}