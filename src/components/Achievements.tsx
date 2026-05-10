import { achievements } from '../data/mockData'

export function Achievements() {
  return (
    <section id="achievements" className="my-margin px-gutter">
      <div
        className="relative overflow-hidden rounded-2xl border border-white/5 py-16 px-8 md:px-16"
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

        <div className="relative z-10">
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
        </div>
      </div>
    </section>
  )
}
