import { siteConfig } from '../data/mockData'

export function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-gutter pt-32 pb-margin">
      <div className="w-full flex flex-col items-center space-y-stack-md z-10 max-w-4xl">
        <h1 className="font-display text-display-xl leading-[0.95] mb-6 hero-title-clip">
          Building things that <span className="italic">work</span>.
          <br />
          Securing things that{' '}
          <span className="text-primary" style={{ WebkitTextFillColor: '#c9beff' }}>
            matter
          </span>
          .
        </h1>
        <div className="flex flex-col items-center space-y-stack-sm">
          <p className="font-mono text-primary text-label-sm uppercase tracking-[0.3em] typewriter">
            {siteConfig.title}
          </p>
          <p className="font-body text-body-lg text-on-surface-variant max-w-2xl leading-relaxed opacity-80">
            {siteConfig.bio}
          </p>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-stack-md pt-stack-md">
          <a
            href="#work"
            className="inline-flex items-center justify-center h-12 bg-primary text-on-primary px-10 rounded-lg font-mono text-label-sm tracking-widest hover:shadow-[0_0_30px_rgba(157,141,241,0.5)] transition-all uppercase"
          >
            View Projects
          </a>
          <a
            href={siteConfig.cvUrl}
            className="inline-flex items-center justify-center gap-2 h-12 bg-surface/80 backdrop-blur-sm border border-white/20 text-on-surface px-10 rounded-lg font-mono text-label-sm tracking-widest hover:bg-surface hover:border-primary/50 transition-all uppercase"
          >
            <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>download</span>
            CV
          </a>
        </div>
      </div>
    </section>
  )
}
