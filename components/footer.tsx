'use client'

import { motion } from 'framer-motion'
import { Phone, MapPin } from 'lucide-react'
import Image from 'next/image'

export function Footer() {
  return (
    <footer className="relative pb-20 bg-background border-t border-border/50">
      <div className="absolute inset-0 bg-gradient-to-t from-cyan-400/5 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="py-16 lg:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <a href="#hero" className="flex items-center gap-3 mb-6 group">
                  <div className="relative w-12 h-12 flex items-center justify-center">
                    <Image
                      src="/logo-nusaprima.png"
                      alt="Logo Nusaprima Digital"
                      width={48}
                      height={48}
                      className="object-contain mix-blend-lighten group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <span className="font-bold text-xl lg:text-2xl tracking-tight text-foreground">
                    Nusaprima<span className="text-cyan-400">Digital</span>
                  </span>
                </a>

                <p className="text-gray-100 mb-6 max-w-sm">
                  Partner digital terpercaya untuk membangun kehadiran online bisnis Anda di Bali dan seluruh Indonesia.
                  Solusi website modern, profesional, dan berkinerja tinggi.
                </p>

                <div className="space-y-3">
                  <a
                    href="tel:+628135979589"
                    className="flex items-center gap-3 text-gray-100"
                  >
                    <Phone className="w-5 h-5 text-cyan-400" />
                    +62 813 597 9589
                  </a>
                  <div className="flex items-start gap-3 text-gray-100">
                    <MapPin className="w-5 h-5 mt-0.5 text-cyan-400" />
                    <span>
                      Jl. Pura Tegal Gading No. 5A Kuta Selatan, Bali<br />
                      Indonesia
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        <div className="py-6 border-t border-border/50 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-100">
            &copy; {new Date().getFullYear()} Nusaprima Digital. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
