/*
 * Site copy. Taken from Petri's CV and portfolio (Figma), first person.
 *
 * CONFIDENTIALITY: this repo is public. Confidential clients appear only as
 * anonymised cards (role, scope, problem type, non-identifying outcomes).
 * Never add their names, product names, screenshots or identifying details here.
 * The confidential cards must not mention the public mobile-app case, and that
 * case must not mention them.
 */

export const contact = {
  email: 'jomppanen.petri@gmail.com',
  linkedin: 'https://www.linkedin.com/in/petri-jomppanen',
  linkedinLabel: 'linkedin.com/in/petri-jomppanen',
}

export const hero = {
  name: 'Petri Jomppanen',
  role: 'Lead/Senior Product Designer: complex, data-heavy products and design systems.',
  // Statement headline: the CV summary line.
  title: 'I turn messy, data-heavy processes into tools people trust.',
  intro:
    'I’m a Helsinki-based product designer with over 10 years of experience, the last few at Codemate leading design on client products in healthcare, retail and industrial services. From field research to shipped UI and the design systems behind it, working closely with developers.',
}

export type Stat = { value: string; label: string }
export type Figure = { src: string; width: number; height: number; alt: string; caption?: string }

export type CaseStudy = {
  kind: 'case'
  slug: string
  client: string
  title: string
  summary: string
  cardMeta: string
  image: Figure
  meta: { label: string; value: string }[]
  stats: Stat[]
  problem: string[]
  approach: string[]
  decisionsTitle?: string
  decisions?: { title: string; text: string }[]
  extra?: { heading: string; text: string[]; list?: string[] }[]
  figures: Figure[]
  outcome: string[]
  learned: string[]
}

export type ConfidentialCard = {
  kind: 'confidential'
  id: string
  title: string
  role: string
  years: string
  scope: string
  problem: string
  outcomes: string[]
  stats?: Stat[]
}

export type WorkItem = CaseStudy | ConfidentialCard

const one4all: CaseStudy = {
  kind: 'case',
  slug: 'one4all',
  client: 'One4all',
  title: 'One system, many brands',
  summary:
    'A multi-brand design system for One4all’s Flutter app, built in parallel with the product.',
  cardMeta: 'One4all · Design system designer · 2026',
  image: {
    src: '/img/work/one4all-brands.png',
    width: 666,
    height: 637,
    alt: 'The same app screen in two brands, Brand A and Brand B, built from one component set.',
    caption: 'Same app, same components: the brand switches through tokens.',
  },
  meta: [
    { label: 'Client', value: 'One4all Oy' },
    { label: 'Year', value: '2026' },
    { label: 'My role', value: 'Design system designer' },
    { label: 'Platform', value: 'Flutter' },
    {
      label: 'Team',
      value: 'Me, one co-designer, Flutter developer, Project Lead and client stakeholders',
    },
  ],
  stats: [
    { value: '1', label: 'set of components for every brand' },
    { value: '10+', label: 'brands the system will serve' },
    { value: '2', label: 'brands in the first rollout' },
  ],
  problem: [
    'One4all’s app for resident communication and housing services serves several brands. The old app had usability problems, and designing and maintaining a separate version for each brand would have multiplied the work.',
  ],
  approach: [
    'I researched the old app and interviewed stakeholders to find where it broke down, then mapped wireframes for the redesign. I built a multi-brand design system for Flutter: one set of components, with brand differences handled in a separate token layer.',
    'We worked in parallel: I built and refined the system while my co-designer used it to design the real app screens. Every gap he found came back to me the same week, so the system was shaped by real screens, not guesses.',
    'I also led stakeholder sessions showing why one shared system costs less to build and maintain than separate ones, and why the new UX patterns were better than the old ones.',
  ],
  decisionsTitle: 'Key decisions',
  decisions: [
    {
      title: 'Brand lives in tokens, not components.',
      text: 'Components are shared: colours, type and other brand choices switch through tokens.',
    },
    {
      title: 'System and screens at the same time.',
      text: 'Faster than building the system first, and it kept the system practical.',
    },
  ],
  extra: [
    {
      heading: 'Token layers',
      text: [],
      list: [
        'Brand: raw palettes and fonts for each brand.',
        'Alias: brand-neutral names. The brand mode decides which palette they point to.',
        'Mapped: what the UI uses: surfaces, text, borders and actions.',
        'Component: components only use mapped tokens, so they never change per brand.',
        'Responsive: spacing, sizes and type scale per screen size. Feeds into components.',
      ],
    },
  ],
  figures: [
    {
      src: '/img/work/one4all-token-layers.png',
      width: 666,
      height: 637,
      alt: 'Diagram of four token layers: brand, alias, mapped and component, plus responsive tokens.',
      caption: 'Token layers: components only read mapped tokens.',
    },
    {
      src: '/img/work/one4all-buttons.png',
      width: 666,
      height: 246,
      alt: 'Filled, outline and text buttons in both brands, in light and dark mode.',
      caption: 'One button component in both brands, light and dark.',
    },
  ],
  outcome: [
    'The system, guidelines and UI were handed over to the Flutter developers and the client’s own design team, who now own it. The first rollout covered two brands, and the system is built to take on more as they’re added.',
  ],
  learned: [
    'Building the system and the screens at the same time showed me which components really mattered. Real screens surfaced gaps within days, and anything that wasn’t needed yet could wait.',
    'Stakeholders were convinced when I showed what a new brand would cost: with one system, it’s a new set of tokens, not a new app. I switched the same screens live between brands and between light and dark mode, and the point made itself.',
  ],
}

