import Link from 'next/link'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { ArrowRight, CheckCircle } from 'lucide-react'
import { ScrollAnimationClient } from '@/components/scroll-animation-client'

export default function BearingsPage() {
  return (
    <ScrollAnimationClient>
      <div className="min-h-screen bg-background">
        <Header />

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 pt-32 lg:pt-40 pb-20 lg:pb-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 scroll-animate">
            <div className="space-y-4">
              <p className="text-primary font-semibold text-sm tracking-widest uppercase">Marine Bearings</p>
              <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Water-Lubricated Stern Gear Bearings
              </h1>
            </div>
            <p className="text-lg text-foreground/70 leading-relaxed">
              OSEW manufactures precision water-lubricated bearings engineered specifically for stern gear systems in marine vessels. Built from durable elastomer materials that excel in aquatic environments, our bearings provide exceptional corrosion resistance and wear performance across a comprehensive size range.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-sm font-semibold hover:opacity-90 transition-opacity"
            >
              Request Specifications
              <ArrowRight size={18} />
            </Link>
          </div>
          <div className="relative h-96 lg:h-full scroll-animate-image">
            <img
              src="/images/bearings.png"
              alt="Water-Lubricated Bearings"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-secondary/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-32">
          <div className="space-y-12">
            <div className="space-y-4 scroll-animate">
              <p className="text-primary font-semibold text-sm tracking-widest uppercase">Core Specifications</p>
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground">Bearing Materials & Construction</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4 scroll-animate" style={{ animationDelay: '100ms' }}>
                <h3 className="text-2xl font-bold text-foreground">Material Composition</h3>
                <ul className="space-y-3">
                  {[
                    'High-durometer nitrile rubber for maximum wear resistance',
                    'Neoprene rubber options for specialized applications',
                    'Optimized elastomer blends for aquatic environments',
                    'Superior corrosion and abrasion resistance',
                  ].map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle size={20} className="text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground/80">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-4 scroll-animate" style={{ animationDelay: '200ms' }}>
                <h3 className="text-2xl font-bold text-foreground">Size & Capacity Range</h3>
                <ul className="space-y-3">
                  {[
                    '25mm to 250mm bearing diameter',
                    'Up to 1000mm bearing length',
                    'Flange-mounted bearing configurations',
                    'Flangeless bearing variants available',
                  ].map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle size={20} className="text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground/80">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Details */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-32">
        <div className="space-y-12">
          <div className="space-y-4 scroll-animate">
            <p className="text-primary font-semibold text-sm tracking-widest uppercase">Engineering Excellence</p>
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground">Water as Lubrication Medium</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6 bg-secondary/5 p-8 rounded-lg scroll-animate" style={{ animationDelay: '100ms' }}>
              <h3 className="text-2xl font-bold text-foreground">Performance Advantages</h3>
              <ul className="space-y-4">
                {[
                  'Water acts as both lubricant and coolant for continuous operation',
                  'Elastomer material absorbs water while maintaining structural integrity',
                  'Self-lubricating design eliminates conventional lubrication systems',
                  'Extended bearing lifespan with minimal maintenance requirements',
                ].map((advantage, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span className="text-foreground/80">{advantage}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-6 bg-secondary/5 p-8 rounded-lg scroll-animate" style={{ animationDelay: '200ms' }}>
              <h3 className="text-2xl font-bold text-foreground">Classification Types</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Flange Bearings</h4>
                  <p className="text-foreground/70">Equipped with mounting flange for secure installation to shaft systems and structural frames.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Flangeless Bearings</h4>
                  <p className="text-foreground/70">Direct cylindrical design for space-constrained installations and specialized stern gear configurations.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-32 text-center">
          <div className="space-y-6 scroll-animate">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
              Engineered for Reliable Marine Operations
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Our water-lubricated bearings are manufactured to exacting standards with rigorous quality control to ensure optimal performance in demanding maritime environments.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-sm font-semibold hover:opacity-90 transition-opacity"
            >
              Contact for Technical Consultation
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      </div>
    </ScrollAnimationClient>
  )
}
