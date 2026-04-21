'use client'

import React from 'react';
import { Monitor, Zap, ShieldCheck, Users } from 'lucide-react';
import { motion } from 'framer-motion';

const AboutSection = () => {
  const features = [
    {
      icon: <Monitor className="w-6 h-6 text-cyan-400" />,
      title: "Desain Responsif",
      desc: "Memastikan website Anda tampil sempurna di semua perangkat, dari smartphone hingga desktop."
    },
    {
      icon: <Zap className="w-6 h-6 text-cyan-400" />,
      title: "Performa Cepat",
      desc: "Optimasi kecepatan loading untuk pengalaman pengguna yang mulus dan SEO yang lebih baik."
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-cyan-400" />,
      title: "Kualitas Premium",
      desc: "Standar desain tinggi dengan estetika modern yang meningkatkan kredibilitas bisnis Anda."
    },
    {
      icon: <Users className="w-6 h-6 text-cyan-400" />,
      title: "Fokus pada Klien",
      desc: "Solusi digital yang disesuaikan khusus untuk mencapai target dan kebutuhan bisnis Anda."
    }
  ];

  return (
    <section className="bg-[#050505] text-white py-20 px-6 mt-10 md:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Bagian Kiri: Teks */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-cyan-400 font-semibold tracking-widest uppercase mb-4 text-sm">
              Tentang Kami
            </h2>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Membangun Identitas <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
                Digital Masa Depan
              </span>
            </h1>
            <p className="text-gray-200 text-lg leading-relaxed mb-8">
              Nusaprima Digital adalah digital agency yang berdedikasi untuk mentransformasi bisnis melalui teknologi web mutakhir. Kami percaya bahwa setiap brand layak memiliki kehadiran digital yang tidak hanya berfungsi dengan baik, tetapi juga memukau secara visual.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((item, idx) => (
                <div key={idx} className="flex flex-col gap-3 p-4 rounded-xl border border-white/5 bg-white/5 hover:bg-white/10 transition-colors">
                  <div className="bg-cyan-400/10 w-fit p-3 rounded-lg">
                    {item.icon}
                  </div>
                  <h3 className="font-bold text-lg">{item.title}</h3>
                  <p className="text-sm text-gray-200">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Bagian Kanan: Visual/Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Dekorasi Glow di Belakang */}
            <div className="absolute -top-20 -right-20 w-80 h-80 bg-cyan-400 opacity-10 blur-[120px] rounded-full"></div>
            
            <div className="relative z-10 rounded-2xl border border-white/10 overflow-hidden bg-[#0A0A0A] p-2">
              <div className="aspect-square md:aspect-video bg-gradient-to-br from-gray-900 to-black rounded-xl flex items-center justify-center border border-white/5">
                {/* Anda bisa mengganti ini dengan gambar tim atau mockup kantor */}
                <div className="text-center">
                  <p className="text-cyan-400 font-mono text-xs mb-2">{"< Innovation />"}</p>
                  <p className="text-3xl font-bold tracking-tighter italic">Nusaprima Digital</p>
                </div>
              </div>
            </div>

            {/* Floating Card Stat */}
            <div className="absolute -bottom-6 -left-6 bg-cyan-400 p-6 rounded-2xl shadow-2xl">
              <p className="text-black text-3xl font-bold">100%</p>
              <p className="text-black/80 text-xs font-semibold uppercase">Client Satisfaction</p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;