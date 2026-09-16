import { ArrowUpRight } from 'lucide-react'

import { Reveal } from '@/components/reveal'
import { otherProjects } from '@/data/projects'

export function OtherProjects() {
  return (
    <section aria-labelledby="other-projects-title" className="bg-card px-[5vw] py-[10vh]">
      <div className="site-container">
        <Reveal>
          <h2
            id="other-projects-title"
            className="text-[clamp(2rem,4vw,2.75rem)] font-medium leading-tight"
          >
            Other projects
          </h2>
        </Reveal>
        <ul className="mt-12 grid list-none gap-x-10 gap-y-12 p-0 sm:grid-cols-2 lg:grid-cols-3">
          {otherProjects.map((project) => (
            <li key={project.href}>
              <Reveal>
                <a
                  href={project.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={`${project.title}: ${project.discipline} (opens in a new tab)`}
                  className="group block rounded-sm text-foreground no-underline outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:ring-offset-4 focus-visible:ring-offset-card"
                >
                  <span className="flex items-start justify-between gap-5 border-b border-foreground/20 pb-4 transition-[border-color,color] group-hover:border-primary group-hover:text-primary">
                    <span className="text-2xl font-medium leading-tight sm:text-3xl">
                      {project.title}
                    </span>
                    <ArrowUpRight
                      aria-hidden="true"
                      className="mt-1 size-5 shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      strokeWidth={1.75}
                    />
                  </span>
                  <span className="mt-4 block text-lg leading-relaxed text-muted-foreground">
                    {project.discipline}
                  </span>
                </a>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
