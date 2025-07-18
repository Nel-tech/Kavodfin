"use client";
import { motion } from "framer-motion";
import { Lock, Shield } from "lucide-react";

function TrustSec() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: true }}
      className="mt-[8rem] text-center"
    >
      <motion.div
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 200 }}
        className="inline-flex items-center gap-3 bg-white px-6 py-3 rounded-full shadow-lg border border-green-100"
      >
        <Shield className="h-6 w-6 text-green-600" />
        <span className="text-green-700 text-lg font-semibold">
          100% Trusted • 100% Results
        </span>
        <Lock className="h-5 w-5 text-yellow-500" />
      </motion.div>

      <p className="text-slate-600 mt-4 text-lg">
        We don&apos;t just give signals – we help you grow and succeed.
      </p>
    </motion.div>
  );
}

export default TrustSec;
