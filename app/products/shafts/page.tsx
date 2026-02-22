'use client';

import Link from 'next/link';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { ArrowRight } from 'lucide-react';
import { useScrollReveal } from '@/hooks/use-scroll-reveal';

export default function ShaftsPage() {
  const headerReveal = useScrollReveal();
  const contentReveal = useScrollReveal();

  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative z-20 w-full py-20 lg:py-32">
          <div className="absolute inset-0 bg-black/75" />
          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-3xl space-y-6">
              <h1 className="text-5xl lg:text-6xl font-bold text-white">Propeller Shafts</h1>
              <p className="text-xl text-white/80">
                ISO-certified marine propeller shafts engineered for exceptional performance in both recreational and commercial vessels.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-3 bg-amber-400 text-secondary rounded-sm font-semibold hover:bg-amber-500 transition-colors"
              >
                Request Specification <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </section>

        {/* Product Details */}
        <section className="relative z-20 bg-background py-20 lg:py-32">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
              {/* Image */}
              <div ref={headerReveal.ref} className={`transition-all duration-700 ${headerReveal.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <img
                  src="/images/shafts-new.png"
                  alt="Propeller Shafts"
                  className="w-full rounded-lg border border-border"
                />
              </div>

              {/* Content */}
              <div ref={contentReveal.ref} className={`space-y-8 transition-all duration-700 delay-200 ${contentReveal.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <div className="space-y-6">
                  <div>
                    <h2 className="text-3xl font-bold text-foreground mb-4">ISO-Certified Marine Shafts</h2>
                    <p className="text-foreground/70 leading-relaxed">
                      OSEW manufactures propeller shafts to strict ISO standards, designed for both recreational and commercial vessel applications. Each shaft is meticulously engineered from certified materials with exceptional dimensional tolerances and surface finish using advanced CNC machinery.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-lg font-bold text-foreground">Material Specifications</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <span className="text-amber-400 font-bold">•</span>
                        <span className="text-foreground/70"><strong>Stainless Steel Grades:</strong> 316L specifically designed marine grade alloy and Duplex Steel</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-amber-400 font-bold">•</span>
                        <span className="text-foreground/70"><strong>Maximum Length:</strong> Up to 10 meters</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-amber-400 font-bold">•</span>
                        <span className="text-foreground/70"><strong>Surface Quality:</strong> Superior fatigue strength and seawater corrosion resistance</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-amber-400 font-bold">•</span>
                        <span className="text-foreground/70"><strong>End Taper:</strong> Precision-machined for maximum contact and bedding surface engagement</span>
                      </li>
                    </ul>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-lg font-bold text-foreground">Key Features</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <span className="text-amber-400 font-bold">✓</span>
                        <span className="text-foreground/70">Certified raw materials for reliability</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-amber-400 font-bold">✓</span>
                        <span className="text-foreground/70">High dimensional tolerance manufacturing</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-amber-400 font-bold">✓</span>
                        <span className="text-foreground/70">CNC precision machining</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-amber-400 font-bold">✓</span>
                        <span className="text-foreground/70">Exceptional seawater corrosion resistance</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-amber-400 font-bold">✓</span>
                        <span className="text-foreground/70">Custom diameter and length options</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-sm font-semibold hover:opacity-90 transition-opacity"
                >
                  Get Your Custom Shaft <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative z-20 w-full py-20 lg:py-32">
          <div className="absolute inset-0 bg-black/75" />
          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
            <div className="relative overflow-hidden rounded-lg border border-border p-12 lg:p-20 space-y-6 bg-white">
              <div className="relative space-y-6">
                <div className="space-y-4">
                  <h2 className="text-4xl lg:text-5xl font-bold text-foreground">Need Custom Shaft Solutions?</h2>
                  <p className="text-lg text-foreground/70 max-w-2xl">
                    Our engineering team is ready to design and manufacture shafts to your exact specifications for optimal vessel performance.
                  </p>
                </div>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-sm font-semibold hover:opacity-90 transition-opacity"
                >
                  Contact Our Experts <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="relative z-20 bg-[#0d3d47] text-white">
        <Footer />
      </footer>
    </>
  );
}
