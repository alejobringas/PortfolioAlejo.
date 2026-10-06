import { projects } from '../data/portfolio'
import { ProjectCard } from './ProjectCard'
import { SectionHeading } from './SectionHeading'

export function Projects() {
  return (
    <section className="projects section-shell" id="proyectos" aria-labelledby="projects-title">
      <SectionHeading number="02" eyebrow="PROYECTOS">
        <span id="projects-title">TRABAJOS.</span>
      </SectionHeading>
      <div className="projects-list">
        {projects.map((project, index) => (
          <ProjectCard project={project} index={index} key={project.name} />
        ))}
      </div>
    </section>
  )
}
