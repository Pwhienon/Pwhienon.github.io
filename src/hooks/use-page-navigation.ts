import { useEffect, useState } from 'react'

const sections = ['home', 'portfolio'] as const

export function usePageNavigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState<(typeof sections)[number]>('home')

  useEffect(() => {
    let frame = 0

    const update = () => {
      setIsScrolled(window.scrollY > 24)

      const portfolio = document.getElementById('portfolio')
      if (portfolio) {
        const threshold = Math.min(180, window.innerHeight * 0.32)
        setActiveSection(portfolio.getBoundingClientRect().top <= threshold ? 'portfolio' : 'home')
      }
    }

    const onScroll = () => {
      window.cancelAnimationFrame(frame)
      frame = window.requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)

    return () => {
      window.cancelAnimationFrame(frame)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  return { activeSection, isScrolled }
}
