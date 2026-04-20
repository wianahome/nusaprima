"use client";

import React from "react";
import dynamic from "next/dynamic";

// Import react-p5 secara dinamis agar tidak error di SSR
const Sketch = dynamic(() => import("react-p5").then((mod) => mod.default), {
  ssr: false,
});

interface Particle {
  pos: { x: number; y: number };
  vel: { x: number; y: number };
  color: any;
  update: () => void;
  display: () => void;
}

const HeroBackground: React.FC = () => {
  let particles: Particle[] = [];
  const numParticles = 80; // Dikurangi sedikit agar performa lebih ringan
  const maxDistance = 150;

  const setup = (p5: any, canvasParentRef: Element) => {
    p5.createCanvas(p5.windowWidth, p5.windowHeight).parent(canvasParentRef);
    
    particles = [];
    for (let i = 0; i < numParticles; i++) {
      particles.push(new ParticleClass(p5));
    }
  };

  const draw = (p5: any) => {
    p5.clear();
    // Warna background semi-transparan (Opsional: sesuaikan dengan tema webmu)
    p5.background(10, 10, 10, 150);

    for (let i = 0; i < particles.length; i++) {
      particles[i].update();
      particles[i].display();

      for (let j = i + 1; j < particles.length; j++) {
        const d = p5.dist(
          particles[i].pos.x,
          particles[i].pos.y,
          particles[j].pos.x,
          particles[j].pos.y
        );

        if (d < maxDistance) {
          const alpha = p5.map(d, 0, maxDistance, 100, 0);
          p5.stroke(34, 211, 238, alpha); // Cyan-400
          p5.strokeWeight(1);
          p5.line(
            particles[i].pos.x,
            particles[i].pos.y,
            particles[j].pos.x,
            particles[j].pos.y
          );
        }
      }
    }
  };

  const windowResized = (p5: any) => {
    p5.resizeCanvas(p5.windowWidth, p5.windowHeight);
  };

  // Class diletakkan di dalam atau di luar komponen
  class ParticleClass implements Particle {
    p5: any;
    pos: { x: number; y: number };
    vel: { x: number; y: number };
    color: any;

    constructor(p5: any) {
      this.p5 = p5;
      this.pos = { x: p5.random(p5.width), y: p5.random(p5.height) };
      this.vel = { x: p5.random(-0.5, 0.5), y: p5.random(-0.5, 0.5) };

      let r = p5.random(1);
      if (r < 0.5) this.color = p5.color(34, 211, 238); // Cyan
      else if (r < 0.8) this.color = p5.color(251, 191, 36); // Amber
      else this.color = p5.color(255);
    }

    update() {
      this.pos.x += this.vel.x;
      this.pos.y += this.vel.y;

      if (this.pos.x < 0 || this.pos.x > this.p5.width) this.vel.x *= -1;
      if (this.pos.y < 0 || this.pos.y > this.p5.height) this.vel.y *= -1;
    }

    display() {
      this.p5.noStroke();
      this.p5.fill(this.color);
      this.p5.ellipse(this.pos.x, this.pos.y, 3);
    }
  }

  return (
    <div className="fixed inset-0 -z-10 w-full h-full">
      <Sketch setup={setup} draw={draw} windowResized={windowResized} />
    </div>
  );
};

export default HeroBackground;