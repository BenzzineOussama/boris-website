import Link from 'next/link'
import { Building2, Briefcase, Heart, Factory, Sparkles, Home } from 'lucide-react'

const services = [
  {
    icon: Building2,
    title: 'Commercial Cleaning',
    description: 'Comprehensive cleaning solutions for retail spaces, restaurants, and commercial buildings.',
    href: '/services#commercial',
  },
  {
    icon: Briefcase,
    title: 'Office Sanitization',
    description: 'Keep your workplace healthy and productive with our professional office cleaning services.',
    href: '/services#office',
  },
  {
    icon: Heart,
    title: 'Medical Facility Cleaning',
    description: 'Specialized cleaning protocols for healthcare facilities meeting strict hygiene standards.',
    href: '/services#medical',
  },
  {
    icon: Factory,
    title: 'Industrial Cleaning',
    description: 'Heavy-duty cleaning solutions for warehouses, factories, and industrial complexes.',
    href: '/services#industrial',
  },
  {
    icon: Sparkles,
    title: 'Deep Cleaning Services',
    description: 'Thorough deep cleaning for special occasions or periodic maintenance needs.',
    href: '/services#deep-cleaning',
  },
  {
    icon: Home,
    title: 'Post-Construction Cleanup',
    description: 'Complete cleanup services after renovations or new construction projects.',
    href: '/services#construction',
  },
]

export default function ServicesOverview() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-gray-900 mb-4">
            Our Professional <span className="text-brand-blue">Cleaning Services</span>
          </h2>
          <p className="text-lg text-gray-600">
            We offer a comprehensive range of cleaning services tailored to meet the unique needs of your business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Link
                key={service.title}
                href={service.href}
                className="card group hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-brand-blue/10 rounded-lg flex items-center justify-center group-hover:bg-brand-blue transition-colors">
                      <Icon className="h-6 w-6 text-brand-blue group-hover:text-white transition-colors" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-heading font-semibold text-gray-900 mb-2 group-hover:text-brand-blue transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>

        <div className="text-center mt-12">
          <Link href="/services" className="btn-primary">
            View All Services
          </Link>
        </div>
      </div>
    </section>
  )
}