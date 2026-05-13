"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Briefcase, Users, TrendingUp, Award } from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

export default function CareersPage() {
  const jobOpenings = [
    {
      icon: "👨‍🏫",
      title: "Education Program Manager",
      location: "Delhi/Mumbai",
      type: "Full-time",
      description: "Lead education initiatives and manage program execution",
    },
    {
      icon: "⚕️",
      title: "Health Coordinator",
      location: "Pune/Bangalore",
      type: "Full-time",
      description: "Coordinate healthcare programs and health camps",
    },
    {
      icon: "💼",
      title: "Community Liaison Officer",
      location: "Rural Areas",
      type: "Full-time",
      description: "Build relationships with communities and ensure program uptake",
    },
    {
      icon: "📊",
      title: "Monitoring & Evaluation Officer",
      location: "Delhi/Any City",
      type: "Full-time",
      description: "Track and measure impact of our programs",
    },
    {
      icon: "🎯",
      title: "Corporate Partnerships Manager",
      location: "Delhi/Any Metro",
      type: "Full-time",
      description: "Develop and manage corporate CSR partnerships",
    },
    {
      icon: "📱",
      title: "Digital Program Developer",
      location: "Remote",
      type: "Full-time",
      description: "Develop digital tools and platforms for our initiatives",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-amber-50/30 to-white">
      {/* Hero */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <motion.div className="space-y-6" {...fadeInUp}>
          <h1 className="text-5xl font-bold text-slate-900">
            Join Our <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">Team</span>
          </h1>
          <p className="text-xl text-slate-700 max-w-3xl">
            Build a career that matters. Work with passionate professionals creating systemic change across India.
          </p>
        </motion.div>
      </section>

      {/* Why Join */}
      <section className="bg-orange-50 border-y border-orange-200 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.h2 className="text-3xl font-bold text-slate-900 mb-12 text-center" {...fadeInUp}>
            Why Join Second Light Foundation?
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: "🎯", title: "Purpose-Driven Work", desc: "Make a real difference in society" },
              { icon: "🌱", title: "Professional Growth", desc: "Develop skills and advance your career" },
              { icon: "🤝", title: "Diverse Team", desc: "Work with talented professionals from varied backgrounds" },
              { icon: "☘️", title: "Good Benefits", desc: "Competitive salary and benefits package" },
              { icon: "💡", title: "Innovation Culture", desc: "Try new approaches and pilot innovative solutions" },
              { icon: "⚖️", title: "Work-Life Balance", desc: "Flexible policies supporting well-being" },
            ].map((reason, i) => (
              <motion.div
                key={i}
                className="bg-white rounded-lg p-6 border border-orange-200"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="text-4xl mb-3">{reason.icon}</div>
                <h3 className="font-bold text-slate-900 mb-2">{reason.title}</h3>
                <p className="text-slate-600 text-sm">{reason.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <motion.h2 className="text-3xl font-bold text-slate-900 mb-12 text-center" {...fadeInUp}>
          Current Job Openings
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {jobOpenings.map((job, i) => (
            <motion.div
              key={i}
              className="bg-white rounded-xl shadow-lg border border-amber-100/50 p-6 hover:shadow-xl transition-all"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="text-5xl mb-3">{job.icon}</div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">{job.title}</h3>
              <p className="text-slate-600 mb-4">{job.description}</p>
              <div className="space-y-2 pt-4 border-t border-amber-100/50">
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-orange-600 font-semibold">📍</span>
                  <span className="text-slate-700">{job.location}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-orange-600 font-semibold">💼</span>
                  <span className="text-slate-700">{job.type}</span>
                </div>
              </div>
              <button className="w-full mt-4 rounded-lg bg-orange-100 text-orange-700 font-semibold py-2 hover:bg-orange-200 transition">
                Learn More
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Our Team Culture */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <motion.h2 className="text-3xl font-bold text-slate-900 mb-12 text-center" {...fadeInUp}>
          Our Team Culture
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            className="bg-white rounded-xl shadow-lg border border-amber-100/50 p-8"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold text-slate-900 mb-4">What We Value</h3>
            <ul className="space-y-3">
              {[
                "Collaborative teamwork and mutual respect",
                "Continuous learning and development",
                "Transparency and accountability",
                "Innovation and creative problem-solving",
                "Diversity and inclusion",
                "Work-life integration",
              ].map((value, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-orange-600 font-bold text-lg mt-1">✓</span>
                  <span className="text-slate-700">{value}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            className="bg-white rounded-xl shadow-lg border border-amber-100/50 p-8"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Benefits Package</h3>
            <ul className="space-y-3">
              {[
                "Competitive salary and performance bonuses",
                "Comprehensive health insurance coverage",
                "Professional development opportunities",
                "Flexible work arrangements",
                "Paid leave and holidays",
                "Team building and wellness programs",
              ].map((benefit, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-green-600 font-bold text-lg mt-1">✓</span>
                  <span className="text-slate-700">{benefit}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Application Process */}
      <section className="bg-gradient-to-r from-orange-600 to-red-600 py-16 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.h2 className="text-3xl font-bold text-center mb-12" {...fadeInUp}>
            Application Process
          </motion.h2>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { num: "1", title: "Submit", desc: "Apply online with your resume" },
              { num: "2", title: "Review", desc: "We evaluate your application" },
              { num: "3", title: "Interview", desc: "Phone/in-person conversations" },
              { num: "4", title: "Onboard", desc: "Join our team and make impact" },
            ].map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
              >
                <div className="bg-white/20 rounded-full w-16 h-16 flex items-center justify-center text-3xl font-bold mx-auto mb-3">
                  {step.num}
                </div>
                <h3 className="font-bold text-lg mb-2">{step.title}</h3>
                <p className="text-orange-100">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8 text-center">
        <motion.div className="space-y-6" {...fadeInUp}>
          <h2 className="text-3xl font-bold text-slate-900">Start Your Journey With Us</h2>
          <p className="text-lg text-slate-600">
            Build a career that creates meaningful impact in the lives of millions
          </p>
          <a href="mailto:careers@secondlightfoundation.org" className="inline-block rounded-full bg-gradient-to-r from-orange-500 to-red-600 px-8 py-3 font-semibold text-white hover:shadow-lg transition">
            Apply Now
          </a>
        </motion.div>
      </section>
    </div>
  );
}
