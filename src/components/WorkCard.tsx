import { Badge, Card, IconList, IconListItem, Link } from '@mbds/react'
import { contact, type Stat, type WorkItem } from '../content'

function Stats({ stats }: { stats: Stat[] }) {
  return (
    <dl className="card-stats">
      {stats.map((s) => (
        <div key={s.label}>
          <dt className="text-body-sm">{s.label}</dt>
          <dd className="text-heading-h5">{s.value}</dd>
        </div>
      ))}
    </dl>
  )
}

/**
 * Benchmark pattern: large tiles, alternating one wide tile and two half tiles.
 * Kit gap: Card has no large showcase media, so the image is passed as media content.
 */
export function WorkCard({ item, wide }: { item: WorkItem; wide: boolean }) {
  const className = `work-card${wide ? ' work-card--wide' : ''}`

  if (item.kind === 'case') {
    return (
      <Card
        className={className}
        variant="elevated"
        href={`/work/${item.slug}`}
        media={
          <img
            className="work-card__img"
            src={item.image.src}
            width={item.image.width}
            height={item.image.height}
            alt={item.image.alt}
            loading="lazy"
          />
        }
        badge={<span className="eyebrow text-label-sm">{item.client}</span>}
        title={item.title}
        titleAs="h3"
      >
        <div className="stack-md">
          <p className="text-body-md">{item.summary}</p>
          {wide && <Stats stats={item.stats} />}
        </div>
      </Card>
    )
  }

  const subject = encodeURIComponent(`Case study request: ${item.title}`)
  return (
    <Card
      className={className}
      variant="elevated"
      badge={
        <Badge icon="lock" tone="accent" size="sm">
          Confidential client
        </Badge>
      }
      title={item.title}
      titleAs="h3"
      subtitle={`${item.role} · ${item.years}`}
      actions={
        <Link href={`mailto:${contact.email}?subject=${subject}`} leadingIcon="mail">
          Full case study on request
        </Link>
      }
    >
      <div className="stack-md">
        <p className="text-body-md">{item.scope}</p>
        <p className="text-body-md">{item.problem}</p>
        {item.stats && <Stats stats={item.stats} />}
        <IconList size="sm" tone="accent" aria-label="Outcomes">
          {item.outcomes.map((o) => (
            <IconListItem key={o} icon="check">
              {o}
            </IconListItem>
          ))}
        </IconList>
      </div>
    </Card>
  )
}
