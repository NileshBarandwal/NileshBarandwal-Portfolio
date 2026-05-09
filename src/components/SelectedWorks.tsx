import { projects, type Project } from '../data/mockData'

interface ProjectCardProps {
  readonly project: Project
}

function ProjectCard({ project }: ProjectCardProps) {
  const isFullWidth = project.span === 'md:col-span-12'

  return (
    <div
      className={`${project.span} glass-card p-stack-lg rounded-xl relative overflow-hidden flex ${
        isFullWidth ? 'flex-col md:flex-row justify-between items-center min-h-[200px]' : 'flex-col justify-between min-h-[320px]'
      }`}
    >
      <div className={isFullWidth ? 'flex flex-col' : ''}>
        {project.backgroundWord && (
          <div
            className="absolute -right-8 -bottom-4 font-mono text-primary/5 leading-none select-none font-bold"
            style={{ fontSize: isFullWidth ? '70px' : '90px' }}
          >
            {project.backgroundWord}
          </div>
        )}
        <h3 className="font-display text-headline-md mb-stack-sm text-primary">{project.title}</h3>
        <p className={`text-on-surface-variant leading-relaxed ${isFullWidth ? 'max-w-xl' : 'max-w-md mb-margin'}`}>
          {project.description}
        </p>
      </div>

      {project.tags.length > 0 && (
        <div className="flex gap-2 mt-auto pt-stack-md">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-primary/10 rounded-full text-label-sm font-mono border border-primary/20 text-primary"
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      {project.status && (
        <div className="mt-margin md:mt-0 flex flex-col items-end">
          <span className="font-mono text-primary text-label-sm mb-2 tracking-widest">{project.status}</span>
          <div className="h-1.5 w-48 bg-outline-variant/30 rounded-full overflow-hidden">
            <div
              className="h-full bg-primary shadow-[0_0_10px_rgba(201,190,255,0.8)]"
              style={{ width: `${project.progress}%` }}
            />
          </div>
        </div>
      )}
    </div>
  )
}

export function SelectedWorks() {
  return (
    <section id="work" className="px-gutter py-margin">
      <h2 className="font-display text-headline-lg mb-margin tracking-tight">SELECTED WORKS</h2>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  )
}
