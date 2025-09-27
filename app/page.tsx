"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Users, Target, Award } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import DarkVeil from "@/components/section/DarkVeil";
import SplitText from "@/components/ui/SplitText";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

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

const sections = [
  {
    heading: "Talent Hunt",
    paragraph: "Join the ultimate competition to showcase your skills and stand out among the best talent.",
    button: {
      text: "Participate Now",
      link: "/apply"
    },
    animation: {
      className: "absolute top-50 text-white text-8xl uppercase font-thin",
      delay: 140,
      duration: 0.6,
      ease: "power3.out",
      splitType: "chars",
      from: { opacity: 0, y: 40 },
      to: { opacity: 1, y: 0 },
      threshold: 0.1,
      rootMargin: "-100px",
      textAlign: "center"
    }
  },
  {
    heading: "Workshops & Mentorship",
    paragraph:"Get guidance from industry experts and enhance your skills through exclusive workshops.",
    button: {
      text: "Learn More",
      link: "/workshops"
    },
    animation: {
      className: "absolute top-50 text-white text-6xl uppercase font-light",
      delay: 160,
      duration: 0.6,
      ease: "power3.out",
      splitType: "words",
      from: { opacity: 0, y: 50 },
      to: { opacity: 1, y: 0 },
      threshold: 0.2,
      rootMargin: "-100px",
      textAlign: "center"
    }
  },
  {
    heading: "Networking Opportunities",
    paragraph: "Connect with like-minded individuals and expand your professional network.",
    button: {
      text: "Join Now",
      link: "/network"
    },
    animation: {
      className: "absolute top-50 text-white text-7xl uppercase font-medium",
      delay: 180,
      duration: 0.6,
      ease: "power3.out",
      splitType: "chars",
      from: { opacity: 0, y: 60 },
      to: { opacity: 1, y: 0 },
      threshold: 0.15,
      rootMargin: "-100px",
      textAlign: "center"
    }
  }
];







export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background Elements */}

        <div style={{ width: "100%", height: "100%", position: "relative" }}>
          <DarkVeil />
        </div>

        {/* <h2 className="absolute top-50 text-white text-8xl uppercase font-thin ">Talent Hunt </h2> */}

        <SplitText
          text="Talent Hunt"
          className="absolute top-50 text-white text-8xl uppercase font-thin "
          delay={70}
          duration={0.6}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-100px"
          textAlign="center"
        />

        <SplitText
          text="Talent Hunt"
          className="absolute top-50 text-white text-8xl uppercase font-thin "
          delay={140}
          duration={0.6}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-100px"
          textAlign="center"
        />
      </section>

      {/* Features Section */}
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
                    variants={floatingAnimation}
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

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-bold text-white mb-6">
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl text-purple-100 mb-12 max-w-2xl mx-auto">
              Don't miss this opportunity to join a team that values innovation,
              creativity, and your unique perspective.
            </p>
            <Link href="/apply">
              <Button
                size="lg"
                className="bg-white text-purple-600 hover:bg-gray-100 px-12 py-4 text-lg font-semibold group"
              >
                Apply Today
                <motion.div
                  className="ml-2"
                  animate={{ x: [0, 5, 0] }}
                  transition={{
                    duration: 1.5,
                    repeat: Number.POSITIVE_INFINITY,
                  }}
                >
                  <ArrowRight className="w-5 h-5" />
                </motion.div>
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