const confidentialSystem: ConfidentialCard = {
  kind: 'confidential',
  id: 'confidential-system',
  title: 'One design system across four products and three tech stacks',
  role: 'Design system lead',
  years: '2024–2026',
  scope:
    'A cross-platform design system shared across four products on three tech stacks, and brought gradually into older web code.',
  problem:
    'Four products being built or renewed on two technologies. Without a shared foundation they would have drifted apart and every team would have rebuilt the same buttons, forms and colours.',
  outcomes: [
    '4 products on one design system',
    '3 tech stacks on the same tokens',
    'WCAG AA accessibility built into the tokens',
    'More than 75 components',
  ],
}

const trademarkNow: CaseStudy = {
  kind: 'case',
  slug: 'trademarknow-corsearch',
  client: 'TrademarkNow → Corsearch',
  title: 'Making AI results usable',
  summary:
    'Search results, risk scores and design systems for AI-based trademark search at TrademarkNow and Corsearch.',
  cardMeta: 'TrademarkNow → Corsearch · Brand & product designer · 2018–2022',
  image: {
    src: '/img/work/tmn-hero.png',
    width: 666,
    height: 637,
    alt: 'Two overlapping TrademarkNow product screens: a risk summary with a score gauge and a company dashboard with opposition charts.',
  },
  meta: [
    { label: 'Companies', value: 'TrademarkNow, Corsearch' },
    { label: 'Years', value: '2018–2022' },
    {
      label: 'My role',
      value:
        'TrademarkNow: brand and product designer, owned the brand and design system. Corsearch: designer on Platform Delta, acting lead designer from January 2022.',
    },
    { label: 'Product', value: 'AI trademark search, risk assessment and monitoring' },
    { label: 'Team', value: 'Me, co-designer, 20+ dev team' },
  ],
  stats: [
    { value: 'Acquired', label: 'by its largest competitor, brand and product design among the reasons' },
    { value: '1000s', label: 'of people a month on two search platforms' },
    { value: '1 → many', label: 'design system grew into a multi-brand system' },
  ],
  problem: [
    'Trademark lawyers make high-stakes decisions from huge amounts of search data. TrademarkNow used machine learning to find conflicting trademarks and score the risk, but a score is only useful if a lawyer understands it and trusts it enough to act on it.',
    'The market was full of old-fashioned tools, and the product had to feel modern without losing professional users.',
  ],
  approach: [
    'At TrademarkNow I created the brand identity and built the product’s design system. With the lead designer I worked on how search results and probability scores were shown: what to show first, how to show certainty, and how lawyers could dig into why a result scored the way it did. I designed these data-heavy layouts together with the developers and the data team.',
    'After Corsearch acquired TrademarkNow, the same product continued as Platform Delta. I carried the design system over with a brand update to match Corsearch, and in January 2022 I became the acting lead designer.',
  ],
  figures: [
    {
      src: '/img/work/tmn-2021.png',
      width: 666,
      height: 303,
      alt: 'The TrademarkNow product and its design system in 2021.',
      caption: 'TrademarkNow, 2021.',
    },
    {
      src: '/img/work/tmn-2022.png',
      width: 666,
      height: 305,
      alt: 'The same product after the acquisition, updated to the Corsearch brand in 2022.',
      caption: 'After the acquisition: the same system with the Corsearch brand, 2022.',
    },
    {
      src: '/img/work/delta-results.png',
      width: 666,
      height: 305,
      alt: 'Platform Delta search results reviewed as cards.',
      caption: 'Platform Delta: search results reviewed as cards.',
    },
  ],
  outcome: [
    'Users called TrademarkNow fresh and intuitive and compared it to Apple for ease of use.',
    'TrademarkNow was acquired by its largest competitor. The brand and product design were among the main reasons.',
    'At Corsearch, the design system became the base for two search platforms used by thousands of people every month, and later grew into a multi-brand system used across Corsearch’s products and website.',
  ],
  learned: [
    'The biggest lesson was that trust comes from transparency, not accuracy. A lawyer won’t act on a number they can’t explain to a client, so the design had to show the reasoning: the closest matches, how certain the score was, and a quick way to dig into the details. The score supports the decision, the lawyer still makes it.',
  ],
}

