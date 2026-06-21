import { useState, useEffect } from 'react'
import useInView from '../hooks/useInView'

const categories = [
  {
    icon: '📊',
    name: 'Data Analysis',
    skills: [
      { name: 'Microsoft Excel', level: 'Expert', pct: 90 },
      { name: 'SQL', level: 'Advanced', pct: 82 },
      { name: 'Statistics', level: 'Intermediate', pct: 74 },
    ],
  },
  {
    icon: '📈',
    name: 'Data Visualization',
    skills: [
      { name: 'Power BI', level: 'Advanced', pct: 85 },
      { name: 'Tableau', level: 'Intermediate', pct: 76 },
    ],
  },
  {
    icon: '💻',
    name: 'Programming',
    skills: [
      { name: 'Python', level: 'Basic', pct: 55 },
      { name: 'R Programming', level: 'Intermediate', pct: 65 },
    ],
  },
]

const allTags = ['Excel', 'SQL', 'Power BI', 'Tableau', 'Python', 'R Programming', 'Statistics', 'Data Cleaning', 'Dashboard Design', 'Business Analysis', 'KPI Reporting', 'Data Modeling']

function Bar({ pct, visible }) {
  const [w, setW] = useState(0)
  useEffect(() => {
    if (visible) {
      const t = setTimeout(() => setW(pct), 250)
      return () => clearTimeout(t)
    }
  }, [visible, pct])
  return (
    <div className="bar-track">
      <div className="bar-fill" style={{ width: `${w}%`, transition: 'width 1.3s cubic-bezier(0.65,0,0.35,1)' }} />
    </div>
  )
}

function SkillCat({ cat, delay }) {
  const [ref, inView] = useInView()
  return (
    <div ref={ref} className={`skill-cat fade-up${inView ? ' visible' : ''}`} style={{ transitionDelay: `${delay}s` }}>
      <div className="cat-header">
        <div className="cat-icon">{cat.icon}</div>
        <span className="cat-name">{cat.name}</span>
      </div>
      <div className="skill-list">
        {cat.skills.map(s => (
          <div key={s.name} className="skill-row">
            <div className="skill-meta">
              <span className="skill-name">{s.name}</span>
              <span className="skill-level">{s.level}</span>
            </div>
            <Bar pct={s.pct} visible={inView} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Skills() {
  const [hRef, hIn] = useInView()
  const [tRef, tIn] = useInView()

  return (
    <section className="section skills" id="skills">
      <div className="container">
        <div className="section-header" ref={hRef}>
          <span className={`section-label fade-up${hIn ? ' visible' : ''}`}>What I Know</span>
          <h2 className={`section-title fade-up delay-1${hIn ? ' visible' : ''}`}>
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className={`section-sub fade-up delay-2${hIn ? ' visible' : ''}`}>
            A versatile toolkit built through hands-on projects, certifications, and continuous self-learning.
          </p>
        </div>

        <div className="skills-grid">
          {categories.map((cat, i) => (
            <SkillCat key={cat.name} cat={cat} delay={i * 0.15} />
          ))}
        </div>

        <div ref={tRef} className={`tag-cloud fade-up${tIn ? ' visible' : ''}`} style={{ transitionDelay: '0.2s' }}>
          {allTags.map(t => <span key={t} className="tag">{t}</span>)}
        </div>
      </div>
    </section>
  )
}
