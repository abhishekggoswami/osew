import Link from 'next/link'
import Image from 'next/image'
import { Mail, Phone, MapPin } from 'lucide-react'

export function Footer() {
  return (
    <footer className="relative bg-[#0d3d47] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-6 sm:mb-8">
          {/* Company Info */}
          <div className="sm:col-span-1">
            <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 relative flex-shrink-0">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Gemini_Generated_Image_mqpcbbmqpcbbmqpc-removebg-preview-82GybDEy9rmaEqiGv39d8u0EQaHz9B.png"
                  alt="OSEW Logo"
                  width={48}
                  height={48}
                  className="object-contain"
                />
              </div>
              <h3 className="font-bold text-lg sm:text-xl lg:text-2xl tracking-wider">OSEW</h3>
            </div>
            <p className="text-xs sm:text-sm font-semibold opacity-90 mb-2 sm:mb-4">
              Precision Marine Propulsion & Hydraulic Solutions for Commercial Fishing Vessels
            </p>
            <p className="text-xs font-semibold opacity-75">Made in India • Trusted Worldwide</p>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-bold text-xs sm:text-sm mb-3 sm:mb-4 uppercase tracking-wider">Products</h4>
            <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm font-semibold">
              <li>
                <Link href="/products/propellers" className="text-white/80 hover:text-amber-400 transition-colors">
                  Marine Propellers
                </Link>
              </li>
              <li>
                <Link href="/products/hydraulic-winches" className="text-white/80 hover:text-amber-400 transition-colors">
                  Hydraulic Lifting Winches
                </Link>
              </li>
              <li>
                <Link href="/products/power-blocks" className="text-white/80 hover:text-amber-400 transition-colors">
                  Power Blocks
                </Link>
              </li>
              <li>
                <Link href="/products/steering" className="text-white/80 hover:text-amber-400 transition-colors">
                  Steering Systems
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-xs sm:text-sm mb-3 sm:mb-4 uppercase tracking-wider">Services</h4>
            <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm font-semibold">
              <li>
                <Link href="/services" className="text-white/80 hover:text-amber-400 transition-colors">
                  Engineering Services
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-white/80 hover:text-amber-400 transition-colors">
                  Dynamic Balancing
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-white/80 hover:text-amber-400 transition-colors">
                  Maintenance & Repair
                </Link>
              </li>
              <li>
                <Link href="/spare-parts" className="text-white/80 hover:text-amber-400 transition-colors">
                  Spare Parts
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h4 className="font-bold text-xs sm:text-sm mb-3 sm:mb-4 uppercase tracking-wider">Contact</h4>
            <div className="space-y-2 sm:space-y-3 text-xs sm:text-sm font-semibold">
              <a href="mailto:PRADEEP@OSEWINDIA.COM" className="flex items-start gap-2 text-white/80 hover:text-amber-400 transition-colors">
                <Mail size={14} className="mt-0.5 flex-shrink-0 sm:w-4 sm:h-4" />
                <span className="break-words">PRADEEP@OSEWINDIA.COM</span>
              </a>
              <a href="tel:+919869809811" className="flex items-start gap-2 text-white/80 hover:text-amber-400 transition-colors">
                <Phone size={14} className="mt-0.5 flex-shrink-0 sm:w-4 sm:h-4" />
                <span>+91 9869809811</span>
              </a>
              <div className="flex items-start gap-2 text-white/80">
                <MapPin size={14} className="mt-0.5 flex-shrink-0 sm:w-4 sm:h-4" />
                <span className="text-xs leading-relaxed">Uran Karanja Road, Tal Uran, Dist Raigad 400702</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 pt-6 sm:pt-8 mt-6 sm:mt-8">
          <p className="text-xs sm:text-sm font-semibold text-center text-white/60">
            © 1995 OSEW - Marine Engineering &amp; Hydraulic Equipment. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
