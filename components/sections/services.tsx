'use client'

import { motion } from 'framer-motion'
import { 
  Globe, 
  ShoppingCart, 
  Layout, 
  Smartphone, 
  Code, 
  Search 
} from 'lucide-react'

const services = [
  {
    title: 'Website Company Profile',
    description: 'Membangun citra profesional bisnis Anda dengan website yang cepat, responsif, dan elegan.',
    icon: Globe,
    color: 'from-cyan-500 to-blue-500',
  },
  {
    title: 'E-Commerce Development',
    description: 'Solusi toko online lengkap dengan integrasi pembayaran dan manajemen produk yang mudah.',
    icon: ShoppingCart,
    color: 'from-emerald-500 to-teal-500',
  },
  {
    title: 'Web Application',
    description: 'Sistem berbasis web kustom untuk mengotomatisasi proses bisnis internal Anda secara efisien.',
    icon: Code,
    color: 'from-blue-500 to-indigo-500',
  },
  {
    title: 'UI/UX Design',
    description: 'Desain antarmuka pengguna yang modern dan intuitif untuk meningkatkan pengalaman pengguna.',
    icon: Layout,
    color: 'from-purple-500 to-pink-500',
  },
  {
    title: 'Mobile App Development',
    description: 'Aplikasi mobile Android dan iOS yang performan untuk menjangkau pengguna lebih luas.',
    icon: Smartphone,
    color: 'from-amber-500 to-orange-500',
  },
  {
    title: 'Digital Marketing & SEO',
    description: 'Strategi pemasaran digital dan optimasi SEO untuk meningkatkan visibilitas bisnis Anda.',
    icon: Search,
    color: 'from-teal-500 to-cyan-500',
  },
]

export function Services() {
  return (
    <section id="services" className="py-24 bg-background relative overflow-hidden">
      {/* Background Decorative Gradients */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-400/5 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16 lg:mb-24">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 mb-4 text-sm font-semibold tracking-wider text-cyan-400 uppercase bg-cyan-400/10 rounded-full border border-cyan-400/20"
          >
            Layanan Kami
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-6"
          >
            Solusi Digital <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-400-light">Masa Depan</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="max-w-2xl mx-auto text-lg text-gray-100"
          >
            Kami membantu transformasi digital bisnis Anda melalui teknologi mutakhir dan desain yang berorientasi pada hasil.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              {/* NEON GLOW EFFECT (Hidden by default, visible on hover) */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl blur opacity-0 group-hover:opacity-40 transition duration-500" />
              
              <div className="relative h-full p-8 rounded-2xl bg-secondary/30 border border-border/50 backdrop-blur-sm flex flex-col items-start transition-all duration-300 group-hover:border-cyan-400/50">
                <div className={`p-3 rounded-xl bg-gradient-to-br ${service.color} bg-opacity-10 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-cyan-400 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-gray-300 leading-relaxed">
                  {service.description}
                </p>

                <div className="mt-auto pt-6 flex items-center text-sm font-bold text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Pelajari Lebih Lanjut
                  <svg
                    className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}