const confidentialPaper: ConfidentialCard = {
  kind: 'confidential',
  id: 'confidential-paper',
  title: 'Replacing a paper sales process with a single staff app',
  role: 'Lead designer: research, service design, UX/UI, design system',
  years: '2024–2026',
  scope:
    'One web app for the whole in-store sales process, integrated with the client’s ERP and POS systems and sending orders straight to the supplier.',
  problem:
    'Every sale ran on paper, written by hand into a folder that moved between staff and customers. A full sale took about 45 minutes, notes went missing and handwriting led to wrong orders. The goal was to cut the time in half.',
  outcomes: [
    'Better than the goal of halving the time per sale',
    'Orders go straight to the supplier: fewer wrong orders, no lost notes',
  ],
  stats: [
    { value: '45 → 20', label: 'minutes per sale' },
    { value: '1', label: 'app for the whole sales process' },
    { value: '0', label: 'paper folders holding sensitive customer data' },
  ],
}

const confidentialClinical: ConfidentialCard = {
  kind: 'confidential',
  id: 'confidential-clinical',
  title: 'One standard for clinical software',
  role: 'Design system lead',
  years: '2023',
  scope:
    'A design system for a hospital-software company’s applications, so components and patterns work the same way everywhere.',
  problem:
    'The applications looked and worked differently from each other, because there was no shared design standard.',
  outcomes: [
    '5 applications in the first rollout',
    'Staff found the applications more usable and intuitive after the component updates',
  ],
}

