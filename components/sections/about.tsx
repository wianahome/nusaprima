'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Target, Users, Lightbulb, Rocket, Shield, HeartHandshake } from 'lucide-react'
import React from "react"

const features = [
  {
    icon: Target,
    title: 'Fokus pada Hasil',
    description: 'Setiap proyek dirancang untuk mencapai tujuan bisnis Anda dengan strategi yang terukur.',
  },
  {
    icon: Users,
    title: 'Tim Profesional',
    description: 'Developer dan designer berpengalaman yang memahami kebutuhan pasar Indonesia.',
  },
  {
    icon: Lightbulb,
    title: 'Inovasi Berkelanjutan',
    description: 'Selalu mengikuti tren teknologi terbaru untuk solusi yang future-proof.',
  },
  {
    icon: Rocket,
    title: 'Pengerjaan Cepat',
    description: 'Proses development yang efisien dengan timeline yang jelas dan transparan.',
  },
  {
    icon: Shield,
    title: 'Keamanan Terjamin',
    description: 'Implementasi standar keamanan terbaik untuk melindungi data dan aset digital Anda.',
  },
  {
    icon: HeartHandshake,
    title: 'Dukungan Penuh',
    description: 'Layanan after-sales dan maintenance untuk memastikan website Anda selalu optimal.',
  },
]

// Komponen Animasi Pengganti P5 (Tech Pulse)
function TechAnimation() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Lingkaran Luar */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute w-48 h-48 md:w-64 md:h-64 border-2 border-dashed border-cyan-400/20 rounded-full"
      />
      
      {/* Lingkaran Tengah dengan Pulse */}
      <motion.div
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute w-32 h-32 md:w-44 md:h-44 border border-cyan-400/40 rounded-full bg-cyan-400/5 backdrop-blur-sm"
      />

      {/* Inti Cahaya */}
      <motion.div
        animate={{ opacity: [0.4, 0.8, 0.4] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute w-16 h-16 bg-cyan-400/20 rounded-full blur-xl"
      />

      {/* Orbiting Elements */}
      {[0, 120, 240].map((degree, i) => (
        <motion.div
          key={i}
          className="absolute"
          animate={{ rotate: [degree, degree + 360] }}
          transition={{ duration: 10 + i * 2, repeat: Infinity, ease: "linear" }}
          style={{ width: '100%', height: '100%' }}
        >
          <motion.div 
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
            className="w-3 h-3 bg-amber-400 rounded-full shadow-[0_0_10px_#fbbf24] absolute top-0 left-1/2 -translate-x-1/2" 
          />
        </motion.div>
      ))}

      {/* Grid Lines Overlay */}
      <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#22d3ee_1px,transparent_1px),linear-gradient(to_bottom,#22d3ee_1px,transparent_1px)] bg-[size:20px_20px]" />
    </div>
  )
}

export function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" className="py-20 lg:py-32 relative bg-black overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-400/5 to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-cyan-400/10 text-cyan-400 text-sm font-medium mb-4">
            Tentang Kami
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Mengapa Memilih{' '}
            <span className="text-cyan-400">Nusaprima Digital</span>?
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Kami adalah partner digital yang berkomitmen untuk membantu bisnis Indonesia
            berkembang melalui solusi teknologi yang inovatif dan terjangkau.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-6 lg:p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-cyan-400/30 hover:bg-white/10 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-cyan-400/10 flex items-center justify-center mb-4 group-hover:bg-cyan-400/20 transition-colors">
                <feature.icon className="w-6 h-6 text-amber-400" />
              </div>
              <h3 className="text-xl font-semibold text-cyan-400 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 p-8 lg:p-12 rounded-3xl bg-gradient-to-br from-cyan-400/10 via-white/5 to-cyan-400/5 border border-cyan-400/20"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                5+ Tahun Pengalaman dalam Industri Digital
              </h3>
              <p className="text-gray-400 mb-8 leading-relaxed">
                Sejak 2019, kami telah membantu ratusan bisnis dari berbagai industri
                untuk membangun presence digital yang kuat. Dari UMKM hingga enterprise,
                kami memiliki solusi yang tepat untuk setiap kebutuhan.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: '500+', label: 'Proyek Selesai' },
                  { value: '200+', label: 'Klien Puas' },
                  { value: '15+', label: 'Tim Expert' },
                  { value: '24/7', label: 'Support' },
                ].map((stat) => (
                  <div key={stat.label} className="p-4 rounded-xl bg-white/5 border border-white/5">
                    <div className="text-2xl font-bold text-cyan-400">{stat.value}</div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="h-[350px] w-full rounded-2xl bg-cyan-400/5 border border-cyan-400/10 flex flex-col items-center justify-center overflow-hidden relative shadow-2xl">
                {/* Komponen Animasi Motion baru */}
                <TechAnimation />

                <div className="absolute bottom-6 w-full text-center z-20">
                  <motion.p 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    className="text-amber-400 font-medium tracking-[0.2em] text-xs md:text-sm uppercase"
                  >
                    Inovasi Tanpa Batas
                  </motion.p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}