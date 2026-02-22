'use client'

import Link from 'next/link'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { ArrowRight, Zap, Wrench, Users, Globe } from 'lucide-react'
import { useScrollAnimation } from '@/hooks/use-scroll-animation'

export default function AboutPage() {
  // Animation hooks for each section - each returns { ref, isVisible }
  const hero = useScrollAnimation()
  const about = useScrollAnimation()
  const values = useScrollAnimation()
  const capabilities = useScrollAnimation()
  const team = useScrollAnimation()
  const commitment = useScrollAnimation()
  const cta = useScrollAnimation()

  const valuesArray = [
    {
      icon: Zap,
      title: 'Engineering Excellence',
      description: 'Precision engineering combined with practical marine knowledge to deliver reliable solutions.',
    },
    {
      icon: Wrench,
      title: 'Quality & Reliability',
      description: 'Sea-tested equipment built to withstand harsh marine environments with minimal maintenance.',
    },
    {
      icon: Users,
      title: 'Technical Partnership',
      description: 'Close collaboration with customers from design through commissioning and ongoing support.',
    },
    {
      icon: Globe,
      title: 'Global Standards',
      description: 'Manufacturing and testing standards aligned with international marine industry requirements.',
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 lg:pt-40 pb-16 sm:pb-20 lg:pb-32" ref={hero.ref}>
        <div className="space-y-4 sm:space-y-6">
          <div className="space-y-3 sm:space-y-4">
            <p className={`text-primary font-semibold text-xs sm:text-sm tracking-widest uppercase transition-all duration-700 ${hero.isVisible ? 'animate-fadeInUp opacity-100' : 'opacity-0'}`} style={{ animationDelay: hero.isVisible ? '0ms' : '0ms' }}>Our Story</p>
            <h1 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight transition-all duration-700 ${hero.isVisible ? 'animate-fadeInUp opacity-100' : 'opacity-0'}`} style={{ animationDelay: hero.isVisible ? '100ms' : '0ms' }}>
              Marine Engineering Since 1995
            </h1>
          </div>
          <p className={`text-base sm:text-lg lg:text-xl text-foreground/70 max-w-3xl transition-all duration-700 ${hero.isVisible ? 'animate-fadeInUp opacity-100' : 'opacity-0'}`} style={{ animationDelay: hero.isVisible ? '200ms' : '0ms' }}>
            OSEW is a specialized marine engineering manufacturer serving commercial fishing fleets worldwide with precision-engineered propulsion and hydraulic systems.
          </p>
        </div>
      </section>

      {/* About Section - Split Screen */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-32" ref={about.ref}>
        <div className={`space-y-6 sm:space-y-8 transition-all duration-700 ${about.isVisible ? 'animate-fadeInLeft opacity-100' : 'opacity-0'}`}>
          <div className="space-y-3 sm:space-y-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">30 Years of Marine Engineering Excellence</h2>
            <p className="text-base sm:text-lg text-foreground/70">
              For 30 years since 1995, OSEW has been a trusted partner to commercial fishing operations around the world. Our expertise spans custom propeller design, heavy-duty hydraulic systems, and marine propulsion technology.
            </p>
          </div>

          <div className="space-y-3 sm:space-y-4">
            {[
              'In-house design, engineering, and manufacturing',
              'Certified manufacturing processes',
              'Sea-proven equipment trusted by thousands of vessels',
              'Global technical support and spare parts availability',
              'Custom solutions engineered to your specifications',
              'Decades of operational and field experience',
            ].map((item, i) => (
              <div key={i} className={`flex items-start gap-3 transition-all duration-700 ${about.isVisible ? 'animate-slideInUp opacity-100' : 'opacity-0'}`} style={{ animationDelay: about.isVisible ? `${i * 100}ms` : '0ms' }}>
                <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                <p className="text-foreground/80">{item}</p>
              </div>
            ))}
          </div>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-sm font-semibold hover:opacity-90 transition-opacity group w-fit"
          >
            Connect With Us
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className={`relative h-96 lg:h-full transition-all duration-700 ${about.isVisible ? 'animate-fadeInRight opacity-100' : 'opacity-0'}`}>
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg" />
          <img
            src="/images/cnc-lathe-manufacturing.png"
            alt="OSEW Manufacturing"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-secondary/5" ref={values.ref}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-32">
          <div className="space-y-12">
            <div className={`space-y-4 transition-all duration-700 ${values.isVisible ? 'animate-fadeInUp opacity-100' : 'opacity-0'}`}>
              <p className="text-primary font-semibold text-sm tracking-widest uppercase">What Drives Us</p>
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground">Our Core Values</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              {valuesArray.map((value, i) => {
                const Icon = value.icon
                return (
                  <div key={i} className={`space-y-4 transition-all duration-700 ${values.isVisible ? 'animate-scaleIn opacity-100' : 'opacity-0'}`} style={{ animationDelay: values.isVisible ? `${i * 150}ms` : '0ms' }}>
                    <div className="flex items-start gap-4">
                      <Icon size={32} className="text-primary flex-shrink-0" />
                      <div className="space-y-2">
                        <h3 className="text-xl font-bold text-foreground">{value.title}</h3>
                        <p className="text-foreground/70">{value.description}</p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Showcase */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-32" ref={capabilities.ref}>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className={`relative h-96 lg:h-full transition-all duration-700 ${capabilities.isVisible ? 'animate-fadeInLeft opacity-100' : 'opacity-0'}`}>
            <div className="absolute inset-0 bg-gradient-to-bl from-primary/10 to-transparent rounded-lg" />
            <img
              src="/images/cnc-propeller-machining.png"
              alt="Manufacturing Capabilities"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>

          <div className={`space-y-8 transition-all duration-700 ${capabilities.isVisible ? 'animate-fadeInRight opacity-100' : 'opacity-0'}`}>
            <div className="space-y-4">
              <h2 className="text-4xl font-bold text-foreground">Manufacturing & Engineering Capabilities</h2>
              <p className="text-lg text-foreground/70">
                Complete in-house capabilities from design through manufacturing, testing, and commissioning ensure quality at every stage.
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  title: 'Design Engineering',
                  items: ['Custom propeller design', 'Hydraulic system engineering', 'Performance optimization'],
                },
                {
                  title: 'Fabrication & Machining',
                  items: ['Heavy-duty fabrication', 'CNC machining', 'Precision welding and assembly'],
                },
                {
                  title: 'Testing & Quality',
                  items: ['Dynamic balancing', 'Pressure testing', 'Performance trials'],
                },
              ].map((section, i) => (
                <div key={i} className={`space-y-2 transition-all duration-700 ${capabilities.isVisible ? 'animate-slideInUp opacity-100' : 'opacity-0'}`} style={{ animationDelay: capabilities.isVisible ? `${i * 100}ms` : '0ms' }}>
                  <h3 className="font-bold text-foreground">{section.title}</h3>
                  <ul className="space-y-1">
                    {section.items.map((item, j) => (
                      <li key={j} className="flex items-center gap-2 text-foreground/80">
                        <span className="inline-block w-1 h-1 bg-primary rounded-full" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team & Culture */}
      <section className="bg-secondary/5" ref={team.ref}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-32">
          <div className="space-y-12">
            <div className={`space-y-4 text-center transition-all duration-700 ${team.isVisible ? 'animate-fadeInUp opacity-100' : 'opacity-0'}`}>
              <p className="text-primary font-semibold text-sm tracking-widest uppercase">Our Team</p>
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground">Marine Engineering Expertise</h2>
              <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
                Our team combines 30+ years of marine engineering experience with deep understanding of commercial fishing operations.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-12">
              {[
                {
                  number: '30+',
                  label: 'Years of Industry Experience',
                },
                {
                  number: '30,000+',
                  label: 'Vessels Equipped Worldwide',
                },
                {
                  number: '24/7',
                  label: 'Technical Support Available',
                },
              ].map((stat, i) => (
                <div key={i} className={`text-center space-y-2 transition-all duration-700 ${team.isVisible ? 'animate-scaleIn opacity-100' : 'opacity-0'}`} style={{ animationDelay: team.isVisible ? `${i * 150}ms` : '0ms' }}>
                  <div className="text-5xl font-bold text-primary">{stat.number}</div>
                  <p className="text-lg text-foreground/70">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-32" ref={commitment.ref}>
        <div className={`bg-gradient-to-r from-secondary to-secondary/50 border border-border rounded-lg p-12 lg:p-16 space-y-8 transition-all duration-700 ${commitment.isVisible ? 'animate-fadeInUp opacity-100' : 'opacity-0'}`}>
          <div className="space-y-4">
            <h2 className="text-4xl lg:text-5xl font-bold text-white">Our Commitment to You</h2>
            <p className="text-lg text-white/90">
              We're committed to delivering the highest quality marine propulsion and hydraulic systems, with technical excellence, reliability, and customer partnership at our core.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              'Engineering solutions customized to your vessel and operational needs',
              'Quality products backed by rigorous testing and certification',
              'Technical support from design through commissioning and beyond',
              'Global logistics and spare parts availability',
            ].map((commitmentItem, i) => (
              <div key={i} className={`flex items-start gap-3 transition-all duration-700 ${commitment.isVisible ? 'animate-slideInUp opacity-100' : 'opacity-0'}`} style={{ animationDelay: commitment.isVisible ? `${i * 100}ms` : '0ms' }}>
                <Zap size={20} className="text-white flex-shrink-0 mt-0.5" />
                <p className="text-white/90">{commitmentItem}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-32 text-center space-y-8" ref={cta.ref}>
        <div className={`space-y-4 transition-all duration-700 ${cta.isVisible ? 'animate-fadeInUp opacity-100' : 'opacity-0'}`}>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
            Let's Build Your Marine Solution
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Contact our technical team to discuss your vessel requirements and how OSEW can support your marine operations.
          </p>
        </div>
        <Link
          href="/contact"
          className={`inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-sm font-semibold hover:opacity-90 transition-all ${cta.isVisible ? 'animate-scaleIn opacity-100' : 'opacity-0'}`}
        >
          Get In Touch
          <ArrowRight size={18} />
        </Link>
      </section>

      <Footer />
    </div>
  )
}
