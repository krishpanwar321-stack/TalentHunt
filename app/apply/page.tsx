"use client"

import React from 'react'
import { motion } from "framer-motion"
import { ArrowUpRight, Upload, FileText, User, Mail, Phone, MapPin, Award, Briefcase, Calendar, CheckCircle } from 'lucide-react'
import SplitText from '@/components/ui/SplitText'

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: "easeOut" },
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

export default function Apply() {
  const applicationSteps = [
    {
      step: "01",
      title: "Personal Information",
      description: "Tell us about yourself and your background",
      icon: User
    },
    {
      step: "02", 
      title: "Portfolio Submission",
      description: "Showcase your best work and projects",
      icon: FileText
    },
    {
      step: "03",
      title: "Skills Assessment",
      description: "Demonstrate your technical abilities",
      icon: Award
    },
    {
      step: "04",
      title: "Final Review",
      description: "We'll review your application and get back to you",
      icon: CheckCircle
    }
  ]

  const requirements = [
    {
      title: "Portfolio Requirements",
      items: [
        "5-10 pieces of your best work",
        "Include project descriptions and your role",
        "Showcase diverse skills and creativity",
        "High-quality images and documentation"
      ]
    },
    {
      title: "Document Requirements", 
      items: [
        "Updated resume/CV",
        "Cover letter explaining your interest",
        "Professional references (2-3 contacts)",
        "Any relevant certifications"
      ]
    },
    {
      title: "Technical Requirements",
      items: [
        "Proficiency in relevant tools and software",
        "Strong problem-solving abilities",
        "Excellent communication skills",
        "Ability to work in a team environment"
      ]
    }
  ]

  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* Animated Background Elements */}
        <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black via-black to-gray-900"></div>
          <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl"
            animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 8,
            repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-white/3 rounded-full blur-3xl"
            animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.7, 0.4],
            }}
            transition={{
            duration: 6,
            repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center px-4 sm:px-0">
          <div className="container mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
            >
              <SplitText
                text="Apply Now"
                className="text-white font-thin tracking-tight leading-[0.8] text-[12vw] sm:text-[120px] lg:text-[160px] uppercase"
                delay={100}
                duration={1.2}
                ease="power3.out"
                splitType="chars"
                from={{ opacity: 0, y: 100, rotateX: 90 }}
                to={{ opacity: 1, y: 0, rotateX: 0 }}
                threshold={0.1}
                rootMargin="-200px"
                textAlign="center"
              />
            </motion.div>
            
            <motion.p
              className="text-white/70 text-base sm:text-base mt-8 max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Ready to showcase your talent? Join our exclusive talent hunt and take your career to the next level.
            </motion.p>
          </div>
        </section>

        {/* Application Steps */}
        <section className="py-20 px-6">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl font-thin text-white mb-8">Application Process</h2>
              <p className="text-white/70 text-base max-w-3xl mx-auto">
                Follow these simple steps to complete your application and join our talent hunt.
              </p>
            </motion.div>

            <motion.div
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              {applicationSteps.map((step, index) => (
                <motion.div key={index} variants={fadeInUp}>
                  <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 h-full text-center hover:bg-white/10 transition-all duration-300 group border border-white/20">
                    <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-white/20 transition-all duration-300">
                      <step.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-3xl font-thin text-white mb-4">{step.step}</div>
                    <h3 className="text-xl font-light text-white mb-4 group-hover:text-white transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className="text-white/70 text-sm">{step.description}</p>
                  </div>
                </motion.div>
              ))}
          </motion.div>
        </div>
      </section>

      {/* Application Form */}
        <section className="py-20 px-6">
          <div className="container mx-auto max-w-6xl">
                <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl font-thin text-white mb-8">Start Your Application</h2>
              <p className="text-white/70 text-base max-w-3xl mx-auto">
                Fill out the form below to begin your journey with us.
              </p>
                  </motion.div>

            <motion.div
              className="max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <form className="space-y-8">
                  {/* Personal Information */}
                  <div className="space-y-6">
                    <h3 className="text-2xl font-light text-white mb-6">Personal Information</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="firstName" className="block text-sm font-medium text-white/90 mb-2">
                          First Name *
                        </label>
                        <input 
                          id="firstName" 
                          type="text"
                          required
                          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-transparent transition-all duration-300"
                          placeholder="John"
                        />
                      </div>
                      <div>
                        <label htmlFor="lastName" className="block text-sm font-medium text-white/90 mb-2">
                          Last Name *
                        </label>
                        <input 
                          id="lastName" 
                          type="text"
                          required
                          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-transparent transition-all duration-300"
                          placeholder="Doe"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-white/90 mb-2">
                      Email Address *
                        </label>
                        <input 
                      id="email"
                      type="email"
                          required
                          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-transparent transition-all duration-300"
                          placeholder="john.doe@example.com"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-white/90 mb-2">
                          Phone Number
                        </label>
                        <input 
                          id="phone" 
                          type="tel"
                          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-transparent transition-all duration-300"
                          placeholder="+1 (555) 123-4567"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="location" className="block text-sm font-medium text-white/90 mb-2">
                        Location
                      </label>
                      <input 
                        id="location" 
                        type="text"
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-transparent transition-all duration-300"
                        placeholder="City, Country"
                      />
                    </div>
                  </div>

                  {/* Professional Information */}
                  <div className="space-y-6">
                    <h3 className="text-2xl font-light text-white mb-6">Professional Information</h3>
                    <div>
                      <label htmlFor="experience" className="block text-sm font-medium text-white/90 mb-2">
                        Years of Experience *
                      </label>
                      <select 
                        id="experience"
                        required
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-transparent transition-all duration-300"
                      >
                        <option value="" className="bg-gray-800">Select experience level</option>
                        <option value="0-1" className="bg-gray-800">0-1 years</option>
                        <option value="2-3" className="bg-gray-800">2-3 years</option>
                        <option value="4-5" className="bg-gray-800">4-5 years</option>
                        <option value="6-10" className="bg-gray-800">6-10 years</option>
                        <option value="10+" className="bg-gray-800">10+ years</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="skills" className="block text-sm font-medium text-white/90 mb-2">
                        Key Skills *
                      </label>
                      <textarea 
                        id="skills" 
                        rows={3}
                        required
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-transparent transition-all duration-300 resize-none"
                        placeholder="List your key skills and expertise areas..."
                      />
                    </div>

                    <div>
                      <label htmlFor="motivation" className="block text-sm font-medium text-white/90 mb-2">
                        Why do you want to join our talent hunt? *
                      </label>
                      <textarea 
                        id="motivation" 
                        rows={4}
                        required
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-transparent transition-all duration-300 resize-none"
                        placeholder="Tell us about your motivation and what you hope to achieve..."
                      />
                    </div>
                  </div>

                  {/* Portfolio Upload */}
                  <div className="space-y-6">
                    <h3 className="text-2xl font-light text-white mb-6">Portfolio & Documents</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="portfolio" className="block text-sm font-medium text-white/90 mb-2">
                          Portfolio Link
                        </label>
                        <input 
                          id="portfolio" 
                          type="url"
                          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-transparent transition-all duration-300"
                          placeholder="https://yourportfolio.com"
                        />
                      </div>
                      <div>
                        <label htmlFor="linkedin" className="block text-sm font-medium text-white/90 mb-2">
                          LinkedIn Profile
                        </label>
                        <input 
                          id="linkedin" 
                          type="url"
                          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-transparent transition-all duration-300"
                          placeholder="https://linkedin.com/in/yourprofile"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-white/90 mb-4">
                        Upload Documents
                      </label>
                      <div className="border-2 border-dashed border-white/20 rounded-lg p-8 text-center hover:border-white/40 transition-all duration-300">
                        <Upload className="w-12 h-12 text-white/50 mx-auto mb-4" />
                        <p className="text-white/70 text-base mb-2">Drop your files here or click to browse</p>
                        <p className="text-white/50 text-sm">PDF, DOC, DOCX up to 10MB each</p>
                        <input type="file" multiple className="hidden" />
                      </div>
                    </div>
                  </div>

                  <motion.button
                    type="submit"
                    className="w-full bg-white text-black rounded-full font-semibold text-lg tracking-wide hover:bg-white/90 transition-all duration-300 py-4 flex items-center justify-center gap-2 group"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Submit Application <ArrowUpRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
                  </motion.button>
                </form>
              </div>
                  </motion.div>
          </div>
        </section>

        {/* Requirements Section */}
        <section className="py-20 px-6">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl font-thin text-white mb-8">Application Requirements</h2>
              <p className="text-white/70 text-base max-w-3xl mx-auto">
                Make sure you have everything ready before submitting your application.
              </p>
                </motion.div>

                <motion.div
              className="grid md:grid-cols-3 gap-8"
                  variants={staggerContainer}
                  initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              {requirements.map((requirement, index) => (
                <motion.div key={index} variants={fadeInUp}>
                  <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 border border-white/20">
                    <h3 className="text-xl font-light text-white mb-6">{requirement.title}</h3>
                    <ul className="space-y-3">
                      {requirement.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-white/70 mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-white/70 text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
                </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-6">
          <div className="container mx-auto max-w-4xl text-center">
                <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl font-thin text-white mb-8">Ready to Get Started?</h2>
              <p className="text-white/70 text-base mb-12 max-w-2xl mx-auto leading-relaxed">
                Join thousands of talented individuals who have already applied to our program.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <motion.a
                  href="/talent-hunt"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-full font-semibold text-lg tracking-wide hover:bg-white/20 transition-all duration-300 border border-white/20 group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Learn More <ArrowUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                </motion.a>
                <motion.a
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black rounded-full font-semibold text-lg tracking-wide hover:bg-white/90 transition-all duration-300 group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Contact Us <ArrowUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                </motion.a>
              </div>
          </motion.div>
        </div>
      </section>
      </div>
    </div>
  )
}