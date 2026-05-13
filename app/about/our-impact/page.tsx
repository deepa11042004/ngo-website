"use client";

import { motion } from "framer-motion";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

export default function OurImpactPage() {
  const impactAreas = [
    {
      title: "Education",
      icon: "🎓",
      description: "Quality education for underprivileged children",
      stats: ["5L+ Students", "2000+ Schools", "100% Attendance Focus"],
      impact: "We've transformed educational access in rural India through after-school centers, digital learning, and community engagement programs.",
    },
    {
      title: "Healthcare",
      icon: "🏥",
      description: "Accessible healthcare services",
      stats: ["8L+ Beneficiaries", "400+ Health Camps", "Mobile Clinics"],
      impact: "Our health initiatives reach remote villages with preventive care, awareness, and treatment through mobile hospitals and trained health workers.",
    },
    {
      title: "Women Empowerment",
      icon: "👩",
      description: "Economic and social empowerment",
      stats: ["3L+ Women", "Vocational Training", "Self-Help Groups"],
      impact: "We empower women through skill training, financial literacy, and community leadership programs to build sustainable livelihoods.",
    },
    {
      title: "Livelihood",
      icon: "💼",
      description: "Skills and employment opportunities",
      stats: ["2L+ Youth Trained", "80% Placement", "Entrepreneurship"],
      impact: "Our vocational training and placement support has helped thousands of youth secure dignified employment and start their own businesses.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-amber-50/30 to-white">
      {/* Hero */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <motion.div className="space-y-4" {...fadeInUp}>
          <h1 className="text-5xl font-bold text-slate-900">
            Our <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">Real Impact</span>
          </h1>
          <p className="text-xl text-slate-700 max-w-3xl">
            Measurable results creating lasting change in Indian communities
          </p>
        </motion.div>
      </section>

      {/* Key Stats */}
      <section className="bg-gradient-to-r from-orange-600 to-red-600 py-16 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <motion.div {...fadeInUp}>
              <div className="text-5xl font-bold mb-2">20L+</div>
              <div className="text-orange-100">Total Lives Impacted</div>
            </motion.div>
            <motion.div {...fadeInUp} transition={{ delay: 0.1 }}>
              <div className="text-5xl font-bold mb-2">2000+</div>
              <div className="text-orange-100">Communities Reached</div>
            </motion.div>
            <motion.div {...fadeInUp} transition={{ delay: 0.2 }}>
              <div className="text-5xl font-bold mb-2">270+</div>
              <div className="text-orange-100">Active Projects</div>
            </motion.div>
            <motion.div {...fadeInUp} transition={{ delay: 0.3 }}>
              <div className="text-5xl font-bold mb-2">27</div>
              <div className="text-orange-100">States Covered</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Impact Areas */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <motion.h2 className="text-3xl font-bold text-slate-900 mb-12 text-center" {...fadeInUp}>
          Our Focus Areas
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-8">
          {impactAreas.map((area, i) => (
            <motion.div
              key={i}
              className="bg-white rounded-xl shadow-lg border border-amber-100/50 overflow-hidden hover:shadow-xl transition-all"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="bg-gradient-to-r from-orange-100 to-red-100 h-24 flex items-center justify-center text-5xl">
                {area.icon}
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">{area.title}</h3>
                <p className="text-slate-600 mb-4">{area.description}</p>
                <div className="flex gap-2 mb-4 flex-wrap">
                  {area.stats.map((stat, j) => (
                    <span key={j} className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm font-medium">
                      {stat}
                    </span>
                  ))}
                </div>
                <p className="text-slate-700 text-sm leading-relaxed border-t border-amber-100/50 pt-4">
                  {area.impact}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-amber-50/50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.h2 className="text-3xl font-bold text-slate-900 mb-12 text-center" {...fadeInUp}>
            Stories of Change
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Meera",
                story: "From struggling to study, now works as a teacher",
                avatar: "👩",
              },
              {
                name: "Raj",
                story: "Learned plumbing skills, now runs own business",
                avatar: "👨",
              },
              {
                name: "Sunita",
                story: "Healthcare initiative saved her family's life",
                avatar: "👩",
              },
            ].map((testimonial, i) => (
              <motion.div
                key={i}
                className="bg-white rounded-lg p-6 shadow-md border border-amber-100/50"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
              >
                <div className="text-4xl mb-3">{testimonial.avatar}</div>
                <p className="font-bold text-slate-900 mb-2">{testimonial.name}</p>
                <p className="text-slate-600 italic">"{testimonial.story}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SDG Alignment */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <motion.h2 className="text-3xl font-bold text-slate-900 mb-12 text-center" {...fadeInUp}>
          UN Sustainable Development Goals
        </motion.h2>
        <p className="text-center text-slate-600 mb-8 max-w-3xl mx-auto">
          Our work aligns with multiple SDGs to create holistic sustainable development
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { num: "4", title: "Quality Education", color: "from-red-500 to-red-600" },
            { num: "3", title: "Good Health", color: "from-green-500 to-green-600" },
            { num: "5", title: "Gender Equality", color: "from-red-400 to-pink-600" },
            { num: "1", title: "No Poverty", color: "from-red-600 to-red-700" },
            { num: "8", title: "Decent Work", color: "from-amber-600 to-amber-700" },
            { num: "10", title: "Reduced Inequalities", color: "from-red-500 to-orange-600" },
          ].map((sdg, i) => (
            <motion.div
              key={i}
              className={`bg-gradient-to-br ${sdg.color} rounded-lg p-6 text-white text-center hover:shadow-lg transition-all`}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="text-5xl font-bold mb-2">SDG {sdg.num}</div>
              <p className="font-semibold">{sdg.title}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}