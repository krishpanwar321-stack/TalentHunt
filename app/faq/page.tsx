"use client"

import React from 'react'
import { motion } from "framer-motion"
import { ArrowUpRight, HelpCircle, ChevronDown, ChevronUp, Clock, Users, Award, FileText, Mail, Phone, Calendar } from 'lucide-react'
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

export default function FAQ() {
  const faqCategories = [
    {
      title: "Application Process",
      icon: FileText,
      faqs: [
        {
          question: "How do I apply for the talent hunt?",
          answer: "You can apply by visiting our Apply page and filling out the comprehensive application form. Make sure to include your portfolio, resume, and cover letter."
        },
        {
          question: "What documents do I need to submit?",
          answer: "You'll need to submit your resume/CV, portfolio (5-10 pieces), cover letter, and any relevant certifications. All documents should be in PDF format."
        },
        {
          question: "Is there an application deadline?",
          answer: "Yes, applications are accepted during specific periods. Check our current application window and submit before the deadline to be considered."
        },
        {
          question: "Can I edit my application after submission?",
          answer: "Unfortunately, once submitted, applications cannot be edited. Please review all information carefully before final submission."
        }
      ]
    },
    {
      title: "Selection Process",
      icon: Award,
      faqs: [
        {
          question: "How long does the selection process take?",
          answer: "The entire process typically takes 2-3 weeks from application deadline to final results. We'll keep you updated throughout each phase."
        },
        {
          question: "What are the selection criteria?",
          answer: "We evaluate based on portfolio quality, relevant experience, problem-solving skills, communication abilities, and alignment with our company values."
        },
        {
          question: "Will I receive feedback on my application?",
          answer: "Selected candidates will receive detailed feedback. Unfortunately, due to volume, we cannot provide individual feedback to all applicants."
        },
        {
          question: "Can I reapply if not selected?",
          answer: "Yes, you can reapply in future talent hunt cycles. We encourage you to strengthen your portfolio and reapply when ready."
        }
      ]
    },
    {
      title: "Program Details",
      icon: Users,
      faqs: [
        {
          question: "What happens after I'm selected?",
          answer: "Selected candidates will be invited to join our talent program, which includes mentorship, skill development, and potential career opportunities."
        },
        {
          question: "Is this a paid program?",
          answer: "Yes, our talent program includes competitive compensation, benefits, and professional development opportunities."
        },
        {
          question: "What is the program duration?",
          answer: "The program typically runs for 6-12 months, with opportunities for permanent positions based on performance and fit."
        },
        {
          question: "Do you offer remote work options?",
          answer: "Yes, we offer flexible work arrangements including remote, hybrid, and in-office positions depending on the role and your preferences."
        }
      ]
    },
    {
      title: "Technical Support",
      icon: HelpCircle,
      faqs: [
        {
          question: "I'm having trouble uploading files. What should I do?",
          answer: "Ensure your files are in the correct format (PDF, DOC, DOCX) and under 10MB each. Try using a different browser or check your internet connection."
        },
        {
          question: "Who can I contact for technical issues?",
          answer: "For technical support, email us at support@talentagency.com or call our helpline at +1 (555) 123-4567 during business hours."
        },
        {
          question: "What if I miss the application deadline?",
          answer: "Unfortunately, we cannot accept late applications. However, you can apply in the next talent hunt cycle when applications reopen."
        },
        {
          question: "Can I save my application and continue later?",
          answer: "Yes, you can save your progress and return to complete your application before the deadline. Make sure to submit before the closing date."
        }
      ]
    }
  ]

  const quickLinks = [
    {
      title: "Application Form",
      description: "Start your application process",
      href: "/apply",
      icon: FileText
    },
    {
      title: "Guidelines",
      description: "Read our application guidelines",
      href: "/guidelines",
      icon: Award
    },
    {
      title: "Contact Support",
      description: "Get help with your application",
      href: "/contact",
      icon: Mail
    },
    {
      title: "Talent Hunt Details",
      description: "Learn more about our program",
      href: "/talent-hunt",
      icon: Users
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
                text="FAQ"
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
              Find answers to the most commonly asked questions about our talent hunt program.
            </motion.p>
          </div>
        </section>

        {/* FAQ Categories */}
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
                Browse through our comprehensive FAQ sections to find the information you need.
              </p>
            </motion.div>

            <motion.div
              className="space-y-12"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              {faqCategories.map((category, categoryIndex) => (
                <motion.div key={categoryIndex} variants={fadeInUp}>
                  <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                    <div className="flex items-center mb-8">
                      <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mr-4">
                        <category.icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-3xl font-light text-white">{category.title}</h3>
                    </div>
                    
                    <div className="space-y-4">
                      {category.faqs.map((faq, faqIndex) => (
                        <div key={faqIndex} className="border-b border-white/10 last:border-b-0 pb-4 last:pb-0">
                          <div className="flex items-start justify-between">
                            <div className="flex-1">
                              <h4 className="text-lg font-medium text-white mb-2">{faq.question}</h4>
                              <p className="text-white/70 text-base leading-relaxed">{faq.answer}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Quick Links */}
        <section className="py-20 px-6">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl font-thin text-white mb-8">Quick Links</h2>
              <p className="text-white/70 text-base max-w-3xl mx-auto">
                Access important pages and resources related to our talent hunt program.
              </p>
            </motion.div>

            <motion.div
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              {quickLinks.map((link, index) => (
                <motion.div key={index} variants={fadeInUp}>
                  <a
                    href={link.href}
                    className="block bg-white/5 backdrop-blur-sm rounded-2xl p-8 h-full text-center hover:bg-white/10 transition-all duration-300 group border border-white/20"
                  >
                    <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-white/20 transition-all duration-300">
                      <link.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-light text-white mb-3 group-hover:text-white transition-colors duration-300">
                      {link.title}
                    </h3>
                    <p className="text-white/70 text-sm">{link.description}</p>
                  </a>
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
              <h2 className="text-5xl font-thin text-white mb-8">Still Have Questions?</h2>
              <p className="text-white/70 text-base mb-12 max-w-2xl mx-auto leading-relaxed">
                If you couldn't find the answer you're looking for, don't hesitate to contact us directly.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <motion.a
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black rounded-full font-semibold text-lg tracking-wide hover:bg-white/90 transition-all duration-300 group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Contact Us <ArrowUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                </motion.a>
                <motion.a
                  href="/apply"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-full font-semibold text-lg tracking-wide hover:bg-white/20 transition-all duration-300 border border-white/20 group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Start Application <ArrowUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                </motion.a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  )
}
