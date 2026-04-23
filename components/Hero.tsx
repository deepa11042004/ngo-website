"use client";

import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";

const slides = [
  {
    image:
      "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=1800&q=80",
    alt: "Indian schoolgirl smiling in a community learning center",
    badge: "Delhi-led initiatives, India-wide impact",
    title: "Together, We Can Change Lives",
    subtitle:
      "Empowering children and families through education, health, and hope with transparent, measurable impact.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1594608661623-aa0bd3a69d98?auto=format&fit=crop&w=1800&q=80",
    alt: "Indian children in a Delhi community classroom",
    badge: "Focused on underserved neighborhoods in Delhi",
    title: "Every Child Deserves A Brighter Future",
    subtitle:
      "From after-school support to nutrition and healthcare, we help children stay safe, healthy, and in school.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1522661067900-ab829854a57f?auto=format&fit=crop&w=1800&q=80",
    alt: "Indian children from a community support program",
    badge: "Rooted in compassion and accountability",
    title: "Your Support Builds Real Change",
    subtitle:
      "Join donors and volunteers who are helping families across Delhi and nearby regions create lasting opportunity.",
  },
];

export default function Hero() {
  const [active, setActive] = useState(0);

  const previousSlide = () => {
    setActive((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const nextSlide = () => {
    setActive((prev) => (prev + 1) % slides.length);
  };

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, 5500);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <section className="relative isolate overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={slides[active].image}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.03 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="absolute inset-0 -z-20"
          aria-hidden="true"
        >
          <Image
            src={slides[active].image}
            alt={slides[active].alt}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
        </motion.div>
      </AnimatePresence>
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-slate-950/80 via-slate-900/65 to-blue-900/50" />
      <div className="mx-auto flex min-h-[74vh] w-full max-w-7xl items-center px-4 py-20 sm:px-6 lg:px-8">
        <motion.div
          key={slides[active].title}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.45 }}
          className="max-w-3xl"
        >
          <p className="mb-4 inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-1 text-sm text-white/90">
            {slides[active].badge}
          </p>
          <h1 className="text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
            {slides[active].title}
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-100/95">
            {slides[active].subtitle}
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

          <div className="mt-8 flex items-center gap-3">
            <button
              type="button"
              onClick={previousSlide}
              aria-label="Previous slide"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/40 bg-white/10 text-white transition hover:bg-white hover:text-slate-900"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              type="button"
              onClick={nextSlide}
              aria-label="Next slide"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/40 bg-white/10 text-white transition hover:bg-white hover:text-slate-900"
            >
              <ChevronRight size={20} />
            </button>
            <div className="ml-2 flex items-center gap-2" role="tablist" aria-label="Hero slides">
              {slides.map((slide, index) => (
                <button
                  key={slide.title}
                  type="button"
                  role="tab"
                  aria-label={`Show slide ${index + 1}`}
                  aria-selected={active === index}
                  onClick={() => setActive(index)}
                  className={`h-2.5 rounded-full transition ${active === index ? "w-8 bg-orange-500" : "w-2.5 bg-white/70"}`}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
