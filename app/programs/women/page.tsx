"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { Users, Heart, Zap } from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

export default function WomenEmpowermentPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-orange-50/20 to-white">
      {/* Hero Section with Image */}
      <section className="relative h-96 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-amber-700">
          <img
            src="https://images.unsplash.com/photo-1540575467063-178f50002cbc?auto=format&fit=crop&w=1200&q=80"
            alt="Indian women in self-help group"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-orange-600/80 to-amber-700/60"></div>
        </div>
        
        <motion.div
          className="relative z-10 h-full flex flex-col justify-center items-center text-center text-white px-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block rounded-full bg-orange-100/20 px-4 py-2 text-orange-100 mb-4 border border-orange-200/50">
            👩 Women Empowerment Initiative
          </div>
          <h1 className="text-5xl font-bold mb-4 max-w-3xl">
            Empowering Women, Transforming India
          </h1>
          <p className="text-xl text-orange-100 max-w-2xl">
            Economic independence, leadership, and dignified lives for millions of Indian women
          </p>
        </motion.div>
      </section>

      {/* Quick Stats */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-6">
          {[
            { icon: "👩", label: "Women Empowered", value: "3L+" },
            { icon: "👥", label: "Self-Help Groups", value: "500+" },
            { icon: "💰", label: "Avg Income", value: "3x↑" },
            { icon: "🎯", label: "Leadership Roles", value: "1000+" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              className="bg-white rounded-lg p-6 shadow-md border border-orange-100 text-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="text-4xl mb-2">{stat.icon}</div>
              <div className="text-3xl font-bold text-orange-600 mb-2">{stat.value}</div>
              <p className="text-slate-600 text-sm font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Main Content */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div {...fadeInUp}>
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              Creating <span className="text-orange-600">Opportunities</span> for Women
            </h2>
            <p className="text-slate-700 text-lg leading-relaxed mb-4">
              Women are the backbone of communities. When women are empowered, entire villages are transformed. Our Women Empowerment Program focuses on economic independence, financial literacy, skill development, and leadership opportunities.
            </p>
            <p className="text-slate-700 text-lg leading-relaxed mb-6">
              Through vocational training, self-help groups, microfinance support, and community leadership programs, we enable women to become economically independent and influential decision-makers in their families and communities.
            </p>
            <div className="space-y-3">
              {[
                "Vocational skill training",
                "Self-Help Group formation",
                "Microfinance & loans",
                "Financial literacy",
                "Leadership & advocacy training",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="text-orange-600 font-bold text-xl mt-1">✓</span>
                  <span className="text-slate-700">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="relative h-96 rounded-xl overflow-hidden shadow-lg"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=600&q=80"
              alt="Women group activity"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-orange-900/40 to-transparent"></div>
          </motion.div>
        </div>
      </section>

      {/* Program Focus */}
      <section className="bg-orange-50 border-y border-orange-200/50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.h2 className="text-3xl font-bold text-slate-900 mb-12 text-center" {...fadeInUp}>
            Our Focus Areas
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: "🛠️",
                title: "Skills Training",
                desc: "Tailoring, beautician, handicrafts, digital skills",
              },
              {
                icon: "💼",
                title: "Enterprises",
                desc: "Starting & scaling women-led businesses",
              },
              {
                icon: "🎓",
                title: "Education",
                desc: "Girl child education & mother literacy",
              },
              {
                icon: "🗣️",
                title: "Leadership",
                desc: "Community organizing & advocacy",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="bg-white rounded-lg p-6 shadow-md border border-orange-100 hover:shadow-lg transition-all"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-600 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <motion.h2 className="text-3xl font-bold text-slate-900 mb-12 text-center" {...fadeInUp}>
          Women Who Changed Their World
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              name: "Geeta",
              title: "Entrepreneur",
              story: "Started tailoring business, now supports 5 other women workers",
              image: "👗",
            },
            {
              name: "Aisha",
              title: "Leader",
              story: "From homemaker to elected village leader advocating for women's rights",
              image: "🗣️",
            },
            {
              name: "Deepa",
              title: "Business Owner",
              story: "Handicraft enterprise generating ₹5L annual income for family",
              image: "🎨",
            },
          ].map((story, i) => (
            <motion.div
              key={i}
              className="bg-white rounded-xl p-6 shadow-md border border-orange-100 hover:shadow-lg transition-all"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.15 }}
            >
              <div className="text-6xl mb-4 text-center">{story.image}</div>
              <h3 className="font-bold text-lg text-slate-900 mb-1">{story.name}</h3>
              <p className="text-orange-600 font-semibold text-sm mb-3">{story.title}</p>
              <p className="text-slate-600 italic">"{story.story}"</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-orange-600 to-amber-700 py-16 text-white">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <motion.div {...fadeInUp}>
            <h2 className="text-3xl font-bold mb-4">Support Women's Empowerment</h2>
            <p className="text-lg mb-8 text-orange-100">
              Every step toward women's independence creates ripples of change across entire communities
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/donate" className="rounded-full bg-white px-8 py-3 font-semibold text-orange-600 hover:bg-orange-50 transition">
                Donate Now
              </a>
              <a href="/get-involved/volunteer" className="rounded-full border-2 border-white px-8 py-3 font-semibold text-white hover:bg-white/10 transition">
                Be a Volunteer
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
