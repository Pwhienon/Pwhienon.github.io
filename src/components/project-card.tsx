import { ExternalLink } from 'lucide-react'

import { Reveal } from '@/components/reveal'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import type { FeaturedProject } from '@/data/projects'

export function ProjectCard({ project }: { project: FeaturedProject }) {
  return (
    <Reveal className="mb-10 sm:mb-12">
      <article aria-labelledby={`${project.id}-title`}>
        <Card className="overflow-hidden border-0 shadow-[0_1rem_3rem_rgb(17_17_17/0.18)]">
          <img
            src={project.image.src}
            width={project.image.width}
            height={project.image.height}
            alt={project.image.alt}
            loading="lazy"
            className="h-auto w-full"
          />
          <CardHeader>
            <CardTitle id={`${project.id}-title`}>{project.title}</CardTitle>
            <dl className="grid gap-4 pt-3 text-base leading-relaxed sm:text-lg">
              <div>
                <dt className="font-semibold text-foreground">Role</dt>
                <dd className="text-muted-foreground">{project.role}</dd>
              </div>
              <div>
                <dt className="font-semibold text-foreground">Duties</dt>
                <dd className="text-muted-foreground">{project.duties}</dd>
              </div>
            </dl>
          </CardHeader>
          <CardContent className="pt-6">
            <CardDescription>{project.description}</CardDescription>
            <div
              className={
                project.links.length === 4
                  ? 'mt-7 grid grid-cols-2 gap-x-6 gap-y-6'
                  : 'mt-7 flex flex-wrap gap-x-6 gap-y-4'
              }
            >
              {project.links.map((link) => (
                <Button key={link.href} asChild variant="link">
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label={`${link.label} for ${project.title} (opens in a new tab)`}
                  >
                    {link.label}
                    <ExternalLink aria-hidden="true" className="size-4" strokeWidth={1.75} />
                  </a>
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>
      </article>
    </Reveal>
  )
}
