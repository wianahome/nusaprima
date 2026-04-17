'use client'

import { useEffect, useRef } from 'react'
import p5 from 'p5'

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  size: number
  alpha: number
  connections: number[]
}

export function P5Background() {
  const containerRef = useRef<HTMLDivElement>(null)
  const p5Instance = useRef<p5 | null>(null)

  useEffect(() => {
    if (!containerRef.current) return

    const sketch = (p: p5) => {
      const particles: Particle[] = []
      const numParticles = 80
      const connectionDistance = 150
      const primaryColor = { r: 20, g: 184, b: 166 }

      p.setup = () => {
        const canvas = p.createCanvas(p.windowWidth, p.windowHeight)
        canvas.style('position', 'fixed')
        canvas.style('top', '0')
        canvas.style('left', '0')
        canvas.style('z-index', '-1')
        canvas.style('pointer-events', 'none')

        for (let i = 0; i < numParticles; i++) {
          particles.push({
            x: p.random(p.width),
            y: p.random(p.height),
            vx: p.random(-0.5, 0.5),
            vy: p.random(-0.5, 0.5),
            size: p.random(2, 4),
            alpha: p.random(50, 150),
            connections: []
          })
        }
      }

      p.draw = () => {
        p.clear()
        
        for (let i = 0; i < particles.length; i++) {
          const particle = particles[i]
          
          particle.x += particle.vx
          particle.y += particle.vy

          if (particle.x < 0 || particle.x > p.width) particle.vx *= -1
          if (particle.y < 0 || particle.y > p.height) particle.vy *= -1

          particle.x = p.constrain(particle.x, 0, p.width)
          particle.y = p.constrain(particle.y, 0, p.height)

          for (let j = i + 1; j < particles.length; j++) {
            const other = particles[j]
            const d = p.dist(particle.x, particle.y, other.x, other.y)
            
            if (d < connectionDistance) {
              const alpha = p.map(d, 0, connectionDistance, 80, 0)
              p.stroke(primaryColor.r, primaryColor.g, primaryColor.b, alpha)
              p.strokeWeight(0.5)
              p.line(particle.x, particle.y, other.x, other.y)
            }
          }

          p.noStroke()
          p.fill(primaryColor.r, primaryColor.g, primaryColor.b, particle.alpha)
          p.ellipse(particle.x, particle.y, particle.size)

          const glowSize = particle.size * 3
          for (let g = 0; g < 3; g++) {
            const glowAlpha = (particle.alpha / 10) * (1 - g / 3)
            p.fill(primaryColor.r, primaryColor.g, primaryColor.b, glowAlpha)
            p.ellipse(particle.x, particle.y, glowSize * (1 + g * 0.5))
          }
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

  return <div ref={containerRef} className="fixed inset-0 -z-10 pointer-events-none" />
}
