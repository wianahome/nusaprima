'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { ArrowRight, Sparkles, Code2, Zap, Globe, Cpu, Shield } from 'lucide-react'
import { Button } from '@/components/ui/button'

function HeroP5Animation() {
  const containerRef = useRef<HTMLDivElement>(null)
  const p5Instance = useRef<any>(null)

  useEffect(() => {
    if (typeof window === 'undefined') return

    let myP5: any;

    const initP5 = async () => {
      const p5 = (await import('p5')).default

      const sketch = (p: any) => {
        let particles: any[] = []
        // Kurangi jumlah partikel sedikit agar smooth saat scroll (dari 120 ke 80)
        const numParticles = 80 
        const connectionDistance = 150
        const mouseInfluence = 200
        const primaryColor = { r: 20, g: 184, b: 166 }
        let time = 0

        p.setup = () => {
          // Masukkan canvas ke dalam containerRef agar tidak berantakan
          const canvas = p.createCanvas(p.windowWidth, p.windowHeight)
          if (containerRef.current) {
            canvas.parent(containerRef.current)
          }
          canvas.style('position', 'absolute')
          canvas.style('top', '0')
          canvas.style('left', '0')
          canvas.style('z-index', '1')
          canvas.style('pointer-events', 'none')

          for (let i = 0; i < numParticles; i++) {
            particles.push({
              x: p.random(p.width),
              y: p.random(p.height),
              vx: p.random(-0.5, 0.5),
              vy: p.random(-0.5, 0.5),
              size: p.random(2, 4),
              alpha: p.random(100, 200),
              pulse: p.random(p.TWO_PI),
              pulseSpeed: p.random(0.02, 0.05)
            })
          }
        }

        p.draw = () => {
          p.clear()
          time += 0.01

          // Background Lines (Waves) - Dibuat lebih halus
          p.noFill()
          for (let w = 0; w < 3; w++) {
            p.beginShape()
            for (let x = 0; x <= p.width; x += 30) {
              const y = p.height * 0.5 + 
                p.sin(x * 0.005 + time + w * 0.5) * 80
              const alpha = p.map(p.sin(x * 0.01 + time), -1, 1, 5, 25)
              p.stroke(primaryColor.r, primaryColor.g, primaryColor.b, alpha)
              p.vertex(x, y + w * 50)
            }
            p.endShape()
          }

          // Particles & Interaction
          particles.forEach((particle, i) => {
            const dMouse = p.dist(p.mouseX, p.mouseY, particle.x, particle.y)
            
            if (dMouse < mouseInfluence) {
              const force = p.map(dMouse, 0, mouseInfluence, 0.4, 0)
              particle.vx += (p.mouseX - particle.x) / dMouse * force
              particle.vy += (p.mouseY - particle.y) / dMouse * force
            }

            particle.x += particle.vx
            particle.y += particle.vy
            particle.vx *= 0.95 // Friction
            particle.vy *= 0.95

            // Bounce/Wrap
            if (particle.x < 0) particle.x = p.width
            if (particle.x > p.width) particle.x = 0
            if (particle.y < 0) particle.y = p.height
            if (particle.y > p.height) particle.y = 0

            // Draw Connections (Hanya partikel terdekat untuk performa)
            for (let j = i + 1; j < particles.length; j++) {
              const other = particles[j]
              const d = p.dist(particle.x, particle.y, other.x, other.y)
              if (d < connectionDistance) {
                const alpha = p.map(d, 0, connectionDistance, 100, 0)
                p.stroke(primaryColor.r, primaryColor.g, primaryColor.b, alpha)
                p.strokeWeight(0.5)
                p.line(particle.x, particle.y, other.x, other.y)
              }
            }

            p.noStroke()
            p.fill(primaryColor.r, primaryColor.g, primaryColor.b, particle.alpha)
            p.ellipse(particle.x, particle.y, particle.size)
          })
        }

        p.windowResized = () => {
          p.resizeCanvas(p.windowWidth, p.windowHeight)
        }
      }

      myP5 = new p5(sketch)
      p5Instance.current = myP5
    }

    initP5()

    return () => {
      if (myP5) {
        myP5.remove()
      }
      // Membersihkan container agar tidak ada sisa canvas saat hot-reload
      if (containerRef.current) {
        containerRef.current.innerHTML = ''
      }
    }
  }, [])

  return <div ref={containerRef} className="absolute inset-0 pointer-events-none" />
}

const floatingIcons = [
  { Icon: Globe, delay: 0, position: { top: '15%', left: '10%' } },
  { Icon: Cpu, delay: 0.2, position: { top: '25%', right: '15%' } },
  { Icon: Code2, delay: 0.4, position: { bottom: '30%', left: '8%' } },
  { Icon: Shield, delay: 0.6, position: { bottom: '20%', right: '10%' } },
]

const words = ['Inovatif', 'Modern', 'Responsif', 'Powerful']

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [currentWord, setCurrentWord] = useState(0)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start']
  })

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length)
    }, 2500)
    return () => clearInterval(interval)
  }, [])

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
      </div>

      <HeroP5Animation />

      {/* Floating Elements */}
      {floatingIcons.map(({ Icon, delay, position }, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4, y: [0, -20, 0] }}
          transition={{ duration: 4, repeat: Infinity, delay, ease: 'easeInOut' }}
          className="absolute hidden lg:block z-10"
          style={position as any}
        >
          <div className="p-4 rounded-2xl bg-primary/5 backdrop-blur-sm border border-primary/20">
            <Icon className="w-8 h-8 text-primary" />
          </div>
        </motion.div>
      ))}

      {/* Main Content */}
      <motion.div style={{ y, opacity }} className="relative z-20 text-center px-4">
        <motion.h1 className="text-6xl lg:text-8xl font-bold tracking-tight mb-6">
          Wujudkan Website <br />
          <AnimatePresence mode="wait">
            <motion.span
              key={currentWord}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-400"
            >
              {words[currentWord]}
            </motion.span>
          </AnimatePresence>
          {' '}Anda
        </motion.h1>

        <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
          Digital Agency di Bali yang fokus pada performa Next.js dan desain premium.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="h-14 px-8 text-lg rounded-full shadow-lg shadow-primary/20">
            Konsultasi Gratis
          </Button>
          <Button size="lg" variant="outline" className="h-14 px-8 text-lg rounded-full backdrop-blur-md">
            Lihat Portfolio
          </Button>
        </div>
      </motion.div>
    </section>
  )
}