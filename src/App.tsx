import { FeaturedProjects } from '@/components/featured-projects'
import { HeroSection } from '@/components/hero-section'
import { OtherProjects } from '@/components/other-projects'
import { ProjectGallery } from '@/components/project-gallery'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'

function App() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>
      <SiteHeader />
      <main id="main-content">
        <HeroSection />
        <FeaturedProjects />
        <ProjectGallery />
        <OtherProjects />
      </main>
      <SiteFooter />
    </>
  )
}

export default App
