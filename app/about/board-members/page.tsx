"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Carousel from "@/components/Carousel";

const boardMembers = [
  { name: "Dr. Anjali Desai", role: "Chairperson", image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=400&q=80", bio: "Leading with 20+ years of experience in rural healthcare policies." },
  { name: "Rajesh Kumar", role: "Treasurer", image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=400&q=80", bio: "Former CFO dedicated to transparent fund allocation and financial integrity." },
  { name: "Meera Reddy", role: "Director of Programs", image: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&w=400&q=80", bio: "Pioneer behind our Women Empowerment initiatives across five states." },
  { name: "Vikram Singh", role: "Legal Advisor", image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=400&q=80", bio: "Ensuring compliance and advocating for human rights at the grassroots level." },
];

export default function BoardMembers() {
  return (
    <main className="min-h-screen bg-slate-50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-16">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           className="text-center"
        >
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            Board Members
          </h1>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            Meet the experienced visionaries ensuring our mission stays true to the people we serve. Their leadership and expertise guide our impact throughout India.
          </p>
        </motion.div>

        <Carousel>
          {boardMembers.map((member, idx) => (
             <motion.div 
               key={idx}
               whileHover={{ y: -5 }}
               className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 h-full flex flex-col"
             >
                <div className="relative h-[250px] w-full">
                  <Image src={member.image} alt={member.name} fill className="object-cover" />
                </div>
                <div className="p-6 flex-1">
                  <h3 className="text-2xl font-bold text-slate-900">{member.name}</h3>
                  <p className="text-blue-700 font-semibold mb-4">{member.role}</p>
                  <p className="text-slate-600 text-sm leading-relaxed">{member.bio}</p>
                </div>
             </motion.div>
          ))}
        </Carousel>
      </div>
    </main>
  );
}