export type ProjectLink = {
  label: string
  href: string
}

export type FeaturedProject = {
  id: string
  title: string
  role: string
  duties: string
  description: string
  image: {
    src: string
    width: number
    height: number
    alt: string
  }
  links: ProjectLink[]
}

export const featuredProjects: FeaturedProject[] = [
  {
    id: 'arctic-power-berries',
    title: 'Arctic Power Berries',
    role: 'Product Design Lead',
    duties: 'UI/UX design',
    description:
      'Arctic Power Berries makes 100% pure dried berry powders with no added nonsense or sugar.',
    image: {
      src: '/img/webp/arctic-power-berries.webp',
      width: 582,
      height: 327,
      alt: 'Laptop and smartphone mockups showing the Arctic Power Berries online shop on a pink background.',
    },
    links: [
      {
        label: 'Website',
        href: 'https://www.arcticpowerberries.com/',
      },
    ],
  },
  {
    id: 'friendship-decadence',
    title: 'Friendship & Decadence',
    role: 'Product Design Lead',
    duties: 'UI/UX design',
    description:
      'A record label, radio show and podcast series for adventurous contemporary electronic music, established in Helsinki in 2015.',
    image: {
      src: '/img/webp/FND.webp',
      width: 582,
      height: 442,
      alt: 'Laptop, phone and tablet mockups presenting the dark blue Friendship & Decadence identity.',
    },
    links: [{ label: 'Website', href: 'https://fnd.fi/' }],
  },
  {
    id: 'trademarknow',
    title: 'TrademarkNow',
    role: 'Brand Designer · UI/UX Designer',
    duties: 'Branding · Product design · Web design',
    description:
      'Technology and services that streamline trademark clearance and reduce the need to sift through unnecessary data.',
    image: {
      src: '/img/webp/TrademarkNow.webp',
      width: 582,
      height: 390,
      alt: 'Laptop and phone mockups showing the responsive TrademarkNow website design.',
    },
    links: [
      {
        label: 'Case study',
        href: 'https://www.behance.net/gallery/131818151/TardemarkNow-Visual-Identity-UIUX-Design',
      },
    ],
  },
  {
    id: 'corsearch',
    title: 'Corsearch',
    role: 'Brand Designer · UI/UX Designer · Motion Designer',
    duties: 'Branding · Product design · Web design · Motion design',
    description:
      'Intelligent trademark and brand-protection solutions combining advanced technology with decades of industry expertise.',
    image: {
      src: '/img/webp/Corsearch.webp',
      width: 582,
      height: 327,
      alt: 'Corsearch wordmark surrounded by a flowing stream of colorful spheres on a green background.',
    },
    links: [
      { label: 'Website', href: 'https://corsearch.com/' },
      {
        label: 'App',
        href: 'https://www.behance.net/gallery/134335045/Corsearch-UIUX-design',
      },
      {
        label: 'Design system',
        href: 'https://drive.google.com/drive/u/1/folders/1R0Rff9A3eHGLFyIZnbRzsH2OCIAGgPLR',
      },
      {
        label: 'Motion guideline',
        href: 'https://www.behance.net/gallery/134339093/Corsearch-Motion-Video-Guideline',
      },
    ],
  },
]

export const otherProjects: Array<{
  title: string
  discipline: string
  href: string
}> = [
  {
    title: 'Huuva Kitchen OS',
    discipline: 'Product, web and mobile app design',
    href: 'https://www.figma.com/proto/cPc1DhVhrVCaWY8rZvz8zf/Huuva?page-id=0%3A1&node-id=18%3A941&viewport=105%2C569%2C0.51&scaling=min-zoom&starting-point-node-id=18%3A941&show-proto-sidebar=1',
  },
  {
    title: 'University of Helsinki',
    discipline: 'Art direction',
    href: 'https://www.behance.net/gallery/63806163/University-of-Helsinki-HY-Visual-Identity-UIUX',
  },
  {
    title: 'Corsearch Has That',
    discipline: 'Motion design · Marketing campaign',
    href: 'https://www.behance.net/gallery/143021681/Corsearch-Has-That-Motion-Graphic-Marketing-Campaign',
  },
  {
    title: 'Various Posters',
    discipline: 'Digital art',
    href: 'https://www.behance.net/gallery/132818161/Posters',
  },
  {
    title: 'Canal Outdoor',
    discipline: 'Post production · Motion design',
    href: 'https://www.youtube.com/@CanalOutdoor',
  },
  {
    title: 'Wavestation',
    discipline: 'Product and web design · Ongoing project',
    href: 'https://www.figma.com/proto/KX1kMngmFzRREiDWw0ggok/WaveStation-components?page-id=29574%3A6327&node-id=109498%3A5382&viewport=85%2C4946%2C0.63&scaling=scale-down&starting-point-node-id=109498%3A5382',
  },
]
