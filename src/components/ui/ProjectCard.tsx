"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  image?: string;
  liveUrl: string;
  githubUrl: string;
}

export default function ProjectCard({
  title,
  description,
  tags,
  image,
  liveUrl,
  githubUrl,
}: ProjectCardProps) {
  const [hovered, setHovered] = useState(false);
  
  // Mouse position for 3D effect
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  // Smooth spring physics for the card rotation - reducing rotation values for subtler effect
  const rotateX = useSpring(useTransform(y, [-100, 100], [3, -3]), { stiffness: 300, damping: 30 });
  const rotateY = useSpring(useTransform(x, [-100, 100], [-3, 3]), { stiffness: 300, damping: 30 });
  
  // Brightness and scale effects - slightly increased scale for better hover effect
  const brightness = useTransform(y, [-100, 100], [1.15, 0.95]);
  const scale = useSpring(hovered ? 1.03 : 1, { stiffness: 500, damping: 30 });
  
  function handleMouseMove(event: React.MouseEvent<HTMLDivElement>) {
    // Get position of the card
    const rect = event.currentTarget.getBoundingClientRect();
    
    // Calculate mouse position relative to the card center
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    // Update motion values
    x.set(event.clientX - centerX);
    y.set(event.clientY - centerY);
  }
  
  function handleMouseLeave() {
    // Reset card position when mouse leaves
    x.set(0);
    y.set(0);
    setHovered(false);
  }

  return (
    <motion.div
      className="relative perspective-1000 w-full"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={() => setHovered(true)}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
    >
      <motion.div
        className="relative w-full overflow-hidden rounded-xl glass-card border border-white/10 h-[430px] transform-style-3d shadow-lg shadow-orange-500/10"
        style={{
          rotateX,
          rotateY,
          filter: `brightness(${brightness})`,
          scale
        }}
      >
        {/* Enhanced glow effect with better blur */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-r from-orange-500/0 via-orange-600/30 to-orange-500/0 opacity-0 blur-xl transition-opacity duration-500 z-10"
          animate={{ opacity: hovered ? 0.6 : 0 }}
        />
        
        {/* Project Preview with improved overlay */}
        <div className="h-48 bg-gradient-to-r from-orange-900/30 to-orange-800/30 relative overflow-hidden group">
          {image ? (
            <>
              <Image 
                src={image} 
                alt={title}
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </>
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.h3 
                className="text-2xl font-heading text-white/50"
                animate={{ 
                  y: [0, -5, 0],
                  opacity: [0.5, 0.7, 0.5] 
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                {title}
              </motion.h3>
            </div>
          )}
          
          <motion.div 
            className="absolute top-3 right-3 z-20 bg-orange-600/90 text-white text-xs font-medium py-1 px-3 rounded-full backdrop-blur-sm shadow-sm"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            Featured
          </motion.div>
        </div>
        
        {/* Content with improved spacing and typography */}
        <div className="p-6">
          <h3 className="text-xl font-bold font-heading mb-3 text-orange-500">{title}</h3>
          
          <p className="text-foreground/80 text-sm mb-4 line-clamp-2">{description}</p>
          
          <div className="flex flex-wrap gap-2 mb-5">
            {tags.map((tag, index) => (
              <motion.span 
                key={index}
                whileHover={{ y: -2, backgroundColor: "rgba(239, 96, 0, 0.15)" }}
                className="px-2.5 py-1 text-xs bg-white/5 text-orange-400 rounded-full border border-orange-500/30 transition-colors"
              >
                {tag}
              </motion.span>
            ))}
          </div>
          
          <div className="flex gap-3 mt-auto pt-3">
            <motion.a 
              href={liveUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex-1 px-4 py-2.5 bg-orange-600 text-white text-sm rounded-lg text-center hover:bg-orange-500 transition-all hover:shadow-lg hover:shadow-orange-600/30 flex items-center justify-center gap-1.5 group"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              onClick={(e) => {
                e.preventDefault();
                window.open(liveUrl, '_blank', 'noopener,noreferrer');
              }}
            >
              <span>Live Demo</span>
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="16" 
                height="16" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                className="transition-transform group-hover:translate-x-1"
              >
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                <polyline points="15 3 21 3 21 9"/>
                <line x1="10" y1="14" x2="21" y2="3"/>
              </svg>
            </motion.a>
            <motion.a 
              href={githubUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex-1 px-4 py-2.5 border border-white/20 hover:border-orange-500/40 text-sm rounded-lg text-center hover:bg-orange-500/10 transition-all flex items-center justify-center gap-1.5 group"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              onClick={(e) => {
                e.preventDefault();
                window.open(githubUrl, '_blank', 'noopener,noreferrer');
              }}
            >
              <span>GitHub</span>
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="16" 
                height="16" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                className="transition-transform group-hover:translate-x-1"
              >
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
                <path d="M9 18c-4.51 2-5-2-7-2"/>
              </svg>
            </motion.a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
} 