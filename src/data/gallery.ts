export interface GalleryImage {
  src: string;
  alt: string;
  title: string;
  width: number;
  height: number;
  loading: "eager" | "lazy";
  fetchPriority?: "high";
}

export const galleryImages: GalleryImage[] = [
  {
    src: 'https://gaproofing.co.uk/ext/clients/high-res/_xl/142010/DJI_0656.png',
    alt: 'Work completed by GAP Roofing Services Ltd in Manchester',
    title: 'Roofers Project 1',
    width: 800,
    height: 600,
    loading: "eager",
  },
  {
    src: 'https://gaproofing.co.uk/ext/img/news_assets/_lg/142962/testing_2022-07-29-094253_osbb.webp',
    alt: 'Work completed by GAP Roofing Services Ltd in Manchester',
    title: 'Roofers Project 2',
    width: 800,
    height: 600,
    loading: "lazy",
  },
  {
    src: 'https://gaproofing.co.uk/ext/img/news_assets/_lg/143053/DJI_0653.webp',
    alt: 'Work completed by GAP Roofing Services Ltd in Manchester',
    title: 'Roofers Project 3',
    width: 800,
    height: 600,
    loading: "lazy",
  },
  {
    src: 'https://gaproofing.co.uk/ext/img/entry_assets/_lg/1715/cut-edge-1.webp',
    alt: 'Work completed by GAP Roofing Services Ltd in Manchester',
    title: 'Roofers Project 4',
    width: 800,
    height: 600,
    loading: "lazy",
  },
  {
    src: 'https://gaproofing.co.uk/ext/img/news_assets/_lg/145145/DJI_0652_2022-08-11-094906_sbbm.webp',
    alt: 'Work completed by GAP Roofing Services Ltd in Manchester',
    title: 'Roofers Project 5',
    width: 800,
    height: 600,
    loading: "lazy",
  },
  {
    src: 'https://gaproofing.co.uk/ext/img/news_assets/_lg/46859/IMG-20200629-WA0019.webp',
    alt: 'Work completed by GAP Roofing Services Ltd in Manchester',
    title: 'Roofers Project 6',
    width: 800,
    height: 600,
    loading: "lazy",
  },
  {
    src: 'https://gaproofing.co.uk/ext/img/news_assets/_lg/146103/DJI_0413.webp',
    alt: 'Work completed by GAP Roofing Services Ltd in Manchester',
    title: 'Roofers Project 7',
    width: 800,
    height: 600,
    loading: "lazy",
  },
  {
    src: 'https://gaproofing.co.uk/ext/img/news_assets/_lg/180622/National-Library-Wales-EPDM.webp',
    alt: 'Work completed by GAP Roofing Services Ltd in Manchester',
    title: 'Roofers Project 8',
    width: 800,
    height: 600,
    loading: "lazy",
  }
];

export const homepageGalleryImages = galleryImages.slice(0, 4);
