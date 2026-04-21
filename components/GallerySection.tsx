'use client'

import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Luxury Villa Branding",
    category: "Digital Marketing",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2670&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Crypto Dashboard",
    category: "UI/UX Design",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=2832&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "Corporate Identity",
    category: "Branding",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=2310&auto=format&fit=crop",
  },
  {
    id: 5,
    title: "SaaS Landing Page",
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 6,
    title: "Mobile App Design",
    category: "App Development",
    image: "https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?q=80&w=2680&auto=format&fit=crop",
  }
];

const GallerySection = () => {
  return (
    <section className="bg-[#050505] py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Galeri */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-cyan-400 font-semibold tracking-widest uppercase mb-4 text-sm">
              Portfolio
            </h2>
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Karya Terpilih <span className="text-gray-500">Kami</span>
            </h1>
          </div>
          <button className="text-white border-b border-[#00D1B2] pb-1 hover:text-[#00D1B2] transition-colors text-sm font-medium">
            Lihat Semua Project
          </button>
        </div>

        {/* Grid Galeri */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: project.id * 0.1 }}
              viewport={{ once: true }}
              className="group relative cursor-pointer overflow-hidden rounded-2xl bg-zinc-900"
            >
              {/* Overlay Gradasi */}
              <div className="absolute inset-0 z-10 bg-gradient-to-t from-black via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
              
              {/* Gambar Project */}
              <motion.img
                src={project.image}
                alt={project.title}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
                className="w-full aspect-[4/5] object-cover"
              />

              {/* Konten Text (Muncul saat Hover atau Statis di Bawah) */}
              <div className="absolute bottom-0 left-0 z-20 p-8 w-full transform transition-transform duration-300">
                <p className="text-[#00D1B2] text-xs font-bold uppercase tracking-widest mb-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  {project.category}
                </p>
                <h3 className="text-white text-2xl font-bold">
                  {project.title}
                </h3>
                
                {/* Garis Dekoratif yang melebar saat hover */}
                <div className="w-0 group-hover:w-full h-[2px] bg-[#00D1B2] mt-4 transition-all duration-500" />
              </div>

              {/* Icon / Plus Button (Opsional) */}
              <div className="absolute top-6 right-6 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-white/10 backdrop-blur-md p-3 rounded-full border border-white/20">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="7" y1="17" x2="17" y2="7"></line>
                    <polyline points="7 7 17 7 17 17"></polyline>
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default GallerySection;