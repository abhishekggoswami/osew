import Link from 'next/link'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { ArrowRight } from 'lucide-react'

export default function ProductsPage() {
  const products = [
    {
      id: 'propellers',
      title: 'Marine Propellers',
      tagline: 'Precision-Engineered for Thrust & Efficiency',
      description: 'Custom-engineered marine propellers from 34" to 75" in 4-blade and 5-blade configurations, optimized for commercial fishing operations.',
      image: '/images/marine-propellers.png',
      features: ['High-grade stainless steel', '34"-75" diameter range', 'Dynamic balancing', 'Optimized blade geometry', 'Vibration-free operation'],
      link: '/products/propellers',
    },
    {
      id: 'hydraulic-winch',
      title: 'Hydraulic Winch',
      tagline: 'Heavy-Duty Lifting & Recovery',
      description: 'Compact and powerful hydraulic winch engineered for deck hauling, cargo recovery, and general maritime lifting operations with high line pull capacity.',
      image: '/images/hydraulic-winch.png',
      features: ['High line pull capacity', 'Compact design', 'Hydraulic motor drive', 'Marine-rated construction', 'Smooth load control'],
      link: '/products/hydraulic-winch',
    },
    {
      id: 'hydraulic-winches',
      title: 'Hydraulic Lifting Winches',
      tagline: 'Heavy-Duty Deck Machinery',
      description: 'Heavy-duty hydraulic winches engineered for purse seine and trawling operations with high line pull capacity and marine-rated construction for continuous-duty reliability.',
      image: '/images/hydraulic-winch-blue.png',
      features: ['High line pull capacity', 'Continuous-duty rated', 'Robust gearbox', 'Low maintenance', 'Custom configurations'],
      link: '/products/hydraulic-winches',
    },
    {
      id: 'stern-tube',
      title: 'Stern Tube Systems',
      tagline: 'Complete Shafting Solutions',
      description: 'Complete stern tube and shafting systems designed for durability, precision alignment, and long service life in marine environments.',
      image: '/images/stern-tube-cylinders-product.png',
      features: ['Flange coupling', 'White metal bearings', 'Corrosion protection', 'Marine-grade sealing', 'Extended service life'],
      link: '/products/stern-tube',
    },
    {
      id: 'steering',
      title: 'Power Steering System',
      tagline: 'Responsive Vessel Control',
      description: 'Advanced hydraulic power steering systems engineered for high maneuverability and precise vessel control with responsive feedback and smooth operation.',
      image: '/images/rudder-steering-component-new.png',
      features: ['Hydraulic power-assisted steering', 'Smooth responsive control', 'Low operational stress', 'Easy crew operation', 'Marine-rated reliability'],
      link: '/products/power-steering',
    },
    {
      id: 'hydraulic-steering',
      title: 'Hydraulic Steering Wheels',
      tagline: 'Advanced Steering Control',
      description: 'Advanced hydraulic steering wheel systems engineered for intuitive vessel control, smooth operation, and durability in demanding commercial fishing environments.',
      image: '/images/hydraulic-steering-system.png',
      features: ['Custom 24"-42" diameters', 'Smooth hydraulic dampening', 'Ergonomic wheel design', '150-350 bar pressure', 'Integrated gauges'],
      link: '/products/hydraulic-steering',
    },
    {
      id: 'power-blocks',
      title: 'Power Blocks',
      tagline: 'Hydraulic Deck Machinery',
      description: 'High-torque hydraulic power blocks designed for purse seine operations with heavy-duty sheave construction and extended operating hours.',
      image: '/images/power-block-blue.png',
      features: ['High-torque motors', 'Heavy-duty frame', 'Extended operations', 'Smooth net handling', 'Reduced crew fatigue'],
      link: '/products/power-blocks',
    },
    {
      id: 'custom',
      title: 'Custom Hydraulic Systems',
      tagline: 'Vessel-Specific Engineering',
      description: 'Tailor-made marine hydraulic systems engineered according to your vessel layout and operational requirements for complete integration.',
      image: '/images/hydraulic-optimization-testing.png',
      features: ['Complete power packs', 'Deck machinery systems', 'Integrated solutions', 'Vessel-specific design', 'Full testing'],
      link: '/products/custom-hydraulic',
    },
    {
      id: 'bearings',
      title: 'Water-Lubricated Bearings',
      tagline: 'Stern Gear System Components',
      description: 'Precision water-lubricated bearings engineered for stern gear systems, manufactured from durable elastomer materials resistant to corrosion and abrasion.',
      image: '/images/bearings.png',
      features: ['25mm-250mm diameter range', 'Nitrile and neoprene options', 'Flange and flangeless variants', 'Up to 1000mm length', 'Marine-grade construction'],
      link: '/products/bearings',
    },
    {
      id: 'brackets',
      title: 'Marine Brackets',
      tagline: 'Propeller Support Systems',
      description: 'High-quality P-type and A-type brackets manufactured from manganese bronze and aluminum bronze with water-lubricated cutlass bearing integration.',
      image: '/images/brackets.png',
      features: ['Hydrofoil section design', 'Bronze and steel alloys', 'Integrated cutlass bearings', 'Custom engineering', 'Naval architect specification'],
      link: '/products/brackets',
    },
    {
      id: 'shafts',
      title: 'Propeller Shafts',
      tagline: 'Premium Marine Shafts',
      description: 'Premium marine propeller shafts engineered from certified stainless steel materials with exceptional dimensional tolerances for recreational and commercial vessels.',
      image: '/images/shafts-new.png',
      features: ['316L Marine Grade Alloy', 'Up to 10 meters length', 'CNC precision machining', 'Superior corrosion resistance', 'Custom diameter options'],
      link: '/products/shafts',
    },
    {
      id: 'pss-seal',
      title: 'PSS Shaft Seal',
      tagline: 'World-Leading Mechanical Seal',
      description: 'The world\'s #1 marine mechanical shaft seal trusted by leading boat builders globally, delivering 100% watertight protection with zero maintenance requirements.',
      image: '/images/pss-shaft-seal.png',
      features: ['100% watertight protection', 'Zero maintenance', 'Shaft size 3/4" to 6"', 'Easy retrofit', 'Industry standard'],
      link: '/products/pss-shaft-seal',
    },
    {
      id: 'accessories',
      title: 'Stern Gear Accessories',
      tagline: 'Complete Component Range',
      description: 'Comprehensive range of stern gear components including nuts, shafts, bearings, seals, winches, and specialized marine accessories for all vessel requirements.',
      image: '/images/accessories-coupling-assembly.png',
      features: ['Propeller nuts & fasteners', 'Shaft components', 'Cutlass bearings', 'Water strainers', 'Zinc anodes'],
      link: '/products/accessories',
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-32">
        <div className="space-y-6">
          <div className="space-y-4">
            <p className="text-primary font-semibold text-sm tracking-widest uppercase">Complete Product Range</p>
            <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Marine Propulsion & Hydraulic Equipment for Commercial Fishing
            </h1>
          </div>
          <p className="text-xl text-foreground/70 max-w-3xl">
            From precision-engineered propellers to integrated hydraulic systems, OSEW provides comprehensive solutions engineered for reliability in demanding maritime conditions.
          </p>
        </div>
      </section>

      {/* Product Grid - Modern Asymmetrical Layout */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 pb-20 lg:pb-32">
        <div className="space-y-20">
          {/* Rows of 2-1-2 pattern */}
          {products.map((product, idx) => {
            const isEven = idx % 2 === 0
            return (
              <div
                key={product.id}
                className="grid lg:grid-cols-2 gap-12 items-stretch"
              >
                {/* Image Container */}
  <div className={`relative bg-muted rounded-lg overflow-hidden group min-h-[400px] ${!isEven ? 'lg:order-last' : ''}`}>
  <img
  src={product.image || "/placeholder.svg"}
  alt={product.title}
  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Content */}
                <div className="space-y-6 flex flex-col justify-center">
                  <div className="space-y-3">
                    <p className="text-primary font-semibold text-sm tracking-widest uppercase">{product.tagline}</p>
                    <h2 className="text-4xl font-bold text-foreground">{product.title}</h2>
                  </div>

                  <p className="text-lg text-foreground/70 leading-relaxed">{product.description}</p>

                  {/* Features List */}
                  <div className="grid grid-cols-2 gap-3">
                    {product.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <span className="text-sm text-foreground/80">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <Link
                    href={product.link}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-sm font-semibold hover:opacity-90 transition-opacity group"
                  >
                    View Details
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* Engineering Process */}
      <section className="bg-secondary/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-32">
          <div className="space-y-12">
            <div className="space-y-4">
              <p className="text-primary font-semibold text-sm tracking-widest uppercase">How We Work</p>
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground">Custom Engineering Process</h2>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                { step: '01', title: 'Consultation', desc: 'Vessel specifications, operational requirements, performance goals' },
                { step: '02', title: 'Design', desc: 'Custom engineering tailored to your specific needs and constraints' },
                { step: '03', title: 'Manufacturing', desc: 'Precision fabrication with rigorous quality control throughout' },
                { step: '04', title: 'Testing & Delivery', desc: 'Comprehensive testing and global logistics support' },
              ].map((item, i) => (
                <div key={i} className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="text-5xl font-bold text-primary/20">{item.step}</div>
                    {i < 3 && <div className="hidden md:block flex-1 h-0.5 bg-border" />}
                  </div>
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

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-32">
        <div className="space-y-8 text-center">
          <div className="space-y-4">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
              Ready to Explore Our Solutions?
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Contact our technical team with your vessel specifications for a detailed engineering consultation and custom quote.
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
  )
}
