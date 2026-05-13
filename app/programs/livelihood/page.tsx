"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { Briefcase, Target, TrendingUp } from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

export default function LivelihoodPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-amber-50/20 to-white">
      {/* Hero Section with Image */}
      <section className="relative h-96 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-orange-700">
          <img
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80"
            alt="Indian youth in vocational training"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-amber-600/80 to-orange-700/60"></div>
        </div>
        
        <motion.div
          className="relative z-10 h-full flex flex-col justify-center items-center text-center text-white px-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block rounded-full bg-amber-100/20 px-4 py-2 text-amber-100 mb-4 border border-amber-200/50">
            💼 Our Livelihood Initiative
          </div>
          <h1 className="text-5xl font-bold mb-4 max-w-3xl">
            Skills for Dignity, Jobs for Futures
          </h1>
          <p className="text-xl text-amber-100 max-w-2xl">
            Equipping Indian youth with in-demand skills for secure employment and entrepreneurship
          </p>
        </motion.div>
      </section>

      {/* Quick Stats */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-6">
          {[
            { icon: "👨‍💼", label: "Youth Trained", value: "2L+" },
            { icon: "💼", label: "Placements", value: "1.5L+" },
            { icon: "📈", label: "Avg Salary Increase", value: "150%" },
            { icon: "🏢", label: "Partner Companies", value: "500+" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              className="bg-white rounded-lg p-6 shadow-md border border-amber-100 text-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="text-4xl mb-2">{stat.icon}</div>
              <div className="text-3xl font-bold text-amber-600 mb-2">{stat.value}</div>
              <p className="text-slate-600 text-sm font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Main Content */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            className="relative h-96 rounded-xl overflow-hidden shadow-lg"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=600&q=80"
              alt="Youth skills training"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-amber-900/40 to-transparent"></div>
          </motion.div>

          <motion.div {...fadeInUp}>
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              Building <span className="text-amber-600">Employable Skills</span>
            </h2>
            <p className="text-slate-700 text-lg leading-relaxed mb-4">
              Youth unemployment is one of India's biggest challenges. Our Livelihood Program equips underprivileged young people with job-ready skills in high-demand sectors, connecting them to meaningful employment and entrepreneurial opportunities.
            </p>
            <p className="text-slate-700 text-lg leading-relaxed mb-6">
              We provide curriculum-based training, hands-on practice, soft skills development, placement support, and ongoing mentorship to ensure lasting livelihood improvement and career growth.
            </p>
            <div className="space-y-3">
              {[
                "Vocational skill certification",
                "Industry-aligned training",
                "Job placement assistance",
                "Entrepreneurship support",
                "Continuous skill upgrading",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="text-amber-600 font-bold text-xl mt-1">✓</span>
                  <span className="text-slate-700">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Offered */}
      <section className="bg-amber-50 border-y border-amber-200/50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.h2 className="text-3xl font-bold text-slate-900 mb-12 text-center" {...fadeInUp}>
            In-Demand Skills We Train
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: "🏗️",
                title: "Construction",
                desc: "Skilled trades in high-demand building sector",
              },
              {
                icon: "💻",
                title: "IT & Digital",
                desc: "Software, coding, and digital marketing",
              },
              {
                icon: "🏥",
                title: "Healthcare",
                desc: "Nursing, paramedical, care assistance",
              },
              {
                icon: "🍳",
                title: "Hospitality",
                desc: "Chef, housekeeping, food service skills",
              },
              {
                icon: "🚗",
                title: "Automotive",
                desc: "Vehicle maintenance and repair",
              },
              {
                icon: "👗",
                title: "Fashion & Design",
                desc: "Tailoring and garment production",
              },
              {
                icon: "📞",
                title: "BPO & Services",
                desc: "Call center & customer service skills",
              },
              {
                icon: "🛠️",
                title: "Plumbing & Electrical",
                desc: "Essential technical skills for urban India",
              },
            ].map((skill, i) => (
              <motion.div
                key={i}
                className="bg-white rounded-lg p-6 shadow-md border border-amber-100 hover:shadow-lg transition-all"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
              >
                <div className="text-4xl mb-3">{skill.icon}</div>
                <h3 className="font-bold text-slate-900 mb-2">{skill.title}</h3>
                <p className="text-slate-600 text-sm">{skill.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <motion.h2 className="text-3xl font-bold text-slate-900 mb-12 text-center" {...fadeInUp}>
          From Struggle to Success
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              name: "Arjun",
              before: "Unemployed school dropout",
              after: "Now earns ₹25,000/month as senior technician",
              image: "⚡",
            },
            {
              name: "Sneha",
              before: "Struggling domestic worker",
              after: "Started own catering business, income ₹3L/year",
              image: "🍳",
            },
            {
              name: "Rahul",
              before: "Manual laborer earning ₹8,000/month",
              after: "BPO professional earning ₹35,000/month",
              image: "💼",
            },
          ].map((story, i) => (
            <motion.div
              key={i}
              className="bg-white rounded-xl p-6 shadow-md border border-amber-100 hover:shadow-lg transition-all"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.15 }}
            >
              <div className="text-6xl mb-4 text-center">{story.image}</div>
              <h3 className="font-bold text-lg text-slate-900 mb-3">{story.name}</h3>
              <div className="space-y-2">
                <div>
                  <p className="text-xs text-slate-500 font-semibold">Before Training:</p>
                  <p className="text-slate-700">{story.before}</p>
                </div>
                <div className="border-t border-amber-100 pt-2">
                  <p className="text-xs text-green-600 font-semibold">After Training:</p>
                  <p className="text-slate-700 font-semibold">{story.after}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Training Process */}
      <section className="bg-amber-50 border-y border-amber-200/50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.h2 className="text-3xl font-bold text-slate-900 mb-12 text-center" {...fadeInUp}>
            Our Proven Training Model
          </motion.h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { num: "1", title: "Assessment", desc: "Evaluate aptitude & skills" },
              { num: "2", title: "Training", desc: "6-12 months structured curriculum" },
              { num: "3", title: "Internship", desc: "Hands-on experience with employers" },
              { num: "4", title: "Placement", desc: "Job placement with follow-up support" },
            ].map((step, i) => (
              <motion.div
                key={i}
                className="bg-white rounded-lg p-6 shadow-md border border-amber-100"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15 }}
              >
                <div className="bg-amber-100 text-amber-700 rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg mb-3">
                  {step.num}
                </div>
                <h3 className="font-bold text-slate-900 mb-2">{step.title}</h3>
                <p className="text-slate-600 text-sm">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-amber-600 to-orange-700 py-16 text-white">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <motion.div {...fadeInUp}>
            <h2 className="text-3xl font-bold mb-4">Support Livelihood Through Skills</h2>
            <p className="text-lg mb-8 text-amber-100">
              Help youth achieve financial independence and dignified employment
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/donate" className="rounded-full bg-white px-8 py-3 font-semibold text-amber-600 hover:bg-amber-50 transition">
                Donate Now
              </a>
              <a href="/get-involved/corporate" className="rounded-full border-2 border-white px-8 py-3 font-semibold text-white hover:bg-white/10 transition">
                Partner With Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
