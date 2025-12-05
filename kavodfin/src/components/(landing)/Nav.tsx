'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';



function Nav() {
   
    const [hasMounted, setHasMounted] = useState(false);

    useEffect(() => {
        setHasMounted(true);
    }, []);

    if (!hasMounted) return null;



    return (
        <div className="w-full">
            <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md shadow-md px-1 flex items-center justify-between py-5 md:px-12 lg:px-20">
                <Link
                    href="/"
                    className="ml-2 text-2xl font-montserrat font-bold text-yellow-400 tracking-wide hover:opacity-90 transition"
                >
                    KavodFin
                </Link>

            </nav>

       
            
        </div>
    );
}

export default Nav;
