'use client'

import React from 'react'
import { motion } from 'framer-motion'

const phases = [
  {
    phase: "PHASE 01",
    title: "Deep Audit & Infrastructure",
    description: "Bukan sekadar riset, kami membedah struktur akun Anda sebelumnya dan memastikan tracking Pixel/GTM terpasang sempurna untuk akurasi data 100%.",
    timeline: "Minggu 1",
    color: "from-cyan-400 to-blue-500"
  },
  {
    phase: "PHASE 02",
    title: "High-Conversion Asset Engine",
    description: "Kami membangun landing page khusus dan copywriting iklan persuasif yang dirancang untuk memicu tindakan, bukan sekadar klik.",
    timeline: "Minggu 2",
    color: "from-blue-500 to-purple-500"
  },
  {
    phase: "PHASE 03",
    title: "Deployment & Rapid Testing",
    description: "Peluncuran kampanye dengan metode A/B Testing agresif pada audiens dan kreatif iklan untuk menemukan formula pemenang dalam waktu singkat.",
    timeline: "Bulan 1",
    color: "from-purple-500 to-pink-500"
  },
  {
    phase: "PHASE 04",
    title: "Scaling & Profit Optimization",
    description: "Meningkatkan budget secara bertahap pada iklan yang profitabel sambil terus memangkas biaya per akuisisi (CPA) Anda.",
    timeline: "Bulan 2-3+",
    color: "from-pink-500 to-orange-500"
  }
]

export function ProcessAds() {
  return (
    <section className="py-24 bg-background text-white overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-16"
        >
          Framework Akselerasi <span className="text-cyan-400">90 Hari</span>
        </motion.h2>

        <div className="relative">
          {/* Vertical Line Animation */}
          <motion.div 
            initial={{ height: 0 }}
            whileInView={{ height: '100%' }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute left-[11px] top-0 w-[2px] bg-gradient-to-b from-cyan-400 via-purple-500 to-orange-500 origin-top"
          />

          <div className="space-y-16">
            {phases.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative pl-12 group"
              >
                {/* Dot Indicator */}
                <div className="absolute left-0 top-1">
                  <div className="w-6 h-6 rounded-full border-2 border-background bg-slate-800 flex items-center justify-center group-hover:scale-125 transition-transform duration-300">
                    <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${item.color}`} />
                  </div>
                  {/* Glow Effect */}
                  <div className={`absolute inset-0 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r ${item.color}`} />
                </div>

                {/* Content */}
                <div className="max-w-3xl">
                  <span className={`text-sm font-bold tracking-[0.2em] bg-clip-text text-transparent bg-gradient-to-r ${item.color}`}>
                    {item.phase}
                  </span>
                  
                  <h3 className="text-2xl md:text-3xl font-bold mt-2 mb-4 group-hover:text-cyan-400 transition-colors">
                    {item.title}
                  </h3>
                  
                  <p className="text-gray-400 text-lg leading-relaxed mb-4">
                    {item.description}
                  </p>
                  
                  <span className="inline-block px-3 py-1 rounded-md bg-white/5 border border-white/10 text-lime-400 text-sm font-mono italic">
                    {item.timeline}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}