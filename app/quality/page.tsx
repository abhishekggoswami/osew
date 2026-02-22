'use client'
import Link from 'next/link'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { CheckCircle, Zap, Wrench, Shield, Award } from 'lucide-react'
import { useScrollAnimation } from '@/hooks/use-scroll-animation'

export default function QualityPage() {
  const heroAnim = useScrollAnimation()
  const mfgTextAnim = useScrollAnimation()
  const mfgImgAnim = useScrollAnimation()
  const processHeadAnim = useScrollAnimation()
  const processGridAnim = useScrollAnimation()
  const materialsHeadAnim = useScrollAnimation()
  const materialsGridAnim = useScrollAnimation()
  const testingTextAnim = useScrollAnimation()
  const testingImgAnim = useScrollAnimation()
  const commitmentAnim = useScrollAnimation()
  
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 pt-32 lg:pt-40 pb-20 lg:pb-32">
        <div ref={heroAnim.ref} className={`space-y-6 transition-all duration-1000 ${heroAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="space-y-4">
            <p className="text-primary font-semibold text-sm tracking-widest uppercase">Quality Assurance</p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance pt-2">
              Manufacturing Excellence & Quality Standards
            </h1>
          </div>
          <p className="text-xl text-foreground/70 max-w-3xl">
            At OSEW, quality is built into every stage of manufacturing—from material selection through final testing. We deliver equipment engineered for reliability in the world's most demanding marine environments.
          </p>
        </div>
      </section>

      {/* Manufacturing Philosophy - Split Screen */}
      <section className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-32">
        <div ref={mfgTextAnim.ref} className={`space-y-8 transition-all duration-1000 delay-100 ${mfgTextAnim.isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
          <div className="space-y-4">
            <h2 className="text-4xl font-bold text-foreground">Manufacturing Excellence</h2>
            <p className="text-lg text-foreground/70">
              Quality isn't an afterthought—it's engineered into every component. Our in-house manufacturing facilities combine precision equipment with expert craftsmanship, allowing us to maintain strict quality control from raw materials through final commissioning.
            </p>
          </div>

          <div className="space-y-3">
              {[
                'CNC precision machining with ±0.1mm tolerance',
                'Heavy fabrication and marine-grade welding',
                'Dynamic balancing to premium standards',
                'Hydraulic system assembly and testing',
                'Complete pressure and performance testing',
                'Raw material traceability and certification',
              ].map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <CheckCircle size={20} className="text-primary flex-shrink-0 mt-0.5" />
                <p className="text-foreground/80">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div ref={mfgImgAnim.ref} className={`relative h-96 lg:h-full transition-all duration-1000 delay-200 ${mfgImgAnim.isVisible ? 'opacity-100 translate-x-0 scale-100' : 'opacity-0 translate-x-10 scale-95'}`}>
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg" />
          <img
            src="/images/cnc-machining-shaft.png"
            alt="Manufacturing"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </section>

      {/* Quality Process */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-32">
        <div className="space-y-12">
          <div ref={processHeadAnim.ref} className={`space-y-4 transition-all duration-1000 ${processHeadAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <p className="text-primary font-semibold text-sm tracking-widest uppercase">Process</p>
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground">Quality Assurance Process</h2>
          </div>

          <div ref={processGridAnim.ref} className={`grid md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-1000 delay-200 ${processGridAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {[
              {
                step: '01',
                title: 'Material Selection',
                desc: 'Certification and testing of all raw materials and components for marine-grade specifications.',
              },
              {
                step: '02',
                title: 'Precision Manufacturing',
                desc: 'CNC machining, welding, and fabrication with real-time quality monitoring and dimensional verification.',
              },
              {
                step: '03',
                title: 'Assembly & Integration',
                desc: 'Skilled assembly of complete systems with intermediate quality checkpoints throughout.',
              },
              {
                step: '04',
                title: 'Testing & Validation',
                desc: 'Pressure testing, performance trials, and dynamic balancing verify all systems meet specifications.',
              },
              {
                step: '05',
                title: 'Final Inspection',
                desc: 'Comprehensive final inspection and documentation before packaging and shipment.',
              },
              {
                step: '06',
                title: 'Commissioning Support',
                desc: 'Technical support during installation, commissioning, and initial operations for customer peace of mind.',
              },
            ].map((item, i) => (
              <div key={i} className="space-y-4">
                <div className="text-4xl font-bold text-primary/20">{item.step}</div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-foreground">{item.title}</h3>
                  <p className="text-foreground/70">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Material Standards */}
      <section className="bg-secondary/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-32">
          <div className="space-y-12">
            <div ref={materialsHeadAnim.ref} className={`space-y-4 transition-all duration-1000 ${materialsHeadAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <p className="text-primary font-semibold text-sm tracking-widest uppercase">Materials</p>
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground">Marine-Grade Materials</h2>
            </div>

            <div ref={materialsGridAnim.ref} className={`grid md:grid-cols-2 gap-12 transition-all duration-1000 delay-200 ${materialsGridAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-3">Stainless Steel</h3>
                  <p className="text-foreground/70">
                    316L specifically designed marine grade alloy with superior corrosion resistance for seawater environments. All certifications and material traceability maintained.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-3">Duplex Alloys</h3>
                  <p className="text-foreground/70">
                    High-strength duplex stainless with exceptional corrosion resistance for critical applications and extreme service conditions.
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-3">Fabricated Components</h3>
                  <p className="text-foreground/70">
                    Heavy-duty cast iron, bronze, and specialty alloys selected for their proven performance in marine hydraulic applications.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-3">Fasteners & Hardware</h3>
                  <p className="text-foreground/70">
                    Marine-grade stainless steel fasteners with proper thread locking and corrosion protection for long-term reliability.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testing Capabilities */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div ref={testingTextAnim.ref} className={`space-y-8 transition-all duration-1000 delay-100 ${testingTextAnim.isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="space-y-4">
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground">Testing & Verification</h2>
              <p className="text-lg text-foreground/70">
                Comprehensive testing facilities ensure every product meets performance specifications and is ready for demanding commercial operations.
              </p>
            </div>

            <div className="space-y-4">
              {[
                'Pressure testing to 1.5x operational limits',
                'Dynamic balancing to premium marine standards',
                'Performance load testing and operational trials',
                'Vibration analysis and optimization',
                'Hydraulic flow and pressure verification',
                'Full system integration testing',
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <p className="text-foreground/80">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div ref={testingImgAnim.ref} className={`relative h-96 lg:h-full transition-all duration-1000 delay-200 ${testingImgAnim.isVisible ? 'opacity-100 translate-x-0 scale-100' : 'opacity-0 translate-x-10 scale-95'}`}>
            <div className="absolute inset-0 bg-gradient-to-bl from-primary/10 to-transparent rounded-lg" />
            <img
              src="/images/manufacturing-testing-facility.png"
              alt="Testing Facilities"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* Quality Commitment */}
      <section className="bg-secondary/5 rounded-lg border border-border max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-32 mb-20 lg:mb-32 space-y-8">
        <div ref={commitmentAnim.ref} className={`space-y-4 transition-all duration-1000 ${commitmentAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground">Our Quality Commitment</h2>
          <p className="text-lg text-foreground/70 max-w-2xl">
            We stand behind every product we manufacture. Quality means reliability, longevity, and performance—even under the most demanding marine conditions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {[
            'Each product undergoes rigorous testing before shipment',
            'We use only marine-grade materials with full certifications',
            'Certified manufacturing processes ensure consistency',
            'Our team has 30+ years of hands-on marine experience',
            'Technical support available throughout product life',
            'Continuous improvement drives our manufacturing excellence',
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-3">
              <CheckCircle size={20} className="text-primary flex-shrink-0 mt-0.5" />
              <p className="text-foreground/80">{item}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  )
}
