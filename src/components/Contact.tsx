import { ArrowRight, Mail } from 'lucide-react'
import { contactEmail, socialLinks } from '../data/portfolio'

export function Contact() {
  return (
    <section className="contact" id="contacto" aria-labelledby="contact-title">
      <span className="contact-kicker">03 / CONTACTO</span>
      <h2 id="contact-title">HABLEMOS<span>.</span></h2>
      <p>¿Tenés una idea, un problema por resolver o un proyecto en mente? Podemos construirlo.</p>
      <div className="contact-actions">
        <a className="button contact-mail" href={`mailto:${contactEmail}`}>
          <Mail aria-hidden="true" /> ESCRIBIRME <ArrowRight aria-hidden="true" />
        </a>
        <div className="social-links" aria-label="Redes sociales">
          {socialLinks.map((link) => (
            <a href={link.href} key={link.label} target="_blank" rel="noreferrer">{link.label}</a>
          ))}
        </div>
      </div>
    </section>
  )
}
