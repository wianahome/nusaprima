'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { ArrowRight, Sparkles, Code2, Zap, Globe, Cpu, Shield } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'


const floatingIcons = [
  { Icon: Globe, delay: 0, position: { top: '15%', left: '10%' } },
  { Icon: Cpu, delay: 0.2, position: { top: '25%', right: '15%' } },
  { Icon: Code2, delay: 0.4, position: { bottom: '30%', left: '8%' } },
  { Icon: Shield, delay: 0.6, position: { bottom: '20%', right: '10%' } },
]

const words = ['Inovatif', 'Modern', 'Responsif', 'Powerful']

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [currentWord, setCurrentWord] = useState(0)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start']
  })

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length)
    }, 2500)
    return () => clearInterval(interval)
  }, [])

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
      </div>



      {/* Floating Elements */}
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


      {/* Main Content */}
      <motion.div style={{ y, opacity }} className="relative z-20 text-center px-4">
        <motion.h1 className="text-6xl lg:text-8xl font-bold tracking-tight mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
          Wujudkan Website <br />
          <AnimatePresence mode="wait">
            <motion.span
              key={currentWord}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-600"
            >
              {words[currentWord]}
            </motion.span>
          </AnimatePresence>
          {' '}Anda
        </motion.h1>

        <p className="text-2xl text-amber-50 max-w-2xl mx-auto mb-10">
          Digital Agency yang fokus pada performa dan desain premium.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
  {/* Tombol Konsultasi Gratis (Background Yellow-600) */}
  <motion.div
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="relative group"
  >
    {/* Glow Effect */}
    <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-amber-600 rounded-full blur-md opacity-70 group-hover:opacity-100 group-hover:blur-xl transition-all duration-300" />
    
    <Button 
      size="lg" 
      className="relative h-14 px-10 text-lg rounded-full bg-black text-amber-400 hover:bg-cyan-400/30 hover:text-black border-0 transition-all duration-300"
    >
      <Link href="https://wa.me/628135979589?text=Halo%20Nusa%20Prima%20Digital,%20saya%20ingin%20bertanya%20tentang%20layanan%20website.">Konsultasi Gratis</Link> 
    </Button>
  </motion.div>

  {/* Tombol Lihat Portfolio (Background Transparan) */}
  <motion.div
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="relative group"
  >
    {/* Glow Effect */}
    <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-amber-600 rounded-full blur-md opacity-70 group-hover:opacity-100 group-hover:blur-xl transition-all duration-300" />
    
    <Button 
      size="lg" 
      variant="outline"
      className="relative h-14 px-10 text-lg rounded-full bg-black hover:bg-cyan-400/30 text-white border-white/20 hover:border-transparent transition-all duration-300"
    >
      Lihat Portfolio
    </Button>
  </motion.div>
</div>
      </motion.div>
    </section>
  )
}

