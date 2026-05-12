"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const ourMembers = [
  { name: "Rahul Sharma", role: "Field Coordinator", image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=400&q=80", bio: "Ensuring programs reach the remote corners of Rajasthan." },
  { name: "Kiran Patel", role: "Healthcare Expert", image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=400&q=80", bio: "Certified nurse training local midwives in safe practices." },
  { name: "Amitabh Verma", role: "Education Lead", image: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&w=400&q=80", bio: "Developing curriculums suited for the Indian landscape." },
  { name: "Pooja Singh", role: "Volunteer Manager", image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=400&q=80", bio: "Mobilizing youth for community drives across cities." },
];

export default function OurMembers() {
  return (
    <main className="min-h-screen bg-slate-50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-16">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           className="text-center"
        >
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            Our Members
          </h1>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            Meet the dedicated individuals who form the backbone of our operations, working relentlessly across India.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {ourMembers.map((member, idx) => (
             <motion.div 
               key={idx}
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: idx * 0.1 }}
               className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 flex flex-col text-center"
             >
                <div className="relative h-64 w-full">
                  <Image src={member.image} alt={member.name} fill className="object-cover" />
                </div>
                <div className="p-6 flex-1 flex flex-col items-center">
                  <h3 className="text-xl font-bold text-slate-900 mb-1">{member.name}</h3>
                  <p className="text-blue-700 font-semibold mb-4 text-sm">{member.role}</p>
                  <p className="text-slate-600 text-sm leading-relaxed">{member.bio}</p>
                </div>
             </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}