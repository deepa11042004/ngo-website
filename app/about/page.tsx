"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Heart, Users, Lightbulb, Globe, Award, Zap } from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-amber-50/30 to-white">
      {/* Hero Section */}
      <section className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <motion.div className="space-y-6" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>
          <div className="inline-block rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-700">
            ✨ Our Story
          </div>
          <h1 className="text-5xl font-bold tracking-tight text-slate-900 sm:text-6xl">
            Bringing <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">Light to Lives</span>
          </h1>
          <p className="text-xl text-slate-700 max-w-3xl leading-relaxed">
            Since 2012, Second Light Foundation has been a catalyst for positive change, empowering over 20 lakh individuals across India through education, healthcare, women empowerment, and livelihood development.
          </p>
        </motion.div>
      </section>

      {/* Mission & Vision */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div className="bg-white rounded-xl shadow-lg p-8 border border-amber-100/50 hover:shadow-xl transition-all" {...fadeInUp}>
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-orange-100 mb-4">
              <Heart className="text-orange-600" size={24} />
            </div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Our Mission</h2>
            <p className="text-slate-700 leading-relaxed">
              To work as a catalyst in the cycle of change, complementing government efforts to provide access to quality education, healthcare, and livelihood opportunities for the underprivileged sections of Indian society.
            </p>
          </motion.div>

          <motion.div className="bg-white rounded-xl shadow-lg p-8 border border-amber-100/50 hover:shadow-xl transition-all" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-green-100 mb-4">
              <Lightbulb className="text-green-600" size={24} />
            </div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Our Vision</h2>
            <p className="text-slate-700 leading-relaxed">
              To create a society where every individual has access to opportunities for a dignified life, irrespective of their economic background or social circumstances.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="bg-gradient-to-r from-orange-600 to-red-600 py-16 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Impact Over the Years</h2>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <motion.div {...fadeInUp}>
              <div className="text-5xl font-bold mb-2">12+</div>
              <div className="text-orange-100">Years of Service</div>
            </motion.div>
            <motion.div {...fadeInUp} transition={{ delay: 0.1 }}>
              <div className="text-5xl font-bold mb-2">2000+</div>
              <div className="text-orange-100">Villages & Communities</div>
            </motion.div>
            <motion.div {...fadeInUp} transition={{ delay: 0.2 }}>
              <div className="text-5xl font-bold mb-2">20L+</div>
              <div className="text-orange-100">Lives Impacted</div>
            </motion.div>
            <motion.div {...fadeInUp} transition={{ delay: 0.3 }}>
              <div className="text-5xl font-bold mb-2">27</div>
              <div className="text-orange-100">States Across India</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <motion.div className="text-center mb-12" {...fadeInUp}>
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Core Values</h2>
          <p className="text-lg text-slate-600">Principles that guide our mission</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { icon: "🤝", title: "Compassion", desc: "We empathize with communities and work with heartfelt dedication" },
            { icon: "🎯", title: "Accountability", desc: "We are transparent and responsible to all our stakeholders" },
            { icon: "⚡", title: "Innovation", desc: "We seek creative and sustainable solutions to complex problems" },
            { icon: "🌍", title: "Sustainability", desc: "We build lasting changes that benefit generations" },
            { icon: "👥", title: "Partnership", desc: "We collaborate with communities, NGOs, and organizations" },
            { icon: "📈", title: "Integrity", desc: "We maintain the highest ethical standards in all endeavors" },
          ].map((value, i) => (
            <motion.div
              key={i}
              className="bg-white rounded-lg p-6 shadow-md border border-amber-100/50 hover:shadow-lg hover:border-orange-200 transition-all"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="text-4xl mb-3">{value.icon}</div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">{value.title}</h3>
              <p className="text-slate-600 text-sm">{value.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Milestones */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 bg-white rounded-2xl">
        <motion.div className="text-center mb-12" {...fadeInUp}>
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Journey</h2>
          <p className="text-lg text-slate-600">From a small initiative to a nationwide movement</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { year: "2012", title: "Foundation Established", desc: "Started with vision for community empowerment" },
            { year: "2016", title: "Expanded Reach", desc: "Expanded operations to 15 states with 5L+ beneficiaries" },
            { year: "2024", title: "National Recognition", desc: "Recognized as Most Inspiring NGO across India" },
          ].map((milestone, i) => (
            <motion.div
              key={i}
              className="relative bg-gradient-to-br from-orange-50 to-red-50 rounded-lg p-6 border border-orange-200"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.2 }}
            >
              <div className="text-3xl font-bold text-orange-600 mb-2">{milestone.year}</div>
              <h3 className="font-bold text-slate-900 mb-2">{milestone.title}</h3>
              <p className="text-slate-600 text-sm">{milestone.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Sub-pages Navigation */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <motion.h2 className="text-3xl font-bold text-slate-900 mb-8" {...fadeInUp}>
          Learn More About Us
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: "Our Team", href: "/about/our-team", icon: "👨‍💼" },
            { title: "Our Impact", href: "/about/our-impact", icon: "📊" },
            { title: "Vision & Mission", href: "/about/vision-mission", icon: "🎯" },
            { title: "Our Approach", href: "/about/our-approach", icon: "🛠️" },
          ].map((item, i) => (
            <Link
              key={item.href}
              href={item.href}
              className="group bg-white rounded-lg p-6 shadow-md border border-amber-100/50 hover:shadow-lg hover:border-orange-200 transition-all cursor-pointer"
            >
              <div className="text-4xl mb-3">{item.icon}</div>
              <h3 className="font-bold text-slate-900 group-hover:text-orange-600 transition-colors">{item.title}</h3>
              <p className="text-sm text-slate-600 mt-2">Learn more →</p>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-orange-600 to-red-600 py-16 text-white">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-4">Ready to Make a Difference?</h2>
          <p className="text-lg mb-8 text-orange-100">Join us in creating positive change across India</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/get-involved/volunteer" className="rounded-full bg-white px-8 py-3 font-semibold text-orange-600 hover:bg-orange-50 transition">
              Volunteer With Us
            </Link>
            <Link href="/donate" className="rounded-full border-2 border-white px-8 py-3 font-semibold text-white hover:bg-white hover:text-orange-600 transition">
              Donate Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
