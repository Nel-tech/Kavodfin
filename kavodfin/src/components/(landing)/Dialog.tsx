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
// import supabase from "../../lib/supabaseClient";
// import { parseSupabaseError } from "@/lib/supabaseErrors";
import DialogVideo from "../(video)/DialogVideo";

type DialogDemoProps = {
  trigger: ReactNode;
};

export function DialogDemo({ trigger }: DialogDemoProps) {
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const [video, setVideo] = useState(false);
  const [open, setOpen] = useState(false);
  const [currentUserId, setCurrentUserId] = useState<string>(""); // ✅ Add type

const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  if (loading) return;
  setLoading(true);

  const formData = new FormData(e.target as HTMLFormElement);
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const mobile = phone;

  if (!name || !email || !mobile) {
    alert('Please fill in all fields');
    setLoading(false);
    return;
  }

  try {
    // 1️⃣ Call server API route to insert user
    const res = await fetch('/api/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
     body: JSON.stringify({ 
    name, 
    email, 
    mobile_number: mobile,
    website: formData.get('website')
  }),
    });

    const result = await res.json();

    if (!res.ok) {
      alert('Error creating user: ' + (result.error?.message || 'Unknown error'));
      setLoading(false);
      return;
    }

    const userId = result.user.id;

    // 2️⃣ Send welcome email
    const emailRes = await fetch('/api/email', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ type: 'welcome', name, email }),
    });

    if (!emailRes.ok) {
      console.error('Email error:', await emailRes.json());
      alert('Failed to send welcome email');
      setLoading(false);
      return;
    }
    (e.target as HTMLFormElement).reset();
    setPhone('');
    setCurrentUserId(userId);
    setVideo(true);
    setOpen(false);

    alert('Submitted Successfully!');
  } catch (err) {
    console.error('Unexpected error:', err);
    alert('An unexpected error occurred');
  } finally {
    setLoading(false);
  }
};

  return (
    <>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>{trigger}</DialogTrigger>
        <DialogContent className="max-w-[95vw] sm:max-w-[800px] w-full bg-white text-gray-900 shadow-xl rounded-xl font-montserrat px-4 py-6 max-h-[90vh] overflow-y-auto overflow-x-hidden">
          <form onSubmit={handleSubmit}>
            <DialogHeader className="px-8 pt-[3rem] mx-auto text-center">
              <DialogTitle className="text-emerald-700 text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl font-semibold leading-tight sm:leading-snug">
                How to Make $3,000 – $5,000/Month From Forex Trading
              </DialogTitle>
              <DialogDescription className="mt-2 text-xs xs:text-sm sm:text-base text-gray-600 leading-relaxed">
                Discover how to copy trades and build weekly cashflow — or we&apos;ll pay you
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
                <Label htmlFor="name" className="text-sm sm:text-base">
                  Name
                </Label>
                <Input
                  id="name"
                  name="name"
                  placeholder="Enter Your Name"
                  className="text-black text-sm sm:text-base h-10 sm:h-11 w-full"
                  required
                />
              </div>

              <div className="grid gap-1 w-full max-w-[16rem] sm:max-w-[20rem]">
                <Label htmlFor="email" className="text-sm sm:text-base">
                  Email Address
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="your@email.com"
                  className="text-black text-sm sm:text-base h-10 sm:h-11 w-full"
                  required
                />
              </div>

              <div className="grid gap-1 w-full max-w-[16rem] sm:max-w-[20rem]">
                <Label htmlFor="phone" className="text-sm sm:text-base">
                  Phone Number
                </Label>
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
                disabled={loading}
                className="w-full cursor-pointer font-montserrat uppercase bg-gradient-to-r from-emerald-600 to-emerald-400 hover:from-emerald-500 hover:to-emerald-300 text-white text-xs sm:text-sm px-4 py-8 sm:px-6 sm:py-5 rounded-base shadow-lg hover:shadow-emerald-400/30 transition-all duration-300 transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? "Getting Ready..." : "Yes, I'm Ready to Start Earning"}
              </Button>
            </div>

            <DialogFooter className="pt-4 flex justify-center text-center">
              <div className="mt-6 space-y-4 text-xs sm:text-sm text-gray-600 max-w-[18rem] sm:max-w-[22rem] mx-auto">
                <div className="bg-gray-100 p-3 rounded-lg text-gray-700 space-y-2">
                  <p>
                    💬 &quot;I doubled my account in 2 weeks with your signals! The accuracy is
                    unbelievable.&quot; <span className="font-semibold">– Emmanuel T.</span>
                  </p>
                  <p>
                    💬 &quot;Best decision I&apos;ve made in Forex. No more guessing games or
                    sleepless nights.&quot; <span className="font-semibold">– Grace A.</span>
                  </p>
                </div>

                <div className="pt-4 border-t border-gray-200 leading-relaxed">
                  <p className="text-[10px] sm:text-xs">
                    This site is not part of the Facebook website or Facebook Inc. Additionally,
                    this site is NOT endorsed by Facebook in any way. FACEBOOK is a trademark of
                    FACEBOOK, Inc.
                  </p>
                  <p className="text-[10px] sm:text-xs pt-2">
                    &copy; {new Date().getFullYear()} KavodFin. All rights reserved.
                  </p>
                </div>
              </div>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>

      {/* ✅ Pass userId to DialogVideo - moved outside the Dialog */}
      {currentUserId && (
        <DialogVideo video={video} setVideo={setVideo} userId={currentUserId} />
      )}
    </>
  );
}