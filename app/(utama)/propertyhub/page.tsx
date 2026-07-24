'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Building2, 
  Search, 
  MapPin, 
  Bed, 
  Bath, 
  Maximize, 
  Filter, 
  SlidersHorizontal,
  Map,
  Grid,
  Heart,
  Share2,
  Phone,
  MessageSquare,
  X,
  ChevronRight,
  Star,
  CheckCircle2
} from 'lucide-react'
import Image from 'next/image'

// Data Dummy Properti
const properties = [
  {
    id: 1,
    title: 'Modern Luxury Villa Canggu',
    location: 'Canggu, Badung, Bali',
    type: 'Vila',
    price: 'Rp 8.500.000.000',
    period: 'Freehold / SHM',
    beds: 4,
    baths: 4,
    area: '450 m²',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=1200&auto=format&fit=crop',
    featured: true,
    tags: ['Private Pool', 'Ricefield View', 'Fully Furnished'],
  },
  {
    id: 2,
    title: 'Cliffside Ocean View Resort',
    location: 'Uluwatu, South Kuta, Bali',
    type: 'Vila',
    price: 'Rp 18.200.000.000',
    period: 'Freehold / SHM',
    beds: 5,
    baths: 6,
    area: '800 m²',
    rating: 5.0,
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1200&auto=format&fit=crop',
    featured: true,
    tags: ['Ocean Front', 'Sunset View', 'Helipad'],
  },
  {
    id: 3,
    title: 'Minimalist Tropical House',
    location: 'Sanur, Denpasar, Bali',
    type: 'Rumah',
    price: 'Rp 4.200.000.000',
    period: 'Freehold / SHM',
    beds: 3,
    baths: 2,
    area: '250 m²',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1200&auto=format&fit=crop',
    featured: false,
    tags: ['Quiet Area', 'Near Beach', 'Garden'],
  },
  {
    id: 4,
    title: 'Ubud Jungle Sanctuary Residence',
    location: 'Ubud, Gianyar, Bali',
    type: 'Vila',
    price: 'Rp 6.900.000.000',
    period: 'Leasehold 30 Yrs',
    beds: 3,
    baths: 3,
    area: '380 m²',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop',
    featured: false,
    tags: ['Jungle View', 'Infinity Pool', 'Eco Design'],
  },
  {
    id: 5,
    title: 'Prime Cliffside Land Plot',
    location: 'Ungasan, Badung, Bali',
    type: 'Tanah',
    price: 'Rp 1.200.000.000 / Are',
    period: 'Freehold / SHM',
    beds: 0,
    baths: 0,
    area: '1.500 m²',
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1200&auto=format&fit=crop',
    featured: false,
    tags: ['Yellow Zone', 'Road Access', 'Ocean View'],
  },
  {
    id: 6,
    title: 'Seminyak Commercial Penthouse',
    location: 'Seminyak, Badung, Bali',
    type: 'Apartemen',
    price: 'Rp 5.500.000.000',
    period: 'Leasehold 25 Yrs',
    beds: 2,
    baths: 2,
    area: '180 m²',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1567496898669-ee935f5f647a?q=80&w=1200&auto=format&fit=crop',
    featured: false,
    tags: ['Rooftop Bar', 'High ROI', 'Strategic'],
  },
]

