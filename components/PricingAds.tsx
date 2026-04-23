'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Check, Zap, Rocket, Crown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { reportWaConversion } from '@/lib/google-ads'

const tiers = [
  {
    name: "Starter",
    id: "tier-starter",
    price: "2.5jt",
    description: "Cocok untuk UMKM yang baru mulai mencoba Google Ads.",
    features: [
      "Manajemen Hingga 3 Kampanye",
      "Riset Keyword & Kompetitor",
      "Copywriting Iklan (2 Versi)",
      "Laporan Mingguan",
      "Setup Tracking Dasar"
    ],
    icon: Zap,
    mostPopular: false,
    cta: "Mulai Sekarang",
    color: "from-blue-400 to-cyan-400"
  },
  {
    name: "Scale Up",
    id: "tier-scaleup",
    price: "5.5jt",
    description: "Untuk bisnis yang ingin dominasi pasar dan ROI maksimal.",
    features: [
      "Kampanye Tak Terbatas",
      "Setup GTM & GA4 (E-commerce)",
      "A/B Testing Kreatif Kontinu",
      "Optimasi Landing Page",
      "Support Prioritas (WA)",
      "Dashboard Real-time"
    ],
    icon: Rocket,
    mostPopular: true,
    cta: "Pilih Scale Up",
    color: "from-cyan-400 to-blue-600"
  },
  {
    name: "Enterprise",
    id: "tier-enterprise",
    price: "Custom",
    description: "Solusi lengkap untuk korporasi dengan budget besar.",
    features: [
      "Manajemen Multi-Channel",
      "Strategi Omnichannel",
      "Audit Akun Menyeluruh",
      "Dedicated Account Manager",
      "Sesi Konsultasi Strategis Bulanan"
    ],
    icon: Crown,
    mostPopular: false,
    cta: "Hubungi Kami",
    color: "from-purple-500 to-blue-500"
  }
]

export function PricingAds() {
  const [isAnnual, setIsAnnual] = useState(false)

  return (
    <section className="py-24 bg-background relative overflow-hidden" id="pricing">
      {/* Glow Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[120px] -z-10" />

      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Investasi Terukur untuk <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Pertumbuhan Bisnis Anda</span>
          </motion.h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Pilih paket yang sesuai dengan skala bisnis Anda saat ini. Tidak ada biaya tersembunyi.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className={`relative flex flex-col p-8 rounded-3xl border transition-all duration-300 ${
                tier.mostPopular 
                ? 'bg-slate-900/50 border-cyan-500 shadow-[0_0_30px_-10px_rgba(34,211,238,0.3)]' 
                : 'bg-white/5 border-white/10'
              }`}
            >
              {tier.mostPopular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full text-xs font-bold text-slate-950 uppercase tracking-widest">
                  Paling Laris
                </div>
              )}

              <div className="mb-8">
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${tier.color} flex items-center justify-center mb-6 shadow-lg shadow-cyan-500/20`}>
                  <tier.icon className="w-6 h-6 text-slate-950" />
                </div>
                <h3 className="text-2xl font-bold text-white">{tier.name}</h3>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-white">{tier.price}</span>
                  {tier.price !== "Custom" && <span className="text-gray-400 text-sm">/bulan</span>}
                </div>
                <p className="mt-4 text-gray-400 text-sm leading-relaxed">
                  {tier.description}
                </p>
              </div>

              <ul className="space-y-4 mb-8 flex-1">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm text-gray-300">
                    <div className="mt-1 bg-cyan-500/20 rounded-full p-0.5">
                      <Check className="w-3.5 h-3.5 text-cyan-400" />
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>

              <Button
                onClick={() => {
                   reportWaConversion();
                   window.open(`https://wa.me/628135979589?text=Halo%20Nusa%20Prima%20Digital,%20saya%20tertarik%20dengan%20paket%20${tier.name}`, '_blank');
                }}
                className={`w-full py-6 rounded-2xl font-bold transition-all duration-300 ${
                  tier.mostPopular
                  ? 'bg-cyan-500 text-slate-950 hover:bg-cyan-400 hover:scale-[1.02]'
                  : 'bg-white/10 text-white hover:bg-white/20 border border-white/10'
                }`}
              >
                {tier.cta}
              </Button>
            </motion.div>
          ))}
        </div>

        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center mt-12 text-gray-500 text-sm"
        >
          *Biaya di atas adalah fee manajemen iklan, tidak termasuk saldo iklan Google.
        </motion.p>
      </div>
    </section>
  )
}