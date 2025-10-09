"use client"

import React from 'react'
import { motion } from "framer-motion"
import SplitText from '@/components/ui/SplitText'

export default function Cookies() {
  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black via-black to-gray-900"></div>
      </div>

      <div className="relative z-10">
        <section className="relative h-screen flex items-center justify-center px-4 sm:px-0">
          <div className="container mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
            >
              <SplitText
                text="Cookie Policy"
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
          </div>
        </section>

        <section className="py-20 px-6">
          <div className="container mx-auto max-w-4xl">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="prose prose-invert max-w-none">
                <h2 className="text-2xl font-light text-white mb-6">What Are Cookies</h2>
                <p className="text-white/70 text-base mb-6">
                  Cookies are small text files that are placed on your computer or mobile device when you visit our website. They help us provide you with a better experience.
                </p>

                <h2 className="text-2xl font-light text-white mb-6">How We Use Cookies</h2>
                <p className="text-white/70 text-base mb-6">
                  We use cookies to remember your preferences, analyze how you use our website, and improve our services. This helps us provide you with a more personalized experience.
                </p>

                <h2 className="text-2xl font-light text-white mb-6">Types of Cookies</h2>
                <p className="text-white/70 text-base mb-6">
                  We use both session cookies (which expire when you close your browser) and persistent cookies (which stay on your device for a set period of time).
                </p>

                <h2 className="text-2xl font-light text-white mb-6">Managing Cookies</h2>
                <p className="text-white/70 text-base mb-6">
                  You can control and/or delete cookies as you wish. You can delete all cookies that are already on your computer and set most browsers to prevent them from being placed.
                </p>

                <h2 className="text-2xl font-light text-white mb-6">Third-Party Cookies</h2>
                <p className="text-white/70 text-base mb-6">
                  Some cookies on our website are set by third-party services. We do not control these cookies and you should check the relevant third-party website for more information.
                </p>

                <h2 className="text-2xl font-light text-white mb-6">Contact Us</h2>
                <p className="text-white/70 text-base">
                  If you have any questions about our use of cookies, please contact us at cookies@talentagency.com
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
