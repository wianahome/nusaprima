'use client'

import React from 'react'
import { MessageCircle } from 'lucide-react'
import { motion } from 'framer-motion'

export const FloatingWA = () => {
  const phoneNumber = "628135979589" // Ganti dengan nomor Anda
  const message = "Halo Nusa Prima Digital, saya ingin bertanya tentang layanan website."
  const waLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

  return (
    <motion.a
      href={waLink}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      // Sedikit efek membesar saat hover agar glow-nya lebih terasa
      whileHover={{ scale: 1.05, y: -5 }} 
      whileTap={{ scale: 0.95 }}
      // fixed bottom-6 right-6 z-[999] agar melayang di pojok kanan bawah
      className="fixed bottom-6 right-6 z-[999] flex items-center group cursor-pointer"
    >
      
      {/* --- INI BAGIAN UTAMA UNTUK EFEK NEON GLOW GRAIDENT --- 
        1. bg-black: Background tombol hitam pekat sesuai request.
        2. border border-white/10: Border tipis biar tombolnya kelihatan di background gelap.
        3. relative: Wajib agar pseudo-element (:before/:after) bisa diposisikan.
      */}
      <div className="relative flex items-center bg-black text-white rounded-full p-1.5 pr-1.5 border border-white/10 transition-all duration-300">
        
        {/* Pseudo-element :before untuk membuat efek glow.
          1. inset-0: Ukurannya sama dengan tombol utama.
          2. -z-10: Posisinya di belakang tombol hitam.
          3. bg-gradient-to-r from-cyan-500 to-yellow-500: Gradient warna shadow.
          4. blur-lg: Ini yang membuatnya menjadi shadow lembut/glow.
          5. opacity-60: Efek glow saat normal (tidak di-hover).
          6. group-hover:opacity-100 group-hover:blur-xl: Glow menjadi lebih terang dan luas saat di-hover.
        */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-cyan-500 via-cyan-400 to-yellow-600 rounded-full blur-lg opacity-70 group-hover:opacity-100 group-hover:blur-xl transition-all duration-500" />

        {/* Label Tulisan */}
        <span className="pl-5 pr-3 text-sm font-bold tracking-wide uppercase group-hover:text-cyan-200 transition-colors">
          WhatsApp Us
        </span>

        {/* Lingkaran Ikon. 
          Saya ganti warnanya menjadi hitam dengan background gradient agar serasi dengan shadow.
        */}
        <div className="flex items-center justify-center w-11 h-11 bg-gradient-to-br from-cyan-500 to-yellow-500 text-black rounded-full">
          <MessageCircle size={24} fill="currentColor" />
        </div>
        
      </div>

    </motion.a>
  )
}