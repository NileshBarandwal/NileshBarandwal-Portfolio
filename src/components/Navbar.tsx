import { useEffect, useRef, useState } from 'react'
import { navLinks, siteConfig } from '../data/mockData'

export function Navbar() {
  const [activeSection, setActiveSection] = useState('home')
  const [indicator, setIndicator] = useState({ left: 0, width: 0 })
  const navRefs = useRef<(HTMLAnchorElement | null)[]>([])

  // Move indicator to match the active nav item
  useEffect(() => {
    const idx = navLinks.findIndex((link) => link.href.replace('#', '') === activeSection)
    const el = navRefs.current[idx]
    if (el) {
      setIndicator({ left: el.offsetLeft, width: el.offsetWidth })
    }
  }, [activeSection])

  // IntersectionObserver — scroll tracking
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

      <div className="hidden md:flex gap-8 items-center relative pb-1">
        {navLinks.map((link, idx) => {
          const isActive = activeSection === link.href.replace('#', '')
          return (
            <a
              key={link.label}
              ref={(el) => { navRefs.current[idx] = el }}
              href={link.href}
              onClick={() => handleClick(link.href)}
              className={
                isActive
                  ? 'font-body text-body-md text-primary'
                  : 'font-body text-body-md text-on-surface-variant hover:text-primary transition-colors duration-300'
              }
            >
              {link.label}
            </a>
          )
        })}

        {/* Sliding indicator bar */}
        <div
          className="absolute bottom-0 h-[2px] bg-primary rounded-full pointer-events-none"
          style={{
            left: indicator.left,
            width: indicator.width,
            transition: 'left 300ms ease, width 300ms ease',
          }}
        />
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
