"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Mail, Phone, MapPin, Twitter, Linkedin, Instagram, ArrowUpRight } from "lucide-react"

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

export default function Footer() {
  return (
    <footer className="relative bg-black text-white overflow-hidden">
      {/* Simplified Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-gray-900"></div>

      <div className="relative z-10">
        {/* Main Content */}
        <div className="container mx-auto px-6 py-20">
          <motion.div
            className="grid lg:grid-cols-4 md:grid-cols-2 gap-12 mb-20"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {/* Brand Section */}
            <motion.div variants={fadeInUp} className="lg:col-span-1">
              <Link href="/" className="group block mb-8">
                <div className="text-4xl font-thin tracking-tight mb-4 group-hover:scale-105 transition-transform duration-300">
                  TalentHunt
                </div>
              </Link>
              <p className="text-white/70 leading-relaxed text-base mb-8">
                Connecting exceptional talent with innovative opportunities. 
                Join us in shaping the future of digital excellence.
              </p>
              <Link
                href="/apply"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black rounded-full font-semibold text-lg tracking-wide hover:bg-white/90 transition-all duration-300 group"
              >
                Get Started <ArrowUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
              </Link>
            </motion.div>

            {/* Quick Links */}
            <motion.div variants={fadeInUp}>
              <h3 className="text-2xl font-light mb-8 text-white">Quick Links</h3>
              <ul className="space-y-4">
                {[
                  { name: "Home", href: "/" },
                  { name: "Talent Hunt Details", href: "/talent-hunt" },
                  { name: "Apply Now", href: "/apply" },
                  { name: "Contact Us", href: "/contact" },
                ].map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href} 
                      className="text-white/70 hover:text-white text-base transition-all duration-300  inline-block"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>


            {/* Contact Info */}
            <motion.div variants={fadeInUp}>
              <h3 className="text-2xl font-light mb-8 text-white">Contact</h3>
              <ul className="space-y-6">
                <li className="flex items-center group">
                  <Mail className="w-5 h-5 text-white/70 group-hover:text-white mr-4 transition-colors duration-300" />
                  <span className="text-white/70 group-hover:text-white text-base transition-colors duration-300">talent@marketingagency.com</span>
                </li>
                <li className="flex items-center group">
                  <Phone className="w-5 h-5 text-white/70 group-hover:text-white mr-4 transition-colors duration-300" />
                  <span className="text-white/70 group-hover:text-white text-base transition-colors duration-300">+1 (555) 123-4567</span>
                </li>
                <li className="flex items-start group">
                  <MapPin className="w-5 h-5 text-white/70 group-hover:text-white mr-4 mt-1 transition-colors duration-300" />
                  <span className="text-white/70 group-hover:text-white text-base transition-colors duration-300">
                    123 Innovation Street<br />
                    Tech City, TC 12345
                  </span>
                </li>
              </ul>
            </motion.div>

            {/* Social Media */}
            <motion.div variants={fadeInUp}>
              <h3 className="text-2xl font-light mb-8 text-white">Follow Us</h3>
              <div className="flex space-x-6 mb-8">
                {[
                  { icon: Twitter, href: "#" },
                  { icon: Linkedin, href: "#" },
                  { icon: Instagram, href: "#" },
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="w-14 h-14 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white/70 hover:text-white hover:bg-white/20 transition-all duration-300 border border-white/20 hover:scale-110"
                  >
                    <social.icon className="w-6 h-6" />
                  </a>
                ))}
              </div>
              <p className="text-white/70 text-base leading-relaxed">
                Stay updated with our latest opportunities and company news.
              </p>
            </motion.div>
          </motion.div>

          {/* Legal Links */}
          <motion.div
            className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <p className="text-white/50 text-base mb-4 md:mb-0">© 2025 TalentHunt Marketing Agency. All rights reserved.</p>
            <div className="flex space-x-8">
              <Link href="/privacy" className="text-white/50 hover:text-white text-base transition-colors duration-300">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-white/50 hover:text-white text-base transition-colors duration-300">
                Terms of Service
              </Link>
              <Link href="/cookies" className="text-white/50 hover:text-white text-base transition-colors duration-300">
                Cookie Policy
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Massive Talent Hunt Title */}
        <div className="relative py-20 border-t border-white/20">
          <div className="container mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              className="text-white font-thin tracking-tight leading-[0.8] text-[8vw] sm:text-[120px] lg:text-[160px] uppercase"
            >
              {"Talent Hunt".split("").map((char, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: index * 0.05,
                    ease: "easeOut"
                  }}
                  viewport={{ once: true }}
                  className="inline-block"
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </motion.div>
            
            <motion.p
              className="text-white/60 text-xl sm:text-base mt-8 max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              Where exceptional talent meets extraordinary opportunities
            </motion.p>
          </div>
        </div>
      </div>
    </footer>
  )
}
