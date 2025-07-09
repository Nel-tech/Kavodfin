'use client';

import { Facebook, Instagram, Twitter, Mail } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-black text-white px-6 py-10  md:px-20">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 border-b border-white/10 pb-6">
                {/* Brand */}
                <h2 className="text-2xl font-montserrat font-bold text-yellow-400">
                    KavodFin
                </h2>

                {/* Social Icons */}
                <div className="flex gap-5">
                    <a href="mailto:support@kavodfin.ng" aria-label="Email">
                        <Mail className="w-5 h-5 hover:text-yellow-400 transition" />
                    </a>
                    <a href="#" aria-label="Facebook">
                        <Facebook className="w-5 h-5 hover:text-yellow-400 transition" />
                    </a>
                    <a href="#" aria-label="Twitter">
                        <Twitter className="w-5 h-5 hover:text-yellow-400 transition" />
                    </a>
                    <a href="#" aria-label="Instagram">
                        <Instagram className="w-5 h-5 hover:text-yellow-400 transition" />
                    </a>
                </div>
            </div>

            {/* Copyright */}
            <div className="text-center text-xs text-gray-500 mt-6">
                &copy; {new Date().getFullYear()} KavodFin. All rights reserved.
            </div>
        </footer>
    );
}
