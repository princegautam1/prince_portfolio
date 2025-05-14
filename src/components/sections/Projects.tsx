"use client";

import { motion } from "framer-motion";
import ProjectCard from "@/components/ui/ProjectCard";

const projects = [
  {
    title: "Zakaa Education",
    description: `Zakaa is a government project developed for the Saudi Arabian authorities, aimed at managing and monitoring infrastructure initiatives such as road construction, maintenance, and public development schemes — similar to programs like "PM Gati Shakti" in India. The platform provides real-time tracking, data management, and transparent reporting for government departments to efficiently plan and execute projects. Built using Next.js, TypeScript, MongoDB, and Tailwind CSS, Zakaa offers a modern, secure, and responsive interface tailored for administrative workflows and smart infrastructure planning.`,
    image: "/projects/placeholder4.jpg",
    tags: ["Next.js", "TypeScript"],
    liveUrl: "https://zakaa.onalpha.co/planning/login",
    githubUrl: "https://github.com/princegautam1"
  },
  {
    title: "Start Naukri",
    description: "Start Naukri is a modern job portal designed to connect job seekers with employers across various industries. Built with React and JavaScript, the platform offers advanced search filters, real-time notifications, and user-friendly profile management. It streamlines the recruitment process by providing features like resume uploads, job alerts, and employer dashboards, ensuring an efficient and seamless job search experience.",
    image: "/projects/placeholder1.jpg",
    tags: ["React", "JavaScript", "API Integration"],
    liveUrl: "https://startnaukri.com/",
    githubUrl: "https://github.com/princegautam1"
  },
  {
    title: "Amber Connect",
    description: "Amber Connect is a telematics-based vehicle tracking platform redesigned from a static HTML/CSS/JS site into a dynamic, high-performance web application using Next.js and TypeScript. It enables real-time GPS tracking, vehicle diagnostics, driver behavior analysis, and smart alerts. The revamp focused on improving speed, user experience, and scalability while incorporating modern UI design and seamless data handling for fleet and individual vehicle management.",
    image: "/projects/placeholder2.jpg",
    tags: ["Next.js", "TypeScript", "SEO"] ,
    liveUrl: "https://amberconnect.ai/",
    githubUrl: "https://github.com/princegautam1"
  },
  {
    title: "Infosense AI",
    description: "Infosense AI is a cutting-edge company website built using Next.js and TypeScript, offering a sleek, modern user interface and dynamic animations. The site integrates AI-powered features to enhance user engagement and is optimized for search engine visibility, ensuring better discoverability. With a focus on performance, the platform provides an intuitive experience, blending sophisticated design with robust functionality.",
    image: "/projects/placeholder3.jpg",
    tags: ["Next.js", "TypeScript", "SEO"],
    liveUrl: "https://www.infosense.tech/",
    githubUrl: "https://github.com/princegautam1"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-28 relative overflow-hidden">
      {/* Enhanced background gradients */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-radial from-orange-900/30 to-transparent opacity-70"></div>
        
        <motion.div
          animate={{ 
            opacity: [0.5, 0.8, 0.5],
            scale: [1, 1.1, 1],
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity,
            repeatType: "reverse" 
          }}
          className="absolute top-0 left-0 w-3/4 h-1/2 bg-gradient-to-r from-orange-500/15 to-transparent blur-3xl"
        />
        
        <motion.div
          animate={{ 
            opacity: [0.5, 0.8, 0.5],
            scale: [1, 1.1, 1],
          }}
          transition={{ 
            duration: 15, 
            repeat: Infinity,
            repeatType: "reverse",
            delay: 2,
          }}
          className="absolute bottom-0 right-0 w-3/4 h-1/2 bg-gradient-to-l from-orange-600/15 to-transparent blur-3xl"
        />
      </div>

      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-bold mb-8 text-center font-heading neon-glow"
          >
            Featured <span className="gradient-text">Projects</span>
          </motion.h2>
          
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="h-0.5 w-28 bg-gradient-to-r from-transparent via-orange-500/80 to-transparent mx-auto mb-6"></div>
          </motion.div>
          
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center text-foreground/80 max-w-3xl mx-auto mb-16 text-lg"
          >
            Explore my portfolio of innovative web applications and websites that showcase my expertise in modern web technologies.
          </motion.p>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, staggerChildren: 0.1 }}
          >
            {projects.map((project, index) => (
              <ProjectCard 
                key={index}
                title={project.title}
                description={project.description}
                tags={project.tags}
                image={project.image}
                liveUrl={project.liveUrl}
                githubUrl={project.githubUrl}
              />
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-20 text-center"
          >
            <a
              href="https://github.com/princegautam1"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-lg neon-button text-white font-medium tracking-wide inline-block hover:scale-105 transition-transform shadow-lg shadow-orange-600/20"
            >
              View More Projects on GitHub
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 