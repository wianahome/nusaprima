'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'
import Image from 'next/image'

const testimonials = [
  {
    name: "Andi Wijaya",
    role: "Owner Fashion Brand",
    content: "Nusa Prima Digital benar-benar paham cara scale up budget. ROAS kami stabil di angka 5x lipat setelah ditangani mereka.",
    avatar: "https://i.pravatar.cc/150?u=andi"
  },
  {
    name: "Siska Putri",
    role: "Marketing Manager SaaS",
    content: "Dashboard laporannya sangat transparan. Kami tidak perlu lagi menebak-nebak ke mana perginya budget iklan kami.",
    avatar: "https://i.pravatar.cc/150?u=siska"
  },
  {
    name: "Budi Santoso",
    role: "CEO Klinik Kesehatan",
    content: "Layanan Google Local Ads-nya juara. Pasien baru yang datang ke klinik meningkat drastis dalam 1 bulan pertama.",
    avatar: "https://i.pravatar.cc/150?u=budi"
  },
  {
    name: "Rina Amelia",
    role: "E-commerce Founder",
    content: "Puas banget! Setup GTM dan GA4-nya rapi banget, data konversi jadi jauh lebih akurat dibanding sebelumnya.",
    avatar: "https://i.pravatar.cc/150?u=rina"
  },
  {
    name: "David Chen",
    role: "Developer Real Estate",
    content: "Tim yang sangat teknis. Mereka tidak hanya jago ads, tapi paham cara optimasi landing page agar konversi naik.",
    avatar: "https://i.pravatar.cc/150?u=david"
  }
]

// Duplikasi list untuk efek Marquee yang mulus
const marqueeTestimonials = [...testimonials, ...testimonials]

export function TestimonialsAds() {
  return (
    <section className="py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-6 mb-16 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-white mb-6"
        >
          Apa Kata <span className="text-cyan-400">Klien Kami?</span>
        </motion.h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Kepuasan klien adalah prioritas utama. Berikut adalah pengalaman mereka bekerja sama dengan tim Google Ads kami.
        </p>
      </div>

      {/* Marquee Container */}
      <div className="flex overflow-hidden space-x-6 hover:[&>div]:pause-marquee">
        <motion.div 
          animate={{ x: ["0%", "-50%"] }}
          transition={{ 
            duration: 30, 
            ease: "linear", 
            repeat: Infinity 
          }}
          className="flex space-x-6 min-w-full"
        >
          {marqueeTestimonials.map((item, index) => (
            <div 
              key={index}
              className="w-[350px] md:w-[450px] flex-shrink-0 p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-cyan-500/50 transition-colors group relative"
            >
              <Quote className="absolute top-6 right-8 w-10 h-10 text-white/5 group-hover:text-cyan-500/10 transition-colors" />
              
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>

              <p className="text-gray-300 text-lg mb-8 leading-relaxed italic">
                "{item.content}"
              </p>

              <div className="flex items-center gap-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-cyan-500/30">
                  <Image 
                    src={item.avatar} 
                    alt={item.name} 
                    fill 
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-white font-bold">{item.name}</h4>
                  <p className="text-cyan-400 text-sm">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Stats Section di bawah Testimoni */}
      <div className="container mx-auto px-6 mt-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 p-12 rounded-3xl bg-cyan-500/5 border border-cyan-500/20 text-center">
          <div>
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">50+</div>
            <div className="text-gray-400 text-sm uppercase tracking-widest">Klien Aktif</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">3.5x</div>
            <div className="text-gray-400 text-sm uppercase tracking-widest">Rata-rata ROAS</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">Rp 2M+</div>
            <div className="text-gray-400 text-sm uppercase tracking-widest">Budget Terkelola</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">98%</div>
            <div className="text-gray-400 text-sm uppercase tracking-widest">Tingkat Retensi</div>
          </div>
        </div>
      </div>
    </section>
  )
}