"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function VisionMission() {
  return (
    <main className="min-h-screen bg-slate-50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            Vision and Mission
          </h1>
          <p className="mt-4 text-lg text-slate-600">
            Guided by Indian values of Seva (selfless service) and compassion, we envision a thriving future for all.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="relative h-[400px] rounded-2xl overflow-hidden shadow-sm"
          >
            <Image
              src="https://images.unsplash.com/photo-1524069290683-0457abfe42c3?auto=format&fit=crop&w=800&q=80"
              alt="Vision representing hope in rural India"
              fill
              className="object-cover"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
              <h2 className="text-2xl font-bold text-blue-800 mb-4">Our Vision</h2>
              <p className="text-slate-600 leading-relaxed">
                To build an inclusive and equitable society in India where every individual, regardless of their background, has access to quality education, essential healthcare, and opportunities for dignified livelihood.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
              <h2 className="text-2xl font-bold text-blue-800 mb-4">Our Mission</h2>
              <p className="text-slate-600 leading-relaxed">
                To empower marginalized communities by implementing sustainable programs that foster self-reliance, combat poverty, and uplift the voices of women and children across the nation.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}