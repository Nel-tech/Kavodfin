"use client";

import { HeroProps } from "@/types/type";
import Image from "next/image";
import HeroImage from "../../../public/images/Bg-Hand-with-phone.png";
import { motion } from "framer-motion";

function HeroSection({ children }: HeroProps) {
    return (
        <section className="relative pt-[12rem] bg-gradient-to-br from-green-900 via-black to-green-800 text-white px-6 overflow-hidden">
            {/* Navigation injected from parent */}
            <header className="absolute top-0 left-0 w-full z-20 px-6 py-4">
                {children}
            </header>

            {/* Decorative SVG Grid Pattern */}
            <svg
                className="absolute inset-0 w-full h-full opacity-10 z-0"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
            >
                <defs>
                    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
                    </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>

            {/* Hero Content */}
            <div className="flex flex-col justify-center items-center h-full text-center relative z-10 max-w-4xl mx-auto">
                <p className="text-sm font-dmSerifDisplay md:text-base uppercase tracking-widest text-yellow-400 mb-4 animate-pulse">
                    Trusted by 10,000+ Traders
                </p>

                <h1 className="text-4xl font-dmSerifDisplay md:text-6xl font-extrabold leading-tight">
                    Why Just Watch Others <span className="text-yellow-400">Earn?</span>
                    <br /> Get Paid Daily With Our Signals 
                </h1>

                <p className="mt-6 text-lg font-inter tracking-wider text-gray-300 max-w-lg">
                    Become a pro in few days and join the group of winners in KavodFin.ng.
                </p>

                <div className="mt-10">
                    <button className="bg-yellow-400 font-inter hover:bg-yellow-500 text-black font-bold px-8 py-3 rounded-lg shadow-lg transition-all duration-300">
                        Start Earning Now
                    </button>
                </div>
            </div>

            
            <div className="relative mx-auto flex justify-center pt-[3rem] z-10">
                {/* Glowing Circle Background (Animated) */}
                <motion.div
                    className="absolute -top-16 left-1/2 -translate-x-1/2 w-[300px] h-[300px] bg-yellow-400 rounded-full opacity-20 blur-3xl z-0"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                />

               

                

                <Image
                    src={HeroImage}
                    alt="Image-of-a-Hand-Holding-a-phone"
                    width={400}
                    height={400}
                    className="relative z-10"
                />
            </div>
        </section>
    );
}

export default HeroSection;
