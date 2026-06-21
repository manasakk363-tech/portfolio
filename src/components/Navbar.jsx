import { useState, useEffect } from 'react'

const links = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#certifications', label: 'Certifications' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20)
      const pos = window.scrollY + 120
      for (let i = links.length - 1; i >= 0; i--) {
        const el = document.getElementById(links[i].href.slice(1))
        if (el && pos >= el.offsetTop) {
          setActive(links[i].href.slice(1))
          return
        }
      }
      setActive('')
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const go = (e, href) => {
    e.preventDefault()
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
    setOpen(false)
  }

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
      <div className="container">
        <div className="nav-inner">
          <button className="nav-logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <span>MK.</span>
          </button>

          <ul className="nav-links">
            {links.map(l => (
              <li key={l.href}>
                <a href={l.href} className={active === l.href.slice(1) ? 'active' : ''} onClick={e => go(e, l.href)}>
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a href="#contact" className="nav-cta" onClick={e => go(e, '#contact')}>Hire Me</a>
            </li>
          </ul>

          <button className={`hamburger${open ? ' open' : ''}`} onClick={() => setOpen(p => !p)} aria-label="menu">
            <span /><span /><span />
          </button>
        </div>

        <div className={`mobile-nav${open ? ' open' : ''}`}>
          {links.map(l => (
            <a key={l.href} href={l.href} onClick={e => go(e, l.href)}>{l.label}</a>
          ))}
          <a href="#contact" onClick={e => go(e, '#contact')} style={{ color: 'var(--purple)', fontWeight: 700 }}>Hire Me →</a>
        </div>
      </div>
    </nav>
  )
}
