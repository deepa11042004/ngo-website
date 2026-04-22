import Link from "next/link";

export default function CTASection() {
  return (
    <section className="relative overflow-hidden rounded-3xl bg-orange-500 px-6 py-12 text-white sm:px-10">
      <div className="absolute -right-8 -top-8 h-44 w-44 rounded-full bg-orange-300/30" aria-hidden="true" />
      <div className="absolute -bottom-12 left-0 h-48 w-48 rounded-full bg-yellow-300/25" aria-hidden="true" />
      <div className="relative mx-auto max-w-4xl text-center">
        <h2 className="text-3xl font-bold sm:text-4xl">Your support can transform a life today.</h2>
        <p className="mt-4 text-base text-orange-50 sm:text-lg">
          Every contribution provides education, health care, and dignity to families building a better future.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/donate"
            className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-orange-600 transition hover:bg-orange-100"
          >
            Donate Now
          </Link>
          <Link
            href="/donate"
            className="rounded-full border border-white px-6 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-orange-600"
          >
            Sponsor a Child
          </Link>
        </div>
      </div>
    </section>
  );
}
