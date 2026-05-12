export type Program = {
  title: string;
  description: string;
  image: string;
  href: string;
};

export type ImpactStat = {
  label: string;
  value: number;
  suffix: string;
  icon: "heart" | "map" | "book";
};

export type Story = {
  name: string;
  location: string;
  image: string;
  snippet: string;
  href: string;
};

export type Testimonial = {
  quote: string;
  author: string;
  role: string;
};

export const programs: Program[] = [
  {
    title: "Education",
    description:
      "Learning centers and scholarships helping children stay in school and dream bigger.",
    image:
      "https://images.unsplash.com/photo-1524069290683-0457abfe42c3?auto=format&fit=crop&w=1200&q=80",
    href: "/programs#education",
  },
  {
    title: "Community Health",
    description:
      "Mobile clinics and health camps delivering early care to rural families.",
    image:
      "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1200&q=80",
    href: "/programs#health",
  },
  {
    title: "Women Empowerment",
    description:
      "Skill training and self-help groups enabling women to build independent livelihoods.",
    image:
      "https://images.unsplash.com/photo-1617450365226-9bf28c04e130?auto=format&fit=crop&w=1200&q=80",
    href: "/programs#women",
  },
];

export const impactStats: ImpactStat[] = [
  { label: "Lives Impacted", value: 1000, suffix: "", icon: "heart" },
  { label: "Villages Reached", value: 50, suffix: "", icon: "map" },
  { label: "Children Educated", value: 100, suffix: "", icon: "book" },
];

export const stories: Story[] = [
  {
    name: "Asha",
    location: "Bihar",
    image:
      "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=1200&q=80",
    snippet:
      "Asha was the first girl in her village to complete grade 10 after joining our after-school center.",
    href: "/about#stories",
  },
  {
    name: "Ravi",
    location: "Maharashtra",
    image:
      "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1200&q=80",
    snippet:
      "With regular nutrition and health checkups, Ravi recovered and returned to class with confidence.",
    href: "/about#stories",
  },
  {
    name: "Meena",
    location: "Rajasthan",
    image:
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1200&q=80",
    snippet:
      "Meena launched a tailoring unit with our livelihood support and now mentors young women nearby.",
    href: "/about#stories",
  },
];

export const testimonials: Testimonial[] = [
  {
    quote:
      "I support this NGO because every report is transparent and every rupee is connected to a real outcome.",
    author: "Neha Kapoor",
    role: "Monthly Donor",
  },
  {
    quote:
      "Volunteering here changed me. The team is deeply committed and works with genuine dignity.",
    author: "Aditya Menon",
    role: "Volunteer",
  },
  {
    quote:
      "Our CSR partnership has delivered measurable impact and strong community ownership.",
    author: "Rajiv Bansal",
    role: "CSR Lead",
  },
];

export const partners = [
  "Tata Trusts",
  "Infosys Foundation",
  "Azim Premji Philanthropic Initiatives",
  "SEWA Collective",
  "Local Panchayat Networks",
  "Community Health Alliance",
];

export const helpOptions = [
  {
    title: "Donate",
    description: "Fund education kits, medicine, and nutrition for families that need support now.",
    href: "/donate",
  },
  {
    title: "Volunteer",
    description: "Offer your time online or on-ground through mentorship, events, and campaigns.",
    href: "/contact",
  },
  {
    title: "Partner",
    description: "Collaborate through CSR, grants, and strategic support to scale sustainable impact.",
    href: "/contact",
  },
];
