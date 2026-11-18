import { useEffect, type ReactNode } from 'react'
import { Breadcrumbs, Card, Link } from '@mbds/react'
import { caseStudies, contact, type CaseStudy as Case, type Figure } from '../content'

/*
 * Case study template, following the benchmark's case pages:
 * client + title + summary, "At a glance" with meta, a numbered chapter index,
 * then numbered chapters, ending with the next case.
 */

function Fig({ figure }: { figure: Figure }) {
  return (
    <figure className="figure">
      <img src={figure.src} width={figure.width} height={figure.height} alt={figure.alt} loading="lazy" />
      {figure.caption && <figcaption className="text-body-caption">{figure.caption}</figcaption>}
    </figure>
  )
}

function Prose({ paragraphs }: { paragraphs: string[] }) {
  return (
    <div className="prose text-body-lg">
      {paragraphs.map((p) => (
        <p key={p}>{p}</p>
      ))}
    </div>
  )
}

type Chapter = { id: string; title: string; body: ReactNode }

function chaptersOf(item: Case): Chapter[] {
  const chapters: Chapter[] = [
    { id: 'problem', title: 'The problem', body: <Prose paragraphs={item.problem} /> },
    { id: 'work', title: 'What I did', body: <Prose paragraphs={item.approach} /> },
  ]
  if (item.decisions || item.extra) {
    chapters.push({
      id: 'decisions',
      title: item.decisions ? (item.decisionsTitle ?? 'Key decisions') : 'The details',
      body: (
        <div className="section">
          {item.decisions && (
            <ol className="decisions">
              {item.decisions.map((d) => (
                <li key={d.title}>
                  <div className="stack-sm">
                    <h3 className="text-heading-h6">{d.title}</h3>
                    <p className="text-body-lg">{d.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          )}
          {item.extra?.map((x) => (
            <div key={x.heading} className="stack-md">
              <h3 className="text-heading-h6">{x.heading}</h3>
              {x.text.length > 0 && <Prose paragraphs={x.text} />}
              {x.list && (
                <ul className="stack-sm text-body-lg prose">
                  {x.list.map((l) => (
                    <li key={l}>{l}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      ),
    })
  }
  chapters.push(
    {
      id: 'outcome',
      title: 'What changed',
      body: (
        <div className="section">
          {item.figures.map((f) => (
            <Fig key={f.src} figure={f} />
          ))}
          <Prose paragraphs={item.outcome} />
        </div>
      ),
    },
    { id: 'looking-back', title: 'Looking back', body: <Prose paragraphs={item.learned} /> },
  )
  return chapters
}

const num = (i: number) => String(i + 1).padStart(2, '0')

export function CaseStudyPage({ item }: { item: Case }) {
  useEffect(() => {
    document.title = `${item.client} ${item.title}, Petri Jomppanen`
    return () => {
      document.title = 'Petri Jomppanen, Product Designer'
    }
  }, [item.client, item.title])

  const index = caseStudies.findIndex((c) => c.slug === item.slug)
  const next = caseStudies[(index + 1) % caseStudies.length]
  const chapters = chaptersOf(item)

  return (
    <article className="container section case">
      <Breadcrumbs backOnPhones items={[{ label: 'Home', href: '/' }, { label: item.title }]} />

      <header className="stack-md">
        <p className="eyebrow text-label-md">{item.client}</p>
        <h1 className="display">{item.title}</h1>
        <p className="text-body-lg prose">{item.summary}</p>
      </header>

      <Fig figure={item.image} />

      <section className="section" aria-labelledby="glance">
        <h2 id="glance" className="text-heading-h5">
          At a glance
        </h2>
        <dl className="stats" aria-label="Outcomes">
          {item.stats.map((s) => (
            <div key={s.label}>
              <dt className="text-body-sm">{s.label}</dt>
              <dd className="text-heading-h4">{s.value}</dd>
            </div>
          ))}
        </dl>
        <dl className="meta">
          {item.meta.map((m) => (
            <div key={m.label}>
              <dt className="text-label-sm">{m.label}</dt>
              <dd className="text-body-md">{m.value}</dd>
            </div>
          ))}
        </dl>
      </section>

      <nav aria-label="Chapters">
        <ol className="chapter-index">
          {chapters.map((c, i) => (
            <li key={c.id}>
              <Link href={`#${c.id}`}>
                <span className="caption">{num(i)}</span> {c.title}
              </Link>
            </li>
          ))}
        </ol>
      </nav>

      {chapters.map((c, i) => (
        <section key={c.id} id={c.id} className="section chapter" aria-labelledby={`${c.id}-title`}>
          <p className="eyebrow text-label-md" aria-hidden="true">
            {num(i)}
          </p>
          <h2 id={`${c.id}-title`} className="text-heading-h4">
            {c.title}
          </h2>
          {c.body}
        </section>
      ))}

      <nav className="section" aria-label="More work">
        <Card
          className="work-card"
          variant="elevated"
          href={`/work/${next.slug}`}
          badge={<span className="eyebrow text-label-sm">Next: {next.client}</span>}
          title={next.title}
          titleAs="h2"
        >
          <p className="text-body-md">{next.summary}</p>
        </Card>
        <div className="row">
          <Link href="/#work" leadingIcon="arrow_back">
            All work
          </Link>
          <Link href="/resume" trailingIcon="arrow_forward">
            Resume
          </Link>
          <Link href={`mailto:${contact.email}`} leadingIcon="mail">
            Contact
          </Link>
        </div>
      </nav>
    </article>
  )
}
