'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { ChevronDown, MessageCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { reportWaConversion } from '@/lib/google-ads'

// Daftar Pertanyaan Lengkap & Komprehensif
const faqs = [
  {
    question: 'Berapa lama waktu pengerjaan website?',
    answer: 'Waktu pengerjaan bervariasi tergantung kompleksitas proyek. Untuk paket Landing Page / Company Profile biasanya memakan waktu 1–2 minggu, sedangkan untuk sistem/SaaS kustom berkisar antara 3–6 minggu.',
  },
  {
    question: 'Apakah website sudah termasuk SEO dan optimasi kecepatan?',
    answer: 'Ya, seluruh website yang kami bangun dikembangkan menggunakan arsitektur modern (seperti Next.js/React) yang dirancang cepat, mobile-friendly, dan dioptimasi dasar untuk SEO On-Page (meta tag, sitemap, dan Google Indexing).',
  },
  {
    question: 'Apakah saya mendapatkan akses ke source code atau dashboard admin?',
    answer: 'Tentu saja. Anda memiliki hak penuh atas proyek tersebut. Kami menyediakan CMS/Dashboard Admin yang fleksibel untuk mengelola konten, serta memberikan akses penuh ke repositori kode jika diperlukan.',
  },
  {
    question: 'Bagaimana sistem pembayaran untuk pembuatan website?',
    answer: 'Pembayaran dilakukan secara bertahap: Down Payment (DP) sebesar 50% di awal proyek sebagai tanda jadi, dan pelunasan 50% setelah website selesai ditinjau serta siap diserahterimakan.',
  },
  {
    question: 'Apakah ada garansi dan bantuan pemeliharaan (maintenance)?',
    answer: 'Kami memberikan garansi pemeliharaan dan perbaikan bug secara gratis selama 30–60 hari setelah website rilis. Kami juga menyediakan paket maintenance jangka panjang jika Anda membutuhkan bantuan berkala.',
  },
  {
    question: 'Bagaimana jika saya butuh fitur tambahan setelah website selesai?',
    answer: 'Kami selalu siap membantu pengembangan lanjutan. Fitur tambahan dapat didiskusikan dan dikerjakan melalui penawaran terpisah (add-on) sesuai kompleksitas yang diinginkan.',
  },
]

export function FAQ() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  // Link WhatsApp
  const waLink = "https://wa.me/628135979589?text=Halo%20Nusa%20Prima%20Digital,%20saya%20ingin%20bertanya%20tentang%20layanan%20website."

  const handleWaClick = () => {
    if (typeof reportWaConversion === 'function') {
      reportWaConversion()
    }
  }

  return (
    <section id="faq" className="py-20 lg:py-32 relative overflow-hidden">
      {/* Glow Effect Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-400/5 to-transparent pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-cyan-400/10 text-cyan-400 text-sm font-semibold mb-4 border border-cyan-400/20">
            FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Pertanyaan yang{' '}
            <span className="text-cyan-400">Sering Diajukan</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Temukan jawaban untuk pertanyaan umum terkait proses pengerjaan, teknologi, dan layanan pembuatan website kami.
          </p>
        </motion.div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="rounded-2xl border border-border/60 bg-card/40 backdrop-blur-md overflow-hidden transition-colors hover:border-cyan-400/30"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between p-5 sm:p-6 text-left focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-semibold text-foreground pr-4 text-sm sm:text-base">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-cyan-400 shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                <motion.div
                  initial={false}
                  animate={{
                    height: isOpen ? 'auto' : 0,
                    opacity: isOpen ? 1 : 0,
                  }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className="overflow-hidden"
                >
                  <p className="px-5 pb-5 sm:px-6 sm:pb-6 text-sm sm:text-base text-muted-foreground leading-relaxed border-t border-border/20 pt-3">
                    {faq.answer}
                  </p>
                </motion.div>
              </motion.div>
            )
          })}
        </div>

        {/* CTA SECTION - HUBUNGI KAMI */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 p-8 rounded-3xl bg-gradient-to-br from-cyan-500/10 via-card/60 to-cyan-400/5 border border-cyan-400/20 text-center shadow-xl backdrop-blur-md"
        >
          <div className="w-14 h-14 rounded-2xl bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center mx-auto mb-4 text-cyan-400">
            <MessageCircle className="w-7 h-7" />
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-2">
            Masih Punya Pertanyaan Lain?
          </h3>
          <p className="text-sm sm:text-base text-muted-foreground mb-6 max-w-lg mx-auto">
            Tim teknis kami siap membantu memberikan solusi dan konsultasi gratis untuk proyek Anda.
          </p>

          <Button 
            asChild
            onClick={handleWaClick}
            className="bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold h-12 px-8 rounded-full transition-all duration-300 shadow-lg shadow-cyan-400/20"
          >
            <Link href={waLink} target="_blank" rel="noopener noreferrer">
              Hubungi Kami via WhatsApp
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}