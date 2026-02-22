'use client'

import Link from 'next/link'
import { useState } from 'react'
import { usePathname } from 'next/navigation'
import { Menu, X, ChevronDown } from 'lucide-react'
import Image from 'next/image'

export function Header() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [productsOpen, setProductsOpen] = useState(false)

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/'
    }
    return pathname.startsWith(href)
  }

  const navLinks = [
    { label: 'HOME', href: '/' },
    { label: 'ABOUT', href: '/about' },
    { label: 'PRODUCT SOLUTION', href: '/products', hasDropdown: true, dropdownType: 'products' },
    { label: 'TECHNOLOGY', href: '/quality' },
    { label: 'SERVICES', href: '/services' },
  ]

  const productLinks = [
    { label: 'Marine Propellers', href: '/products/propellers' },
    { label: 'Power Steering System', href: '/products/power-steering' },
    { label: 'Hydraulic Steering Wheels', href: '/products/hydraulic-steering' },
    { label: 'Hydraulic Winch', href: '/products/hydraulic-winch' },
    { label: 'Hydraulic Lifting Winches', href: '/products/hydraulic-winches' },
    { label: 'Hydraulic Power Blocks', href: '/products/power-blocks' },
    { label: 'Stern Tube Systems', href: '/products/stern-tube' },
    { label: 'Water-Lubricated Bearings', href: '/products/bearings' },
    { label: 'Marine Brackets', href: '/products/brackets' },
    { label: 'Propeller Shafts', href: '/products/shaft' },
    { label: 'PSS Shaft Seal', href: '/products/pss-shaft-seal' },
    { label: 'Stern Gear Accessories', href: '/products/accessories' },
  ]

  return (
    <header className="fixed top-0 z-50 w-full bg-white border-b border-gray-200">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo with Tagline */}
          <Link href="/" className="flex items-center gap-4 group">
            <div className="w-12 h-12 relative">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Gemini_Generated_Image_mqpcbbmqpcbbmqpc-removebg-preview-SawP6UwJ8t2pLBOQrKXaitdL3yO91c.png"
                alt="OM SAI Engineering Works"
                width={48}
                height={48}
                className="object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-2xl text-gray-900 leading-tight tracking-tight font-cinzel">OM SAI</span>
              <span className="text-[10px] font-cinzel text-black">Engineering Works</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8 xl:gap-12">
            {navLinks.map((link) => (
              link.hasDropdown ? (
                <div 
                  key={link.href}
                  className="relative group"
                  onMouseEnter={() => setProductsOpen(true)}
                  onMouseLeave={() => setProductsOpen(false)}
                >
                  <button 
                    className={`text-xs font-medium transition-colors tracking-wider flex items-center gap-1 bg-transparent pb-2 border-b-2 ${
                      isActive(link.href)
                        ? 'text-primary border-primary'
                        : 'text-gray-700 border-transparent hover:text-gray-900'
                    }`}
                  >
                    {link.label}
                    <ChevronDown size={14} className={`transition-transform ${productsOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {/* Dropdown Menu */}
                  {productsOpen && (
                    <div 
                      className="absolute top-full left-0 pt-2 w-64"
                    >
                      <div className="bg-white border border-gray-200 rounded shadow-xl py-2 z-50">
                        {productLinks.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-xs font-medium transition-colors tracking-wider pb-2 border-b-2 ${
                    isActive(link.href)
                      ? 'text-primary border-primary'
                      : 'text-gray-700 border-transparent hover:text-gray-900'
                  }`}
                >
                  {link.label}
                </Link>
              )
            ))}
          </nav>

          {/* Right Side Actions */}
          <div className="hidden lg:flex items-center">
            <Link
              href="/contact"
              className="px-4 py-2 text-xs font-medium text-white bg-red-600 hover:bg-red-700 transition-colors tracking-wider"
            >
              CONTACT
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-gray-700 hover:bg-gray-100 rounded transition-colors"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 py-4 space-y-1">
          {navLinks.map((link) => (
            link.hasDropdown ? (
              <div key={link.href}>
                <button
                  onClick={() => setProductsOpen(!productsOpen)}
                  className={`w-full flex items-center justify-between px-6 py-3 text-sm font-medium transition-all border-l-4 ${
                    isActive(link.href)
                      ? 'bg-primary/5 text-primary border-primary'
                      : 'text-gray-700 border-transparent hover:bg-gray-50'
                  }`}
                >
                  {link.label}
                  <ChevronDown size={16} className={`transition-transform ${productsOpen ? 'rotate-180' : ''}`} />
                </button>
                {productsOpen && (
                  <div className="bg-gray-50 py-2">
                    {productLinks.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block px-10 py-2 text-sm text-gray-600 hover:bg-gray-100 transition-all"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className={`block px-6 py-3 text-sm font-medium transition-all border-l-4 ${
                  isActive(link.href)
                    ? 'bg-primary/5 text-primary border-primary'
                    : 'text-gray-700 border-transparent hover:bg-gray-50'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            )
          ))}
          <Link
            href="/contact"
            className="block px-6 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-all"
            onClick={() => setMobileMenuOpen(false)}
          >
            CONTACT
          </Link>
        </div>
      )}
    </header>
  )
}

export default Header
