import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from '@/components/ui/navigation-menu'
import { usePageNavigation } from '@/hooks/use-page-navigation'
import { cn } from '@/lib/utils'

const navigation = [
  { id: 'home', label: 'Home', href: '#home' },
  { id: 'portfolio', label: 'Portfolio', href: '#portfolio' },
] as const

export function SiteHeader() {
  const { activeSection, isScrolled } = usePageNavigation()

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 flex min-h-20 items-center bg-background transition-[min-height,box-shadow] duration-300 sm:min-h-24',
        isScrolled && 'min-h-16 shadow-[0_1rem_1.5rem_rgb(17_17_17/0.12)] sm:min-h-16',
      )}
    >
      <div className="site-container flex justify-center">
        <NavigationMenu aria-label="Primary navigation">
          <NavigationMenuList>
            {navigation.map((item) => (
              <NavigationMenuItem key={item.id}>
                <NavigationMenuLink
                  href={item.href}
                  active={activeSection === item.id}
                  aria-current={activeSection === item.id ? 'location' : undefined}
                >
                  {item.label}
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </header>
  )
}
