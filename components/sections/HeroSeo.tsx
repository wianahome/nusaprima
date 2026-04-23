'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { ArrowRight, Search, TrendingUp, BarChart3, Target, MousePointer2, LineChart } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
// Import fungsi tracking Anda
import { reportWaConversion } from '@/lib/google-ads' 

const floatingIcons = [
  { Icon: Search, delay: 0, position: { top: '15%', left: '10%' } },
  { Icon: TrendingUp, delay: 0.2, position: { top: '25%', right: '15%' } },
  { Icon: Target, delay: 0.4, position: { bottom: '30%', left: '8%' } },
  { Icon: BarChart3, delay: 0.6, position: { bottom: '20%', right: '10%' } },
]

const seoWords = ['Tervalidasi', 'Terukur', 'Dominan', 'Ranking #1']

export default function HeroSeo() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [currentWord, setCurrentWord] = useState(0)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start']
  })

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  // Link WhatsApp khusus SEO
  const waLink = "https://wa.me/628135979589?text=Halo%20Nusa%20Prima%20Digital,%20saya%20ingin%20konsultasi%20tentang%20Jasa%20SEO."

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % seoWords.length)
    }, 2500)
    return () => clearInterval(interval)
  }, [])

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Background Image SEO Theme */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
      </div>

      {/* Floating SEO Icons */}
      {floatingIcons.map(({ Icon, delay, position }, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4, y: [0, -20, 0] }}
          transition={{ duration: 4, repeat: Infinity, delay, ease: 'easeInOut' }}
          className="absolute hidden lg:block z-10"
          style={position as any}
        >
          <div className="p-4 rounded-2xl bg-primary/5 backdrop-blur-sm border border-primary/20">
            <Icon className="w-8 h-8 text-primary" />
          </div>
        </motion.div>
      ))}

      <motion.div style={{ y, opacity }} className="relative z-20 text-center px-4">
        {/* Badge Animasi */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-8"
        >
          <LineChart className="w-4 h-4" />
          <span>SEO Specialist Bali & Indonesia</span>
        </motion.div>

        <motion.h1 className="text-6xl lg:text-8xl font-bold tracking-tight mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500 leading-tight">
          Dominasi Google <br className="hidden md:block" />
          Secara{' '}
          <AnimatePresence mode="wait">
            <motion.span
              key={currentWord}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-600"
            >
              {seoWords[currentWord]}
            </motion.span>
          </AnimatePresence>
        </motion.h1>

        <p className="text-xl md:text-2xl text-amber-50 max-w-3xl mx-auto mb-12">
          Ubah pencarian menjadi penjualan. Strategi SEO data-driven untuk <br className="hidden md:block" />
          melejitkan trafik organik dan ROI bisnis Anda.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          {/* Tombol Audit Gratis */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-amber-600 rounded-full blur-md opacity-70 group-hover:opacity-100 group-hover:blur-xl transition-all duration-300" />
            
            <Button 
              size="lg" 
              onClick={() => reportWaConversion()}
              className="relative h-14 px-10 text-lg rounded-full bg-black text-amber-400 hover:bg-cyan-400/30 hover:text-black border-0 transition-all duration-300"
            >
              <Link href={waLink} target="_blank" className="flex items-center gap-2">
                Audit Website Gratis <ArrowRight className="w-5 h-5" />
              </Link> 
            </Button>
          </motion.div>

          {/* Tombol Case Study */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-amber-600 rounded-full blur-md opacity-70 group-hover:opacity-100 group-hover:blur-xl transition-all duration-300" />
            
            <Button 
              size="lg" 
              variant="outline"
              asChild
              className="relative h-14 px-10 text-lg rounded-full bg-black hover:bg-cyan-400/30 text-white border-white/20 hover:border-transparent transition-all duration-300"
            >
              <Link href="/portfolio">Lihat Hasil SEO</Link>
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}