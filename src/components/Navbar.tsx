import { useEffect, useRef, useState } from 'react'
import { navLinks } from '../data/mockData'

function NBLogo() {
  return (
    <a href="#home" aria-label="Home" className="flex items-center">
      <div style={{ position: 'relative', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
        {/* Subtle halo behind the logo */}
        <div style={{
          position: 'absolute',
          inset: '-12px',
          background: 'radial-gradient(ellipse at center, rgba(134,59,255,0.2) 0%, transparent 70%)',
          filter: 'blur(8px)',
          borderRadius: '50%',
          animation: 'nb-halo-pulse 4s ease-in-out infinite',
          pointerEvents: 'none',
          zIndex: 0,
        }} />
        <img
          src={`${import.meta.env.BASE_URL}logo.png`}
          alt="NB"
          style={{
            height: '64px',
            width: 'auto',
            display: 'block',
            borderRadius: '8px',
            position: 'relative',
            zIndex: 1,
            animation: 'nb-logo-pulse 4s ease-in-out infinite',
          }}
        />
      </div>
    </a>
  )
}

export function Navbar() {
  const [activeSection, setActiveSection] = useState('home')
  const [indicator, setIndicator] = useState({ left: 0, width: 0 })
  const [scrolled, setScrolled] = useState(false)
  const navRefs = useRef<(HTMLAnchorElement | null)[]>([])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
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
    <div className="fixed top-5 inset-x-0 z-50 flex justify-center px-4 pointer-events-none">
      <nav
        className="pointer-events-auto w-full max-w-7xl flex items-center justify-between gap-4 px-5 py-3 rounded-2xl"
        style={{
          background: scrolled ? 'rgba(255,255,255,0.08)' : 'rgba(255,255,255,0.05)',
          backdropFilter: 'blur(16px) saturate(180%)',
          WebkitBackdropFilter: 'blur(16px) saturate(180%)',
          border: '1px solid rgba(176,100,255,0.25)',
          boxShadow: '0 0 24px rgba(176,100,255,0.15), 0 4px 32px rgba(0,0,0,0.2), inset 0 1px 0 rgba(201,190,255,0.08)',
          transition: 'background 300ms ease',
        }}
      >
        <NBLogo />

        <div className="hidden md:flex gap-6 items-center relative pb-1">
          {navLinks.map((link, idx) => {
            const isActive = activeSection === link.href.replace('#', '')
            return (
              <a
                key={link.label}
                ref={(el) => { navRefs.current[idx] = el }}
                href={link.href}
                onClick={() => handleClick(link.href)}
                className="font-mono text-sm tracking-wide transition-all duration-300"
                style={{
                  color: isActive ? '#cfbcff' : 'rgba(203,196,210,0.7)',
                  textShadow: isActive ? '0 0 12px rgba(201,190,255,0.55)' : 'none',
                }}
                onMouseEnter={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.color = '#cfbcff'
                    e.currentTarget.style.textShadow = '0 0 10px rgba(201,190,255,0.4)'
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.color = 'rgba(203,196,210,0.7)'
                    e.currentTarget.style.textShadow = 'none'
                  }
                }}
              >
                {link.label}
              </a>
            )
          })}

          <div
            className="absolute bottom-0 h-[1.5px] rounded-full pointer-events-none"
            style={{
              left: indicator.left,
              width: indicator.width,
              background: 'linear-gradient(90deg, transparent, #cfbcff, transparent)',
              boxShadow: '0 0 8px rgba(201,190,255,0.7)',
              transition: 'left 300ms ease, width 300ms ease',
            }}
          />
        </div>

        <a
          href="#contact"
          onClick={() => handleClick('#contact')}
          className="font-mono text-sm tracking-widest px-5 py-2 rounded-full transition-all duration-300"
          style={{
            color: '#cfbcff',
            border: '1px solid rgba(176,100,255,0.55)',
            background: 'rgba(176,100,255,0.1)',
            boxShadow: '0 0 14px rgba(176,100,255,0.2), inset 0 0 10px rgba(176,100,255,0.06)',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'rgba(176,100,255,0.2)'
            e.currentTarget.style.borderColor = 'rgba(201,190,255,0.85)'
            e.currentTarget.style.boxShadow = '0 0 28px rgba(176,100,255,0.5), inset 0 0 14px rgba(176,100,255,0.1)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'rgba(176,100,255,0.1)'
            e.currentTarget.style.borderColor = 'rgba(176,100,255,0.55)'
            e.currentTarget.style.boxShadow = '0 0 14px rgba(176,100,255,0.2), inset 0 0 10px rgba(176,100,255,0.06)'
          }}
        >
          HIRE ME
        </a>
      </nav>
    </div>
  )
}
