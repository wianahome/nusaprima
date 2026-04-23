'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Target, TrendingUp, Search, MousePointer2, BarChart2, ShieldCheck } from 'lucide-react'

const features = [
  {
    title: "Strategi Berbasis Data",
    description: "Kami tidak menebak. Setiap kampanye dijalankan berdasarkan riset kata kunci mendalam dan analisis kompetitor yang akurat.",
    icon: Search,
    color: "text-cyan-400"
  },
  {
    title: "Optimasi ROI Maksimal",
    description: "Fokus kami bukan hanya klik, tapi konversi. Kami memastikan setiap Rupiah yang Anda belanjakan menghasilkan keuntungan nyata.",
    icon: TrendingUp,
    color: "text-amber-400"
  },
  {
    title: "Targeting Super Spesifik",
    description: "Menjangkau audiens yang tepat di saat yang tepat berdasarkan lokasi, minat, dan niat beli mereka secara presisi.",
    icon: Target,
    color: "text-blue-400"
  },
  {
    title: "Laporan Transparan",
    description: "Dapatkan dashboard laporan yang mudah dipahami. Pantau performa iklan Anda kapan saja tanpa ada yang ditutupi.",
    icon: BarChart2,
    color: "text-purple-400"
  },
  {
    title: "Landing Page High-Conversion",
    description: "Iklan hebat butuh tujuan yang hebat. Kami mengoptimalkan halaman landing Anda agar pengunjung berubah menjadi pembeli.",
    icon: MousePointer2,
    color: "text-emerald-400"
  },
  {
    title: "Partner Resmi & Terpercaya",
    description: "Dikelola oleh tim ahli yang berpengalaman menangani berbagai industri dengan standar praktik terbaik Google.",
    icon: ShieldCheck,
    color: "text-rose-400"
  }
]

export function AboutAds() {
  return (
    <section className="py-24 bg-background relative overflow-hidden" id="about-us">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[120px] -z-10" />
      
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-20">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-sm font-medium mb-4"
          >
            Tentang Kami
          </motion.span>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold mb-6 text-white"
          >
            Mengapa Memilih <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Nusa Prima Digital?</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 max-w-3xl text-lg"
          >
            Kami adalah partner strategis Anda dalam menaklukkan pasar digital melalui Google Ads. 
            Lebih dari sekadar menjalankan iklan, kami membangun mesin pertumbuhan untuk bisnis Anda.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-cyan-500/50 hover:bg-white/[0.07] transition-all duration-300 group"
            >
              <div className={`w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className={`w-8 h-8 ${feature.color}`} />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white group-hover:text-cyan-400 transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}