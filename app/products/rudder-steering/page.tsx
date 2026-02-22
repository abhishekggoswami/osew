import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import Link from 'next/link'
import { ChevronRight, ArrowRight, CheckCircle } from 'lucide-react'
import { ScrollAnimationClient } from '@/components/scroll-animation-client'

export const metadata = {
  title: 'Power Steering System | OSEW',
  description: 'Advanced hydraulic power steering systems for fishing vessels. Responsive vessel control with smooth operation.',
}

export default function PowerSteeringPage() {
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
          <span className="text-foreground font-semibold">Power Steering System</span>
        </div>
      </div>

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-32">
        <div className="space-y-6">
          <div className="space-y-4">
            <p className="text-primary font-semibold text-sm tracking-widest uppercase">Product</p>
            <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Power Steering System
            </h1>
          </div>
          <p className="text-xl text-foreground/70 max-w-3xl">
            Advanced hydraulic power steering systems engineered for responsive vessel control, easy crew operation, and reliability in demanding commercial fishing environments.
          </p>
        </div>
      </section>

      {/* Image & Specs */}
      <section className="grid lg:grid-cols-2 gap-16 items-start max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-32">
        <div className="relative h-96 lg:h-full scroll-animate-image">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg" />
          <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Gemini_Generated_Image_ybuzgoybuzgoybuz-0BHVJSTb6sXtzy2rXklpvkkuwYtAvz.png" alt="Power Steering System" className="w-full h-full object-cover rounded-lg" />
        </div>

        <div className="space-y-8 scroll-animate">
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-3">System Specifications</h2>
              <div className="space-y-4">
                {[
                  { label: 'Steering Type', value: 'Hydraulic power-assisted steering system' },
                  { label: 'Control Response', value: 'Smooth and responsive with variable assist' },
                  { label: 'Operational Stress', value: 'Minimal crew physical effort required' },
                  { label: 'Control Options', value: 'Electronic and manual control integration' },
                  { label: 'Materials', value: '316L marine grade stainless steel construction' },
                  { label: 'Durability', value: 'Engineered for continuous fishing operations' },
                ].map((spec, i) => (
                  <div key={i} className="flex justify-between items-start gap-4">
                    <span className="font-semibold text-foreground min-w-fit">{spec.label}</span>
                    <span className="text-foreground/70 text-right">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-bold text-foreground">Key Features</h3>
            <div className="space-y-3">
              {[
                'Hydraulic power-assisted steering for easy operation',
                'Smooth responsive control for precise navigation',
                'Reduces physical strain on crew during extended operations',
                'Electronic control integration available',
                'Pressure relief and safety valve systems',
                'Extended service life in seawater operations',
              ].map((feature, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle size={20} className="text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-foreground/80">{feature}</p>
                </div>
              ))}
            </div>
          </div>

          <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-sm font-semibold hover:opacity-90 transition-opacity group">
            Request Technical Specs
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      {/* Engineering Excellence */}
      <section className="bg-secondary/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-32">
          <div className="space-y-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground">Advanced Steering Technology</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { step: '01', title: 'Vessel Assessment', desc: 'Size, speed profile, and operational requirements' },
                { step: '02', title: 'System Design', desc: 'Customized power steering configuration' },
                { step: '03', title: 'Engineering', desc: 'Hydraulic control optimization and tuning' },
                { step: '04', title: 'Manufacturing', desc: 'Precision assembly and integration' },
                { step: '05', title: 'Testing', desc: 'System performance and responsiveness validation' },
                { step: '06', title: 'Installation', desc: 'Onboard setup and operator training' },
              ].map((item, i) => (
                <div key={i} className="space-y-4">
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

      {/* System Components */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-32">
        <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-12">Complete System Packages</h2>
        <div className="grid md:grid-cols-2 gap-12">
          {[
            {
              title: 'Power Steering Pump',
              items: ['Variable displacement hydraulic pump', 'Pressure compensator control', 'Low noise operation', 'Extended service intervals'],
            },
            {
              title: 'Steering Control Valve',
              items: ['Proportional control spool', 'Smooth response characteristics', 'Integrated safety functions', 'Electronic integration ready'],
            },
            {
              title: 'Control Interface',
              items: ['Ergonomic steering wheel/joystick', 'Electronic feedback display', 'Multi-function control panel', 'Manual override capability'],
            },
            {
              title: 'Safety & Protection',
              items: ['Pressure relief valves', 'Load-holding check valves', 'Emergency steering backup', 'System monitoring diagnostics'],
            },
          ].map((section, i) => (
            <div key={i} className="space-y-4">
              <h3 className="text-xl font-bold text-foreground">{section.title}</h3>
              <ul className="space-y-3">
                {section.items.map((item, j) => (
                  <li key={j} className="flex items-center gap-2 text-foreground/80">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-32 text-center space-y-8">
        <div className="space-y-4">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground">Enhance Your Vessel Steering</h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">Contact our engineering team with your vessel specifications for a custom power steering system design.</p>
        </div>
        <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-sm font-semibold hover:opacity-90 transition-opacity">
          Request Custom Design
          <ArrowRight size={18} />
        </Link>
      </section>

      <Footer />
      </div>
    </ScrollAnimationClient>
  )
}
