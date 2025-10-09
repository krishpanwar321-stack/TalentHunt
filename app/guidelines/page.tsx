"use client"

import React from 'react'
import { motion } from "framer-motion"
import { ArrowUpRight, FileText, CheckCircle, AlertCircle, Clock, Users, Award, Target, Lightbulb, Shield, Zap, Upload } from 'lucide-react'
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

export default function Guidelines() {
  const applicationGuidelines = [
    {
      icon: FileText,
      title: "Portfolio Requirements",
      items: [
        "Include 5-10 pieces of your best work",
        "Provide detailed project descriptions",
        "Showcase diverse skills and creativity",
        "Include high-quality images and documentation",
        "Highlight your role and contributions"
      ]
    },
    {
      icon: Users,
      title: "Application Process",
      items: [
        "Complete all required fields accurately",
        "Upload all necessary documents",
        "Provide professional references",
        "Include a compelling cover letter",
        "Submit before the deadline"
      ]
    },
    {
      icon: Award,
      title: "Selection Criteria",
      items: [
        "Demonstrated expertise in your field",
        "Strong problem-solving abilities",
        "Excellent communication skills",
        "Passion for continuous learning",
        "Alignment with our company values"
      ]
    }
  ]

  const submissionGuidelines = [
    {
      step: "01",
      title: "Prepare Your Portfolio",
      description: "Gather your best work samples and organize them professionally",
      icon: FileText
    },
    {
      step: "02",
      title: "Complete Application Form",
      description: "Fill out all sections with accurate and detailed information",
      icon: CheckCircle
    },
    {
      step: "03",
      title: "Upload Documents",
      description: "Submit your resume, cover letter, and portfolio materials",
      icon: Upload
    },
    {
      step: "04",
      title: "Review & Submit",
      description: "Double-check all information before final submission",
      icon: Shield
    }
  ]

  const importantNotes = [
    {
      icon: AlertCircle,
      title: "Deadline Compliance",
      description: "Applications must be submitted by the specified deadline. Late submissions will not be considered."
    },
    {
      icon: Clock,
      title: "Processing Time",
      description: "Allow 2-3 weeks for application review. You will be notified of the outcome via email."
    },
    {
      icon: Shield,
      title: "Data Privacy",
      description: "All submitted information is kept confidential and used solely for evaluation purposes."
    },
    {
      icon: Lightbulb,
      title: "Tips for Success",
      description: "Be authentic, highlight your unique strengths, and demonstrate your passion for the field."
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
                text="Guidelines"
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
              Everything you need to know to submit a successful application to our talent hunt program.
            </motion.p>
          </div>
        </section>

        {/* Application Guidelines */}
        <section className="py-20 px-6">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl font-thin text-white mb-8">Application Guidelines</h2>
              <p className="text-white/70 text-base max-w-3xl mx-auto">
                Follow these comprehensive guidelines to ensure your application stands out.
              </p>
            </motion.div>

            <motion.div
              className="grid md:grid-cols-3 gap-8 mb-20"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              {applicationGuidelines.map((guideline, index) => (
                <motion.div key={index} variants={fadeInUp}>
                  <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 h-full hover:bg-white/10 transition-all duration-300 border border-white/20">
                    <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-6">
                      <guideline.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-light text-white mb-6">{guideline.title}</h3>
                    <ul className="space-y-3">
                      {guideline.items.map((item, itemIndex) => (
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

        {/* Submission Process */}
        <section className="py-20 px-6">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl font-thin text-white mb-8">Submission Process</h2>
              <p className="text-white/70 text-base max-w-3xl mx-auto">
                Follow these steps to complete your application successfully.
              </p>
            </motion.div>

            <motion.div
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              {submissionGuidelines.map((step, index) => (
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

        {/* Important Notes */}
        <section className="py-20 px-6">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl font-thin text-white mb-8">Important Notes</h2>
              <p className="text-white/70 text-base max-w-3xl mx-auto">
                Keep these important points in mind throughout the application process.
              </p>
            </motion.div>

            <motion.div
              className="grid md:grid-cols-2 gap-8"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              {importantNotes.map((note, index) => (
                <motion.div key={index} variants={fadeInUp}>
                  <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 border border-white/20">
                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                        <note.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-light text-white mb-3">{note.title}</h3>
                        <p className="text-white/70 text-base leading-relaxed">{note.description}</p>
                      </div>
                    </div>
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
              <h2 className="text-5xl font-thin text-white mb-8">Ready to Apply?</h2>
              <p className="text-white/70 text-base mb-12 max-w-2xl mx-auto leading-relaxed">
                Now that you understand the guidelines, it's time to submit your application.
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
                  href="/faq"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-full font-semibold text-lg tracking-wide hover:bg-white/20 transition-all duration-300 border border-white/20 group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View FAQ <ArrowUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                </motion.a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  )
}
