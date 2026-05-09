import { experience, type ExperienceItem } from '../data/mockData'

interface ChronicleItemProps {
  readonly item: ExperienceItem
}

function ChronicleItem({ item }: ChronicleItemProps) {
  return (
    <div className="relative group">
      <div
        className={`absolute -left-[69px] top-2 w-4 h-4 rounded-full transition-all ${
          item.active
            ? 'bg-primary shadow-[0_0_15px_#c9beff] group-hover:scale-150'
            : 'bg-outline-variant group-hover:bg-primary/50'
        }`}
      />
      <span
        className={`font-mono text-label-sm mb-2 block tracking-widest uppercase ${
          item.active ? 'text-primary' : 'text-on-surface-variant'
        }`}
      >
        {item.period}
      </span>
      <h3 className="font-display text-headline-md group-hover:text-primary transition-colors">
        {item.role} @ {item.company}
      </h3>
      <p className="text-on-surface-variant max-w-2xl mt-2 leading-relaxed font-body opacity-80">
        {item.description}
      </p>
    </div>
  )
}

export function Chronicle() {
  return (
    <section id="work" className="my-margin px-gutter">
      <div
        className="relative overflow-hidden rounded-2xl border border-white/5 py-16 px-8 md:px-16"
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
        <div className="relative z-10">
          <h2 className="font-display text-headline-lg tracking-widest text-on-surface/30 mb-margin uppercase">
            Experience
          </h2>
          <div className="relative pl-margin border-l border-outline-variant/30 space-y-margin">
            {experience.map((item) => (
              <ChronicleItem key={item.company} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
