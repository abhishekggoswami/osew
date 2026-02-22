import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import Link from 'next/link'
import { ChevronRight, ArrowRight, CheckCircle } from 'lucide-react'
import { ScrollAnimationClient } from '@/components/scroll-animation-client'

export const metadata = {
  title: 'Marine Propeller Manufacturing | OSEW',
  description: 'High-grade stainless steel marine propellers 34"-75" for commercial fishing vessels. Precision engineered for purse seine and trawler applications.',
}

export default function MarinePropellersPage() {
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
          <span className="text-foreground font-semibold">Marine Propellers</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-32">
        <div className="space-y-6">
          <div className="space-y-4">
            <p className="text-primary font-semibold text-sm tracking-widest uppercase">Product</p>
            <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Precision Marine Propellers
            </h1>
          </div>
          <p className="text-xl text-foreground/70 max-w-3xl">
            Custom-engineered stainless steel propellers from 34" to 75" in 4-blade and 5-blade configurations. Optimized for thrust efficiency, minimal vibration, and maximum durability in commercial fishing operations.
          </p>
        </div>
      </section>

      {/* Product Image & Specs Grid */}
      <section className="grid lg:grid-cols-2 gap-16 items-start max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-32">
        <div className="relative h-96 lg:h-full scroll-animate-image">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg" />
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Gemini_Generated_Image_8glk0w8glk0w8glk-w4pgEseP5zcBIB5roaDASZ1kN4wUsK.png"
            alt="Marine Propeller"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        <div className="space-y-8 scroll-animate">
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-3">Specifications</h2>
              <div className="space-y-4">
                {[
                  { label: 'Diameter Range', value: '34" to 75"' },
                  { label: 'Blade Configurations', value: '4-blade and 5-blade' },
                  { label: 'Material', value: 'High-grade 316L marine grade alloy' },
                  { label: 'Corrosion Resistance', value: 'Marine-grade for seawater environments' },
                  { label: 'Tolerance', value: '±0.1mm precision machining' },
                  { label: 'Balancing', value: 'Dynamic balancing for optimal performance' },
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
                'Optimized blade geometry for maximum thrust and fuel efficiency',
                'Dynamic balancing eliminates vibration for smooth operation',
                'Precision machining ensures perfect hub fit and alignment',
                'Stainless steel construction for superior corrosion resistance',
                'Custom design based on engine horsepower and operating conditions',
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
            Request Specification Sheet
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      {/* Propeller Design Showcase */}
      <section className="bg-secondary/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-32">
          <div className="space-y-12">
            <div className="space-y-4 scroll-animate">
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground">Propeller Design Showcase</h2>
              <p className="text-lg text-foreground/70 max-w-3xl">
                Our extensive range of marine propeller designs optimized for various vessel types and operational requirements. Each propeller is precision-engineered for maximum performance.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-RwZyHYHRgcVsSKrrqge7wJtCpavCZ2.png',
                  title: '4-Blade Design',
                  description: 'Standard 4-blade configuration optimized for balanced thrust and fuel efficiency',
                },
                {
                  image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-m6X8PXtPfgkwVLrMl5p3wUPJN33CQr.png',
                  title: '3-Blade Design',
                  description: 'High-speed configuration ideal for faster vessels requiring rapid acceleration',
                },
                {
                  image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-soaKGeUf7hEaBP8w5RezGtZXu7UZME.png',
                  title: '5-Blade Design',
                  description: 'Premium 5-blade configuration for enhanced thrust distribution and reduced vibration',
                },
                {
                  image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-CHd8cp1JL8do9XFfPiCuge8nxhAF6x.png',
                  title: '4-Blade High Pitch',
                  description: 'High pitch variant for cruising efficiency and reduced fuel consumption',
                },
                {
                  image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-F1HD265i0xUprndR0mWoyWLVCy9nIp.png',
                  title: '7 Blade',
                  description: 'Advanced multi-blade configuration for maximum load capacity and steady operation',
                },
                {
                  image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-j7f4Ky49lQAgC5g2uJYoiJUPOaJJZl.png',
                  title: '6-Blade Design',
                  description: 'Balanced heavy-duty configuration for extended trawling operations',
                },
                {
                  image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Q94NGVQ66vEryZsEtNLGhpIDlYB6NM.png',
                  title: '8-Blade Design',
                  description: 'Ultra-heavy duty configuration for maximum thrust in extreme conditions',
                },
                {
                  image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-h1kb4mrdj3RjjIrmHCx3U82VMQm2Nv.png',
                  title: '5-Blade Custom',
                  description: 'Custom 5-blade variant with optimized blade geometry for specific applications',
                },
              ].map((propeller, i) => (
                <div key={i} className="scroll-animate space-y-4" style={{ animationDelay: `${i * 50}ms` }}>
                  <div className="relative aspect-square bg-gradient-to-br from-primary/5 to-accent/5 rounded-lg overflow-hidden group">
                    <img
                      src={propeller.image}
                      alt={propeller.title}
                      className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-bold text-foreground text-lg">{propeller.title}</h3>
                    <p className="text-sm text-foreground/70">{propeller.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Design & Engineering */}
      <section className="bg-secondary/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-32">
          <div className="space-y-12">
            <div className="space-y-4 scroll-animate">
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground">Engineering Process</h2>
              <p className="text-lg text-foreground/70 max-w-3xl">
                Each propeller is custom-designed based on your vessel's engine specifications, operational requirements, and environmental conditions.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  step: '01',
                  title: 'Consultation',
                  desc: 'Vessel specifications, engine horsepower, RPM, gearbox ratio, and operational profile',
                },
                {
                  step: '02',
                  title: 'Design',
                  desc: 'Custom blade geometry optimization for your specific performance requirements',
                },
                {
                  step: '03',
                  title: 'Manufacturing',
                  desc: 'Precision CNC machining with real-time quality monitoring',
                },
                {
                  step: '04',
                  title: 'Balancing',
                  desc: 'Dynamic balancing to eliminate vibration and ensure smooth operation',
                },
                {
                  step: '05',
                  title: 'Testing',
                  desc: 'Performance validation and dimensional verification',
                },
                {
                  step: '06',
                  title: 'Delivery',
                  desc: 'Worldwide logistics with installation support',
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
              OSEW propellers are engineered for diverse fishing vessel types and operational requirements.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {[
              {
                title: 'Purse Seine Vessels',
                desc: 'Optimized for rapid maneuvering and efficient towing with high-speed thrust requirements.',
                specs: ['34"-75" diameter', 'High RPM optimization', 'Rapid acceleration capability'],
              },
              {
                title: 'Trawlers',
                desc: 'Designed for sustained high-load operation during extended trawling operations.',
                specs: ['34"-75" diameter', 'Low RPM efficiency', 'Heavy-load endurance'],
              },
              {
                title: 'Longline Vessels',
                desc: 'Precision-engineered for steady trolling speed and efficient fuel consumption.',
                specs: ['34"-75" diameter', 'Steady-state optimization', 'Fuel efficiency focus'],
              },
              {
                title: 'Gillnet Vessels',
                desc: 'Custom designs for variable speed requirements and operational flexibility.',
                specs: ['34"-60" diameter', 'Variable speed range', 'Operational flexibility'],
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

      {/* Material Quality */}
      <section className="bg-secondary/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-32">
          <div className="space-y-12">
            <div className="space-y-4 scroll-animate">
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground">Material Quality</h2>
              <p className="text-lg text-foreground/70">
                All propellers are manufactured from premium marine-grade stainless steel with full material certification.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-foreground">316L Marine Grade Alloy</h3>
                <ul className="space-y-3">
                  {[
                    '316L specifically designed marine grade material',
                    'Superior seawater corrosion resistance',
                    'Ideal for all commercial fishing operations',
                    'Full material certifications and traceability',
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-foreground/80">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold text-foreground">AISI 316 Stainless Steel</h3>
                <ul className="space-y-3">
                  {[
                    'Superior corrosion resistance',
                    'Higher strength and durability',
                    'Recommended for extreme environments',
                    'Extended service life',
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
            Ready to Upgrade Your Propulsion System?
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Contact our technical team with your vessel specifications for a custom propeller design and detailed quote.
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
