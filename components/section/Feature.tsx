import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Award, Target, Users } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SpotlightCard from "../ui/SpotlightCard";

gsap.registerPlugin(ScrollTrigger);

const featuresData = [
  {
    icon: Users,
    title: "Collaborative Culture",
    description:
      "Work with industry leaders and creative minds from around the world. Share ideas, innovate, and grow together in a community that values creativity.",
  },
  {
    icon: Target,
    title: "Growth Opportunities",
    description:
      "Accelerate your career with mentorship, workshops, and cutting-edge projects. Explore new domains and sharpen your skills with industry leaders.",
  },
  {
    icon: Award,
    title: "Recognition & Rewards",
    description:
      "Your talent deserves recognition and competitive compensation. We celebrate your achievements and encourage  growth.",
  },
  {
    icon: Users,
    title: "Global Exposure",
    description:
      "Collaborate with international clients and teams, gaining insights and perspectives that expand your professional horizon.",
  },
  {
    icon: Target,
    title: "Creative Freedom",
    description:
      "Bring your ideas to life with autonomy and support. Shape your work environment and contribute to meaningful projects.",
  },
  {
    icon: Award,
    title: "Innovative Projects",
    description:
      "Work on next-gen technology, interactive designs, and unique campaigns that push boundaries and leave a mark.",
  },
];

const Feature = () => {
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Smooth infinite marquee
    const marquee = marqueeRef.current;
    if (marquee) {
      gsap.to(marquee, {
        x: "-50%",
        duration: 60,
        repeat: -1,
        ease: "linear",
      });
    }
  }, []);

  return (
    <section className="relative py-24 md:py-32 bg-black text-white overflow-hidden">
      {/* Huge Marquee Text */}
      <div className="absolute rotate-45 top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div
          ref={marqueeRef}
          className="flex whitespace-nowrap text-[12vw] md:text-[15vw] font-extrabold opacity-10 uppercase tracking-wide"
        >
          <span className="mr-20">
            Talent Hunt • Creativity • Innovation • Growth • Recognition •
          </span>
          <span className="mr-20">
            Talent Hunt • Creativity • Innovation • Growth • Recognition •
          </span>
        </div>
      </div>

      <div className="container md:flex md:gap-16 md:mt-36 mx-auto px-6 relative z-10">
        {/* Heading */}
        <motion.div
          className="text-left mb-16 md:mb-24"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6">
            Why Join Our Talent Hunt?
          </h2>
          <p className="text-sm md:text-base text-gray-300 max-w-4xl">
            We're building a community of creative innovators who thrive on
            collaboration, growth, and recognition. Experience the future of
            professional excellence.
          </p>
        </motion.div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-1">
          {featuresData.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              >
              <SpotlightCard
                key={index}
                className="w-full"
                spotlightColor="rgba(0, 229, 255, 0.2)"
              >
                <p className="text-xl md:text-2xl font-bold py-2 md:py-4 flex items-center gap-2">
                  {feature.title} <ArrowUpRight size={70} opacity={0.5} />
                </p>
                <p className="text-sm md:text-base">{feature.description}</p>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Feature;
