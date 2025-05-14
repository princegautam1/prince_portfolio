"use client";

import { useState } from "react";
import { motion } from "framer-motion";

interface FlipCardProps {
  frontContent: React.ReactNode;
  backContent: React.ReactNode;
  className?: string;
}

export default function FlipCard({ frontContent, backContent, className = "" }: FlipCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  function handleFlip() {
    if (!isAnimating) {
      setIsFlipped(!isFlipped);
      setIsAnimating(true);
    }
  }

  return (
    <div
      className={`flip-card relative w-full h-60 cursor-pointer perspective-1000 ${className}`}
      onClick={handleFlip}
    >
      <motion.div
        className="flip-card-inner relative w-full h-full transform-style-3d transition-transform"
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.7, ease: "easeInOut", onComplete: () => setIsAnimating(false) }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Front */}
        <motion.div
          className="flip-card-front absolute w-full h-full glass-card p-6 rounded-xl flex flex-col items-center justify-center backface-hidden border border-white/10 shadow-lg shadow-orange-500/10"
          style={{ backfaceVisibility: "hidden" }}
          whileHover={{ boxShadow: "0 6px 20px rgba(240, 88, 0, 0.15)" }}
        >
          <motion.div 
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            {frontContent}
          </motion.div>
        </motion.div>

        {/* Back */}
        <motion.div
          className="flip-card-back absolute w-full h-full glass-card p-6 rounded-xl flex flex-col items-center justify-center backface-hidden border border-white/10 shadow-lg shadow-orange-500/10"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          {backContent}
        </motion.div>
      </motion.div>
    </div>
  );
} 