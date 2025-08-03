"use client";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { testimonials } from "@/helpers/Data";

function Testimonials() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="mt-[8rem]"
        >
            <div className="container mx-auto pb-[2rem]">
                {/* <h2 className="text-3xl font-bold text-center text-green-800 mb-12 font-montserrat">
                    Success Stories
                </h2> */}

                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ scale: 1.03 }}
                            transition={{ type: "spring", stiffness: 200 }}
                        >
                            <Card className="p-6 border-0 shadow-xl bg-white hover:shadow-2xl transition-all duration-300">
                                <p className="text-slate-700 mb-6 italic leading-relaxed">
                                    &ldquo;{testimonial.text}&rdquo;
                                </p>
                                <div className="flex items-center justify-between">
                                    <div>
                                        <div className="font-bold text-slate-800 ">
                                            {testimonial.name}
                                        </div>
                                        <div className="text-sm text-slate-500">
                                            {testimonial.role}
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.div>
    );
}

export default Testimonials;
