'use client';
import {DialogDemo} from "../(landing)/Dialog"; 
import { Button } from "@/components/ui/button";

function FinalCTA() {


    return (
        <>
        
        <section className="relative  mt-[4rem]  text-white px-6 flex flex-col items-center justify-center text-center ">
           
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
          

            
            <div className="relative w-full max-w-2xl aspect-video rounded-xl overflow-hidden shadow-2xl hover:scale-105 transition-transform duration-300 z-10">
                <video
                    controls
                    poster="/video/kavodfin-thumb.png"  
                    className="w-full h-full object-cover"
                >
                    <source src="/video/KavodFin.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>



        </section>
        <div className="flex justify-center pt-[2rem]">
                   <DialogDemo
          trigger={
            <Button className="cursor-pointer font-montserrat uppercase bg-gradient-to-r from-emerald-600 to-emerald-400 hover:from-emerald-500 hover:to-emerald-300 text-white font-bold text-lg px-8 py-10 rounded-lg shadow-lg hover:shadow-emerald-400/30 transition-all duration-300 transform hover:-translate-y-1">
              Register Now
            </Button>
          }
        />
        </div>

        </>
    );
}

export default FinalCTA;
