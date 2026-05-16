import Link from "next/link";
import { Globe, Mail, MapPin, MessageCircle, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-amber-200/30 bg-gradient-to-b from-slate-900 to-slate-950 text-slate-200">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-5 lg:px-8">
        <div>
          <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-orange-500 to-red-600 text-sm font-bold text-white shadow-md">
            <span>🕯️</span>
          </div>
          <h3 className="mt-2 text-lg font-bold text-white">Second Light Foundation</h3>
          <p className="mt-3 text-sm leading-6 text-slate-300">
            Empowering communities across India through education, healthcare, women empowerment, and livelihood support since 2012.
          </p>
          <div className="mt-4 flex items-center gap-3">
            <a href="https://facebook.com" aria-label="Facebook" className="rounded-full bg-orange-600/20 p-2 hover:bg-orange-600/40 transition">
              <Globe size={16} className="text-orange-400" />
            </a>
            <a href="https://twitter.com" aria-label="Twitter" className="rounded-full bg-orange-600/20 p-2 hover:bg-orange-600/40 transition">
              <MessageCircle size={16} className="text-orange-400" />
            </a>
            <a href="https://instagram.com" aria-label="Instagram" className="rounded-full bg-orange-600/20 p-2 hover:bg-orange-600/40 transition">
              <Globe size={16} className="text-orange-400" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-bold uppercase tracking-wide text-orange-400">About</h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <Link href="/about" className="text-slate-300 hover:text-orange-400 transition">
                Our Story
              </Link>
            </li>
            <li>
              <Link href="/about/our-impact" className="text-slate-300 hover:text-orange-400 transition">
                Our Impact
              </Link>
            </li>
            <li>
              <Link href="/about/vision-mission" className="text-slate-300 hover:text-orange-400 transition">
                Vision & Mission
              </Link>
            </li>
            <li>
              <Link href="/about/our-team" className="text-slate-300 hover:text-orange-400 transition">
                Our Team
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-bold uppercase tracking-wide text-orange-400">Our Work</h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <Link href="/programs/education" className="text-slate-300 hover:text-orange-400 transition">
                Education
              </Link>
            </li>
            <li>
              <Link href="/programs/healthcare" className="text-slate-300 hover:text-orange-400 transition">
                Healthcare
              </Link>
            </li>
            <li>
              <Link href="/programs/women" className="text-slate-300 hover:text-orange-400 transition">
                Women Empowerment
              </Link>
            </li>
            <li>
              <Link href="/programs" className="text-slate-300 hover:text-orange-400 transition">
                All Programs
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-bold uppercase tracking-wide text-orange-400">Get Involved</h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <Link href="/donate" className="text-slate-300 hover:text-orange-400 transition">
                Donate
              </Link>
            </li>
            <li>
              <Link href="/get-involved/volunteer" className="text-slate-300 hover:text-orange-400 transition">
                Volunteer
              </Link>
            </li>
            <li>
              <Link href="/get-involved/corporate" className="text-slate-300 hover:text-orange-400 transition">
                Corporate Partners
              </Link>
            </li>
            <li>
              <Link href="/get-involved/careers" className="text-slate-300 hover:text-orange-400 transition">
                Careers
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-bold uppercase tracking-wide text-orange-400">Contact</h4>
          <ul className="mt-4 space-y-3 text-sm text-slate-300">
            <li className="flex items-start gap-2">
              <MapPin size={16} className="mt-0.5 text-orange-400 flex-shrink-0" />
              <span>C-32, Block C, Sector 14, Kaushambi, Ghaziabad, Uttar Pradesh 201010</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone size={16} className="text-orange-400 flex-shrink-0" />
              <span>+91 8373909377</span>
            </li>
            <li className="flex items-center gap-2">
              <Mail size={16} className="text-orange-400 flex-shrink-0" />
              <span>hello@secondlightfoundation.org</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-amber-200/10 px-4 py-6 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-slate-400">
            © 2024 Second Light Foundation. All rights reserved. Registered as a Trust under the Indian Trust Act.
          </p>
          <div className="flex gap-6 text-sm text-slate-400">
            <Link href="/privacy" className="hover:text-orange-400 transition">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-orange-400 transition">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
