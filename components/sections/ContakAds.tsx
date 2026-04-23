'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Send, Phone, Mail, MapPin, CheckCircle2 } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function ContactAds() {
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulasi pengiriman form
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 5000)
  }

  return (
    <section className="py-24 bg-background relative overflow-hidden" id="contact">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Info Kontak & Copywriting */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Siap Dominasi <br />
                <span className="text-cyan-400">Market Anda?</span>
              </h2>
              <p className="text-gray-400 text-lg max-w-md">
                Konsultasikan kebutuhan iklan Anda secara gratis. Kami akan membedah strategi terbaik untuk bisnis Anda dalam 24 jam.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-cyan-500/50 transition-colors">
                  <Phone className="w-5 h-5 text-cyan-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 uppercase tracking-widest font-semibold">WhatsApp</p>
                  <p className="text-white font-medium">+62 813-5979-589</p>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-cyan-500/50 transition-colors">
                  <Mail className="w-5 h-5 text-cyan-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 uppercase tracking-widest font-semibold">Email</p>
                  <p className="text-white font-medium">halo@nusaprimadigital.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-cyan-500/50 transition-colors">
                  <MapPin className="w-5 h-5 text-cyan-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 uppercase tracking-widest font-semibold">Lokasi</p>
                  <p className="text-white font-medium">Bali, Indonesia</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative p-8 md:p-10 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm"
          >
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.form 
                  key="contact-form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-300 ml-1">Nama Lengkap</label>
                      <input 
                        required
                        type="text" 
                        placeholder="John Doe"
                        className="w-full px-5 py-4 rounded-2xl bg-white/5 border border-white/10 text-white focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 outline-none transition-all"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-300 ml-1">Nama Bisnis</label>
                      <input 
                        required
                        type="text" 
                        placeholder="PT Maju Bersama"
                        className="w-full px-5 py-4 rounded-2xl bg-white/5 border border-white/10 text-white focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-300 ml-1">Email / WhatsApp</label>
                    <input 
                      required
                      type="text" 
                      placeholder="Email atau No. WhatsApp Anda"
                      className="w-full px-5 py-4 rounded-2xl bg-white/5 border border-white/10 text-white focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 outline-none transition-all"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-300 ml-1">Kebutuhan Iklan</label>
                    <textarea 
                      rows={4}
                      placeholder="Ceritakan target bisnis Anda..."
                      className="w-full px-5 py-4 rounded-2xl bg-white/5 border border-white/10 text-white focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 outline-none transition-all resize-none"
                    />
                  </div>

                  <Button 
                    type="submit"
                    className="w-full h-14 rounded-2xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-lg group transition-all"
                  >
                    Kirim Sekarang
                    <Send className="w-5 h-5 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </Button>
                </motion.form>
              ) : (
                <motion.div 
                  key="success-message"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-20 text-center space-y-4"
                >
                  <div className="w-20 h-20 rounded-full bg-cyan-500/20 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-12 h-12 text-cyan-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Pesan Terkirim!</h3>
                  <p className="text-gray-400">Tim kami akan menghubungi Anda sesegera mungkin.</p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

        </div>
      </div>
    </section>
  )
}