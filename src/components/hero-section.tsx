import { Reveal } from '@/components/reveal'

export function HeroSection() {
  return (
    <section
      id="home"
      aria-labelledby="hero-title"
      className="scroll-mt-24 bg-background px-[5vw] pt-28 sm:pt-32"
    >
      <div className="site-container flex min-h-[82svh] items-center justify-center py-[12vh]">
        <Reveal className="mx-auto max-w-6xl text-center">
          <p className="text-xl font-light text-muted-foreground sm:text-2xl">
            Petri Jomppanen
          </p>
          <h1
            id="hero-title"
            className="mt-5 text-[clamp(3.4rem,7vw,4.5rem)] font-semibold leading-[0.98] tracking-[-0.03em] text-accent-foreground"
          >
            Designer from this planet.
          </h1>
          <p className="mx-auto mt-9 max-w-4xl text-left text-[clamp(1.25rem,2vw,1.6rem)] font-light leading-relaxed text-foreground sm:text-center">
            I have worked in multiple roles, in-house and as a freelancer—from early-stage
            startups to global corporations—to build ideas, shape brands and scale products.
            An all-round collaborator with a creative mindset, always open to new experiences
            and ways of learning.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
