'use client'

import { useState } from 'react'
import { MessageCircle, X } from 'lucide-react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const serviceOptions = [
  {
    value: 'new-installation',
    label: 'New Installation',
    description: 'Fresh equipment installation for vessels',
  },
  {
    value: 'repair-maintenance',
    label: 'Repair & Maintenance',
    description: 'Service and maintenance of existing systems',
  },
  {
    value: 'custom-design',
    label: 'Custom Design',
    description: 'Bespoke hydraulic solutions tailored to your needs',
  },
  {
    value: 'spare-parts',
    label: 'Spare Parts',
    description: 'Genuine parts and components',
  },
  {
    value: 'general-inquiry',
    label: 'General Inquiry',
    description: 'Other questions or consultation',
  },
]

export function WhatsAppFloat() {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedService, setSelectedService] = useState<string | null>(null)

  const handleServiceSelect = (serviceValue: string) => {
    const service = serviceOptions.find((s) => s.value === serviceValue)
    const message = `Hello OSEW! I'm interested in: ${service?.label}`
    const whatsappUrl = `https://wa.me/919179586229?text=${encodeURIComponent(message)}`
    
    // Open WhatsApp in new tab
    window.open(whatsappUrl, '_blank')
    
    // Close dialog and reset
    setIsOpen(false)
    setSelectedService(null)
  }

  return (
    <>
      {/* Floating Button */}
      <a
        href="https://wa.link/ke39cn"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-primary border-2 border-white shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl"
        aria-label="Contact us on WhatsApp"
      >
        <MessageCircle className="h-7 w-7 text-primary-foreground" />
      </a>

      {/* Dialog */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="font-serif text-2xl">How can we help you?</DialogTitle>
            <DialogDescription>
              Select the service you're interested in, and we'll connect you via WhatsApp.
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-3 py-4">
            {serviceOptions.map((service) => (
              <button
                key={service.value}
                onClick={() => handleServiceSelect(service.value)}
                className={cn(
                  'w-full rounded-lg border-2 border-border bg-card p-4 text-left transition-all duration-200',
                  'hover:border-primary hover:bg-accent/50',
                  selectedService === service.value && 'border-primary bg-accent'
                )}
              >
                <div className="font-semibold text-foreground">{service.label}</div>
                <div className="text-sm text-muted-foreground">{service.description}</div>
              </button>
            ))}
          </div>

          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <MessageCircle className="h-4 w-4" />
            <span>You'll be redirected to WhatsApp</span>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
