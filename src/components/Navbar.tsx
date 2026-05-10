import { useEffect, useState } from 'react'
import { navLinks, siteConfig } from '../data/mockData'

export function Navbar() {
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const sectionIds = navLinks.map((link) => link.href.replace('#', '')).filter(Boolean)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { rootMargin: '-80px 0px -40% 0px', threshold: 0 }
    )

    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  const handleClick = (href: string) => {
    setActiveSection(href.replace('#', ''))
  }

  return (
    <nav className="fixed top-0 left-0 w-full flex justify-between items-center px-gutter py-stack-sm bg-background/80 backdrop-blur-xl border-b border-outline-variant/10 z-50">
      <span className="font-display text-headline-md tracking-tighter text-primary">
        {siteConfig.initials}
      </span>
      <div className="hidden md:flex gap-8 items-center">
        {navLinks.map((link) => {
          const isActive = activeSection === link.href.replace('#', '')
          return (
            <a
              key={link.label}
              href={link.href}
              onClick={() => handleClick(link.href)}
              className={
                isActive
                  ? 'font-body text-body-md text-primary border-b border-primary/50 pb-1'
                  : 'font-body text-body-md text-on-surface-variant hover:text-primary transition-colors duration-300'
              }
            >
              {link.label}
            </a>
          )
        })}
      </div>
      <a
        href={`mailto:${siteConfig.email}`}
        className="bg-primary text-on-primary font-mono text-label-sm px-gutter py-2 rounded-full hover:shadow-[0_0_20px_rgba(201,190,255,0.4)] transition-all duration-300 active:scale-95"
      >
        Connect
      </a>
    </nav>
  )
}
