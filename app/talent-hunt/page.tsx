"use client"

import React from 'react'
import { motion } from "framer-motion"
import { ArrowUpRight, Target, Award, Users, Calendar, Clock, Star, CheckCircle, Briefcase, Lightbulb, Globe, Zap } from 'lucide-react'
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

export default function TalentHuntDetails() {
  const programBenefits = [
    {
      icon: Award,
      title: "Industry Recognition",
      description: "Get recognized by top industry leaders and build your professional reputation."
    },
    {
      icon: Briefcase,
      title: "Career Opportunities",
      description: "Access exclusive job opportunities and career advancement programs."
    },
    {
      icon: Users,
      title: "Networking",
      description: "Connect with like-minded professionals and industry experts."
    },
    {
      icon: Lightbulb,
      title: "Skill Development",
      description: "Enhance your skills through workshops, mentorship, and training programs."
    }
  ]

  const timeline = [
    {
      phase: "#1",
      title: "Application Period",
      duration: "2 weeks",
      description: "Submit your application and portfolio for initial review",
      status: "Open"
    },
    {
      phase: "#2", 
      title: "Initial Screening",
      duration: "1 week",
      description: "Our team reviews applications and selects candidates",
      status: "Upcoming"
    },
    {
      phase: "#3",
      title: "Skills Assessment",
      duration: "1 week", 
      description: "Complete technical challenges and portfolio review",
      status: "Upcoming"
    },
    {
      phase: "#4",
      title: "Final Interviews",
      duration: "1 week",
      description: "Meet with our team for final evaluation",
      status: "Upcoming"
    },
    {
      phase: "#5",
      title: "Results & Onboarding",
      duration: "Ongoing",
      description: "Selected candidates join our talent program",
      status: "Upcoming"
    }
  ]

  const categories = [
    {
      title: "Digital Marketing",
      description: "Social media, content creation, SEO, PPC, and digital strategy",
      skills: ["Social Media Management", "Content Creation", "SEO/SEM", "Analytics", "Campaign Management"]
    },
    {
      title: "Creative Design",
      description: "Graphic design, UI/UX, branding, and visual communication",
      skills: ["Graphic Design", "UI/UX Design", "Branding", "Illustration", "Motion Graphics"]
    },
    {
      title: "Technical Development",
      description: "Web development, mobile apps, and technical solutions",
      skills: ["Frontend Development", "Backend Development", "Mobile Development", "Database Design", "API Integration"]
    },
    {
      title: "Strategy & Consulting",
      description: "Business strategy, market research, and consulting services",
      skills: ["Market Research", "Business Strategy", "Data Analysis", "Project Management", "Client Relations"]
    }
  ]

  const requirements = [
    "Minimum 2 years of professional experience in your field",
    "Strong portfolio showcasing your best work",
    "Excellent communication and collaboration skills",
    "Passion for innovation and continuous learning",
    "Ability to work in a fast-paced environment",
    "Commitment to the program duration (6-12 months)"
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
                text="Talent Hunt"
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
              Discover the ultimate opportunity to showcase your talent and accelerate your career with our exclusive program.
            </motion.p>
        </div>
      </section>

        {/* Program Overview */}
        <section className="py-20 px-6">
          <div className="container mx-auto max-w-6xl">
          <motion.div
            className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
              <h2 className="text-5xl font-thin text-white mb-8">Program Overview</h2>
              <p className="text-white/70 text-base max-w-3xl mx-auto">
                Our talent hunt is designed to identify, develop, and showcase exceptional individuals who have the potential to shape the future of digital marketing.
            </p>
          </motion.div>

          <motion.div
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
              {programBenefits.map((benefit, index) => (
              <motion.div key={index} variants={fadeInUp}>
                  <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 h-full text-center hover:bg-white/10 transition-all duration-300 group border border-white/20">
                    <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-white/20 transition-all duration-300">
                      <benefit.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-light text-white mb-4 group-hover:text-white transition-colors duration-300">
                      {benefit.title}
                    </h3>
                    <p className="text-white/70 text-sm">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-20 px-6">
          <div className="container mx-auto max-w-6xl">
                  <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                  >
              <h2 className="text-5xl font-thin text-white mb-8">Program Timeline</h2>
              <p className="text-white/70 text-base max-w-3xl mx-auto">
                Follow our structured process from application to selection and beyond.
              </p>
                  </motion.div>

            <motion.div
              className="max-w-4xl mx-auto space-y-8"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              {timeline.map((phase, index) => (
                <motion.div key={index} variants={fadeInUp}>
                  <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 border border-white/20">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                      <div className="flex items-center mb-4 md:mb-0">
                        <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mr-4">
                          <span className="text-white font-semibold">{phase.phase}</span>
                        </div>
                        <div>
                          <h3 className="text-xl font-light text-white mb-1">{phase.title}</h3>
                          <p className="text-white/70 text-sm">{phase.description}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="text-right">
                          <div className="text-white/70 text-sm">{phase.duration}</div>
                          <div className={`text-sm font-medium ${
                            phase.status === 'Open' ? 'text-green-400' : 'text-white/50'
                          }`}>
                            {phase.status}
                          </div>
                        </div>
                        <div className={`w-3 h-3 rounded-full ${
                          phase.status === 'Open' ? 'bg-green-400' : 'bg-white/30'
                        }`} />
                      </div>
                    </div>
                  </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

        {/* Categories Section */}
        <section className="py-20 px-6">
          <div className="container mx-auto max-w-6xl">
          <motion.div
            className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
              <h2 className="text-5xl font-thin text-white mb-8">Talent Categories</h2>
              <p className="text-white/70 text-base max-w-3xl mx-auto">
                We're looking for exceptional talent across multiple disciplines and specializations.
            </p>
          </motion.div>

          <motion.div
              className="grid md:grid-cols-2 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {categories.map((category, index) => (
                <motion.div key={index} variants={fadeInUp}>
                  <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 border border-white/20 h-full">
                    <h3 className="text-2xl font-light text-white mb-4">{category.title}</h3>
                    <p className="text-white/70 text-base mb-6">{category.description}</p>
                    <div>
                      <h4 className="text-lg font-medium text-white mb-3">Key Skills:</h4>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, skillIndex) => (
                          <span 
                          key={skillIndex}
                            className="px-3 py-1 bg-white/10 rounded-full text-white/70 text-sm"
                        >
                          {skill}
                          </span>
                      ))}
                      </div>
                    </div>
                  </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

        {/* Requirements Section */}
        <section className="py-20 px-6">
          <div className="container mx-auto max-w-4xl">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl font-thin text-white mb-8">Requirements</h2>
              <p className="text-white/70 text-base max-w-3xl mx-auto">
                Make sure you meet our criteria before applying to the program.
              </p>
            </motion.div>

            <motion.div
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <ul className="space-y-4">
                {requirements.map((requirement, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-white/70 mr-4 mt-0.5 flex-shrink-0" />
                    <span className="text-white/70 text-base">{requirement}</span>
                  </li>
                ))}
              </ul>
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
              <h2 className="text-5xl font-thin text-white mb-8">Ready to Apply?</h2>
              <p className="text-white/70 text-base mb-12 max-w-2xl mx-auto leading-relaxed">
                Don't miss this opportunity to showcase your talent and accelerate your career.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <motion.a
                  href="/apply"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black rounded-full font-semibold text-lg tracking-wide hover:bg-white/90 transition-all duration-300 group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Apply Now <ArrowUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                </motion.a>
                <motion.a
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-full font-semibold text-lg tracking-wide hover:bg-white/20 transition-all duration-300 border border-white/20 group"
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