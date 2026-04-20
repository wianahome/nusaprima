'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'

const navLinks = [
  { href: '/', label: 'Beranda' },
  { href: '/gallery', label: 'Portfolio' },
  { href: '/services', label: 'Layanan' },
    { href: '/about-us', label: 'Tentang Kami' },
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
          ? 'bg-background/60 backdrop-blur-xl border-b border-border/50 shadow-lg shadow-cyan-400/50'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          
          {/* LOGO SECTION */}
          <motion.a
            href="/"
            className="flex items-center gap-3"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="relative w-10 h-10 lg:w-12 lg:h-12 flex items-center justify-center">
              <Image 
                src="/logo-nusaprima.png" 
                alt="Logo Nusaprima Digital"
                width={48} 
                height={48}
                className="object-contain mix-blend-lighten" // mix-blend-lighten membantu menghilangkan sisa background putih di dark mode
                priority
              />
            </div>
            <span className="font-bold text-xl lg:text-2xl tracking-tight text-foreground">
              Nusaprima<span className="text-cyan-400">Digital</span>
            </span>
          </motion.a>

          {/* DESKTOP NAVIGATION */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <motion.a
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-cyan-400/15"
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
              >
                {link.label}
              </motion.a>
            ))}
          </nav>

          {/* ACTION BUTTONS (DESKTOP) */}
          <div className="hidden lg:flex items-center gap-4">
            
            
            {/* MULAI SEKARANG WITH NEON EFFECT */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative group"
            >
              {/* Glow Layer */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-cyan-400 to-yellow-600 rounded-lg blur-md opacity-60 group-hover:opacity-100 group-hover:blur-lg transition-all duration-300" />
              
              <Button className="relative bg-black hover:bg-black text-amber-400 hover:text-white border border-white/10 px-6 h-11 rounded-lg font-bold transition-all shadow-2xl">
                <Link href="https://wa.me/628135979589?text=Halo%20Nusa%20Prima%20Digital,%20saya%20ingin%20bertanya%20tentang%20layanan%20website."> Mulai Sekarang </Link>
              </Button>
            </motion.div>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            className="lg:hidden p-2 text-foreground hover:bg-secondary/50 rounded-lg transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU DROPDOWN */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background/95 backdrop-blur-2xl border-b border-border overflow-hidden"
          >
            <nav className="flex flex-col p-4 gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="px-4 py-4 text-base font-medium text-muted-foreground hover:text-foreground hover:bg-secondary/50 rounded-xl transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              
              <div className="flex flex-col gap-3 mt-4 pt-6 border-t border-border/50">
                <Button variant="ghost" className="w-full justify-center h-12 text-base">
                  Masuk
                </Button>
                
                {/* Mobile Neon Button */}
                <div className="relative group w-full">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-yellow-600 rounded-xl blur-md opacity-80" />
                  <Button className="relative w-full bg-black hover:bg-black text-white border border-white/10 h-14 rounded-xl font-bold text-lg">
                    Mulai Sekarang
                  </Button>
                </div>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}