const omaSilma: CaseStudy = {
  kind: 'case',
  slug: 'omasilma',
  client: 'OmaSilmä',
  title: 'A new eye-care app',
  summary:
    'OmaSilmä brings medical records and purchase history together in one app for booking appointments, managing prescriptions and personal eye care.',
  cardMeta: 'OmaSilmä · Lead designer · 2024–2026',
  image: {
    src: '/img/work/omasilma-story-map.png',
    width: 1200,
    height: 553,
    alt: 'Story map of what went into the app’s first release and what came later.',
  },
  meta: [
    { label: 'Platform', value: 'Mobile app (Flutter)' },
    { label: 'Years', value: '2024–2026' },
    { label: 'My role', value: 'Lead designer: research, service design, UX/UI' },
    { label: 'Team', value: '1 designer, 1 developer, Project Lead, client PO, 3+ vendors' },
  ],
  stats: [
    { value: '1', label: 'app for records, booking and prescriptions' },
    { value: 'Thousands', label: 'of downloads in the first months' },
    { value: 'AA', label: 'WCAG accessibility' },
  ],
  problem: [
    'Customers’ eye-care information was split between clinical records and retail history, and booking, prescriptions and follow-up happened in different places. The client wanted one app for all of it, under strict healthcare data rules, and as an MVP that could ship fast.',
  ],
  approach: [
    'I co-led the research. I interviewed customers about what the app should do for them and ran discovery sessions with the client. From there I designed the service end to end and tested the booking and prescription flows with interactive prototypes before build.',
  ],
  extra: [
    {
      heading: 'Working within the rules',
      text: [
        'Medical records come with strict data rules, and the data came from several backend vendors. I kept stakeholders and vendors aligned so the rules shaped the design early instead of blocking it late.',
      ],
    },
    {
      heading: 'Designed for older users',
      text: [
        'Most customers are older and not digital natives. That meant plain language, large text, and complex choices broken into small steps, and filling in the pre-visit questions at home, in private.',
      ],
    },
  ],
  figures: [
    {
      src: '/img/work/omasilma-login-flow.png',
      width: 666,
      height: 637,
      alt: 'Flow diagram of the app’s login: returning user, new phone, new customer and app locked, with strong authentication and PIN or biometrics.',
      caption: 'Login paths for every situation, all ending on the home screen.',
    },
  ],
  outcome: [
    'Medical records, booking and prescriptions in one app, designed with WCAG AA accessibility.',
    'Thousands of downloads in the first months, well past the target.',
  ],
  learned: [
    'I expected customers to want features. Mostly they wanted to stop repeating themselves. That’s why pre-visit questions moved into the app, answered once, at home, and kept for the next visit.',
  ],
}

const confidentialMaintenance: ConfidentialCard = {
  kind: 'confidential',
  id: 'confidential-maintenance',
  title: 'From paper checklists to one maintenance dashboard',
  role: 'Product designer',
  years: '2023',
  scope:
    'One dashboard for tasks, device service history and reports, with a form builder and NFC so technicians identify a device by tapping it. Delivered as an MVP on a tight budget and schedule.',
  problem: 'Technicians tracked HVAC maintenance on paper forms.',
  outcomes: ['Delivered as an MVP on a tight budget and schedule'],
  stats: [
    { value: '~50%', label: 'faster routine maintenance' },
    { value: '60%+', label: 'fewer data errors' },
  ],
}

/** Order: design systems and multi-brand work first. */
export const work: WorkItem[] = [
  one4all,
  confidentialSystem,
  trademarkNow,
  confidentialPaper,
  confidentialClinical,
  omaSilma,
  confidentialMaintenance,
]

export const caseStudies = work.filter((w): w is CaseStudy => w.kind === 'case')

export const experience = [
  {
    company: 'Codemate',
    title: 'Senior Designer (Lead Product Designer)',
    dates: 'Feb 2023 – Present',
    current: true,
    text: 'Design lead on client products: discovery, product direction, design systems and UI.',
  },
  {
    company: 'Corsearch',
    title: 'Product Designer, Acting Lead Designer from Jan 2022',
    dates: 'Oct 2021 – Dec 2022',
    text: 'Designer on Platform Delta, a data-intensive tool for trademark attorneys. Carried the TrademarkNow design system over with a brand update to match Corsearch.',
  },
  {
    company: 'TrademarkNow',
    title: 'Brand & Product Designer',
    dates: 'Aug 2018 – Oct 2021',
    text: 'Owned the brand identity and the product’s design system, among the main reasons for the acquisition.',
  },
  {
    company: 'University of Helsinki, HY+',
    title: 'Art Director',
    dates: 'Dec 2014 – Apr 2018',
  },
]

