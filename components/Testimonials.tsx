"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Testimonial } from "@/lib/data";

type TestimonialsProps = {
  items: Testimonial[];
};

export default function Testimonials({ items }: TestimonialsProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setIndex((prev) => (prev + 1) % items.length);
    }, 5000);

    return () => window.clearInterval(id);
  }, [items.length]);

  const active = items[index];

  return (
    <section className="rounded-3xl border border-slate-200 bg-white px-6 py-12 sm:px-10">
      <h2 className="text-center text-3xl font-bold text-slate-900 sm:text-4xl">Voices of Trust</h2>
      <div className="mx-auto mt-8 max-w-3xl text-center">
        <AnimatePresence mode="wait">
          <motion.blockquote
            key={active.author}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35 }}
            className="space-y-4"
          >
            <p className="text-lg leading-8 text-slate-700">"{active.quote}"</p>
            <footer>
              <p className="text-base font-semibold text-slate-900">{active.author}</p>
              <p className="text-sm text-slate-500">{active.role}</p>
            </footer>
          </motion.blockquote>
        </AnimatePresence>
      </div>
      <div className="mt-7 flex justify-center gap-2" role="tablist" aria-label="Testimonials">
        {items.map((item, i) => (
          <button
            key={item.author}
            type="button"
            role="tab"
            aria-selected={index === i}
            aria-label={`View testimonial by ${item.author}`}
            onClick={() => setIndex(i)}
            className={`h-2.5 w-8 rounded-full transition ${index === i ? "bg-orange-500" : "bg-slate-300"}`}
          />
        ))}
      </div>
    </section>
  );
}
