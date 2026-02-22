'use client'

import React, { useState } from 'react'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Mail, Phone, MapPin, MessageSquare, ArrowRight, Loader } from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    vesselType: '',
    engineHP: '',
    gearboxRatio: '',
    productRequirement: '',
    technicalDetails: '',
  })

  const [submitted, setSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')

    try {
      // Create the inquiry details
      const inquiryDetails = {
        timestamp: new Date().toLocaleString(),
        name: formData.name,
        company: formData.company,
        email: formData.email,
        phone: formData.phone,
        vesselType: formData.vesselType,
        engineHP: formData.engineHP,
        gearboxRatio: formData.gearboxRatio,
        productRequirement: formData.productRequirement,
        technicalDetails: formData.technicalDetails,
      }

      // Validate that required fields are filled
      if (!formData.name || !formData.email || !formData.productRequirement) {
        setError('Please fill in all required fields.')
        setIsLoading(false)
        return
      }

      // Create email body
      const emailBody = `
NEW INQUIRY FROM OSEW WEBSITE

CONTACT INFORMATION:
- Name: ${inquiryDetails.name}
- Email: ${inquiryDetails.email}
- Phone: ${inquiryDetails.phone}
- Company: ${inquiryDetails.company}

VESSEL SPECIFICATIONS:
- Vessel Type: ${inquiryDetails.vesselType || 'Not specified'}
- Engine HP: ${inquiryDetails.engineHP || 'Not specified'}
- Gearbox Ratio: ${inquiryDetails.gearboxRatio || 'Not specified'}

INQUIRY DETAILS:
- Product Required: ${inquiryDetails.productRequirement}

TECHNICAL DETAILS:
${inquiryDetails.technicalDetails || 'No additional details provided'}

---
Submission Time: ${inquiryDetails.timestamp}
      `.trim()

      // Open email client with pre-filled data
      const mailtoLink = `mailto:PRADEEP@OSEWINDIA.COM?subject=New Inquiry from ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(emailBody)}`
      
      window.location.href = mailtoLink
      
      // Show success message
      setSubmitted(true)
      setFormData({
        name: '',
        company: '',
        email: '',
        phone: '',
        vesselType: '',
        engineHP: '',
        gearboxRatio: '',
        productRequirement: '',
        technicalDetails: '',
      })
      
      setTimeout(() => {
        setSubmitted(false)
      }, 5000)
    } catch (err) {
      setError('Please ensure all required fields are filled. Try again or contact us at +91 9869809811.')
      console.error('Form submission error:', err)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-32">
        <div className="space-y-4 sm:space-y-6">
          <div className="space-y-3 sm:space-y-4">
            <p className="text-primary font-semibold text-xs sm:text-sm tracking-widest uppercase">Get In Touch</p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Technical Inquiry & Quotation
            </h1>
          </div>
          <p className="text-base sm:text-lg lg:text-xl text-foreground/70 max-w-3xl">
            Contact our engineering team with your vessel specifications and requirements. We'll provide detailed technical recommendations and custom quotations.
          </p>
        </div>
      </section>

      {/* Contact Info Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {[
            {
              icon: Mail,
              title: 'Email',
              value: 'PRADEEP@OSEWINDIA.COM',
              desc: 'Send technical inquiries and quotation requests',
            },
            {
              icon: Phone,
              title: 'Phone',
              value: '+91 9869809811',
              desc: 'Direct contact with our sales team',
            },
            {
              icon: MapPin,
              title: 'Location',
              value: 'Uran Karanja Road, Tal Uran, Dist Raigad 400702',
              desc: 'Manufacturing facility and engineering team',
            },
          ].map((contact, i) => {
            const Icon = contact.icon
            return (
              <div key={i} className="space-y-2 sm:space-y-3">
                <Icon size={24} className="text-primary" />
                <div>
                  <h3 className="font-bold text-foreground text-sm sm:text-base">{contact.title}</h3>
                  <p className="font-semibold text-foreground text-base sm:text-lg">{contact.value}</p>
                  <p className="text-xs sm:text-sm text-foreground/70 mt-1">{contact.desc}</p>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* Map Section */}
      <section className="w-full bg-muted/30 py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6 sm:space-y-8">
            <div className="space-y-3 sm:space-y-4">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">Our Location</h2>
              <p className="text-base sm:text-lg text-foreground/70 max-w-2xl">
                Visit our manufacturing facility and engineering team in Uran, Maharashtra, India.
              </p>
            </div>
            <div className="w-full h-96 sm:h-[500px] lg:h-[600px] rounded-lg overflow-hidden border border-border shadow-lg">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3775.731401145381!2d72.9470456!3d18.8546071!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7d978bb9deae3%3A0xb50d93d069df69e0!2sOm%20Sai%20Engineering%20Works!5e0!3m2!1sen!2sin!4v1771663404479!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-32">
        <div className="space-y-8 sm:space-y-12">
          <div className="space-y-3 sm:space-y-4">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">Submit Your Inquiry</h2>
            <p className="text-base sm:text-lg text-foreground/70">
              Provide your vessel and system specifications for a comprehensive technical assessment and quotation.
            </p>
          </div>

          {submitted ? (
            <div className="bg-primary/10 border border-primary/20 rounded-lg p-6 sm:p-12 text-center space-y-3 sm:space-y-4">
              <MessageSquare size={40} className="text-primary mx-auto" />
              <h3 className="text-xl sm:text-2xl font-bold text-foreground">Thank You!</h3>
              <p className="text-sm sm:text-base text-foreground/70 max-w-md mx-auto">
                Your inquiry has been sent successfully. Our technical team will review your specifications and contact you within 24 hours with recommendations and a detailed quotation.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Contact Information */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-foreground">Contact Information</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-border rounded-sm bg-background text-foreground placeholder-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary/50"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">
                      Company *
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-border rounded-sm bg-background text-foreground placeholder-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary/50"
                      placeholder="Company name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-border rounded-sm bg-background text-foreground placeholder-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary/50"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">
                      Phone *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-border rounded-sm bg-background text-foreground placeholder-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary/50"
                      placeholder="+91-XXXXX-XXXXX"
                    />
                  </div>
                </div>
              </div>

              {/* Vessel Specifications */}
              <div className="space-y-6 p-8 bg-secondary/5 rounded-lg border border-border">
                <h3 className="text-2xl font-bold text-foreground">Vessel Specifications</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">
                      Vessel Type *
                    </label>
                    <input
                      type="text"
                      name="vesselType"
                      value={formData.vesselType}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-border rounded-sm bg-background text-foreground placeholder-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary/50"
                      placeholder="e.g., Purse Seine Fishing Vessel"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">
                      Engine Horsepower (HP)
                    </label>
                    <input
                      type="text"
                      name="engineHP"
                      value={formData.engineHP}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-border rounded-sm bg-background text-foreground placeholder-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary/50"
                      placeholder="e.g., 300"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">
                      Gearbox Ratio
                    </label>
                    <input
                      type="text"
                      name="gearboxRatio"
                      value={formData.gearboxRatio}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-border rounded-sm bg-background text-foreground placeholder-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary/50"
                      placeholder="e.g., 3.5:1"
                    />
                  </div>
                </div>
              </div>

              {/* Product & Technical Details */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-foreground">Product Inquiry</h3>
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Product Requirement *
                  </label>
                  <input
                    type="text"
                    name="productRequirement"
                    value={formData.productRequirement}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-border rounded-sm bg-background text-foreground placeholder-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary/50"
                    placeholder="e.g., Marine Propellers, Hydraulic Winches, etc."
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Technical Details & Special Requirements
                  </label>
                  <textarea
                    name="technicalDetails"
                    value={formData.technicalDetails}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-4 py-3 border border-border rounded-sm bg-background text-foreground placeholder-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
                    placeholder="Describe your technical requirements, current equipment, timeline, or any specific challenges..."
                  />
                </div>
              </div>

              {error && (
                <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-sm">
                  {error}
                </div>
              )}

              {/* Submit Button */}
              <div className="flex gap-4 pt-6">
                <button
                  type="submit"
                  disabled={isLoading}
                  className="flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-sm font-semibold hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <>
                      <Loader size={18} className="animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Submit Inquiry
                      <ArrowRight size={18} />
                    </>
                  )}
                </button>
                <button
                  type="reset"
                  className="px-8 py-3 border border-border text-foreground rounded-sm font-semibold hover:bg-muted/50 transition-colors"
                >
                  Clear Form
                </button>
              </div>
            </form>
          )}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-secondary/5">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 py-20 lg:py-32">
          <div className="space-y-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground text-center">
              Frequently Asked Questions
            </h2>

            <div className="space-y-6">
              {[
                {
                  q: 'What information do I need to provide for a quotation?',
                  a: 'Provide your vessel type, engine specifications (horsepower, RPM), gearbox ratio, and the specific products or systems you\'re interested in. Our technical team will request additional details as needed.',
                },
                {
                  q: 'How long does the design and manufacturing process take?',
                  a: 'Timeline depends on product complexity. Custom designs typically take 4-8 weeks for engineering, fabrication, and testing. Standard products can be faster. We\'ll provide specific timelines after reviewing your requirements.',
                },
                {
                  q: 'Do you provide installation support and training?',
                  a: 'Yes, we provide comprehensive installation guidance, on-site commissioning support, and crew training for all systems. This ensures optimal performance and operator proficiency.',
                },
                {
                  q: 'What warranty and after-sales support do you offer?',
                  a: 'All products come with manufacturer warranty covering defects in materials and workmanship. We also provide spare parts availability, technical support, and preventive maintenance recommendations.',
                },
              ].map((faq, i) => (
                <div key={i} className="space-y-3 p-6 bg-background border border-border rounded-lg">
                  <h3 className="font-bold text-foreground text-lg">{faq.q}</h3>
                  <p className="text-foreground/70">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
