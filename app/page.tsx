"use client";
import Link from 'next/link'
import { useState, useEffect, useRef } from 'react'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { PropellersCard, PowerBlocksCard, PowerSteeringCard, HydraulicWinchesCard, HydraulicSteeringCard, SternTubeCard, BearingsCard, BracketsCard, ShaftsCard, PSSSealCard, AccessoriesCard, HydraulicWinchCard, RudderCard } from '@/components/product-cards'
import { useScrollReveal } from '@/hooks/use-scroll-reveal'
import { ArrowRight, CheckCircle } from 'lucide-react'
import { BentoGrid, BentoGridItem } from '@/components/ui/bento-grid'

// Counter Animation Hook
function useCountUp(end: number, duration: number = 2000) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [isVisible, end, duration]);

  return { count, ref };
}

export default function Home() {
  const headingReveal = useScrollReveal();
  const row1Reveal = useScrollReveal();
  const row2Reveal = useScrollReveal();
  const row3Reveal = useScrollReveal();
  const row4Reveal = useScrollReveal();
  const row5Reveal = useScrollReveal();
  const techHeaderReveal = useScrollReveal();
  const techCard1Reveal = useScrollReveal();
  const techCard2Reveal = useScrollReveal();
  const techCard3Reveal = useScrollReveal();
  const techCtaReveal = useScrollReveal();
  const featuresImageReveal = useScrollReveal();
  const featuresHeaderReveal = useScrollReveal();
  const featuresListReveal = useScrollReveal();
  const featuresCtaReveal = useScrollReveal();
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Counter animations
  const vesselsCount = useCountUp(30000, 2500);
  const yearsCount = useCountUp(30, 2000);

  const slides = [
    {
      image: '/images/vessel-1.png',
      subheading: 'Excellence in Marine Systems',
      heading: 'PRECISION MARINE ENGINEERING',
      tagline: 'Delivering high-performance hydraulic systems for the world\'s most demanding vessels.'
    },
    {
      image: '/images/vessel-2.png',
      subheading: 'Tailored for Your Fleet',
      heading: 'CUSTOM PROPULSION SOLUTIONS',
      tagline: 'Engineered propellers and steering systems tailored to your vessel specifications.'
    },
    {
      image: '/images/vessel-3.png',
      subheading: 'Industry Leadership',
      heading: 'MARITIME EXCELLENCE',
      tagline: 'Three decades of innovation in marine hydraulic technology and manufacturing.'
    },
    {
      image: '/images/vessel-4.png',
      subheading: 'Innovation Beyond Limits',
      heading: 'BEYOND HYDRAULICS',
      tagline: 'We are the Specialists in Marine Propulsion and Hydraulic Innovation.'
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [slides.length]);
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section with Image Slideshow Background */}
      <section className="relative h-screen w-full overflow-hidden">
        {/* Fixed Image Slideshow Background */}
        <div className="fixed inset-0 z-0">
          {slides.map((slide, index) => (
            <div
              key={slide.image}
              className={`absolute inset-0 transition-opacity duration-2000 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <div 
                className="w-full h-full bg-cover bg-center"
                style={{
                  backgroundImage: `url(${slide.image})`,
                  animation: index === currentSlide ? `zoomSlide${index % 3} 6s ease-out forwards` : 'none',
                }}
              />
            </div>
          ))}
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent" />
        </div>

        {/* Content */}
        <div className="relative z-10 h-screen flex items-center justify-start">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-3xl relative min-h-[300px] sm:min-h-[350px] md:min-h-[400px]">
              {/* Dynamic Text - All slides overlay in same position */}
              {slides.map((slide, index) => (
                <div
                  key={`text-${index}`}
                  className={`space-y-2 sm:space-y-3 md:space-y-4 transition-opacity duration-1000 absolute top-0 left-0 w-full ${
                    index === currentSlide
                      ? 'opacity-100 pointer-events-auto'
                      : 'opacity-0 pointer-events-none'
                  }`}
                >
                  {/* Subheading */}
                  <p className="text-sm sm:text-base lg:text-lg font-cinzel tracking-widest uppercase text-amber-400 italic font-semibold mb-2 sm:mb-3">
                    {slide.subheading}
                  </p>

                  {/* Main Heading */}
                  <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-7xl font-bold text-white leading-[1.2] tracking-tight font-cinzel">
                    {slide.heading}
                  </h1>

                  {/* Tagline */}
                  <p className="text-sm sm:text-base lg:text-lg text-white/90 leading-relaxed max-w-2xl pt-2 sm:pt-4">
                    {slide.tagline}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section - Modern Asymmetric Layout */}
      <section className="relative z-20 bg-white w-full -mt-[10vh]">
        {/* Rotating Propeller */}
        <div className="absolute left-1/2 -translate-x-1/2 -top-0.5 lg:top-0 z-30">
          <img
            src="/images/gemini-generated-image-75yki475yki475yk-removebg-preview.png"
            alt="Marine Propeller"
            className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 object-contain"
            style={{
              animation: 'rotate 8s linear infinite',
              filter: 'drop-shadow(0 10px 25px rgba(0, 0, 0, 0.3)) drop-shadow(0 4px 8px rgba(0, 0, 0, 0.2))'
            }}
          />
        </div>
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 pt-12 sm:pt-20 md:pt-24 lg:pt-32 pb-12 sm:pb-20 lg:pb-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-center">
            {/* Left Content - Asymmetric */}
            <div className="lg:col-span-5 space-y-6 sm:space-y-8">
              <div className="space-y-3 sm:space-y-4">
                <p className="text-xs font-semibold text-gray-500 tracking-widest uppercase">About Us</p>
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight font-cinzel">
                  Precision Marine Engineering Since Decades
                </h2>
              </div>

              <div className="space-y-4 sm:space-y-6 text-gray-600 leading-relaxed">
                <p className="text-base sm:text-lg">
                  OM SAI Engineering Works stands at the forefront of marine hydraulic systems manufacturing, delivering precision-engineered solutions for commercial fishing vessels worldwide.
                </p>
                <p className="text-sm sm:text-base">
                  Our expertise spans from custom marine propellers to complete hydraulic power systems, each meticulously designed to withstand the demanding conditions of maritime operations.
                </p>
                <p className="text-sm sm:text-base">
                  With state-of-the-art manufacturing facilities and a commitment to excellence, we engineer reliability into every component, ensuring your fleet operates at peak performance.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-4 sm:gap-6 md:gap-8 pt-4 sm:pt-6 border-t border-gray-200">
                <div ref={vesselsCount.ref}>
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 font-cinzel">{vesselsCount.count}+</div>
                  <div className="text-xs sm:text-sm text-gray-600 mt-1">Vessels Equipped</div>
                </div>
                <div ref={yearsCount.ref}>
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 font-cinzel">{yearsCount.count}+</div>
                  <div className="text-xs sm:text-sm text-gray-600 mt-1">Years Experience</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 font-cinzel">100%</div>
                  <div className="text-xs sm:text-sm text-gray-600 mt-1">Custom Solutions</div>
                </div>
              </div>
            </div>

            {/* Right Video - Asymmetric Shape */}
            <div className="lg:col-span-7 mt-8 lg:mt-0">
              <div className="relative">
                {/* Asymmetric shape container */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  {/* Diagonal cut shape */}
                  <div className="absolute inset-0 bg-gray-900" style={{clipPath: 'polygon(8% 0, 100% 0, 100% 100%, 0 100%, 0 12%)'}}>
                    <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      preload="auto"
                      controls={false}
                      className="w-full h-full object-cover"
                      src={"https://hebbkx1anhila5yf.public.blob.vercel-storage.com/91774-636709191_small-Zrd9sFfqa775PYbofTdmiXBZD4DpUl.mp4"}
                    />
                  </div>
                </div>

                {/* Decorative asymmetric accent */}
                <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-[#1a8b9d] -z-10" style={{clipPath: 'polygon(0 0, 100% 30%, 70% 100%)'}} />
                <div className="absolute -top-6 -left-6 w-24 h-24 border-4 border-gray-200" style={{clipPath: 'polygon(30% 0, 100% 0, 100% 70%)'}} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Highlight Section - Transparent with Slideshow Background */}
      <section className="relative z-20 w-full py-12 sm:py-20 lg:py-32">
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-black/75" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div ref={techHeaderReveal.ref} className={`text-center mb-12 sm:mb-16 space-y-3 sm:space-y-4 transition-all duration-700 ${techHeaderReveal.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <p className="text-primary font-semibold text-xs sm:text-sm tracking-widest uppercase">Why Choose OSEW</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight font-cinzel">
              Engineering Excellence Delivered
            </h2>
            <p className="text-base sm:text-lg text-white/70 max-w-3xl mx-auto">
              30 years of precision manufacturing since 1995, delivering unmatched performance and reliability to 30,000+ vessels worldwide.
            </p>
          </div>

          {/* Three Premium Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
            {/* Card 1 - Precision Engineering */}
            <div ref={techCard1Reveal.ref} className={`group relative bg-gradient-to-br from-[#1a8b9d]/10 via-primary/5 to-amber-400/10 backdrop-blur-sm border border-white/10 rounded-lg p-8 hover:bg-white/10 transition-all duration-700 hover:border-amber-400/50 ${techCard1Reveal.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
              <div className="space-y-6">
                {/* Icon/Number */}
                <div className="flex items-center justify-between">
                  <div className="w-16 h-16 rounded-full bg-amber-400/10 flex items-center justify-center">
                    <div className="text-1xl font-bold text-amber-400 font-cinzel">±0.01mm</div>
                  </div>
                  <div className="text-white/30 text-5xl font-bold">01</div>
                </div>
                
                {/* Content */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-white font-cinzel">Precision Engineering</h3>
                  <p className="text-white/70 leading-relaxed">
                    Industry-leading accuracy with tolerances to 0.01mm. Our advanced CNC machining and quality control ensure every component meets exact specifications.
                  </p>
                  
                  {/* Features */}
                  <div className="space-y-2 pt-4 border-t border-white/10">
                    <div className="flex items-center gap-2 text-sm text-white/60">
                      <CheckCircle size={16} className="text-amber-400" />
                      <span>CAD/CAM Design</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-white/60">
                      <CheckCircle size={16} className="text-amber-400" />
                      <span>CNC Machining</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-white/60">
                      <CheckCircle size={16} className="text-amber-400" />
                      <span>Dynamic Balancing</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Hover Effect Border */}
              <div className="absolute inset-0 rounded-lg border-2 border-transparent group-hover:border-amber-400/20 transition-all duration-300" />
            </div>

            {/* Card 2 - Custom Solutions */}
            <div ref={techCard2Reveal.ref} className={`group relative bg-gradient-to-br from-[#1a8b9d]/10 via-primary/5 to-amber-400/10 backdrop-blur-sm border border-white/10 rounded-lg p-8 hover:bg-white/10 transition-all duration-700 delay-150 hover:border-amber-400/50 ${techCard2Reveal.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
              <div className="space-y-6">
                {/* Icon/Number */}
                <div className="flex items-center justify-between">
                  <div className="w-16 h-16 rounded-full bg-amber-400/10 flex items-center justify-center">
                    <div className="text-1xl font-bold text-amber-400 font-cinzel">100%</div>
                  </div>
                  <div className="text-white/30 text-5xl font-bold">02</div>
                </div>
                
                {/* Content */}
                <div className="space-y-4">
                  <div className="text-xs sm:text-sm text-amber-400 font-semibold">Tailored Engineering</div>
                  <h3 className="text-2xl font-bold text-white font-cinzel">Custom Solutions</h3>
                  <p className="text-white/70 leading-relaxed">
                    Every vessel is unique. We engineer custom hydraulic systems tailored to your specific requirements, operational demands, and vessel specifications.
                  </p>
                  
                  {/* Features */}
                  <div className="space-y-2 pt-4 border-t border-white/10">
                    <div className="flex items-center gap-2 text-sm text-white/60">
                      <CheckCircle size={16} className="text-amber-400" />
                      <span>Vessel-Specific Design</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-white/60">
                      <CheckCircle size={16} className="text-amber-400" />
                      <span>Load Testing</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-white/60">
                      <CheckCircle size={16} className="text-amber-400" />
                      <span>Performance Optimization</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Hover Effect Border */}
              <div className="absolute inset-0 rounded-lg border-2 border-transparent group-hover:border-amber-400/20 transition-all duration-300" />
            </div>

            {/* Card 3 - Proven Performance */}
            <div ref={techCard3Reveal.ref} className={`group relative bg-gradient-to-br from-[#1a8b9d]/10 via-primary/5 to-amber-400/10 backdrop-blur-sm border border-white/10 rounded-lg p-8 hover:bg-white/10 transition-all duration-700 delay-300 hover:border-amber-400/50 ${techCard3Reveal.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
              <div className="space-y-6">
                {/* Icon/Number */}
                <div className="flex items-center justify-between">
                  <div className="w-16 h-16 rounded-full bg-amber-400/10 flex items-center justify-center">
                    <div className="text-1xl font-bold text-amber-400 font-cinzel">30K+</div>
                  </div>
                  <div className="text-white/30 text-5xl font-bold">03</div>
                </div>
                
                {/* Content */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-white font-cinzel">Proven Performance</h3>
                  <p className="text-white/70 leading-relaxed">
                    Over 30,000 vessels worldwide trust our systems. Our certified manufacturing ensures consistent quality and reliability in the harshest conditions.
                  </p>
                  
                  {/* Features */}
                  <div className="space-y-2 pt-4 border-t border-white/10">
                    <div className="flex items-center gap-2 text-sm text-white/60">
                      <CheckCircle size={16} className="text-amber-400" />
                      <span>Certified Manufacturing</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-white/60">
                      <CheckCircle size={16} className="text-amber-400" />
                      <span>30 Years Experience</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-white/60">
                      <CheckCircle size={16} className="text-amber-400" />
                      <span>Global Support</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Hover Effect Border */}
              <div className="absolute inset-0 rounded-lg border-2 border-transparent group-hover:border-amber-400/20 transition-all duration-300" />
            </div>
          </div>

          {/* CTA Button */}
          <div ref={techCtaReveal.ref} className={`text-center mt-12 transition-all duration-700 delay-500 ${techCtaReveal.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <Link 
              href="/quality" 
              className="inline-flex items-center gap-2 px-8 py-4 bg-amber-400 hover:bg-amber-500 text-secondary font-semibold rounded transition-all group"
            >
              Explore Our Technology
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Core Capabilities - Asymmetrical Grid Layout */}
      <section className="relative z-20 bg-white w-full py-12 sm:py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="space-y-16">
            <div ref={headingReveal.ref} className={`space-y-4 transition-all duration-700 ${headingReveal.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <p className="text-primary font-semibold text-sm tracking-widest uppercase">What We Engineer</p>
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground">Complete Hydraulic Solutions</h2>
            </div>

            {/* First Row - 3 Products */}
            <div ref={row1Reveal.ref} className="grid lg:grid-cols-3 gap-8">
              <div key="product-propellers" className={`space-y-4 transition-all duration-700 ${row1Reveal.isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`}>
                <PropellersCard>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-white">Marine Propellers</h3>
                    <p className="text-white/80 text-sm">Precision-engineered stainless steel propellers</p>
                  </div>
                </PropellersCard>
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-foreground">Marine Propellers</h3>
                  <p className="text-foreground/70">Precision-engineered stainless steel propellers from 34"-75". Custom-designed for optimal thrust, fuel efficiency, and vessel control in diverse fishing operations.</p>
                  <Link href="/products/propellers" className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all group/link">
                    Learn More <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>

              <div key="product-power-blocks" className={`space-y-4 transition-all duration-700 ${row1Reveal.isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'}`}>
                <PowerBlocksCard>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-white">Hydraulic Power Blocks</h3>
                    <p className="text-white/80 text-sm">High-performance hydraulic power systems</p>
                  </div>
                </PowerBlocksCard>
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-foreground">Hydraulic Power Blocks</h3>
                  <p className="text-foreground/70">High-performance hydraulic power systems engineered for maximum efficiency, featuring integrated manifolds and advanced control systems for reliable vessel operations.</p>
                  <Link href="/products/power-blocks" className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all group/link">
                    View <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>

              <div key="product-power-steering" className={`space-y-4 transition-all duration-700 ${row1Reveal.isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'}`}>
                <PowerSteeringCard>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-white">Power Steering System</h3>
                    <p className="text-white/80 text-sm">Advanced hydraulic steering solutions</p>
                  </div>
                </PowerSteeringCard>
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-foreground">Power Steering System</h3>
                  <p className="text-foreground/70">Advanced hydraulic power steering system engineered for smooth, responsive vessel control and reduced crew operational strain.</p>
                  <Link href="/products/power-steering" className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all group/link">
                    Explore <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Second Row - 3 Products */}
            <div ref={row2Reveal.ref} className="grid lg:grid-cols-3 gap-8">
              <div key="product-hydraulic-winches" className={`space-y-4 transition-all duration-700 ${row2Reveal.isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`}>
                <HydraulicWinchesCard>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-white">Hydraulic Lifting Winches</h3>
                    <p className="text-white/80 text-sm">Heavy-duty deck machinery for fishing operations</p>
                  </div>
                </HydraulicWinchesCard>
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-foreground">Hydraulic Lifting Winches</h3>
                  <p className="text-foreground/70">Heavy-duty hydraulic lifting winches engineered for continuous-duty operations in purse seine and trawling applications with maximum reliability and extended service life.</p>
                  <Link href="/products/hydraulic-winches" className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all group/link">
                    Discover <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>

              <div key="product-hydraulic-steering" className={`space-y-4 transition-all duration-700 ${row2Reveal.isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'}`}>
                <HydraulicSteeringCard>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-white">Hydraulic Steering System</h3>
                    <p className="text-white/80 text-sm">Advanced steering wheel systems for vessel control</p>
                  </div>
                </HydraulicSteeringCard>
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-foreground">Hydraulic Steering System</h3>
                  <p className="text-foreground/70">Advanced hydraulic steering wheel systems engineered for intuitive vessel control, smooth operation, and durability in demanding maritime conditions.</p>
                  <Link href="/products/hydraulic-steering" className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all group/link">
                    Learn More <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>

              <div key="product-stern-tube" className={`space-y-4 transition-all duration-700 ${row2Reveal.isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'}`}>
                <SternTubeCard>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-white">Stern Tube Systems</h3>
                    <p className="text-white/80 text-sm">Precision bearing systems for propeller shafts</p>
                  </div>
                </SternTubeCard>
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-foreground">Stern Tube Systems</h3>
                  <p className="text-foreground/70">High-quality stern tube bearing systems engineered for durability, minimal maintenance, and reliable performance in harsh marine environments.</p>
                  <Link href="/products/stern-tube" className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all group/link">
                    View <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Third Row - 3 Products */}
            <div ref={row3Reveal.ref} className="grid lg:grid-cols-3 gap-8">
              <div key="product-bearings" className={`space-y-4 transition-all duration-700 ${row3Reveal.isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`}>
                <BearingsCard>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-white">Water-Lubricated Bearings</h3>
                    <p className="text-white/80 text-sm">Stern gear system components</p>
                  </div>
                </BearingsCard>
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-foreground">Bearings</h3>
                  <p className="text-foreground/70">Precision water-lubricated bearings engineered for stern gear systems from 25-250mm diameter with superior corrosion and abrasion resistance.</p>
                  <Link href="/products/bearings" className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all group/link">
                    Learn More <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>

              <div key="product-brackets" className={`space-y-4 transition-all duration-700 ${row3Reveal.isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'}`}>
                <BracketsCard>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-white">Marine Brackets</h3>
                    <p className="text-white/80 text-sm">Propeller support systems</p>
                  </div>
                </BracketsCard>
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-foreground">Brackets</h3>
                  <p className="text-foreground/70">P-type and A-type brackets from manganese bronze with hydrofoil design for maximum efficiency and integrated water-lubricated bearings.</p>
                  <Link href="/products/brackets" className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all group/link">
                    Explore <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>

              <div key="product-shaft" className={`space-y-4 transition-all duration-700 ${row3Reveal.isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'}`}>
                <ShaftsCard>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-white">Propeller Shafts</h3>
                    <p className="text-white/80 text-sm">Premium marine shafts</p>
                  </div>
                </ShaftsCard>
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-foreground">Shafts</h3>
                  <p className="text-foreground/70">Premium marine propeller shafts from 316L specifically designed marine grade alloy with precision CNC machining up to 10 meters length.</p>
                  <Link href="/products/shaft" className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all group/link">
                    View Details <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Fourth Row - 3 Products */}
            <div ref={row4Reveal.ref} className="grid lg:grid-cols-3 gap-8">
              <div key="product-pss-seal" className={`space-y-4 transition-all duration-700 ${row4Reveal.isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`}>
                <PSSSealCard>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-white">PSS Shaft Seal</h3>
                    <p className="text-white/80 text-sm">World-leading mechanical seal</p>
                  </div>
                </PSSSealCard>
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-foreground">PSS Shaft Seal</h3>
                  <p className="text-foreground/70">World's #1 marine mechanical seal offering 100% water-tight protection with zero maintenance, easy retrofit for shafts 20-150mm diameter.</p>
                  <Link href="/products/pss-shaft-seal" className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all group/link">
                    Learn More <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>

              <div key="product-accessories" className={`space-y-4 transition-all duration-700 ${row4Reveal.isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'}`}>
                <AccessoriesCard>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-white">Stern Gear Accessories</h3>
                    <p className="text-white/80 text-sm">Premium marine accessories</p>
                  </div>
                </AccessoriesCard>
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-foreground">Accessories</h3>
                  <p className="text-foreground/70">Complete range of stern gear accessories and replacement parts engineered to the highest marine standards for optimal performance and longevity.</p>
                  <Link href="/products/accessories" className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all group/link">
                    Learn More <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>

              <div key="product-hydraulic-winch" className={`space-y-4 transition-all duration-700 ${row4Reveal.isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'}`}>
                <HydraulicWinchCard>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-white">Hydraulic Winch</h3>
                    <p className="text-white/80 text-sm">Heavy-duty deck machinery</p>
                  </div>
                </HydraulicWinchCard>
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-foreground">Hydraulic Winch</h3>
                  <p className="text-foreground/70">Compact and powerful hydraulic winch engineered for deck hauling, cargo recovery, and general maritime lifting operations with high line pull capacity.</p>
                  <Link href="/products/hydraulic-winch" className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all group/link">
                    Explore <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Fifth Row - Rudder Product */}
            <div ref={row5Reveal.ref} className="grid lg:grid-cols-1 gap-8 justify-items-start max-w-md">
              <div key="product-rudder" className={`space-y-4 transition-all duration-700 ${row5Reveal.isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`}>
                <RudderCard>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-white">Rudder Systems</h3>
                    <p className="text-white/80 text-sm">Directional vessel control</p>
                  </div>
                </RudderCard>
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-foreground">Rudders</h3>
                  <p className="text-foreground/70">Custom fabricated steel and cast bronze rudder systems engineered for precise directional control in commercial and high-speed vessels.</p>
                  <Link href="/products/rudder" className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all group/link">
                    Explore <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section - Manufacturing Facility Showcase */}
      <section className="relative z-20">
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-black/75" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-12 sm:py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Side - Image */}
            <div ref={featuresImageReveal.ref} className={`relative lg:order-1 transition-all duration-700 ${featuresImageReveal.isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`}>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/images/gemini-generated-image-lu5pwalu5pwalu5p.png"
                  alt="OSEW Manufacturing Facility - Blue Hydraulic Power Units"
                  className="w-full h-full object-cover"
                />
                {/* Overlay Badge */}
                <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm rounded-lg px-6 py-4 shadow-lg">
                  <p className="text-sm font-semibold text-secondary uppercase tracking-wider">State-of-the-Art Facility</p>
                  <p className="text-xs text-secondary/70 mt-1">Certified Manufacturing Standards</p>
                </div>
              </div>
              {/* Decorative Element */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-full -z-10" />
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-amber-400/10 rounded-full -z-10" />
            </div>

            {/* Right Side - Content */}
            <div className="space-y-8 lg:order-2">
              <div ref={featuresHeaderReveal.ref} className={`space-y-4 transition-all duration-700 delay-150 ${featuresHeaderReveal.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <p className="text-sm font-semibold text-amber-400 tracking-widest uppercase">Our Manufacturing Excellence</p>
                <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight font-cinzel">
                  Engineered for Reliability
                </h2>
                <p className="text-lg text-white/80 leading-relaxed">
                  Every system is designed and manufactured for the unpredictable demands of commercial fishing operations with uncompromising quality standards.
                </p>
              </div>

              <div ref={featuresListReveal.ref} className={`space-y-4 transition-all duration-700 delay-300 ${featuresListReveal.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                {[
                  'Marine-grade materials and stainless steel components',
                  'Certified manufacturing processes',
                  'Rigorous pressure testing and trial runs',
                  'Dynamic balancing of rotating components',
                  'Tailored solutions for vessel specifications',
                  'Global technical support and spare parts availability',
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle size={20} className="text-amber-400 flex-shrink-0 mt-0.5" />
                    <p className="text-white/90 leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>

              <div ref={featuresCtaReveal.ref} className={`pt-4 transition-all duration-700 delay-500 ${featuresCtaReveal.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <Link 
                  href="/quality" 
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary/90 text-white font-semibold rounded transition-all group"
                >
                  View Our Facility
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Grid with Numbers */}
      <section className="relative z-20 w-full py-12 sm:py-20 lg:py-32">
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-black/75" />
        
        <div className="relative z-10 bg-background max-w-7xl mx-auto px-6 lg:px-8 py-12 lg:py-20">
          <div className="space-y-12">
            <div className="space-y-4">
              <p className="text-primary font-semibold text-sm tracking-widest uppercase">Our Strengths</p>
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground">Why Marine Operators Choose OSEW</h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
              {[
                { number: '01', title: 'Custom Engineering', desc: 'Designs tailored to engine horsepower, RPM, gearbox ratio, vessel displacement, and operational conditions.' },
                { number: '02', title: 'In-House Manufacturing', desc: 'Complete design, fabrication, machining, and testing with full quality control under one roof.' },
                { number: '03', title: 'Proven Performance', desc: 'Decades of field-tested solutions trusted by commercial fishing fleets across global waters.' },
              ].map((item, i) => (
                <div key={i} className="space-y-4">
                  <div className="text-6xl font-bold text-primary/20">{item.number}</div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-foreground">{item.title}</h3>
                    <p className="text-foreground/70">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Premium */}
      <section className="relative z-20 w-full py-12 sm:py-20 lg:py-32">
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-black/75" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-lg border border-border p-6 sm:p-12 lg:p-20 space-y-6 bg-white">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-96 h-96 bg-primary rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-400 rounded-full blur-3xl" />
            </div>
            
            <div className="relative space-y-6">
              <div className="space-y-4">
                <h2 className="text-4xl lg:text-5xl font-bold text-foreground">Ready to Upgrade Your Fleet?</h2>
                <p className="text-lg text-foreground/70 max-w-2xl">
                  Let our marine engineering experts create a customized solution tailored to your vessel's specifications and operational requirements.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-sm font-semibold hover:opacity-90 transition-opacity"
                >
                  Get Your Custom Quote
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
        </div>
      </section>

      <Footer />
    </div>
  );
}
