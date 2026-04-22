'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { ChevronDown, MessageCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
// 1. Import fungsi tracking
import { reportWaConversion } from '@/lib/google-ads'

const faqs = [
  {
    question: 'Berapa lama waktu pengerjaan website?',
    answer: 'Waktu pengerjaan bervariasi tergantung kompleksitas proyek. Untuk paket Starter biasanya 2-3 minggu, Professional 4-6 minggu, dan Enterprise 8-12 minggu. Kami akan memberikan timeline detail setelah konsultasi.',
  },
  // ... (data faq lainnya tetap sama)
  {
    question: 'Bagaimana jika saya butuh fitur tambahan setelah website jadi?',
    answer: 'Kami selalu siap membantu pengembangan website Anda. Fitur tambahan dapat didiskusikan dan dikerjakan dengan penawaran harga terpisah sesuai kompleksitas fitur yang diinginkan.',
  },
]

export function FAQ() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  // Link WhatsApp yang seragam
  const waLink = "https://wa.me/628135979589?text=Halo%20Nusa%20Prima%20Digital,%20saya%20ingin%20bertanya%20tentang%20layanan%20website."

  return (
    <section id="faq" className="py-20 lg:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-400/5 to-transparent pointer-events-none" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-cyan-400/10 text-cyan-400 text-sm font-medium mb-4">
            FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Pertanyaan yang{' '}
            <span className="text-cyan-400">Sering Diajukan</span>
          </h2>
          <p className="text-lg text-gray-50 max-w-2xl mx-auto">
            Temukan jawaban untuk pertanyaan umum tentang layanan kami di bawah ini.
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="rounded-2xl border border-border/50 bg-card/30 backdrop-blur-sm overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-5 text-left"
              >
                <span className="font-medium text-foreground pr-4">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-amber-300 flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <motion.div
                initial={false}
                animate={{
                  height: openIndex === index ? 'auto' : 0,
                  opacity: openIndex === index ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <p className="px-5 pb-5 text-amber-400">
                  {faq.answer}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* CTA SECTION - HUBUNGI KAMI */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-16 p-8 rounded-3xl bg-gradient-to-br from-cyan-400/10 via-card/50 to-cyan-400/5 border border-cyan-400/20 text-center"
        >
          <MessageCircle className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
          <h3 className="text-xl font-bold text-foreground mb-2">
            Masih punya pertanyaan?
          </h3>
          <p className="text-gray-100 mb-6">
            Tim kami siap membantu menjawab semua pertanyaan Anda.
          </p>
          
          {/* 2. Tambahkan Link dan reportWaConversion */}
          <Button 
            asChild
            onClick={() => reportWaConversion()}
            className="bg-cyan-400 hover:bg-cyan-400/90 text-black font-bold h-12 px-8 rounded-full"
          >
            <Link href={waLink} target="_blank">
              Hubungi Kami
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}