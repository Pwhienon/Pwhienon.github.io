import { ArrowUp } from 'lucide-react'

import { Button } from '@/components/ui/button'

export function SiteFooter() {
  return (
    <footer className="footer-gradient px-[5vw]">
      <div className="site-container flex justify-center py-12">
        <Button asChild variant="link">
          <a href="#home">
            Back to the top
            <ArrowUp aria-hidden="true" className="size-4" strokeWidth={1.75} />
          </a>
        </Button>
      </div>
    </footer>
  )
}
