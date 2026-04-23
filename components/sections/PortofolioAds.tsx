'use client'

import React, { useRef } from 'react'
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion'
import Image from 'next/image'
import { ArrowUpRight, Target, TrendingUp } from 'lucide-react'

// Data Studi Kasus (Ganti dengan data asli Anda)
const studies = [
  {
    title: "E-Commerce Fashion: Penjualan Naik 300% dalam 3 Bulan",
    category: "Google Shopping & Search",
    imageUrl: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=600&auto=format&fit=crop", // Ganti dengan screenshot dashboard/toko
    metrics: [
      { label: "Peningkatan Omset", value: "3x", icon: TrendingUp },
      { label: "ROAS Akhir", value: "6.5x", icon: Target },
    ],
    link: "/case-study/fashion-ecommerce"
  },
  {
    title: "SaaS Startup: Menurunkan CPA sebesar 45% & Scale-up Budget",
    category: "Google Display & Performance Max",
    imageUrl: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=600&auto=format&fit=crop", // Ganti dengan screenshot dashboard/web
    metrics: [
      { label: "Penurunan CPA", value: "45%", icon: TrendingUp },
      { label: "Leads Berkualitas", value: "+120%", icon: Target },
    ],
    link: "/case-study/saas-startup"
  },
  {
    title: "Klinik Kesehatan Lokal: Dominasi Pencarian Area Jakarta Selatan",
    category: "Google Local Services Ads",
    imageUrl: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=600&auto=format&fit=crop", // Ganti dengan foto klinik/peta
    metrics: [
      { label: "Booking Pasien Baru", value: "+80%", icon: TrendingUp },
      { label: "CTR Iklan", value: "8.2%", icon: Target },
    ],
    link: "/case-study/klinik-kesehatan"
  },
]

// Komponen Kartu Interaktif 3D Tilt
const TiltCard = ({ study, index }: { study: any, index: number }) => {
  const ref = useRef<HTMLDivElement>(null)

  // Motion values untuk posisi mouse
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  // Membuat pergerakan pegas (spring) agar halus
  const mouseXSpring = useSpring(x)
  const mouseYSpring = useSpring(y)

  // Mentransformasi posisi mouse menjadi rotasi (maksimal 10 derajat)
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"])

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return

    const rect = ref.current.getBoundingClientRect()
    const width = rect.width
    const height = rect.height
    const mouseX = event.clientX - rect.left
    const mouseY = event.clientY - rect.top

    // Menghitung posisi relatif (-0.5 sampai 0.5)
    const xPct = mouseX / width - 0.5
    const yPct = mouseY / height - 0.5

    x.set(xPct)
    y.set(yPct)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d", // Penting untuk efek 3D
      }}
      className="relative aspect-[4/5] w-full rounded-3xl bg-slate-900 border border-white/10 overflow-hidden group cursor-pointer"
    >
      {/* Gambar Latar Belakang */}
      <div className="absolute inset-0 z-0 transition-transform duration-500 group-hover:scale-110">
        <Image
          src={study.imageUrl}
          alt={study.title}
          fill
          className="object-cover opacity-40 group-hover:opacity-60 transition-opacity"
          sizes="(max-w-7xl) 33vw, 100vw"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent" />
      </div>

      {/* Konten (Diberi translateZ agar terlihat mengambang) */}
      <div 
        className="relative z-10 h-full flex flex-col justify-end p-6 md:p-8"
        style={{ transform: "translateZ(50px)" }} 
      >
        <span className="text-sm font-medium text-cyan-400 mb-2">{study.category}</span>
        <h3 className="text-xl md:text-2xl font-bold text-white mb-6 leading-snug group-hover:text-cyan-200 transition-colors">
          {study.title}
        </h3>

        {/* Metrik Utama */}
        <div className="grid grid-cols-2 gap-4 border-t border-white/10 pt-6 mb-2">
          {study.metrics.map((metric: any, i: number) => (
            <div key={i} className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                <metric.icon className="w-5 h-5 text-amber-400" />
              </div>
              <div>
                <div className="text-2xl font-bold text-white">{metric.value}</div>
                <div className="text-xs text-gray-400 uppercase tracking-wider">{metric.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Tombol Link (Muncul saat hover) */}
        <motion.div 
          className="absolute top-6 right-6 w-12 h-12 rounded-full bg-cyan-500 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-y-0 translate-y-2"
          style={{ transform: "translateZ(75px)" }}
        >
          <ArrowUpRight className="w-6 h-6 text-slate-950" />
        </motion.div>
      </div>
    </motion.div>
  )
}

export function PortfolioAds() {
  return (
    <section className="py-24 bg-background text-white overflow-hidden" id="portfolio">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-sm font-medium mb-4 inline-block"
            >
              Studi Kasus & Portfolio
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold text-white"
            >
              Hasil Nyata dari <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Kampanye Google Ads</span> Kami
            </motion.h2>
          </div>
          
          <motion.a 
            href="/all-case-studies"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 text-cyan-400 hover:text-white transition-colors group text-lg font-medium whitespace-nowrap"
          >
            Lihat Semua Hasil
            <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </motion.a>
        </div>

        {/* Grid Portfolio */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-2">
          {studies.map((study, index) => (
            <TiltCard key={index} study={study} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}