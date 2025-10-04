import React from 'react'
import { motion } from "framer-motion";
import { Award, Target, Users } from 'lucide-react';
import { Card } from '../ui/card';

const Feature = () => {

    const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};
const floatingAnimation = {
  animate: {
    y: [-10, 10, -10],
    transition: {
      duration: 3,
      repeat: Number.POSITIVE_INFINITY,
      ease: "easeInOut",
    },
  },
};

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};



  return (
    <>
    <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              Why Join Our Talent Hunt?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're not just looking for employees – we're building a community
              of creative innovators
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              {
                icon: Users,
                title: "Collaborative Culture",
                description:
                  "Work with industry leaders and creative minds from around the world",
              },
              {
                icon: Target,
                title: "Growth Opportunities",
                description:
                  "Accelerate your career with mentorship and cutting-edge projects",
              },
              {
                icon: Award,
                title: "Recognition & Rewards",
                description:
                  "Your talent deserves recognition and competitive compensation",
              },
            ].map((feature, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="p-8 h-full hover:shadow-2xl transition-all duration-300 group">
                  <motion.div
                    className="mb-6"
                    variants ={floatingAnimation}
                    animate="animate"
                  >
                    <feature.icon className="w-12 h-12 text-purple-600 group-hover:text-pink-600 transition-colors duration-300" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      
    </>
  )
}

export default Feature
