import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import Link from 'next/link'
import { Package, Zap, Wrench, Shield, ArrowRight } from 'lucide-react'

export default function SparePartsPage() {
  const categories = [
    {
      icon: Zap,
      title: 'Hydraulic Pumps & Motors',
      description: 'Complete selection of hydraulic power components for marine applications',
      items: [
        'High-pressure hydraulic pumps',
        'Variable displacement pumps',
        'Hydraulic motors (fixed and variable)',
        'Gear pumps and motors',
      ],
    },
    {
      icon: Wrench,
      title: 'Control & Directional Valves',
      description: 'Precision control components for hydraulic circuit management',
      items: [
        'Directional control valves',
        'Pressure relief valves',
        'Flow control valves',
        'Pilot-operated valves',
      ],
    },
    {
      icon: Package,
      title: 'Hydraulic System Components',
      description: 'Essential hydraulic system parts and support equipment',
      items: [
        'Hydraulic cylinders',
        'Hydraulic accumulators',
        'Pressure filters and elements',
        'Return line filters',
      ],
    },
    {
      icon: Shield,
      title: 'Seals & Hoses',
      description: 'High-quality sealing and fluid transfer components',
      items: [
        'Hydraulic seals and seal kits',
        'O-rings and gaskets',
        'High-pressure hydraulic hoses',
        'Hose fittings and connectors',
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-32">
        <div className="space-y-6">
          <div className="space-y-4">
            <p className="text-primary font-semibold text-sm tracking-widest uppercase">Inventory</p>
            <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Marine Spare Parts & Components
            </h1>
          </div>
          <p className="text-xl text-foreground/70 max-w-3xl">
            Comprehensive inventory of hydraulic components, seals, hoses, and replacement parts for marine propulsion systems. Genuine OSEW parts with guaranteed compatibility.
          </p>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-32">
        <div className="space-y-12">
          <div className="space-y-4">
            <p className="text-primary font-semibold text-sm tracking-widest uppercase">Component Categories</p>
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground">Available Spare Parts</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {categories.map((category, idx) => {
              const Icon = category.icon
              return (
                <div
                  key={idx}
                  className="group space-y-6 p-8 bg-card border border-border rounded-lg hover:border-primary/50 transition-all"
                >
                  <div className="flex items-start justify-between">
                    <div className="space-y-2">
                      <Icon size={32} className="text-primary" />
                      <h3 className="text-2xl font-bold text-foreground">{category.title}</h3>
                      <p className="text-foreground/70">{category.description}</p>
                    </div>
                  </div>

                  <ul className="space-y-3">
                    {category.items.map((item, itemIdx) => (
                      <li key={itemIdx} className="flex items-center gap-2 text-foreground/80">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all group/link"
                  >
                    Inquire <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* System-Specific Parts */}
      <section className="bg-secondary/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-32">
          <div className="space-y-12">
            <div className="space-y-4">
              <p className="text-primary font-semibold text-sm tracking-widest uppercase">Product-Specific</p>
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground">Parts by System</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Propeller System',
                  parts: [
                    'Propeller blades and hardware',
                    'Hub and cone assemblies',
                    'Shaft coupling bolts',
                    'Dynamic balancing services',
                  ],
                },
                {
                  title: 'Winch System',
                  parts: [
                    'Motor and pump assemblies',
                    'Sheave bearings',
                    'Brake components',
                    'Rope and cable hardware',
                  ],
                },
                {
                  title: 'Steering System',
                  parts: [
                    'Hydraulic cylinders',
                    'Directional control valves',
                    'Power steering pump components',
                    'Pressure hose assemblies',
                  ],
                },
              ].map((system, idx) => (
                <div key={idx} className="space-y-4 p-6">
                  <h3 className="text-xl font-bold text-foreground">{system.title}</h3>
                  <ul className="space-y-3">
                    {system.parts.map((part, partIdx) => (
                      <li key={partIdx} className="flex items-start gap-3 text-foreground/80">
                        <div className="w-1 h-1 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <span className="text-sm">{part}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Inventory Management */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground">Smart Inventory Management</h2>
              <p className="text-lg text-foreground/70">
                We maintain strategic inventory of high-demand components to minimize downtime and ensure rapid delivery when you need replacements.
              </p>
            </div>

            <div className="space-y-4">
              {[
                'Genuine OSEW parts with full compatibility guarantee',
                'Fast-track ordering with same-week delivery available',
                'Complete inventory documentation and specifications',
                'Technical support for part selection and installation',
                'Maintenance schedules and preventive replacement guidance',
                'Volume discounts for fleet operators',
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <p className="text-foreground/80">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative h-96 lg:h-full">
            <div className="absolute inset-0 bg-gradient-to-bl from-primary/10 to-transparent rounded-lg" />
            <img src="https://images.unsplash.com/photo-1581092162393-8ac9c1b298c3?w=800&h=600&fit=crop" alt="Parts Inventory" className="w-full h-full object-cover rounded-lg" />
          </div>
        </div>
      </section>

      {/* Ordering Process */}
      <section className="bg-secondary/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-32">
          <div className="space-y-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground">How to Order</h2>

            <div className="grid md:grid-cols-4 gap-6">
              {[
                { step: '01', title: 'Identify Needs', desc: 'Determine part specifications and quantities needed' },
                { step: '02', title: 'Request Quote', desc: 'Submit inquiry with detailed component information' },
                { step: '03', title: 'Confirm Order', desc: 'Verify specifications and delivery timeline' },
                { step: '04', title: 'Receive Parts', desc: 'Fast shipment with full installation support' },
              ].map((item, i) => (
                <div key={i} className="space-y-3 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 border border-primary/20">
                    <span className="font-bold text-primary text-lg">{item.step}</span>
                  </div>
                  <h3 className="font-semibold text-foreground">{item.title}</h3>
                  <p className="text-sm text-foreground/70">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-32 text-center space-y-8">
        <div className="space-y-4">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground">Need Spare Parts?</h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Contact our parts department with your component specifications or equipment serial number for immediate assistance.
          </p>
        </div>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-sm font-semibold hover:opacity-90 transition-opacity"
        >
          Request Parts Quotation
          <ArrowRight size={18} />
        </Link>
      </section>

      <Footer />
    </div>
  )
}
