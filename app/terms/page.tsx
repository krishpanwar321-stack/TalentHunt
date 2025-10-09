"use client"

import React from 'react'
import { motion } from "framer-motion"
import SplitText from '@/components/ui/SplitText'

export default function Terms() {
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
                text="Terms & Conditions"
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
                <h2 className="text-2xl font-light text-white mb-6">Acceptance of Terms</h2>
                <p className="text-white/70 text-base mb-6">
                  By accessing and using our website and services, you accept and agree to be bound by the terms and provision of this agreement.
                </p>

                <h2 className="text-2xl font-light text-white mb-6">Use License</h2>
                <p className="text-white/70 text-base mb-6">
                  Permission is granted to temporarily download one copy of the materials on our website for personal, non-commercial transitory viewing only.
                </p>

                <h2 className="text-2xl font-light text-white mb-6">Disclaimer</h2>
                <p className="text-white/70 text-base mb-6">
                  The materials on our website are provided on an 'as is' basis. We make no warranties, expressed or implied, and hereby disclaim all other warranties.
                </p>

                <h2 className="text-2xl font-light text-white mb-6">Limitations</h2>
                <p className="text-white/70 text-base mb-6">
                  In no event shall our company or its suppliers be liable for any damages arising out of the use or inability to use the materials on our website.
                </p>

                <h2 className="text-2xl font-light text-white mb-6">Accuracy of Materials</h2>
                <p className="text-white/70 text-base mb-6">
                  The materials appearing on our website could include technical, typographical, or photographic errors. We do not warrant that any of the materials are accurate.
                </p>

                <h2 className="text-2xl font-light text-white mb-6">Modifications</h2>
                <p className="text-white/70 text-base">
                  We may revise these terms of service at any time without notice. By using this website, you are agreeing to be bound by the current version of these terms.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
