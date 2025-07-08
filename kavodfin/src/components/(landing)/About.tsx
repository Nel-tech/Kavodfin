'use client'

import { motion } from "framer-motion";

export default function AboutPage() {
    return (
        <div className="bg-white  text-gray-800 mt-[6rem]">

            {/* Hero Section */}
            <section id="about" className="ml-[1rem] pb-[3rem] md:px-20">
                <motion.h1
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-3xl text-left lg:text-center lg:text-4xl md:text-6xl font-bold font-dmSerifDisplay text-green-700"
                >
                    About KavodFin
                </motion.h1>
                <p className="mt-6 text-left lg:text-lg  lg:text-center max-w-3xl mx-auto leading-relaxed text-gray-600 font-inter">
                    We&apos;re redefining affiliate marketing in the Forex space giving everyday people the tools to earn daily commissions.
                </p>
            </section>

            
            <section className=" ml-[1rem] lg:ml-0 grid md:grid-cols-2 gap-10 lg:py-16  md:px-20">
              
              <div>

                    <h2 className="text-2xl font-bold mb-4 text-green-700">Our Mission</h2>
                    <p className="text-gray-700  max-w-[20rem] lg:max-w-none font-inter leading-relaxed">
                        At KavodFin, our mission is to empower affiliates and aspiring entrepreneurs to earn through results based marketing  without needing trading experience.
                    </p>
              </div>
                

                
                  <div>

                    <h2 className=" text-2xl font-bold mb-4 text-green-700">Our Vision</h2>
                    <p className="text-gray-700 font-inter leading-relaxed">
                        We envision a financial future where anyone, regardless of location or skill, can monetize traffic and achieve financial independence through Forex affiliate marketing.
                    </p>
                  </div>
               
            </section>

            {/* Visual Cards Section */}
            <section className="py-20 px-6 md:px-20 bg-gray-50">
                <div className="grid md:grid-cols-3 gap-10 text-center">
                    {[
                        { title: "10,000+ Traders", desc: "Growing daily, backed by real profits." },
                        { title: "Global Reach", desc: "We work with traffic from every country." },
                        { title: "Zero Experience Needed", desc: "Plug in, promote, and earn daily." },
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.2 }}
                            className="bg-white border border-gray-200 p-8 rounded-xl shadow-md"
                        >
                            <h3 className="text-xl font-bold text-green-700">{item.title}</h3>
                            <p className="mt-2 text-gray-600">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 px-6 md:px-20 text-center">
                <h2 className=" text-2xl lg:text-3xl md:text-5xl font-dmSerifDisplay font-bold text-green-700">
                    Ready to Start Earning with KavodFin?
                </h2>
                <p className="mt-4 text-gray-600 max-w-xl mx-auto">
                    Join the wave of financially empowered traders promoting high-converting Forex offers.
                </p>
                <button className="mt-8 cursor-pointer bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-8 py-3 rounded-lg shadow-md transition duration-300">
                    Get Started Now
                </button>
            </section>
        </div>
    );
}
