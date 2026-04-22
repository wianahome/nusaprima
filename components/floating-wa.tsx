'use client'

import React from 'react'
import { MessageCircle } from 'lucide-react'
import { motion } from 'framer-motion'
// 1. Import fungsi tracking dari file yang sudah Anda buat
import { reportWaConversion } from '@/lib/google-ads' 

export const FloatingWA = () => {
  const phoneNumber = "628135979589"
  const message = "Halo Nusa Prima Digital, saya ingin bertanya tentang layanan website."
  const waLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

  return (
    <motion.a
      href={waLink}
      target="_blank"
      rel="noopener noreferrer"
      // 2. Langsung panggil fungsi import di sini
      onClick={() => reportWaConversion()} 
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      whileHover={{ scale: 1.05, y: -5 }} 
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-[999] flex items-center group cursor-pointer"
    >
      <div className="relative flex items-center bg-black text-white rounded-full p-1.5 pr-1.5 border border-white/10 transition-all duration-300">
        
        {/* Glow Effect */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-cyan-500 via-cyan-400 to-yellow-600 rounded-full blur-lg opacity-70 group-hover:opacity-100 group-hover:blur-xl transition-all duration-500" />

        {/* Label */}
        <span className="pl-5 pr-3 text-sm font-bold tracking-wide uppercase group-hover:text-cyan-200 transition-colors">
          WhatsApp Us
        </span>

        {/* Icon */}
        <div className="flex items-center justify-center w-11 h-11 bg-gradient-to-br from-cyan-500 to-yellow-500 text-black rounded-full">
          <MessageCircle size={24} fill="currentColor" />
        </div>
        
      </div>
    </motion.a>
  )
}