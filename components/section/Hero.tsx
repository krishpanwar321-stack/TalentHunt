import React from 'react'
import SplitText from '../ui/SplitText';
import DarkVeil from '../ui/DarkVeil';
import { motion } from "framer-motion";
import { ArrowUpRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden px-4 sm:px-0">
      {/* Background */}
      <div className="absolute inset-0">
        <DarkVeil />
      </div>

      {/* Content Wrapper */}
      <div className="relative z-10 flex flex-col items-center gap-4 sm:gap-6 mt-16  text-center">

        {/* Heading */}
        <SplitText
          text="Talent Hunt"
          className="text-white font-thin tracking-tight leading-[1] 
                     text-[14vw] sm:text-[120px] uppercase"
          delay={120}
          duration={1}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 80 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-100px"
          textAlign="center"
        />

        {/* Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
          className="text-white/90 font-normal leading-relaxed 
                     text-[12px] sm:text-sm w-[90vw] sm:w-[32rem] px-2"
        >
          Join the ultimate competition to showcase your skills and stand out among the best talent.
        </motion.p>

        {/* CTA Button */}
        <motion.a
          href="/apply"
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 1.2, duration: 0.6, ease: "easeOut" }}
          className="mt-3 flex gap-1 items-center  sm:mt-4 px-6 sm:px-10 py-3 sm:py-4 bg-white text-black rounded-full font-semibold text-base sm:text-lg tracking-wide shadow-lg hover:shadow-2xl transition-all"
        >
          Get Started <ArrowUpRight size={19} />

        </motion.a>
      </div>
    </section>
  )
}

export default Hero
