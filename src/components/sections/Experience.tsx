"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const experiences = [
  {
    title: "Front-end Developer",
    company: "Infograins Software Solutions Pvt. Ltd.",
    period: "June (2024) - Present",
    technologies: ["React", "Next.js", "TypeScript", "JavaScript"],
    description: "Developing responsive and user-friendly web applications using modern front-end technologies. Collaborating with cross-functional teams to deliver high-quality software solutions that meet client requirements.",
    image: "/experience/infograins.jpg"
  },
  {
    title: "Web Development Intern",
    company: "Bharat Intern",
    period: "Jul 2023 - Aug 2023",
    technologies: ["HTML", "CSS", "JavaScript",],
    description: "Assisted in developing and maintaining websites, gaining hands-on experience with front-end technologies and responsive design principles.",
    image: "https://bharatintern.live/b/img/logo/logoForInternship.jpg"
  }
];

const education = [
  {
    degree: "B.Tech in Computer Science Engineering",
    institution: "Shri Ram Institute of Science and Technology",
    period: "2020 - 2024",
    description: "Specialized in computer science with a focus on software development and web technologies. Participated in coding competitions and tech events.",
    percentage: "77.1%",
    image: "/education/srist.jpg"
  },
  {
    degree: "Higher Secondary Education",
    institution: "Govt School",
    period: "2020",
    description: "Completed higher secondary education with a focus on science and mathematics, laying a strong foundation for engineering studies.",
    percentage: "79%", 
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCH89CcUZkp_H30K9msBtQoepvDsLYZo24Vw&usqp=CAU"
  },
  {
    degree: "Secondary Education",
    institution: "Govt School",
    period: "2018",
    description: "Successfully completed secondary education with strong academic performance in core subjects.",
    percentage: "81%", 
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCH89CcUZkp_H30K9msBtQoepvDsLYZo24Vw&usqp=CAU"
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-accent/5 rounded-full blur-3xl opacity-50"></div>
      <div className="absolute bottom-12 -left-24 w-64 h-64 bg-accent/5 rounded-full blur-3xl opacity-50"></div>
      
      <div className="container px-4 mx-auto relative">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-6xl mx-auto"
        >
          {/* Experience Section */}
          <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center">
            Work <span className="gradient-text">Experience</span>
          </h2>
          
          <div className="mb-24 relative">
            {/* Timeline decorative line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-accent/20 hidden md:block transform -translate-x-1/2 z-0"></div>
            
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="mb-20 last:mb-0 relative z-10"
              >
                {/* Timeline dot indicator */}
                <div className="absolute left-1/2 top-1/3 w-4 h-4 bg-accent rounded-full hidden md:block transform -translate-x-1/2 z-20 shadow-lg shadow-accent/20"></div>
                
                <div className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8 md:gap-16`}>
                  <div className="w-full md:w-5/12 flex justify-center">
                    <div className="relative w-64 h-64 rounded-2xl overflow-hidden shadow-xl group">
                      <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-accent/0 z-10 opacity-40 group-hover:opacity-60 transition-opacity duration-300"></div>
                      <Image 
                        src={exp.image}
                        alt={exp.company}
                        fill
                        className="object-contain transition-transform duration-500 group-hover:scale-110"
                        sizes="(max-width: 768px) 100vw, 40vw"
                        unoptimized={exp.image.startsWith("https://")}
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-accent/10 backdrop-blur-sm py-2 px-4 text-center font-medium text-sm z-10 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                        {exp.period}
                      </div>
                    </div>
                  </div>
                  
                  <div className="w-full md:w-7/12">
                    <div className="bg-card border border-border rounded-xl p-6 hover:shadow-lg shadow-lg hover:shadow-accent/10 transition-all duration-300 relative overflow-hidden">
                      {/* Corner decoration */}
                      <div className="absolute top-0 right-0 w-16 h-16 bg-accent/5 -rotate-45 transform translate-x-4 -translate-y-4"></div>
                      
                      <div className="flex flex-col md:flex-row justify-between mb-3">
                        <h3 className="text-2xl font-bold text-accent relative">
                          {exp.title}
                          <span className="absolute -bottom-1 left-0 w-16 h-0.5 bg-accent/30"></span>
                        </h3>
                        <span className="text-foreground/70 text-sm mt-1 md:mt-0 px-3 py-1 bg-accent/5 rounded-full self-start border border-accent/10">{exp.period}</span>
                      </div>
                      
                      <h4 className="text-xl font-medium mb-4">{exp.company}</h4>
                      
                      <p className="text-foreground/80 mb-5 leading-relaxed">{exp.description}</p>
                      
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <span 
                            key={techIndex} 
                            className="px-3 py-1 text-sm bg-accent/10 text-accent rounded-full border border-accent/10 hover:bg-accent/20 transition-colors duration-200 cursor-default"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Education Section */}
          <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center">
            <span className="gradient-text">Education</span>
          </h2>
          
          <div className="relative">
            {/* Timeline decorative line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-accent/20 hidden md:block transform -translate-x-1/2 z-0"></div>
            
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="mb-20 last:mb-0 relative z-10"
              >
                {/* Timeline dot indicator */}
                <div ></div>
                
                <div className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8 md:gap-16`}>
                  <div className="w-full md:w-5/12 flex justify-center">
                    <div className="relative w-64 h-64 rounded-2xl overflow-hidden shadow-xl group">
                      <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-accent/0 z-10 opacity-40 group-hover:opacity-60 transition-opacity duration-300"></div>
                      <Image 
                        src={edu.image}
                        alt={edu.institution}
                        fill
                        className="object-contain transition-transform duration-500 group-hover:scale-110"
                        sizes="(max-width: 768px) 100vw, 40vw"
                        unoptimized={edu.image.startsWith("https://")}
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-accent/10 backdrop-blur-sm py-2 px-4 text-center font-medium text-sm z-10 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                        {edu.period}
                      </div>
                    </div>
                  </div>
                  
                  <div className="w-full md:w-7/12">
                    <div className="bg-card border border-border rounded-xl p-6 hover:shadow-lg shadow-lg hover:shadow-accent/10 transition-all duration-300 relative overflow-hidden">
                      {/* Corner decoration */}
                      <div className="absolute top-0 right-0 w-16 h-16 bg-accent/5 -rotate-45 transform translate-x-4 -translate-y-4"></div>
                      
                      <div className="flex flex-col md:flex-row justify-between mb-3">
                        <h3 className="text-2xl font-bold text-accent relative">
                          {edu.degree}
                          <span className="absolute -bottom-1 left-0 w-16 h-0.5 bg-accent/30"></span>
                        </h3>
                        <span className="text-foreground/70 text-sm mt-1 md:mt-0 px-3 py-1 bg-accent/5 rounded-full self-start border border-accent/10">{edu.period}</span>
                      </div>
                      
                      <h4 className="text-xl font-medium mb-4">{edu.institution}</h4>
                      
                      <p className="text-foreground/80 mb-4 leading-relaxed">{edu.description}</p>
                      
                      <div className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium border border-accent/10 hover:bg-accent/20 transition-colors duration-200 cursor-default">
                        Percentage: {edu.percentage}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
} 