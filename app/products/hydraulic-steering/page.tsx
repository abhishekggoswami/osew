'use client';

import Link from 'next/link'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { CheckCircle, ChevronRight, ArrowRight } from 'lucide-react'
import { ScrollAnimationClient } from '@/components/scroll-animation-client'

export default function HydraulicSteeringPage() {
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
            <span className="text-foreground font-semibold">Hydraulic Steering System</span>
          </div>
        </div>

        {/* Hero */}
        <section className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-32">
          <div className="space-y-6">
            <div className="space-y-4">
              <p className="text-primary font-semibold text-sm tracking-widest uppercase">Product</p>
              <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Hydraulic Steering System
              </h1>
            </div>
            <p className="text-xl text-foreground/70 max-w-3xl">
              Advanced hydraulic steering wheel systems engineered for intuitive vessel control, smooth operation, and durability in demanding commercial fishing environments.
            </p>
          </div>
        </section>

        {/* Image & Specs */}
        <section className="grid lg:grid-cols-2 gap-16 items-start max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-32">
          <div className="relative h-96 lg:h-full scroll-animate-image">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg" />
            <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Gemini_Generated_Image_img30yimg30yimg3-v8K7cjRnicRePJc0kaMRzVb2LV5aRC.png" alt="Hydraulic Steering System" className="w-full h-full object-cover rounded-lg" />
          </div>

          <div className="space-y-8 scroll-animate">
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-3">System Specifications</h2>
                <div className="space-y-4">
                  {[
                    { label: 'Wheel Diameter', value: 'Custom sizes available from 24" to 42"' },
                    { label: 'Steering Type', value: 'Hydraulic-assisted steering wheel' },
                    { label: 'Response', value: 'Smooth, predictable steering feedback' },
                    { label: 'Pressure Range', value: '150 - 350 bar operating pressure' },
                    { label: 'Materials', value: 'Marine-grade stainless steel and alloys' },
                    { label: 'Durability', value: 'Tested for continuous commercial operations' },
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
                  'Ergonomic wheel design for comfortable long-term operation',
                  'Smooth hydraulic dampening for responsive control',
                  'Custom diameter options to fit vessel wheelhouse',
                  'Enhanced grip surfaces for wet conditions',
                  'Integrated pressure gauges and indicators',
                  'Easy maintenance and component replacement',
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

        {/* Custom Solutions */}
        <section className="bg-secondary/5">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-32">
            <div className="space-y-12">
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground">Custom Steering Solutions</h2>
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  { step: '01', title: 'Consultation', desc: 'Vessel dimensions and steering requirements' },
                  { step: '02', title: 'Design', desc: 'Custom steering wheel and system layout' },
                  { step: '03', title: 'Selection', desc: 'Hydraulic system pressure and flow specification' },
                  { step: '04', title: 'Manufacturing', desc: 'Precision fabrication and assembly' },
                  { step: '05', title: 'Testing', desc: 'Steering response and pressure validation' },
                  { step: '06', title: 'Installation', desc: 'Professional installation and crew training' },
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

        {/* Complete Steering Packages */}
        <section className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-32">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-12">Complete Steering Packages</h2>
          <div className="grid md:grid-cols-2 gap-12">
            {[
              {
                title: 'Steering Wheel Assembly',
                items: ['Custom diameter wheels', 'Ergonomic grip design', 'Pressure gauge integration', 'Quick disconnect options'],
              },
              {
                title: 'Hydraulic Integration',
                items: ['Pressure-regulating pump', 'Flow control valves', 'Pressure relief systems', 'Hose routing and fittings'],
              },
              {
                title: 'Control Systems',
                items: ['Manual steering backup', 'Pressure monitoring', 'Flow adjustment controls', 'System diagnostics'],
              },
              {
                title: 'Safety & Durability',
                items: ['Emergency steering capability', 'Pressure relief protection', 'Corrosion resistance', 'Marine certification ready'],
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
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground">Enhance Your Steering Experience</h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">Contact our team with your vessel specifications for a custom steering wheel system design.</p>
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
