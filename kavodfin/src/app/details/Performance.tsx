"use client";
import { TrendingUp, Award, CheckCircle } from "lucide-react";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";

function Performance() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
        >
            <div className="mt-[8rem] mx-auto container">
                <h2 className="text-3xl font-bold text-center font-montserrat text-green-800 mb-12">
                    Proven Track Record
                </h2>

                <div className="grid md:grid-cols-3 gap-8">
                    {/* Card 1 */}
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        <Card className="text-center p-8 border-0 shadow-xl bg-gradient-to-br from-white to-green-50 hover:shadow-2xl transition-all duration-300">
                            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                <Award className="h-8 w-8 text-green-600" />
                            </div>
                            <div className="text-4xl font-bold text-green-700 mb-2 font-montserrat">350+</div>
                            <div className="text-slate-600 font-medium font-inter">Pips Last Month</div>
                        </Card>
                    </motion.div>

                    {/* Card 2 */}
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        <Card className="text-center p-8 border-0 shadow-xl bg-gradient-to-br from-white to-yellow-50 hover:shadow-2xl transition-all duration-300">
                            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                <TrendingUp className="h-8 w-8 text-green-600" />
                            </div>
                            <div className="text-4xl font-bold text-green-700 mb-2 font-montserrat">2–5</div>
                            <div className="text-slate-600 font-medium font-inter">Signals Per Day</div>
                        </Card>
                    </motion.div>

                    {/* Card 3 */}
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        <Card className="text-center p-8 border-0 shadow-xl bg-gradient-to-br from-white to-green-50 hover:shadow-2xl transition-all duration-300">
                            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                <CheckCircle className="h-8 w-8 text-green-600" />
                            </div>
                            <div className="text-4xl font-bold text-green-700 mb-2 font-montserrat">90%</div>
                            <div className="text-slate-600 font-medium font-inter">Win Rate</div>
                        </Card>
                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
}

export default Performance;
