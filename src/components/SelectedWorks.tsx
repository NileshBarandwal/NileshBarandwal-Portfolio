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
    <section id="projects" className="my-margin px-gutter">
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
          <h2 className="font-display text-headline-lg mb-margin tracking-tight">SELECTED WORKS</h2>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
            {projects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
