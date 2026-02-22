'use client'

import Link from 'next/link'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { ArrowRight, CheckCircle } from 'lucide-react'

export default function ShaftPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 pt-32 lg:pt-40 pb-20 lg:pb-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="space-y-4">
              <p className="text-primary font-semibold text-sm tracking-widest uppercase">Propeller Shaft Systems</p>
              <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Marine Propeller Shafts
              </h1>
            </div>
            <p className="text-lg text-foreground/70 leading-relaxed">
              OSEW manufactures precision propeller shafts engineered to the highest standards for both recreational and commercial marine vessels. Built from premium stainless steel alloys with strict dimensional tolerances and superior surface finish, our shafts deliver exceptional fatigue strength and corrosion resistance.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-sm font-semibold hover:opacity-90 transition-opacity"
            >
              Request Specifications
              <ArrowRight size={18} />
            </Link>
          </div>
          <div className="relative h-96 lg:h-full">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Gemini_Generated_Image_jpai5pjpai5pjpai-EbIOGqo668pqIsrWlpV6alXcm8xcv9.png"
              alt="Propeller Shafts"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-secondary/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-32">
          <div className="space-y-12">
            <div className="space-y-4">
              <p className="text-primary font-semibold text-sm tracking-widest uppercase">Manufacturing Standards</p>
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground">Certified Production</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-foreground">Material Selection</h3>
                <ul className="space-y-3">
                  {[
                    '316L specifically designed marine grade alloy',
                    'Duplex stainless steel for maximum strength and durability',
                    'All materials certified and traceable to source',
                  ].map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle size={20} className="text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground/80">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-foreground">Size & Capacity Range</h3>
                <ul className="space-y-3">
                  {[
                    'Manufactured to highest standards for global compatibility',
                    'Lengths up to 10 meters for larger vessel applications',
                    'Multiple diameter options for various propulsion systems',
                    'Custom sizes available per naval architect specifications',
                  ].map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle size={20} className="text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground/80">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Details */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-32">
        <div className="space-y-12">
          <div className="space-y-4">
            <p className="text-primary font-semibold text-sm tracking-widest uppercase">Engineering Excellence</p>
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground">Precision Machining & Quality Control</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6 bg-secondary/5 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-foreground">CNC Manufacturing Process</h3>
              <ul className="space-y-4">
                {[
                  'State-of-the-art CNC machines ensure consistent dimensional accuracy',
                  'High precision tolerances meet international marine standards',
                  'Superior surface finish reduces vibration and noise',
                  'End taper machining optimizes propeller bedding contact',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span className="text-foreground/80">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-6 bg-secondary/5 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-foreground">Performance Characteristics</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Fatigue Strength</h4>
                  <p className="text-foreground/70">Engineered for high cyclic stress resistance ensuring reliable long-term operation under demanding conditions.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Seawater Corrosion Resistance</h4>
                  <p className="text-foreground/70">Advanced material composition provides superior protection against saltwater corrosion and galvanic attack.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-32 text-center">
          <div className="space-y-6">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
              Precision Shafts for Any Marine Application
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Whether for commercial fishing vessels or recreational boats, our ISO-certified propeller shafts deliver the performance and reliability your marine operations demand.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-sm font-semibold hover:opacity-90 transition-opacity"
            >
              Get Your Quote
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
