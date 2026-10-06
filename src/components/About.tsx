import { Cpu, MonitorCog, Wrench } from 'lucide-react'
import { technologies } from '../data/portfolio'
import { SectionHeading } from './SectionHeading'

export function About() {
  return (
    <section className="about section-shell" id="sobre-mi" aria-labelledby="about-title">
      <div className="about-intro">
        <div className="about-copy">
          <SectionHeading number="01" eyebrow="SOBRE MÍ">
            <span id="about-title">CONSTRUIR. ENTENDER. MEJORAR.</span>
          </SectionHeading>
          <div className="about-statement">
            <p>
              Soy Alejo Bringas, desarrollador web y de aplicaciones de escritorio de <strong>San Juan, Argentina.</strong> Creo aplicaciones y
              experiencias digitales orientadas a resolver problemas reales.
            </p>
            <p>
              Desarrollo proyectos bajo ARCH Studio. También me interesa la electrónica y la reparación de hardware, áreas que complementan
              mi forma de analizar, construir y mejorar productos tecnológicos.
            </p>
          </div>
        </div>
        <figure className="about-photo">
          <img
            src="/assets/alejo-portrait.png"
            alt="Retrato de Alejo"
            width="1157"
            height="1210"
          />
        </figure>
      </div>
      <div className="about-disciplines">
        <article>
          <MonitorCog aria-hidden="true" />
          <span>01</span>
          <h3>DESARROLLO WEB</h3>
        </article>
        <article>
          <Cpu aria-hidden="true" />
          <span>02</span>
          <h3>ELECTRÓNICA</h3>
        </article>
        <article>
          <Wrench aria-hidden="true" />
          <span>03</span>
          <h3>HARDWARE</h3>
        </article>
      </div>
      <div className="tech-list" aria-label="Tecnologías">
        {technologies.map((technology) => <span key={technology}>{technology}</span>)}
      </div>
    </section>
  )
}
