'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  GraduationCap, 
  PlayCircle, 
  BookOpen, 
  Clock, 
  Users, 
  Search, 
  X, 
  Award, 
  TrendingUp,
  Play
} from 'lucide-react'
import Image from 'next/image'

// Data Kursus & Materi Video
const categories = ['Semua Kursus', 'Web Development', 'UI/UX Design', 'Data Science', 'Digital Marketing']

const courses = [
  {
    id: 1,
    title: 'Fullstack Next.js 14 & Tailwind Masterclass',
    instructor: 'Alex Rivera',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop',
    thumbnail: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=800&auto=format&fit=crop',
    category: 'Web Development',
    lessons: 32,
    duration: '14 jam 30 menit',
    rating: 4.9,
    students: '1.420',
    progress: 65,
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    description: 'Pelajari pembuatan aplikasi web modern menggunakan Next.js App Router, Supabase, dan Tailwind CSS dari dasar hingga deployment.',
  },
  {
    id: 2,
    title: 'UI/UX Design System for Enterprise Apps',
    instructor: 'Sarah Jenkins',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&auto=format&fit=crop',
    thumbnail: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=800&auto=format&fit=crop',
    category: 'UI/UX Design',
    lessons: 24,
    duration: '9 jam 15 menit',
    rating: 4.8,
    students: '980',
    progress: 30,
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    description: 'Panduan lengkap membuat Design System yang dapat diskalakan menggunakan Figma, auto-layout, dan komponen variabel.',
  },
  {
    id: 3,
    title: 'Python for Data Science & AI Fundamentals',
    instructor: 'Dr. Michael Chen',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop',
    thumbnail: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=800&auto=format&fit=crop',
    category: 'Data Science',
    lessons: 40,
    duration: '18 jam 45 menit',
    rating: 5.0,
    students: '2.150',
    progress: 90,
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    description: 'Kuasai analisis data, visualisasi, dan dasar-dasar Machine Learning menggunakan Python, Pandas, dan Scikit-Learn.',
  },
  {
    id: 4,
    title: 'SEO Strategy & Organic Growth 2026',
    instructor: 'David Miller',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop',
    thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop',
    category: 'Digital Marketing',
    lessons: 18,
    duration: '6 jam 20 menit',
    rating: 4.7,
    students: '750',
    progress: 0,
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    description: 'Teknik optimasi mesin pencari terbaru, riset kata kunci, On-Page & Off-Page SEO untuk mendominasi peringkat teratas Google.',
  },
]

