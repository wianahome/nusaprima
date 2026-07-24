'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  HeartPulse, 
  Search, 
  Calendar as CalendarIcon, 
  Clock, 
  Star, 
  MapPin, 
  ChevronRight, 
  User, 
  ShieldCheck, 
  CheckCircle2, 
  X,
  Stethoscope,
  Building2,
  PhoneCall,
  Bell,
  ArrowLeft
} from 'lucide-react'
import Image from 'next/image'

// Data Dokter & Spesialis
const categories = [
  { id: 'all', name: 'Semua Spesialis', icon: Stethoscope },
  { id: 'general', name: 'Dokter Umum', icon: User },
  { id: 'dentist', name: 'Spesialis Gigi', icon: HeartPulse },
  { id: 'pediatric', name: 'Spesialis Anak', icon: User },
  { id: 'cardiologist', name: 'Jantung & Pembuluh', icon: HeartPulse },
]

const doctors = [
  {
    id: 1,
    name: 'dr. Sarah Wijaya, Sp.A',
    specialty: 'Spesialis Anak',
    category: 'pediatric',
    hospital: 'RS Premier Bali',
    rating: 4.9,
    reviews: 128,
    experience: '8 Tahun',
    price: 'Rp 250.000',
    image: 'https://images.unsplash.com/photo-1594824813566-78a9c2f5b822?q=80&w=600&auto=format&fit=crop',
    availableDates: ['24 Jul', '25 Jul', '26 Jul'],
    availableTimes: ['09:00', '11:00', '14:30', '16:00'],
  },
  {
    id: 2,
    name: 'dr. Marcus Thorne, Sp.OT',
    specialty: 'Spesialis Bedah Tulang',
    category: 'general',
    hospital: 'Klinik Medika Utama',
    rating: 4.8,
    reviews: 95,
    experience: '12 Tahun',
    price: 'Rp 350.000',
    image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=600&auto=format&fit=crop',
    availableDates: ['24 Jul', '25 Jul', '27 Jul'],
    availableTimes: ['10:00', '13:00', '15:30'],
  },
  {
    id: 3,
    name: 'drg. Amanda Putri, Sp.KG',
    specialty: 'Spesialis Konservasi Gigi',
    category: 'dentist',
    hospital: 'Dental Care Center',
    rating: 5.0,
    reviews: 210,
    experience: '6 Tahun',
    price: 'Rp 300.000',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=600&auto=format&fit=crop',
    availableDates: ['25 Jul', '26 Jul', '28 Jul'],
    availableTimes: ['08:30', '10:00', '14:00', '17:00'],
  },
  {
    id: 4,
    name: 'dr. David Santoso, Sp.JP',
    specialty: 'Spesialis Jantung & Pembuluh',
    category: 'cardiologist',
    hospital: 'RS Graha Medika',
    rating: 4.9,
    reviews: 184,
    experience: '15 Tahun',
    price: 'Rp 450.000',
    image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=600&auto=format&fit=crop',
    availableDates: ['24 Jul', '26 Jul', '27 Jul'],
    availableTimes: ['11:00', '13:30', '16:00'],
  },
]