export default function PropertyHubPage() {
  const [selectedType, setSelectedType] = useState('Semua')
  const [viewMode, setViewMode] = useState<'grid' | 'map'>('grid')
  const [favorites, setFavorites] = useState<number[]>([])
  const [selectedProperty, setSelectedProperty] = useState<typeof properties[0] | null>(null)

  const toggleFavorite = (id: number, e: React.MouseEvent) => {
    e.stopPropagation()
    setFavorites(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    )
  }

  const filteredProperties = selectedType === 'Semua' 
    ? properties 
    : properties.filter(p => p.type === selectedType)

  return (
    <div className="min-h-screen bg-[#070f0e] text-emerald-50 font-sans selection:bg-emerald-500 selection:text-black">
      
      {/* 1. NAVBAR */}
      <header className="sticky top-0 z-40 bg-[#070f0e]/80 backdrop-blur-md border-b border-emerald-900/40 px-4 sm:px-8 h-20 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-500 flex items-center justify-center text-black font-bold shadow-lg shadow-emerald-500/20">
            <Building2 className="w-6 h-6" />
          </div>
          <div>
            <span className="text-xl font-bold tracking-tight text-white flex items-center gap-1">
              Property<span className="text-emerald-400">Hub</span>
            </span>
            <span className="text-[10px] text-emerald-500/80 font-medium tracking-wider uppercase block -mt-1">
              Luxury Property Listing
            </span>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-emerald-200/80">
          <a href="#" className="text-emerald-400 font-semibold">Jelajahi</a>
          <a href="#" className="hover:text-emerald-400 transition-colors">Vila Mewah</a>
          <a href="#" className="hover:text-emerald-400 transition-colors">Investasi Tanah</a>
          <a href="#" className="hover:text-emerald-400 transition-colors">Peta Lokasi</a>
        </nav>

        <div className="flex items-center gap-3">
          <button className="hidden sm:flex items-center gap-2 px-4 py-2.5 rounded-full border border-emerald-800/60 bg-emerald-950/40 hover:bg-emerald-900/50 text-xs font-semibold text-emerald-300 transition-all">
            Pasang Iklan
          </button>
          <button className="px-5 py-2.5 rounded-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs transition-all shadow-lg shadow-emerald-500/20">
            Hubungi Agen
          </button>
        </div>
      </header>

      {/* 2. HERO SECTION WITH ADVANCED SEARCH */}
      <section className="relative py-16 lg:py-24 px-4 sm:px-8 max-w-7xl mx-auto overflow-hidden">
        {/* Background Decorative Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-emerald-500/10 blur-[130px] rounded-full pointer-events-none" />

        <div className="text-center max-w-3xl mx-auto mb-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold mb-4">
              <Star className="w-3.5 h-3.5 fill-emerald-400" /> Portal Properti Eksklusif Bali
            </span>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight mb-4">
              Temukan Hunian Impian & <span className="text-emerald-400">Investasi Mewah</span>
            </h1>
            <p className="text-sm sm:text-base text-emerald-200/70">
              Cari vila, rumah tropis, dan tanah strategis dengan fitur peta interaktif dan transparansi legalitas 100%.
            </p>
          </motion.div>
        </div>

        {/* SEARCH BAR BOX */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-[#0b1816] border border-emerald-800/60 p-3 sm:p-4 rounded-3xl shadow-2xl max-w-4xl mx-auto relative z-10"
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
            {/* Input Lokasi */}
            <div className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-emerald-950/40 border border-emerald-900/40">
              <MapPin className="w-5 h-5 text-emerald-400 shrink-0" />
              <div className="w-full">
                <label className="block text-[10px] text-emerald-500 uppercase font-bold tracking-wider">Lokasi</label>
                <input 
                  type="text" 
                  placeholder="Canggu, Uluwatu..." 
                  className="w-full bg-transparent text-xs text-white placeholder-emerald-700 focus:outline-none font-medium"
                />
              </div>
            </div>

            {/* Select Tipe Properti */}
            <div className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-emerald-950/40 border border-emerald-900/40">
              <Building2 className="w-5 h-5 text-emerald-400 shrink-0" />
              <div className="w-full">
                <label className="block text-[10px] text-emerald-500 uppercase font-bold tracking-wider">Tipe</label>
                <select className="w-full bg-transparent text-xs text-white focus:outline-none font-medium cursor-pointer [&>option]:bg-[#070f0e]">
                  <option value="all">Semua Tipe</option>
                  <option value="villa">Vila</option>
                  <option value="house">Rumah</option>
                  <option value="land">Tanah</option>
                </select>
              </div>
            </div>

            {/* Range Harga */}
            <div className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-emerald-950/40 border border-emerald-900/40">
              <SlidersHorizontal className="w-5 h-5 text-emerald-400 shrink-0" />
              <div className="w-full">
                <label className="block text-[10px] text-emerald-500 uppercase font-bold tracking-wider">Range Harga</label>
                <select className="w-full bg-transparent text-xs text-white focus:outline-none font-medium cursor-pointer [&>option]:bg-[#070f0e]">
                  <option value="all">Berapapun</option>
                  <option value="1">1 - 5 Miliar</option>
                  <option value="2">5 - 15 Miliar</option>
                  <option value="3">&gt; 15 Miliar</option>
                </select>
              </div>
            </div>

            {/* Tombol Search */}
            <button className="h-full py-3.5 px-6 rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-black font-bold text-sm flex items-center justify-center gap-2 transition-all shadow-lg shadow-emerald-500/20">
              <Search className="w-4 h-4" />
              <span>Cari Properti</span>
            </button>
          </div>
        </motion.div>
      </section>

      {/* 3. MAIN LISTING SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 pb-24">
        
        {/* Filter Toolbar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-emerald-900/40">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2">
            {['Semua', 'Vila', 'Rumah', 'Tanah', 'Apartemen'].map((type) => (
              <button
                key={type}
                onClick={() => setSelectedType(type)}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                  selectedType === type
                    ? 'bg-emerald-500 text-black shadow-md shadow-emerald-500/20'
                    : 'bg-emerald-950/40 text-emerald-300 hover:bg-emerald-900/40 border border-emerald-900/60'
                }`}
              >
                {type}
              </button>
            ))}
          </div>

          {/* View Toggle (Grid vs Map) */}
          <div className="flex items-center gap-2 bg-emerald-950/60 p-1 rounded-xl border border-emerald-900/60 self-start sm:self-auto">
            <button
              onClick={() => setViewMode('grid')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                viewMode === 'grid' ? 'bg-emerald-500 text-black' : 'text-emerald-400 hover:text-white'
              }`}
            >
              <Grid className="w-3.5 h-3.5" /> Grid View
            </button>
            <button
              onClick={() => setViewMode('map')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                viewMode === 'map' ? 'bg-emerald-500 text-black' : 'text-emerald-400 hover:text-white'
              }`}
            >
              <Map className="w-3.5 h-3.5" /> Map View
            </button>
          </div>
        </div>

        {/* PROPERTY GRID / MAP MODE */}
        {viewMode === 'grid' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence>
              {filteredProperties.map((item, index) => {
                const isFav = favorites.includes(item.id)
                return (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    onClick={() => setSelectedProperty(item)}
                    className="group bg-[#0a1614] rounded-3xl overflow-hidden border border-emerald-900/50 hover:border-emerald-500/50 transition-all duration-300 cursor-pointer flex flex-col justify-between shadow-xl"
                  >
                    <div>
                      {/* Image Container */}
                      <div className="aspect-[4/3] relative overflow-hidden bg-emerald-950">
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0a1614] via-transparent to-transparent opacity-80" />

                        {/* Top Badges */}
                        <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                          <span className="text-[10px] font-bold text-black bg-emerald-400 px-3 py-1 rounded-full uppercase tracking-wider shadow-md">
                            {item.period}
                          </span>
                          <button 
                            onClick={(e) => toggleFavorite(item.id, e)}
                            className="w-9 h-9 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center text-white hover:bg-black/80 transition-colors"
                          >
                            <Heart className={`w-4 h-4 ${isFav ? 'fill-rose-500 text-rose-500' : 'text-white'}`} />
                          </button>
                        </div>

                        {/* Bottom Location */}
                        <div className="absolute bottom-3 left-4 flex items-center gap-1.5 text-xs text-emerald-300">
                          <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                          <span className="truncate max-w-[200px]">{item.location}</span>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-6">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-xs font-semibold text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-md border border-emerald-500/20">
                            {item.type}
                          </span>
                          <div className="flex items-center gap-1 text-xs text-amber-400 font-bold">
                            <Star className="w-3.5 h-3.5 fill-amber-400" />
                            <span>{item.rating}</span>
                          </div>
                        </div>

                        <h3 className="text-lg font-bold text-white group-hover:text-emerald-400 transition-colors mb-3 line-clamp-1">
                          {item.title}
                        </h3>

                        {/* Property Specs */}
                        {item.beds > 0 && (
                          <div className="flex items-center gap-4 py-3 border-y border-emerald-900/40 text-xs text-emerald-200/70 mb-4">
                            <div className="flex items-center gap-1.5">
                              <Bed className="w-4 h-4 text-emerald-400" />
                              <span>{item.beds} Kamar</span>
                            </div>
                            <div className="flex items-center gap-1.5">
                              <Bath className="w-4 h-4 text-emerald-400" />
                              <span>{item.baths} K.Mandi</span>
                            </div>
                            <div className="flex items-center gap-1.5">
                              <Maximize className="w-4 h-4 text-emerald-400" />
                              <span>{item.area}</span>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Price & Action */}
                    <div className="px-6 pb-6 pt-0 flex items-center justify-between">
                      <div>
                        <span className="block text-[10px] text-emerald-500 uppercase font-semibold">Harga</span>
                        <span className="text-base font-extrabold text-emerald-400">{item.price}</span>
                      </div>
                      <div className="w-9 h-9 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500 group-hover:text-black transition-all">
                        <ChevronRight className="w-5 h-5" />
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </AnimatePresence>
          </div>
        ) : (
          /* MAP VIEW SIMULATION */
          <div className="w-full h-[600px] bg-[#071311] rounded-3xl border border-emerald-900/60 overflow-hidden relative flex items-center justify-center">
            <div className="absolute inset-0 opacity-40 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:16px_16px]" />
            <div className="text-center p-8 relative z-10 max-w-md">
              <MapPin className="w-12 h-12 text-emerald-400 mx-auto mb-4 animate-bounce" />
              <h3 className="text-xl font-bold text-white mb-2">Peta Lokasi Interaktif</h3>
              <p className="text-xs text-emerald-200/70 mb-6">
                Menampilkan {filteredProperties.length} titik koordinat properti terverifikasi di area Bali.
              </p>
              <button 
                onClick={() => setViewMode('grid')}
                className="px-6 py-2.5 rounded-full bg-emerald-500 text-black font-bold text-xs"
              >
                Kembali ke Grid
              </button>
            </div>
          </div>
        )}
      </section>

      {/* 4. MODAL DETAIL PROPERTI */}
      <AnimatePresence>
        {selectedProperty && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
            onClick={() => setSelectedProperty(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-3xl bg-[#091815] border border-emerald-800/60 rounded-3xl overflow-hidden shadow-2xl max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProperty(null)}
                className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Image */}
              <div className="aspect-[16/9] relative bg-emerald-950">
                <Image
                  src={selectedProperty.image}
                  alt={selectedProperty.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#091815] via-transparent to-transparent opacity-90" />
              </div>

              {/* Modal Content */}
              <div className="p-6 sm:p-8 -mt-8 relative z-10">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <span className="text-xs font-bold text-black bg-emerald-400 px-3 py-1 rounded-full uppercase">
                    {selectedProperty.period}
                  </span>
                  <span className="text-2xl font-black text-emerald-400">
                    {selectedProperty.price}
                  </span>
                </div>

                <h2 className="text-2xl font-bold text-white mb-2">{selectedProperty.title}</h2>
                <div className="flex items-center gap-1.5 text-xs text-emerald-300 mb-6">
                  <MapPin className="w-4 h-4 text-emerald-400" />
                  <span>{selectedProperty.location}</span>
                </div>

                {/* Facilities Badges */}
                <div className="mb-6">
                  <h4 className="text-xs font-bold text-emerald-500 uppercase mb-3">Fasilitas Utama</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProperty.tags.map((tag) => (
                      <span key={tag} className="text-xs px-3 py-1.5 rounded-xl bg-emerald-950/80 border border-emerald-800/60 text-emerald-200 flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row items-center gap-3 pt-4 border-t border-emerald-900/40">
                  <a
                    href="https://wa.me/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:flex-1 py-3.5 px-6 rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-black font-bold text-sm flex items-center justify-center gap-2 transition-all shadow-lg shadow-emerald-500/20"
                  >
                    <MessageSquare className="w-4 h-4" />
                    Chat WhatsApp Agen
                  </a>
                  <button
                    onClick={() => alert('Jadwal kunjungan telah dikirim ke agen.')}
                    className="w-full sm:w-auto py-3.5 px-6 rounded-2xl bg-emerald-950 hover:bg-emerald-900 text-emerald-300 font-bold text-sm border border-emerald-800/60 transition-all"
                  >
                    Atur Jadwal Survey
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  )
}