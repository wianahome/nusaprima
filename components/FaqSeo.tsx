'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus, HelpCircle } from 'lucide-react'

const faqs = [
  {
    question: "Berapa lama waktu yang dibutuhkan untuk melihat hasil SEO?",
    answer: "Biasanya, perubahan signifikan terlihat dalam 3 hingga 6 bulan. Namun, untuk kata kunci dengan tingkat persaingan tinggi di Bali atau pasar global, otoritas domain perlu dibangun secara bertahap agar hasilnya permanen dan stabil."
  },
  {
    question: "Apakah Anda memberikan garansi ranking #1 di Google?",
    answer: "Sesuai pedoman resmi Google, tidak ada yang bisa menjamin ranking #1 secara instan. Fokus kami adalah strategi berbasis data untuk meningkatkan trafik organik, otoritas website, dan konversi yang pada akhirnya membawa website Anda ke posisi teratas secara alami."
  },
  {
    question: "Apa perbedaan SEO On-Page dan Technical SEO?",
    answer: "On-Page berfokus pada konten dan kata kunci di dalam halaman, sedangkan Technical SEO menangani infrastruktur website seperti kecepatan (Core Web Vitals), struktur data (Schema), dan kemudahan robot Google melakukan crawling."
  },
  {
    question: "Apakah SEO tetap diperlukan jika saya sudah menjalankan iklan Ads?",
    answer: "Sangat perlu. Iklan memberikan trafik instan namun berbayar, sedangkan SEO membangun aset jangka panjang. Kombinasi keduanya memastikan bisnis Anda mendominasi seluruh halaman pertama Google baik di area iklan maupun organik."
  }
]

export function FaqSeo() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0)

  return (
    <section className="py-24 bg-slate-950 relative overflow-hidden">
      <div className="container mx-auto px-6">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h4 className="text-cyan-400 font-black tracking-widest uppercase text-sm mb-4">F.A.Q</h4>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Pertanyaan yang <br />
              <span className="text-slate-400">Sering Diajukan.</span>
            </h2>
          </motion.div>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="border border-white/10 rounded-3xl overflow-hidden bg-slate-900/50 backdrop-blur-sm"
            >
              <button
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 md:p-8 text-left transition-colors hover:bg-white/5"
              >
                <div className="flex gap-4 items-center">
                  <HelpCircle className={`w-6 h-6 ${activeIndex === index ? 'text-cyan-400' : 'text-slate-500'}`} />
                  <span className="text-white font-bold text-lg md:text-xl leading-tight">
                    {faq.question}
                  </span>
                </div>
                <div className={`flex-shrink-0 ml-4 p-2 rounded-full ${activeIndex === index ? 'bg-cyan-500 text-white' : 'bg-white/10 text-slate-400'}`}>
                  {activeIndex === index ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                </div>
              </button>

              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                  >
                    <div className="px-6 md:px-8 pb-8">
                      <div className="pt-4 border-t border-white/5">
                        <p className="text-slate-200 text-lg leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}