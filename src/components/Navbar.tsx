import { useEffect, useRef, useState } from 'react'
import { navLinks } from '../data/mockData'

function NBLogo() {
  return (
    <a href="#home" aria-label="Home" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
      <svg
        width="56"
        height="42"
        viewBox="0 0 56 42"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          filter:
            'drop-shadow(0 0 4px rgba(201,190,255,1)) drop-shadow(0 0 10px rgba(201,190,255,0.6)) drop-shadow(0 0 20px rgba(201,190,255,0.3))',
        }}
      >
        {/* ── N letterform ── */}
        {/* Left vertical */}
        <line x1="4" y1="8" x2="4" y2="34" stroke="#c9beff" strokeWidth="2.5" strokeLinecap="round" />
        {/* Diagonal */}
        <line x1="4" y1="8" x2="22" y2="34" stroke="#c9beff" strokeWidth="2.5" strokeLinecap="round" />
        {/* Shared N-right / B-left vertical */}
        <line x1="22" y1="8" x2="22" y2="34" stroke="#c9beff" strokeWidth="2.5" strokeLinecap="round" />

        {/* ── B letterform (fused — shares left vertical at x=22) ── */}
        {/* Top bump */}
        <path
          d="M22,8 L34,8 Q42,8 42,15 Q42,21 34,21 L22,21"
          stroke="#c9beff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none"
        />
        {/* Bottom bump (slightly wider) */}
        <path
          d="M22,21 L35,21 Q46,21 46,28 Q46,34 35,34 L22,34"
          stroke="#c9beff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none"
        />

        {/* ── Circuit nodes at key junctions ── */}
        <circle cx="4"  cy="8"  r="2"   fill="#c9beff" opacity="0.9" />
        <circle cx="4"  cy="34" r="2"   fill="#c9beff" opacity="0.9" />
        <circle cx="22" cy="8"  r="2"   fill="#c9beff" opacity="0.9" />
        <circle cx="22" cy="21" r="1.5" fill="#c9beff" opacity="0.7" />
        <circle cx="22" cy="34" r="2"   fill="#c9beff" opacity="0.9" />
        <circle cx="42" cy="15" r="1.5" fill="#c9beff" opacity="0.7" />
        <circle cx="46" cy="28" r="1.5" fill="#c9beff" opacity="0.7" />

        {/* ── Circuit trace extensions ── */}
        {/* Left side horizontal ticks */}
        <line x1="4"  y1="8"  x2="1"  y2="8"  stroke="#c9beff" strokeWidth="1" strokeLinecap="round" opacity="0.45" />
        <line x1="4"  y1="34" x2="1"  y2="34" stroke="#c9beff" strokeWidth="1" strokeLinecap="round" opacity="0.45" />
        {/* Top trace from N-B junction going up then right */}
        <line x1="22" y1="8"  x2="22" y2="4"  stroke="#c9beff" strokeWidth="1" strokeLinecap="round" opacity="0.35" />
        <line x1="22" y1="4"  x2="32" y2="4"  stroke="#c9beff" strokeWidth="1" strokeLinecap="round" opacity="0.35" />
        {/* Right-side trace from bottom B bump */}
        <line x1="46" y1="28" x2="51" y2="28" stroke="#c9beff" strokeWidth="1" strokeLinecap="round" opacity="0.35" />
        <line x1="51" y1="28" x2="51" y2="34" stroke="#c9beff" strokeWidth="1" strokeLinecap="round" opacity="0.35" />
        {/* Vertical tick from B top */}
        <line x1="34" y1="8"  x2="34" y2="4"  stroke="#c9beff" strokeWidth="1" strokeLinecap="round" opacity="0.3" />

        {/* ── Terminal pads at trace ends ── */}
        <circle cx="1"  cy="8"  r="1.2" fill="#c9beff" opacity="0.5" />
        <circle cx="1"  cy="34" r="1.2" fill="#c9beff" opacity="0.5" />
        <circle cx="32" cy="4"  r="1.2" fill="#c9beff" opacity="0.4" />
        <circle cx="51" cy="34" r="1.2" fill="#c9beff" opacity="0.4" />
        <circle cx="34" cy="4"  r="1.2" fill="#c9beff" opacity="0.35" />
      </svg>
    </a>
  )
}

export function Navbar() {
  const [activeSection, setActiveSection] = useState('home')
  const [indicator, setIndicator] = useState({ left: 0, width: 0 })
  const [scrolled, setScrolled] = useState(false)
  const navRefs = useRef<(HTMLAnchorElement | null)[]>([])

  // Scroll-based glassmorphism intensify
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Move sliding indicator to active nav item
  useEffect(() => {
    const idx = navLinks.findIndex((link) => link.href.replace('#', '') === activeSection)
    const el = navRefs.current[idx]
    if (el) setIndicator({ left: el.offsetLeft, width: el.offsetWidth })
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

  const handleClick = (href: string) => setActiveSection(href.replace('#', ''))

  return (
    <nav
      className="fixed top-0 left-0 w-full flex justify-between items-center px-gutter py-stack-sm z-50"
      style={{
        background: scrolled
          ? 'rgba(201,190,255,0.07)'
          : 'rgba(201,190,255,0.04)',
        backdropFilter: scrolled ? 'blur(16px) saturate(180%)' : 'blur(8px) saturate(140%)',
        WebkitBackdropFilter: scrolled ? 'blur(16px) saturate(180%)' : 'blur(8px) saturate(140%)',
        borderBottom: scrolled
          ? '1px solid rgba(255,255,255,0.1)'
          : '1px solid rgba(255,255,255,0.06)',
        transition: 'background 250ms ease, backdrop-filter 250ms ease, border-color 250ms ease',
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
