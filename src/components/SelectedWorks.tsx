import { projects, type Project } from '../data/mockData'

interface ProjectCardProps {
  readonly project: Project
}

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div
      className={`${project.span} glass-card p-stack-lg rounded-xl relative overflow-hidden flex flex-col justify-between min-h-[300px]`}
    >
      {project.backgroundWord && (
        <div className="absolute -right-8 -bottom-4 font-mono text-primary/5 leading-none select-none font-bold text-[90px]">
          {project.backgroundWord}
        </div>
      )}

      <div>
        <h3 className="font-display text-headline-md mb-stack-sm text-primary">{project.title}</h3>
        <p className="text-on-surface-variant leading-relaxed max-w-md">{project.description}</p>
      </div>

      <div className="flex flex-col gap-stack-sm mt-stack-md">
        {project.tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
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

        <div className="flex gap-4 pt-1">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-mono text-label-sm text-primary hover:underline tracking-widest uppercase"
            >
              <span className="material-symbols-outlined" style={{ fontSize: '14px' }}>open_in_new</span>
              Live
            </a>
          )}
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-mono text-label-sm text-on-surface-variant hover:text-primary transition-colors tracking-widest uppercase"
            >
              <span className="material-symbols-outlined" style={{ fontSize: '14px' }}>code</span>
              GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

export function SelectedWorks() {
  return (
    <section id="projects" className="px-gutter py-margin">
      <h2 className="font-display text-headline-lg mb-margin tracking-tight">SELECTED WORKS</h2>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  )
}
