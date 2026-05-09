import { siteConfig, footerLinks } from '../data/mockData'

export function Footer() {
  return (
    <footer className="w-full flex flex-col items-center justify-center pt-margin pb-stack-lg px-gutter space-y-stack-md bg-background border-t border-outline-variant/10">
      <div className="font-display text-display-xl uppercase tracking-tighter text-on-surface/5 select-none text-center">
        {siteConfig.footerCredit}
      </div>
      <div className="flex flex-wrap justify-center gap-8 md:gap-margin">
        {footerLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-on-surface-variant font-mono text-[10px] tracking-widest hover:text-primary transition-all uppercase"
          >
            {link.label}
          </a>
        ))}
      </div>
      <p className="font-mono text-[10px] text-on-surface-variant opacity-40 uppercase tracking-[0.4em]">
        {siteConfig.copyright}
      </p>
    </footer>
  )
}
