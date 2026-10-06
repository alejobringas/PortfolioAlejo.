type SectionHeadingProps = {
  number: string
  eyebrow: string
  children: React.ReactNode
}

export function SectionHeading({ number, eyebrow, children }: SectionHeadingProps) {
  return (
    <div className="section-heading">
      <span className="section-number">{number}</span>
      <div>
        <span className="section-eyebrow">{eyebrow}</span>
        <h2>{children}</h2>
      </div>
    </div>
  )
}
