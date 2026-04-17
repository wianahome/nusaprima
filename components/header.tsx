'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'

const navLinks = [
  { href: '#hero', label: 'Beranda' },
  { href: '#about', label: 'Tentang Kami' },
  { href: '#pricing', label: 'Harga' },
  { href: '#gallery', label: 'Portfolio' },
  { href: '#testimonials', label: 'Testimoni' },
  { href: '#faq', label: 'FAQ' },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-background/60 backdrop-blur-xl border-b border-border/50 shadow-lg shadow-primary/5'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <motion.a
            href="#hero"
            className="flex items-center gap-2"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">N</span>
            </div>
            <span className="font-bold text-xl tracking-tight text-foreground">
              Nusaprima<span className="text-primary">Digital</span>
            </span>
          </motion.a>

          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <motion.a
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-secondary/50"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {link.label}
              </motion.a>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <Button
              variant="ghost"
              className="text-muted-foreground hover:text-foreground"
            >
              Masuk
            </Button>
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
              Mulai Sekarang
            </Button>
          </div>

          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background/95 backdrop-blur-xl border-b border-border"
          >
            <nav className="flex flex-col p-4 gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="px-4 py-3 text-muted-foreground hover:text-foreground hover:bg-secondary/50 rounded-lg transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <div className="flex flex-col gap-2 mt-4 pt-4 border-t border-border">
                <Button variant="ghost" className="justify-start">
                  Masuk
                </Button>
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  Mulai Sekarang
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
