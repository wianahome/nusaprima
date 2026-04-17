'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { ChevronDown, MessageCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'

const faqs = [
  {
    question: 'Berapa lama waktu pengerjaan website?',
    answer: 'Waktu pengerjaan bervariasi tergantung kompleksitas proyek. Untuk paket Starter biasanya 2-3 minggu, Professional 4-6 minggu, dan Enterprise 8-12 minggu. Kami akan memberikan timeline detail setelah konsultasi.',
  },
  {
    question: 'Apakah saya bisa request revisi?',
    answer: 'Tentu! Setiap paket sudah termasuk jatah revisi. Starter mendapat 2x revisi, Professional 5x revisi, dan Enterprise unlimited revisi. Revisi tambahan dapat dikenakan biaya sesuai kesepakatan.',
  },
  {
    question: 'Bagaimana sistem pembayarannya?',
    answer: 'Pembayaran dilakukan secara bertahap: 50% di awal sebagai DP untuk memulai proyek, dan 50% sisanya setelah proyek selesai dan disetujui. Kami menerima transfer bank dan berbagai metode pembayaran lainnya.',
  },
  {
    question: 'Apakah termasuk maintenance?',
    answer: 'Ya, paket Professional dan Enterprise sudah termasuk maintenance. Starter mendapat support 1 bulan, Professional 3 bulan, dan Enterprise 12 bulan. Setelah periode tersebut, tersedia paket maintenance bulanan.',
  },
  {
    question: 'Apakah website yang dibuat SEO-friendly?',
    answer: 'Semua website yang kami buat sudah dioptimasi untuk SEO dasar. Untuk optimasi lebih lanjut seperti keyword research, content strategy, dan link building, tersedia sebagai layanan tambahan.',
  },
  {
    question: 'Bisakah website diintegrasikan dengan sistem lain?',
    answer: 'Ya, kami dapat mengintegrasikan website dengan berbagai sistem seperti payment gateway, CRM, ERP, WhatsApp Business API, dan lainnya. Integrasi khusus mungkin memerlukan biaya tambahan.',
  },
  {
    question: 'Apakah saya mendapat source code?',
    answer: 'Ya, setelah proyek selesai dan pembayaran lunas, Anda akan mendapatkan akses penuh ke source code website Anda. Kami juga menyediakan dokumentasi teknis untuk memudahkan maintenance.',
  },
  {
    question: 'Bagaimana jika saya butuh fitur tambahan setelah website jadi?',
    answer: 'Kami selalu siap membantu pengembangan website Anda. Fitur tambahan dapat didiskusikan dan dikerjakan dengan penawaran harga terpisah sesuai kompleksitas fitur yang diinginkan.',
  },
]

export function FAQ() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="py-20 lg:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Pertanyaan yang{' '}
            <span className="text-primary">Sering Diajukan</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
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
                  className={`w-5 h-5 text-muted-foreground flex-shrink-0 transition-transform duration-300 ${
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
                <p className="px-5 pb-5 text-muted-foreground">
                  {faq.answer}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-16 p-8 rounded-3xl bg-gradient-to-br from-primary/10 via-card/50 to-primary/5 border border-primary/20 text-center"
        >
          <MessageCircle className="w-12 h-12 text-primary mx-auto mb-4" />
          <h3 className="text-xl font-bold text-foreground mb-2">
            Masih punya pertanyaan?
          </h3>
          <p className="text-muted-foreground mb-6">
            Tim kami siap membantu menjawab semua pertanyaan Anda.
          </p>
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
            Hubungi Kami
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
