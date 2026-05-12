"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Carousel from "@/components/Carousel";

const stories = [
  { name: "Priya", region: "Maharashtra", title: "A School Closer to Home", desc: "For Priya, attending school meant a 10km daily walk until our community center opened.", image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=400&q=80" },
  { name: "Aarav and Family", region: "Uttar Pradesh", title: "Access to Clean Water", desc: "Aarav's village recently received a water purification unit provided by our trust.", image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=400&q=80" },
  { name: "Sunita's Group", region: "Kerala", title: "Empowering Weavers", desc: "Sunita organized 20 women into a self-help group, now exporting handcrafted textiles.", image: "https://images.unsplash.com/photo-1617450365226-9bf28c04e130?auto=format&fit=crop&w=400&q=80" },
];

export default function OurStories() {
  return (
    <main className="min-h-screen bg-slate-50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-16">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           className="text-center"
        >
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            Our Stories
          </h1>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            Behind every number is a name, a family, and a dream. Listen to the voices of resilience that power our NGO.
          </p>
        </motion.div>

        <Carousel>
          {stories.map((story, idx) => (
             <motion.div 
               key={idx}
               whileHover={{ scale: 1.02 }}
               className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 h-full flex flex-col"
             >
                <div className="relative h-[250px] w-full">
                  <Image src={story.image} alt={story.name} fill className="object-cover" />
                </div>
                <div className="p-6 flex-1">
                  <div className="text-sm font-bold text-blue-600 mb-2 uppercase tracking-wide">{story.region}</div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">{story.title}</h3>
                  <p className="text-slate-700 font-medium mb-3">{story.name}</p>
                  <p className="text-slate-600 text-sm leading-relaxed">{story.desc}</p>
                </div>
             </motion.div>
          ))}
        </Carousel>
      </div>
    </main>
  );
}