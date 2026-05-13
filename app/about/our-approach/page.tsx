"use client";

import { motion } from "framer-motion";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const ApproachSteps = [
  { step: "01", title: "Identify", desc: "Collaborate with local panchayats to find communities in urgent need." },
  { step: "02", title: "Plan", desc: "Design sustainable solutions utilizing local resources and indigenous knowledge." },
  { step: "03", title: "Execute", desc: "Work alongside community members, empowering rather than dictating." },
  { step: "04", title: "Sustain", desc: "Train local leaders to maintain operations after we phase out our direct support." }
];

export default function OurApproach() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-amber-50/30 to-white">
      {/* Hero */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <motion.div className="space-y-4" {...fadeInUp}>
          <h1 className="text-5xl font-bold text-slate-900">
            Our <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">Approach</span>
          </h1>
          <p className="text-xl text-slate-700 max-w-3xl">
            Rooted in Indian traditions of community building, our methodology focuses on working with people, rather than for people, creating lasting independence.
          </p>
        </motion.div>
      </section>

      {/* Methodology Flow */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            {ApproachSteps.map((item, idx) => (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                key={idx}
                className="bg-white p-6 rounded-xl shadow-md border border-amber-100/50 flex gap-4 hover:shadow-lg transition-all"
              >
                <div className="text-3xl font-extrabold text-orange-300">{item.step}</div>
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
            className="bg-gradient-to-br from-orange-100 to-red-100 rounded-2xl p-12 text-center shadow-lg border border-orange-200"
          >
            <div className="text-7xl mb-4">🤝</div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Community Partnership</h3>
            <p className="text-slate-700 mb-6">
              We believe true change happens when communities lead. We're catalysts, not saviors.
            </p>
            <ul className="space-y-3 text-left">
              {["Listen to community needs", "Co-design solutions", "Build local capacity", "Ensure sustainability"].map((item, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className="text-orange-600">✓</span>
                  <span className="text-slate-700">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Key Principles */}
      <section className="bg-orange-50 border-y border-orange-200 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.h2 className="text-3xl font-bold text-slate-900 mb-12 text-center" {...fadeInUp}>
            Principles That Guide Our Work
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: "🌍", title: "Contextual", desc: "We tailor programs to local context and cultural values" },
              { icon: "🎓", title: "Evidence-Based", desc: "Data and research inform our decision-making" },
              { icon: "💡", title: "Innovative", desc: "We pilot new approaches and scale what works" },
              { icon: "♻️", title: "Sustainable", desc: "We build systems that last beyond our involvement" },
              { icon: "🤝", title: "Inclusive", desc: "Special focus on marginalized and vulnerable groups" },
              { icon: "📈", title: "Scalable", desc: "Solutions designed to expand to more communities" },
            ].map((principle, i) => (
              <motion.div
                key={i}
                className="bg-white rounded-lg p-6 border border-orange-200 hover:shadow-lg transition-all"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="text-4xl mb-3">{principle.icon}</div>
                <h3 className="font-bold text-slate-900 mb-2">{principle.title}</h3>
                <p className="text-slate-600 text-sm">{principle.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Phases */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <motion.h2 className="text-3xl font-bold text-slate-900 mb-12 text-center" {...fadeInUp}>
          Project Lifecycle
        </motion.h2>
        <div className="space-y-6">
          {[
            { phase: "Phase 1", title: "Foundation", desc: "Community engagement, needs assessment, baseline survey" },
            { phase: "Phase 2", title: "Implementation", desc: "Program rollout with community participation and local capacity building" },
            { phase: "Phase 3", title: "Scaling", desc: "Expanding successful models to additional communities" },
            { phase: "Phase 4", title: "Sustainability", desc: "Transitioning to local ownership and reducing direct involvement" },
          ].map((phase, i) => (
            <motion.div
              key={i}
              className="bg-white rounded-lg p-6 border-l-4 border-orange-500 shadow-md hover:shadow-lg transition-all"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.15 }}
            >
              <div className="flex items-center gap-4">
                <div className="bg-orange-100 text-orange-600 rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg">
                  {i + 1}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900">{phase.phase}: {phase.title}</h3>
                  <p className="text-slate-600 mt-1">{phase.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Monitoring & Impact */}
      <section className="bg-gradient-to-r from-orange-600 to-red-600 py-16 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.h2 className="text-3xl font-bold mb-8 text-center" {...fadeInUp}>
            Measuring Success
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <motion.div {...fadeInUp} transition={{ delay: 0.1 }}>
              <div className="text-4xl font-bold mb-2">Output</div>
              <p className="text-orange-100">Tracking activities and reach</p>
            </motion.div>
            <motion.div {...fadeInUp} transition={{ delay: 0.2 }}>
              <div className="text-4xl font-bold mb-2">Outcome</div>
              <p className="text-orange-100">Measuring behavior changes</p>
            </motion.div>
            <motion.div {...fadeInUp} transition={{ delay: 0.3 }}>
              <div className="text-4xl font-bold mb-2">Impact</div>
              <p className="text-orange-100">Long-term sustainable change</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}