"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
      <motion.div
        initial={{ scale: 1.08, opacity: 0.7 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.1, ease: "easeOut" }}
        className="absolute inset-0 -z-20 bg-[url('https://images.unsplash.com/photo-1529390079861-591de354faf5?auto=format&fit=crop&w=1800&q=80')] bg-cover bg-center"
        aria-hidden="true"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-slate-950/80 via-slate-900/65 to-blue-900/50" />
      <div className="mx-auto flex min-h-[74vh] w-full max-w-7xl items-center px-4 py-20 sm:px-6 lg:px-8">
        <motion.div
          initial={{ y: 24, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.75, delay: 0.12 }}
          className="max-w-3xl"
        >
          <p className="mb-4 inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-1 text-sm text-white/90">
            Trusted by donors, volunteers, and communities across India
          </p>
          <h1 className="text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
            Together, We Can Change Lives
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-100/95">
            Empowering communities through education, health, and hope with transparent,
            measurable impact.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              href="/donate"
              className="rounded-full bg-orange-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-orange-600"
            >
              Donate Now
            </Link>
            <Link
              href="/contact"
              className="rounded-full border border-white/70 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-slate-900"
            >
              Volunteer
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
