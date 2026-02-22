'use client';

import Link from 'next/link';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { ArrowRight, Check } from 'lucide-react';
import { useScrollReveal } from '@/hooks/use-scroll-reveal';

export default function AccessoriesPage() {
  const headerReveal = useScrollReveal();
  const galleryReveal = useScrollReveal();
  const contentReveal = useScrollReveal();

  const galleryItems = [
    {
      image: '/images/accessories-shaft-coupling.png',
      title: 'Shaft Couplings',
      description: 'Precision half couplings and flexible couplings for reliable shaft connections and power transmission.'
    },
    {
      image: '/images/accessories-propeller-nut.png',
      title: 'Propeller Nuts',
      description: 'Specialized cone nuts, castellated nuts, and anode-fitted fastening systems for secure propeller attachment.'
    },
    {
      image: '/images/accessories-zinc-anode.png',
      title: 'Zinc Anodes',
      description: 'Cathodic protection components designed for long-term corrosion prevention in marine environments.'
    },
    {
      image: '/images/accessories-coupling-assembly.png',
      title: 'Flexible Couplings',
      description: 'Spring-loaded coupling assemblies for smooth power transmission and vibration dampening.'
    },
    {
      image: '/images/accessories-bearing-sleeves.png',
      title: 'Water-Lubricated Sleeves',
      description: 'Cutlass bearing sleeves and rubber bushes in multiple diameters for stern gear systems.'
    },
    {
      image: '/images/accessories-bearing-housing.png',
      title: 'Bearing Housings',
      description: 'Flanged bearing housings and stern tube connections for secure mounting and alignment.'
    }
  ];

  const accessories = [
    'Propeller nuts (cone, castellated, anode-fitted)',
    'Tail shafts and intermediate shafts',
    'Shaft half couplings and flexible couplings',
    'Stern tubes and shaft glands',
    'Mechanical and hydraulic seals',
    'Steering system components and anchors',
    'Mechanical and hydraulic winches',
    'Cutlass rubber bushings and bearings',
    'Zinc anodes for cathodic protection',
    'Water strainers and reefing gear',
    'Aqua Lube rubber-sleeved bearings',
    'Flanged bearing assemblies',
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative z-20 w-full pt-32 lg:pt-40 pb-20 lg:pb-32">
          <div className="absolute inset-0 bg-black/75" />
          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-3xl space-y-6">
              <h1 className="text-5xl lg:text-6xl font-bold text-white">Stern Gear Accessories</h1>
              <p className="text-xl text-white/80">
                Comprehensive range of marine stern gear components and accessories engineered for durability and performance.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-3 bg-amber-400 text-secondary rounded-sm font-semibold hover:bg-amber-500 transition-colors"
              >
                Request Catalog <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </section>

        {/* Product Gallery Section */}
        <section ref={galleryReveal.ref} className="relative z-20 bg-background py-20 lg:py-32">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="space-y-12">
              <div className="space-y-4">
                <h2 className="text-4xl lg:text-5xl font-bold text-foreground">Complete Component Range</h2>
                <p className="text-lg text-foreground/70">Browse our extensive selection of stern gear accessories and marine components.</p>
              </div>

              {/* Gallery Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {galleryItems.map((item, index) => (
                  <div 
                    key={index} 
                    className={`group space-y-4 transition-all duration-700 ${
                      galleryReveal.isVisible 
                        ? 'opacity-100 translate-y-0' 
                        : 'opacity-0 translate-y-10'
                    }`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <div className="relative overflow-hidden rounded-lg border border-border bg-muted aspect-square">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">{item.title}</h3>
                      <p className="text-foreground/70 text-sm">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Product Details */}
        <section className="relative z-20 bg-background py-20 lg:py-32">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div ref={contentReveal.ref} className={`transition-all duration-700 ${contentReveal.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="space-y-8">
                <div className="space-y-6">
                  <div>
                    <h2 className="text-3xl font-bold text-foreground mb-4">Complete Stern Gear Solutions</h2>
                    <p className="text-foreground/70 leading-relaxed">
                      OSEW offers an extensive range of stern gear components and marine accessories designed to meet diverse vessel requirements. Our carefully curated selection ensures you'll find the right solution for recreational, commercial, and industrial marine applications.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-lg font-bold text-foreground">Product Range</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {accessories.map((item, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <Check size={20} className="text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-foreground/70">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-lg font-bold text-foreground">Premium Features</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <span className="text-amber-400 font-bold">✓</span>
                        <span className="text-foreground/70">Marine and industrial grade materials</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-amber-400 font-bold">✓</span>
                        <span className="text-foreground/70">Superior corrosion resistance</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-amber-400 font-bold">✓</span>
                        <span className="text-foreground/70">Precision manufacturing standards</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-amber-400 font-bold">✓</span>
                        <span className="text-foreground/70">Custom configurations available</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-amber-400 font-bold">✓</span>
                        <span className="text-foreground/70">Proven reliability in demanding environments</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-sm font-semibold hover:opacity-90 transition-opacity"
                >
                  Browse Accessories <ArrowRight size={18} />
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
                  <h2 className="text-4xl lg:text-5xl font-bold text-foreground">Find Your Perfect Accessories</h2>
                  <p className="text-lg text-foreground/70 max-w-2xl">
                    Our specialists are ready to help you select the right components for your specific marine application and requirements.
                  </p>
                </div>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-sm font-semibold hover:opacity-90 transition-opacity"
                >
                  Contact Our Team <ArrowRight size={18} />
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
