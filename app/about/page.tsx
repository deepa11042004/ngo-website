import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About | Second Light Foundation",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
      <section className="grid items-center gap-8 lg:grid-cols-2">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-blue-700">About Us</p>
          <h1 className="mt-3 text-4xl font-bold text-slate-900">Building hope through people-first change</h1>
          <p className="mt-5 text-base leading-8 text-slate-600">
            Since 2012, Second Light Foundation has partnered with communities, local leaders, and
            institutions to improve access to education, preventive healthcare, and dignified
            livelihoods. Our work is inspired by the values of justice, compassion, and public
            accountability exemplified by Hazrat Umar (RA).
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            <div className="rounded-xl bg-white p-4 shadow-sm">
              <h2 className="text-sm font-semibold text-slate-900">Transparency</h2>
              <p className="mt-2 text-sm text-slate-600">Open reporting and audited statements.</p>
            </div>
            <div className="rounded-xl bg-white p-4 shadow-sm">
              <h2 className="text-sm font-semibold text-slate-900">Empowerment</h2>
              <p className="mt-2 text-sm text-slate-600">Community-led planning and execution.</p>
            </div>
            <div className="rounded-xl bg-white p-4 shadow-sm">
              <h2 className="text-sm font-semibold text-slate-900">Sustainability</h2>
              <p className="mt-2 text-sm text-slate-600">Solutions that last beyond projects.</p>
            </div>
          </div>
        </div>
        <div className="relative h-[420px] overflow-hidden rounded-3xl">
          <Image
            src="https://images.unsplash.com/photo-1542816417-0983670d88e2?auto=format&fit=crop&w=1400&q=80"
            alt="Community workers with children"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
      </section>

      <section id="stories" className="mt-16 rounded-3xl bg-white p-8 shadow-sm">
        <h2 className="text-3xl font-bold text-slate-900">Our Story</h2>
        <p className="mt-4 text-base leading-8 text-slate-600">
          We began with one after-school center and a small team of volunteers. Today, our work spans
          multiple states and thousands of families. What has not changed is our belief that every
          person deserves the chance to live with dignity, safety, and opportunity.
        </p>
      </section>
    </div>
  );
}
