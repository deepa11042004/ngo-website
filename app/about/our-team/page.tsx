"use client";

import { motion } from "framer-motion";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

export default function OurTeamPage() {
  const teamMembers = [
    {
      name: "Priya Sharma",
      role: "Executive Director",
      area: "Leadership & Vision",
      bio: "20+ years of experience in social development",
      image: "👩‍💼",
    },
    {
      name: "Rajesh Kumar",
      role: "Programs Director",
      area: "Community Impact",
      bio: "Oversees all education and health initiatives",
      image: "👨‍💼",
    },
    {
      name: "Anjali Gupta",
      role: "Finance Head",
      area: "Transparency & Accountability",
      bio: "Ensures responsible fund management",
      image: "👩‍💼",
    },
    {
      name: "Arjun Singh",
      role: "Ground Coordinator",
      area: "Community Relations",
      bio: "Connects us with villages and communities",
      image: "👨‍💼",
    },
    {
      name: "Neha Verma",
      role: "Healthcare Lead",
      area: "Medical Programs",
      bio: "Drives healthcare accessibility initiatives",
      image: "👩‍⚕️",
    },
    {
      name: "Vikram Patel",
      role: "Education Specialist",
      area: "Learning Programs",
      bio: "Designs and implements education programs",
      image: "👨‍🏫",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-amber-50/30 to-white">
      {/* Hero */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <motion.div className="space-y-4" {...fadeInUp}>
          <h1 className="text-5xl font-bold text-slate-900">
            Meet Our <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">Dedicated Team</span>
          </h1>
          <p className="text-xl text-slate-700 max-w-3xl">
            Passionate professionals committed to creating lasting impact across India
          </p>
        </motion.div>
      </section>

      {/* Team Grid */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, i) => (
            <motion.div
              key={i}
              className="bg-white rounded-xl shadow-lg border border-amber-100/50 overflow-hidden hover:shadow-xl transition-all"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="bg-gradient-to-r from-orange-100 to-red-100 h-32 flex items-center justify-center text-6xl">
                {member.image}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900">{member.name}</h3>
                <p className="text-orange-600 font-semibold mt-1">{member.role}</p>
                <p className="text-sm text-green-600 font-medium mt-2">{member.area}</p>
                <p className="text-slate-600 text-sm mt-4">{member.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Culture Section */}
      <section className="bg-orange-50 border-t border-orange-200 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.h2 className="text-3xl font-bold text-slate-900 mb-8 text-center" {...fadeInUp}>
            Our Team Culture
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: "🎯", title: "Mission-Driven", desc: "Every member shares our vision for social change" },
              { icon: "👥", title: "Collaborative", desc: "We work together towards common goals" },
              { icon: "📚", title: "Learning", desc: "Continuous growth and skill development" },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="bg-white rounded-lg p-6 border border-orange-200"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
              >
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Us */}
      <section className="bg-gradient-to-r from-orange-600 to-red-600 py-16 text-white">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-4">Interested in Joining Us?</h2>
          <p className="text-lg mb-8 text-orange-100">We're always looking for passionate individuals to join our team</p>
          <a
            href="/get-involved/careers"
            className="inline-block rounded-full bg-white px-8 py-3 font-semibold text-orange-600 hover:bg-orange-50 transition"
          >
            View Careers
          </a>
        </div>
      </section>
    </div>
  );
}
