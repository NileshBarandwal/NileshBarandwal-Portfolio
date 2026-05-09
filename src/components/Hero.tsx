import { siteConfig } from '../data/mockData'
import { useTypewriter } from '../hooks/useTypewriter'

export function Hero() {
  const role = useTypewriter()

  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-gutter pt-32 pb-margin">
      <div className="w-full max-w-4xl mx-auto flex flex-col items-center space-y-stack-md">

        <h1 className="font-display text-display-xl leading-[0.95] hero-title-clip">
          Building things that <span className="italic">work</span>.
          <br />
          Securing things that{' '}
          <span style={{ WebkitTextFillColor: '#c9beff' }}>matter</span>.
        </h1>

        <p className="font-body text-body-lg text-on-surface-variant max-w-xl leading-relaxed opacity-80">
          {siteConfig.bio}
        </p>

        <p className="font-mono text-label-sm text-on-surface-variant uppercase tracking-[0.3em] h-4">
          {role}
          <span className="animate-blink">|</span>
        </p>

        <div className="flex flex-wrap justify-center items-center gap-stack-md pt-stack-sm">
          <a
            href="#projects"
            className="inline-flex items-center justify-center h-12 bg-primary text-on-primary px-10 rounded-lg font-mono text-label-sm tracking-widest hover:shadow-[0_0_30px_rgba(157,141,241,0.5)] transition-all uppercase"
          >
            View Projects
          </a>
          <a
            href={siteConfig.cvUrl}
            download
            className="inline-flex items-center justify-center gap-2 h-12 bg-surface/80 backdrop-blur-sm border border-white/20 text-on-surface px-10 rounded-lg font-mono text-label-sm tracking-widest hover:bg-surface hover:border-primary/50 transition-all uppercase"
          >
            <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>download</span>
            Resume
          </a>
        </div>

      </div>
    </section>
  )
}
