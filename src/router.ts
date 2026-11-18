import { useEffect, useState, type MouseEvent } from 'react'

export type Route =
  | { name: 'home' }
  | { name: 'case'; slug: string }
  | { name: 'resume' }
  | { name: 'not-found' }

export function parse(pathname: string): Route {
  const path = pathname.replace(/\/+$/, '') || '/'
  if (path === '/') return { name: 'home' }
  if (path === '/resume') return { name: 'resume' }
  const m = path.match(/^\/work\/([a-z0-9-]+)$/)
  if (m) return { name: 'case', slug: m[1] }
  return { name: 'not-found' }
}

export function useRoute(): Route {
  const [route, setRoute] = useState(() => parse(location.pathname))
  useEffect(() => {
    const onPop = () => setRoute(parse(location.pathname))
    window.addEventListener('popstate', onPop)
    return () => window.removeEventListener('popstate', onPop)
  }, [])
  return route
}

/** Client-side navigation for internal links; lets modified clicks open new tabs. */
export function navigate(href: string) {
  const url = new URL(href, location.href)
  history.pushState(null, '', url.pathname + url.hash)
  window.dispatchEvent(new PopStateEvent('popstate'))
  if (url.hash) {
    requestAnimationFrame(() => document.getElementById(url.hash.slice(1))?.scrollIntoView())
  } else {
    window.scrollTo(0, 0)
  }
}

export function onInternalClick(event: MouseEvent<HTMLElement>) {
  const a = (event.target as HTMLElement).closest('a')
  if (!a || a.target === '_blank' || event.defaultPrevented) return
  if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return
  const url = new URL(a.href, location.href)
  if (url.origin !== location.origin) return
  // In-page anchor on the current page: let the browser handle it.
  if (url.pathname === location.pathname && url.hash) return
  event.preventDefault()
  navigate(url.pathname + url.hash)
}
