'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Target, Users, Lightbulb, Rocket, Shield, HeartHandshake } from 'lucide-react'
import Image from 'next/image'

const features = [
  {
    icon: Target,
    title: 'Fokus pada Hasil',
    description: 'Setiap proyek dirancang untuk mencapai tujuan bisnis Anda dengan strategi yang terukur.',
  },
  {
    icon: Users,
    title: 'Tim Profesional',
    description: 'Developer dan designer berpengalaman yang memahami kebutuhan pasar Indonesia.',
  },
  {
    icon: Lightbulb,
    title: 'Inovasi Berkelanjutan',
    description: 'Selalu mengikuti tren teknologi terbaru untuk solusi yang future-proof.',
  },
  {
    icon: Rocket,
    title: 'Pengerjaan Cepat',
    description: 'Proses development yang efisien dengan timeline yang jelas dan transparan.',
  },
  {
    icon: Shield,
    title: 'Keamanan Terjamin',
    description: 'Implementasi standar keamanan terbaik untuk melindungi data dan aset digital Anda.',
  },
  {
    icon: HeartHandshake,
    title: 'Dukungan Penuh',
    description: 'Layanan after-sales dan maintenance untuk memastikan website Anda selalu optimal.',
  },
]

export function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" className="py-20 lg:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Tentang Kami
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Mengapa Memilih{' '}
            <span className="text-primary">Nusaprima Digital</span>?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Kami adalah partner digital yang berkomitmen untuk membantu bisnis Indonesia
            berkembang melalui solusi teknologi yang inovatif dan terjangkau.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-6 lg:p-8 rounded-2xl bg-card/30 backdrop-blur-sm border border-border/50 hover:border-primary/30 hover:bg-card/50 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 p-8 lg:p-12 rounded-3xl bg-gradient-to-br from-primary/10 via-card/50 to-primary/5 border border-primary/20"
        >
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
                5+ Tahun Pengalaman dalam Industri Digital
              </h3>
              <p className="text-muted-foreground mb-6 text-pretty">
                Sejak 2019, kami telah membantu ratusan bisnis dari berbagai industri
                untuk membangun presence digital yang kuat. Dari UMKM hingga enterprise,
                kami memiliki solusi yang tepat untuk setiap kebutuhan.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: '500+', label: 'Proyek Selesai' },
                  { value: '200+', label: 'Klien Puas' },
                  { value: '15+', label: 'Tim Expert' },
                  { value: '24/7', label: 'Support' },
                ].map((stat) => (
                  <div key={stat.label} className="text-center p-4 rounded-xl bg-background/50">
                    <div className="text-2xl font-bold text-primary">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-video rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/20 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(20,184,166,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(20,184,166,0.1)_1px,transparent_1px)] bg-[size:20px_20px]" />
                <div className="relative z-10 text-center">
                  <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                    <Rocket className="w-10 h-10 text-primary" />
                  </div>
                  <p className="text-foreground font-medium">Inovasi Tanpa Batas</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
