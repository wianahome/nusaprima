'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Instagram, Facebook, Linkedin, Twitter, ArrowUp } from 'lucide-react'
import Image from 'next/image' // Import komponen Image

const footerLinks = {
  services: [
    { label: 'Website Company Profile', href: '#' },
    { label: 'E-Commerce Development', href: '#' },
    { label: 'Web Application', href: '#' },
    { label: 'UI/UX Design', href: '#' },
    { label: 'Mobile App', href: '#' },
  ],
  company: [
    { label: 'Tentang Kami', href: '#about' },
    { label: 'Portfolio', href: '#gallery' },
    { label: 'Karir', href: '#' },
    { label: 'Blog', href: '#' },
    { label: 'Kontak', href: '#' },
  ],
  support: [
    { label: 'FAQ', href: '#faq' },
    { label: 'Kebijakan Privasi', href: '#' },
    { label: 'Syarat & Ketentuan', href: '#' },
    { label: 'Dokumentasi', href: '#' },
    { label: 'Support Center', href: '#' },
  ],
}

const socialLinks = [
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Twitter, href: '#', label: 'Twitter' },
]

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative pb-20 bg-background border-t border-border/50">
      {/* Background Gradient Overlay */}
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
                {/* LOGO BARU MENGGUNAKAN IMAGE */}
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
                    href="tel:+6281234567890"
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
             
             
            {/* <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h4 className="font-semibold text-foreground mb-4">Layanan</h4>
              <ul className="space-y-3">
                {footerLinks.services.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-muted-foreground hover:text-cyan-400 transition-colors">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h4 className="font-semibold text-foreground mb-4">Perusahaan</h4>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-muted-foreground hover:text-cyan-400 transition-colors">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h4 className="font-semibold text-foreground mb-4">Bantuan</h4>
              <ul className="space-y-3">
                {footerLinks.support.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-muted-foreground hover:text-cyan-400 transition-colors">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div> */}
          </div>
        </div>
                <div className="py-6 border-t border-border/50 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-100">
            &copy; {new Date().getFullYear()} Nusaprima Digital. All rights reserved.
          </p> </div>  

        {/* Bottom Bar
        <div className="py-6 border-t border-border/50 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Nusaprima Digital. All rights reserved.
          </p>
          
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-9 h-9 rounded-full bg-secondary/50 flex items-center justify-center text-muted-foreground hover:bg-cyan-400 hover:text-white transition-all shadow-lg shadow-black/20"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
            
            <button
              onClick={scrollToTop}
              className="w-10 h-10 rounded-full bg-cyan-400 flex items-center justify-center text-white hover:bg-cyan-400/80 transition-all shadow-lg shadow-cyan-400/20"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-5 h-5" />
            </button>
          </div>
        </div> */}
        
      </div>
    </footer>
  )
}