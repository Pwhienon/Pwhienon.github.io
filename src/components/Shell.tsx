import { useEffect, useState, type ReactNode } from 'react'
import { Button, IconButton, Link, Menu, SegmentedControl, TopBar } from '@mbds/react'
import { navigate, onInternalClick } from '../router'
import { contact } from '../content'

type Theme = 'light' | 'dark' | 'system'

function readTheme(): Theme {
  try {
    const t = localStorage.getItem('theme')
    if (t === 'light' || t === 'dark') return t
  } catch {
    /* storage blocked: follow the OS */
  }
  return 'system'
}

/** Kit gap: theme toggle pattern. Built from SegmentedControl; System removes data-theme. */
function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>(readTheme)
  useEffect(() => {
    const root = document.documentElement
    if (theme === 'system') delete root.dataset.theme
    else root.dataset.theme = theme
    try {
      if (theme === 'system') localStorage.removeItem('theme')
      else localStorage.setItem('theme', theme)
    } catch {
      /* not saved; still applied for this visit */
    }
  }, [theme])
  return (
    <SegmentedControl
      label="Colour theme"
      size="sm"
      value={theme}
      onChange={(v) => setTheme(v as Theme)}
      options={[
        { value: 'light', icon: 'light_mode', ariaLabel: 'Light' },
        { value: 'dark', icon: 'dark_mode', ariaLabel: 'Dark' },
        { value: 'system', icon: 'contrast', ariaLabel: 'Follow system' },
      ]}
    />
  )
}

/** Header contact menu, like the benchmark's single "work together" button. */
function useWide() {
  // 600 = kit --breakpoint-sm
  const query = '(min-width: 600px)'
  const [wide, setWide] = useState(() => matchMedia(query).matches)
  useEffect(() => {
    const mq = matchMedia(query)
    const on = () => setWide(mq.matches)
    mq.addEventListener('change', on)
    return () => mq.removeEventListener('change', on)
  }, [])
  return wide
}

function ContactMenu() {
  // Phones get an icon-only trigger so the name and theme toggle fit at 320.
  const wide = useWide()
  return (
    <Menu
      align="end"
      trigger={
        wide ? (
          <Button variant="secondary" size="sm" trailingIcon="expand_more">
            Get in touch
          </Button>
        ) : (
          <IconButton icon="mail" label="Get in touch" variant="secondary" size="sm" />
        )
      }
      items={[
        { id: 'email', label: 'Email', icon: 'mail', onSelect: () => (location.href = `mailto:${contact.email}`) },
        {
          id: 'linkedin',
          label: 'LinkedIn (opens in a new tab)',
          icon: 'open_in_new',
          onSelect: () => window.open(contact.linkedin, '_blank', 'noopener,noreferrer'),
        },
        { id: 'resume', label: 'Resume', icon: 'description', onSelect: () => navigate('/resume') },
      ]}
    />
  )
}

export function Shell({ children }: { children: ReactNode }) {
  return (
    <div onClick={onInternalClick}>
      <Link className="skip-link" href="#main">
        Skip to main content
      </Link>
      <div className="no-print">
        <TopBar
          logo={<span className="wordmark text-label-lg">Petri Jomppanen</span>}
          logoHref="/"
          logoLabel="Petri Jomppanen, home"
          actions={
            <div className="row header-actions">
              <ContactMenu />
              <ThemeToggle />
            </div>
          }
        />
      </div>
      <main id="main" tabIndex={-1}>
        {children}
      </main>
      <footer className="site-footer no-print">
        <div className="container text-body-sm">
          <span>© {new Date().getFullYear()} Petri Jomppanen · Helsinki, Finland</span>
        </div>
      </footer>
    </div>
  )
}
