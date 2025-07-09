'use client'

import Image from "next/image";
import { motion } from "framer-motion";
import AboutImage from '../../../public/images/About-Img.png' 

export default function AboutPage() {
  return (
    <div className="bg-white text-gray-800 mt-[6rem]">

      {/* Hero Section */}
      <section className="relative px-6 md:px-20 pb-20 grid md:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold font-dmSerifDisplay text-green-700 leading-snug">
            About <span className="text-yellow-500">KavodFin</span>
          </h1>
          <p className="mt-6 text-lg text-gray-600 font-inter leading-relaxed">
            We&apos;re redefining the game and making sure defaulty disappear in the Forex space giving people everyday  tools to become successful in the financial market.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex justify-center"
        >
          <Image
            src={AboutImage}
            alt="About KavodFin"
            width={400}
            height={400}
            className="w-[250px] sm:w-[300px] md:w-[400px] h-auto"
          />

        </motion.div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-gray-50 py-16 px-6 md:px-20 grid md:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl font-bold mb-4 text-green-700">Our Mission</h2>
          <p className="text-gray-700 text-lg leading-relaxed font-inter">
            We empower both old and new traders the accurate means of becoming well experienced people. We Simplify You Earn.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h2 className="text-2xl font-bold mb-4 text-green-700">Our Vision</h2>
          <p className="text-gray-700 text-lg leading-relaxed font-inter">
            To make financial freedom accessible so anyone in anywhere can build income streams that scales.
          </p>
        </motion.div>
      </section>

      {/* Stats / Features */}
      <section className="py-20 px-6 md:px-20 bg-white">
        <div className="grid md:grid-cols-3 gap-10 text-center">
          {[
            { title: "10,000+ Traders", desc: "Our network is growing daily—real results, real money." },
            { title: "Global Reach", desc: "Our offer is for everybody. No restrictions" },
            { title: "Zero Experience Needed", desc: "Start, earn, withdraw no learning curve needed" },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-gray-50 border border-gray-200 p-8 rounded-xl shadow hover:shadow-md transition"
            >
              <h3 className="text-xl font-bold text-green-700 mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm font-inter">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 md:px-20 text-center bg-green-900 text-white ">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-dmSerifDisplay font-bold mb-6"
        >
          Ready to Start Earning with KavodFin?
        </motion.h2>
        <p className="text-gray-300 max-w-xl mx-auto mb-10">
          Join the wave of financially empowered traders. Fast payouts. No skills needed.
        </p>
        <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-8 py-3 rounded-lg shadow-md transition duration-300">
          Get Started Now
        </button>
      </section>
    </div>
  );
}
