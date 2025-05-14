"use client";

import { motion } from "framer-motion";
import FlipCard from "@/components/ui/FlipCard";

const skills = [
  { 
    name: "HTML",
    icon: "💻",
    description: "Expert in semantic markup and HTML5 features for building accessible web applications." 
  },
  { 
    name: "CSS",
    icon: "🎨",
    description: "Proficient in modern CSS, including Flexbox, Grid, and CSS variables for dynamic styling." 
  },
  { 
    name: "JavaScript",
    icon: "🧠",
    description: "Deep knowledge of ES6+, asynchronous programming, and modern JavaScript patterns." 
  },
  { 
    name: "React",
    icon: "⚛️",
    description: "Advanced skills in React, including Hooks, Context API, and performance optimization." 
  },
  { 
    name: "Next.js",
    icon: "⚡",
    description: "Specialized in Next.js App Router, SSR, ISR and optimized rendering techniques." 
  },
  { 
    name: "TypeScript",
    icon: "📝",
    description: "Strong typing advocate with extensive experience in complex TypeScript applications." 
  },
  // { 
  //   name: "Tailwind CSS",
  //   icon: "🌊",
  //   description: "Expert in utility-first CSS and building comprehensive design systems with Tailwind." 
  // },
  { 
    name: "Git",
    icon: "🔄",
    description: "Version control expert with experience in complex branching strategies and workflows." 
  },
  { 
    name: "GitHub",
    icon: "🐙",
    description: "Proficient with GitHub workflows, Actions for CI/CD, and collaborative development." 
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative">
      {/* Enhanced background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-radial from-orange-900/20 to-transparent opacity-50"></div>
        
        <motion.div 
          animate={{ 
            y: [0, -30, 0],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{ 
            duration: 15, 
            repeat: Infinity,
            repeatType: "reverse" 
          }}
          className="absolute top-20 -right-40 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"
        />
        
        <motion.div 
          animate={{ 
            y: [0, 30, 0],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{ 
            duration: 18, 
            repeat: Infinity,
            repeatType: "reverse" 
          }}
          className="absolute -bottom-20 -left-40 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl"
        />
      </div>
      
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center font-heading neon-glow">
            My <span className="gradient-text">Skills</span>
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <FlipCard
                  frontContent={
                    <div className="text-center">
                      <span className="text-5xl mb-5 block">{skill.icon}</span>
                      <h3 className="text-xl font-medium font-heading gradient-text">{skill.name}</h3>
                    </div>
                  }
                  backContent={
                    <div className="text-center">
                      <p className="text-sm text-foreground/90 font-body">{skill.description}</p>
                    </div>
                  }
                  className="hover:shadow-lg hover:shadow-orange-500/10 transition-shadow duration-300"
                />
              </motion.div>
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-20 text-center"
          >
            <div className="h-0.5 w-28 bg-gradient-to-r from-transparent via-orange-500/80 to-transparent mx-auto mb-8"></div>
            <p className="text-foreground/80 font-body max-w-2xl mx-auto">
              I'm constantly exploring new technologies and expanding my skillset to stay at the forefront of modern web development.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 