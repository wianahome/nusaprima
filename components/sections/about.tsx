'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Target, Users, Lightbulb, Rocket, Shield, HeartHandshake } from 'lucide-react'
import React from "react";
import dynamic from "next/dynamic";

const Sketch = dynamic(() => import("react-p5").then((mod) => mod.default), {
  ssr: false,
});

const features = [
  {
    icon: Target,
    title: 'Fokus pada Hasil',
    description: 'Setiap proyek dirancang untuk mencapai tujuan bisnis Anda dengan strategi yang terukur.',
  },
  {
    icon: Users,
    title: 'Tim Profesional',
    description: 'Developer dan designer berpengalaman yang memahami kebutuhan pasar Indonesia.',
  },
  {
    icon: Lightbulb,
    title: 'Inovasi Berkelanjutan',
    description: 'Selalu mengikuti tren teknologi terbaru untuk solusi yang future-proof.',
  },
  {
    icon: Rocket,
    title: 'Pengerjaan Cepat',
    description: 'Proses development yang efisien dengan timeline yang jelas dan transparan.',
  },
  {
    icon: Shield,
    title: 'Keamanan Terjamin',
    description: 'Implementasi standar keamanan terbaik untuk melindungi data dan aset digital Anda.',
  },
  {
    icon: HeartHandshake,
    title: 'Dukungan Penuh',
    description: 'Layanan after-sales dan maintenance untuk memastikan website Anda selalu optimal.',
  },
]

export function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  // Variabel untuk animasi
  let rotation = 0;

  const setup = (p5: any, canvasParentRef: Element) => {
    // Ukuran disesuaikan dengan kontainer (aspect-video)
    const width = canvasParentRef.clientWidth;
    const height = canvasParentRef.clientHeight;
    p5.createCanvas(width, height, p5.WEBGL).parent(canvasParentRef);
  };

  const draw = (p5: any) => {
    p5.clear();
    p5.background(0, 0, 0, 0); 

    p5.rotateY(rotation);
    p5.rotateX(rotation * 0.2);
    rotation += 0.005;

    p5.noFill();
    p5.strokeWeight(0.5);
    p5.stroke(34, 211, 238, 50); 
    p5.sphere(105); // Ukuran diperkecil agar pas di dalam box

    p5.strokeWeight(1.2);
    p5.stroke(34, 211, 238, 200); 
    p5.sphere(100, 18, 18); 

    p5.push();
    p5.rotateX(p5.HALF_PI);
    p5.strokeWeight(1);
    p5.stroke(251, 191, 36, 120); 
    p5.ellipse(0, 0, 220, 220, 40);
    p5.pop();

    let scanY = p5.sin(p5.frameCount * 0.02) * 100;
    p5.push();
    p5.translate(0, scanY, 0);
    p5.rotateX(p5.HALF_PI);
    p5.stroke(34, 211, 238, 150);
    p5.strokeWeight(1);
    p5.ellipse(0, 0, 110, 110);
    p5.pop();
  };

  const windowResized = (p5: any) => {
    // Mencari parent element lagi untuk resize yang akurat
    const parent = document.getElementById('globe-container');
    if (parent) {
      p5.resizeCanvas(parent.clientWidth, parent.clientHeight);
    }
  };

  return (
    <section id="about" className="py-20 lg:py-32 relative bg-black">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-400/5 to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-cyan-400/10 text-cyan-400 text-sm font-medium mb-4">
            Tentang Kami
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Mengapa Memilih{' '}
            <span className="text-cyan-400">Nusaprima Digital</span>?
          </h2>
          <p className="text-lg text-amber-50 max-w-2xl mx-auto text-pretty">
            Kami adalah partner digital yang berkomitmen untuk membantu bisnis Indonesia
            berkembang melalui solusi teknologi yang inovatif dan terjangkau.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-6 lg:p-8 rounded-2xl bg-card/30 backdrop-blur-sm border border-border/50 hover:border-cyan-400/30 hover:bg-card/50 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-cyan-400/10 flex items-center justify-center mb-4 group-hover:bg-cyan-400/20 transition-colors">
                <feature.icon className="w-6 h-6 text-amber-400" />
              </div>
              <h3 className="text-xl font-semibold text-cyan-400 mb-2">
                {feature.title}
              </h3>
              <p className="!text-amber-50">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 p-8 lg:p-12 rounded-3xl bg-gradient-to-br from-cyan-400/10 via-card/50 to-cyan-400/5 border border-cyan-400/20"
        >
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
                5+ Tahun Pengalaman dalam Industri Digital
              </h3>
              <p className="text-amber-50 mb-6 text-pretty">
                Sejak 2019, kami telah membantu ratusan bisnis dari berbagai industri
                untuk membangun presence digital yang kuat. Dari UMKM hingga enterprise,
                kami memiliki solusi yang tepat untuk setiap kebutuhan.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: '500+', label: 'Proyek Selesai' },
                  { value: '200+', label: 'Klien Puas' },
                  { value: '15+', label: 'Tim Expert' },
                  { value: '24/7', label: 'Support' },
                ].map((stat) => (
                  <div key={stat.label} className="text-center p-4 rounded-xl bg-background/50">
                    <div className="text-2xl font-bold text-cyan-400">{stat.value}</div>
                    <div className="text-sm text-amber-50">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
  {/* Globe Container dengan tinggi yang ditinggikan pada mobile */}
  <div 
    id="globe-container"
    className="h-[300px] md:aspect-video rounded-2xl bg-cyan-400/5 border border-cyan-400/20 flex flex-col items-center justify-center overflow-hidden relative"
  >
    <div className="absolute inset-0 mb-10 flex items-center justify-center">
      <Sketch setup={setup} draw={draw} windowResized={windowResized} />
    </div>

    <div className="absolute bottom-6 w-full text-center z-20 px-2">
      <p className="text-amber-400 font-medium tracking-wide text-xs md:text-base uppercase shadow-lg">
        Inovasi Tanpa Batas
      </p>
    </div>
  </div>
</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}