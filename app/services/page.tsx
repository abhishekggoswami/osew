import Link from 'next/link'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { ArrowRight, Wrench, Zap, CheckCircle, BarChart3 } from 'lucide-react'
import { ScrollAnimationClient } from '@/components/scroll-animation-client'

export default function ServicesPage() {
  const services = [
    {
      id: 1,
      title: 'Dynamic Balancing Services',
      tagline: 'Precision Equipment Testing',
      description: 'Professional balancing of propellers, shafts, and rotating components to eliminate vibration and extend component life.',
      benefits: ['Reduced vibration', 'Extended component life', 'Fuel efficiency', 'Lower operating noise', 'Certified standards'],
      image: '/images/dynamic-balancing-lab.png',
      reverse: false,
    },
    {
      id: 2,
      title: 'Hydraulic System Optimization',
      tagline: 'Performance Enhancement',
      description: 'Complete hydraulic system analysis and optimization including flow calculations, pressure settings, and performance tuning. Improve efficiency and reduce energy consumption.',
      benefits: ['Performance analysis', 'System optimization', 'Energy efficiency', 'Pressure calibration', 'Detailed reports'],
      image: '/images/hydraulic-optimization-testing.png',
      reverse: true,
    },
    {
      id: 3,
      title: 'Repair & Maintenance',
      tagline: 'Preventive & Corrective Services',
      description: 'Comprehensive repair, refurbishment, and maintenance services for marine propulsion systems. Full diagnostics, component replacement, and system restoration.',
      benefits: ['Component inspection', 'Refurbishment services', 'Emergency repairs', 'Preventive maintenance', 'On-call support'],
      image: '/images/repair-maintenance-facility.png',
      reverse: false,
    },
    {
      id: 4,
      title: 'Technical Consulting',
      tagline: 'Expert Engineering Support',
      description: 'Professional consulting for marine propulsion design, vessel retrofitting, and system integration. Custom engineering solutions tailored to your operational requirements.',
      benefits: ['System design', 'Vessel retrofitting', 'Technical assessment', 'Performance prediction', 'Compliance support'],
      image: '/images/technical-consulting-shipyard.png',
      reverse: true,
    },
  ]

  return (
    <ScrollAnimationClient>
      <div className="min-h-screen bg-background">
        <Header />

        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-32">
          <div className="space-y-4 sm:space-y-6 scroll-animate">
            <div className="space-y-3 sm:space-y-4">
              <p className="text-primary font-semibold text-xs sm:text-sm tracking-widest uppercase">Marine Services</p>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight pt-6 sm:pt-8">
                Engineering Services & Technical Support
              </h1>
            </div>
            <p className="text-base sm:text-lg lg:text-xl text-foreground/70 max-w-3xl">
              From precision testing to system optimization, OSEW provides comprehensive marine engineering services backed by decades of industry expertise.
            </p>
          </div>
        </section>

        {/* Services - Split Screen Layout */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-32">
          <div className="space-y-12 sm:space-y-16 md:space-y-20 lg:space-y-24">
            {services.map((service, serviceIndex) => (
              <div
                key={service.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center scroll-animate ${service.reverse ? 'lg:auto-cols-fr' : ''}`}
              >
                {/* Image */}
                <div className={`relative h-64 sm:h-80 md:h-96 lg:h-full group scroll-animate-image ${service.reverse ? 'lg:order-last' : ''}`}>
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg" />
                  <img
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    className="w-full h-full object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Content */}
                <div className="space-y-4 sm:space-y-6 scroll-animate">
                  <div className="space-y-2 sm:space-y-3">
                    <p className="text-primary font-semibold text-xs sm:text-sm tracking-widest uppercase">{service.tagline}</p>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">{service.title}</h2>
                  </div>

                  <p className="text-sm sm:text-base lg:text-lg text-foreground/70 leading-relaxed">{service.description}</p>

                  {/* Benefits Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                    {service.benefits.map((benefit, i) => (
                      <div key={i} className="flex items-start gap-2 scroll-animate" style={{ animationDelay: `${i * 50}ms` }}>
                        <CheckCircle size={16} className="text-primary flex-shrink-0 mt-1 sm:mt-0.5 sm:w-5 sm:h-5" />
                        <span className="text-sm sm:text-base text-foreground/80">{benefit}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-sm font-semibold hover:opacity-90 transition-opacity group"
                  >
                    Learn More
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Service Capabilities Grid */}
        <section className="bg-secondary/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-32">
            <div className="space-y-12">
              <div className="space-y-4 scroll-animate">
                <p className="text-primary font-semibold text-sm tracking-widest uppercase">Capabilities</p>
                <h2 className="text-4xl lg:text-5xl font-bold text-foreground">Full-Service Marine Engineering</h2>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12">
                {[
                  {
                    icon: Wrench,
                    title: 'In-House Manufacturing',
                    desc: 'State-of-the-art fabrication, machining, and assembly facilities with precision measurement equipment.',
                  },
                  {
                    icon: Zap,
                    title: 'Performance Testing',
                    desc: 'Comprehensive pressure testing, performance validation, and trial operations before delivery.',
                  },
                  {
                    icon: BarChart3,
                    title: 'Data Analysis',
                    desc: 'Detailed performance analytics and optimization recommendations for your marine systems.',
                  },
                  {
                    icon: CheckCircle,
                    title: 'Quality Assurance',
                    desc: 'Rigorous quality control at every manufacturing stage with comprehensive testing and validation.',
                  },
                  {
                    icon: Wrench,
                    title: 'On-Site Maintenance',
                    desc: 'Specialized on-site maintenance services for fishing vessels including propeller servicing, hydraulic system support, and emergency repairs.',
                  },
                ].map((capability, i) => {
                  const Icon = capability.icon
                  return (
                    <div key={i} className="space-y-4 scroll-animate" style={{ animationDelay: `${i * 100}ms` }}>
                      <div className="flex items-start gap-3 sm:gap-4">
                        <Icon size={24} className="text-primary flex-shrink-0 sm:w-8 sm:h-8 mt-1 sm:mt-0" />
                        <div className="space-y-1 sm:space-y-2">
                          <h3 className="text-lg sm:text-xl font-bold text-foreground">{capability.title}</h3>
                          <p className="text-sm sm:text-base text-foreground/70">{capability.desc}</p>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Support & Logistics */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-32 mb-12 sm:mb-20 lg:mb-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            <div className="space-y-8 scroll-animate">
              <div className="space-y-4">
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold text-foreground">Global Support & Logistics</h2>
                <p className="text-base sm:text-lg text-foreground/70">We don't just manufacture—we provide complete support for your marine operations worldwide.</p>
              </div>

              <div className="space-y-4">
                {[
                  'Technical consultation and engineering support',
                  'Spare parts availability and logistics',
                  'Installation guidance and support',
                  'Performance monitoring and optimization',
                  'Preventive maintenance planning',
                  'Emergency repair response',
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2 sm:gap-3 scroll-animate" style={{ animationDelay: `${i * 50}ms` }}>
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 sm:mt-2.5 flex-shrink-0" />
                    <p className="text-sm sm:text-base text-foreground/80">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative h-96 lg:h-full scroll-animate-image">
              <div className="absolute inset-0 bg-gradient-to-bl from-primary/10 to-transparent rounded-lg" />
              <img
                src="/images/global-logistics-operations.png"
                alt="Global Operations"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-secondary/5 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-32 rounded-lg border border-border mb-12 sm:mb-20 lg:mb-32">
          <div className="space-y-6 sm:space-y-8 text-center scroll-animate">
            <div className="space-y-3 sm:space-y-4">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold text-foreground">
                Need Marine Engineering Services?
              </h2>
              <p className="text-base sm:text-lg text-foreground/70 max-w-2xl mx-auto">
                Contact our technical team to discuss your specific requirements and how we can support your marine operations.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-sm font-semibold hover:opacity-90 transition-opacity"
            >
              Request Technical Consultation
              <ArrowRight size={18} />
            </Link>
          </div>
        </section>

        <Footer />
      </div>
    </ScrollAnimationClient>
  )
}
