import { ProjectCard } from '@/components/project-card'
import { Reveal } from '@/components/reveal'
import { featuredProjects } from '@/data/projects'

export function FeaturedProjects() {
  const [arctic, friendship, trademark, corsearch] = featuredProjects

  return (
    <section
      id="portfolio"
      aria-labelledby="portfolio-title"
      className="scroll-mt-20 bg-background px-[5vw] py-[9vh]"
    >
      <div className="site-container grid gap-x-12 md:grid-cols-2 xl:gap-x-16">
        <div>
          <Reveal className="mb-16 px-2 md:mb-20 md:px-6">
            <p className="text-xl font-light text-muted-foreground sm:text-2xl">
              Selected projects
            </p>
            <h2
              id="portfolio-title"
              className="mt-5 max-w-xl text-[clamp(2.5rem,5vw,3.75rem)] font-medium leading-[1.08] tracking-[-0.025em]"
            >
              A small sneak peek at selected projects.
            </h2>
          </Reveal>
          <ProjectCard project={arctic} />
          <ProjectCard project={friendship} />
        </div>
        <div className="md:pt-24">
          <ProjectCard project={trademark} />
          <ProjectCard project={corsearch} />
        </div>
      </div>
    </section>
  )
}
