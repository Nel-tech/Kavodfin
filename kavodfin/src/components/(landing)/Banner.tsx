'use client';

function FinalCTA() {
    return (
        <section className="relative  mt-[4rem] py-[2rem] h-[70vh] md:h-[80vh] bg-green-900 text-white px-6 flex flex-col items-center justify-center text-center overflow-hidden">
           
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
            {/* Title */}
            <h2 className="text-2xl lg:text-2xl md:text-2xl font-bold mb-10 font-montserrat leading-snug z-10">
                <span className="text-yellow-400">Still Confused?</span><br />
                Watch This Video to Learn More
            </h2>

            
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
    );
}

export default FinalCTA;
