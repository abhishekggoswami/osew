'use client'

import Link from 'next/link'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { ChevronRight, ArrowRight, CheckCircle } from 'lucide-react'
import { ScrollAnimationClient } from '@/components/scroll-animation-client'

export default function HydraulicWinchPage() {
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
            <span className="text-foreground font-semibold">Hydraulic Winch</span>
          </div>
        </div>

        {/* Hero */}
        <section className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-32">
          <div className="space-y-6">
            <div className="space-y-4">
              <p className="text-primary font-semibold text-sm tracking-widest uppercase">Product</p>
              <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Hydraulic Winch
              </h1>
            </div>
            <p className="text-xl text-foreground/70 max-w-3xl">
              Compact and powerful hydraulic winch engineered for deck hauling, cargo recovery, and general maritime lifting operations with excellent control and reliability.
            </p>
          </div>
        </section>

        {/* Image & Specs */}
        <section className="grid lg:grid-cols-2 gap-16 items-start max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-32">
          <div className="relative h-96 lg:h-full scroll-animate-image">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg" />
            <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Gemini_Generated_Image_inenpoinenpoinen-uQqVOUhW2IPOwPTQRfVW4t99zEUMej.png" alt="Hydraulic Winch" className="w-full h-full object-cover rounded-lg" />
          </div>

          <div className="space-y-8 scroll-animate">
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-3">Technical Specifications</h2>
                <div className="space-y-4">
                  {[
                    { label: 'Design', value: 'Compact planetary reducer with hydraulic motor' },
                    { label: 'Line Pull', value: 'Customizable 5 to 20 tons capacity' },
                    { label: 'Speed Control', value: 'Smooth variable speed operation' },
                    { label: 'Motor Type', value: 'Axial piston hydraulic motor' },
                    { label: 'Materials', value: '316L marine grade stainless steel components' },
                    { label: 'Durability', value: 'Heavy-duty rated for continuous operations' },
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
                  'Compact design for easy deck installation',
                  'High line pull to weight ratio',
                  'Hydraulic motor for smooth load control',
                  'Marine-grade 316L stainless steel construction',
                  'Pressure relief and safety valve systems',
                  'Customizable capacity from 5 to 20 tons',
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
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground">Versatile Lifting Solutions</h2>
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  { step: '01', title: 'Capacity Assessment', desc: 'Determine required line pull and duty cycle needs' },
                  { step: '02', title: 'Custom Design', desc: 'Configure winch with appropriate motor and gearing' },
                  { step: '03', title: 'Manufacturing', desc: 'Precision fabrication and assembly process' },
                  { step: '04', title: 'Testing', desc: 'Load testing and performance verification' },
                  { step: '05', title: 'Integration', desc: 'Mounting plate and control system preparation' },
                  { step: '06', title: 'Delivery', desc: 'Complete winch ready for deck installation' },
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

        {/* Applications */}
        <section className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-32">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-12">Typical Applications</h2>
          <div className="grid md:grid-cols-2 gap-12">
            {[
              {
                title: 'Deck Operations',
                items: ['General cargo hauling', 'Equipment recovery', 'Anchor handling', 'Trawl net deployment'],
              },
              {
                title: 'Marine Services',
                items: ['Salvage operations', 'Platform supply vessels', 'Emergency rescue', 'Heavy lift operations'],
              },
              {
                title: 'Custom Configurations',
                items: ['Multiple drum options', 'Various motor sizes', 'Control system integration', 'Emergency backup systems'],
              },
              {
                title: 'Support Features',
                items: ['Pressure monitoring', 'Load sensing capability', 'Smooth acceleration control', 'Emergency stop systems'],
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
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground">Get Your Custom Hydraulic Winch</h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">Contact our engineering team with your capacity requirements and operational specifications for a customized solution.</p>
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
