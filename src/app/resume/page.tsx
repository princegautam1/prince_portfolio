"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import Head from "next/head";

export default function Resume() {
  const handlePrint = () => {
    window.print();
  };

  // Add schema.org structured data for better SEO
  useEffect(() => {
    const schema = {
      "@context": "https://schema.org/",
      "@type": "Person",
      "name": "Prince Gautam",
      "url": "https://princegautam.com/resume",
      "jobTitle": "Front-end Developer",
      "worksFor": {
        "@type": "Organization",
        "name": "Infograins Software Solutions"
      },
      "alumniOf": [
        {
          "@type": "CollegeOrUniversity",
          "name": "Shri Ram Institute of Science and Technology, Jabalpur"
        }
      ],
      "knowsAbout": ["React.js", "Next.js", "TypeScript", "JavaScript", "HTML", "CSS", "Redux", "SQL"],
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Barhi",
        "addressRegion": "Katni, Madhya Pradesh",
        "addressCountry": "India"
      }
    };

    // Add the schema data to the document head
    const scriptElement = document.createElement('script');
    scriptElement.type = 'application/ld+json';
    scriptElement.text = JSON.stringify(schema);
    document.head.appendChild(scriptElement);

    return () => {
      document.head.removeChild(scriptElement);
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8 print:p-0 mt-20">
        <div className="mb-8 flex flex-col sm:flex-row justify-between items-center gap-4 print-hide">
          <div className="flex items-center gap-3">
            <Link 
              href="/"
              className="flex items-center gap-2 bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200 px-3 py-1.5 rounded hover:bg-gray-300 dark:hover:bg-gray-600 text-sm"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 12H5M12 19l-7-7 7-7"/>
              </svg>
              Back to Home
            </Link>
            <h1 className="text-3xl md:text-4xl font-bold">Resume</h1>
          </div>
          <div className="flex flex-wrap gap-3 w-full sm:w-auto justify-center sm:justify-end mt-4 sm:mt-0">
            <button 
              onClick={handlePrint}
              className="flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90 transition-colors w-full sm:w-auto justify-center"
            >
              {/* <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="6 9 6 2 18 2 18 9"></polyline>
                <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path>
                <rect x="6" y="14" width="12" height="8"></rect>
              </svg> */}
             
            </button>
            <Link 
              href="/resume/qr"
              className="flex items-center gap-2 bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-700 transition-colors w-full sm:w-auto justify-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="7" height="7"></rect>
                <rect x="14" y="3" width="7" height="7"></rect>
                <rect x="14" y="14" width="7" height="7"></rect>
                <rect x="3" y="14" width="7" height="7"></rect>
              </svg>
              Resume QR Code
            </Link>
          </div>
        </div>

        <div className="bg-card p-4 sm:p-8 rounded-lg shadow-md print:shadow-none print:border print:p-4">
          {/* Resume Header */}
          <div className="mb-8 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold mb-2">PRINCE GAUTAM</h2>
            <p className="text-lg sm:text-xl mb-4">FRONT-END DEVELOPER</p>
            <div className="flex flex-col sm:flex-row justify-center gap-2 sm:gap-4 flex-wrap">
              <a href="tel:+919630940880" className="flex items-center gap-1 hover:text-primary transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                +91 9630940880
              </a>
              <a href="mailto:princegautam8764@gmail.com" className="flex items-center gap-1 hover:text-primary transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                princegautam8764@gmail.com
              </a>
              <span className="flex items-center gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                Barhi, Dist. Katni, Madhya Pradesh, India
              </span>
            </div>
            
            {/* Social links for mobile */}
            <div className="flex justify-center gap-4 mt-4">
              <a href="https://www.linkedin.com/in/prince-gautam-developer" target="_blank" rel="noopener noreferrer" className="text-foreground/80 hover:text-primary transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              <a href="https://github.com/princegautam1" target="_blank" rel="noopener noreferrer" className="text-foreground/80 hover:text-primary transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </a>
            </div>
          </div>

          {/* Summary */}
          <section className="mb-8">
            <h3 className="text-xl font-bold border-b pb-2 mb-4">SUMMARY</h3>
            <p className="text-base sm:text-lg">
              Motivated and detail-oriented Front-end Developer with hands-on experience in building scalable web applications using React.js and Next.js. Skilled at collaborating with cross-functional teams to design and implement interactive user interfaces and improve overall project performance.
            </p>
          </section>

          {/* Work Experience */}
          <section className="mb-8">
            <h3 className="text-xl font-bold border-b pb-2 mb-4">WORK EXPERIENCE</h3>
            <div className="mb-6">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2">
                <h4 className="text-lg font-semibold">Infograins Software Solutions</h4>
                <span className="text-sm">2024 June - Present</span>
              </div>
              <p className="font-medium mb-2">Front-end Developer</p>
              <ul className="list-disc pl-5 space-y-1 text-base">
                <li>Developed and maintained web applications using React.js, Next.js, and TypeScript.</li>
                <li>Developed Start Naukri, a campus hiring platform with real-time tracking and interview scheduling.</li>
                <li>Contributed to Project Zakaa for the ministry of government.</li>
                <li>Redesigned the Infosense website to improve SEO, responsiveness, and user experience.</li>
              </ul>
            </div>
          </section>

          {/* Projects */}
          <section className="mb-8">
            <h3 className="text-xl font-bold border-b pb-2 mb-4">PROJECTS</h3>
            
            <div className="mb-6">
              <h4 className="text-lg font-semibold">Project Zakaa:</h4>
              <p className="text-sm mb-1">(Client: Bombay Softwares for Saudi Arab Government)</p>
              <p className="mb-1 text-base">Collaborated with cross-functional teams and external clients to gather requirements and ensure timely delivery of projects.</p>
              <p className="text-sm">Technologies used: Next.js, TypeScript</p>
            </div>
            
            <div className="mb-6">
              <h4 className="text-lg font-semibold">Start Naukari:</h4>
              <p className="text-sm mb-1">(Live Project)</p>
              <p className="mb-1 text-base">Start Naukri is a comprehensive campus hiring platform connecting job seekers and students with top employers. It enables hiring managers to efficiently manage applications, track candidate progress in real-time and schedule live interviews directly through the platform, streamlining the recruitment process.</p>
              <p className="text-sm">Technologies used: React.js, JavaScript</p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold">Infosense website:</h4>
              <p className="mb-1 text-base">Redesigned the existing company website, enhancing responsiveness, SEO, and user experience through modern design and optimized performance.</p>
              <p className="text-sm">Technology used: Next.js, JavaScript</p>
            </div>
          </section>

          {/* Education */}
          <section className="mb-8">
            <h3 className="text-xl font-bold border-b pb-2 mb-4">EDUCATION</h3>
            
            <div className="mb-6">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                <h4 className="text-lg font-semibold">Shri Ram Institute of Science and Technology, Jabalpur</h4>
                <span className="text-sm">August 2020 - June 2024</span>
              </div>
              <p>B.Tech: CSE - 77%</p>
            </div>
            
            <div className="mb-6">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                <h4 className="text-lg font-semibold">Govt School</h4>
                <span className="text-sm">April 2019 - March 2020</span>
              </div>
              <p>12th - 79%</p>
            </div>
            
            <div>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                <h4 className="text-lg font-semibold">Govt School</h4>
                <span className="text-sm">April 2017 - March 2018</span>
              </div>
              <p>10th - 81%</p>
            </div>
          </section>

          {/* Skills */}
          <section className="mb-8">
            <h3 className="text-xl font-bold border-b pb-2 mb-4">SKILLS</h3>
            <ul className="list-disc pl-5 grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-1 text-base">
              <li>Programming: Python, JavaScript</li>
              <li>Web-Development: HTML / CSS / JavaScript / TypeScript / React.js / Next.js / Redux</li>
              <li>Database: SQL</li>
              <li>Version Control: Git and Github</li>
            </ul>
          </section>

          {/* Certificates */}
          <section className="mb-8">
            <h3 className="text-xl font-bold border-b pb-2 mb-4">CERTIFICATES</h3>
            <ul className="list-disc pl-5 space-y-1 text-base">
              <li>Introduction to Front-end development authorized by Meta and offered through Coursera.</li>
              <li>ReactJS Certification from HackerRank.</li>
            </ul>
          </section>

          {/* Languages */}
          <section className="mb-8">
            <h3 className="text-xl font-bold border-b pb-2 mb-4">LANGUAGES</h3>
            <ul className="list-disc pl-5 grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-1 text-base">
              <li>Hindi</li>
              <li>English</li>
            </ul>
          </section>

          {/* Hobbies */}
          <section>
            <h3 className="text-xl font-bold border-b pb-2 mb-4">HOBBIES</h3>
            <ul className="list-disc pl-5 grid grid-cols-1 sm:grid-cols-3 gap-x-4 gap-y-1 text-base">
              <li>Guitar</li>
              <li>Fitness</li>
              <li>Music Production</li>
            </ul>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
} 