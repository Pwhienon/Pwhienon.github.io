import { Reveal } from '@/components/reveal'

const gallery = [
  {
    src: '/img/webp/Lumina.webp',
    width: 2280,
    height: 1732,
    alt: 'Framed Lumina sports campaign poster displayed in a concrete interior.',
    className: 'lg:col-span-6',
    delay: 'none' as const,
  },
  {
    src: '/img/webp/Yllas.webp',
    width: 1116,
    height: 1578,
    alt: 'Orange Ylläs travel poster with a yellow sun and dark mountain landscape.',
    className: 'md:col-span-1 lg:col-span-3',
    delay: 'short' as const,
  },
  {
    src: '/img/webp/Rollo.webp',
    width: 1116,
    height: 848,
    alt: 'White Rollo typographic poster hanging against a lavender wall.',
    className: 'md:col-span-1 lg:col-span-3',
    delay: 'long' as const,
  },
]

export function ProjectGallery() {
  return (
    <section aria-label="Additional selected work" className="gallery-backdrop px-[5vw] py-[6vh]">
      <div className="mx-auto grid max-w-[1680px] gap-8 md:grid-cols-2 lg:grid-cols-12 lg:items-center">
        {gallery.map((image) => (
          <Reveal key={image.src} className={image.className} delay={image.delay}>
            <img
              src={image.src}
              width={image.width}
              height={image.height}
              alt={image.alt}
              loading="lazy"
              className="h-auto w-full rounded-sm shadow-[0_1rem_3rem_rgb(17_17_17/0.2)]"
            />
          </Reveal>
        ))}
      </div>
    </section>
  )
}
