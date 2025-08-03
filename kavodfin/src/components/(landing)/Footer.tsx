'use client';

export default function Footer() {
    return (
        <footer className="bg-black text-white px-6 py-10 md:px-20">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 border-b border-white/10 pb-6">
                {/* Brand */}
                <h2 className="text-2xl font-montserrat font-bold text-yellow-400">
                    KavodFin
                </h2>

                
                
            </div>

            {/* Disclaimer */}
            <div className="text-xs text-gray-400 mt-6 leading-relaxed text-center max-w-3xl mx-auto">
                This site is not part of the Facebook website or Facebook Inc. Additionally, this site is NOT endorsed by Facebook in any way.
                <br />
                FACEBOOK is a trademark of FACEBOOK, Inc.
                <br />
               <span className="block pt-2"> &copy; {new Date().getFullYear()} KavodFin. All rights reserved.</span>
            </div>
        </footer>
    );
}
