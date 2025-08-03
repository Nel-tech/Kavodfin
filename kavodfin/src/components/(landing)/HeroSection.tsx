"use client";

import type React from "react";
import { motion, Variants } from "framer-motion";

interface HeroProps {
  children?: React.ReactNode;
}

function HeroSection({ children }: HeroProps) {
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeInOut" as const,
      },
    },
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
      },
    },
  };

  const floatingVariants: Variants = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: [0.42, 0, 0.58, 1],
      },
    },
  };

  return (
    <section className="min-h-[90vh] relative pt-20 pb-16 text-white overflow-hidden">
      {/* Grid Overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 2 }}
        className="absolute inset-0 w-full h-full z-0"
      >
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="currentColor" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </motion.div>

      {/* Floating Orbs */}
      <motion.div
        variants={floatingVariants}
        animate="animate"
        className="absolute top-1/4 left-1/4 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl"
      />
      <motion.div
        variants={floatingVariants}
        animate="animate"
        style={{ animationDelay: "2s" }}
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-yellow-400/5 rounded-full blur-3xl"
      />

      {/* Sticky Header */}
      <header className="absolute top-0 left-0 w-full z-20 px-6 py-4">{children}</header>

      {/* Hero Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 lg:pt-24"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: Headline and subhead */}
          <motion.div variants={itemVariants} className="space-y-6">
            <motion.h1
              variants={itemVariants}
              className="text-3xl lg:text-5xl font-montserrat font-black leading-snug tracking-tight"
            >
              <span className="block text-white/90 mb-2">What I&apos;m About to Share</span>
              <span className="block bg-gradient-to-r from-yellow-400 via-yellow-300 to-amber-400 bg-clip-text text-transparent mb-2">
                Could&apos;ve Saved Daniel
              </span>
              <span className="block text-white/90 mb-4">From Blowing His Entire Account…</span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-xl font-montserrat text-white/80 leading-snug"
            >
              And It Might Be Exactly What You Need to Start{" "}
              <span className="bg-gradient-to-r from-yellow-400 to-amber-400 bg-clip-text text-transparent ">
                Earning in Dollars Weekly!
              </span>
            </motion.p>
          </motion.div>

          {/* Right: Key bullet points */}
         <motion.div variants={itemVariants} className="space-y-6">
  <div className="text-white/90 text-lg font-montserrat">
    <p>
      In just <span className="text-yellow-400">4 weeks</span>, you’ll discover how to copy proven trades, grow consistent cashflow, and if you don’t profit — <span className="text-yellow-400">$100</span> is yours.
    </p>
    <p className="mt-3">
      Over <span className="text-yellow-400">1,700 Nigerians</span> have already started earning in dollars — now it’s your turn.
    </p>
  </div>

  <ul className="space-y-4 text-white/80  text-base font-montserrat list-disc list-inside pt-4">
    <li>Copy real-time trades from expert traders</li>
    <li>Grow weekly cashflow — even with a small account</li>
    <li>
      Earn your first <span className="text-yellow-400 font-semibold">$300 – $1,000+</span> in 30 days
    </li>
    <li>
      If you don’t profit, get <span className="text-yellow-400 font-semibold">$100 cash</span> (Terms apply)
    </li>
  </ul>

  <p className="text-white/60 text-base mt-4">
    Watch the video below and see why <span className="text-yellow-400 font-semibold">1,700+ Nigerians</span> trust us.
  </p>
</motion.div>

        </div>
      </motion.div>
    </section>
  );
}

export default HeroSection;
