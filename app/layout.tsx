import React from "react"
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Cinzel } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { WhatsAppFloat } from '@/components/whatsapp-float'
import { ScrollToTop } from '@/components/scroll-to-top'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });
const _cinzel = Cinzel({ subsets: ["latin"], variable: "--font-cinzel", weight: ["400", "500", "600", "700", "800", "900"] });
const _playfair = { variable: '--font-playfair' }; // Declare _playfair variable
const _lora = { variable: '--font-lora' }; // Declare _lora variable

export const metadata: Metadata = {
  title: 'OSEW - Marine Propulsion & Hydraulic Solutions | Fishing Vessel Equipment',
  description: 'Manufacturer of marine propellers, hydraulic winches, power blocks, and steering systems for commercial fishing vessels. Made in India, trusted worldwide.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`antialiased ${_cinzel.variable} font-cinzel`}>
        <ScrollToTop />
        {children}
        <WhatsAppFloat />
        <Analytics />
      </body>
    </html>
  )
}
