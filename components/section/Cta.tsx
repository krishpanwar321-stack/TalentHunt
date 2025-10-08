import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const Cta = () => {
  return (
    <>
      <section className="py-20 bg-black">
        <div className="container mx-auto px-6 text-left">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-[150px] font-bold text-white/45 mb-6 ">
              Ready to Start Your Journey?
            </h2>
            <p className="text-base text-white w-72 mb-12 text-left">
              Don't miss this opportunity to join a team that values innovation,
              creativity, and your unique perspective.
            </p>
            <Link href="/apply">
              <Button
                size="lg"
                className="bg-black hover:bg-black border rounded-3xl px-12 py-4 text-sm font-normal group"
              >
                Apply Today
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Cta;
