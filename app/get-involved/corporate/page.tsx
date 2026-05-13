"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Building2, TrendingUp, Users, Award } from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

export default function CorporatePartnersPage() {
  const partnershipModels = [
    {
      icon: "🎯",
      title: "CSR Programs",
      description: "Structured CSR initiatives aligned with Sustainable Development Goals",
      benefits: ["Tax benefits", "Community impact", "Employee engagement", "Brand visibility"],
    },
    {
      icon: "👥",
      title: "Employee Engagement",
      description: "Volunteer programs and team-building with social impact",
      benefits: ["Team bonding", "Skill development", "Meaningful work", "Recognition"],
    },
    {
      icon: "💰",
      title: "Financial Partnerships",
      description: "Direct funding for specific programs and initiatives",
      benefits: ["Customized programs", "Measurable impact", "Regular reporting", "Scaling impact"],
    },
    {
      icon: "📱",
      title: "In-Kind Support",
      description: "Provide products, services, or expertise to enhance our programs",
      benefits: ["Direct impact", "Resource optimization", "Brand alignment", "Partnership value"],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-amber-50/30 to-white">
      {/* Hero */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <motion.div className="space-y-6" {...fadeInUp}>
          <h1 className="text-5xl font-bold text-slate-900">
            Corporate <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">Partnerships</span>
          </h1>
          <p className="text-xl text-slate-700 max-w-3xl">
            Create measurable social impact while building brand value through strategic partnerships
          </p>
        </motion.div>
      </section>

      {/* Partnership Models */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <motion.h2 className="text-3xl font-bold text-slate-900 mb-12 text-center" {...fadeInUp}>
          Partnership Models
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-8">
          {partnershipModels.map((model, i) => (
            <motion.div
              key={i}
              className="bg-white rounded-xl shadow-lg border border-amber-100/50 p-8 hover:shadow-xl transition-all"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="text-5xl mb-4">{model.icon}</div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">{model.title}</h3>
              <p className="text-slate-600 mb-6">{model.description}</p>
              <div className="space-y-2 border-t border-amber-100/50 pt-6">
                <p className="font-semibold text-slate-900 text-sm">Key Benefits:</p>
                {model.benefits.map((benefit, j) => (
                  <div key={j} className="flex items-center gap-2 text-sm">
                    <span className="text-orange-600">✓</span>
                    <span className="text-slate-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why Partner */}
      <section className="bg-orange-50 border-y border-orange-200 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.h2 className="text-3xl font-bold text-slate-900 mb-12 text-center" {...fadeInUp}>
            Why Partner With Us?
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: "📊",
                title: "Measurable Impact",
                desc: "Real-time tracking and reporting of your CSR initiatives and social ROI",
              },
              {
                icon: "🌍",
                title: "Trusted Organization",
                desc: "Certified NGO with international accreditations and 20+ years of experience",
              },
              {
                icon: "🎯",
                title: "SDG Alignment",
                desc: "Programs aligned with UN Sustainable Development Goals",
              },
              {
                icon: "👥",
                title: "Community Trust",
                desc: "Working in 2000+ communities with established relationships and credibility",
              },
              {
                icon: "💡",
                title: "Innovation",
                desc: "Piloting new approaches and scaling proven solutions",
              },
              {
                icon: "🤝",
                title: "Partnership Approach",
                desc: "Collaborative planning and execution for maximum impact",
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

      {/* Success Stories */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <motion.h2 className="text-3xl font-bold text-slate-900 mb-12 text-center" {...fadeInUp}>
          Our Corporate Partners
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              name: "Tech Company India",
              program: "Digital Literacy Program",
              impact: "10,000+ students trained",
              logo: "💻",
            },
            {
              name: "Healthcare Solutions Ltd",
              program: "Mobile Health Camps",
              impact: "50,000+ people served",
              logo: "⚕️",
            },
            {
              name: "Retail Industries",
              program: "Women Skill Training",
              impact: "5,000+ women empowered",
              logo: "🛍️",
            },
          ].map((partner, i) => (
            <motion.div
              key={i}
              className="bg-white rounded-lg p-6 shadow-md border border-amber-100/50"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
            >
              <div className="text-5xl mb-3">{partner.logo}</div>
              <h3 className="font-bold text-slate-900 mb-1">{partner.name}</h3>
              <p className="text-orange-600 font-semibold text-sm mb-3">{partner.program}</p>
              <p className="text-slate-600 text-sm font-semibold">{partner.impact}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Partnership Process */}
      <section className="bg-gradient-to-r from-orange-600 to-red-600 py-16 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.h2 className="text-3xl font-bold text-center mb-12" {...fadeInUp}>
            Partnership Development Process
          </motion.h2>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { num: "1", title: "Discovery", desc: "Understand your CSR goals and priorities" },
              { num: "2", title: "Alignment", desc: "Co-design programs suited to both" },
              { num: "3", title: "Implementation", desc: "Execute tailored programs together" },
              { num: "4", title: "Impact", desc: "Measure and report success metrics" },
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
          <h2 className="text-3xl font-bold text-slate-900">Ready to Make a Social Impact?</h2>
          <p className="text-lg text-slate-600">
            Let's work together to create meaningful change in communities across India
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:corporate@secondlightfoundation.org" className="rounded-full bg-gradient-to-r from-orange-500 to-red-600 px-8 py-3 font-semibold text-white hover:shadow-lg transition">
              Get in Touch
            </a>
            <a href="#" className="rounded-full border-2 border-orange-600 px-8 py-3 font-semibold text-orange-600 hover:bg-orange-50 transition">
              Download Brochure
            </a>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
