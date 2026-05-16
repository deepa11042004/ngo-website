"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { BookOpen, Users, Target, Award } from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

export default function EducationPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-orange-50/20 to-white">
      {/* Hero Section with Image */}
      <section className="relative h-96 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/about-india-community.jpg')" }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-orange-700/20 via-orange-600/12 to-amber-700/10"></div>
        </div>
        
        <motion.div
          className="relative z-10 h-full flex flex-col justify-center items-center text-center text-white px-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block rounded-full bg-orange-100/20 px-4 py-2 text-orange-100 mb-4 border border-orange-200/50">
            🎓 Our Education Initiative
          </div>
          <h1 className="text-5xl font-bold mb-4 max-w-3xl">
            Quality Education for Every Child
          </h1>
          <p className="text-xl text-orange-100 max-w-2xl">
            Empowering India's future through accessible, quality education and holistic development
          </p>
        </motion.div>
      </section>

      {/* Quick Stats */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-6">
          {[
            { icon: "👨‍🎓", label: "Students Reached", value: "5L+" },
            { icon: "🏫", label: "Learning Centers", value: "2000+" },
            { icon: "👨‍🏫", label: "Teachers Trained", value: "500+" },
            { icon: "📚", label: "Success Rate", value: "95%" },
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
              Transforming Lives Through <span className="text-orange-600">Education</span>
            </h2>
            <p className="text-slate-700 text-lg leading-relaxed mb-4">
              Education is the most powerful tool for social transformation. Our Education Program works to ensure that every child, especially from marginalized communities, has access to quality education and the opportunity to build a better future.
            </p>
            <p className="text-slate-700 text-lg leading-relaxed mb-6">
              We provide after-school support, nutrition programs, digital literacy, skill development, and mentorship to help children stay in school and reach their full potential.
            </p>
            <div className="space-y-3">
              {[
                "After-school learning centers",
                "Nutrition and health support",
                "Digital literacy programs",
                "Scholarship support",
                "Mentorship & career guidance",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="text-orange-600 font-bold text-xl mt-1">✓</span>
                  <span className="text-slate-700">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="relative h-96 overflow-hidden rounded-xl shadow-lg bg-cover bg-center"
            style={{ backgroundImage: "url('/community-children.jpg')" }}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-orange-900/20 to-transparent"></div>
          </motion.div>
        </div>
      </section>

      {/* Program Components */}
      <section className="bg-orange-50 border-y border-orange-200/50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.h2 className="text-3xl font-bold text-slate-900 mb-12 text-center" {...fadeInUp}>
            Our Education Initiatives
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: "📚",
                title: "After-School Centers",
                desc: "Safe spaces for homework, tutoring, and learning",
              },
              {
                icon: "💻",
                title: "Digital Literacy",
                desc: "Computer skills and online safety training",
              },
              {
                icon: "🍎",
                title: "Nutrition Program",
                desc: "Healthy meals to support learning",
              },
              {
                icon: "🎯",
                title: "Skill Building",
                desc: "Vocational training for future employment",
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

      {/* Impact Stories */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <motion.h2 className="text-3xl font-bold text-slate-900 mb-12 text-center" {...fadeInUp}>
          Stories of Transformation
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              name: "Priya",
              age: 14,
              story: "From struggling students to academic achiever, now dreams of becoming a doctor",
              image: "👧",
            },
            {
              name: "Raj",
              age: 12,
              story: "Learned coding through our digital literacy program, inspired to pursue tech",
              image: "👦",
            },
            {
              name: "Sunita",
              age: 16,
              story: "First in family to complete 10th grade, now pursuing higher education",
              image: "👧",
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
              <h3 className="font-bold text-lg text-slate-900 mb-1">{story.name}, {story.age}</h3>
              <p className="text-slate-600 italic">"{story.story}"</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* How You Can Help */}
      <section className="bg-gradient-to-r from-orange-600 to-amber-700 py-16 text-white">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <motion.div {...fadeInUp}>
            <h2 className="text-3xl font-bold mb-4">Help Us Transform Education</h2>
            <p className="text-lg mb-8 text-orange-100">
              Your support can provide quality education to thousands of children in India
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/donate" className="rounded-full bg-white px-8 py-3 font-semibold text-orange-600 hover:bg-orange-50 transition">
                Donate Now
              </a>
              <a href="/get-involved/volunteer" className="rounded-full border-2 border-white px-8 py-3 font-semibold text-white hover:bg-white/10 transition">
                Volunteer
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
