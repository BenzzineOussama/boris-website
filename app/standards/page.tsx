import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { Shield, Award, CheckCircle, FileCheck, Leaf, Users } from 'lucide-react'

const certifications = [
  {
    id: 'iso',
    icon: Shield,
    title: 'ISO Certified',
    subtitle: 'International Organization for Standardization',
    description: 'Our ISO certification demonstrates our commitment to maintaining the highest quality standards in all our cleaning services.',
    benefits: [
      'Consistent service quality across all locations',
      'Documented processes and procedures',
      'Regular quality audits and improvements',
      'International recognition and trust',
      'Reduced risks and enhanced safety',
    ],
  },
  {
    id: 'epa',
    icon: Leaf,
    title: 'EPA Approved',
    subtitle: 'Environmental Protection Agency',
    description: 'We use only EPA-approved cleaning products and methods that are safe for both people and the environment.',
    benefits: [
      'Environmentally safe cleaning products',
      'Reduced chemical exposure',
      'Compliance with environmental regulations',
      'Sustainable cleaning practices',
      'Protection of indoor air quality',
    ],
  },
  {
    id: 'fda',
    icon: FileCheck,
    title: 'FDA Compliant',
    subtitle: 'Food and Drug Administration',
    description: 'Our cleaning protocols meet FDA requirements, making us the ideal choice for facilities that require the highest hygiene standards.',
    benefits: [
      'Safe for food service environments',
      'Medical-grade cleaning protocols',
      'Proper sanitization procedures',
      'Documentation and traceability',
      'Regular compliance updates',
    ],
  },
]

const additionalStandards = [
  {
    icon: Award,
    title: 'OSHA Compliance',
    description: 'All our staff are trained in OSHA safety standards to ensure a safe working environment.',
  },
  {
    icon: Users,
    title: 'Bonded & Insured',
    description: 'Fully bonded and insured for your peace of mind and protection.',
  },
  {
    icon: CheckCircle,
    title: 'Background Checked',
    description: 'All team members undergo thorough background checks and continuous training.',
  },
]

export default function StandardsPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-gray-50 to-white py-16 sm:py-20">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl sm:text-5xl font-heading font-bold text-gray-900 mb-6">
                Our <span className="text-brand-blue">Standards & Certifications</span>
              </h1>
              <p className="text-lg text-gray-600">
                At Boris Public Health, we hold ourselves to the highest industry standards. 
                Our certifications and compliance demonstrate our unwavering commitment to quality, safety, and environmental responsibility.
              </p>
            </div>
          </div>
        </section>

        {/* Main Certifications */}
        <section className="section-padding">
          <div className="container">
            <div className="space-y-20">
              {certifications.map((cert, index) => {
                const Icon = cert.icon
                return (
                  <div
                    key={cert.id}
                    id={`${cert.id}-certification`}
                    className="grid lg:grid-cols-2 gap-12 items-center"
                  >
                    <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                      <div className="flex items-start gap-4 mb-6">
                        <div className="w-20 h-20 bg-brand-blue rounded-xl flex items-center justify-center flex-shrink-0">
                          <Icon className="h-10 w-10 text-white" />
                        </div>
                        <div>
                          <h2 className="text-3xl font-heading font-bold text-gray-900">
                            {cert.title}
                          </h2>
                          <p className="text-lg text-brand-blue font-medium">
                            {cert.subtitle}
                          </p>
                        </div>
                      </div>
                      
                      <p className="text-lg text-gray-600 mb-6">
                        {cert.description}
                      </p>
                      
                      <div className="space-y-3">
                        <h3 className="font-heading font-semibold text-gray-900 mb-3">
                          What this means for you:
                        </h3>
                        {cert.benefits.map((benefit) => (
                          <div key={benefit} className="flex items-start gap-3">
                            <CheckCircle className="h-5 w-5 text-brand-blue mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className={`relative ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                      <div className="bg-gradient-to-br from-brand-blue/5 to-brand-blue/10 rounded-2xl p-12 text-center">
                        <Icon className="h-32 w-32 text-brand-blue mx-auto mb-6" />
                        <div className="text-2xl font-bold text-gray-900 mb-2">{cert.title}</div>
                        <div className="text-gray-600">Certification Badge</div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Additional Standards */}
        <section className="section-padding bg-gray-50">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl sm:text-4xl font-heading font-bold text-gray-900 mb-4">
                Additional <span className="text-brand-blue">Standards We Maintain</span>
              </h2>
              <p className="text-lg text-gray-600">
                Beyond our primary certifications, we maintain several additional standards to ensure the best service possible.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {additionalStandards.map((standard) => {
                const Icon = standard.icon
                return (
                  <div key={standard.title} className="card text-center">
                    <div className="w-16 h-16 bg-brand-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-8 w-8 text-brand-blue" />
                    </div>
                    <h3 className="text-xl font-heading font-semibold text-gray-900 mb-2">
                      {standard.title}
                    </h3>
                    <p className="text-gray-600">
                      {standard.description}
                    </p>
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
                Experience the Difference Our Standards Make
              </h2>
              <p className="text-lg mb-8 text-white/90">
                When you choose Boris Public Health, you're choosing a partner committed to excellence in every aspect of our service.
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