"use client"

import React from 'react'
import { motion } from "framer-motion"
import SplitText from '@/components/ui/SplitText'
import { ArrowUpRight, Users, Target, Award, Lightbulb, Globe, Zap } from 'lucide-react'

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: "easeOut" },
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.15,
    },
  },
}

export default function About() {
  const stats = [
    { number: "500+", label: "Talents Discovered", icon: Users },
    { number: "50+", label: "Projects Completed", icon: Target },
    { number: "95%", label: "Success Rate", icon: Award },
    { number: "24/7", label: "Support", icon: Globe },
  ]

  const values = [
    {
      icon: Lightbulb,
      title: "Innovation First",
      description: "We believe in pushing boundaries and creating groundbreaking solutions that set new industry standards."
    },
    {
      icon: Users,
      title: "Talent Focused",
      description: "Every great project starts with exceptional people. We're committed to finding and nurturing the best talent."
    },
    {
      icon: Zap,
      title: "Excellence Driven",
      description: "We don't settle for good enough. Our pursuit of excellence drives everything we do."
    }
  ]

  const team = [
    {
      name: "Sarah Johnson",
      role: "Creative Director",
      image: "/placeholder-user.jpg",
      description: "Visionary leader with 10+ years in digital innovation"
    },
    {
      name: "Michael Chen",
      role: "Technical Lead",
      image: "/placeholder-user.jpg", 
      description: "Full-stack expert passionate about cutting-edge technology"
    },
    {
      name: "Emily Rodriguez",
      role: "Strategy Consultant",
      image: "/placeholder-user.jpg",
      description: "Marketing strategist with a track record of success"
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
                text="About Us"
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
              className="text-white/70 text-xl sm:text-base mt-8 max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Where exceptional talent meets extraordinary opportunities
            </motion.p>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 px-6">
          <div className="container mx-auto">
            <motion.div
              className="grid grid-cols-2 lg:grid-cols-4 gap-8"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="text-center group"
                >
                  <div className="w-16 h-16 mx-auto mb-4 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20 group-hover:bg-white/20 transition-all duration-300">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-4xl font-thin text-white mb-2">{stat.number}</div>
                  <div className="text-white/70 text-base">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20 px-6">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              className="grid lg:grid-cols-2 gap-16 items-center"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div>
                <h2 className="text-5xl font-thin text-white mb-8">Our Mission</h2>
                <p className="text-white/70 text-base leading-relaxed mb-8">
                  We're on a mission to discover and nurture the world's most exceptional talent, 
                  connecting them with opportunities that shape the future of digital innovation.
                </p>
                <p className="text-white/70 text-base leading-relaxed">
                  Through our comprehensive talent hunt program, we identify, develop, and showcase 
                  individuals who have the potential to revolutionize the marketing industry.
                </p>
              </div>
              <div className="relative">
                <div className="w-full h-96 bg-gradient-to-br from-white/10 to-white/5 rounded-2xl backdrop-blur-sm border border-white/20 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center">
                      <Target className="w-12 h-12 text-white" />
                    </div>
                    <div className="text-white/70 text-lg">Visual Content Placeholder</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 px-6">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl font-thin text-white mb-8">Our Values</h2>
              <p className="text-white/70 text-base max-w-3xl mx-auto">
                The principles that guide everything we do and every decision we make.
              </p>
            </motion.div>

            <motion.div
              className="grid md:grid-cols-3 gap-8"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/10 transition-all duration-300 group"
                >
                  <div className="w-16 h-16 mb-6 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-white/20 transition-all duration-300">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-light text-white mb-4">{value.title}</h3>
                  <p className="text-white/70 text-base leading-relaxed">{value.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 px-6">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl font-thin text-white mb-8">Meet Our Team</h2>
              <p className="text-white/70 text-base max-w-3xl mx-auto">
                The passionate individuals behind our mission to discover and nurture exceptional talent.
              </p>
            </motion.div>

            <motion.div
              className="grid md:grid-cols-3 gap-8"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              {team.map((member, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="text-center group"
                >
                  <div className="w-32 h-32 mx-auto mb-6 bg-white/10 rounded-full overflow-hidden border-2 border-white/20 group-hover:border-white/40 transition-all duration-300">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-2xl font-light text-white mb-2">{member.name}</h3>
                  <div className="text-white/70 text-lg mb-4">{member.role}</div>
                  <p className="text-white/60 text-base leading-relaxed">{member.description}</p>
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
              <h2 className="text-5xl font-thin text-white mb-8">Ready to Join Us?</h2>
              <p className="text-white/70 text-base mb-12 max-w-2xl mx-auto leading-relaxed">
                Discover your potential and become part of the next generation of marketing innovators.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <motion.a
                  href="/apply"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black rounded-full font-semibold text-lg tracking-wide hover:bg-white/90 transition-all duration-300 group"
                  whileTap={{ scale: 0.95 }}
                >
                  Apply Now <ArrowUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                </motion.a>
                <motion.a
                  href="/talent-hunt"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-full font-semibold text-lg tracking-wide hover:bg-white/20 transition-all duration-300 border border-white/20 group"
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
