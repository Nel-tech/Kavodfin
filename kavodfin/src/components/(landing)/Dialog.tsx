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
  className="sm:max-w-xl w-full bg-white text-gray-900 shadow-xl rounded-xl font-montserrat p-6 max-h-screen overflow-y-auto"
>

          <DialogHeader>
            <DialogTitle className="text-emerald-700 font-bold text-xl pt-4">
              How to Make $3,000 – $5,000/Month From Forex Trading
            </DialogTitle>
            <DialogDescription className="text-sm text-gray-600 leading-relaxed mt-1">
              Discover how to copy trades and build weekly cashflow — or we’ll pay you
              <span className="text-emerald-700 font-semibold"> $100</span>.👇
              <br />
              <span className="font-medium text-gray-800">
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
                className="mx-auto w-30 h-30"
              />
            </picture>
          </div>

          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="name">Full Name</Label>
              <Input
                id="name"
                name="name"
                placeholder="Enter your full name"
                className="text-black"
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="your@email.com"
                className="text-black"
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="phone">Phone Number</Label>
              <PhoneInput
                country={"ng"}
                value={phone}
                onChange={setPhone}
                inputStyle={{
                  width: "100%",
                  height: "42px",
                  borderRadius: "0.5rem",
                  border: "1px solid #ccc",
                  paddingLeft: "48px",
                  color: "black"
                }}
                containerStyle={{ width: "100%" }}
                buttonStyle={{ border: "none", background: "transparent" }}
              />
            </div>
          </div>

          <div className="mt-6 space-y-4 text-sm text-gray-600">
  <div className="bg-gray-100 p-4 rounded-lg text-gray-700">
    <p>💬 “I doubled my account in 2 weeks with your signals! The accuracy is unbelievable.!” <span className="font-semibold">– Emmanuel T.</span></p>
    <p>💬 “Best decision I&apos;ve made in Forex. No more guessing games or sleepless nights.” <span className="font-semibold">– Grace A.</span></p>
  </div>

  <div className="text-xs text-gray-500 pt-4 border-t border-gray-200">
    This site is not part of the Facebook website or Facebook Inc. Additionally, this site is NOT endorsed by Facebook in any way. FACEBOOK is a trademark of FACEBOOK, Inc.
    <br />
    <span className="block pt-2"> &copy; {new Date().getFullYear()} KavodFin. All rights reserved.</span>
  </div>
</div>



           
          <DialogFooter className="pt-4  flex justify-center mx-auto text-center">
          
            <Button
              type="submit"
              className="cursor-pointer font-montserrat uppercase bg-gradient-to-r from-emerald-600 to-emerald-400 hover:from-emerald-500 hover:to-emerald-300 text-white font-bold text-base px-3 py-8 rounded-lg shadow-lg hover:shadow-emerald-400/30 transition-all duration-300 transform hover:-translate-y-1"
            >
              Yes I&lsquo;M READY TO START EARNING IN DOLLARS
            </Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
}
