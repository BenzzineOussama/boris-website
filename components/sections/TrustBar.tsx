import { Shield, Award, CheckCircle } from 'lucide-react'

const certifications = [
  {
    icon: Shield,
    title: 'ISO Certified',
    description: 'International quality standards',
  },
  {
    icon: Award,
    title: 'EPA Approved',
    description: 'Environmental protection compliance',
  },
  {
    icon: CheckCircle,
    title: 'FDA Compliant',
    description: 'Food & drug safety standards',
  },
]

export default function TrustBar() {
  return (
    <section className="bg-brand-blue text-white py-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {certifications.map((cert, index) => {
            const Icon = cert.icon
            return (
              <div
                key={cert.title}
                className="flex items-center justify-center gap-4 animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <Icon className="h-12 w-12 text-white/90" />
                <div>
                  <h3 className="font-heading font-semibold text-lg">{cert.title}</h3>
                  <p className="text-sm text-white/80">{cert.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}