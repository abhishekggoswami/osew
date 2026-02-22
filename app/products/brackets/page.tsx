import Link from 'next/link'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { ArrowRight, CheckCircle } from 'lucide-react'
import { ScrollAnimationClient } from '@/components/scroll-animation-client'

export default function BracketsPage() {
  return (
    <ScrollAnimationClient>
      <div className="min-h-screen bg-background">
        <Header />

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 pt-32 lg:pt-40 pb-20 lg:pb-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 scroll-animate">
            <div className="space-y-4">
              <p className="text-primary font-semibold text-sm tracking-widest uppercase">Stern Gear Brackets</p>
              <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Marine-Grade Propeller Support Systems
              </h1>
            </div>
            <p className="text-lg text-foreground/70 leading-relaxed">
              OSEW manufactures precision P-brackets and A-type brackets from high-quality manganese bronze and aluminum bronze, engineered to support shaft systems and propellers. Our advanced hydrofoil-section design minimizes hydrodynamic resistance, enhancing vessel efficiency while maintaining structural integrity under demanding operational loads.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-sm font-semibold hover:opacity-90 transition-opacity"
            >
              Request Design Consultation
              <ArrowRight size={18} />
            </Link>
          </div>
          <div className="relative h-96 lg:h-full scroll-animate-image">
            <img
              src="/images/brackets.png"
              alt="Marine Brackets"
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
              <p className="text-primary font-semibold text-sm tracking-widest uppercase">Bracket Types & Features</p>
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground">Complete Shaft Support Solutions</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6 bg-white p-8 rounded-lg border border-border scroll-animate" style={{ animationDelay: '100ms' }}>
                <h3 className="text-2xl font-bold text-foreground">P-Type Brackets</h3>
                <p className="text-foreground/70">
                  Engineered to support shaft systems and accommodate propeller assemblies with optimized hydrodynamic performance.
                </p>
                <ul className="space-y-3">
                  {[
                    'Hydrofoil cross-section for minimal water resistance',
                    'Enhanced vessel efficiency through aerodynamic design',
                    'Supports complete shaft propeller system assembly',
                  ].map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle size={20} className="text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground/80">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-6 bg-white p-8 rounded-lg border border-border scroll-animate" style={{ animationDelay: '200ms' }}>
                <h3 className="text-2xl font-bold text-foreground">A-Type Brackets</h3>
                <p className="text-foreground/70">
                  Specialized configuration designed for specific vessel architectures and operational requirements.
                </p>
                <ul className="space-y-3">
                  {[
                    'Custom design to accommodate vessel layouts',
                    'Water-lubricated cutlass bearing integration',
                    'Structural optimization for specific applications',
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

      {/* Material & Specifications */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-32">
        <div className="space-y-12">
          <div className="space-y-4 scroll-animate">
            <p className="text-primary font-semibold text-sm tracking-widest uppercase">Material Excellence</p>
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground">Premium Bronze Alloys & Components</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6 scroll-animate" style={{ animationDelay: '100ms' }}>
              <h3 className="text-2xl font-bold text-foreground">Alloy Selection</h3>
              <ul className="space-y-4">
                {[
                  'Manganese bronze for superior corrosion resistance',
                  'Aluminum bronze for lightweight strength',
                  'High-tensile steel options for specialized requirements',
                  'Marine-grade certification compliance',
                ].map((material, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span className="text-foreground/80">{material}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-6 bg-secondary/5 p-8 rounded-lg scroll-animate" style={{ animationDelay: '200ms' }}>
              <h3 className="text-2xl font-bold text-foreground">Standard Supply Scope</h3>
              <ul className="space-y-3">
                {[
                  'Base bracket assembly with mounting provisions',
                  'Water-lubricated cutlass bearing bushing',
                  'Complete stainless steel fastener sets',
                  'Custom configurations per naval architect specifications',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle size={20} className="text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/80">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Engineering */}
      <section className="bg-secondary/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-32">
          <div className="space-y-12">
            <div className="space-y-4 scroll-animate">
              <p className="text-primary font-semibold text-sm tracking-widest uppercase">Custom Solutions</p>
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground">Built to Your Specifications</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Naval Architect Design',
                  description: 'Manufactured precisely to naval architect drawings and vessel specifications',
                },
                {
                  title: 'Design Optimization',
                  description: 'Hydrodynamic refinement to maximize efficiency and reduce drag',
                },
                {
                  title: 'Quality Assurance',
                  description: 'Comprehensive testing and certification for marine operations',
                },
              ].map((item, i) => (
                <div key={i} className="space-y-4 p-8 bg-white rounded-lg border border-border scroll-animate" style={{ animationDelay: `${i * 100}ms` }}>
                  <h3 className="text-lg font-bold text-foreground">{item.title}</h3>
                  <p className="text-foreground/70">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-32 text-center">
          <div className="space-y-6 scroll-animate">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
              Precision Brackets for Enhanced Vessel Performance
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              From initial consultation to final installation, OSEW delivers custom-engineered brackets that integrate seamlessly with your vessel's systems.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-sm font-semibold hover:opacity-90 transition-opacity"
            >
              Schedule Design Review
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
