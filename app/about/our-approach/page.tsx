"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const ApproachSteps = [
  { step: "01", title: "Identify", desc: "Collaborate with local panchayats to find communities in urgent need." },
  { step: "02", title: "Plan", desc: "Design sustainable solutions utilizing local resources and indigenous knowledge." },
  { step: "03", title: "Execute", desc: "Work alongside community members, empowering rather than dictating." },
  { step: "04", title: "Sustain", desc: "Train local leaders to maintain operations after we phase out our direct support." }
];

export default function OurApproach() {
  return (
    <main className="min-h-screen bg-slate-50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-16">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           className="text-center"
        >
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            Our Approach
          </h1>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            Rooted in Indian traditions of community building, our methodology focuses on working *with* people, rather than *for* people, creating lasting independence.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            {ApproachSteps.map((item, idx) => (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                key={idx}
                className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex gap-4"
              >
                <div className="text-3xl font-extrabold text-blue-200">{item.step}</div>
                <div>
                   <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                   <p className="text-slate-600">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="relative h-[600px] rounded-3xl overflow-hidden shadow-lg border border-slate-200"
          >
            <Image 
              src="https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=800&q=80" 
              alt="Community working together" 
              fill 
              className="object-cover" 
            />
          </motion.div>
        </div>
      </div>
    </main>
  );
}