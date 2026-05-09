import { researchQuote } from '../data/mockData'

export function ResearchSection() {
  return (
    <section id="lab" className="my-margin py-margin px-gutter relative overflow-hidden">
      <div className="absolute inset-0 bg-primary/5 -skew-y-1" />
      <div className="max-w-4xl mx-auto text-center space-y-stack-md relative z-10 py-margin">
        <span className="font-mono text-primary text-label-sm tracking-[0.4em] uppercase">
          {researchQuote.label}
        </span>
        <h2 className="font-display text-headline-lg italic leading-tight">{researchQuote.quote}</h2>
        <a
          href={researchQuote.href}
          className="inline-flex items-center gap-stack-sm font-mono text-label-sm text-primary group border border-primary/20 px-8 py-4 rounded-full hover:bg-primary/10 transition-all mt-stack-md"
        >
          <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
            article
          </span>
          {researchQuote.cta}
        </a>
      </div>
    </section>
  )
}
