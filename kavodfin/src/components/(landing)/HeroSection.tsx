"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { motion,Variants } from "framer-motion"


interface HeroProps {
  children?: React.ReactNode
}

function HeroSection({ children }: HeroProps) {
  

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

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeInOut" as const, // ✅ Casting it helps TypeScript recognize it
    },
  },
};

const floatingVariants: Variants = {
  animate: {
    y: [-10, 10, -10],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: [0.42, 0, 0.58, 1], // ✅ Valid cubic-bezier equivalent
    },
  },
};


  return (
    <>
      <section className="min-h-[60vh] relative pt-20 pb-16 bg-gradient-to-br from-emerald-950 via-slate-900 to-emerald-900 text-white overflow-hidden">
        {/* Animated Grid Overlay */}
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

        {/* Sticky Header Slot */}
        <header className="absolute top-0 left-0 w-full z-20 px-6 py-4">{children}</header>

        {/* Text Content Only */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 lg:pt-24 text-center"
        >
          <motion.div variants={itemVariants} className="space-y-8">
            {/* Main Headline */}
            <div className="space-y-4">
              <motion.h1
                variants={itemVariants}
                className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black leading-[0.9] tracking-tight"
              >
                <span className="block text-white/90 mb-2">What I&apos;m About to Share</span>
                <span className="block bg-gradient-to-r from-yellow-400 via-yellow-300 to-amber-400 bg-clip-text text-transparent mb-2">
                  Could&apos;ve Saved Daniel
                </span>
                <span className="block text-white/90 mb-4">From Blowing His Entire Account…</span>
              </motion.h1>

              <motion.p
                variants={itemVariants}
                className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-white/80 leading-tight"
              >
                And It Might Be Exactly What You Need to Start{" "}
                <span className="bg-gradient-to-r from-yellow-400 to-amber-400 bg-clip-text text-transparent">
                  Earning in Dollars Weekly!
                </span>
              </motion.p>
            </div>

            {/* Subheadlines */}
            <motion.div variants={itemVariants} className="space-y-6">
              <p className="text-lg sm:text-xl lg:text-2xl text-white/70 leading-relaxed font-medium">
                Give us just{" "}
                <span className="text-yellow-400 font-bold bg-yellow-400/10 px-2 py-1 rounded">4 weeks</span> — we&apos;ll
                show you how to copy trades and grow a steady Forex income.
              </p>

              <p className="text-lg sm:text-xl text-white/70 leading-relaxed">
                If you don&apos;t profit, we&apos;ll give you <span className="text-yellow-400 font-bold">₦100,000 in value</span>{" "}
                — guaranteed.
              </p>

              <p className="text-base sm:text-lg text-white/60 leading-relaxed">
                Watch the video & see why <span className="text-yellow-400 font-semibold">1,700+ Nigerians</span> trust
                us.
              </p>
            </motion.div>

            {/* CTA Section */}
            <motion.div variants={itemVariants} className="space-y-6">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <a href="https://chat.whatsapp.com/FEZGuJbpOof60XCaerA9zo" target="_blank" rel="noopener noreferrer">
                  <Button className="bg-gradient-to-r from-yellow-400 to-amber-400 hover:from-yellow-500 hover:to-amber-500 text-black font-bold text-lg px-8 py-8 rounded-xl shadow-2xl hover:shadow-yellow-400/25 transition-all duration-300 transform hover:-translate-y-1">
                     Register
                  </Button>
                </a>
              </motion.div>

              {/* Trust Indicators */}
              <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-6 text-sm text-white/60">
                {["No Credit Card Required", "Instant Access", "1,700+ Active Members"].map((text, index) => (
                  <motion.div
                    key={text}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1 + index * 0.1 }}
                    className="flex items-center gap-2"
                  >
                    <span className="text-yellow-400 text-base">✓</span>
                    <span className="font-medium">{text}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

     
    </>
  )
}

export default HeroSection
