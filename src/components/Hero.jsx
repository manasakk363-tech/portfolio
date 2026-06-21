import { useState, useEffect, useMemo } from 'react'

const roles = ['Data Analyst', 'Power BI Developer', 'Business Intelligence', 'SQL Expert', 'Tableau Specialist']

export default function Hero() {
  const [text, setText] = useState('')
  const [roleIdx, setRoleIdx] = useState(0)
  const [deleting, setDeleting] = useState(false)
  const [charIdx, setCharIdx] = useState(0)

  useEffect(() => {
    const current = roles[roleIdx]
    const speed = deleting ? 55 : 95
    const t = setTimeout(() => {
      if (!deleting) {
        if (charIdx < current.length) {
          setText(current.slice(0, charIdx + 1))
          setCharIdx(c => c + 1)
        } else {
          setTimeout(() => setDeleting(true), 1800)
        }
      } else {
        if (charIdx > 0) {
          setText(current.slice(0, charIdx - 1))
          setCharIdx(c => c - 1)
        } else {
          setDeleting(false)
          setRoleIdx(r => (r + 1) % roles.length)
        }
      }
    }, speed)
    return () => clearTimeout(t)
  }, [charIdx, deleting, roleIdx])

  const particles = useMemo(() =>
    Array.from({ length: 14 }, (_, i) => ({
      id: i,
      left: `${(i * 71 + 11) % 100}%`,
      top: `${(i * 53 + 7) % 100}%`,
      size: (i % 3) + 2,
      delay: (i * 0.8) % 6,
      dur: 4 + (i % 5),
    }))
  , [])

  const scroll = id => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section className="hero" id="home">
      <div className="hero-bg">
        <div className="hero-grid" />
        <div className="hero-blob hero-blob-1" />
        <div className="hero-blob hero-blob-2" />
        <div className="hero-blob hero-blob-3" />
        {particles.map(p => (
          <div key={p.id} style={{
            position: 'absolute',
            left: p.left, top: p.top,
            width: p.size, height: p.size,
            background: 'var(--purple)',
            borderRadius: '50%',
            opacity: 0.25,
            animation: `float ${p.dur}s ease-in-out ${p.delay}s infinite`,
            pointerEvents: 'none',
          }} />
        ))}
      </div>

      <div className="container">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="badge-dot" />
            Available for opportunities
          </div>

          <p className="hero-greeting">Hello, World! 👋</p>

          <h1 className="hero-name">
            I'm <span className="gradient-text">Manasa K</span>
          </h1>

          <div className="hero-role">
            <span className="typed">{text}</span>
            <span className="cursor" />
          </div>

          <p className="hero-desc">
            Aspiring Data Analyst skilled in Excel, SQL, Power BI &amp; Tableau.
            I transform raw data into interactive dashboards and actionable insights
            that drive smarter business decisions.
          </p>

          <div className="hero-actions">
            <button className="btn btn-primary" onClick={() => scroll('projects')}>
              View My Work <span>→</span>
            </button>
            <a
              href="https://www.linkedin.com/in/manasa-k-05a67a409/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
            >
              LinkedIn Profile
            </a>
          </div>

          <div className="hero-stats">
            <div>
              <div className="stat-num">9.21</div>
              <div className="stat-label">SGPA Score</div>
            </div>
            <div>
              <div className="stat-num">7+</div>
              <div className="stat-label">Skills</div>
            </div>
            <div>
              <div className="stat-num">2+</div>
              <div className="stat-label">Projects</div>
            </div>
            <div>
              <div className="stat-num">2</div>
              <div className="stat-label">Certifications</div>
            </div>
          </div>

          <div className="hero-socials">
            <a href="https://www.linkedin.com/in/manasa-k-05a67a409/" target="_blank" rel="noopener noreferrer" className="social-icon" title="LinkedIn">in</a>
            <a href="https://github.com/manasakk363-tech" target="_blank" rel="noopener noreferrer" className="social-icon" title="GitHub">GH</a>
            <a href="mailto:manasakk363@gmil.com" className="social-icon" title="Email">✉</a>
          </div>
        </div>
      </div>

      <div className="scroll-cue">
        <span>Scroll</span>
        <div className="scroll-line" />
      </div>
    </section>
  )
}