export default function HealthCarePlusPage() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedDoctor, setSelectedDoctor] = useState<typeof doctors[0] | null>(null)
  const [selectedDate, setSelectedDate] = useState<string>('')
  const [selectedTime, setSelectedTime] = useState<string>('')
  const [bookingSuccess, setBookingSuccess] = useState(false)

  const filteredDoctors = selectedCategory === 'all' 
    ? doctors 
    : doctors.filter(doc => doc.category === selectedCategory)

  const handleBooking = () => {
    if (!selectedDate || !selectedTime) return
    setBookingSuccess(true)
  }

  const resetModal = () => {
    setSelectedDoctor(null)
    setSelectedDate('')
    setSelectedTime('')
    setBookingSuccess(false)
  }

  return (
    <div className="min-h-screen bg-[#0d0a18] text-purple-50 font-sans selection:bg-purple-500 selection:text-white">
      
      {/* BACKGROUND GLOW DECORATION */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-purple-600/15 blur-[160px] rounded-full pointer-events-none" />

      {/* 1. NAVBAR */}
      <header className="sticky top-0 z-40 bg-[#0d0a18]/80 backdrop-blur-lg border-b border-purple-900/40 px-4 sm:px-8 h-20 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-purple-600 to-indigo-500 flex items-center justify-center text-white shadow-lg shadow-purple-500/25">
            <HeartPulse className="w-6 h-6" />
          </div>
          <div>
            <span className="text-xl font-black tracking-tight text-white flex items-center gap-1">
              HealthCare<span className="text-purple-400">Plus</span>
            </span>
            <span className="text-[10px] text-purple-400/80 font-medium tracking-wider uppercase block -mt-1">
              Appointment Booking System
            </span>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-purple-200/80">
          <a href="#" className="text-purple-400 font-semibold">Cari Dokter</a>
          <a href="#" className="hover:text-purple-400 transition-colors">Rumah Sakit</a>
          <a href="#" className="hover:text-purple-400 transition-colors">Layanan Lab</a>
          <a href="#" className="hover:text-purple-400 transition-colors">Riwayat Medis</a>
        </nav>

        <div className="flex items-center gap-3">
          <button className="w-10 h-10 rounded-full border border-purple-800/60 bg-purple-950/40 flex items-center justify-center text-purple-300 hover:bg-purple-900/50 transition-all">
            <Bell className="w-4 h-4" />
          </button>
          <button className="px-5 py-2.5 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-bold text-xs transition-all shadow-lg shadow-purple-600/30">
            Masuk / Daftar
          </button>
        </div>
      </header>

      {/* 2. HERO SECTION */}
      <section className="relative py-12 lg:py-20 px-4 sm:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text & Search */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-semibold mb-6">
                <ShieldCheck className="w-4 h-4 text-purple-400" /> Terintegrasi 50+ Rumah Sakit & Klinik
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight mb-6">
                Janji Temu Dokter Tanpa Antre, <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">Mudah & Cepat</span>
              </h1>
              <p className="text-sm sm:text-base text-purple-200/70 mb-8 max-w-xl">
                Cari dokter spesialis terbaik, pilih jadwal konsultasi tatap muka atau online, dan dapatkan konfirmasi instan langsung ke HP Anda.
              </p>

              {/* Quick Search Bar */}
              <div className="p-2 bg-[#15102a] border border-purple-800/50 rounded-2xl shadow-2xl flex flex-col sm:flex-row gap-2 max-w-xl">
                <div className="flex-1 flex items-center gap-3 px-4 py-3 bg-purple-950/40 rounded-xl border border-purple-900/40">
                  <Search className="w-5 h-5 text-purple-400 shrink-0" />
                  <input 
                    type="text" 
                    placeholder="Cari nama dokter atau spesialis..." 
                    className="w-full bg-transparent text-xs text-white placeholder-purple-600 focus:outline-none"
                  />
                </div>
                <button className="px-6 py-3.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-lg shadow-purple-600/30">
                  <span>Cari Sekarang</span>
                </button>
              </div>
            </motion.div>
          </div>

          {/* Right Mobile Mockup Preview (Reflecting the Image UI) */}
          <div className="lg:col-span-5 flex justify-center relative">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative w-[300px] sm:w-[320px] bg-[#17122e] rounded-[40px] p-4 border-[6px] border-purple-900/60 shadow-2xl shadow-purple-950/80"
            >
              {/* Notch */}
              <div className="w-32 h-4 bg-purple-950 rounded-full mx-auto mb-4" />

              {/* Mobile Screen Top Bar */}
              <div className="flex items-center justify-between text-xs text-purple-300 font-semibold mb-4 px-2">
                <span>Book Doctor</span>
                <Search className="w-4 h-4 text-purple-400" />
              </div>

              {/* Categories Pills Inside Mobile */}
              <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-3 scrollbar-none">
                {['Semua', 'Anak', 'Gigi', 'Jantung'].map((cat, i) => (
                  <span key={cat} className={`text-[10px] font-bold px-3 py-1.5 rounded-full whitespace-nowrap ${i === 0 ? 'bg-purple-600 text-white' : 'bg-purple-950/80 text-purple-300'}`}>
                    {cat}
                  </span>
                ))}
              </div>

              {/* Doctor Card Mockup 1 */}
              <div className="bg-[#1e173d] p-3 rounded-2xl border border-purple-800/40 mb-3 flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-purple-900 relative overflow-hidden shrink-0">
                  <Image src={doctors[0].image} alt="doctor" fill className="object-cover" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-xs font-bold text-white truncate">{doctors[0].name}</h4>
                  <p className="text-[10px] text-purple-400">{doctors[0].specialty}</p>
                  <div className="flex items-center gap-1 text-[10px] text-amber-400 mt-1 font-bold">
                    <Star className="w-3 h-3 fill-amber-400" /> {doctors[0].rating}
                  </div>
                </div>
              </div>

              {/* Calendar Widget Mockup Inside Screen */}
              <div className="bg-[#1e173d] p-3 rounded-2xl border border-purple-800/40">
                <span className="text-[10px] font-bold text-purple-300 block mb-2">Pilih Tanggal Booking</span>
                <div className="grid grid-cols-7 gap-1 text-center text-[10px] text-purple-400 font-semibold mb-2">
                  <span>S</span><span>M</span><span>T</span><span>W</span><span>T</span><span>F</span><span>S</span>
                </div>
                <div className="grid grid-cols-7 gap-1 text-center text-[10px]">
                  {Array.from({ length: 14 }).map((_, i) => (
                    <span 
                      key={i} 
                      className={`py-1 rounded-md ${i === 4 ? 'bg-purple-600 text-white font-bold' : 'text-purple-300 hover:bg-purple-950'}`}
                    >
                      {i + 20}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </section>

      {/* 3. DOCTOR LISTING & CATEGORIES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 pb-24">
        
        {/* Category Tabs */}
        <div className="flex items-center gap-3 overflow-x-auto pb-4 mb-8 border-b border-purple-900/40 scrollbar-none">
          {categories.map((cat) => {
            const Icon = cat.icon
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-2xl text-xs font-semibold whitespace-nowrap transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-purple-600 text-white shadow-lg shadow-purple-600/30'
                    : 'bg-[#15102a] text-purple-300 hover:bg-purple-900/40 border border-purple-900/60'
                }`}
              >
                <Icon className="w-4 h-4" />
                {cat.name}
              </button>
            )
          })}
        </div>

        {/* Doctor Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredDoctors.map((doc, index) => (
            <motion.div
              key={doc.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="bg-[#140f28] rounded-3xl p-5 border border-purple-900/50 hover:border-purple-500/50 transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                {/* Doctor Avatar */}
                <div className="aspect-square relative rounded-2xl overflow-hidden bg-purple-950 mb-4 border border-purple-800/40">
                  <Image
                    src={doc.image}
                    alt={doc.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full text-[10px] font-bold text-amber-400 flex items-center gap-1 border border-amber-500/30">
                    <Star className="w-3 h-3 fill-amber-400" />
                    {doc.rating}
                  </div>
                </div>

                {/* Info */}
                <span className="text-[10px] font-bold text-purple-400 bg-purple-500/10 px-2.5 py-1 rounded-md border border-purple-500/20 inline-block mb-2">
                  {doc.specialty}
                </span>
                <h3 className="text-base font-bold text-white mb-1 group-hover:text-purple-300 transition-colors">
                  {doc.name}
                </h3>
                <div className="flex items-center gap-1.5 text-xs text-purple-400/80 mb-4">
                  <Building2 className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                  <span className="truncate">{doc.hospital}</span>
                </div>
              </div>

              {/* Price & Action */}
              <div className="pt-4 border-t border-purple-900/40 flex items-center justify-between">
                <div>
                  <span className="block text-[10px] text-purple-400 uppercase font-semibold">Biaya Konsultasi</span>
                  <span className="text-sm font-extrabold text-white">{doc.price}</span>
                </div>
                <button
                  onClick={() => setSelectedDoctor(doc)}
                  className="px-4 py-2 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs transition-all shadow-md shadow-purple-600/20"
                >
                  Book Now
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 4. BOOKING MODAL */}
      <AnimatePresence>
        {selectedDoctor && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
            onClick={resetModal}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-lg bg-[#140f2a] border border-purple-800/60 rounded-3xl p-6 sm:p-8 shadow-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={resetModal}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-purple-950 text-purple-300 flex items-center justify-center hover:bg-purple-900 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>

              {!bookingSuccess ? (
                <>
                  {/* Doctor Info Header */}
                  <div className="flex items-center gap-4 mb-6 pb-6 border-b border-purple-900/40">
                    <div className="w-16 h-16 rounded-2xl bg-purple-950 relative overflow-hidden border border-purple-700/40 shrink-0">
                      <Image src={selectedDoctor.image} alt={selectedDoctor.name} fill className="object-cover" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white">{selectedDoctor.name}</h3>
                      <p className="text-xs text-purple-400">{selectedDoctor.specialty}</p>
                      <p className="text-xs text-purple-300/70 mt-1">{selectedDoctor.hospital}</p>
                    </div>
                  </div>

                  {/* Step 1: Select Date */}
                  <div className="mb-6">
                    <label className="block text-xs font-bold text-purple-300 uppercase tracking-wider mb-3 flex items-center gap-2">
                      <CalendarIcon className="w-4 h-4 text-purple-400" /> Pilih Tanggal Konsultasi
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {selectedDoctor.availableDates.map((date) => (
                        <button
                          key={date}
                          onClick={() => setSelectedDate(date)}
                          className={`py-2.5 rounded-xl text-xs font-bold transition-all border ${
                            selectedDate === date
                              ? 'bg-purple-600 border-purple-500 text-white shadow-md shadow-purple-600/30'
                              : 'bg-purple-950/40 border-purple-900/60 text-purple-300 hover:bg-purple-900/40'
                          }`}
                        >
                          {date}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Step 2: Select Time */}
                  <div className="mb-8">
                    <label className="block text-xs font-bold text-purple-300 uppercase tracking-wider mb-3 flex items-center gap-2">
                      <Clock className="w-4 h-4 text-purple-400" /> Pilih Jam Konsultasi
                    </label>
                    <div className="grid grid-cols-4 gap-2">
                      {selectedDoctor.availableTimes.map((time) => (
                        <button
                          key={time}
                          onClick={() => setSelectedTime(time)}
                          className={`py-2 rounded-xl text-xs font-bold transition-all border ${
                            selectedTime === time
                              ? 'bg-purple-600 border-purple-500 text-white shadow-md shadow-purple-600/30'
                              : 'bg-purple-950/40 border-purple-900/60 text-purple-300 hover:bg-purple-900/40'
                          }`}
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    disabled={!selectedDate || !selectedTime}
                    onClick={handleBooking}
                    className={`w-full py-3.5 rounded-2xl font-bold text-sm transition-all shadow-lg ${
                      selectedDate && selectedTime
                        ? 'bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white shadow-purple-600/30 cursor-pointer'
                        : 'bg-purple-950 text-purple-500 cursor-not-allowed border border-purple-900/50'
                    }`}
                  >
                    Konfirmasi Booking ({selectedDoctor.price})
                  </button>
                </>
              ) : (
                /* SUCCESS STATE */
                <div className="text-center py-6">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Booking Berhasil!</h3>
                  <p className="text-xs text-purple-200/70 mb-6">
                    Jadwal konsultasi Anda bersama <strong className="text-white">{selectedDoctor.name}</strong> telah berhasil didaftarkan untuk tanggal <span className="text-purple-400 font-bold">{selectedDate}</span> jam <span className="text-purple-400 font-bold">{selectedTime}</span>.
                  </p>
                  <button
                    onClick={resetModal}
                    className="w-full py-3 rounded-xl bg-purple-600 text-white font-bold text-xs"
                  >
                    Tutup & Lihat Tiket
                  </button>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  )
}