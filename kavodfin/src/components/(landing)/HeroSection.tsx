'use client';

import { HeroProps } from "@/types/type";
import Image from "next/image";
import HeroImage from '../../../public/images/Bg-Hand-with-phone.png';

function HeroSection({ children }: HeroProps) {
    return (
        <section className="h-[110vh] relative lg:h-[170vh]  pt-[8rem] pb-28 bg-gradient-to-br from-green-900 via-black to-green-800 text-white px-6 overflow-hidden">
           
            <header className="absolute top-0 left-0 w-full z-20 px-6 py-4">
                {children}
            </header>

            
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
            <div className="text-left items-start justify-start  mt-[3.5rem] flex flex-col lg:justify-center lg:items-center lg:mx-auto lg:text-center relative z-10 max-w-4xl ">
                <p className="text-sm font-dmSerifDisplay md:text-base uppercase tracking-widest text-yellow-400 mb-4 animate-pulse">
                    Trusted by 10,000+ Traders
                </p>

                <h1 className="text-3xl leading-normal sm:text-2xl md:text-6xl lg:text-5xl font-dmSerifDisplay font-extrabold lg:leading-tight">
                    Why Just Watch Others <span className="text-yellow-400">Earn?</span>
                    <br /> Get Paid Daily With Our Signals
                </h1>

                <p className=" leading-relaxed text-sm sm:text-base lg:text-lg max-w-sm sm:max-w-md lg:max-w-lg mt-6 font-inter tracking-wide text-gray-300">
                    Become a pro in just a few days and join thousands already winning with KavodFin.ng.
                </p>


                <div className="mt-10">
                    <button className="bg-yellow-400 font-inter hover:bg-yellow-500 text-black font-bold px-8 py-3 rounded-lg shadow-lg transition-all duration-300">
                        Start Earning Now
                    </button>
                </div>
            </div>

           
           
            <div className="absolute bottom-0 left-0 w-full overflow-hidden z-20">
                {/* Main Wave */}
                <svg
                    className="relative block w-full h-24"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1200 120"
                    preserveAspectRatio="none"
                >
                    <path
                        d="M0,96L48,85.3C96,75,192,53,288,58.7C384,64,480,96,576,96C672,96,768,64,864,58.7C960,53,1056,75,1152,85.3L1200,96L1200,120L1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
                        fill="white"
                        className="opacity-90"
                    />
                </svg>

             
                <svg
                    className="absolute top-0 left-0 w-full h-24"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1200 120"
                    preserveAspectRatio="none"
                >
                    <path
                        d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,69.3C960,85,1056,107,1152,112L1200,117.3L1200,120L1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
                        fill="rgba(255, 255, 255, 0.1)"
                    />
                </svg>

               
               
                
            </div>

            <div className="absolute top-[39rem] left-1/2 transform -translate-x-1/2 z-10">
                <Image
                    src={HeroImage}
                    alt="Image-of-a-Hand-Holding-a-phone"
                    width={400}
                    height={400}
                    className="hidden lg:block"
                />
            </div>


           
        </section>
    );
}

export default HeroSection;
