"use client";

import { ReactNode, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

type DialogDemoProps = {
  trigger: ReactNode;
};

export function DialogDemo({ trigger }: DialogDemoProps) {
  const [phone, setPhone] = useState("");

  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <form>
        <DialogContent
          className=" max-w-[95vw] sm:max-w-[800px] w-full bg-white text-gray-900 shadow-xl rounded-xl font-montserrat px-4 py-6 max-h-[90vh] overflow-y-auto overflow-x-hidden"
        >
       <DialogHeader className=" px-8 pt-[3rem] mx-auto text-center ">
  <DialogTitle className="text-emerald-700 text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl font-semibold leading-tight sm:leading-snug">
    How to Make $3,000 – $5,000/Month From Forex Trading
  </DialogTitle>
  <DialogDescription className="mt-2 text-xs xs:text-sm sm:text-base text-gray-600 leading-relaxed">
    Discover how to copy trades and build weekly cashflow — or we’ll pay you
    <span className="text-emerald-700 font-semibold"> $100</span>.👇
    <br />
    <span className="text-gray-800 font-medium">
      Fill the form to lock your spot and connect with the admin.
    </span>
  </DialogDescription>
</DialogHeader>




          <div className="text-center my-3">
            <picture>
              <source srcSet="/images/click-here.gif" type="image/gif" />
              <img
                src="/images/click-here.gif"
                alt="Animated Down Arrow"
                className="mx-auto lg:w-30 lg:h-30 sm:w-20 sm:h-20"
              />
            </picture>
          </div>

    <div className="grid gap-4 place-items-center">
  <div className="grid gap-1 w-full max-w-[16rem] sm:max-w-[20rem]">
    <Label htmlFor="name" className="text-sm sm:text-base">Full Name</Label>
    <Input
      id="name"
      name="name"
      placeholder="Enter your full name"
      className="text-black text-sm sm:text-base h-10 sm:h-11 w-full"
    />
  </div>

  <div className="grid gap-1 w-full max-w-[16rem] sm:max-w-[20rem]">
    <Label htmlFor="email" className="text-sm sm:text-base">Email Address</Label>
    <Input
      id="email"
      name="email"
      type="email"
      placeholder="your@email.com"
      className="text-black text-sm sm:text-base h-10 sm:h-11 w-full"
    />
  </div>

  <div className="grid gap-1 w-full max-w-[16rem] sm:max-w-[20rem]">
    <Label htmlFor="phone" className="text-sm sm:text-base">Phone Number</Label>
    <PhoneInput
      country={"ng"}
      value={phone}
      onChange={setPhone}
      inputStyle={{
        width: "100%",
        height: "44px",
        borderRadius: "8px",
        border: "1px solid #ccc",
        paddingLeft: "48px",
        fontSize: "14px",
        color: "black",
      }}
      containerStyle={{ width: "100%" }}
      buttonStyle={{ border: "none", background: "transparent" }}
    />
  </div>
</div>

 <div className="w-full max-w-[18rem] sm:max-w-[22rem] mx-auto pt-4 flex justify-center text-center">
    <Button
      type="submit"
      className="w-full  cursor-pointer font-montserrat uppercase bg-gradient-to-r from-emerald-600 to-emerald-400 hover:from-emerald-500 hover:to-emerald-300 text-white text-xs sm:text-sm  px-4 py-8 sm:px-6 sm:py-5 rounded-base shadow-lg hover:shadow-emerald-400/30 transition-all duration-300 transform hover:-translate-y-1"
    >
      Yes, I&apos;m Ready to Start Earning
    </Button>
  </div>





<DialogFooter className="pt-4 flex justify-center text-center">
  <div className="mt-6 space-y-4 text-xs sm:text-sm text-gray-600 max-w-[18rem] sm:max-w-[22rem] mx-auto">
  <div className="bg-gray-100 p-3 rounded-lg text-gray-700 space-y-2">
    <p>💬 “I doubled my account in 2 weeks with your signals! The accuracy is unbelievable.” <span className="font-semibold">– Emmanuel T.</span></p>
    <p>💬 “Best decision I’ve made in Forex. No more guessing games or sleepless nights.” <span className="font-semibold">– Grace A.</span></p>
  </div>

  <div className="pt-4 border-t border-gray-200 leading-relaxed">
    <p className="text-[10px] sm:text-xs">
      This site is not part of the Facebook website or Facebook Inc. Additionally, this site is NOT endorsed by Facebook in any way. FACEBOOK is a trademark of FACEBOOK, Inc.
    </p>
    <p className="text-[10px] sm:text-xs pt-2">
      &copy; {new Date().getFullYear()} KavodFin. All rights reserved.
    </p>
  </div>
</div>
 
</DialogFooter>

        </DialogContent>
      </form>
    </Dialog>
  );
}
