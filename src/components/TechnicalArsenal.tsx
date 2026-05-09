import { skillCategories, type SkillCategory } from '../data/mockData'

interface SkillCardProps {
  readonly category: SkillCategory
}

function SkillCard({ category }: SkillCardProps) {
  return (
    <div className="space-y-stack-md p-gutter glass-card rounded-xl">
      <h4 className="font-mono text-label-sm text-primary tracking-widest uppercase">
        {category.label}
      </h4>
      <div className="flex flex-wrap gap-2">
        {category.skills.map((skill) => (
          <span
            key={skill}
            className="px-3 py-1.5 border border-outline-variant/50 rounded-lg font-mono text-[13px] hover:border-primary transition-colors cursor-default"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  )
}

export function TechnicalArsenal() {
  return (
    <section className="px-gutter py-margin">
      <h2 className="font-display text-headline-lg mb-margin">THE TECHNICAL ARSENAL</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
        {skillCategories.map((category) => (
          <SkillCard key={category.label} category={category} />
        ))}
      </div>
    </section>
  )
}
