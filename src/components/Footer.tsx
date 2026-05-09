import { siteConfig } from '../data/mockData'

export function Footer() {
  return (
    <footer className="my-margin px-gutter pb-margin">
      <div
        className="relative overflow-hidden rounded-2xl border border-white/5 py-8 px-8 md:px-16"
        style={{
          background:
            'radial-gradient(ellipse 60% 80% at 20% 50%, rgba(110, 58, 170, 0.40) 0%, transparent 60%), radial-gradient(ellipse 60% 80% at 80% 50%, rgba(90, 45, 150, 0.35) 0%, transparent 60%), #0D0B14',
        }}
      >
        <div
          className="absolute top-1/2 left-[20%] -translate-y-1/2 w-72 h-72 rounded-full pointer-events-none"
          style={{ background: 'rgba(130, 70, 200, 0.22)', filter: 'blur(60px)' }}
        />
        <div
          className="absolute top-1/2 right-[20%] -translate-y-1/2 w-72 h-72 rounded-full pointer-events-none"
          style={{ background: 'rgba(100, 55, 170, 0.18)', filter: 'blur(60px)' }}
        />
        <div className="relative z-10 flex flex-col md:flex-row md:justify-between md:items-center gap-2 text-center md:text-left">
          <span className="font-mono text-[10px] text-on-surface-variant opacity-40 uppercase tracking-[0.4em]">
            {siteConfig.footerCredit}
          </span>
          <span className="font-mono text-[10px] text-on-surface-variant opacity-40 uppercase tracking-[0.4em]">
            {siteConfig.copyright}
          </span>
        </div>
      </div>
    </footer>
  )
}
