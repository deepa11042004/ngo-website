export default function Partners({ items }: { items: string[] }) {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white px-6 py-12 sm:px-10">
      <h2 className="text-center text-3xl font-bold text-slate-900 sm:text-4xl">Our Partners</h2>
      <p className="mt-3 text-center text-sm text-slate-600">
        Trusted institutions and grassroots networks helping us scale impact responsibly.
      </p>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((partner) => (
          <div
            key={partner}
            className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-5 text-center text-sm font-semibold text-slate-500 grayscale transition hover:bg-white hover:text-slate-800 hover:grayscale-0"
          >
            {partner}
          </div>
        ))}
      </div>
    </section>
  );
}
