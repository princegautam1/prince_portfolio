"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ResumeQR() {
  const [domain, setDomain] = useState("princegautam.com");
  const [showTooltip, setShowTooltip] = useState(false);
  
  // Get the domain once component mounts
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setDomain(window.location.host);
    }
  }, []);
  
  const resumeUrl = `https://${domain}/resume`;
  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(resumeUrl)}`;
  
  const handleCopyUrl = () => {
    navigator.clipboard.writeText(resumeUrl);
    setShowTooltip(true);
    setTimeout(() => setShowTooltip(false), 2000);
  };
  
  const handlePrint = () => {
    window.print();
  };
  
  return (
    <div className="min-h-screen bg-background text-foreground p-4">
      <div className="container mx-auto max-w-4xl py-8">
        <div className="flex justify-between items-center mb-8 print-hide">
          <h1 className="text-3xl md:text-4xl font-bold">Resume QR Code</h1>
          <div className="flex gap-2">
            <Link
              href="/"
              className="bg-gray-300 text-gray-800 dark:bg-gray-800 dark:text-gray-200 px-3 py-1.5 rounded hover:bg-gray-400 dark:hover:bg-gray-700 text-sm"
            >
              Back to Home
            </Link>
            <Link
              href="/resume"
              className="bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200 px-3 py-1.5 rounded hover:bg-gray-300 dark:hover:bg-gray-600 text-sm"
            >
              Back to Resume
            </Link>
            <button
              onClick={handlePrint}
              className="bg-primary text-white px-3 py-1.5 rounded hover:bg-primary/90 text-sm"
            >
              Print QR
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* QR Code Card */}
          <div className="bg-white dark:bg-card p-8 rounded-lg shadow-lg flex flex-col items-center">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="mb-6 bg-white p-4 rounded-lg"
            >
              <img 
                src={qrCodeUrl} 
                alt="QR Code to Resume" 
                width={200} 
                height={200} 
                className="mx-auto"
              />
            </motion.div>
            
            <h2 className="text-xl font-bold mb-2 text-center">Scan to view my resume</h2>
            
            <div className="relative w-full">
              <div className="flex items-center mt-4 bg-gray-100 dark:bg-background rounded-lg overflow-hidden">
                <div className="flex-1 px-4 py-2 overflow-hidden">
                  <p className="truncate text-gray-700 dark:text-gray-300 text-sm">{resumeUrl}</p>
                </div>
                <button 
                  onClick={handleCopyUrl}
                  className="bg-gray-200 dark:bg-gray-700 px-4 py-2 text-sm font-medium hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                >
                  Copy
                </button>
              </div>
              
              {showTooltip && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="absolute right-0 top-full mt-2 bg-green-600 text-white px-3 py-1 rounded text-sm"
                >
                  URL copied!
                </motion.div>
              )}
            </div>
          </div>
          
          {/* Instructions & Info */}
          <div className="bg-card p-8 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold mb-4 gradient-text">Share Your Resume Anywhere</h2>
            
            <div className="space-y-4">
             
              
            
              
              
              
              <div className="pt-4">
                <h3 className="font-bold text-primary mb-2">How to Use</h3>
                <ol className="list-decimal pl-5 space-y-2">
                  <li>Click the "Print QR" button</li>
                  <li>Save as PDF or print directly</li>
                  <li>Cut out the QR code portion</li>
                  <li>Share digitally or physically</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
        
        {/* Digital Business Card */}
        <div className="mt-12 bg-gradient-to-r from-orange-600 to-orange-500 rounded-lg shadow-lg overflow-hidden print-hide">
          <div className="flex flex-col md:flex-row">
            <div className="p-8 text-white md:w-2/3">
              <h2 className="text-2xl font-bold mb-6">Digital Business Card</h2>
              <p className="mb-4">Create a professional digital business card with your contact information and resume QR code.</p>
              
              <Link 
                href="/contact"
                className="inline-block bg-white text-orange-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
              >
                Get Started
              </Link>
            </div>
            
            <div className="md:w-1/3 flex items-center justify-center p-8 bg-white/10">
              <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <polyline points="3 7 12 13 21 7" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 