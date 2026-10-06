import { Logo } from './Logo'

export function Footer() {
  return (
    <footer>
      <Logo />
      <p>© {new Date().getFullYear()} — SAN JUAN, ARGENTINA</p>
      <a href="#inicio">VOLVER ARRIBA ↑</a>
    </footer>
  )
}
