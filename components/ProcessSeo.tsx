'use client'

import React from 'react'
import { motion } from 'framer-motion'

const seoSteps = [
  {
    phase: "PHASE 01",
    title: "Audit & Strategi Kata Kunci",
    desc: "Kami menganalisis kesehatan teknis website Anda, memetakan kompetitor, dan meriset kata kunci dengan volume tinggi yang relevan dengan bisnis Anda.",
    time: "Minggu 1",
    color: "bg-cyan-500"
  },
  {
    phase: "PHASE 02",
    title: "Optimasi On-Page & Konten",
    desc: "Perbaikan struktur HTML, optimasi meta tags, dan pembuatan konten berkualitas tinggi yang dirancang untuk memuaskan pembaca sekaligus algoritma Google.",
    time: "Minggu 2-4",
    color: "bg-blue-500"
  },
  {
    phase: "PHASE 03",
    title: "Technical SEO & Authority",
    desc: "Meningkatkan Core Web Vitals (kecepatan) dan membangun backlink berkualitas untuk meningkatkan otoritas domain Anda di mata mesin pencari.",
    time: "Bulan 2",
    color: "bg-indigo-500"
  },
  {
    phase: "PHASE 04",
    title: "Monitoring & Dominasi Market",
    desc: "Analisis performa mingguan dan penyesuaian strategi secara real-time untuk memastikan peringkat Anda terus naik dan mendominasi halaman pertama.",
    time: "Bulan 3+",
    color: "bg-cyan-400"
  }
]

export default function ProcessSeo() {
  return (
    <section className="py-24 bg-black relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white mb-16"
          >
            Framework SEO 90 Hari
          </motion.h2>

          <div className="relative space-y-12">
            {/* Garis Vertikal Tengah */}
            <div className="absolute left-[11px] top-2 bottom-2 w-0.5 bg-slate-800" />

            {seoSteps.map((step, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="relative pl-12 group"
              >
                {/* Dot Indikator */}
                <div className={`absolute left-0 top-1.5 w-6 h-6 rounded-full border-4 border-slate-950 z-10 transition-colors duration-300 group-hover:border-cyan-500/50 ${step.color}`} />
                
                <div className="space-y-2">
                  <span className="text-cyan-500 text-sm font-black tracking-widest uppercase">
                    {step.phase}
                  </span>
                  
                  <h3 className="text-2xl md:text-3xl font-bold text-white">
                    {step.title}
                  </h3>
                  
                  <p className="text-slate-300 text-lg leading-relaxed max-w-2xl">
                    {step.desc}
                  </p>
                  
                  <div className="pt-2">
                    <span className="text-lime-400 font-bold text-sm">
                      {step.time}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}