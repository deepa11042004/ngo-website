"use client";

import { ShieldCheck, BadgeCheck } from "lucide-react";
import { useState } from "react";

const amounts = [500, 1000, 5000];

export default function DonatePage() {
  const [frequency, setFrequency] = useState<"one-time" | "monthly">("one-time");
  const [amount, setAmount] = useState<number>(1000);

  return (
    <div className="mx-auto max-w-4xl px-4 py-14 sm:px-6 lg:px-8">
      <section className="text-center">
        <p className="text-sm font-semibold uppercase tracking-wide text-green-700">Donate</p>
        <h1 className="mt-3 text-4xl font-bold text-slate-900">Support a life-changing journey today</h1>
        <p className="mt-4 text-base leading-7 text-slate-600">
          Your contribution fuels education, healthcare, and dignity for communities that need it most.
        </p>
      </section>

      <section className="mt-10 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <div className="grid gap-3 sm:grid-cols-2">
          <button
            type="button"
            onClick={() => setFrequency("one-time")}
            className={`rounded-full px-4 py-2.5 text-sm font-semibold transition ${
              frequency === "one-time"
                ? "bg-blue-600 text-white"
                : "border border-slate-300 text-slate-700 hover:bg-slate-50"
            }`}
          >
            One-time Donation
          </button>
          <button
            type="button"
            onClick={() => setFrequency("monthly")}
            className={`rounded-full px-4 py-2.5 text-sm font-semibold transition ${
              frequency === "monthly"
                ? "bg-blue-600 text-white"
                : "border border-slate-300 text-slate-700 hover:bg-slate-50"
            }`}
          >
            Monthly Donation
          </button>
        </div>

        <div className="mt-6 grid gap-3 sm:grid-cols-3">
          {amounts.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setAmount(item)}
              className={`rounded-xl px-4 py-3 text-sm font-semibold transition ${
                amount === item
                  ? "bg-orange-500 text-white"
                  : "border border-slate-300 text-slate-700 hover:bg-slate-50"
              }`}
            >
              Rs. {item}
            </button>
          ))}
        </div>

        <form className="mt-8 grid gap-4">
          <label className="grid gap-1 text-sm font-medium text-slate-700" htmlFor="donor-name">
            Full Name
            <input
              id="donor-name"
              type="text"
              required
              className="rounded-xl border border-slate-300 px-4 py-2.5 text-sm focus:border-blue-600 focus:outline-none"
            />
          </label>
          <label className="grid gap-1 text-sm font-medium text-slate-700" htmlFor="donor-email">
            Email
            <input
              id="donor-email"
              type="email"
              required
              className="rounded-xl border border-slate-300 px-4 py-2.5 text-sm focus:border-blue-600 focus:outline-none"
            />
          </label>
          <button
            type="submit"
            className="mt-2 rounded-full bg-orange-500 px-6 py-3 text-sm font-semibold text-white hover:bg-orange-600"
          >
            Continue to Secure Payment (Placeholder)
          </button>
        </form>

        <div className="mt-8 grid gap-4 rounded-2xl bg-slate-50 p-4 text-sm text-slate-600 sm:grid-cols-2">
          <div className="flex items-start gap-2">
            <ShieldCheck className="mt-0.5 h-5 w-5 text-green-700" aria-hidden="true" />
            <p>SSL encrypted checkout and secure payment gateway integration ready.</p>
          </div>
          <div className="flex items-start gap-2">
            <BadgeCheck className="mt-0.5 h-5 w-5 text-green-700" aria-hidden="true" />
            <p>80G eligible receipts and transparent utilization reports for all donations.</p>
          </div>
        </div>
      </section>

      <p className="mt-6 text-center text-sm text-slate-500">
        Selected: {frequency === "one-time" ? "One-time" : "Monthly"} contribution of Rs. {amount}
      </p>
    </div>
  );
}
