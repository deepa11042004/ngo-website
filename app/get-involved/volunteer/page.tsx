"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Heart, Users, Zap, Calendar } from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

export default function VolunteerPage() {
  const volunteerRoles = [
    {
      icon: "🎓",
      title: "Education Volunteer",
      description: "Teach children in our after-school centers",
      commitment: "5-10 hours/week",
      skills: "Teaching, mentoring, patience",
    },
    {
      icon: "⚕️",
      title: "Health Volunteer",
      description: "Support health camps and awareness programs",
      commitment: "4-8 hours/week",
      skills: "Basic health knowledge, communication",
    },
    {
      icon: "💼",
      title: "Career Mentor",
      description: "Guide youth with career and skill development",
      commitment: "3-5 hours/week",
      skills: "Industry expertise, mentoring",
    },
    {
      icon: "🌍",
      title: "Community Advocate",
      description: "Help raise awareness about our programs",
      commitment: "Flexible",
      skills: "Communication, networking",
    },
    {
      icon: "📱",
      title: "Tech Support",
      description: "Help with digital programs and platforms",
      commitment: "Flexible",
      skills: "Technical skills, digital literacy",
    },
    {
      icon: "📚",
      title: "Content Creator",
      description: "Create stories and content for our campaigns",
      commitment: "Flexible",
      skills: "Writing, design, video production",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-amber-50/30 to-white">
      {/* Hero */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <motion.div className="space-y-6" {...fadeInUp}>
          <h1 className="text-5xl font-bold text-slate-900">
            Volunteer With <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">Us</span>
          </h1>
          <p className="text-xl text-slate-700 max-w-3xl">
            Make a real difference in lives by sharing your time, skills, and passion with our community
          </p>
          <div className="flex gap-4 flex-wrap">
            <button className="rounded-full bg-gradient-to-r from-orange-500 to-red-600 px-8 py-3 font-semibold text-white hover:shadow-lg transition">
              Apply to Volunteer
            </button>
            <a href="#roles" className="rounded-full border-2 border-orange-600 px-8 py-3 font-semibold text-orange-600 hover:bg-orange-50 transition">
              Explore Roles
            </a>
          </div>
        </motion.div>
      </section>

      {/* Why Volunteer */}
      <section className="bg-orange-50 border-y border-orange-200 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.h2 className="text-3xl font-bold text-slate-900 mb-12 text-center" {...fadeInUp}>
            Why Volunteer With Us?
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "🎯",
                title: "Make Real Impact",
                desc: "Your efforts directly help transform lives in your community",
              },
              {
                icon: "🤝",
                title: "Grow Your Skills",
                desc: "Develop new abilities while making a difference",
              },
              {
                icon: "👥",
                title: "Join a Community",
                desc: "Connect with like-minded changemakers",
              },
              {
                icon: "🌟",
                title: "Flexible Commitment",
                desc: "Choose roles and hours that fit your schedule",
              },
              {
                icon: "📚",
                title: "Learn & Grow",
                desc: "Gain valuable experience and perspectives",
              },
              {
                icon: "❤️",
                title: "Purpose-Driven",
                desc: "Be part of something meaningful",
              },
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

      {/* Volunteer Roles */}
      <section id="roles" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <motion.h2 className="text-3xl font-bold text-slate-900 mb-12 text-center" {...fadeInUp}>
          Volunteer Roles
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {volunteerRoles.map((role, i) => (
            <motion.div
              key={i}
              className="bg-white rounded-xl shadow-lg border border-amber-100/50 p-6 hover:shadow-xl transition-all"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="text-5xl mb-3">{role.icon}</div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">{role.title}</h3>
              <p className="text-slate-600 mb-4">{role.description}</p>
              <div className="space-y-2 pt-4 border-t border-amber-100/50">
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-orange-600 font-semibold">⏱️</span>
                  <span className="text-slate-700">{role.commitment}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-orange-600 font-semibold">🎯</span>
                  <span className="text-slate-700">{role.skills}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="bg-gradient-to-r from-orange-600 to-red-600 py-16 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.h2 className="text-3xl font-bold text-center mb-12" {...fadeInUp}>
            How To Get Started
          </motion.h2>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { num: "1", title: "Register", desc: "Fill out volunteer form" },
              { num: "2", title: "Orientation", desc: "Attend briefing session" },
              { num: "3", title: "Start", desc: "Choose your project" },
              { num: "4", title: "Impact", desc: "Make a difference" },
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
          <h2 className="text-3xl font-bold text-slate-900">Ready to Make a Difference?</h2>
          <p className="text-lg text-slate-600">
            Your time and skills can transform lives. Join thousands of volunteers creating change.
          </p>
          <button className="rounded-full bg-gradient-to-r from-orange-500 to-red-600 px-8 py-3 font-semibold text-white hover:shadow-lg transition">
            Apply to Volunteer Now
          </button>
        </motion.div>
      </section>
    </div>
  );
}
