'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus, HelpCircle } from 'lucide-react'

const faqs = [
  {
    question: "Berapa minimal budget iklan yang disarankan?",
    answer: "Untuk hasil yang optimal, kami menyarankan budget iklan minimal Rp 50.000 - Rp 100.000 per hari. Namun, ini sangat bergantung pada industri dan kompetisi kata kunci bisnis Anda."
  },
  {
    question: "Apakah ada jaminan penjualan pasti naik?",
    answer: "Dalam Google Ads, tidak ada yang bisa menjamin penjualan 100% karena faktor eksternal (produk, harga, kompetitor). Namun, kami menjamin kualitas traffic yang masuk adalah orang yang memang sedang mencari jasa/produk Anda."
  },
  {
    question: "Berapa lama sampai iklan saya mulai tayang?",
    answer: "Proses audit, riset keyword, hingga setup teknis biasanya memakan waktu 3-5 hari kerja setelah semua aset dan akses akun kami terima."
  },
  {
    question: "Apakah saya mendapatkan akses ke akun iklan?",
    answer: "Tentu. Kami bekerja secara transparan. Akun Google Ads tetap milik Anda, kami hanya bertindak sebagai pengelola dengan akses 'Standard' atau 'Admin' sesuai kesepakatan."
  },
  {
    question: "Apa bedanya jasa Nusa Prima dengan jasa ads lain?",
    answer: "Kami fokus pada 'Full Funnel Optimization'. Kami tidak hanya setting iklan, tapi juga memberikan rekomendasi perbaikan pada landing page Anda agar konversi lebih maksimal."
  }
]

const AccordionItem = ({ question, answer, isOpen, onClick }: any) => {
  return (
    <div className={`border-b border-white/10 transition-colors ${isOpen ? 'bg-white/[0.02]' : ''}`}>
      <button
        onClick={onClick}
        className="w-full py-6 flex items-center justify-between text-left gap-4"
      >
        <span className={`text-lg md:text-xl font-medium transition-colors ${isOpen ? 'text-cyan-400' : 'text-white'}`}>
          {question}
        </span>
        <div className={`flex-shrink-0 w-8 h-8 rounded-full border border-white/20 flex items-center justify-center transition-all duration-300 ${isOpen ? 'rotate-180 bg-cyan-500 border-cyan-500' : ''}`}>
          {isOpen ? (
            <Minus className="w-4 h-4 text-slate-950" />
          ) : (
            <Plus className="w-4 h-4 text-white" />
          )}
        </div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="pb-6 text-gray-400 text-lg leading-relaxed max-w-4xl">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export function FaqAds() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="py-24 bg-background relative" id="faq">
      {/* Decorative background element */}
      <div className="absolute top-1/4 -left-20 w-64 h-64 bg-cyan-500/10 rounded-full blur-[100px] -z-10" />

      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
          
          {/* Header FAQ */}
          <div className="lg:w-1/3">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm mb-6">
                <HelpCircle className="w-4 h-4" />
                <span>FAQ</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Pertanyaan yang <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Sering Diajukan</span>
              </h2>
              <p className="text-gray-400 text-lg">
                Punya pertanyaan lain? Jangan ragu untuk langsung menghubungi tim kami melalui WhatsApp.
              </p>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.open('https://wa.me/628135979589', '_blank')}
                className="mt-8 px-8 py-3 rounded-full border border-white/20 text-white hover:bg-white hover:text-black transition-all font-medium"
              >
                Tanya Lewat WhatsApp
              </motion.button>
            </motion.div>
          </div>

          {/* Akordeon FAQ */}
          <div className="lg:w-2/3">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="border-t border-white/10"
            >
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  question={faq.question}
                  answer={faq.answer}
                  isOpen={openIndex === index}
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                />
              ))}
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  )
}