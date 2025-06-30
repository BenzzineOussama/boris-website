import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { Building2, Briefcase, Heart, Factory, Sparkles, Home, CheckCircle } from 'lucide-react'

const services = [
  {
    id: 'commercial',
    icon: Building2,
    title: 'Commercial Cleaning',
    description: 'Comprehensive cleaning solutions for retail spaces, restaurants, and commercial buildings.',
    features: [
      'Daily, weekly, or monthly cleaning schedules',
      'Floor care and maintenance',
      'Window and glass cleaning',
      'Restroom sanitization',
      'Trash removal and recycling',
      'High-touch surface disinfection',
    ],
  },
  {
    id: 'office',
    icon: Briefcase,
    title: 'Office Sanitization',
    description: 'Keep your workplace healthy and productive with our professional office cleaning services.',
    features: [
      'Workstation and desk cleaning',
      'Conference room sanitization',
      'Kitchen and break room cleaning',
      'Carpet and upholstery care',
      'Air quality improvement',
      'COVID-19 disinfection protocols',
    ],
  },
  {
    id: 'medical',
    icon: Heart,
    title: 'Medical Facility Cleaning',
    description: 'Specialized cleaning protocols for healthcare facilities meeting strict hygiene standards.',
    features: [
      'Operating room terminal cleaning',
      'Patient room disinfection',
      'Biohazard waste management',
      'OSHA compliance',
      'Infection control protocols',
      'FDA-approved cleaning products',
    ],
  },
  {
    id: 'industrial',
    icon: Factory,
    title: 'Industrial Cleaning',
    description: 'Heavy-duty cleaning solutions for warehouses, factories, and industrial complexes.',
    features: [
      'Warehouse floor cleaning',
      'Equipment degreasing',
      'High-pressure washing',
      'Dust and debris removal',
      'Safety compliance cleaning',
      'Hazardous material handling',
    ],
  },
  {
    id: 'deep-cleaning',
    icon: Sparkles,
    title: 'Deep Cleaning Services',
    description: 'Thorough deep cleaning for special occasions or periodic maintenance needs.',
    features: [
      'Complete facility sanitization',
      'Detailed surface cleaning',
      'Air duct and vent cleaning',
      'Mold and mildew treatment',
      'Odor elimination',
      'Post-event cleanup',
    ],
  },
  {
    id: 'construction',
    icon: Home,
    title: 'Post-Construction Cleanup',
    description: 'Complete cleanup services after renovations or new construction projects.',
    features: [
      'Debris and dust removal',
      'Window and fixture cleaning',
      'Floor finishing and polishing',
      'Paint overspray removal',
      'Final touch preparation',
      'Move-in ready cleaning',
    ],
  },
]

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-gray-50 to-white py-16 sm:py-20">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl sm:text-5xl font-heading font-bold text-gray-900 mb-6">
                Our Professional <span className="text-brand-blue">Cleaning Services</span>
              </h1>
              <p className="text-lg text-gray-600">
                We offer comprehensive cleaning solutions tailored to meet the unique needs of your business. 
                All our services use ISO certified, EPA approved, and FDA compliant products.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="section-padding">
          <div className="container">
            <div className="space-y-20">
              {services.map((service, index) => {
                const Icon = service.icon
                return (
                  <div
                    key={service.id}
                    id={service.id}
                    className={`grid lg:grid-cols-2 gap-12 items-center ${
                      index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                    }`}
                  >
                    <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                      <div className="flex items-start gap-4 mb-6">
                        <div className="w-16 h-16 bg-brand-blue/10 rounded-xl flex items-center justify-center flex-shrink-0">
                          <Icon className="h-8 w-8 text-brand-blue" />
                        </div>
                        <div>
                          <h2 className="text-3xl font-heading font-bold text-gray-900 mb-2">
                            {service.title}
                          </h2>
                          <p className="text-lg text-gray-600">
                            {service.description}
                          </p>
                        </div>
                      </div>
                      
                      <div className="space-y-3">
                        {service.features.map((feature) => (
                          <div key={feature} className="flex items-start gap-3">
                            <CheckCircle className="h-5 w-5 text-brand-blue mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className={`relative ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                      <div className="aspect-[4/3] bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center">
                        <div className="text-center p-8">
                          <Icon className="h-24 w-24 text-gray-400 mx-auto mb-4" />
                          <p className="text-gray-500">Service image placeholder</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-brand-blue text-white section-padding">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-lg mb-8 text-white/90">
                Contact us today for a free consultation and quote. We'll create a customized cleaning plan that fits your needs and budget.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-md bg-white text-brand-blue px-8 py-4 text-lg font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all"
              >
                Get Your Free Quote
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}