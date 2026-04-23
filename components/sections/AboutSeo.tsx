'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { CheckCircle2, Search, BarChart, Globe2 } from 'lucide-react'
import Image from 'next/image'

const features = [
  {
    title: "Optimasi Berbasis Data",
    desc: "Kami tidak menebak. Semua strategi SEO didasarkan pada audit teknis mendalam dan analisis kompetitor.",
    icon: BarChart
  },
  {
    title: "SEO On-Page & Teknis",
    desc: "Meningkatkan kecepatan loading (Core Web Vitals) dan struktur data agar mudah dipahami Google.",
    icon: Search
  },
  {
    title: "Dominasi Lokal Bali",
    desc: "Spesialis dalam membawa bisnis lokal di Bali ke urutan teratas pencarian wisatawan.",
    icon: Globe2
  }
]

export default function AboutSeo() {
  return (
    <section className="py-24 bg-slate-950 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Sisi Kiri: Visual/Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative group"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/30 to-blue-500/30 rounded-[2rem] blur-2xl opacity-50 group-hover:opacity-100 transition-opacity" />
            
            <div className="relative rounded-[2rem] overflow-hidden border border-white/20 bg-white/5 backdrop-blur-sm p-2">
              <Image 
                src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?q=80&w=1251&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                alt="SEO Data Analytics"
                width={700}
                height={400}
                className="rounded-[1.8rem] object-cover transition-all duration-500 group-hover:scale-105"
              />
              
              {/* Floating Card */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-8 -right-4 md:right-8 bg-slate-900 border border-cyan-400/50 backdrop-blur-md p-5 rounded-2xl shadow-2xl hidden md:block"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-cyan-500/20 flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <p className="text-white font-bold text-lg">+145%</p>
                    <p className="text-cyan-100/70 text-xs uppercase tracking-tighter">Organic Traffic Growth</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Sisi Kanan: Konten Teks */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h4 className="text-cyan-400 font-bold tracking-widest uppercase text-sm mb-3">Tentang Kami</h4>
              <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                Lebih dari Sekadar Ranking, <br />
                <span className="text-cyan-100/50">Kami Membangun Otoritas.</span>
              </h2>
              <p className="text-slate-200 text-lg mt-6 leading-relaxed">
                Nusa Prima Digital hadir untuk menjawab tantangan bisnis di era digital. Kami memahami bahwa SEO bukan hanya soal berada di halaman pertama, tapi bagaimana audiens menemukan solusi tepat pada bisnis Anda.
              </p>
            </motion.div>

            {/* List Fitur */}
            <div className="space-y-6">
              {features.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="flex gap-5 group"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center group-hover:bg-cyan-500/20 transition-colors">
                    <item.icon className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-xl mb-1">{item.title}</h3>
                    <p className="text-slate-300 text-sm md:text-base leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}