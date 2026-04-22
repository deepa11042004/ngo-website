import type { Metadata } from "next";
import ProgramCard from "@/components/ProgramCard";
import { programs } from "@/lib/data";

export const metadata: Metadata = {
  title: "Programs | HopeSpring Foundation",
};

export default function ProgramsPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
      <section>
        <p className="text-sm font-semibold uppercase tracking-wide text-orange-600">Programs</p>
        <h1 className="mt-3 text-4xl font-bold text-slate-900">Focused interventions, measurable outcomes</h1>
        <p className="mt-4 max-w-3xl text-base leading-8 text-slate-600">
          Our programs are designed around local needs and delivered with strong monitoring to ensure
          resources create visible, lasting impact.
        </p>
      </section>

      <section className="mt-10 grid gap-6 md:grid-cols-3">
        {programs.map((program) => (
          <ProgramCard key={program.title} program={program} />
        ))}
      </section>

      <section className="mt-12 grid gap-6 rounded-3xl bg-white p-8 shadow-sm md:grid-cols-3">
        <article id="education">
          <h2 className="text-xl font-semibold text-slate-900">Education Pathways</h2>
          <p className="mt-3 text-sm leading-6 text-slate-600">
            Learning centers, school retention, digital literacy labs, and mentoring for adolescents.
          </p>
        </article>
        <article id="health">
          <h2 className="text-xl font-semibold text-slate-900">Health Access</h2>
          <p className="mt-3 text-sm leading-6 text-slate-600">
            Preventive screenings, maternal care support, and community health awareness drives.
          </p>
        </article>
        <article id="women">
          <h2 className="text-xl font-semibold text-slate-900">Women Livelihoods</h2>
          <p className="mt-3 text-sm leading-6 text-slate-600">
            Skill development, entrepreneurship mentoring, and financial inclusion initiatives.
          </p>
        </article>
      </section>
    </div>
  );
}
