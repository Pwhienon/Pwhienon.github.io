import { Card, Icon, IconList, IconListItem, Link, Timeline, TimelineItem } from '@mbds/react'
import { WorkCard } from '../components/WorkCard'
import { about, clients, contact, experience, expertise, hero, howIWork, offTheClock, work } from '../content'

/*
 * Section order and patterns follow the benchmark (drewhansen.design):
 * hero statement, selected work, experience, clients, expertise, about,
 * how I work, off the clock, closing call to action. Look and copy are our own.
 */

function SectionTitle({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <h2 id={id} className="section-title">
      {children}
    </h2>
  )
}

export function Home() {
  return (
    <>
      <section className="container hero" aria-labelledby="hero-title">
        <p className="eyebrow text-label-md">
          {hero.name} · {hero.role}
        </p>
        <h1 id="hero-title" className="display">
          {hero.title}
        </h1>
        <p className="text-body-lg prose">{hero.intro}</p>
      </section>

      <section id="work" className="container section" aria-labelledby="work-title">
        <SectionTitle id="work-title">Selected work</SectionTitle>
        <div className="work-grid">
          {work.map((item, i) => (
            <WorkCard key={item.kind === 'case' ? item.slug : item.id} item={item} wide={i % 3 === 0} />
          ))}
        </div>
      </section>

      <section id="experience" className="container section" aria-labelledby="experience-title">
        <SectionTitle id="experience-title">Experience</SectionTitle>
        <Timeline marker="dot" className="prose">
          {experience.map((e) => (
            <TimelineItem
              key={e.company}
              state="done"
              title={
                <span className="stack-sm">
                  <span className="caption text-label-sm">{e.dates}</span>
                  <span className="text-heading-h5">{e.company}</span>
                </span>
              }
              supporting={
                <span className="stack-sm">
                  <span className="text-label-md">{e.title}</span>
                  {e.text && <span>{e.text}</span>}
                </span>
              }
            />
          ))}
        </Timeline>
      </section>

      <section className="container" aria-label="Companies I’ve designed for">
        <p className="clients text-heading-h6">
          <span className="mbds-visually-hidden">Companies I’ve designed for: </span>
          {[...clients.named, ...clients.anonymised.map((c) => `${c} (confidential)`)].map((c, i, all) => (
            <span key={c}>
              {c}
              {i < all.length - 1 && <span aria-hidden="true"> · </span>}
            </span>
          ))}
        </p>
      </section>

      <section id="expertise" className="container section" aria-labelledby="expertise-title">
        <SectionTitle id="expertise-title">Expertise</SectionTitle>
        <ul className="expertise">
          {expertise.map((g) => (
            <li key={g.group} className="stack-sm">
              <Icon name={g.icon} size="md" className="eyebrow" />
              <h3 className="text-heading-h6">{g.group}</h3>
              <p className="text-body-md">{g.text}</p>
            </li>
          ))}
        </ul>
      </section>

      <section id="about" className="container section about" aria-labelledby="about-title">
        <div className="stack-md">
          <SectionTitle id="about-title">About me</SectionTitle>
          <div className="prose text-body-lg">
            {about.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          <dl className="meta">
            {about.facts.map((f) => (
              <div key={f.label}>
                <dt className="text-label-sm">{f.label}</dt>
                <dd className="text-body-md">{f.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section id="how-i-work" className="container section" aria-labelledby="how-title">
        <div className="stack-md">
          <SectionTitle id="how-title">
            How I work, <span className="caption">with AI</span>
          </SectionTitle>
          <p className="text-body-lg prose">{howIWork.lead}</p>
        </div>
        <ol className="steps">
          {howIWork.steps.map((s) => (
            <li key={s.title} className="stack-sm">
              <h3 className="text-heading-h6">{s.title}</h3>
              <p className="text-body-md">{s.text}</p>
            </li>
          ))}
        </ol>

        <h3 className="section-subtitle">
          How I work, <span className="caption">in practice</span>
        </h3>
        <div className="two-col">
          <div className="prose text-body-lg">
            {howIWork.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          <Card className="work-card" variant="outlined" title={howIWork.example.title} titleAs="h4" subtitle="Example">
            <div className="stack-md">
              <p className="text-body-md">{howIWork.example.text}</p>
              <IconList size="sm" tone="success" aria-label="Result">
                {howIWork.example.results.map((r) => (
                  <IconListItem key={r} icon="check_circle">
                    {r}
                  </IconListItem>
                ))}
              </IconList>
            </div>
          </Card>
        </div>
      </section>

      {offTheClock.length > 0 && (
        <section id="off-the-clock" className="container section" aria-labelledby="otc-title">
          <SectionTitle id="otc-title">Off the clock</SectionTitle>
          <ul className="expertise">
            {offTheClock.map((o) => (
              <li key={o.title} className="stack-sm">
                <h3 className="text-heading-h6">{o.title}</h3>
                <p className="text-body-md">{o.text}</p>
              </li>
            ))}
          </ul>
        </section>
      )}

      <section id="contact" className="container section closing" aria-labelledby="contact-title">
        <h2 id="contact-title" className="display">
          Get in touch.
        </h2>
        <div className="row">
          <Link href={`mailto:${contact.email}`} size="lg" leadingIcon="mail">
            {contact.email}
          </Link>
          <Link href={contact.linkedin} size="lg" external>
            LinkedIn
          </Link>
          <Link href="/resume" size="lg" trailingIcon="arrow_forward">
            Resume
          </Link>
        </div>
      </section>
    </>
  )
}
