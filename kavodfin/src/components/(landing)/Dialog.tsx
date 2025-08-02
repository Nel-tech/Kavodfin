// Dialog.tsx
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
  DialogClose
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
        <DialogContent className="sm:max-w-[480px] bg-slate-900 border border-slate-700 text-white shadow-xl rounded-xl font-montserrat">
          <DialogHeader>
            <DialogTitle className="text-yellow-400 font-bold text-xl pt-[2rem]">
              How to Make $3,000 – $5,000/Month From Forex Trading
            </DialogTitle>
            <DialogDescription className="text-sm text-gray-300 leading-relaxed mt-1">
              Discover how to copy trades and build weekly cashflow — or we’ll pay you
              <span className="text-yellow-400 font-semibold"> $100</span>.👇
              <br />
              <span className="font-medium text-white">Fill the form to lock your spot and connect with the admin.</span>
            </DialogDescription>
          </DialogHeader>

          <div className="text-center my-3">
            <div className="text-4xl animate-bounce">👇</div>
          </div>

          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="name">Full Name</Label>
              <Input id="name" name="name" placeholder="Enter your full name" />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="email">Email Address</Label>
              <Input id="email" name="email" type="email" placeholder="your@email.com" />
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
                  color:"black"
                }}
                containerStyle={{ width: "100%" }}
                buttonStyle={{ border: "none", background: "transparent" }}
              />
            </div>
          </div>

          <DialogFooter className="pt-4">
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button
              type="submit"
              className="bg-gradient-to-r from-emerald-600 to-emerald-400 hover:from-emerald-500 hover:to-emerald-300 text-white  font-semibold"
            >
              Lock My Spot 🔒
            </Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
}
