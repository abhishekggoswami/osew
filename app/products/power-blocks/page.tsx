import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import Link from 'next/link'
import { ChevronRight, ArrowRight, CheckCircle } from 'lucide-react'
import { ScrollAnimationClient } from '@/components/scroll-animation-client'

export const metadata = {
  title: 'Hydraulic Power Blocks | OSEW',
  description: 'High-torque hydraulic power blocks for purse seine fishing. Custom engineered for net handling and deck operations.',
}

export default function PowerBlocksPage() {
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
          <span className="text-foreground font-semibold">Power Blocks</span>
        </div>
      </div>

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-32">
        <div className="space-y-6">
          <div className="space-y-4">
            <p className="text-primary font-semibold text-sm tracking-widest uppercase">Product</p>
            <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Hydraulic Power Blocks
            </h1>
          </div>
          <p className="text-xl text-foreground/70 max-w-3xl">
            High-torque hydraulic power blocks engineered for purse seine and net-handling operations. Heavy-duty construction with extended operational capability for demanding commercial fishing.
          </p>
        </div>
      </section>

      {/* Image & Specs */}
      <section className="grid lg:grid-cols-2 gap-16 items-start max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-32">
        <div className="relative h-96 lg:h-full scroll-animate-image">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg" />
          <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Gemini_Generated_Image_q4ikcaq4ikcaq4ik-PUa5Db84qkHocqcgWr4z1Scf4ndez2.png" alt="Hydraulic Power Block" className="w-full h-full object-cover rounded-lg" />
        </div>

        <div className="space-y-8 scroll-animate">
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-3">Specifications</h2>
              <div className="space-y-4">
                {[
                  { label: 'Type', value: 'Hydraulic powered net-handling deck machinery' },
                  { label: 'Motor', value: 'High-torque variable displacement' },
                  { label: 'Torque Rating', value: 'Customizable from 100-500 Nm' },
                  { label: 'Speed Range', value: 'Variable for operational flexibility' },
                  { label: 'Frame Design', value: 'Heavy-duty steel with large sheaves' },
                  { label: 'Application', value: 'Purse seine net handling and discharge' },
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
            <h3 className="text-lg font-bold text-foreground">Key Advantages</h3>
            <div className="space-y-3">
              {[
                'High-torque performance for heavy net loads',
                'Extended operational capability throughout fishing season',
                'Reduced crew physical demands',
                'Smooth variable speed control',
                'Reliable continuous-duty operation',
                'Minimal maintenance requirements',
              ].map((feature, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle size={20} className="text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-foreground/80">{feature}</p>
                </div>
              ))}
            </div>
          </div>

          <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-sm font-semibold hover:opacity-90 transition-opacity group">
            Get Specifications
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      {/* System Design */}
      <section className="bg-secondary/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-32">
          <div className="space-y-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground">Engineered for Performance</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { step: '01', title: 'Design', desc: 'Torque requirements and net capacity analysis' },
                { step: '02', title: 'Engineering', desc: 'Motor sizing and hydraulic circuit design' },
                { step: '03', title: 'Frame Design', desc: 'Sheave sizing and load distribution' },
                { step: '04', title: 'Manufacturing', desc: 'Heavy-duty fabrication and assembly' },
                { step: '05', title: 'Testing', desc: 'Load testing and performance verification' },
                { step: '06', title: 'Installation', desc: 'Deck integration and crew training' },
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

      {/* Features */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-32">
        <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-12">System Features</h2>
        <div className="grid md:grid-cols-2 gap-12">
          {[
            {
              title: 'Hydraulic Motor System',
              items: ['Variable displacement motor', 'High-torque design', 'Pressure relief valve', 'Load-holding capability'],
            },
            {
              title: 'Mechanical Design',
              items: ['Heavy-duty steel frame', 'Precision sheave bearings', 'Smooth rope handling', 'Extended bearing life'],
            },
            {
              title: 'Control Systems',
              items: ['Variable speed control', 'Remote operation', 'Safety load limits', 'Emergency stop'],
            },
            {
              title: 'Operational Benefits',
              items: ['Reduced crew fatigue', 'Faster net operations', 'Extended fishing season', 'Fuel efficiency'],
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
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground">Ready to Upgrade Your Net Handling?</h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">Contact our team with your vessel and net capacity requirements for a custom power block system design.</p>
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
