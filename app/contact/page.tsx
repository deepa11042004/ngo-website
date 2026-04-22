import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | HopeSpring Foundation",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-14 sm:px-6 lg:px-8">
      <section className="text-center">
        <p className="text-sm font-semibold uppercase tracking-wide text-blue-700">Contact</p>
        <h1 className="mt-3 text-4xl font-bold text-slate-900">Join hands with us</h1>
        <p className="mt-4 text-base leading-7 text-slate-600">
          Reach out for volunteering, partnerships, sponsorships, or media inquiries.
        </p>
      </section>

      <section className="mt-10 grid gap-8 lg:grid-cols-2">
        <form className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <div className="grid gap-4">
            <label className="grid gap-1 text-sm font-medium text-slate-700" htmlFor="name">
              Name
              <input
                id="name"
                type="text"
                required
                className="rounded-xl border border-slate-300 px-4 py-2.5 text-sm focus:border-blue-600 focus:outline-none"
              />
            </label>
            <label className="grid gap-1 text-sm font-medium text-slate-700" htmlFor="email">
              Email
              <input
                id="email"
                type="email"
                required
                className="rounded-xl border border-slate-300 px-4 py-2.5 text-sm focus:border-blue-600 focus:outline-none"
              />
            </label>
            <label className="grid gap-1 text-sm font-medium text-slate-700" htmlFor="message">
              Message
              <textarea
                id="message"
                required
                rows={5}
                className="rounded-xl border border-slate-300 px-4 py-2.5 text-sm focus:border-blue-600 focus:outline-none"
              />
            </label>
            <button
              type="submit"
              className="mt-2 rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-700"
            >
              Send Message
            </button>
          </div>
        </form>

        <aside className="rounded-3xl bg-slate-900 p-8 text-slate-100">
          <h2 className="text-2xl font-bold">Contact Details</h2>
          <ul className="mt-5 space-y-3 text-sm text-slate-200">
            <li>Email: hello@hopespring.org</li>
            <li>Phone: +91 80 4123 4567</li>
            <li>Address: 12 Community Lane, Bengaluru, India</li>
            <li>Office Hours: Mon-Fri, 9:30 AM - 6:00 PM</li>
          </ul>
        </aside>
      </section>
    </div>
  );
}
