'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, 
  MapPin, 
  Calendar, 
  Users, 
  Star, 
  Compass, 
  ShieldCheck, 
  CreditCard, 
  ExternalLink, 
  X, 
  ChevronRight,
  Sparkles,
  CheckCircle2
} from 'lucide-react';

// Data Paket Travel
const tourPackages = [
  {
    id: 1,
    title: 'Nusa Penida Island & Snorkeling Tour',
    location: 'Bali, Indonesia',
    rating: 4.9,
    reviews: 128,
    price: 'Rp 750.000',
    duration: '1 Hari',
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=800&auto=format&fit=crop',
    tag: 'Best Seller',
    description: 'Jelajahi keindahan Kelingking Beach, Broken Beach, dan nikmati pengalaman snorkeling bersama Manta Ray.'
  },
  {
    id: 2,
    title: 'Raja Ampat Paradise & Marine Exploration',
    location: 'Papua Barat, Indonesia',
    rating: 5.0,
    reviews: 94,
    price: 'Rp 8.500.000',
    duration: '4 Hari 3 Malam',
    image: 'https://images.unsplash.com/photo-1516690561799-46d8f74f9abf?q=80&w=800&auto=format&fit=crop',
    tag: 'Premium Tour',
    description: 'Petualangan surga bawah laut dunia di Pianemo, Wayag, dan gugusan pulau karang eksotis.'
  },
  {
    id: 3,
    title: 'Komodo Dragon Trekking & Padar Island',
    location: 'Labuan Bajo, NTT',
    rating: 4.8,
    reviews: 156,
    price: 'Rp 3.200.000',
    duration: '3 Hari 2 Malam',
    image: 'https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?q=80&w=800&auto=format&fit=crop',
    tag: 'Trending',
    description: 'Sailing liveaboard dengan phinisi mewah, bertemu Komodo, dan menikmati sunset di Puncak Pulau Padar.'
  },
  {
    id: 4,
    title: 'Bromo Sunrise & Ijen Crater Blue Fire',
    location: 'Jawa Timur, Indonesia',
    rating: 4.9,
    reviews: 210,
    price: 'Rp 1.450.000',
    duration: '2 Hari 1 Malam',
    image: 'https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?q=80&w=800&auto=format&fit=crop',
    tag: 'Adventure',
    description: 'Saksikan sunrise menakjubkan di Gunung Bromo dan fenomena langka Api Biru (Blue Fire) Kawah Ijen.'
  },
];

