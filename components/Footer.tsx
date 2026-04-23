import Link from "next/link";
import { Globe, Mail, MapPin, MessageCircle, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-slate-200 bg-slate-950 text-slate-200">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div>
          <h3 className="text-lg font-semibold text-white">Second Light Foundation</h3>
          <p className="mt-4 text-sm leading-6 text-slate-300">
            We work with communities across India to create lasting change through education,
            health, and livelihood support.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-slate-100">Quick Links</h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <Link href="/about" className="hover:text-white">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/programs" className="hover:text-white">
                Programs
              </Link>
            </li>
            <li>
              <Link href="/donate" className="hover:text-white">
                Donate
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-white">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-slate-100">Contact</h4>
          <ul className="mt-4 space-y-3 text-sm text-slate-300">
            <li className="flex items-start gap-2">
              <MapPin size={16} className="mt-0.5" />
              <span>12 Community Lane, New Delhi, India</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone size={16} />
              <span>+91 80 4123 4567</span>
            </li>
            <li className="flex items-center gap-2">
              <Mail size={16} />
              <span>hello@secondlightfoundation.org</span>
            </li>
          </ul>
          <div className="mt-4 flex items-center gap-3">
            <a href="#" aria-label="Website" className="rounded-full bg-slate-800 p-2 hover:bg-slate-700">
              <Globe size={16} />
            </a>
            <a href="#" aria-label="Updates" className="rounded-full bg-slate-800 p-2 hover:bg-slate-700">
              <MessageCircle size={16} />
            </a>
            <a href="#" aria-label="Community" className="rounded-full bg-slate-800 p-2 hover:bg-slate-700">
              <Globe size={16} />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-slate-100">Newsletter</h4>
          <p className="mt-4 text-sm text-slate-300">
            Get monthly impact updates and ways to support urgent causes.
          </p>
          <form className="mt-4 flex flex-col gap-3" action="#" method="post">
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              required
              placeholder="Email address"
              className="rounded-full border border-slate-700 bg-slate-900 px-4 py-2 text-sm text-slate-100 placeholder:text-slate-500 focus:border-orange-400 focus:outline-none"
            />
            <button
              type="submit"
              className="rounded-full bg-orange-500 px-4 py-2 text-sm font-semibold text-white hover:bg-orange-600"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <div className="border-t border-slate-800 px-4 py-4 text-center text-xs text-slate-400">
        Copyright {new Date().getFullYear()} Second Light Foundation. All rights reserved.
      </div>
    </footer>
  );
}
