"use client";
import { motion } from "framer-motion";
import SignalChart from "@/components/LiveCharts";

function Signal() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="mt-[8rem]"
        >
            <h2 className="text-3xl font-bold text-center text-green-800 font-montserrat mb-8">
                Our Live Signal Example
            </h2>

            <motion.div
                className="max-w-4xl mx-auto"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 200 }}
            >
                <SignalChart
                    pair="EUR/USD"
                    type="BUY"
                    entry={1.085}
                    stopLoss={1.082}
                    takeProfit={1.0977}
                    currentPrice={1.0977}
                    pips={127}
                    duration="4.2h"
                    signalId="KF2024-001"
                />
            </motion.div>
        </motion.div>
    );
}

export default Signal;
