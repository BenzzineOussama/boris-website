import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { Target, Eye, Heart, Users, Award, Clock } from 'lucide-react'

const values = [
  {
    icon: Heart,
    title: 'Health & Safety First',
    description: 'We prioritize the health and safety of our clients and their environments above all else.',
  },
  {
    icon: Award,
    title: 'Excellence in Service',
    description: 'We strive for excellence in every cleaning task, no matter how big or small.',
  },
  {
    icon: Users,
    title: 'Customer-Centric',
    description: 'Your satisfaction is our success. We listen, adapt, and deliver beyond expectations.',
  },
  {
    icon: Target,
    title: 'Reliability',
    description: 'Consistent, dependable service you can count on, every single time.',
  },
]

const milestones = [
  { year: '2009', event: 'Boris Public Health founded in Beirut with a mission to revolutionize commercial cleaning in Lebanon' },
  { year: '2012', event: 'Achieved ISO certification, becoming one of the first certified cleaning companies in the Middle East' },
  { year: '2015', event: 'Expanded services to include medical facility cleaning, serving major hospitals in Beirut' },
  { year: '2018', event: 'Received EPA approval and established partnerships with leading Lebanese healthcare institutions' },
  { year: '2020', event: 'Became FDA compliant, enabling food service facility cleaning across Lebanon and the region' },
  { year: '2024', event: 'Celebrating 15 years of excellence with over 500 satisfied clients throughout Lebanon' },
]

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-gray-50 to-white py-16 sm:py-20">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl sm:text-5xl font-heading font-bold text-gray-900 mb-6">
                About <span className="text-brand-blue">Boris Public Health</span>
              </h1>
              <p className="text-lg text-gray-600">
                For over 15 years, we've been setting the standard for professional cleaning services, 
                combining cutting-edge techniques with unwavering commitment to health and safety.
              </p>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="section-padding">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="mb-8">
                  <div className="flex items-center gap-3 mb-4">
                    <Target className="h-8 w-8 text-brand-blue" />
                    <h2 className="text-3xl font-heading font-bold text-gray-900">Our Mission</h2>
                  </div>
                  <p className="text-lg text-gray-600">
                    To provide exceptional cleaning services that protect public health, enhance workplace environments, 
                    and exceed client expectations through the use of certified products and proven methodologies.
                  </p>
                </div>
                
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <Eye className="h-8 w-8 text-brand-blue" />
                    <h2 className="text-3xl font-heading font-bold text-gray-900">Our Vision</h2>
                  </div>
                  <p className="text-lg text-gray-600">
                    To be the most trusted name in commercial cleaning, recognized for our commitment to health, 
                    safety, and environmental responsibility while fostering long-term partnerships with our clients.
                  </p>
                </div>
              </div>
              
              <div className="relative">
                <div className="aspect-[4/3] bg-gradient-to-br from-brand-blue to-brand-blue-dark rounded-2xl flex items-center justify-center">
                  <div className="text-white text-center p-8">
                    <div className="text-6xl mb-4">🏢</div>
                    <p className="text-xl font-medium">15+ Years of Excellence</p>
                    <p className="text-sm mt-2 opacity-90">Serving businesses with pride</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="section-padding bg-gray-50">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl sm:text-4xl font-heading font-bold text-gray-900 mb-4">
                Our Core <span className="text-brand-blue">Values</span>
              </h2>
              <p className="text-lg text-gray-600">
                These values guide everything we do and shape how we serve our clients every day.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value) => {
                const Icon = value.icon
                return (
                  <div key={value.title} className="text-center">
                    <div className="w-16 h-16 bg-brand-blue rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-heading font-semibold text-gray-900 mb-2">
                      {value.title}
                    </h3>
                    <p className="text-gray-600">
                      {value.description}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Our Journey */}
        <section className="section-padding">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl sm:text-4xl font-heading font-bold text-gray-900 mb-4">
                Our <span className="text-brand-blue">Journey</span>
              </h2>
              <p className="text-lg text-gray-600">
                From humble beginnings to industry leadership, here's how we've grown over the years.
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <div className="space-y-8">
                {milestones.map((milestone, index) => (
                  <div key={milestone.year} className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-24 h-24 bg-brand-blue rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-lg">{milestone.year}</span>
                      </div>
                    </div>
                    <div className="flex-1 pt-6">
                      <div className="h-0.5 bg-gray-200 mb-4"></div>
                      <p className="text-gray-700">{milestone.event}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="section-padding bg-gray-50">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl sm:text-4xl font-heading font-bold text-gray-900 mb-4">
                Meet Our <span className="text-brand-blue">Leadership Team</span>
              </h2>
              <p className="text-lg text-gray-600">
                Dedicated professionals committed to delivering excellence in every aspect of our service.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="card text-center">
                <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-16 w-16 text-gray-400" />
                </div>
                <h3 className="text-xl font-heading font-semibold text-gray-900 mb-1">
                  Boris Khoury
                </h3>
                <p className="text-brand-blue font-medium mb-2">Founder & CEO</p>
                <p className="text-gray-600 text-sm">
                  With over 20 years serving the Lebanese market, Boris leads with vision and dedication to excellence.
                </p>
              </div>
              
              <div className="card text-center">
                <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-16 w-16 text-gray-400" />
                </div>
                <h3 className="text-xl font-heading font-semibold text-gray-900 mb-1">
                  Nadine Haddad
                </h3>
                <p className="text-brand-blue font-medium mb-2">Operations Director</p>
                <p className="text-gray-600 text-sm">
                  Nadine ensures our high standards are maintained across all client locations throughout Lebanon.
                </p>
              </div>
              
              <div className="card text-center">
                <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-16 w-16 text-gray-400" />
                </div>
                <h3 className="text-xl font-heading font-semibold text-gray-900 mb-1">
                  Karim Saad
                </h3>
                <p className="text-brand-blue font-medium mb-2">Quality Assurance Manager</p>
                <p className="text-gray-600 text-sm">
                  Karim oversees our certifications and ensures compliance with Lebanese and international standards.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-brand-blue text-white section-padding">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-6">
                Ready to Experience the Boris Public Health Difference?
              </h2>
              <p className="text-lg mb-8 text-white/90">
                Join hundreds of satisfied clients who trust us with their cleaning needs.
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