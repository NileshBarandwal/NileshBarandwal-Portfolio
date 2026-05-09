import { researchData } from '../data/mockData'

export function ResearchSection() {
  return (
    <section id="research" className="my-margin px-gutter">
      {/* Cosmic card — matches "Nilesh | new" Stitch design */}
      <div
        className="relative overflow-hidden rounded-2xl border border-white/5 py-20 px-8 md:px-16 text-center"
        style={{
          background:
            'radial-gradient(ellipse 60% 80% at 20% 50%, rgba(110, 58, 170, 0.40) 0%, transparent 60%), radial-gradient(ellipse 60% 80% at 80% 50%, rgba(90, 45, 150, 0.35) 0%, transparent 60%), #0D0B14',
        }}
      >
        {/* Blurred glow orbs */}
        <div
          className="absolute top-1/2 left-[20%] -translate-y-1/2 w-72 h-72 rounded-full pointer-events-none"
          style={{ background: 'rgba(130, 70, 200, 0.22)', filter: 'blur(60px)' }}
        />
        <div
          className="absolute top-1/2 right-[20%] -translate-y-1/2 w-72 h-72 rounded-full pointer-events-none"
          style={{ background: 'rgba(100, 55, 170, 0.18)', filter: 'blur(60px)' }}
        />

        <div className="relative z-10 flex flex-col items-center space-y-stack-md w-full max-w-5xl mx-auto">

          {/* Label */}
          <p className="font-mono text-label-sm text-primary tracking-[0.4em] uppercase">
            {researchData.label}
          </p>

          {/* Title */}
          <h2 className="font-display text-headline-lg text-on-surface leading-tight uppercase tracking-tight">
            {researchData.title}
          </h2>

          {/* Pills */}
          <div className="flex flex-wrap justify-center gap-stack-sm">
            <span className="font-mono text-label-sm px-3 py-1 border border-outline-variant/50 rounded-full text-on-surface-variant">
              M.TECH THESIS
            </span>
            <span className="font-mono text-label-sm px-3 py-1 border border-outline-variant/50 rounded-full text-on-surface-variant">
              COMPLETED
            </span>
          </div>

          {/* Subtitle */}
          <p className="font-body text-body-md text-on-surface-variant opacity-80 w-full leading-relaxed">
            {researchData.subtitle}
          </p>

          {/* Description */}
          <p className="font-body text-body-md text-on-surface-variant opacity-80 w-full leading-relaxed">
            {researchData.description}
          </p>

          {/* Guide */}
          <p className="font-mono text-label-sm text-on-surface-variant/60 tracking-widest">
            {researchData.guide}
          </p>

          {/* CTA */}
          <a
            href={researchData.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-mono text-label-sm text-primary border border-primary/20 px-8 py-3 rounded-full hover:bg-primary/10 transition-all mt-stack-sm"
          >
            <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>open_in_new</span>
            View on GitHub
          </a>

        </div>
      </div>
    </section>
  )
}
