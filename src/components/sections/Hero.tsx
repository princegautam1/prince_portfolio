"use client";

import { motion } from "framer-motion";
import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import Image from 'next/image';

// Dynamically import 3D background
const ParticlesBackground = dynamic(() => import("@/components/3d/ParticlesBackground"), {
  ssr: false,
  loading: () => <div className="absolute inset-0 -z-10 bg-background" />
});

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex flex-col md:flex-row items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-background to-black/80"></div>
      
      {/* Content container */}
      <div className="container mx-auto px-4 py-12 md:py-0 z-10 flex flex-col md:flex-row items-center justify-between">
        {/* Left content - Text */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="w-full md:w-1/2 md:pr-12 mb-12 md:mb-0"
        >
          <div className="max-w-lg">
            <span className="inline-block py-1 px-3 border border-orange-500/20 bg-orange-500/5 rounded-full text-orange-400 text-xs tracking-wide font-medium mb-6">
              FRONTEND DEVELOPER
            </span>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
                Prince Gautam
              </span>
            </h1>
            
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              I build modern web applications with clean code and exceptional user experiences.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-8">
              <a 
                href="#projects" 
                className="px-6 py-3 bg-orange-600 hover:bg-orange-700 text-white rounded-md transition-colors duration-300 font-medium"
              >
                View Projects
              </a>
              <a 
                href="#contact" 
                className="px-6 py-3 border border-gray-700 hover:border-orange-500 text-white rounded-md transition-colors duration-300"
              >
                Contact Me
              </a>
            </div>
            
            <div className="flex gap-6 items-center">
              <a href="https://github.com/princegautam1" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-orange-500 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
              </a>
              <a href="https://www.linkedin.com/in/prince-gautam-developer" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-orange-500 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
              <a href="https://twitter.com/princegautam" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-orange-500 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
              </a>
            </div>
          </div>
        </motion.div>
        
        {/* Right content - Visual element */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="w-full md:w-1/2 flex justify-center md:justify-end"
        >
          <div className="relative w-full max-w-md aspect-square">
            {/* Background design element */}
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-transparent rounded-full blur-xl"></div>
            
            {/* Code editor mockup */}
            <div className="absolute inset-4 bg-gray-900 rounded-lg overflow-hidden border border-gray-800 shadow-2xl">
              {/* Editor header */}
              <div className="bg-gray-800 px-4 py-2 flex items-center">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="ml-4 text-xs text-gray-400">index.tsx</div>
              </div>
              
              {/* Code content */}
              <div className="p-4 text-xs font-mono text-left">
                <div className="text-gray-500">// Frontend Developer</div>
                <div className="mt-2">
                  <span className="text-purple-400">const </span>
                  <span className="text-blue-400">developer</span>
                  <span className="text-white"> = </span>
                  <span className="text-orange-400">{"{"}</span>
                </div>
                <div className="ml-4">
                  <span className="text-green-400">name</span>
                  <span className="text-white">: </span>
                  <span className="text-yellow-300">'Prince Gautam'</span>
                  <span className="text-white">,</span>
                </div>
                <div className="ml-4">
                  <span className="text-green-400">skills</span>
                  <span className="text-white">: [</span>
                  <span className="text-yellow-300">'React'</span>
                  <span className="text-white">, </span>
                  <span className="text-yellow-300">'Next.js'</span>
                  <span className="text-white">, </span>
                  <span className="text-yellow-300">'TypeScript'</span>
                  <span className="text-white">],</span>
                </div>
                <div className="ml-4">
                  <span className="text-green-400">focus</span>
                  <span className="text-white">: </span>
                  <span className="text-yellow-300">'Beautiful UI/UX'</span>
                </div>
                <div>
                  <span className="text-orange-400">{"}"}</span>
                  <span className="text-white">;</span>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 border border-orange-500/20 rounded-full"></div>
            <div className="absolute -bottom-6 -left-6 w-20 h-20 border border-orange-500/20 rounded-full"></div>
          </div>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center"
        >
          <div className="w-5 h-9 border border-gray-600 rounded-full flex justify-center">
            <div className="w-1 h-1 bg-orange-500 rounded-full mt-2"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 