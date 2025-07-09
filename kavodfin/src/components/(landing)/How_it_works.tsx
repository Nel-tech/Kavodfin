'use client';

import { motion } from 'framer-motion';
import {
  Wallet,
  SignalHigh,
  Share2,
  Coins,
} from 'lucide-react';

export default function HowItWorksSection() {
  const steps = [
    {
      id: 1,
      title: 'Join the Network',
      description: 'Sign up for free to gain access to your KavodFin dashboard — no experience needed.',
      icon: Wallet,
    },
    {
      id: 2,
      title: 'Get Daily Signals',
      description: 'High pips, quality & accurate signals that is tailored for you to succeed',
      icon: SignalHigh,
    },
    {
      id: 3,
      title: 'Share Your Referral Link',
      description: 'Share our link to family, and friends, its all about win win for everybody',
      icon: Share2,
    },
    {
      id: 4,
      title: 'Earn Daily Profit',
      description: 'Watch your wallet grow as you make proper use of this life changing opportunity.',
      icon: Coins,
    },
  ];

  return (
    <section id="how-it-works" className=" bg-white py-24 px-6 md:px-20 text-center">
      <h2 className="text-3xl font-montserrat md:text-4xl font-bold text-green-900 mb-16">
        How It Works
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
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
            </motion.div>
          );
        })}
      </div>

      {/* <div className="mt-20">
        <p className="text-lg font-semibold text-green-900 font-inter max-w-xl mx-auto">
          No Trading Skills? No Problem. Just Plug in, Share, and Start Earning!
        </p>
      </div> */}
    </section>

  );
}
