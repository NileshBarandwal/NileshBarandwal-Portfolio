import { useEffect, useRef, useState } from 'react'
import { navLinks } from '../data/mockData'

function NBLogo() {
  return (
    <a href="#home" aria-label="Home">
      <svg
        width="48"
        height="40"
        viewBox="0 0 48 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ filter: 'drop-shadow(0 0 8px rgba(201,190,255,0.8)) drop-shadow(0 0 2px rgba(201,190,255,1))' }}
      >
        {/* Circuit node dots */}
        <circle cx="2" cy="6" r="1.5" fill="#c9beff" opacity="0.6" />
        <circle cx="2" cy="34" r="1.5" fill="#c9beff" opacity="0.6" />
        <circle cx="46" cy="6" r="1.5" fill="#c9beff" opacity="0.6" />
        <circle cx="46" cy="34" r="1.5" fill="#c9beff" opacity="0.6" />
        <circle cx="24" cy="2" r="1.5" fill="#c9beff" opacity="0.4" />

        {/* N letterform — two verticals + diagonal */}
        <line x1="4" y1="8" x2="4" y2="32" stroke="#c9beff" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="4" y1="8" x2="20" y2="32" stroke="#c9beff" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="20" y1="8" x2="20" y2="32" stroke="#c9beff" strokeWidth="2.5" strokeLinecap="round" />

        {/* B letterform — vertical + two bumps */}
        <line x1="26" y1="8" x2="26" y2="32" stroke="#c9beff" strokeWidth="2.5" strokeLinecap="round" />
        {/* Top bump */}
        <path
          d="M26 8 L38 8 Q44 8 44 14 Q44 20 26 20"
          stroke="#c9beff"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        {/* Bottom bump */}
        <path
          d="M26 20 L38 20 Q46 20 46 26 Q46 32 26 32"
          stroke="#c9beff"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />

        {/* Circuit trace lines */}
        <line x1="2" y1="6" x2="4" y2="8" stroke="#c9beff" strokeWidth="1" opacity="0.5" />
        <line x1="2" y1="34" x2="4" y2="32" stroke="#c9beff" strokeWidth="1" opacity="0.5" />
        <line x1="46" y1="6" x2="44" y2="8" stroke="#c9beff" strokeWidth="1" opacity="0.5" />
        <line x1="46" y1="34" x2="46" y2="26" stroke="#c9beff" strokeWidth="1" opacity="0.3" />
        <line x1="24" y1="2" x2="24" y2="6" stroke="#c9beff" strokeWidth="1" opacity="0.3" />
      </svg>
    </a>
  )
}

export function Navbar() {
  const [activeSection, setActiveSection] = useState('home')
  const [indicator, setIndicator] = useState({ left: 0, width: 0 })
  const [scrolled, setScrolled] = useState(false)
  const navRefs = useRef<(HTMLAnchorElement | null)[]>([])

  // Scroll-based background transition
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

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
          if (entry.isIntersecting) setActiveSection(entry.target.id)
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
    <nav
      className="fixed top-0 left-0 w-full flex justify-between items-center px-gutter py-stack-sm z-50"
      style={{
        backgroundColor: scrolled ? 'rgba(8,8,10,0.85)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(201,190,255,0.1)' : '1px solid transparent',
        transition: 'background-color 250ms ease, backdrop-filter 250ms ease, border-color 250ms ease',
      }}
    >
      <NBLogo />

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

      {/* HIRE ME button */}
      <a
        href="#contact"
        onClick={() => handleClick('#contact')}
        className="font-mono text-label-sm text-primary px-6 py-2 rounded-full transition-all duration-300 hover:scale-105"
        style={{
          border: '1px solid rgba(201,190,255,0.5)',
          boxShadow: '0 0 10px rgba(201,190,255,0.15), inset 0 0 10px rgba(201,190,255,0.05)',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.boxShadow = '0 0 20px rgba(201,190,255,0.5), inset 0 0 15px rgba(201,190,255,0.1)'
          e.currentTarget.style.borderColor = 'rgba(201,190,255,0.9)'
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.boxShadow = '0 0 10px rgba(201,190,255,0.15), inset 0 0 10px rgba(201,190,255,0.05)'
          e.currentTarget.style.borderColor = 'rgba(201,190,255,0.5)'
        }}
      >
        HIRE ME
      </a>
    </nav>
  )
}
