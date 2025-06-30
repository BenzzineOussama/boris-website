import { Users, Clock, Shield, Leaf, Award, HeartHandshake } from 'lucide-react'

const features = [
  {
    icon: Shield,
    title: 'Certified & Compliant',
    description: 'ISO certified, EPA approved, and FDA compliant - we meet the highest industry standards.',
  },
  {
    icon: Users,
    title: 'Experienced Team',
    description: 'Our trained professionals have over 15 years of experience in commercial cleaning.',
  },
  {
    icon: Clock,
    title: '24/7 Availability',
    description: 'Emergency cleaning services available round the clock for your urgent needs.',
  },
  {
    icon: Leaf,
    title: 'Eco-Friendly Products',
    description: 'We use environmentally safe cleaning products that are effective yet gentle.',
  },
  {
    icon: Award,
    title: 'Quality Guarantee',
    description: '100% satisfaction guarantee with every service we provide.',
  },
  {
    icon: HeartHandshake,
    title: 'Trusted Partner',
    description: 'Building long-term relationships with businesses across all industries.',
  },
]

export default function WhyChooseUs() {
  return (
    <section className="section-padding bg-white">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-gray-900 mb-6">
              Why Choose <span className="text-brand-blue">Boris Public Health</span>?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              When you partner with Boris Public Health, you're choosing more than just a cleaning service. 
              You're investing in the health, safety, and success of your business.
            </p>
            
            <div className="space-y-6">
              {features.slice(0, 3).map((feature) => {
                const Icon = feature.icon
                return (
                  <div key={feature.title} className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 bg-brand-blue/10 rounded-lg flex items-center justify-center">
                        <Icon className="h-5 w-5 text-brand-blue" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-gray-900 mb-1">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.slice(3).map((feature, index) => {
              const Icon = feature.icon
              return (
                <div
                  key={feature.title}
                  className="card text-center hover:shadow-lg transition-all duration-300"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-16 h-16 bg-brand-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-8 w-8 text-brand-blue" />
                  </div>
                  <h3 className="font-heading font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {feature.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 p-8 bg-gray-50 rounded-2xl">
          <div className="text-center">
            <div className="text-3xl font-bold text-brand-blue mb-1">15+</div>
            <div className="text-sm text-gray-600">Years of Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-brand-blue mb-1">500+</div>
            <div className="text-sm text-gray-600">Happy Clients</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-brand-blue mb-1">1000+</div>
            <div className="text-sm text-gray-600">Projects Completed</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-brand-blue mb-1">100%</div>
            <div className="text-sm text-gray-600">Satisfaction Rate</div>
          </div>
        </div>
      </div>
    </section>
  )
}