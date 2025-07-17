'use client'

import {steps} from '../../helpers/Data'
import { motion } from "framer-motion";

export default function HowItWorksSection() {
  
  return (
    <section id="how-it-works" className="bg-white py-24 px-6 md:px-20 text-center">
      <h2 className="text-3xl font-montserrat md:text-4xl font-bold text-green-900 mb-16">
        🛠 How It Works – Simple 3-Step Process
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {steps.map((step, index) => {
          const Icon = step.icon;
          return (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative bg-green-900 text-white border border-yellow-400/30 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 hover:scale-105 group"
            >
              <motion.div
                className="flex justify-center mb-6"
                whileHover={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 0.8 }}
              >
                <Icon className="w-14 h-14 text-yellow-400" />
              </motion.div>

              <h3 className="text-xl font-bold font-montserrat mb-3 group-hover:text-yellow-300 transition">
                {step.title}
              </h3>
              <p className="text-gray-200 font-inter text-sm leading-relaxed">
                {step.description}
              </p>

              {step.button && (
                <a
                  href={step.button.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 mt-4 px-5 py-2 bg-yellow-400 text-green-900 font-semibold rounded-md shadow hover:bg-yellow-300 transition-all duration-200 transform hover:scale-105 active:scale-95"
                >
                  {step.button.icon && <step.button.icon className="w-5 h-5" />}
                  {step.button.label}
                </a>
              )}

            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
