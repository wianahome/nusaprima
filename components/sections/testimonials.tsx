'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    name: 'Ahmad Fauzi',
    role: 'CEO, TokoBaju Fashion',
    content: 'Nusaprima Digital membantu kami membangun platform e-commerce yang sangat memuaskan. Penjualan online kami meningkat 300% dalam 6 bulan pertama!',
    rating: 5,
    initial: 'AF',
  },
  {
    id: 2,
    name: 'Sarah Putri',
    role: 'Founder, HealthCare Plus',
    content: 'Tim yang sangat profesional dan responsif. Mereka benar-benar memahami kebutuhan bisnis kami dan memberikan solusi yang tepat.',
    rating: 5,
    initial: 'SP',
  },
  {
    id: 3,
    name: 'Budi Santoso',
    role: 'Marketing Director, PropertyHub',
    content: 'Website yang dibangun sangat cepat dan SEO-friendly. Kami sekarang mendapat 5x lebih banyak leads dari organic search.',
    rating: 5,
    initial: 'BS',
  },
  {
    id: 4,
    name: 'Linda Kusuma',
    role: 'Owner, RestoPOS',
    content: 'Sistem POS yang mereka buat sangat user-friendly. Training untuk staff kami berjalan lancar dan operasional menjadi lebih efisien.',
    rating: 5,
    initial: 'LK',
  },
  {
    id: 5,
    name: 'Reza Mahendra',
    role: 'CTO, EduLearn',
    content: 'Kualitas code yang mereka hasilkan sangat baik. Scalable dan mudah di-maintain. Highly recommended untuk proyek tech.',
    rating: 5,
    initial: 'RM',
  },
  {
    id: 6,
    name: 'Dewi Anggraini',
    role: 'Manager, TravelGo',
    content: 'Dari konsultasi hingga after-sales support, semuanya excellent. Mereka benar-benar partner bisnis, bukan sekadar vendor.',
    rating: 5,
    initial: 'DA',
  },
]

export function Testimonials() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="testimonials" className="py-20 lg:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Testimoni
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Apa Kata <span className="text-primary">Klien Kami</span>?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Dengarkan cerita sukses dari klien yang telah mempercayakan proyek digital mereka kepada kami.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-6 rounded-2xl bg-card/30 backdrop-blur-sm border border-border/50 hover:border-primary/30 transition-all duration-300"
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              
              <div className="relative mb-6">
                <Quote className="absolute -top-2 -left-2 w-8 h-8 text-primary/20" />
                <p className="text-muted-foreground relative z-10 pl-4">
                  {testimonial.content}
                </p>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center">
                  <span className="text-sm font-bold text-primary">
                    {testimonial.initial}
                  </span>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-8 p-6 rounded-2xl bg-card/30 border border-border/50">
            <div className="text-center">
              <div className="text-3xl font-bold text-foreground">4.9/5</div>
              <div className="text-sm text-muted-foreground">Rating Rata-rata</div>
            </div>
            <div className="w-px h-12 bg-border" />
            <div className="text-center">
              <div className="text-3xl font-bold text-foreground">200+</div>
              <div className="text-sm text-muted-foreground">Review Positif</div>
            </div>
            <div className="w-px h-12 bg-border" />
            <div className="text-center">
              <div className="text-3xl font-bold text-foreground">98%</div>
              <div className="text-sm text-muted-foreground">Kepuasan Klien</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
