"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Star, Quote } from "lucide-react";
import HeroBackground from "../p5/garisCyan";

const testimonials = [
  { id: 1, name: 'Ahmad Fauzi', role: 'CEO, TokoBaju Fashion', content: 'Nusaprima Digital membantu kami membangun platform e-commerce yang sangat memuaskan. Penjualan online kami meningkat 300% dalam 6 bulan pertama!', rating: 5, initial: 'AF' },
  { id: 2, name: 'Sarah Putri', role: 'Founder, HealthCare Plus', content: 'Tim yang sangat profesional dan responsif. Mereka benar-benar memahami kebutuhan bisnis kami dan memberikan solusi yang tepat.', rating: 5, initial: 'SP' },
  { id: 3, name: 'Budi Santoso', role: 'Marketing Director, PropertyHub', content: 'Website yang dibangun sangat cepat dan SEO-friendly. Kami sekarang mendapat 5x lebih banyak leads dari organic search.', rating: 5, initial: 'BS' },
  { id: 4, name: 'Linda Kusuma', role: 'Owner, RestoPOS', content: 'Sistem POS yang mereka buat sangat user-friendly. Training untuk staff kami berjalan lancar dan operasional menjadi lebih efisien.', rating: 5, initial: 'LK' },
  { id: 5, name: 'Reza Mahendra', role: 'CTO, EduLearn', content: 'Kualitas code yang mereka hasilkan sangat baik. Scalable dan mudah di-maintain. Highly recommended untuk proyek tech.', rating: 5, initial: 'RM' },
  { id: 6, name: 'Dewi Anggraini', role: 'Manager, TravelGo', content: 'Dari konsultasi hingga after-sales support, semuanya excellent. Mereka benar-benar partner bisnis, bukan sekadar vendor.', rating: 5, initial: 'DA' },
];

export function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="testimonials" className="relative min-h-screen w-full py-20 lg:py-32 overflow-hidden bg-transparent">
      
      {/* 1. Background Animasi P5 */}
      <HeroBackground />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-cyan-400/5 text-cyan-400 text-xs font-bold tracking-widest uppercase mb-4 border border-cyan-400/20">
            Success Stories
          </span>
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tighter">
            TRUSTED BY <span className="text-cyan-400 italic">VISIONARIES</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-sm uppercase tracking-widest font-medium">
            Membangun masa depan digital bersama klien terbaik kami.
          </p>
        </motion.div>

        {/* 2. Grid Testimonial (Ghost UI Style) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              // Penjelasan: bg-transparent agar p5 terlihat jelas, border-white/10 untuk struktur tipis
              className="group relative p-8 rounded-none border-l border-t border-white/10 hover:border-cyan-400/50 transition-all duration-700 bg-transparent"
            >
              {/* Ornamen pojok untuk memperkuat kesan high-tech */}
              <div className="absolute top-0 right-0 w-2 h-2 bg-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="flex items-center gap-1 mb-6 opacity-60 group-hover:opacity-100 transition-opacity">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-cyan-400 text-cyan-400" />
                ))}
              </div>
              
              <div className="relative mb-8">
                <Quote className="absolute -top-4 -left-2 w-10 h-10 text-white/5 group-hover:text-cyan-400/10 transition-colors" />
                <p className="text-gray-300 group-hover:text-white text-base leading-relaxed relative z-10 transition-colors duration-500">
                  {testimonial.content}
                </p>
              </div>

              <div className="flex items-center gap-4 border-t border-white/5 pt-6">
                <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-xs font-mono text-cyan-400 group-hover:border-cyan-400/50 transition-all">
                  {testimonial.initial}
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm uppercase tracking-wider">{testimonial.name}</h4>
                  <p className="text-[10px] text-cyan-500/60 uppercase font-bold tracking-widest">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 3. Minimalist Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-24 pt-12 border-t border-white/5 flex flex-wrap justify-center gap-12 md:gap-24"
        >
          <StatItem label="Client Satisfaction" value="98%" />
          <StatItem label="Success Rate" value="100%" />
          <StatItem label="Projects Done" value="250+" />
        </motion.div>
      </div>
    </section>
  );
}

function StatItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="text-center group">
      <div className="text-2xl font-black text-white group-hover:text-cyan-400 transition-colors duration-500">{value}</div>
      <div className="text-[10px] text-gray-600 uppercase tracking-[0.3em] mt-2">{label}</div>
    </div>
  );
}