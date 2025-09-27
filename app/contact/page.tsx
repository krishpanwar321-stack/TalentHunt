"use client"

import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Clock, Send, MessageCircle } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const floatingAnimation = {
  animate: {
    y: [-5, 5, -5],
    transition: {
      duration: 3,
      repeat: Number.POSITIVE_INFINITY,
      ease: "easeInOut",
    },
  },
}

export default function ContactPage() {
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

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 overflow-hidden">
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-20 left-20 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 6,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-20 right-20 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.4, 0.7, 0.4],
            }}
            transition={{
              duration: 8,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div className="mb-6" variants={floatingAnimation} animate="animate">
              <MessageCircle className="w-16 h-16 text-yellow-400 mx-auto" />
            </motion.div>
            <h1 className="text-6xl md:text-7xl font-bold text-white mb-6">
              Contact
              <motion.span
                className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                }}
              >
                Us
              </motion.span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Have questions about our talent hunt? Need more information about opportunities? We're here to help you
              every step of the way.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-bold text-gray-900 mb-6">Get In Touch</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
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
                <Card className="p-8 h-full text-center hover:shadow-xl transition-all duration-300 group">
                  <motion.div className="mb-6" variants={floatingAnimation} animate="animate">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                      <info.icon className="w-8 h-8 text-white" />
                    </div>
                  </motion.div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors duration-300">
                    {info.title}
                  </h3>
                  <p className="text-lg font-semibold text-purple-600 mb-2">{info.details}</p>
                  <p className="text-gray-600 text-sm">{info.description}</p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Send us a Message</h3>
              <Card className="p-8">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName" className="text-sm font-semibold text-gray-700">
                        First Name
                      </Label>
                      <Input id="firstName" className="mt-1" placeholder="John" />
                    </div>
                    <div>
                      <Label htmlFor="lastName" className="text-sm font-semibold text-gray-700">
                        Last Name
                      </Label>
                      <Input id="lastName" className="mt-1" placeholder="Doe" />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-sm font-semibold text-gray-700">
                      Email Address
                    </Label>
                    <Input id="email" type="email" className="mt-1" placeholder="john.doe@example.com" />
                  </div>

                  <div>
                    <Label htmlFor="subject" className="text-sm font-semibold text-gray-700">
                      Subject
                    </Label>
                    <Input id="subject" className="mt-1" placeholder="Question about talent hunt" />
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-sm font-semibold text-gray-700">
                      Message
                    </Label>
                    <Textarea id="message" className="mt-1 min-h-32" placeholder="Tell us how we can help you..." />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-3 group"
                  >
                    Send Message
                    <Send className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                  </Button>
                </form>
              </Card>
            </motion.div>

            {/* Map/Office Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Location</h3>
              <Card className="p-8 h-full">
                <div className="space-y-6">
                  <div className="aspect-video bg-gradient-to-br from-purple-100 to-pink-100 rounded-lg flex items-center justify-center">
                    <motion.div
                      className="text-center"
                      animate={{
                        scale: [1, 1.05, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                      }}
                    >
                      <MapPin className="w-16 h-16 text-purple-600 mx-auto mb-4" />
                      <p className="text-lg font-semibold text-gray-700">Interactive Map Coming Soon</p>
                      <p className="text-gray-600">123 Innovation Street, Tech City</p>
                    </motion.div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-xl font-bold text-gray-900">Office Information</h4>
                    <div className="space-y-3">
                      <div className="flex items-center">
                        <MapPin className="w-5 h-5 text-purple-600 mr-3" />
                        <span className="text-gray-700">123 Innovation Street, Tech City, TC 12345</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-5 h-5 text-purple-600 mr-3" />
                        <span className="text-gray-700">Monday - Friday: 9:00 AM - 6:00 PM EST</span>
                      </div>
                      <div className="flex items-center">
                        <Phone className="w-5 h-5 text-purple-600 mr-3" />
                        <span className="text-gray-700">+1 (555) 123-4567</span>
                      </div>
                      <div className="flex items-center">
                        <Mail className="w-5 h-5 text-purple-600 mr-3" />
                        <span className="text-gray-700">talent@marketingagency.com</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
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
            {[
              {
                question: "How long does the application process take?",
                answer:
                  "Our typical application process takes 2-3 weeks from submission to final decision. We'll keep you updated throughout the process.",
              },
              {
                question: "Do you offer remote work opportunities?",
                answer:
                  "Yes! We offer flexible work arrangements including remote, hybrid, and in-office positions depending on the role and your preferences.",
              },
              {
                question: "What should I include in my portfolio?",
                answer:
                  "Include your best work that demonstrates your skills in your chosen category. Quality over quantity - 5-10 strong pieces are better than 20 mediocre ones.",
              },
              {
                question: "Is there an age limit for applicants?",
                answer:
                  "No age limits! We value talent, creativity, and passion regardless of age. We're an equal opportunity employer committed to diversity and inclusion.",
              },
            ].map((faq, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">{faq.question}</h4>
                  <p className="text-gray-600">{faq.answer}</p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  )
}