export default function TravelGoPage() {
  const [selectedLocation, setSelectedLocation] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [guests, setGuests] = useState('2 Orang');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activePackage, setActivePackage] = useState<typeof tourPackages[0] | null>(null);

  return (
    <div className="min-h-screen bg-[#060D0D] text-emerald-50 font-sans selection:bg-emerald-400 selection:text-black">
      
      {/* GLOW BACKGROUND EFFECT */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-emerald-500/10 blur-[160px] rounded-full pointer-events-none" />

      {/* 1. HERO SECTION */}
      <section className="relative pt-12 pb-20 px-4 sm:px-8 max-w-7xl mx-auto">
        <div className="relative rounded-3xl overflow-hidden border border-emerald-900/30 bg-gradient-to-b from-[#0A1A18] to-[#081312] p-8 sm:p-14 shadow-2xl">
          {/* Background Image Overlay */}
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-25 mix-blend-overlay"
            style={{ backgroundImage: `url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1600&auto=format&fit=crop')` }}
          />

          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 bg-emerald-950/80 border border-emerald-500/30 text-emerald-300 text-xs font-semibold px-4 py-1.5 rounded-full mb-6"
            >
              <Sparkles size={14} className="text-emerald-400" />
              <span>Treckif Tour & Vacation Booking</span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight mb-6"
            >
              Jelajahi Keindahan Alam & Liburan Impianmu
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-slate-300 text-sm sm:text-base leading-relaxed mb-10 max-w-2xl mx-auto"
            >
              Sistem booking tour terlengkap dengan konfirmasi instan, pilihan trip privat/open trip, dan sistem pembayaran terintegrasi otomatis.
            </motion.p>

            {/* BAR PENCARIAN / SEARCH FORM */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="bg-[#0D2220]/90 backdrop-blur-md border border-emerald-700/40 p-3 sm:p-4 rounded-2xl shadow-2xl grid grid-cols-1 sm:grid-cols-4 gap-3 text-left"
            >
              {/* Field 1: Destinasi */}
              <div className="flex items-center gap-3 bg-[#081514] p-3 rounded-xl border border-emerald-900/50">
                <MapPin className="text-emerald-400 shrink-0" size={18} />
                <div className="w-full">
                  <p className="text-[10px] text-emerald-400/80 uppercase font-bold">Destinasi</p>
                  <input 
                    type="text" 
                    placeholder="Mau ke mana?" 
                    value={selectedLocation}
                    onChange={(e) => setSelectedLocation(e.target.value)}
                    className="bg-transparent text-xs text-white placeholder-slate-500 focus:outline-none w-full font-medium"
                  />
                </div>
              </div>

              {/* Field 2: Tanggal */}
              <div className="flex items-center gap-3 bg-[#081514] p-3 rounded-xl border border-emerald-900/50">
                <Calendar className="text-emerald-400 shrink-0" size={18} />
                <div className="w-full">
                  <p className="text-[10px] text-emerald-400/80 uppercase font-bold">Tanggal Trip</p>
                  <input 
                    type="date" 
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="bg-transparent text-xs text-white focus:outline-none w-full font-medium [color-scheme:dark]"
                  />
                </div>
              </div>

              {/* Field 3: Tamu */}
              <div className="flex items-center gap-3 bg-[#081514] p-3 rounded-xl border border-emerald-900/50">
                <Users className="text-emerald-400 shrink-0" size={18} />
                <div className="w-full">
                  <p className="text-[10px] text-emerald-400/80 uppercase font-bold">Jumlah Peserta</p>
                  <select 
                    value={guests} 
                    onChange={(e) => setGuests(e.target.value)}
                    className="bg-transparent text-xs text-white focus:outline-none w-full font-medium cursor-pointer"
                  >
                    <option value="1 Orang" className="bg-[#081514]">1 Orang</option>
                    <option value="2 Orang" className="bg-[#081514]">2 Orang</option>
                    <option value="3-5 Orang" className="bg-[#081514]">3-5 Orang</option>
                    <option value="Grup (>5 Orang)" className="bg-[#081514]">Grup (&gt;5 Orang)</option>
                  </select>
                </div>
              </div>

              {/* Field 4: Tombol Cari */}
              <button className="bg-emerald-400 hover:bg-emerald-300 text-slate-950 font-extrabold rounded-xl p-3 flex items-center justify-center gap-2 transition-all shadow-lg shadow-emerald-500/20 text-xs uppercase tracking-wider">
                <Search size={16} /> Cari Trip
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. PAKET TOUR POPULER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 pb-20">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
          <div>
            <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold uppercase tracking-widest mb-1">
              <Compass size={14} /> Popular Destinations
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Paket Liburan Pilihan Terbaik</h2>
          </div>
          <button 
            onClick={() => setIsModalOpen(true)}
            className="text-xs text-emerald-400 hover:text-emerald-300 font-semibold flex items-center gap-1 group"
          >
            Lihat Portofolio Web <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Grid Cards Tour */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tourPackages.map((pkg) => (
            <motion.div
              key={pkg.id}
              whileHover={{ y: -6 }}
              className="bg-[#0A1816] rounded-2xl overflow-hidden border border-emerald-900/30 hover:border-emerald-500/40 transition-all duration-300 flex flex-col justify-between group shadow-xl"
            >
              <div>
                {/* Gambar Thumbnail */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img 
                    src={pkg.image} 
                    alt={pkg.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A1816] via-transparent to-transparent opacity-80" />
                  
                  <span className="absolute top-3 left-3 bg-emerald-950/90 border border-emerald-500/40 text-emerald-300 text-[10px] font-bold px-2.5 py-1 rounded-md backdrop-blur-md">
                    {pkg.tag}
                  </span>

                  <div className="absolute bottom-3 left-3 flex items-center gap-1 bg-black/60 backdrop-blur-md px-2 py-0.5 rounded-lg text-[10px] text-amber-300 font-bold">
                    <Star size={12} className="fill-amber-400 text-amber-400" />
                    <span>{pkg.rating}</span>
                    <span className="text-slate-400">({pkg.reviews})</span>
                  </div>
                </div>

                {/* Info Paket */}
                <div className="p-5">
                  <div className="flex items-center gap-1 text-[11px] text-emerald-400 font-medium mb-1">
                    <MapPin size={12} /> {pkg.location}
                  </div>
                  <h3 className="font-bold text-white text-base leading-snug mb-2 group-hover:text-emerald-300 transition-colors">
                    {pkg.title}
                  </h3>
                  <p className="text-slate-400 text-xs line-clamp-2 leading-relaxed mb-4">
                    {pkg.description}
                  </p>
                </div>
              </div>

              {/* Footer Card */}
              <div className="p-5 pt-0 border-t border-emerald-950/80 flex items-center justify-between">
                <div>
                  <span className="block text-[10px] text-slate-500 font-medium">Mulai Dari</span>
                  <span className="text-sm font-black text-emerald-400">{pkg.price}</span>
                </div>
                <button 
                  onClick={() => {
                    setActivePackage(pkg);
                    setIsModalOpen(true);
                  }}
                  className="bg-emerald-900/60 hover:bg-emerald-400 hover:text-slate-950 text-emerald-300 font-bold px-3.5 py-2 rounded-xl text-xs transition-all border border-emerald-700/30"
                >
                  Detail
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. FEATURES / KEUNGGULAN PLATFORM */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 pb-24">
        <div className="bg-gradient-to-r from-[#0C201D] via-[#091816] to-[#0A1D1A] rounded-3xl p-8 sm:p-12 border border-emerald-800/30 grid grid-cols-1 md:grid-cols-3 gap-8 shadow-2xl">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
              <ShieldCheck size={24} />
            </div>
            <div>
              <h4 className="font-bold text-white text-base mb-1">Terpercaya & Berizin</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Setiap agen lokal dan driver telah terverifikasi resmi untuk menjamin keamanan & kenyamanan trip kamu.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
              <CreditCard size={24} />
            </div>
            <div>
              <h4 className="font-bold text-white text-base mb-1">Payment Gateway Midtrans</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Pembayaran otomatis via QRIS, Bank Transfer, E-Wallet, hingga Kartu Kredit dengan konfirmasi instan.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
              <CheckCircle2 size={24} />
            </div>
            <div>
              <h4 className="font-bold text-white text-base mb-1">Garansi Harga Terbaik</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Tanpa biaya tersembunyi. Seluruh harga paket sudah termasuk dokumentasi, tiket masuk, dan pemandu lokal.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. MODAL PREVIEW PORTOFOLIO (SESUAI GAMBAR GAMBAR 2) */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-3xl bg-[#080F0E] rounded-3xl border border-emerald-900/60 overflow-hidden shadow-2xl text-white"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Tombol Close Modal */}
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 z-20 p-2 bg-black/60 hover:bg-black text-slate-300 hover:text-white rounded-full transition-colors border border-emerald-900/40"
              >
                <X size={18} />
              </button>

              {/* Banner Showcase Gambar Atas */}
              <div className="relative aspect-[16/9] bg-[#051110] overflow-hidden flex items-center justify-center p-6">
                <img 
                  src={activePackage ? activePackage.image : 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop'} 
                  alt="Showcase" 
                  className="w-full h-full object-cover rounded-2xl opacity-80" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#080F0E] via-transparent to-transparent opacity-90" />
                
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="bg-emerald-400 text-slate-950 text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-md mb-2 inline-block">
                    {activePackage ? activePackage.location : 'Travel & Vacation'}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    {activePackage ? activePackage.title : 'TravelGo Booking Engine'}
                  </h3>
                </div>
              </div>

              {/* Content Modal Bawah */}
              <div className="p-6 sm:p-8">
                {/* Tech Stack Badges */}
                <div className="flex flex-wrap items-center gap-2 mb-4">
                  <span className="bg-emerald-950/80 text-emerald-400 border border-emerald-800/40 text-xs px-3 py-1 rounded-full font-semibold">
                    Travel
                  </span>
                  <span className="bg-slate-900 text-slate-300 border border-slate-800 text-xs px-3 py-1 rounded-full font-medium">
                    Vue.js
                  </span>
                  <span className="bg-slate-900 text-slate-300 border border-slate-800 text-xs px-3 py-1 rounded-full font-medium">
                    Laravel
                  </span>
                  <span className="bg-slate-900 text-slate-300 border border-slate-800 text-xs px-3 py-1 rounded-full font-medium">
                    Midtrans
                  </span>
                </div>

                <h2 className="text-2xl font-bold text-white mb-2">TravelGo</h2>
                <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                  Website booking tour dan travel dengan integrasi payment gateway Midtrans, sistem penjadwalan otomatis, dan manajemen invoice PDF.
                </p>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row items-center gap-3">
                  <a
                    href="#live-demo"
                    onClick={(e) => { e.preventDefault(); alert('Membuka Live Demo TravelGo...'); }}
                    className="w-full sm:flex-1 bg-[#00E5FF] hover:bg-[#00cce6] text-slate-950 font-bold py-3 px-4 rounded-xl flex items-center justify-center gap-2 transition-colors text-sm shadow-lg shadow-cyan-500/20"
                  >
                    Lihat Live Demo <ExternalLink size={16} />
                  </a>
                  <a
                    href="#case-study"
                    onClick={(e) => { e.preventDefault(); alert('Membuka Case Study...'); }}
                    className="w-full sm:w-auto bg-[#111827] hover:bg-slate-800 text-white font-semibold py-3 px-6 rounded-xl border border-slate-800 transition-colors text-sm text-center"
                  >
                    Case Study
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}