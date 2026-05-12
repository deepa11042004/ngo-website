"use client";

import { motion } from "framer-motion";
import { impactStats } from "@/lib/data";
import Image from "next/image";

export default function OurImpact() {
  return (
    <main className="min-h-screen bg-slate-50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-16">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           className="text-center"
        >
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            Our Impact
          </h1>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            Since our inception, we have been a catalyst for change across India, improving the lives of countless individuals.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 text-center pt-8">
          {impactStats.map((stat, idx) => (
             <motion.div 
               key={idx}
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: idx * 0.1 }}
               className="bg-white p-10 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center justify-center transform transition duration-300 hover:scale-105 hover:shadow-md"
             >
                <div className="w-16 h-16 bg-blue-50 text-blue-700 rounded-full flex items-center justify-center mb-6">
                  {/* using a simple span placeholder for icon */}
                  <span className="font-bold text-xl">{stat.value}+</span>
                </div>
                <div className="text-4xl font-bold text-slate-900 mb-2">{stat.value}{stat.suffix}</div>
                <div className="text-slate-600 font-medium">{stat.label}</div>
             </motion.div>
          ))}
        </div>

        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ delay: 0.4 }}
           className="relative h-[400px] rounded-3xl overflow-hidden shadow-sm mt-16 group"
        >
          <Image 
             src="https://images.unsplash.com/photo-1524069290683-0457abfe42c3?auto=format&fit=crop&w=1200&q=80" 
             alt="Impact snapshot" 
             fill 
             className="object-cover group-hover:scale-105 transition duration-700" 
          />
          <div className="absolute inset-0 bg-blue-900/30 flex items-center justify-center">
            <h2 className="text-3xl md:text-5xl font-bold text-white text-center px-4">
              Building a stronger, resilient India.
            </h2>
          </div>
        </motion.div>
      </div>
    </main>
  );
}