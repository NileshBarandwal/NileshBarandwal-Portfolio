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
    <section id="experience" className="px-gutter py-margin border-t border-outline-variant/10">
      <h2 className="font-display text-headline-lg tracking-widest text-on-surface/30 mb-margin uppercase">
        Chronicle
      </h2>
      <div className="relative pl-margin border-l border-outline-variant/30 space-y-margin">
        {experience.map((item) => (
          <ChronicleItem key={item.company} item={item} />
        ))}
      </div>
    </section>
  )
}