export const clients = {
  named: ['One4all', 'Corsearch', 'TrademarkNow', 'University of Helsinki (HY+)'],
  anonymised: [
    'A retail organisation',
    'A hospital-software company',
    'A field maintenance company',
  ],
}

export const expertise = [
  {
    group: 'Design systems',
    icon: 'stacks',
    text: 'Multi-brand design systems for Flutter and React, with WCAG 2.x accessibility built into the tokens.',
  },
  {
    group: 'Data-heavy products',
    icon: 'monitoring',
    text: 'Search and risk scoring, dashboards, human-in-the-loop workflows and ERP/POS/API integrations.',
  },
  {
    group: 'Product design',
    icon: 'travel_explore',
    text: 'Discovery, field research, service design, prototyping and end-to-end UX/UI.',
  },
  {
    group: 'AI in my workflow',
    icon: 'smart_toy',
    text: 'LLMs, MCP and custom skills for iteration, tokens, components, QA and accessibility audits.',
  },
]

export const about = {
  paragraphs: [
    'I’m a Helsinki-based product designer with over 10 years of experience, the last few at Codemate leading design on client products in healthcare, retail and industrial services. Before that I worked in legal tech at TrademarkNow and Corsearch, and started out as an art director at HY+.',
    'I like working where the problem is messy and the stakes are real. Sitting with the people who use the product, working closely with developers and architects, and making complicated things feel simple. My background in brand and art direction shows in the detail.',
  ],
  facts: [
    { label: 'Based in', value: 'Helsinki, Finland' },
    { label: 'Languages', value: 'Finnish, English, Swedish, Saami' },
    { label: 'Accessibility', value: 'IxDF certified, top 10%' },
  ],
}

export const howIWork = {
  title: 'How I work with AI',
  lead: 'I use AI every day across my design process: ideas, tokens, layouts, components, design QA and accessibility checks, through MCP and skills I’ve built for my own workflow.',
  paragraphs: [
    'AI makes me faster, but it’s a tool. I check everything it produces, and I make the final decisions. That’s also how I think AI should work in products: it should show its reasoning, make its certainty visible and leave the important decision to the person.',
    // [new, Petri] wording to confirm.
    'I see design thinking evolving more towards an agentic AI software development lifecycle.',
  ],
  steps: [
    { title: 'Scope', text: 'AI asks me scope questions. I make the calls.' },
    { title: 'Figma', text: 'It builds the component from design tokens, then stops for my review.' },
    { title: 'Code', text: 'After I approve, it writes the React and Flutter code.' },
    { title: 'Check', text: 'It tests the code in a browser against values read from Figma.' },
    { title: 'Review', text: 'I do the last review and iteration round before the final result.' },
  ],
  example: {
    title: 'One component, not two',
    text: 'The AI built a Snackbar with its own extra buttons for dark surfaces. I merged them back into the existing Tertiary button and caught a contrast failure on the close icon (1.91:1, needs 3:1).',
    results: [
      'One button component instead of two.',
      'A new icon token that makes dark surfaces accessible by default.',
    ],
  },
}

/** Petri will provide this. The section stays hidden while it is empty. */
export const offTheClock: { title: string; text: string }[] = []

export const education = [
  'Bachelor of Engineering (Media Technology), Metropolia University of Applied Sciences, 2014–2017',
  'Accessibility: How to Design for All, Interaction Design Foundation, top 10% of class, Dec 2025',
  'Tekoälyn reilut säännöt (Fair rules of AI), eOppiva, May 2025',
]
