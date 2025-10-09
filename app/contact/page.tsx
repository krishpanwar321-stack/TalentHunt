"use client"

import React from 'react'
import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Clock, Send, MessageCircle, ArrowUpRight } from 'lucide-react'
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

export default function Contact() {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      details: "talent@marketingagency.com",
      description: "Get in touch for any questions about the talent hunt",
    },
    {
      icon: Phone,
      title: "Call Us",
      details: "+1 (555) 123-4567",
      description: "Speak directly with our recruitment team",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: "123 Innovation Street, Tech City, TC 12345",
      description: "Our headquarters and main office location",
    },
    {
      icon: Clock,
      title: "Office Hours",
      details: "Mon-Fri: 9AM-6PM EST",
      description: "We're here to help during business hours",
    },
  ]

  const faqs = [
    {
      question: "How long does the application process take?",
      answer: "Our typical application process takes 2-3 weeks from submission to final decision. We'll keep you updated throughout the process."
    },
    {
      question: "Do you offer remote work opportunities?",
      answer: "Yes! We offer flexible work arrangements including remote, hybrid, and in-office positions depending on the role and your preferences."
    },
    {
      question: "What should I include in my portfolio?",
      answer: "Include your best work that demonstrates your skills in your chosen category. Quality over quantity - 5-10 strong pieces are better than 20 mediocre ones."
    },
    {
      question: "Is there an age limit for applicants?",
      answer: "No age limits! We value talent, creativity, and passion regardless of age. We're an equal opportunity employer committed to diversity and inclusion."
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
                text="Contact Us"
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
              Have questions about our talent hunt? We're here to help you every step of the way.
            </motion.p>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-20 px-6">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl font-thin text-white mb-8">Get In Touch</h2>
              <p className="text-white/70 text-base max-w-3xl mx-auto">
                Multiple ways to reach us - choose what works best for you
              </p>
            </motion.div>

            <motion.div
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              {contactInfo.map((info, index) => (
                <motion.div key={index} variants={fadeInUp}>
                  <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 h-full text-center hover:bg-white/10 transition-all duration-300 group border border-white/20">
                    <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-white/20 transition-all duration-300">
                      <info.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-light text-white mb-2 group-hover:text-white transition-colors duration-300">
                      {info.title}
                    </h3>
                    <p className="text-base font-medium text-white/90 mb-2 break-words">{info.details}</p>
                    <p className="text-white/70 text-sm">{info.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-20 px-6">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl font-thin text-white mb-8">Send us a Message</h2>
              <p className="text-white/70 text-base max-w-3xl mx-auto">
                Have a question or want to get in touch? We'd love to hear from you.
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
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-white/90 mb-2">
                        First Name
                      </label>
                      <input 
                        id="firstName" 
                        type="text"
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-transparent transition-all duration-300"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-white/90 mb-2">
                        Last Name
                      </label>
                      <input 
                        id="lastName" 
                        type="text"
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-transparent transition-all duration-300"
                        placeholder="Doe"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-white/90 mb-2">
                      Email Address
                    </label>
                    <input 
                      id="email" 
                      type="email"
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-transparent transition-all duration-300"
                      placeholder="john.doe@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-white/90 mb-2">
                      Subject
                    </label>
                    <input 
                      id="subject" 
                      type="text"
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-transparent transition-all duration-300"
                      placeholder="Question about talent hunt"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-white/90 mb-2">
                      Message
                    </label>
                    <textarea 
                      id="message" 
                      rows={6}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-transparent transition-all duration-300 resize-none"
                      placeholder="Tell us how we can help you..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    className="w-full bg-white text-black rounded-full font-semibold text-lg tracking-wide hover:bg-white/90 transition-all duration-300 py-4 flex items-center justify-center gap-2 group"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Send Message <Send size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 px-6">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl font-thin text-white mb-8">Frequently Asked Questions</h2>
              <p className="text-white/70 text-base max-w-3xl mx-auto">
                Quick answers to common questions about our talent hunt process
              </p>
            </motion.div>

            <motion.div
              className="max-w-4xl mx-auto space-y-6"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              {faqs.map((faq, index) => (
                <motion.div key={index} variants={fadeInUp}>
                  <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 border border-white/20">
                    <h4 className="text-lg font-light text-white mb-3">{faq.question}</h4>
                    <p className="text-white/70 leading-relaxed">{faq.answer}</p>
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
                Join our talent hunt and showcase your skills to the world.
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
                  href="/talent-hunt"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-full font-semibold text-lg tracking-wide hover:bg-white/20 transition-all duration-300 border border-white/20 group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Learn More <ArrowUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                </motion.a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  )
}
