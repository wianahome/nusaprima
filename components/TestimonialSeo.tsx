'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react'

const testimonials = [
  {
    name: "Wayan Sudira",
    role: "Owner, Bali Villa Management",
    content: "Trafik organik kami naik drastis dalam 3 bulan. Sekarang website kami mendominasi kata kunci 'Luxury Villa Bali'. Sangat direkomendasikan!",
    rating: 5,
    image: "https://i.pravatar.cc/150?u=wayan"
  },
  {
    name: "Sarah Johnson",
    role: "Marketing Director, Global Retail",
    content: "Nusa Prima Digital benar-benar paham teknis SEO. Mereka memperbaiki Core Web Vitals kami dan hasilnya posisi ranking kami stabil di halaman 1.",
    rating: 5,
    image: "https://i.pravatar.cc/150?u=sarah"
  },
  {
    name: "Budi Santoso",
    role: "CEO, Konstruksi Jaya",
    content: "Bukan cuma traffic, tapi lead yang masuk benar-benar berkualitas. Investasi SEO terbaik yang pernah kami lakukan untuk agensi kami.",
    rating: 5,
    image: "https://i.pravatar.cc/150?u=budi"
  }
]

export default function TestimonialSeo() {
  const [current, setCurrent] = useState(0)

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length)
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)

  return (
    <section className="py-24 bg-black relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-10 left-10 w-64 h-64 bg-cyan-500 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h4 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-cyan-400 font-black tracking-widest uppercase text-sm mb-4"
          >
            Testimoni Klien
          </motion.h4>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold text-white"
          >
            Apa Kata Mereka Tentang <br />
            <span className="text-slate-400">Layanan Kami?</span>
          </motion.h2>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
              className="bg-slate-900 border border-white/10 rounded-[3rem] p-8 md:p-16 relative"
            >
              <Quote className="absolute top-10 right-10 w-16 h-16 text-cyan-500/10" />
              
              <div className="flex flex-col items-center text-center">
                {/* Rating */}
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonials[current].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-cyan-400 text-cyan-400" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-white text-xl md:text-3xl italic leading-relaxed mb-10 font-medium">
                  "{testimonials[current].content}"
                </p>

                {/* Profile */}
                <div className="flex items-center gap-4 text-left">
                  <img 
                    src={testimonials[current].image} 
                    alt={testimonials[current].name}
                    className="w-16 h-16 rounded-full border-2 border-cyan-500 p-1"
                  />
                  <div>
                    <h5 className="text-white font-bold text-xl">{testimonials[current].name}</h5>
                    <p className="text-cyan-400 text-sm font-semibold uppercase tracking-wider">
                      {testimonials[current].role}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4 mt-10">
            <button 
              onClick={prev}
              className="w-14 h-14 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white hover:bg-cyan-500 hover:border-cyan-500 transition-all group"
            >
              <ChevronLeft className="w-6 h-6 group-active:scale-90 transition-transform" />
            </button>
            <button 
              onClick={next}
              className="w-14 h-14 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white hover:bg-cyan-500 hover:border-cyan-500 transition-all group"
            >
              <ChevronRight className="w-6 h-6 group-active:scale-90 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}