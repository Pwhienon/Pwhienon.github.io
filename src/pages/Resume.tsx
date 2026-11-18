import { useEffect } from 'react'
import { Breadcrumbs, Button, Divider, Link } from '@mbds/react'
import { contact, education, experience, expertise, hero } from '../content'

/*
 * Anonymised resume. Confidential clients are described, never named, and are
 * listed separately from the public mobile-app work.
 */
const selectedWork = [
  {
    title: 'OmaSilmä mobile app',
    points: [
      'Zero-to-one MVP: designed the OmaSilmä mobile app (Flutter) for booking and prescriptions, validated with prototypes before build.',
      'Thousands of downloads in the first months, well past the target.',
    ],
  },
  {
    title: 'One4all, multi-brand design system',
    points: [
      'Built a multi-brand design system for Flutter while a co-designer applied it to app screens in parallel.',
      'Showed stakeholders how one shared system lowers build and maintenance cost.',
    ],
  },
  {
    title: 'Confidential client: paper sales process to one app',
    points: [
      'Based on in-store field research, moved the full sales process from paper into one web app (React), integrated with ERP and POS systems.',
      'Cut a full sale from 45 to 20 minutes, better than the client’s goal of halving it.',
    ],
  },
  {
    title: 'Confidential client: cross-platform design system',
    points: ['Built one design system for four products on three tech stacks, with WCAG AA accessibility built into the tokens.'],
  },
  {
    title: 'Confidential client: field maintenance platform',
    points: [
      'Replaced paper-based maintenance with one dashboard, a form builder and NFC device identification, delivered as an MVP on a tight budget.',
      'Routine maintenance ~50% faster and 60%+ fewer data errors.',
    ],
  },
  {
    title: 'Confidential client: hospital software',
    points: ['Led a design system for the client’s applications, five in the first rollout. Interviewed clinical staff and ran usability tests.'],
  },
]

const earlierPoints: Record<string, string[]> = {
  Corsearch: [
    'Designer on Platform Delta, a data-intensive tool for trademark attorneys; acting lead designer from Jan 2022.',
    'Carried the TrademarkNow design system over with a brand update to match Corsearch.',
    'The system became the base for two search platforms used by thousands of people every month, and later grew into a multi-brand system.',
  ],
  TrademarkNow: [
    'Owned the brand identity and the product’s design system, among the main reasons for the acquisition.',
    'Worked with the lead designer on the AI-powered trademark search product, including how probability scores and search results were shown so lawyers could make quick decisions.',
  ],
}

export function Resume() {
  useEffect(() => {
    document.title = 'Resume, Petri Jomppanen'
    return () => {
      document.title = 'Petri Jomppanen, Product Designer'
    }
  }, [])

  const [current, ...earlier] = experience

  return (
    <article className="container section">
      <div className="no-print">
        <Breadcrumbs backOnPhones items={[{ label: 'Home', href: '/' }, { label: 'Resume' }]} />
      </div>

      <header className="stack-md">
        <h1 className="display">Petri Jomppanen</h1>
        <p className="text-heading-h5">{hero.role}</p>
        <div className="row text-body-md">
          <Link href={`mailto:${contact.email}`}>{contact.email}</Link>
          <Link href={contact.linkedin} external>
            {contact.linkedinLabel}
          </Link>
          <span>Helsinki, Finland</span>
        </div>
        <div className="no-print">
          <Button variant="secondary" size="sm" leadingIcon="print" onClick={() => window.print()}>
            Print or save as PDF
          </Button>
        </div>
      </header>

      <section className="stack-md" aria-labelledby="r-summary">
        <h2 id="r-summary" className="text-heading-h4">
          Summary
        </h2>
        <p className="text-body-lg prose">
          Product designer with 10+ years in healthcare, retail, industrial services and legal tech. I turn messy,
          data-heavy processes into tools people trust, from field research to shipped UI and the design systems
          behind it, working closely with developers. I use AI every day as a tool: I check what it produces and make
          the final decisions.
        </p>
      </section>

      <section className="stack-md" aria-labelledby="r-skills">
        <h2 id="r-skills" className="text-heading-h4">
          Skills
        </h2>
        <ul className="stack-sm text-body-md prose">
          {expertise.map((g) => (
            <li key={g.group}>
              <span className="text-label-md">{g.group}: </span>
              {g.text}
            </li>
          ))}
        </ul>
      </section>

      <section className="section" aria-labelledby="r-experience">
        <h2 id="r-experience" className="text-heading-h4">
          Experience
        </h2>

        <div className="stack-md">
          <div className="stack-sm">
            <h3 className="text-heading-h5">
              {current.title}, {current.company}
            </h3>
            <p className="caption text-body-sm">{current.dates} · Helsinki, Finland</p>
            <p className="text-body-md">{current.text}</p>
          </div>
          <h4 className="text-label-lg">Selected client work</h4>
          {selectedWork.map((w) => (
            <div key={w.title} className="stack-sm">
              <h5 className="text-label-md">{w.title}</h5>
              <ul className="stack-sm text-body-md prose">
                {w.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {earlier.map((e) => (
          <div key={e.company} className="stack-sm">
            <Divider decorative />
            <h3 className="text-heading-h5">
              {e.title}, {e.company}
            </h3>
            <p className="caption text-body-sm">{e.dates} · Helsinki, Finland</p>
            {earlierPoints[e.company] && (
              <ul className="stack-sm text-body-md prose">
                {earlierPoints[e.company].map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </section>

      <section className="stack-md" aria-labelledby="r-education">
        <h2 id="r-education" className="text-heading-h4">
          Education & certificates
        </h2>
        <ul className="stack-sm text-body-md prose">
          {education.map((e) => (
            <li key={e}>{e}</li>
          ))}
        </ul>
      </section>

      <section className="stack-md" aria-labelledby="r-languages">
        <h2 id="r-languages" className="text-heading-h4">
          Languages
        </h2>
        <p className="text-body-md">Finnish (native) · English (native) · Swedish (basic) · Saami (beginner)</p>
      </section>
    </article>
  )
}
