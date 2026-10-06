import { ArrowUpRight } from 'lucide-react'
import type { Project } from '../data/portfolio'
import { ProjectVisual } from './ProjectVisual'

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <article className={`project-card ${index % 2 === 1 ? 'project-dark' : ''}`}>
      <div className="project-info">
        <div className="project-meta">
          <span className="project-number">{project.number}</span>
          <span>{project.category}</span>
        </div>
        <h3>{project.name}</h3>
        <p>{project.description}</p>
        <ul className="project-tech" aria-label={`Tecnologías de ${project.name}`}>
          {project.tags.map((tag) => <li key={tag}>{tag}</li>)}
        </ul>
        <div className="project-actions">
          <a
            className="button project-button"
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            VER PROYECTO <ArrowUpRight size={18} aria-hidden="true" />
          </a>
        </div>
      </div>
      <ProjectVisual project={project} />
    </article>
  )
}
