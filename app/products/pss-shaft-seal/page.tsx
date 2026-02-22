'use client'

import Link from 'next/link'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { ArrowRight, CheckCircle } from 'lucide-react'

export default function PSSShaftSealPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 pt-32 lg:pt-40 pb-20 lg:pb-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="space-y-4">
              <p className="text-primary font-semibold text-sm tracking-widest uppercase">Marine Mechanical Seals</p>
              <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                PSS Shaft Seal System
              </h1>
            </div>
            <p className="text-lg text-foreground/70 leading-relaxed">
              The PSS Shaft Seal is the world's leading marine mechanical seal solution, trusted by prestigious boat builders and yards globally. It eliminates traditional packing gland maintenance while providing 100% water-tight sealing for enhanced vessel performance and longevity.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-sm font-semibold hover:opacity-90 transition-opacity"
            >
              Request Quote
              <ArrowRight size={18} />
            </Link>
          </div>
          <div className="relative h-96 lg:h-full">
            <img
              src="/images/pss-shaft-seal.png"
              alt="PSS Shaft Seal"
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
              <p className="text-primary font-semibold text-sm tracking-widest uppercase">Key Advantages</p>
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground">Superior Performance & Reliability</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-foreground">Operational Benefits</h3>
                <ul className="space-y-3">
                  {[
                    'Eliminates constant adjustment and maintenance of traditional packing glands',
                    '100% water-tight sealing prevents water ingress into bilge',
                    'Dramatically reduces operational costs and vessel downtime',
                    'Protects propeller shaft from corrosion and wear damage',
                  ].map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle size={20} className="text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground/80">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-foreground">Installation Flexibility</h3>
                <ul className="space-y-3">
                  {[
                    'Available for shaft diameters from 3/4" to 6" (20mm to 150mm)',
                    'Easy retrofit installation on existing vessels',
                    'Standard equipment on leading commercial boat builders',
                    'Recognized as premier aftermarket seal worldwide',
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
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground">Mechanical Seal Technology</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6 bg-secondary/5 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-foreground">Design Innovation</h3>
              <ul className="space-y-4">
                {[
                  'Advanced mechanical seal design eliminates packing material failures',
                  'Precision engineering ensures optimal contact and sealing surfaces',
                  'Hardened seal faces for extended service life',
                  'Low friction design reduces shaft wear and energy loss',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span className="text-foreground/80">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-6 bg-secondary/5 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-foreground">Size Range & Compatibility</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Shaft Diameter Range</h4>
                  <p className="text-foreground/70">3/4 inch to 6 inch (20mm to 150mm) for comprehensive vessel compatibility.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Retrofit Application</h4>
                  <p className="text-foreground/70">Seamlessly replaces traditional packing glands on existing vessels without major modification.</p>
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
              The #1 Choice for Marine Shaft Sealing
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Join leading boat builders and operators worldwide who trust PSS Shaft Seals for superior reliability, reduced maintenance, and long-term cost savings.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-sm font-semibold hover:opacity-90 transition-opacity"
            >
              Schedule Consultation
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
