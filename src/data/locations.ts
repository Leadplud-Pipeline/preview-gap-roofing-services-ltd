export interface LocationData {
  slug: string;
  name: string;
  heroDesc: string;
  whyChoose: string[];
  nearbyLocations: string[];
  recentWork: string;
  faqs: { q: string; a: string }[];
  metaTitle: string;
  metaDesc: string;
}

export const locations: LocationData[] = [
  {
    slug: "manchester",
    name: "Manchester",
    heroDesc: "Manchester is our home base. GAP Roofing Services Ltd provides trusted roofers services to homes and businesses across Manchester and the surrounding areas.",
    whyChoose: [
      "Manchester is our home base, so we are always nearby for fast response.",
      "We have completed hundreds of jobs across Manchester and know the area well.",
      "Our team lives and works locally, so we care about our reputation here.",
      "Free, no-obligation quotes for all Manchester customers."
    ],
    nearbyLocations: [],
    recentWork: "We have recently completed a number of projects across Manchester, delivering high-quality results for both residential and commercial customers.",
    faqs: [
      { q: "Do you cover all areas of Manchester?", a: "Yes. We cover the whole of Manchester and surrounding areas." },
      { q: "How quickly can you start work in Manchester?", a: "We are locally based, so we can usually arrange a visit within a few days." },
      { q: "Do you offer free quotes in Manchester?", a: "Yes. All our quotes are free, with no obligation." }
    ],
    metaTitle: "Roofers in Manchester | GAP Roofing Services Ltd",
    metaDesc: "Looking for trusted roofers in Manchester? GAP Roofing Services Ltd offers free quotes, quality workmanship, and fully insured services."
  }
];

export function getLocationBySlug(slug: string): LocationData | undefined {
  return locations.find(l => l.slug === slug);
}
