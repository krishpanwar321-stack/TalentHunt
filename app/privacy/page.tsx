"use client"

import React from 'react'
import { motion } from "framer-motion"
import SplitText from '@/components/ui/SplitText'

export default function Privacy() {
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
                text="Privacy Policy"
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
                <h2 className="text-2xl font-light text-white mb-6">Information We Collect</h2>
                <p className="text-white/70 text-base mb-6">
                  We collect information you provide directly to us, such as when you create an account, apply for our talent hunt program, or contact us.
                </p>

                <h2 className="text-2xl font-light text-white mb-6">How We Use Your Information</h2>
                <p className="text-white/70 text-base mb-6">
                  We use the information we collect to provide, maintain, and improve our services, process applications, and communicate with you.
                </p>

                <h2 className="text-2xl font-light text-white mb-6">Information Sharing</h2>
                <p className="text-white/70 text-base mb-6">
                  We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy.
                </p>

                <h2 className="text-2xl font-light text-white mb-6">Data Security</h2>
                <p className="text-white/70 text-base mb-6">
                  We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
                </p>

                <h2 className="text-2xl font-light text-white mb-6">Your Rights</h2>
                <p className="text-white/70 text-base mb-6">
                  You have the right to access, update, or delete your personal information. You may also opt out of certain communications from us.
                </p>

                <h2 className="text-2xl font-light text-white mb-6">Contact Us</h2>
                <p className="text-white/70 text-base">
                  If you have any questions about this Privacy Policy, please contact us at privacy@talentagency.com
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
