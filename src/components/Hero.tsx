import { ArrowRight } from 'lucide-react'

export function Hero() {
  return (
    <section className="hero" id="inicio" aria-labelledby="hero-title">
      <div className="hero-copy">
        <h1 id="hero-title">
          <span className="headline-word">DESARROLLO</span>
          <span className="headline-word">ES</span>
          <span className="solution"><span className="solution-text">SOLUCIÓN<span className="green-dot">.</span></span></span>
        </h1>
        <p className="hero-intro">
          CREO <strong>APLICACIONES</strong> Y EXPERIENCIAS DIGITALES <br />
          QUE SIMPLIFICAN PROCESOS.
        </p>
        <div className="hero-actions">
          <a className="button button-primary" href="#proyectos">
            VER PROYECTOS <ArrowRight size={20} aria-hidden="true" />
          </a>
          <a className="text-link" href="#contacto">CONTACTARME</a>
        </div>
      </div>
      <div className="hero-visual">
        <img
          src="/assets/hero-electronics-workspace.png"
          alt="Escritorio voxel con monitor, teclado, placa electrónica, soldador, componentes, lámpara, taza y planta"
          width="1400"
          height="1186"
        />
        <div className="visual-label" aria-hidden="true">
          <span>DESARROLLO</span>
          <span>ELECTRÓNICA</span>
        </div>
      </div>
    </section>
  )
}
