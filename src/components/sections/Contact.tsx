"use client";

import { motion } from "framer-motion";
import { useState, FormEvent } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    // Form validation
    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill in all fields");
      return;
    }
    
    setFormStatus("submitting");
    
    try {
      // Send data to API endpoint
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      setFormStatus("success");
      setFormData({ name: "", email: "", message: "" });
      
      // Reset form status after 5 seconds
      setTimeout(() => {
        setFormStatus("idle");
      }, 5000);
    } catch (error) {
      console.error("Form submission error:", error);
      setFormStatus("error");
      
      // Reset form status after 5 seconds
      setTimeout(() => {
        setFormStatus("idle");
      }, 5000);
    }
  };

  return (
    <section id="contact" className="py-20 bg-muted">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center mr-4">
                    <span className="text-accent">📧</span>
                  </div>
                  <div>
                    <p className="text-sm text-foreground/60">Email</p>
                    <a href="mailto:princegautam8764@gmail.com" className="hover:text-accent transition-colors">
                      princegautam8764@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center mr-4">
                    <span className="text-accent">📱</span>
                  </div>
                  <div>
                    <p className="text-sm text-foreground/60">Phone</p>
                    <a href="tel:+919630940880" className="hover:text-accent transition-colors">
                      +91 9630940880
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center mr-4">
                    <span className="text-accent">🌐</span>
                  </div>
                  <div>
                    <p className="text-sm text-foreground/60">GitHub</p>
                    <a 
                      href="https://github.com/princegautam1" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="hover:text-accent transition-colors"
                    >
                      github.com/princegautam1
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <p className="text-foreground/80">
                  Feel free to reach out to me for collaborations, project inquiries, or just to say hello. I'm always open to discussing new projects and opportunities.
                </p>
              </div>
            </motion.div>
            
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                    placeholder="Your Name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    disabled={formStatus === "submitting"}
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                    placeholder="your.email@example.com"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    disabled={formStatus === "submitting"}
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                    placeholder="Your message here..."
                    required
                    value={formData.message}
                    onChange={handleChange}
                    disabled={formStatus === "submitting"}
                  ></textarea>
                </div>
                
                <div>
                  <button
                    type="submit"
                    className={`w-full px-6 py-3 rounded-lg transition-colors ${
                      formStatus === "submitting" ? "bg-accent/70 cursor-not-allowed" : 
                      formStatus === "success" ? "bg-green-600" : 
                      formStatus === "error" ? "bg-red-600" : 
                      "bg-accent hover:bg-accent/90"
                    } text-accent-foreground`}
                    disabled={formStatus === "submitting"}
                  >
                    {formStatus === "idle" && "Send Message"}
                    {formStatus === "submitting" && "Sending..."}
                    {formStatus === "success" && "Message Sent!"}
                    {formStatus === "error" && "Error! Try Again"}
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 