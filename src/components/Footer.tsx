import { siteConfig } from '../data/mockData'

export function Footer() {
  return (
    <footer
      className="w-full border-t border-white/10 py-8 px-gutter flex flex-col md:flex-row md:justify-between md:items-center gap-2 text-center md:text-left"
      style={{ backgroundColor: '#0C0C0F' }}
    >
      <span className="font-mono text-[10px] text-on-surface-variant opacity-40 uppercase tracking-[0.4em]">
        {siteConfig.footerCredit}
      </span>
      <span className="font-mono text-[10px] text-on-surface-variant opacity-40 uppercase tracking-[0.4em]">
        {siteConfig.copyright}
      </span>
    </footer>
  )
}
