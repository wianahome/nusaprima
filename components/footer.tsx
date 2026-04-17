'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Instagram, Facebook, Linkedin, Twitter, ArrowUp } from 'lucide-react'

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
    <footer className="relative bg-background border-t border-border/50">
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-transparent to-transparent pointer-events-none" />
      
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
                <a href="#hero" className="flex items-center gap-2 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center">
                    <span className="text-primary-foreground font-bold text-lg">N</span>
                  </div>
                  <span className="font-bold text-xl tracking-tight text-foreground">
                    Nusaprima<span className="text-primary">Digital</span>
                  </span>
                </a>
                <p className="text-muted-foreground mb-6 max-w-sm">
                  Partner digital terpercaya untuk membangun kehadiran online bisnis Anda.
                  Solusi website modern, profesional, dan terjangkau.
                </p>
                <div className="space-y-3">
                  <a
                    href="mailto:hello@nusaprimadigital.com"
                    className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Mail className="w-5 h-5" />
                    hello@nusaprimadigital.com
                  </a>
                  <a
                    href="tel:+6281234567890"
                    className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Phone className="w-5 h-5" />
                    +62 812 3456 7890
                  </a>
                  <div className="flex items-start gap-3 text-muted-foreground">
                    <MapPin className="w-5 h-5 mt-0.5" />
                    <span>
                      Jl. Sudirman No. 123<br />
                      Jakarta Selatan, Indonesia
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h4 className="font-semibold text-foreground mb-4">Layanan</h4>
              <ul className="space-y-3">
                {footerLinks.services.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
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
                    <a
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
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
                    <a
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>

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
                  className="w-9 h-9 rounded-full bg-secondary/50 flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
            
            <button
              onClick={scrollToTop}
              className="w-9 h-9 rounded-full bg-primary flex items-center justify-center text-primary-foreground hover:bg-primary/90 transition-colors"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
