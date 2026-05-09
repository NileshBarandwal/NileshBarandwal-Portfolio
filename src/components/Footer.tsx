import { siteConfig } from '../data/mockData'

export function Footer() {
  return (
    <footer className="w-full flex flex-wrap justify-between items-center py-stack-md px-gutter border-t border-outline-variant/10 gap-4">
      <span className="font-mono text-[10px] text-on-surface-variant opacity-40 uppercase tracking-[0.4em]">
        {siteConfig.footerCredit}
      </span>
      <span className="font-mono text-[10px] text-on-surface-variant opacity-40 uppercase tracking-[0.4em]">
        {siteConfig.copyright}
      </span>
    </footer>
  )
}
