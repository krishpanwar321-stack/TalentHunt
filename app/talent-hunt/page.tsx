"use client"

import { motion } from "framer-motion"
import { Palette, PenTool, BarChart3, Users, Zap, Globe } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const scaleOnHover = {
  whileHover: { scale: 1.05 },
  whileTap: { scale: 0.95 },
}

export default function TalentHuntPage() {
  const categories = [
    {
      icon: Palette,
      title: "Creative Designers",
      description: "Visual storytellers who bring brands to life through innovative design",
      skills: ["UI/UX Design", "Brand Identity", "Motion Graphics", "Illustration"],
      color: "from-pink-500 to-rose-500",
    },
    {
      icon: PenTool,
      title: "Content Writers",
      description: "Wordsmiths who craft compelling narratives that engage and convert",
      skills: ["Copywriting", "Content Strategy", "SEO Writing", "Brand Voice"],
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: BarChart3,
      title: "Digital Strategists",
      description: "Data-driven thinkers who develop winning marketing strategies",
      skills: ["Campaign Strategy", "Analytics", "Market Research", "ROI Optimization"],
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Users,
      title: "Social Media Influencers",
      description: "Community builders who create authentic connections with audiences",
      skills: ["Content Creation", "Community Management", "Brand Partnerships", "Trend Analysis"],
      color: "from-purple-500 to-violet-500",
    },
    {
      icon: Zap,
      title: "Performance Marketers",
      description: "Growth hackers who optimize campaigns for maximum impact",
      skills: ["Paid Advertising", "Conversion Optimization", "A/B Testing", "Attribution Modeling"],
      color: "from-orange-500 to-red-500",
    },
    {
      icon: Globe,
      title: "Digital Innovators",
      description: "Tech-savvy creators who push the boundaries of digital marketing",
      skills: ["Marketing Automation", "AI/ML Applications", "Web Development", "Data Science"],
      color: "from-indigo-500 to-purple-500",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 overflow-hidden">
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-0 left-0 w-full h-full opacity-10"
            animate={{
              backgroundPosition: ["0% 0%", "100% 100%"],
            }}
            transition={{
              duration: 20,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
            style={{
              backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
              backgroundSize: "50px 50px",
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
            <h1 className="text-6xl md:text-7xl font-bold text-white mb-6">
              Talent Hunt
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
                Details
              </motion.span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
              Discover the opportunities waiting for you in our comprehensive talent acquisition program. We're looking
              for passionate individuals across multiple disciplines.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Campaign Overview */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-bold text-gray-900 mb-6">Campaign Overview</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Our Talent Hunt is more than just recruitment – it's a movement to discover and nurture the next
              generation of marketing innovators. We believe that great talent comes in many forms, and we're committed
              to creating an inclusive environment where creativity thrives.
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-8 mb-16"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              {
                title: "Global Reach",
                value: "50+",
                description: "Countries represented in our search",
              },
              {
                title: "Open Positions",
                value: "200+",
                description: "Opportunities across all levels",
              },
              {
                title: "Success Rate",
                value: "95%",
                description: "Of hired talent still with us after 2 years",
              },
            ].map((stat, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="p-8 text-center hover:shadow-xl transition-all duration-300">
                  <motion.div
                    className="text-5xl font-bold text-purple-600 mb-2"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    {stat.value}
                  </motion.div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{stat.title}</h3>
                  <p className="text-gray-600">{stat.description}</p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Talent Categories */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-bold text-gray-900 mb-6">Talent Categories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're seeking exceptional individuals across diverse marketing disciplines
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {categories.map((category, index) => (
              <motion.div key={index} variants={fadeInUp} {...scaleOnHover}>
                <Card className="p-8 h-full hover:shadow-2xl transition-all duration-300 group cursor-pointer">
                  <div
                    className={`w-16 h-16 rounded-full bg-gradient-to-r ${category.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <category.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors duration-300">
                    {category.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{category.description}</p>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-gray-900">Key Skills:</h4>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, skillIndex) => (
                        <motion.span
                          key={skillIndex}
                          className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm group-hover:bg-purple-100 group-hover:text-purple-700 transition-colors duration-300"
                          whileHover={{ scale: 1.05 }}
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-bold text-white mb-6">Found Your Perfect Match?</h2>
            <p className="text-xl text-purple-100 mb-12 max-w-2xl mx-auto">
              Take the next step in your career journey. Apply now and join our community of creative innovators.
            </p>
            <Link href="/apply">
              <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 px-12 py-4 text-lg font-semibold">
                Apply Now
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
