"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

type DropdownItem = {
  label: string;
  href: string;
  description?: string;
};

type NavItem = {
  label: string;
  href?: string;
  submenu?: DropdownItem[];
};

const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "About Us",
    submenu: [
      { label: "Our Story", href: "/about", description: "Learn our mission and vision" },
      { label: "Our Team", href: "/about/our-team", description: "Meet our dedicated team" },
      { label: "Our Impact", href: "/about/our-impact", description: "See the change we create" },
      { label: "Vision & Mission", href: "/about/vision-mission", description: "Our goals and values" },
      { label: "Our Approach", href: "/about/our-approach", description: "How we work to create impact" },
    ],
  },
  {
    label: "Our Work",
    submenu: [
      { label: "Education", href: "/programs/education", description: "Empowering through learning" },
      { label: "Healthcare", href: "/programs/healthcare", description: "Access to quality health" },
      { label: "Women Empowerment", href: "/programs/women", description: "Building stronger communities" },
      { label: "Livelihood", href: "/programs/livelihood", description: "Skills and employment" },
      { label: "All Programs", href: "/programs", description: "Explore all our initiatives" },
    ],
  },
  {
    label: "Get Involved",
    submenu: [
      { label: "Donate", href: "/donate", description: "Support our mission" },
      { label: "Volunteer", href: "/get-involved/volunteer", description: "Give your time and skills" },
      { label: "Corporate Partnerships", href: "/get-involved/corporate", description: "Partner with us" },
      { label: "Careers", href: "/get-involved/careers", description: "Join our team" },
    ],
  },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50 border-b border-amber-100/40 bg-gradient-to-r from-white to-amber-50/30 backdrop-blur-sm shadow-sm">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2" aria-label="Second Light Foundation Home">
          <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-orange-500 to-red-600 text-sm font-bold text-white shadow-md">
            <span className="text-lg">🕯️</span>
          </div>
          <div className="hidden sm:block">
            <div className="text-lg font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
              Second Light
            </div>
            <div className="text-xs font-semibold text-amber-700">Foundation India</div>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main navigation">
          {navItems.map((item) =>
            item.submenu ? (
              <div key={item.label} className="relative group py-2">
                <button className="flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-slate-700 transition-all hover:bg-orange-50 hover:text-orange-600">
                  {item.label}
                  <ChevronDown size={16} className="transition-transform group-hover:rotate-180" />
                </button>
                <div className="absolute left-0 top-full hidden group-hover:block bg-white rounded-lg shadow-xl border border-amber-100/50 min-w-max py-2 mt-1">
                  {item.submenu.map((subitem) => (
                    <Link
                      key={subitem.label}
                      href={subitem.href}
                      className="block px-4 py-2.5 text-sm text-slate-700 hover:bg-orange-50 hover:text-orange-600 transition-colors"
                    >
                      <div className="font-medium">{subitem.label}</div>
                      {subitem.description && <div className="text-xs text-slate-500">{subitem.description}</div>}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={item.label}
                href={item.href || "/"}
                className="rounded-md px-3 py-2 text-sm font-medium text-slate-700 transition-all hover:bg-orange-50 hover:text-orange-600"
              >
                {item.label}
              </Link>
            )
          )}
          <Link
            href="/donate"
            className="ml-2 rounded-full bg-gradient-to-r from-orange-500 to-red-600 px-6 py-2 text-sm font-semibold text-white transition hover:shadow-lg hover:from-orange-600 hover:to-red-700"
          >
            Donate Now
          </Link>
        </nav>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((state) => !state)}
          className="rounded-md p-2 text-slate-700 hover:bg-orange-100 lg:hidden transition-colors"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-amber-100/40 bg-gradient-to-b from-white to-amber-50/50 px-4 py-4 lg:hidden">
          <nav className="flex flex-col gap-2" aria-label="Mobile navigation">
            {navItems.map((item) =>
              item.submenu ? (
                <div key={item.label}>
                  <button
                    onClick={() => setOpenDropdown(openDropdown === item.label ? null : item.label)}
                    className="w-full flex items-center justify-between rounded-md px-3 py-2.5 text-sm font-medium text-slate-700 hover:bg-orange-50 transition-colors"
                  >
                    {item.label}
                    <ChevronDown
                      size={16}
                      className={`transition-transform ${openDropdown === item.label ? "rotate-180" : ""}`}
                    />
                  </button>
                  {openDropdown === item.label && (
                    <div className="ml-2 border-l-2 border-orange-200 pl-2">
                      {item.submenu.map((subitem) => (
                        <Link
                          key={subitem.label}
                          href={subitem.href}
                          onClick={() => setOpen(false)}
                          className="block rounded-md px-3 py-2 text-sm text-slate-700 hover:bg-orange-50 hover:text-orange-600 transition-colors"
                        >
                          {subitem.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.label}
                  href={item.href || "/"}
                  onClick={() => setOpen(false)}
                  className="rounded-md px-3 py-2.5 text-sm font-medium text-slate-700 hover:bg-orange-50 transition-colors"
                >
                  {item.label}
                </Link>
              )
            )}
            <Link
              href="/donate"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-orange-500 to-red-600 px-5 py-2.5 text-sm font-semibold text-white hover:shadow-lg transition-all"
            >
              Donate Now
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
