"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import type { Program } from "@/lib/data";

type ProgramCardProps = {
  program: Program;
};

export default function ProgramCard({ program }: ProgramCardProps) {
  return (
    <motion.article
      whileHover={{ y: -6, scale: 1.01 }}
      transition={{ duration: 0.2 }}
      className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
    >
      <div className="relative h-48">
        <Image src={program.image} alt={program.title} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
      </div>
      <div className="space-y-3 p-5">
        <h3 className="text-xl font-semibold text-slate-900">{program.title}</h3>
        <p className="text-sm leading-6 text-slate-600">{program.description}</p>
        <Link href={program.href} className="inline-flex text-sm font-semibold text-blue-700 hover:text-blue-800">
          Learn More
        </Link>
      </div>
    </motion.article>
  );
}
