import { useEffect, useRef, useState } from 'react'
import { navLinks } from '../data/mockData'

function NBLogo() {
  return (
    <a href="#home" aria-label="Home">
      <span
        style={{
          fontFamily: "'Cabinet Grotesk', sans-serif",
          fontWeight: 800,
          fontSize: '2rem',
          letterSpacing: '-0.03em',
          lineHeight: 1,
          background:
            'linear-gradient(135deg, #b084ff 0%, #c9beff 40%, #a78bfa 70%, #7c3aed 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          animation: 'nb-glow-pulse 3s ease-in-out infinite',
          display: 'inline-block',
        }}
      >
        NB
      </span>
    </a>
  )
}

export function Navbar() {
  const [activeSection, setActiveSection] = useState('home')
  const [indicator, setIndicator] = useState({ left: 0, width: 0 })
  const [scrolled, setScrolled] = useState(false)
  const navRefs = useRef<(HTMLAnchorElement | null)[]>([])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const idx = navLinks.findIndex((link) => link.href.replace('#', '') === activeSection)
    const el = navRefs.current[idx]
    if (el) setIndicator({ left: el.offsetLeft, width: el.offsetWidth })
  }, [activeSection])

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

  const handleClick = (href: string) => setActiveSection(href.replace('#', ''))

  return (
    <nav
      className="fixed top-0 left-0 w-full flex justify-between items-center px-gutter py-stack-sm z-50"
      style={{
        background: scrolled ? 'rgba(8,8,10,0.65)' : 'transparent',
        backdropFilter: scrolled ? 'blur(18px) saturate(160%)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(18px) saturate(160%)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.07)' : '1px solid transparent',
        transition: 'background 250ms ease, backdrop-filter 250ms ease, border-color 250ms ease',
      }}
    >
      {/* Logo */}
      <NBLogo />

      {/* Nav links with sliding indicator */}
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

        <div
          className="absolute bottom-0 h-[2px] bg-primary rounded-full pointer-events-none"
          style={{
            left: indicator.left,
            width: indicator.width,
            transition: 'left 300ms ease, width 300ms ease',
          }}
        />
      </div>

      {/* HIRE ME */}
      <a
        href="#contact"
        onClick={() => handleClick('#contact')}
        className="font-mono text-label-sm text-primary px-6 py-2 rounded-full transition-all duration-300 hover:scale-105"
        style={{
          border: '1px solid rgba(201,190,255,0.5)',
          boxShadow: '0 0 10px rgba(201,190,255,0.15), inset 0 0 10px rgba(201,190,255,0.05)',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.boxShadow = '0 0 22px rgba(201,190,255,0.55), inset 0 0 14px rgba(201,190,255,0.1)'
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
