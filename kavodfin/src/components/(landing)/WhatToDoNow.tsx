import {DialogDemo} from "../(landing)/Dialog"; 
import { Button } from "@/components/ui/button";

export default function WhatToDoNow() {
  return (
    <>
      <section className="bg-slate-800/80 backdrop-blur-md border border-slate-700 text-white px-6 py-12 mt-10 rounded-xl max-w-3xl mx-auto shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-yellow-400">What To Do Now:</h2>

        <ol className="list-decimal list-inside text-lg text-gray-200 leading-relaxed space-y-3">
          <li>Watch the short video above (don’t skip it)</li>
          <li>Fill out the form below to lock your spot</li>
          <li>Connect with the admin immediately for your quick setup</li>
        </ol>

        <p className="mt-6 text-base text-gray-300">
          This is your chance to do Forex the right way — no hype, no reckless signals.
        </p>
        <p className="mt-2 text-lg text-yellow-400 font-semibold">
          Just real results — or your ₦5,000 back, and $100 in your pocket.
        </p>
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
