import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import Link from 'next/link'
import { ChevronRight, ArrowRight, CheckCircle } from 'lucide-react'
import { ScrollAnimationClient } from '@/components/scroll-animation-client'

export const metadata = {
  title: 'Hydraulic Lifting Winches | OSEW',
  description: 'Heavy-duty hydraulic lifting winches for fishing vessels with high pulling capacity. Custom-engineered for purse seine and commercial fishing operations.',
}

export default function HydraulicWinchesPage() {
  return (
    <ScrollAnimationClient>
      <div className="min-h-screen bg-background">
        <Header />

      {/* Breadcrumb */}
      <div className="border-b border-border bg-secondary/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-3 flex items-center gap-2 text-sm">
          <Link href="/products" className="text-foreground/70 hover:text-foreground transition-colors">
            Products
          </Link>
          <ChevronRight size={16} className="text-foreground/70" />
          <span className="text-foreground font-semibold">Hydraulic Lifting Winches</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-32">
        <div className="space-y-6">
          <div className="space-y-4">
            <p className="text-primary font-semibold text-sm tracking-widest uppercase">Product</p>
            <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Heavy-Duty Hydraulic Lifting Winches
            </h1>
          </div>
          <p className="text-xl text-foreground/70 max-w-3xl">
            Custom-engineered hydraulic lifting winches with high line-pull capacity for demanding commercial fishing operations. Continuous-duty rated with robust construction for purse seine and trawling applications.
          </p>
        </div>
      </section>

      {/* Product Image & Specs */}
      <section className="grid lg:grid-cols-2 gap-16 items-start max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-32">
        <div className="relative h-96 lg:h-full scroll-animate-image">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg" />
          <img
            src="/images/power-block-blue.png"
            alt="Hydraulic Power Block"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        <div className="space-y-8 scroll-animate">
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-3">Specifications</h2>
              <div className="space-y-4">
                {[
                  { label: 'Type', value: 'Hydraulic powered deck machinery' },
                  { label: 'Applications', value: 'Purse seine and trawling operations' },
                  { label: 'Line Pull Capacity', value: 'Customizable from 5-80 tons' },
                  { label: 'Duty Rating', value: 'Continuous-duty rated for extended operations' },
                  { label: 'Motor Type', value: 'High-torque variable displacement' },
                  { label: 'Maintenance', value: 'Low maintenance design with extended service intervals' },
                ].map((spec, i) => (
                  <div key={i} className="flex justify-between items-start gap-4">
                    <span className="font-semibold text-foreground min-w-fit">{spec.label}</span>
                    <span className="text-foreground/70 text-right">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Key Features */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-foreground">Key Features</h3>
            <div className="space-y-3">
              {[
                'High line-pull capacity for demanding operations',
                'Continuous-duty rated for extended trawling',
                'Robust drum and gearbox construction',
                'Variable speed control for operational flexibility',
                'Custom configurations for vessel integration',
                'Proven durability in harsh marine environments',
              ].map((feature, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle size={20} className="text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-foreground/80">{feature}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-sm font-semibold hover:opacity-90 transition-opacity group"
          >
            Request Specifications
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      {/* Design & Customization */}
      <section className="bg-secondary/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-32">
          <div className="space-y-12">
            <div className="space-y-4 scroll-animate">
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground">Custom Engineering</h2>
              <p className="text-lg text-foreground/70 max-w-3xl">
                Each winch system is engineered for your specific vessel layout, hydraulic capacity, and operational requirements.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  step: '01',
                  title: 'Consultation',
                  desc: 'Vessel specifications, deck space, hydraulic power availability',
                },
                {
                  step: '02',
                  title: 'Design',
                  desc: 'Custom line-pull sizing and control system optimization',
                },
                {
                  step: '03',
                  title: 'Manufacturing',
                  desc: 'Precision fabrication and assembly with quality control',
                },
                {
                  step: '04',
                  title: 'Testing',
                  desc: 'Load testing and performance validation',
                },
                {
                  step: '05',
                  title: 'Installation',
                  desc: 'Technical support for deck installation and integration',
                },
                {
                  step: '06',
                  title: 'Commissioning',
                  desc: 'System testing and operator training',
                },
              ].map((item, i) => (
                <div key={i} className="space-y-4 scroll-animate" style={{ animationDelay: `${i * 100}ms` }}>
                  <div className="text-4xl font-bold text-primary/20">{item.step}</div>
                  <div className="space-y-2">
                    <h3 className="font-bold text-foreground">{item.title}</h3>
                    <p className="text-sm text-foreground/70">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-32">
        <div className="space-y-12">
          <div className="space-y-4 scroll-animate">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground">Applications</h2>
            <p className="text-lg text-foreground/70">
              OSEW winches are engineered for diverse commercial fishing operations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {[
              {
                title: 'Purse Seine Vessels',
                desc: 'Quick-response winches for rapid net deployment and retrieval.',
                specs: ['Fast line speed capability', 'Quick drum reversals', 'Variable speed control'],
              },
              {
                title: 'Trawlers',
                desc: 'Heavy-load capacity winches for sustained trawling operations.',
                specs: ['High line-pull capacity', 'Continuous-duty rated', 'Extended endurance'],
              },
            ].map((app, i) => (
              <div key={i} className="space-y-4 scroll-animate" style={{ animationDelay: `${i * 100}ms` }}>
                <h3 className="text-xl font-bold text-foreground">{app.title}</h3>
                <p className="text-foreground/70">{app.desc}</p>
                <div className="space-y-2">
                  {app.specs.map((spec, j) => (
                    <div key={j} className="flex items-center gap-2 text-sm text-foreground/80">
                      <div className="w-1 h-1 bg-primary rounded-full" />
                      {spec}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="bg-secondary/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-32">
          <div className="space-y-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground scroll-animate">Technical Specifications</h2>

            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-4 scroll-animate" style={{ animationDelay: '100ms' }}>
                <h3 className="text-xl font-bold text-foreground">Standard Features</h3>
                <ul className="space-y-3">
                  {[
                    'Marine-grade construction',
                    'Variable displacement hydraulic motor',
                    'Robust drum design',
                    'Manual or power braking options',
                    'Safety load-holding valve',
                    'Cable or synthetic rope compatibility',
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-foreground/80">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-4 scroll-animate" style={{ animationDelay: '200ms' }}>
                <h3 className="text-xl font-bold text-foreground">Optional Configurations</h3>
                <ul className="space-y-3">
                  {[
                    'Dual-motor systems for increased power',
                    'Wireless remote control systems',
                    'Load indicators and monitoring',
                    'Custom drum sizes and configurations',
                    'Integrated hydraulic power packs',
                    'Pressure relief and safety systems',
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-foreground/80">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-32 text-center space-y-8">
        <div className="space-y-4 scroll-animate">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
            Ready to Upgrade Your Deck Machinery?
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Contact our technical team with your vessel specifications and operational requirements for a custom winch design and quote.
          </p>
        </div>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-sm font-semibold hover:opacity-90 transition-opacity"
        >
          Request Custom Design
          <ArrowRight size={18} />
        </Link>
      </section>

      <Footer />
      </div>
    </ScrollAnimationClient>
  )
}
