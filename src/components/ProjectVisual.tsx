import type { Project } from '../data/portfolio'

export function ProjectVisual({ project }: { project: Project }) {
  return (
    <a
      className="project-visual"
      href={project.liveUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Abrir ${project.name} en una pestaña nueva`}
    >
      <div className="project-browser">
        <div className="project-browser-bar" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
        <div className="project-browser-viewport">
          <img
            className="project-screenshot"
            src={project.image}
            alt={`Vista previa de ${project.name}`}
            width="1440"
            height="900"
            loading="lazy"
            decoding="async"
            style={{ objectPosition: project.imagePosition }}
          />
        </div>
      </div>
    </a>
  )
}
