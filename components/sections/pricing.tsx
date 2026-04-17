'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Check, Star } from 'lucide-react'
import { Button } from '@/components/ui/button'

const plans = [
  {
    name: 'Starter',
    description: 'Cocok untuk UMKM dan bisnis kecil yang baru memulai.',
    price: 'Rp 3.5',
    unit: 'juta',
    popular: false,
    features: [
      'Website 5 Halaman',
      'Desain Responsif',
      'Domain .com (1 Tahun)',
      'Hosting 1 Tahun',
      'SSL Certificate',
      'Integrasi WhatsApp',
      'Basic SEO Setup',
      'Revisi 2x',
    ],
  },
  {
    name: 'Professional',
    description: 'Pilihan terbaik untuk bisnis yang ingin berkembang.',
    price: 'Rp 7.5',
    unit: 'juta',
    popular: true,
    features: [
      'Website 10 Halaman',
      'Desain Premium & Custom',
      'Domain .com (1 Tahun)',
      'Hosting 1 Tahun',
      'SSL Certificate',
      'Integrasi WhatsApp & Chat',
      'Advanced SEO Setup',
      'Integrasi Social Media',
      'Google Analytics',
      'Revisi 5x',
      'Support 3 Bulan',
    ],
  },
  {
    name: 'Enterprise',
    description: 'Solusi lengkap untuk perusahaan besar dan e-commerce.',
    price: 'Rp 15',
    unit: 'juta',
    popular: false,
    features: [
      'Website Unlimited Halaman',
      'Desain Eksklusif',
      'Domain Premium',
      'Hosting Premium 1 Tahun',
      'SSL Certificate Premium',
      'CMS Admin Panel',
      'E-commerce Ready',
      'Payment Gateway',
      'Full SEO Optimization',
      'API Integration',
      'Revisi Unlimited',
      'Support 12 Bulan',
      'Priority Support 24/7',
    ],
  },
]

export function Pricing() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="pricing" className="py-20 lg:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Paket Harga
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Pilih Paket yang{' '}
            <span className="text-primary">Sesuai Kebutuhan</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Harga transparan tanpa biaya tersembunyi. Konsultasikan kebutuhan Anda
            dan kami akan membantu memilih paket terbaik.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative p-6 lg:p-8 rounded-3xl border transition-all duration-300 ${
                plan.popular
                  ? 'bg-gradient-to-b from-primary/10 to-card/50 border-primary/50 scale-105 shadow-xl shadow-primary/10'
                  : 'bg-card/30 border-border/50 hover:border-primary/30'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1 px-4 py-1.5 rounded-full bg-primary text-primary-foreground text-sm font-medium">
                    <Star className="w-4 h-4 fill-current" />
                    Paling Populer
                  </span>
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-foreground mb-2">{plan.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{plan.description}</p>
                <div className="flex items-end justify-center gap-1">
                  <span className="text-4xl lg:text-5xl font-bold text-foreground">
                    {plan.price}
                  </span>
                  <span className="text-lg text-muted-foreground mb-1">{plan.unit}</span>
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full py-6 ${
                  plan.popular
                    ? 'bg-primary hover:bg-primary/90 text-primary-foreground'
                    : 'bg-secondary hover:bg-secondary/80 text-secondary-foreground'
                }`}
              >
                Pilih {plan.name}
              </Button>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center text-muted-foreground mt-12"
        >
          Butuh solusi custom?{' '}
          <a href="#" className="text-primary hover:underline">
            Hubungi kami
          </a>{' '}
          untuk penawaran khusus.
        </motion.p>
      </div>
    </section>
  )
}
