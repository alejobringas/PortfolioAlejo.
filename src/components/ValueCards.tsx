import { CodeXml, Rocket, UserRound } from 'lucide-react'

const values = [
  {
    number: '01',
    title: 'CÓDIGO LIMPIO',
    description: 'Soluciones escalables, bien estructuradas y mantenibles.',
    Icon: CodeXml,
  },
  {
    number: '02',
    title: 'IMPACTO REAL',
    description: 'Aplicaciones que resuelven problemas y generan valor.',
    Icon: Rocket,
  },
  {
    number: '03',
    title: 'EXPERIENCIA INTUITIVA',
    description: 'Interfaces simples, rápidas y pensadas en el usuario.',
    Icon: UserRound,
  },
]

export function ValueCards() {
  return (
    <section className="value-grid" aria-label="Propuesta de valor">
      {values.map(({ number, title, description, Icon }, index) => (
        <article className={`value-card value-card-${index + 1}`} key={number}>
          <span className="value-number">{number}</span>
          <div className="value-content">
            <div>
              <h2>{title}</h2>
              <p>{description}</p>
            </div>
            <Icon size={62} strokeWidth={1.8} aria-hidden="true" />
          </div>
        </article>
      ))}
    </section>
  )
}
