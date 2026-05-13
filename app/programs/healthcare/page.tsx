"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { Heart, Stethoscope, Users } from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

export default function HealthcarePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-green-50/20 to-white">
      {/* Hero Section with Image */}
      <section className="relative h-96 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-emerald-700">
          <img
            src="https://images.unsplash.com/photo-1587854692152-cbe660dbde0f?auto=format&fit=crop&w=1200&q=80"
            alt="Healthcare worker with Indian patient"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-green-600/80 to-emerald-700/60"></div>
        </div>
        
        <motion.div
          className="relative z-10 h-full flex flex-col justify-center items-center text-center text-white px-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block rounded-full bg-green-100/20 px-4 py-2 text-green-100 mb-4 border border-green-200/50">
            ⚕️ Our Healthcare Initiative
          </div>
          <h1 className="text-5xl font-bold mb-4 max-w-3xl">
            Healthcare Access for All
          </h1>
          <p className="text-xl text-green-100 max-w-2xl">
            Bringing quality healthcare services to India's remote and underserved communities
          </p>
        </motion.div>
      </section>

      {/* Quick Stats */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-6">
          {[
            { icon: "👨‍⚕️", label: "People Served", value: "8L+" },
            { icon: "🏥", label: "Health Camps", value: "400+" },
            { icon: "🚑", label: "Mobile Clinics", value: "50+" },
            { icon: "💊", label: "Free Treatments", value: "100%" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              className="bg-white rounded-lg p-6 shadow-md border border-green-100 text-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="text-4xl mb-2">{stat.icon}</div>
              <div className="text-3xl font-bold text-green-600 mb-2">{stat.value}</div>
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
              src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=600&q=80"
              alt="Healthcare in rural India"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-green-900/40 to-transparent"></div>
          </motion.div>

          <motion.div {...fadeInUp}>
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              Quality Healthcare for <span className="text-green-600">Every Community</span>
            </h2>
            <p className="text-slate-700 text-lg leading-relaxed mb-4">
              Healthcare is a fundamental right, yet millions in rural and urban slums lack access to basic medical services. Our Healthcare Program brings preventive care, treatment, and awareness to communities that need it most.
            </p>
            <p className="text-slate-700 text-lg leading-relaxed mb-6">
              Through mobile clinics, health camps, telemedicine, and community health workers, we ensure accessible, affordable healthcare for vulnerable populations including women, children, and elderly.
            </p>
            <div className="space-y-3">
              {[
                "Mobile health clinics",
                "Free health check-up camps",
                "Preventive health awareness",
                "Telemedicine services",
                "Maternal & child health focus",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="text-green-600 font-bold text-xl mt-1">✓</span>
                  <span className="text-slate-700">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="bg-green-50 border-y border-green-200/50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.h2 className="text-3xl font-bold text-slate-900 mb-12 text-center" {...fadeInUp}>
            Our Healthcare Services
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: "🤰",
                title: "Maternal Health",
                desc: "Prenatal, postnatal, and reproductive health care",
              },
              {
                icon: "👶",
                title: "Child Health",
                desc: "Vaccination, nutrition, and developmental screening",
              },
              {
                icon: "⚕️",
                title: "General Medicine",
                desc: "Diagnosis and treatment of common ailments",
              },
              {
                icon: "🧬",
                title: "Health Education",
                desc: "Awareness on disease prevention and health",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="bg-white rounded-lg p-6 shadow-md border border-green-100 hover:shadow-lg transition-all"
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
          Lives Saved, Lives Transformed
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              name: "Savitri",
              story: "Safe delivery with maternal health program - now has healthy baby",
              image: "🤰",
            },
            {
              name: "Ramesh",
              story: "Early diabetes detection through health camp prevented complications",
              image: "👨‍⚕️",
            },
            {
              name: "Kavya",
              story: "Received free treatment for treatable eye condition, vision restored",
              image: "👩",
            },
          ].map((story, i) => (
            <motion.div
              key={i}
              className="bg-white rounded-xl p-6 shadow-md border border-green-100 hover:shadow-lg transition-all"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.15 }}
            >
              <div className="text-6xl mb-4 text-center">{story.image}</div>
              <h3 className="font-bold text-lg text-slate-900 mb-3">{story.name}</h3>
              <p className="text-slate-600 italic">"{story.story}"</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-green-600 to-emerald-700 py-16 text-white">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <motion.div {...fadeInUp}>
            <h2 className="text-3xl font-bold mb-4">Support Healthcare for All</h2>
            <p className="text-lg mb-8 text-green-100">
              Help us reach more communities with quality healthcare services
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/donate" className="rounded-full bg-white px-8 py-3 font-semibold text-green-600 hover:bg-green-50 transition">
                Donate Now
              </a>
              <a href="/get-involved/corporate" className="rounded-full border-2 border-white px-8 py-3 font-semibold text-white hover:bg-white/10 transition">
                Corporate Partnership
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
