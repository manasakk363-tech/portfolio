const links = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#certifications', label: 'Certifications' },
  { href: '#contact', label: 'Contact' },
]

export default function Footer() {
  const go = (e, href) => {
    e.preventDefault()
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-inner">
          <button className="footer-brand" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <span>MK.</span>
          </button>

          <p className="footer-copy">
            © {new Date().getFullYear()} Manasa K · Built with React &amp; ♥
          </p>

          <ul className="footer-nav">
            {links.map(l => (
              <li key={l.href}>
                <a href={l.href} onClick={e => go(e, l.href)}>{l.label}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  )
}
