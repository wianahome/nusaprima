'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { ExternalLink, ArrowUpRight, X } from 'lucide-react'
import Image from 'next/image'

const projects = [
  {
    id: 1,
    title: 'TokoBaju Fashion',
    category: 'E-Commerce',
    description: 'Platform e-commerce fashion dengan sistem pembayaran terintegrasi.',
    image: '/images/portfolio/fashion-ecommerce.jpg',
    color: 'from-rose-500/20 to-orange-500/20',
    tags: ['Next.js', 'Stripe', 'Tailwind'],
  },
  {
    id: 2,
    title: 'RestoPOS System',
    category: 'SaaS',
    description: 'Sistem point of sale modern untuk restoran dan cafe.',
    image: '/images/portfolio/pos-system.jpg',
    color: 'from-blue-500/20 to-cyan-500/20',
    tags: ['React', 'Node.js', 'PostgreSQL'],
  },
  {
    id: 3,
    title: 'PropertyHub',
    category: 'Real Estate',
    description: 'Portal listing properti dengan fitur pencarian advanced.',
    image: '/images/portfolio/property-portal.jpg',
    color: 'from-green-500/20 to-emerald-500/20',
    tags: ['Next.js', 'Supabase', 'Maps API'],
  },
  {
    id: 4,
    title: 'HealthCare Plus',
    category: 'Healthcare',
    description: 'Aplikasi booking appointment klinik dan rumah sakit.',
    image: '/images/portfolio/healthcare-app.jpg',
    color: 'from-purple-500/20 to-pink-500/20',
    tags: ['React', 'Firebase', 'Twilio'],
  },
  {
    id: 5,
    title: 'EduLearn Platform',
    category: 'Education',
    description: 'Learning management system dengan video streaming.',
    image: '/images/portfolio/education-platform.jpg',
    color: 'from-amber-500/20 to-yellow-500/20',
    tags: ['Next.js', 'AWS', 'Stripe'],
  },
  {
    id: 6,
    title: 'TravelGo',
    category: 'Travel',
    description: 'Website booking tour dan travel dengan payment gateway.',
    image: '/images/portfolio/travel-booking.jpg',
    color: 'from-teal-500/20 to-cyan-500/20',
    tags: ['Vue.js', 'Laravel', 'Midtrans'],
  },
]

const categories = ['Semua', 'E-Commerce', 'SaaS', 'Real Estate', 'Healthcare', 'Education', 'Travel']

export function Gallery() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [activeCategory, setActiveCategory] = useState('Semua')
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null)

  const filteredProjects = activeCategory === 'Semua'
    ? projects
    : projects.filter(p => p.category === activeCategory)

  return (
    <section id="gallery" className="py-20 lg:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-400/5 to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-cyan-400/10 text-cyan-400 text-sm font-medium mb-4">
            Portfolio
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Karya <span className="text-cyan-400">Terbaik</span> Kami
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Lihat beberapa proyek yang telah kami kerjakan untuk klien dari berbagai industri.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === category
                  ? 'bg-cyan-400 text-cyan-400-foreground'
                  : 'bg-secondary/50 text-muted-foreground hover:bg-secondary hover:text-foreground'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                layout
                layoutId={`project-${project.id}`}
                onClick={() => setSelectedProject(project)}
                className="group relative overflow-hidden rounded-2xl bg-card/30 border border-border/50 hover:border-cyan-400/50 transition-all duration-500 cursor-pointer"
              >
                <div className="aspect-[4/3] relative overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-40 group-hover:opacity-20 transition-opacity duration-500`} />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-60" />
                  
                  <motion.div 
                    className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={false}
                  >
                    <motion.div 
                      className="w-16 h-16 rounded-full bg-cyan-400/90 backdrop-blur-sm flex items-center justify-center"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink className="w-7 h-7 text-cyan-400-foreground" />
                    </motion.div>
                  </motion.div>

                  <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <motion.button 
                      className="w-full py-3 rounded-xl bg-cyan-400/90 backdrop-blur-sm text-cyan-400-foreground font-medium flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Lihat Detail
                      <ArrowUpRight className="w-4 h-4" />
                    </motion.button>
                  </div>
                </div>
                
                <div className="p-5">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-medium text-cyan-400 bg-cyan-400/10 px-2.5 py-1 rounded-full">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2 py-1 rounded-full bg-secondary/50 text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-xl"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              layoutId={`project-${selectedProject.id}`}
              className="relative w-full max-w-4xl bg-card rounded-3xl overflow-hidden border border-border/50 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center hover:bg-background transition-colors"
              >
                <X className="w-5 h-5 text-foreground" />
              </button>

              <div className="aspect-video relative">
                <Image
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  fill
                  className="object-cover"
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${selectedProject.color} opacity-30`} />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
              </div>

              <div className="p-6 lg:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-sm font-medium text-cyan-400 bg-cyan-400/10 px-3 py-1.5 rounded-full">
                    {selectedProject.category}
                  </span>
                  <div className="flex gap-2">
                    {selectedProject.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2.5 py-1 rounded-full bg-secondary/50 text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-3">
                  {selectedProject.title}
                </h3>
                <p className="text-muted-foreground mb-6">
                  {selectedProject.description}
                </p>

                <div className="flex gap-4">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex-1 py-3 rounded-xl bg-cyan-400 text-cyan-400-foreground font-medium flex items-center justify-center gap-2"
                  >
                    Lihat Live Demo
                    <ExternalLink className="w-4 h-4" />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-6 py-3 rounded-xl bg-secondary text-foreground font-medium"
                  >
                    Case Study
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
