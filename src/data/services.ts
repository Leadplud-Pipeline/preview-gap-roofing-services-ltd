import type { Icon } from "@phosphor-icons/react";
import { ArrowsClockwise, Drop, House, HouseLine, MagnifyingGlass, Shield } from "@phosphor-icons/react";

export interface ServiceData {
  slug: string;
  name: string;
  shortDesc: string;
  heroDesc: string;
  icon: Icon;
  included: string[];
  whyChoose: string[];
  faqs: { q: string; a: string }[];
  relatedSlugs: string[];
  metaTitle: string;
  metaDesc: string;
}

export const services: ServiceData[] = [
  {
    slug: "roof-repairs",
    name: "Roof Repairs",
    shortDesc: "We fix leaks, damaged tiles, and structural issues quickly and effectively. Our repairs are built to last and come with full peace of mind.",
    heroDesc: "We fix leaks, damaged tiles, and structural issues quickly and effectively. Our repairs are built to last and come with full peace of mind. GAP Roofing Services Ltd provides professional roof repairs services across Manchester.",
    icon: HouseLine,
    included: [
      "Free initial consultation and assessment",
      "Fully qualified and experienced tradespeople",
      "Quality materials from trusted suppliers",
      "Full clean-up on completion",
      "Workmanship guarantee on all work",
      "Fully insured for your peace of mind"
    ],
    whyChoose: [
      "Experienced local team with an excellent reputation.",
      "We use only high-quality materials for lasting results.",
      "Transparent pricing with no hidden costs.",
      "Fully insured and guaranteed work."
    ],
    faqs: [
      { q: "How much does roof repairs cost?", a: "Every job is different. We offer free, no-obligation quotes so you know exactly what to expect before any work begins." },
      { q: "How long does the work usually take?", a: "Timescales depend on the scope of the job. We will give you a clear timeline during your free consultation." },
      { q: "Are you fully insured?", a: "Yes. We carry full public liability insurance and all our work is guaranteed." }
    ],
    relatedSlugs: [],
    metaTitle: "Roof Repairs in Manchester | GAP Roofing Services Ltd",
    metaDesc: "Professional roof repairs in Manchester and Manchester. GAP Roofing Services Ltd offers free quotes, quality workmanship, and fully insured services."
  },
  {
    slug: "roof-replacement",
    name: "Roof Replacement",
    shortDesc: "Complete roof replacements using quality materials and proven techniques. We handle everything from planning to cleanup, ensuring minimal disruption to your daily routine.",
    heroDesc: "Complete roof replacements using quality materials and proven techniques. We handle everything from planning to cleanup, ensuring minimal disruption to your daily routine. GAP Roofing Services Ltd provides professional roof replacement services across Manchester.",
    icon: ArrowsClockwise,
    included: [
      "Free initial consultation and assessment",
      "Fully qualified and experienced tradespeople",
      "Quality materials from trusted suppliers",
      "Full clean-up on completion",
      "Workmanship guarantee on all work",
      "Fully insured for your peace of mind"
    ],
    whyChoose: [
      "Experienced local team with an excellent reputation.",
      "We use only high-quality materials for lasting results.",
      "Transparent pricing with no hidden costs.",
      "Fully insured and guaranteed work."
    ],
    faqs: [
      { q: "How much does roof replacement cost?", a: "Every job is different. We offer free, no-obligation quotes so you know exactly what to expect before any work begins." },
      { q: "How long does the work usually take?", a: "Timescales depend on the scope of the job. We will give you a clear timeline during your free consultation." },
      { q: "Are you fully insured?", a: "Yes. We carry full public liability insurance and all our work is guaranteed." }
    ],
    relatedSlugs: [],
    metaTitle: "Roof Replacement in Manchester | GAP Roofing Services Ltd",
    metaDesc: "Professional roof replacement in Manchester and Manchester. GAP Roofing Services Ltd offers free quotes, quality workmanship, and fully insured services."
  },
  {
    slug: "guttering-services",
    name: "Guttering Services",
    shortDesc: "Professional gutter installation, repair, and cleaning to protect your property from water damage. We ensure proper drainage and long-lasting performance.",
    heroDesc: "Professional gutter installation, repair, and cleaning to protect your property from water damage. We ensure proper drainage and long-lasting performance. GAP Roofing Services Ltd provides professional guttering services services across Manchester.",
    icon: Drop,
    included: [
      "Free initial consultation and assessment",
      "Fully qualified and experienced tradespeople",
      "Quality materials from trusted suppliers",
      "Full clean-up on completion",
      "Workmanship guarantee on all work",
      "Fully insured for your peace of mind"
    ],
    whyChoose: [
      "Experienced local team with an excellent reputation.",
      "We use only high-quality materials for lasting results.",
      "Transparent pricing with no hidden costs.",
      "Fully insured and guaranteed work."
    ],
    faqs: [
      { q: "How much does guttering services cost?", a: "Every job is different. We offer free, no-obligation quotes so you know exactly what to expect before any work begins." },
      { q: "How long does the work usually take?", a: "Timescales depend on the scope of the job. We will give you a clear timeline during your free consultation." },
      { q: "Are you fully insured?", a: "Yes. We carry full public liability insurance and all our work is guaranteed." }
    ],
    relatedSlugs: [],
    metaTitle: "Guttering Services in Manchester | GAP Roofing Services Ltd",
    metaDesc: "Professional guttering services in Manchester and Manchester. GAP Roofing Services Ltd offers free quotes, quality workmanship, and fully insured services."
  },
  {
    slug: "roof-maintenance",
    name: "Roof Maintenance",
    shortDesc: "Regular inspections and preventative maintenance to extend your roof\'s lifespan. We identify potential problems early, saving you money on costly repairs.",
    heroDesc: "Regular inspections and preventative maintenance to extend your roof\'s lifespan. We identify potential problems early, saving you money on costly repairs. GAP Roofing Services Ltd provides professional roof maintenance services across Manchester.",
    icon: Shield,
    included: [
      "Free initial consultation and assessment",
      "Fully qualified and experienced tradespeople",
      "Quality materials from trusted suppliers",
      "Full clean-up on completion",
      "Workmanship guarantee on all work",
      "Fully insured for your peace of mind"
    ],
    whyChoose: [
      "Experienced local team with an excellent reputation.",
      "We use only high-quality materials for lasting results.",
      "Transparent pricing with no hidden costs.",
      "Fully insured and guaranteed work."
    ],
    faqs: [
      { q: "How much does roof maintenance cost?", a: "Every job is different. We offer free, no-obligation quotes so you know exactly what to expect before any work begins." },
      { q: "How long does the work usually take?", a: "Timescales depend on the scope of the job. We will give you a clear timeline during your free consultation." },
      { q: "Are you fully insured?", a: "Yes. We carry full public liability insurance and all our work is guaranteed." }
    ],
    relatedSlugs: [],
    metaTitle: "Roof Maintenance in Manchester | GAP Roofing Services Ltd",
    metaDesc: "Professional roof maintenance in Manchester and Manchester. GAP Roofing Services Ltd offers free quotes, quality workmanship, and fully insured services."
  },
  {
    slug: "flat-roofing",
    name: "Flat Roofing",
    shortDesc: "Specialist flat roof installation and repair using modern materials and techniques. Perfect for commercial properties and residential extensions.",
    heroDesc: "Specialist flat roof installation and repair using modern materials and techniques. Perfect for commercial properties and residential extensions. GAP Roofing Services Ltd provides professional flat roofing services across Manchester.",
    icon: House,
    included: [
      "Free initial consultation and assessment",
      "Fully qualified and experienced tradespeople",
      "Quality materials from trusted suppliers",
      "Full clean-up on completion",
      "Workmanship guarantee on all work",
      "Fully insured for your peace of mind"
    ],
    whyChoose: [
      "Experienced local team with an excellent reputation.",
      "We use only high-quality materials for lasting results.",
      "Transparent pricing with no hidden costs.",
      "Fully insured and guaranteed work."
    ],
    faqs: [
      { q: "How much does flat roofing cost?", a: "Every job is different. We offer free, no-obligation quotes so you know exactly what to expect before any work begins." },
      { q: "How long does the work usually take?", a: "Timescales depend on the scope of the job. We will give you a clear timeline during your free consultation." },
      { q: "Are you fully insured?", a: "Yes. We carry full public liability insurance and all our work is guaranteed." }
    ],
    relatedSlugs: [],
    metaTitle: "Flat Roofing in Manchester | GAP Roofing Services Ltd",
    metaDesc: "Professional flat roofing in Manchester and Manchester. GAP Roofing Services Ltd offers free quotes, quality workmanship, and fully insured services."
  },
  {
    slug: "roof-inspections",
    name: "Roof Inspections",
    shortDesc: "Thorough roof surveys to assess condition and identify any issues. We provide detailed reports with clear recommendations and honest pricing.",
    heroDesc: "Thorough roof surveys to assess condition and identify any issues. We provide detailed reports with clear recommendations and honest pricing. GAP Roofing Services Ltd provides professional roof inspections services across Manchester.",
    icon: MagnifyingGlass,
    included: [
      "Free initial consultation and assessment",
      "Fully qualified and experienced tradespeople",
      "Quality materials from trusted suppliers",
      "Full clean-up on completion",
      "Workmanship guarantee on all work",
      "Fully insured for your peace of mind"
    ],
    whyChoose: [
      "Experienced local team with an excellent reputation.",
      "We use only high-quality materials for lasting results.",
      "Transparent pricing with no hidden costs.",
      "Fully insured and guaranteed work."
    ],
    faqs: [
      { q: "How much does roof inspections cost?", a: "Every job is different. We offer free, no-obligation quotes so you know exactly what to expect before any work begins." },
      { q: "How long does the work usually take?", a: "Timescales depend on the scope of the job. We will give you a clear timeline during your free consultation." },
      { q: "Are you fully insured?", a: "Yes. We carry full public liability insurance and all our work is guaranteed." }
    ],
    relatedSlugs: [],
    metaTitle: "Roof Inspections in Manchester | GAP Roofing Services Ltd",
    metaDesc: "Professional roof inspections in Manchester and Manchester. GAP Roofing Services Ltd offers free quotes, quality workmanship, and fully insured services."
  }
];

export function getServiceBySlug(slug: string): ServiceData | undefined {
  return services.find(s => s.slug === slug);
}
