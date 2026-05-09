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
    <section id="por" className="px-gutter py-margin border-t border-outline-variant/10">
      <h2 className="font-display text-headline-lg tracking-widest text-on-surface/30 mb-margin uppercase">
        Positions of Responsibility
      </h2>
      <div className="relative pl-margin border-l border-outline-variant/30 space-y-margin">
        {positions.map((item) => (
          <PoRItem key={item.role} item={item} />
        ))}
      </div>
    </section>
  )
}
