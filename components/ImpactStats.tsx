"use client";

import { animate, motion, useInView, useMotionValue, useTransform } from "framer-motion";
import { BookOpen, HeartHandshake, MapPinned } from "lucide-react";
import { useEffect, useRef } from "react";
import type { ImpactStat } from "@/lib/data";

type ImpactStatsProps = {
  stats: ImpactStat[];
};

function iconFor(name: ImpactStat["icon"]) {
  if (name === "heart") {
    return HeartHandshake;
  }
  if (name === "map") {
    return MapPinned;
  }
  return BookOpen;
}

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const count = useMotionValue(0);
  const rounded = useTransform(() => Math.round(count.get()));

  useEffect(() => {
    if (!inView) {
      return;
    }
    const controls = animate(count, value, { duration: 1.4, ease: "easeOut" });
    return () => controls.stop();
  }, [count, inView, value]);

  return (
    <span ref={ref}>
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
}

export default function ImpactStats({ stats }: ImpactStatsProps) {
  return (
    <section id="impact" className="rounded-3xl bg-slate-900 px-6 py-12 sm:px-10">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-3xl font-bold text-white sm:text-4xl">Our Impact</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {stats.map((stat) => {
            const Icon = iconFor(stat.icon);
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.45 }}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center"
              >
                <Icon className="mx-auto h-8 w-8 text-orange-400" aria-hidden="true" />
                <p className="mt-4 text-4xl font-bold text-white">
                  <Counter value={stat.value} suffix={stat.suffix} />
                </p>
                <p className="mt-2 text-sm text-slate-200">{stat.label}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
