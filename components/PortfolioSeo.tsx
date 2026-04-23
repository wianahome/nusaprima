'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, TrendingUp, BarChart3, ArrowUpRight } from 'lucide-react'
import Image from 'next/image'

const projects = [
  {
    title: "Property & Villa Rental Bali",
    category: "Real Estate SEO",
    stats: "+180% Organic Traffic",
    image: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=800&auto=format&fit=crop",
    tags: ["Local SEO", "Technical Audit"]
  },
  {
    title: "E-Commerce Fashion Brand",
    category: "Retail SEO",
    stats: "Top 3 Ranking 50+ Keywords",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&auto=format&fit=crop",
    tags: ["Content Strategy", "Link Building"]
  },
  {
    title: "Construction & Interior Service",
    category: "B2B SEO",
    stats: "2.5x Lead Generation",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tags: ["Conversion Rate", "Authority Building"]
  }
]

export default function PortfolioSeo() {
  return (
    <section className="py-24 bg-slate-950 relative overflow-hidden">
      <div className="container mx-auto px-6">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <h4 className="text-cyan-400 font-black tracking-widest uppercase text-sm mb-4">Portofolio Kami</h4>
            <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight">
              Hasil Nyata dari <br />
              <span className="text-slate-400">Strategi yang Tepat.</span>
            </h2>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-slate-300 text-lg max-w-sm"
          >
            Kami membantu bisnis bertumbuh secara organik melalui optimasi data-driven yang terukur.
          </motion.p>
        </div>

        {/* Grid Portfolio */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group relative bg-slate-900 rounded-[2rem] overflow-hidden border border-white/10 hover:border-cyan-500/50 transition-colors"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60" />
                
                {/* Stats Badge */}
                <div className="absolute top-4 left-4 bg-cyan-500 text-white px-4 py-1.5 rounded-full text-xs font-black shadow-lg">
                  {item.stats}
                </div>
              </div>

              {/* Content Container */}
              <div className="p-8 space-y-4">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-cyan-400 text-xs font-bold uppercase tracking-wider mb-1">{item.category}</p>
                    <h3 className="text-white font-bold text-2xl group-hover:text-cyan-300 transition-colors leading-tight">
                      {item.title}
                    </h3>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-cyan-500 transition-all">
                    <ArrowUpRight className="w-5 h-5 text-white" />
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 pt-2">
                  {item.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="text-[10px] font-bold text-slate-400 border border-slate-700 px-2 py-1 rounded-md uppercase">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA for Portfolio */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >

        </motion.div>

      </div>
    </section>
  )
}