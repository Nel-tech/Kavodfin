"use client"

import { Button } from "@/components/ui/button"
import {DialogDemo} from "../(landing)/Dialog";

export default function WhatToDoNow() {


  return (
    <>
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-10">
          {/* Main Content */}
          <div className="flex flex-col h-full">
           <section className="bg-slate-800/80 backdrop-blur-md border border-slate-700 text-white px-6 py-12 rounded-xl shadow-lg flex-1 flex flex-col justify-between font-montserrat">
  <div className="space-y-6">
    <h2 className="text-3xl font-bold text-yellow-400 tracking-tight">
      What To Do Now
    </h2>

    <p className="text-lg text-white/80 leading-relaxed">
      Follow these simple steps to get started with our proven Forex system that’s already helping hundreds earn weekly in dollars.
    </p>

    <ol className="list-decimal list-inside text-base md:text-lg text-gray-200 leading-relaxed space-y-4 pl-2">
      <li>
        <span className=" text-white">Watch the short video above</span> — it contains key info to help you start right.
      </li>
      <li>
        <span className=" text-white">Fill out the form below</span> to reserve your spot before it closes.
      </li>
      <li>
        <span className=" text-white">Connect with the admin immediately</span> — you’ll be guided step-by-step.
      </li>
    </ol>

    <div className="space-y-4 mt-6">
      <p className="text-white/70 text-base">
        Don’t fall for random signals and hype — follow a system backed by results.
      </p>
      <p className="text-yellow-400  text-lg">
        Get real results — and still pay you $100. No risks, just action.
      </p>
      <p className="text-sm text-white/40 italic pt-2">
        *Only a few spots left. This opportunity is limited to action-takers.
      </p>
    </div>
  </div>
</section>

          </div>

          {/* Enhanced Forex Banner */}
          <div className="flex flex-col h-full">
            <div className="bg-gradient-to-br from-emerald-900 via-emerald-800 to-slate-900 border-2 border-emerald-500/30 text-white p-8 rounded-xl shadow-2xl relative overflow-hidden flex-1 flex flex-col">
              {/* Animated Background Elements */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-6 right-6 text-7xl animate-pulse">💰</div>
                <div className="absolute bottom-6 left-6 text-5xl animate-bounce">📈</div>
                <div className="absolute top-1/3 right-1/4 text-3xl animate-pulse delay-1000">💎</div>
                <div className="absolute bottom-1/3 right-1/3 text-4xl animate-pulse delay-500">🚀</div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-9xl opacity-5 font-bold">
                  $
                </div>
              </div>

              {/* Content */}
              <div className="relative z-10 flex flex-col h-full">
                {/* Header */}
                <div className="text-center mb-6">
                  <div className="inline-block bg-gradient-to-r from-yellow-400 to-yellow-300 text-black px-4 py-2 rounded-full text-xs font-bold mb-3 animate-pulse">
                    🔥 EXCLUSIVE VIP ACCESS
                  </div>
                  <h3 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-300 to-emerald-400 mb-3 tracking-wider">
                    KAVODFIN
                  </h3>
                  <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 to-yellow-400 mx-auto rounded-full"></div>
                </div>

                {/* Main Description */}
                <div className="bg-slate-800/70 rounded-xl p-6 mb-6 border border-emerald-500/30 backdrop-blur-sm">
                  <div className="text-center mb-4">
                    <h4 className="text-xl font-bold text-emerald-300 mb-2">VIP SIGNAL / MENTORSHIP GROUP</h4>
                    <p className="text-sm text-gray-300 leading-relaxed">
                      WHERE I EARN IN DOLLARS TRADING GLOBAL CURRENCY WITH CONFIDENCE
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div className="bg-emerald-900/50 rounded-lg p-3 border border-emerald-500/20">
                      <div className="text-2xl font-bold text-yellow-400">95%+</div>
                      <div className="text-xs text-gray-300">Success Rate</div>
                    </div>
                    <div className="bg-emerald-900/50 rounded-lg p-3 border border-emerald-500/20">
                      <div className="text-2xl font-bold text-yellow-400">$USD</div>
                      <div className="text-xs text-gray-300">Earnings</div>
                    </div>
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-3 mb-6 flex-1">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                    <span className="text-sm text-gray-200">Real-time trading signals</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse delay-200"></div>
                    <span className="text-sm text-gray-200">1-on-1 mentorship sessions</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse delay-400"></div>
                    <span className="text-sm text-gray-200">Global currency markets</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse delay-600"></div>
                    <span className="text-sm text-gray-200">Risk management strategies</span>
                  </div>
                </div>

                {/* Stats */}
                <div className="bg-gradient-to-r from-emerald-800/50 to-slate-800/50 rounded-lg p-4 border border-emerald-500/20">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-lg font-bold text-yellow-400">500+</div>
                      <div className="text-xs text-gray-400">Members</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-emerald-400">24/7</div>
                      <div className="text-xs text-gray-400">Support</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-yellow-400">Global</div>
                      <div className="text-xs text-gray-400">Markets</div>
                    </div>
                  </div>
                </div>

                {/* Rating */}
                <div className="mt-6 text-center">
                  <div className="flex justify-center space-x-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <span
                        key={i}
                        className="text-yellow-400 text-lg animate-pulse"
                        style={{ animationDelay: `${i * 200}ms` }}
                      >
                        ⭐
                      </span>
                    ))}
                  </div>
                  <p className="text-xs text-gray-400">Trusted by Elite Traders Worldwide</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

     <div className="flex justify-center pt-8">
                  <DialogDemo
          trigger={
            <Button className="cursor-pointer font-montserrat uppercase bg-gradient-to-r from-emerald-600 to-emerald-400 hover:from-emerald-500 hover:to-emerald-300 text-white  text-lg px-8 py-10 rounded-lg shadow-lg hover:shadow-emerald-400/30 transition-all duration-300 transform hover:-translate-y-1">
              Register Now
            </Button>
          }
        />
              </div>
      
    </>
  )
}
