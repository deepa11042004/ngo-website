import Link from "next/link";
import { HandCoins, HandHeart, Handshake } from "lucide-react";
import CTASection from "@/components/CTASection";
import Hero from "@/components/Hero";
import ImpactStats from "@/components/ImpactStats";
import Partners from "@/components/Partners";
import ProgramCard from "@/components/ProgramCard";
import StoryCard from "@/components/StoryCard";
import Testimonials from "@/components/Testimonials";
import { helpOptions, impactStats, partners, programs, stories, testimonials } from "@/lib/data";

export default function Home() {
  const helpIcons = [HandCoins, HandHeart, Handshake];

  return (
    <div className="bg-gradient-to-b from-white via-amber-50/20 to-white">
      <Hero />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 rounded-3xl bg-white p-8 shadow-md border border-amber-100/50 lg:grid-cols-2 hover:shadow-lg transition-shadow">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-orange-700">Who We Are</p>
            <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">Compassion with <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">Accountability</span></h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              Second Light Foundation works shoulder-to-shoulder with underserved communities across India to create long-term change. Our values are rooted in transparency, empowerment, and sustainability—so families can move from survival to dignity.
            </p>
            <Link
              href="/about"
              className="mt-6 inline-flex rounded-full bg-gradient-to-r from-orange-500 to-red-600 px-6 py-2.5 text-sm font-semibold text-white hover:shadow-lg transition"
            >
              Learn Our Story
            </Link>
          </div>
          <div className="rounded-2xl bg-gradient-to-br from-orange-100 via-white to-red-50 p-8 border border-orange-200/50">
            <ul className="space-y-4 text-sm text-slate-700">
              <li className="rounded-xl bg-white/90 p-4 shadow-sm border border-orange-100/50">
                ✓ 92% of donations directly support program delivery and community initiatives.
              </li>
              <li className="rounded-xl bg-white/90 p-4 shadow-sm border border-orange-100/50">
                ✓ Audited financial reports published annually for complete transparency.
              </li>
              <li className="rounded-xl bg-white/90 p-4 shadow-sm border border-orange-100/50">
                ✓ Local teams in 27 states ensuring culturally grounded, sustainable interventions.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-orange-700">Our Work</p>
            <h2 className="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl">Where your support creates <span className="text-orange-600">change</span></h2>
          </div>
          <Link href="/programs" className="hidden text-sm font-semibold text-orange-700 hover:text-orange-800 sm:block">
            View all programs →
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {programs.map((program) => (
            <ProgramCard key={program.title} program={program} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <ImpactStats stats={impactStats} />
      </section>

      <section id="stories" className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <div className="mb-8">
          <p className="text-sm font-semibold uppercase tracking-wide text-orange-700">Stories of Change</p>
          <h2 className="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl">Real journeys, real <span className="text-orange-600">outcomes</span></h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {stories.map((story) => (
            <StoryCard key={story.name} story={story} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <CTASection />
      </section>

      <section id="help" className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <div className="mb-8 text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-orange-700">How To Help</p>
          <h2 className="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl">Choose your way to make a <span className="text-orange-600">difference</span></h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {helpOptions.map((option, index) => {
            const Icon = helpIcons[index];
            return (
              <article key={option.title} className="rounded-2xl border border-amber-100/50 bg-white p-6 shadow-md hover:shadow-lg hover:border-orange-200 transition-all">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-orange-100">
                  <Icon className="h-6 w-6 text-orange-600" aria-hidden="true" />
                </div>
                <h3 className="mt-4 text-xl font-semibold text-slate-900">{option.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{option.description}</p>
                <Link
                  href={option.href}
                  className="mt-5 inline-flex rounded-full bg-gradient-to-r from-orange-500 to-red-600 px-4 py-2 text-sm font-semibold text-white hover:shadow-lg transition"
                >
                  Take Action →
                </Link>
              </article>
            );
          })}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <Testimonials items={testimonials} />
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-4 pt-2 sm:px-6 lg:px-8">
        <Partners items={partners} />
      </section>
    </div>
  );
}
