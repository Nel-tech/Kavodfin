'use client';

import { useState, useEffect } from 'react';
import { Dialog } from '@headlessui/react';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { usePathname } from 'next/navigation';
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from 'framer-motion';


function Nav() {
    const pathname = usePathname();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [hasMounted, setHasMounted] = useState(false);

    useEffect(() => {
        setHasMounted(true);
    }, []);

    if (!hasMounted) return null;

    const navigation = [
        // { name: 'Home', href: '/' },
        { name: 'About', href: '#about' },
        { name: 'How It Works', href: '#how-it-works' },
    ];

    return (
        <div className="w-full">
            <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md shadow-md px-1 flex items-center justify-between py-5 md:px-12 lg:px-20">
                <Link
                    href="/"
                    className="text-2xl font-montserrat font-bold text-yellow-400 tracking-wide hover:opacity-90 transition"
                >
                    KavodFin
                </Link>




                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-8">
                    {navigation.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            className={`text-[1.1rem] font-inter uppercase tracking-wide font-medium transition duration-300 ${pathname === item.href
                                    ? 'text-yellow-400 underline underline-offset-4'
                                    : 'text-white hover:text-yellow-300'
                                }`}
                        >
                            {item.name}
                        </a>
                    ))}
                </div>

                {/* CTA Button */}
                <div className="hidden md:flex">
                   
                        <Link href='/details'>
                        
                        <Button className="bg-yellow-400 cursor-pointer  text-black font-inter hover:bg-yellow-500 font-semibold px-4 py-5 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
                            Get Started
                        </Button>
                        </Link>
                  

                </div>

                {/* Mobile Menu Icon */}
                <div className="md:hidden">
                    <button
                        type="button"
                        onClick={() => setMobileMenuOpen(true)}
                        className="p-2 text-white hover:text-yellow-400 transition"
                    >
                        <Menu className="h-6 w-6" />
                    </button>
                </div>
            </nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                        <motion.div
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ type: "tween", duration: 0.4 }}
                            className="fixed inset-0 z-40 bg-black/70 backdrop-blur"
                        />

                        <motion.div
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ type: "tween", duration: 0.4 }}
                            className="fixed inset-y-0 right-0 z-50 w-full max-w-xs bg-green-900 text-white px-6 py-6"
                        >
                            <Dialog.Panel>
                                <div className="flex items-center justify-between">
                                    {/* <h2 className="text-xl font-bold text-yellow-400">KavodFin</h2> */}
                                    <button
                                        type="button"
                                        onClick={() => setMobileMenuOpen(false)}
                                        className="text-white"
                                    >
                                        <X className="h-6 w-6" />
                                    </button>
                                </div>

                                <div className="mt-8 space-y-6">
                                    {navigation.map((item) => (
                                        <a
                                            key={item.name}
                                            href={item.href}
                                            className={`block text-lg font-semibold transition ${pathname === item.href
                                                    ? 'text-yellow-400 underline'
                                                    : 'hover:text-yellow-300'
                                                }`}
                                            onClick={() => setMobileMenuOpen(false)}
                                        >
                                            {item.name}
                                        </a>
                                    ))}

                                    <Link href='/details'>
                                    
                                    <Button className="cursor-pointer mt-6 w-full bg-yellow-400 text-black hover:bg-yellow-500 font-semibold px-6 py-4 rounded-lg shadow-md transition-all">
                                        Get Started
                                    </Button>
                                    </Link>

                                </div>
                            </Dialog.Panel>
                        </motion.div>
                    </Dialog>
                )}
            </AnimatePresence>
        </div>
    );
}

export default Nav;
