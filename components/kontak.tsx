"use client";

import React from "react";
import { motion } from "framer-motion";
import { Send, Phone, Mail, MapPin } from "lucide-react";

export default function ContactSection() {
  return (
    <section className="relative py-24 overflow-hidden bg-background">
      {/* Efek Cahaya Latar (Glow) */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-500/10 blur-[120px] -z-10" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-500/5 blur-[120px] -z-10" />

      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1.5 rounded-full bg-cyan-400/10 text-cyan-400 text-sm font-medium mb-4"
          >
            Hubungi Kami
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold text-foreground mb-6"
          >
            Siap Melejitkan <span className="text-cyan-400">Bisnis Anda?</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-muted-foreground"
          >
            Konsultasikan kebutuhan digital Anda dan dapatkan solusi teknologi terbaik yang terjangkau.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Info Kontak */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <div className="flex items-start gap-5">
            </div>

            <div className="flex items-start gap-5">
              <div className="w-12 h-12 rounded-xl bg-cyan-400/10 flex items-center justify-center shrink-0 border border-cyan-400/20">
                <Phone className="w-6 h-6 text-cyan-400" />
              </div>
              <div>
                <h4 className="text-xl font-semibold text-foreground mb-1">WhatsApp</h4>
                <p className="text-gray-200">+62 813-597-9589</p>
              </div>
            </div>

            <div className="flex items-start gap-5">
              <div className="w-12 h-12 rounded-xl bg-cyan-400/10 flex items-center justify-center shrink-0 border border-cyan-400/20">
                <MapPin className="w-6 h-6 text-cyan-400" />
              </div>
              <div>
                <h4 className="text-xl font-semibold text-gray-200 mb-1">Lokasi</h4>
                <p className="text-gray-200">Jl. Pura Tegal Gading No. 5A Kuta Selatan, Bali, Indonesia</p>
              </div>
            </div>
          </motion.div>

          {/* Form Kontak */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="p-8 rounded-2xl bg-card/30 backdrop-blur-sm border border-border/50 shadow-2xl"
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-100">Nama Lengkap</label>
                  <input 
                    type="text" 
                    className="w-full bg-background/50 border border-border focus:border-cyan-400/50 outline-none rounded-lg p-3 transition-all text-foreground"
                    placeholder="Masukkan nama Anda"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-100">Email</label>
                  <input 
                    type="email" 
                    className="w-full bg-background/50 border border-border focus:border-cyan-400/50 outline-none rounded-lg p-3 transition-all text-foreground"
                    placeholder="email@anda.com"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground/80">Pesan</label>
                <textarea 
                  rows={4}
                  className="w-full bg-background/50 border border-border focus:border-cyan-400/50 outline-none rounded-lg p-3 transition-all text-foreground resize-none"
                  placeholder="Ceritakan kebutuhan proyek Anda..."
                />
              </div>

              <button 
                type="submit"
                className="w-full py-4 rounded-xl bg-background border border-amber-500/50 text-amber-500 font-bold hover:bg-amber-500 hover:text-background transition-all duration-300 shadow-[0_0_20px_rgba(245,158,11,0.1)] flex items-center justify-center gap-2"
              >
                Kirim Pesan <Send className="w-4 h-4" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}