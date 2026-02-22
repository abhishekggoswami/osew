import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import Link from 'next/link'
import { ChevronRight, ArrowRight, CheckCircle } from 'lucide-react'
import { ScrollAnimationClient } from '@/components/scroll-animation-client'

export const metadata = {
  title: 'Stern Tube & Shafting Systems | OSEW',
  description: 'Complete stern tube and shafting systems for fishing vessels. Engineered for durability, alignment accuracy, and extended service life.',
}

export default function SternTubeSystemsPage() {
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
          <span className="text-foreground font-semibold">Stern Tube Systems</span>
        </div>
      </div>

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-32">
        <div className="space-y-6">
          <div className="space-y-4">
            <p className="text-primary font-semibold text-sm tracking-widest uppercase">Product</p>
            <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Stern Tube & Shafting Systems
            </h1>
          </div>
          <p className="text-xl text-foreground/70 max-w-3xl">
            Complete stern tube and propeller shaft systems engineered for durability, precision alignment, and long service life in marine environments. Custom-designed for your vessel specifications.
          </p>
        </div>
      </section>

      {/* Image & Specs */}
      <section className="grid lg:grid-cols-2 gap-16 items-start max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-32">
        <div className="relative h-96 lg:h-full scroll-animate-image">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg" />
          <img src="/images/stern-tube-cylinders-product.png" alt="Stern Tube System" className="w-full h-full object-cover rounded-lg" />
        </div>

        <div className="space-y-8 scroll-animate">
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-3">Specifications</h2>
              <div className="space-y-4">
                {[
                  { label: 'Components', value: 'Stern tube, bearings, shaft sleeves, and sealing systems' },
                  { label: 'Bearing Types', value: 'Rubber or white metal marine-rated' },
                  { label: 'Material', value: 'Stainless steel and marine-grade alloys' },
                  { label: 'Sealing', value: 'Advanced marine-grade packing and seal designs' },
                  { label: 'Alignment', value: 'Precision engineered for exact propeller shaft alignment' },
                  { label: 'Installation', value: 'Complete technical support and guidance' },
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
            <h3 className="text-lg font-bold text-foreground">Key Benefits</h3>
            <div className="space-y-3">
              {[
                'Precision alignment ensures smooth propeller rotation',
                'Reduced vibration and operational noise',
                'Extended bearing and seal service life',
                'Marine-grade materials for seawater environments',
                'Minimal maintenance requirements',
                'Complete custom configurations available',
              ].map((benefit, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle size={20} className="text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-foreground/80">{benefit}</p>
                </div>
              ))}
            </div>
          </div>

          <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-sm font-semibold hover:opacity-90 transition-opacity group">
            Request Design Consultation
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      {/* Design Process */}
      <section className="bg-secondary/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-32">
          <div className="space-y-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground scroll-animate">Engineering Precision</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { step: '01', title: 'Analysis', desc: 'Vessel shaft specifications and alignment requirements' },
                { step: '02', title: 'Design', desc: 'Custom stern tube and bearing system engineering' },
                { step: '03', title: 'Fabrication', desc: 'Precision manufacturing with stringent tolerances' },
                { step: '04', title: 'Testing', desc: 'Alignment verification and performance testing' },
                { step: '05', title: 'Installation', desc: 'On-site technical support and commissioning' },
                { step: '06', title: 'Support', desc: 'Ongoing maintenance and technical assistance' },
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

      {/* System Components */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-32">
        <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-12 scroll-animate">System Components</h2>
        <div className="grid md:grid-cols-2 gap-12">
          {[
            {
              title: 'Stern Tube Assembly',
              items: ['Heavy-duty cast iron or steel construction', 'Flange coupling for secure shaft connection', 'Water cooled design option available', 'Oil lubricated bearing arrangement'],
            },
            {
              title: 'Bearing Systems',
              items: ['Rubber or white metal bearing options', 'Precision-engineered for exact fit', 'Extended bearing life design', 'Corrosion-resistant materials'],
            },
            {
              title: 'Sealing Solutions',
              items: ['Advanced packing designs', 'Water-resistant seals', 'Oil retention capability', 'Regular maintenance access'],
            },
            {
              title: 'Shaft Protection',
              items: ['Stainless steel sleeves', 'Corrosion barrier coating', 'Precision machining', 'Protective coatings'],
            },
          ].map((section, i) => (
            <div key={i} className="space-y-4 scroll-animate" style={{ animationDelay: `${i * 100}ms` }}>
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
        <div className="space-y-4 scroll-animate">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground">Need Shafting System Solutions?</h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">Contact our engineers for custom stern tube and shafting system design for your vessel.</p>
        </div>
        <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-sm font-semibold hover:opacity-90 transition-opacity">
          Request Consultation
          <ArrowRight size={18} />
        </Link>
      </section>

      <Footer />
      </div>
    </ScrollAnimationClient>
  )
}
