"use client"; 

import { useEffect } from "react";

export default function ThankYouPage() {
  useEffect(() => {
    // Fire Meta Lead event
    if (typeof window.fbq === "function") {
      window.fbq("track", "Lead");
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-center p-6">
      <h1 className="text-3xl font-bold mb-4">Thank You!</h1>
      <p className="text-lg mb-6">
        Your submission has been received. We will contact you shortly.
      </p>
      <p className="text-sm text-gray-500">
        You can now continue exploring KavodFin.
      </p>
    </div>
  );
}
