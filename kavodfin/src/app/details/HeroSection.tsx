import React from 'react'
 import Link from "next/link"
import {  Users, Lock } from "lucide-react"
function HeroSection() {
  return (
      <div className=' mx-auto px-4 h-[100vh] pt-[12rem] pb-28  bg-gradient-to-br from-green-900 via-black to-green-800'>
          {/* Header */}
          <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md shadow-md">
              <div className="px-1 flex items-center justify-between py-5 md:px-12 lg:px-20">
                  <Link
                      href="/"
                      className="text-2xl font-montserrat font-bold text-yellow-400 tracking-wide hover:opacity-90 transition"
                  >
                      KavodFin
                  </Link>
                  <div className="hidden md:flex items-center space-x-2 text-white">
                      <Lock className="h-4 w-4" />
                      <span className="text-sm font-medium">Trusted Platform</span>
                  </div>
              </div>
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


          {/* Hero Section */}
          <div className="text-center mb-16">
              <div className="inline-flex items-center font-montserrat space-x-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
                  <Users className="h-4 w-4" />
                  <span>Join 2,500+ Successful Traders</span>
              </div>

              <h1 className="text-4xl font-montserrat md:text-6xl font-bold text-white mb-6 leading-tight">
                  Why Smart Traders Choose{" "}
                  <span className=" text-yellow-500 font-montserrat">
                      KavodFin
                  </span>
              </h1>

              <p className="text-xl md:text-2xl text-white max-w-3xl mx-auto leading-relaxed">
                  Join thousands of traders getting real results daily with high-accuracy Forex signals, expert support &
                  total freedom.
              </p>
          </div>
    </div>
  )
}

export default HeroSection