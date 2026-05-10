import { positions, type PositionItem } from '../data/mockData'

interface PoRItemProps {
  readonly item: PositionItem
}

function PoRItem({ item }: PoRItemProps) {
  return (
    <div className="relative group">
      <div className="absolute -left-[69px] top-2 w-4 h-4 rounded-full bg-outline-variant group-hover:bg-primary/50 transition-all" />
      <span className="font-mono text-label-sm mb-2 block tracking-widest uppercase text-on-surface-variant">
        {item.period}
      </span>
      <h3 className="font-display text-headline-md text-primary group-hover:text-primary/80 transition-colors">
        {item.role}
      </h3>
      <p className="font-mono text-label-sm text-on-surface-variant/60 tracking-widest uppercase mt-1">
        {item.org}
      </p>
      <p className="text-on-surface-variant max-w-2xl mt-2 leading-relaxed font-body opacity-80">
        {item.description}
      </p>
    </div>
  )
}

export function PositionsOfResponsibility() {
  return (
    <section id="por" className="my-margin px-gutter">
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
            Positions of Responsibility
          </h2>
          <div className="relative pl-margin border-l border-outline-variant/30 space-y-margin">
            {positions.map((item) => (
              <PoRItem key={item.role} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
