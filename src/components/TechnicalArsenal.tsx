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
    <section id="skills" className="my-margin px-gutter">
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
          <h2 className="font-display text-headline-lg mb-margin">Skills</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-gutter">
            {skillCategories.map((category) => (
              <SkillCard key={category.label} category={category} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
