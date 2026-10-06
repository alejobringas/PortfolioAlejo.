import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { navItems } from '../data/portfolio'
import { Logo } from './Logo'

export function Header() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    document.body.classList.toggle('menu-open', open)
    return () => document.body.classList.remove('menu-open')
  }, [open])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting)
        if (visible) setActive(visible.target.id)
      },
      { rootMargin: '-35% 0px -55% 0px' },
    )
    navItems.forEach(({ id }) => {
      const section = document.getElementById(id)
      if (section) observer.observe(section)
    })
    return () => observer.disconnect()
  }, [])

  const closeMenu = () => setOpen(false)

  return (
    <header className="site-header">
      <div className="header-inner">
        <Logo />
        <nav className="desktop-nav" aria-label="Navegación principal">
          {navItems.map((item) => (
            <a className={active === item.id ? 'active' : ''} href={item.href} key={item.id}>
              {item.label}
            </a>
          ))}
        </nav>
        <button
          className="menu-toggle"
          type="button"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </div>
      <nav
        className={`mobile-menu ${open ? 'is-open' : ''}`}
        id="mobile-menu"
        aria-label="Navegación móvil"
        aria-hidden={!open}
      >
        {navItems.map((item, index) => (
          <a href={item.href} onClick={closeMenu} key={item.id} tabIndex={open ? 0 : -1}>
            <span>0{index + 1}</span>{item.label}
          </a>
        ))}
      </nav>
    </header>
  )
}
