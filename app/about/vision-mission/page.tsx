"use client";

import { motion } from "framer-motion";
import { Eye, Target, Zap } from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

export default function VisionMission() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-amber-50/30 to-white">
      {/* Hero */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <motion.div className="space-y-4 text-center" {...fadeInUp}>
          <h1 className="text-5xl font-bold text-slate-900">
            Vision &amp; <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">Mission</span>
          </h1>
          <p className="text-xl text-slate-700 max-w-3xl mx-auto">
            Guided by Indian values of Seva (selfless service) and compassion
          </p>
        </motion.div>
      </section>

      {/* Vision & Mission Cards */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            className="bg-white rounded-xl shadow-lg border border-amber-100/50 p-8 hover:shadow-xl transition-all"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
                <Eye className="text-blue-600" size={24} />
              </div>
              <h2 className="text-3xl font-bold text-slate-900">Our Vision</h2>
            </div>
            <p className="text-slate-700 leading-relaxed text-lg">
              To build an inclusive and equitable society in India where every individual, regardless of their economic background or social status, has access to quality education, essential healthcare, and opportunities for dignified livelihood.
            </p>
            <div className="mt-6 space-y-3 border-t border-amber-100/50 pt-6">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🎓</span>
                <div>
                  <p className="font-semibold text-slate-900">Quality Education</p>
                  <p className="text-sm text-slate-600">Access for all children regardless of circumstances</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">❤️</span>
                <div>
                  <p className="font-semibold text-slate-900">Healthcare Access</p>
                  <p className="text-sm text-slate-600">Essential medical services in remote areas</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">💪</span>
                <div>
                  <p className="font-semibold text-slate-900">Economic Dignity</p>
                  <p className="text-sm text-slate-600">Skills and livelihood opportunities for all</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="bg-white rounded-xl shadow-lg border border-amber-100/50 p-8 hover:shadow-xl transition-all"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                <Target className="text-green-600" size={24} />
              </div>
              <h2 className="text-3xl font-bold text-slate-900">Our Mission</h2>
            </div>
            <p className="text-slate-700 leading-relaxed text-lg">
              To empower marginalized communities by implementing sustainable programs that foster self-reliance, combat poverty, and uplift the voices of women and children across the nation through compassionate action and community participation.
            </p>
            <div className="mt-6 space-y-3 border-t border-amber-100/50 pt-6">
              <div className="flex items-start gap-3">
                <span className="text-2xl">👥</span>
                <div>
                  <p className="font-semibold text-slate-900">Community Empowerment</p>
                  <p className="text-sm text-slate-600">Building capacity and self-reliance locally</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">👩‍👧‍👦</span>
                <div>
                  <p className="font-semibold text-slate-900">Women &amp; Children Focus</p>
                  <p className="text-sm text-slate-600">Special emphasis on vulnerable sections</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">🌱</span>
                <div>
                  <p className="font-semibold text-slate-900">Sustainable Change</p>
                  <p className="text-sm text-slate-600">Long-term impact beyond project periods</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Strategic Pillars */}
      <section className="bg-gradient-to-r from-orange-600 to-red-600 py-16 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.h2 className="text-3xl font-bold text-center mb-12" {...fadeInUp}>
            Our Strategic Pillars
          </motion.h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: "📚", title: "Education First", desc: "Knowledge as foundation for change" },
              { icon: "⚕️", title: "Health Matters", desc: "Wellness for productive lives" },
              { icon: "👩", title: "Women Lead", desc: "Gender equality and empowerment" },
              { icon: "💼", title: "Skills Build", desc: "Livelihood and opportunity creation" },
            ].map((pillar, i) => (
              <motion.div
                key={i}
                className="bg-white/10 backdrop-blur rounded-lg p-6 border border-white/20"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="text-4xl mb-3">{pillar.icon}</div>
                <h3 className="font-bold text-lg mb-2">{pillar.title}</h3>
                <p className="text-orange-100 text-sm">{pillar.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Principles */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <motion.h2 className="text-3xl font-bold text-slate-900 mb-12 text-center" {...fadeInUp}>
          Core Principles That Guide Us
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: "🕯️",
              title: "Compassion",
              desc: "We lead with empathy and understanding of community challenges",
              color: "from-orange-100 to-orange-50",
            },
            {
              icon: "🎯",
              title: "Accountability",
              desc: "We maintain transparency in all operations and financial management",
              color: "from-green-100 to-green-50",
            },
            {
              icon: "🤝",
              title: "Partnership",
              desc: "We work collaboratively with communities as equal partners",
              color: "from-blue-100 to-blue-50",
            },
          ].map((principle, i) => (
            <motion.div
              key={i}
              className={`bg-gradient-to-br ${principle.color} rounded-xl p-8 border border-amber-100/50`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
            >
              <div className="text-5xl mb-4">{principle.icon}</div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{principle.title}</h3>
              <p className="text-slate-700">{principle.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-orange-600 to-red-600 py-16 text-white">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-4">Help Us Achieve Our Vision</h2>
          <p className="text-lg mb-8 text-orange-100">Every contribution brings us closer to creating lasting change</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/donate" className="rounded-full bg-white px-8 py-3 font-semibold text-orange-600 hover:bg-orange-50 transition">
              Donate Now
            </a>
            <a href="/get-involved/volunteer" className="rounded-full border-2 border-white px-8 py-3 font-semibold text-white hover:bg-white/10 transition">
              Get Involved
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}