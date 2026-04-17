'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { ArrowRight, Sparkles, Code2, Zap, Play, ChevronDown, Globe, Cpu, Shield } from 'lucide-react'
import { Button } from '@/components/ui/button'
import p5 from 'p5'

function HeroP5Animation() {
  const containerRef = useRef<HTMLDivElement>(null)
  const p5Instance = useRef<p5 | null>(null)

  useEffect(() => {
    if (!containerRef.current) return

    const sketch = (p: p5) => {
      const particles: Array<{
        x: number
        y: number
        vx: number
        vy: number
        size: number
        alpha: number
        pulse: number
        pulseSpeed: number
      }> = []
      const numParticles = 120
      const connectionDistance = 180
      const mouseInfluence = 200
      const primaryColor = { r: 20, g: 184, b: 166 }
      let mouseX = 0
      let mouseY = 0
      let time = 0

      p.setup = () => {
        const canvas = p.createCanvas(p.windowWidth, p.windowHeight)
        canvas.style('position', 'absolute')
        canvas.style('top', '0')
        canvas.style('left', '0')
        canvas.style('z-index', '1')
        canvas.style('pointer-events', 'none')

        for (let i = 0; i < numParticles; i++) {
          particles.push({
            x: p.random(p.width),
            y: p.random(p.height),
            vx: p.random(-0.8, 0.8),
            vy: p.random(-0.8, 0.8),
            size: p.random(2, 5),
            alpha: p.random(80, 200),
            pulse: p.random(p.TWO_PI),
            pulseSpeed: p.random(0.02, 0.05)
          })
        }
      }

      p.mouseMoved = () => {
        mouseX = p.mouseX
        mouseY = p.mouseY
      }

      p.draw = () => {
        p.clear()
        time += 0.01

        // Draw flowing wave lines
        p.noFill()
        for (let w = 0; w < 5; w++) {
          p.beginShape()
          for (let x = 0; x <= p.width; x += 20) {
            const y = p.height * 0.5 + 
              p.sin(x * 0.005 + time + w * 0.5) * 100 +
              p.sin(x * 0.01 + time * 1.5) * 50
            const alpha = p.map(p.sin(x * 0.01 + time), -1, 1, 10, 40)
            p.stroke(primaryColor.r, primaryColor.g, primaryColor.b, alpha)
            p.strokeWeight(1)
            p.vertex(x, y + w * 40)
          }
          p.endShape()
        }

        // Draw grid pattern
        const gridSize = 60
        p.strokeWeight(0.3)
        for (let x = 0; x < p.width; x += gridSize) {
          for (let y = 0; y < p.height; y += gridSize) {
            const d = p.dist(mouseX, mouseY, x, y)
            const alpha = d < mouseInfluence ? p.map(d, 0, mouseInfluence, 60, 5) : 5
            p.stroke(primaryColor.r, primaryColor.g, primaryColor.b, alpha)
            p.noFill()
            p.rect(x, y, gridSize, gridSize)
          }
        }

        // Update and draw particles
        for (let i = 0; i < particles.length; i++) {
          const particle = particles[i]
          
          // Mouse attraction
          const dMouse = p.dist(mouseX, mouseY, particle.x, particle.y)
          if (dMouse < mouseInfluence && dMouse > 0) {
            const force = p.map(dMouse, 0, mouseInfluence, 0.5, 0)
            particle.vx += (mouseX - particle.x) / dMouse * force * 0.02
            particle.vy += (mouseY - particle.y) / dMouse * force * 0.02
          }

          // Add some turbulence
          particle.vx += p.noise(particle.x * 0.01, time) * 0.1 - 0.05
          particle.vy += p.noise(particle.y * 0.01, time + 100) * 0.1 - 0.05

          // Damping
          particle.vx *= 0.98
          particle.vy *= 0.98

          // Velocity limits
          particle.vx = p.constrain(particle.vx, -2, 2)
          particle.vy = p.constrain(particle.vy, -2, 2)

          particle.x += particle.vx
          particle.y += particle.vy

          // Wrap around
          if (particle.x < -50) particle.x = p.width + 50
          if (particle.x > p.width + 50) particle.x = -50
          if (particle.y < -50) particle.y = p.height + 50
          if (particle.y > p.height + 50) particle.y = -50

          // Pulse animation
          particle.pulse += particle.pulseSpeed
          const pulseScale = 1 + p.sin(particle.pulse) * 0.3

          // Draw connections
          for (let j = i + 1; j < particles.length; j++) {
            const other = particles[j]
            const d = p.dist(particle.x, particle.y, other.x, other.y)
            
            if (d < connectionDistance) {
              const alpha = p.map(d, 0, connectionDistance, 120, 0)
              const gradient = p.map(d, 0, connectionDistance, 1, 0.3)
              p.stroke(
                primaryColor.r * gradient + 255 * (1 - gradient),
                primaryColor.g * gradient + 255 * (1 - gradient),
                primaryColor.b * gradient + 255 * (1 - gradient),
                alpha
              )
              p.strokeWeight(p.map(d, 0, connectionDistance, 1.5, 0.3))
              p.line(particle.x, particle.y, other.x, other.y)
            }
          }

          // Draw particle with glow
          p.noStroke()
          
          // Outer glow
          for (let g = 4; g >= 0; g--) {
            const glowAlpha = (particle.alpha / 15) * (1 - g / 4)
            p.fill(primaryColor.r, primaryColor.g, primaryColor.b, glowAlpha)
            p.ellipse(particle.x, particle.y, particle.size * (4 + g * 2) * pulseScale)
          }

          // Core particle
          p.fill(primaryColor.r, primaryColor.g, primaryColor.b, particle.alpha)
          p.ellipse(particle.x, particle.y, particle.size * pulseScale)

          // Bright center
          p.fill(255, 255, 255, particle.alpha * 0.8)
          p.ellipse(particle.x, particle.y, particle.size * 0.4 * pulseScale)
        }

        // Draw floating code symbols
        const symbols = ['<>', '/>', '{}', '[]', '()', '/*', '*/']
        p.textFont('monospace')
        p.textSize(14)
        for (let i = 0; i < 15; i++) {
          const x = (i * 200 + time * 50) % (p.width + 200) - 100
          const y = p.height * 0.3 + p.sin(x * 0.01 + i) * 150
          const alpha = 20 + p.sin(time + i) * 10
          p.fill(primaryColor.r, primaryColor.g, primaryColor.b, alpha)
          p.noStroke()
          p.text(symbols[i % symbols.length], x, y)
        }
      }

      p.windowResized = () => {
        p.resizeCanvas(p.windowWidth, p.windowHeight)
      }
    }

    p5Instance.current = new p5(sketch, containerRef.current)

    return () => {
      if (p5Instance.current) {
        p5Instance.current.remove()
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
  { Icon: Zap, delay: 0.8, position: { top: '40%', left: '5%' } },
  { Icon: Sparkles, delay: 1, position: { top: '35%', right: '8%' } },
]

const words = ['Inovatif', 'Modern', 'Responsif', 'Powerful']

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [currentWord, setCurrentWord] = useState(0)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start']
  })

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length)
    }, 2500)
    return () => clearInterval(interval)
  }, [])

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/80 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-primary/10" />
      </div>

      {/* P5.js Animation Layer */}
      <HeroP5Animation />

      {/* Animated Gradient Orbs */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/30 rounded-full blur-[120px] pointer-events-none"
      />
      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-[150px] pointer-events-none"
      />

      {/* Floating Icons */}
      {floatingIcons.map(({ Icon, delay, position }, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: [0.2, 0.5, 0.2],
            scale: [1, 1.2, 1],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay,
            ease: 'easeInOut',
          }}
          className="absolute hidden lg:block"
          style={position as React.CSSProperties}
        >
          <div className="p-4 rounded-2xl bg-card/30 backdrop-blur-md border border-primary/20 shadow-lg shadow-primary/10">
            <Icon className="w-8 h-8 text-primary" />
          </div>
        </motion.div>
      ))}

      {/* Main Content */}
      <motion.div 
        style={{ y, opacity, scale }}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32"
      >
        <div className="text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-primary/20 to-cyan-500/20 border border-primary/30 mb-8 backdrop-blur-sm"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
            >
              <Sparkles className="w-5 h-5 text-primary" />
            </motion.div>
            <span className="text-sm text-primary font-semibold tracking-wide">
              Transformasi Digital Bisnis Anda
            </span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-2 h-2 rounded-full bg-primary"
            />
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl sm:text-6xl lg:text-8xl font-bold tracking-tight text-foreground mb-6"
          >
            <motion.span
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="block"
            >
              Wujudkan Website
            </motion.span>
            <span className="relative block mt-2">
              <AnimatePresence mode="wait">
                <motion.span
                  key={currentWord}
                  initial={{ opacity: 0, y: 30, rotateX: -90 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0 }}
                  exit={{ opacity: 0, y: -30, rotateX: 90 }}
                  transition={{ duration: 0.5 }}
                  className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-primary via-cyan-400 to-teal-300"
                >
                  {words[currentWord]}
                </motion.span>
              </AnimatePresence>
              <motion.span
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-cyan-400 to-teal-300"
              >
                {' '}Anda
              </motion.span>
            </span>
          </motion.h1>

          {/* Animated Line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="h-1 w-32 mx-auto mb-8 rounded-full bg-gradient-to-r from-transparent via-primary to-transparent"
          />

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-lg sm:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12 text-pretty leading-relaxed"
          >
            Kami menciptakan website{' '}
            <span className="text-primary font-semibold">modern</span>,{' '}
            <span className="text-primary font-semibold">responsif</span>, dan{' '}
            <span className="text-primary font-semibold">berkinerja tinggi</span>{' '}
            yang membantu bisnis Anda berkembang di era digital.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary to-cyan-500 hover:from-primary/90 hover:to-cyan-500/90 text-primary-foreground px-10 py-7 text-lg font-semibold group shadow-lg shadow-primary/25 border-0"
              >
                <span>Konsultasi Gratis</span>
                <motion.span
                  className="ml-2"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight className="w-5 h-5" />
                </motion.span>
              </Button>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                size="lg"
                variant="outline"
                className="border-primary/50 hover:bg-primary/10 hover:border-primary px-10 py-7 text-lg font-semibold group backdrop-blur-sm"
              >
                <Play className="w-5 h-5 mr-2 text-primary" />
                <span>Lihat Demo</span>
              </Button>
            </motion.div>
          </motion.div>

          {/* Stats Cards */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto"
          >
            {[
              { icon: Code2, label: 'Proyek Selesai', value: '500+', color: 'from-primary to-cyan-500' },
              { icon: Zap, label: 'Uptime Server', value: '99.9%', color: 'from-cyan-500 to-teal-500' },
              { icon: Sparkles, label: 'Klien Puas', value: '100%', color: 'from-teal-500 to-emerald-500' },
              { icon: Globe, label: 'Negara', value: '15+', color: 'from-emerald-500 to-primary' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                whileHover={{ 
                  y: -10,
                  transition: { duration: 0.3 }
                }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl blur-xl from-primary/20 to-cyan-500/20" />
                <div className="relative flex flex-col items-center p-6 rounded-2xl bg-card/40 backdrop-blur-md border border-border/50 group-hover:border-primary/50 transition-all duration-300 overflow-hidden">
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${stat.color} opacity-0 group-hover:opacity-100 transition-opacity`} />
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.5 }}
                    className={`p-3 rounded-xl bg-gradient-to-r ${stat.color} mb-3`}
                  >
                    <stat.icon className="w-6 h-6 text-white" />
                  </motion.div>
                  <motion.span 
                    className="text-3xl lg:text-4xl font-bold text-foreground"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 + index * 0.1 }}
                  >
                    {stat.value}
                  </motion.span>
                  <span className="text-sm text-muted-foreground mt-1">{stat.label}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-2 cursor-pointer group"
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <span className="text-sm text-muted-foreground group-hover:text-primary transition-colors">
            Scroll untuk eksplorasi
          </span>
          <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/50 group-hover:border-primary/50 flex items-start justify-center p-1 transition-colors">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-3 rounded-full bg-primary"
            />
          </div>
          <ChevronDown className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
        </motion.div>
      </motion.div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background via-background/80 to-transparent pointer-events-none z-10" />
    </section>
  )
}
