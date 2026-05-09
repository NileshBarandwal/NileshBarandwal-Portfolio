import { achievements } from '../data/mockData'

export function Achievements() {
  return (
    <section id="achievements" className="px-gutter py-margin border-t border-outline-variant/10">
      <h2 className="font-display text-headline-lg tracking-widest text-on-surface/30 mb-margin uppercase">
        Achievements
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-stack-lg">
        {achievements.map((item) => (
          <div
            key={item.label}
            className="glass-card p-stack-lg rounded-xl relative overflow-hidden flex flex-col gap-stack-sm"
          >
            <span className="font-mono text-label-sm tracking-widest text-[#E97451] uppercase">
              {item.label}
            </span>
            <h3 className="font-display text-headline-md text-primary leading-tight">
              {item.title}
            </h3>
            <p className="font-mono text-label-sm text-on-surface-variant/60 tracking-widest uppercase">
              {item.subtitle}
            </p>
            <p className="font-body text-body-md text-on-surface-variant leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
