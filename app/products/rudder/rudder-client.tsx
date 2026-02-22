'use client'

import Link from 'next/link'
import { Header } from '@/components/header'
import { ArrowRight, CheckCircle } from 'lucide-react'
import { ScrollAnimationClient } from '@/components/scroll-animation-client'

export default function RudderClient() {
  return (
    <ScrollAnimationClient>
      <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative z-20 w-full pt-32 pb-20 lg:pt-40 lg:pb-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Link href="/products" className="text-primary hover:underline">
                    Products
                  </Link>
                  <span className="text-foreground/50">/</span>
                  <span className="text-foreground font-semibold">Rudder</span>
                </div>
                <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                  Rudder Systems
                </h1>
                <p className="text-xl text-foreground/70">
                  Precision-engineered rudders for complete directional vessel control. Fabricated steel and cast bronze solutions tailored to your specifications.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-foreground">Key Features</h3>
                <ul className="space-y-3">
                  {[
                    'Steel fabricated and cast bronze options',
                    'SS 316L specifically designed marine grade alloy',
                    'High-speed craft capability',
                    'Custom builder specifications',
                    'Integrated shaft and blade design',
                    'Optimized hydrodynamic profile',
                  ].map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground/80">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-sm font-semibold hover:opacity-90 transition-opacity w-fit"
              >
                Request Custom Specification
                <ArrowRight size={18} />
              </Link>
            </div>

            {/* Right Image */}
            <div className="relative scroll-animate-image">
              <img
                src="/images/rudder-product.png"
                alt="Marine rudder system"
                className="w-full h-auto rounded-lg border border-border shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Specifications Section */}
      <section className="relative z-20 bg-muted/50 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="space-y-12">
            <div className="space-y-4 scroll-animate">
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground">Rudder Types</h2>
              <p className="text-lg text-foreground/70 max-w-2xl">
                We offer two main categories of rudders, each designed for specific vessel requirements and operational conditions.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              {/* Fabricated Rudders */}
              <div className="space-y-6 p-8 border border-border rounded-lg bg-background scroll-animate" style={{ animationDelay: '100ms' }}>
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-foreground">Fabricated Rudders</h3>
                  <p className="text-primary font-semibold">Steel Construction</p>
                </div>
                <p className="text-foreground/70">
                  Manufactured according to boat builder specifications with premium steel materials. Ideal for diverse vessel types and commercial applications.
                </p>
                <div className="space-y-3">
                  <h4 className="font-semibold text-foreground">Materials Available:</h4>
                  <ul className="space-y-2 text-foreground/70">
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-primary rounded-full" />
                      High-quality mild steel
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-primary rounded-full" />
                      Stainless Steel 316L
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-primary rounded-full" />
                      Integrated shaft and blade
                    </li>
                  </ul>
                </div>
              </div>

              {/* Cast Rudders */}
              <div className="space-y-6 p-8 border border-border rounded-lg bg-background scroll-animate" style={{ animationDelay: '200ms' }}>
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-foreground">Cast Rudders</h3>
                  <p className="text-primary font-semibold">Bronze Construction</p>
                </div>
                <p className="text-foreground/70">
                  Engineered for high-speed crafts with superior corrosion resistance and durability. Perfect for demanding marine environments.
                </p>
                <div className="space-y-3">
                  <h4 className="font-semibold text-foreground">Materials Available:</h4>
                  <ul className="space-y-2 text-foreground/70">
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-primary rounded-full" />
                      Nickel Aluminium Bronze
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-primary rounded-full" />
                      Manganese Bronze
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-primary rounded-full" />
                      Aluminium Bronze
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-primary rounded-full" />
                      High-speed optimization
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-20 py-20 lg:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-lg p-12 lg:p-20 space-y-6 bg-white border border-border">
            <div className="space-y-4">
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground">Custom Rudder Solutions</h2>
              <p className="text-lg text-foreground/70 max-w-2xl">
                Our team works closely with naval architects and boat builders to design rudders that meet exact specifications and operational requirements.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-sm font-semibold hover:opacity-90 transition-opacity"
              >
                Get Custom Quote
                <ArrowRight size={18} />
              </Link>
              <Link
                href="/quality"
                className="inline-flex items-center justify-center gap-2 px-8 py-3 border border-border text-foreground rounded-sm font-semibold hover:bg-muted/50 transition-colors"
              >
                View Quality Standards
              </Link>
            </div>
          </div>
        </div>
      </section>
      </div>
    </ScrollAnimationClient>
  )
}
