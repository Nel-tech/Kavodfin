'use client';

import Image from "next/image";
import { CheckCircle } from "lucide-react";
import Frame1 from '../../../public/images/Frame1.png';
import { Button } from "@/components/ui/button";

function MoreInfo() {
    const points = [
        "Promote high-payout pips and signals with zero experience needed",
        "Leverage expert daily signals to drive live changing results",
        "Earn fast profit — just plug in and grow "
    ];


    return (
        <section className="py-20  px-6 md:px-20 bg-white mt-[4rem]">
            <div className="flex flex-col-reverse md:flex-row items-center gap-16">

                {/* Left: Text Content */}
                <div className="md:w-1/2 text-left">
                    <h2 className="font-montserrat text-2xl lg:text-3xl md:text-4xl font-bold text-green-900 mb-4 leading-relaxed ">
                        Trade Smarter. Take Profits. <br />
                        <span className="text-yellow-500">We’ll Do the Hard Part</span>
                    </h2>

                    {/* Benefit List */}
                    <ul className="space-y-4 mb-8">
                        {points.map((point, i) => (
                            <li key={i} className="flex items-start gap-3 text-gray-800 font-inter">
                                <CheckCircle className="w-5 h-5 text-green-700 mt-1" />
                                <span className="text-base">{point}</span>
                            </li>
                        ))}
                    </ul>

                    {/* CTA */}

                      <a
                        href="https://chat.whatsapp.com/FEZGuJbpOof60XCaerA9zo"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Button className="bg-yellow-400 cursor-pointer  hover:bg-yellow-500 text-black font-bold px-8 py-3 rounded-lg shadow-lg transition-all duration-300">
                        Start Promoting Today
                    </Button>
                    </a>
                </div>

                {/* Right: Image */}
                <div className="md:w-1/2 flex justify-center">
                    <Image
                        src={Frame1}
                        alt="Phone Stack With Money"
                        width={400}
                        height={400}
                        className="shadow-lg w-64 sm:w-72 md:w-96" 
                    />
                </div>

            </div>
        </section>
    );
}

export default MoreInfo;
