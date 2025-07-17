'use client';

import { HeroProps } from "@/types/type";
import Image from "next/image";
import HeroImage from '../../../public/images/Bg-Hand-with-phone.png';
import {Button} from '@/components/ui/button'

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
            <div className="text-center mt-16 flex flex-col items-center justify-center max-w-3xl mx-auto px-4 relative z-10">
                <p className="text-sm font-montserrat uppercase tracking-widest text-yellow-400 mb-4 animate-pulse">
                    Trusted by 10,000+ Traders
                </p>

                <h1 className="text-left text-4xl md:text-4xl lg:text-5xl lg:text-center font-extrabold font-montserrat leading-relaxed mb-6">
                    Daily Profitable Forex Signals Delivered Straight to You
                </h1>

                <p className="text-gray-300 text-left text-lg  lg:text-center font-inter max-w-xl mb-8">
                    Stop guessing and start winning. Join our signal group and get 90%+ accurate Forex trade alerts from experts — even if you&lsquo;re just starting out.
                </p>

                <a
                    href="https://chat.whatsapp.com/FEZGuJbpOof60XCaerA9zo"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Button className="bg-yellow-400 text-black font-bold px-5 py-6 rounded-sm shadow-lg hover:bg-yellow-500 transition-all duration-300">
                         Join Now on WhatsApp
                    </Button>
                </a>
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

            <div className="absolute top-[45rem] left-1/2 transform -translate-x-1/2 z-10">
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
