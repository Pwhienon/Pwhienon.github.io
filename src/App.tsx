import { useEffect } from 'react'
import { EmptyState, Link } from '@mbds/react'
import { Shell } from './components/Shell'
import { caseStudies } from './content'
import { CaseStudyPage } from './pages/CaseStudy'
import { Home } from './pages/Home'
import { Resume } from './pages/Resume'
import { useRoute } from './router'

function NotFound() {
  return (
    <div className="container section">
      <h1 className="mbds-visually-hidden">Page not found</h1>
      <EmptyState
        headingLevel={2}
        icon="search_off"
        title="Page not found"
        description="This page doesn’t exist, or it has moved."
        link={<Link href="/">Back to the home page</Link>}
      />
    </div>
  )
}

export default function App() {
  const route = useRoute()

  // Move focus to the new page's content on client-side navigation (not on first load).
  useEffect(() => {
    if (location.hash) return
    const main = document.getElementById('main')
    if (main && document.activeElement !== document.body) main.focus({ preventScroll: true })
  }, [route])

  // The app renders after the browser tried to jump to #hash on load: jump once it exists.
  useEffect(() => {
    if (!location.hash) return
    const jump = () => document.getElementById(location.hash.slice(1))?.scrollIntoView()
    jump()
    // Images above the target can shift it while they load.
    window.addEventListener('load', jump, { once: true })
    return () => window.removeEventListener('load', jump)
  }, [])

  if (route.name === 'home')
    return (
      <Shell>
        <Home />
      </Shell>
    )
  if (route.name === 'resume')
    return (
      <Shell>
        <Resume />
      </Shell>
    )
  if (route.name === 'case') {
    const item = caseStudies.find((c) => c.slug === route.slug)
    return <Shell>{item ? <CaseStudyPage item={item} /> : <NotFound />}</Shell>
  }
  return (
    <Shell>
      <NotFound />
    </Shell>
  )
}
