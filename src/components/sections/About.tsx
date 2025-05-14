"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10 opacity-70">
        <div className="absolute top-0 -right-40 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 -left-40 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto"
          ref={containerRef}
        >
          <motion.h2 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-bold mb-16 text-center font-heading neon-glow"
          >
            About <span className="gradient-text">Me</span>
          </motion.h2>
          
          <div className="grid md:grid-cols-2 gap-10 items-center">
            {/* Left Column - Profile Photo with holographic effect */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex justify-center"
            >
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-500 rounded-full opacity-60 blur-lg group-hover:opacity-100 transition duration-1000"></div>
                <div className="relative w-64 h-64 md:w-80 md:h-80 overflow-hidden rounded-full border-2 border-white/20 glass-card">
                  <Image 
                    src="/images/prince photo.jpg"
                    alt="Prince Gautam"
                    fill
                    priority
                    className="object-cover z-10"
                    sizes="(max-width: 768px) 256px, 320px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-full z-20" />
                </div>
              </div>
            </motion.div>
            
            {/* Right Column - About Text */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="glass-card p-8 border border-white/10 relative overflow-hidden"
              >
                {/* Animated glow effect */}
                <div className="absolute -inset-[1px] bg-gradient-to-r from-transparent via-purple-500/20 to-transparent blur-sm animate-glow"></div>
                
                <p className="text-xl mb-6 font-medium text-white/90 leading-relaxed">
                "I build front-ends that transform ideas into futuristic digital experiences."


                </p>
                
                <p className="text-base mb-6 text-white/70 leading-relaxed">
                  With a keen eye for design and a strong understanding of modern web technologies, I create responsive, fast, and user-friendly applications that deliver exceptional user experiences.
                </p>
                
                <p className="text-base text-white/70 leading-relaxed">
                  My goal is to build digital solutions that not only look great but also perform excellently across all devices and platforms, using cutting-edge technologies like React, Next.js, and TypeScript.
                </p>
              </motion.div>
              
              <div className="mt-8 flex gap-4">
                <motion.a 
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                  href="https://github.com/princegautam1" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-lg neon-button text-white font-medium tracking-wide"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  GitHub
                </motion.a>
                
                <motion.a 
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.9 }}
                  href="#contact" 
                  className="px-6 py-3 rounded-lg border border-white/10 hover:border-white/30 backdrop-blur-sm transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get in Touch
                </motion.a>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 