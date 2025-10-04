import React from 'react'
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const Cta = () => {
  return (
    <>
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
      
    </>
  )
}

export default Cta