export default function EduLearnPage() {
  const [selectedCategory, setSelectedCategory] = useState('Semua Kursus')
  const [searchQuery, setSearchQuery] = useState('')
  const [activeCourse, setActiveCourse] = useState<typeof courses[0] | null>(null)
  const [isPlayingVideo, setIsPlayingVideo] = useState(false)

  const filteredCourses = courses.filter(c => {
    const matchesCategory = selectedCategory === 'Semua Kursus' || c.category === selectedCategory
    const matchesSearch = c.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          c.instructor.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <div className="min-h-screen bg-[#12100e] text-amber-50 font-sans selection:bg-amber-500 selection:text-black">
      
      {/* BACKGROUND GLOW */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-amber-500/10 blur-[150px] rounded-full pointer-events-none" />

      {/* 1. HERO DASHBOARD SUMMARY */}
      <section className="relative pt-8 pb-6 px-4 sm:px-8 max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-r from-amber-500 to-amber-600 rounded-3xl p-6 sm:p-8 text-black shadow-2xl relative overflow-hidden mb-8"
        >
          {/* Decorative Circles */}
          <div className="absolute -right-10 -bottom-10 w-60 h-60 bg-white/10 rounded-full pointer-events-none" />

          <div className="relative z-10 max-w-2xl">
            <span className="inline-block px-3 py-1 rounded-full bg-black/10 text-black text-xs font-bold mb-3 uppercase tracking-wider">
              Student Dashboard
            </span>
            <h1 className="text-2xl sm:text-4xl font-black tracking-tight mb-3">
              Selamat Datang di EduLearn Platform
            </h1>
            <p className="text-xs sm:text-sm font-medium text-black/80 mb-6">
              Kamu telah menyelesaikan 65% dari kursus <strong className="underline">Next.js 14 Masterclass</strong>. Tinggal 3 modul lagi untuk klaim sertifikat!
            </p>
            <button 
              onClick={() => {
                setActiveCourse(courses[0])
                setIsPlayingVideo(true)
              }}
              className="px-6 py-3 rounded-2xl bg-black hover:bg-neutral-900 text-amber-400 font-bold text-xs flex items-center gap-2 shadow-xl transition-all"
            >
              <Play className="w-4 h-4 fill-amber-400" /> Lanjutkan Belajar
            </button>
          </div>
        </motion.div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {[
            { label: 'Kursus Diikuti', value: '4 Kursus', icon: BookOpen },
            { label: 'Jam Belajar', value: '28 Jam', icon: Clock },
            { label: 'Progress Rata-rata', value: '58%', icon: TrendingUp },
            { label: 'Sertifikat Diraih', value: '2 Sertifikat', icon: Award },
          ].map((stat, i) => {
            const Icon = stat.icon
            return (
              <div key={i} className="bg-[#1a1714] border border-amber-900/30 p-4 rounded-2xl flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 shrink-0">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-[10px] text-amber-200/60 uppercase font-semibold">{stat.label}</span>
                  <span className="text-sm sm:text-base font-extrabold text-white">{stat.value}</span>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* 2. MAIN COURSES SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 pb-24">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div>
            <h2 className="text-2xl font-bold text-white tracking-tight">Katalog Kursus & Video</h2>
            <p className="text-xs text-amber-200/60 mt-1">Pilih materi pembelajaran dari instruktur profesional.</p>
          </div>

          {/* Search Bar */}
          <div className="flex items-center gap-2 bg-[#1a1714] border border-amber-900/40 px-4 py-2.5 rounded-2xl w-full sm:w-72">
            <Search className="w-4 h-4 text-amber-400 shrink-0" />
            <input 
              type="text" 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Cari materi / kursus..." 
              className="bg-transparent text-xs text-white placeholder-amber-700 focus:outline-none w-full"
            />
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                selectedCategory === cat
                  ? 'bg-amber-500 text-black shadow-md shadow-amber-500/20'
                  : 'bg-[#1a1714] text-amber-300 hover:bg-amber-950 border border-amber-900/40'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Course Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredCourses.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              onClick={() => {
                setActiveCourse(course)
                setIsPlayingVideo(false)
              }}
              className="group bg-[#171412] rounded-3xl overflow-hidden border border-amber-900/40 hover:border-amber-500/50 transition-all duration-300 cursor-pointer flex flex-col justify-between shadow-xl"
            >
              <div>
                {/* Thumbnail */}
                <div className="aspect-video relative overflow-hidden bg-amber-950">
                  <Image
                    src={course.thumbnail}
                    alt={course.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#171412] via-transparent to-transparent opacity-80" />
                  
                  {/* Play Overlay Icon */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 backdrop-blur-xs">
                    <div className="w-12 h-12 rounded-full bg-amber-500 flex items-center justify-center text-black shadow-lg">
                      <Play className="w-5 h-5 fill-black ml-0.5" />
                    </div>
                  </div>

                  <span className="absolute top-3 left-3 text-[10px] font-bold text-black bg-amber-400 px-2.5 py-1 rounded-md">
                    {course.category}
                  </span>
                </div>

                {/* Content */}
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-6 h-6 rounded-full relative overflow-hidden border border-amber-500/40">
                      <Image src={course.avatar} alt={course.instructor} fill className="object-cover" />
                    </div>
                    <span className="text-xs text-amber-200/70 font-medium truncate">{course.instructor}</span>
                  </div>

                  <h3 className="text-sm font-bold text-white group-hover:text-amber-400 transition-colors mb-3 line-clamp-2">
                    {course.title}
                  </h3>

                  {/* Course Details */}
                  <div className="flex items-center justify-between text-[11px] text-amber-300/60 mb-4">
                    <span className="flex items-center gap-1"><BookOpen className="w-3.5 h-3.5 text-amber-400" /> {course.lessons} Modul</span>
                    <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5 text-amber-400" /> {course.duration}</span>
                  </div>
                </div>
              </div>

              {/* Progress Bar or Action */}
              <div className="p-5 pt-0">
                {course.progress > 0 ? (
                  <div>
                    <div className="flex justify-between text-[10px] text-amber-400 font-bold mb-1">
                      <span>Progress Belajar</span>
                      <span>{course.progress}%</span>
                    </div>
                    <div className="w-full h-2 bg-amber-950 rounded-full overflow-hidden border border-amber-900/50">
                      <div 
                        className="h-full bg-gradient-to-r from-amber-500 to-amber-400 rounded-full" 
                        style={{ width: `${course.progress}%` }} 
                      />
                    </div>
                  </div>
                ) : (
                  <button className="w-full py-2.5 rounded-xl bg-amber-950/60 hover:bg-amber-500 hover:text-black border border-amber-800/40 text-amber-300 text-xs font-bold transition-all">
                    Mulai Belajar
                  </button>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. VIDEO PLAYER MODAL / LEARNING SCREEN */}
      <AnimatePresence>
        {activeCourse && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md"
            onClick={() => setActiveCourse(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-4xl bg-[#171412] border border-amber-800/60 rounded-3xl overflow-hidden shadow-2xl max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveCourse(null)}
                className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Video Player Screen */}
              <div className="aspect-video relative bg-black flex items-center justify-center">
                {isPlayingVideo ? (
                  <iframe 
                    src={activeCourse.videoUrl} 
                    title={activeCourse.title}
                    className="w-full h-full border-0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                  />
                ) : (
                  <div className="relative w-full h-full flex items-center justify-center">
                    <Image 
                      src={activeCourse.thumbnail} 
                      alt={activeCourse.title} 
                      fill 
                      className="object-cover opacity-60" 
                    />
                    <button 
                      onClick={() => setIsPlayingVideo(true)}
                      className="relative z-10 w-20 h-20 rounded-full bg-amber-500 hover:bg-amber-400 text-black flex items-center justify-center shadow-2xl transition-all scale-100 hover:scale-110"
                    >
                      <Play className="w-8 h-8 fill-black ml-1" />
                    </button>
                  </div>
                )}
              </div>

              {/* Course Detail Description */}
              <div className="p-6 sm:p-8">
                <span className="inline-block px-3 py-1 rounded-full bg-amber-500/20 border border-amber-500/30 text-amber-400 text-xs font-semibold mb-3">
                  {activeCourse.category}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                  {activeCourse.title}
                </h3>
                <p className="text-xs sm:text-sm text-amber-200/70 mb-6 leading-relaxed">
                  {activeCourse.description}
                </p>

                <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-amber-900/40">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full relative overflow-hidden border border-amber-500/40">
                      <Image src={activeCourse.avatar} alt={activeCourse.instructor} fill className="object-cover" />
                    </div>
                    <div>
                      <span className="text-xs text-white font-bold block">{activeCourse.instructor}</span>
                      <span className="text-[10px] text-amber-400 font-medium">Instruktur Resmi</span>
                    </div>
                  </div>

                  <button 
                    onClick={() => setIsPlayingVideo(!isPlayingVideo)}
                    className="px-6 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-bold text-xs transition-all shadow-lg"
                  >
                    {isPlayingVideo ? 'Jeda Video' : 'Mulai Tonton Video'}
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