import useInView from '../hooks/useInView'

const projects = [
  {
    icon: '🏥',
    badge: 'Data Analysis',
    title: 'Insurance Analytics',
    desc: 'Comprehensive analysis of insurance data to uncover patterns in claims, premium distributions, and customer segments. Built interactive Power BI dashboards to visualise risk factors and support underwriting decisions.',
    highlights: ['Risk pattern identification', 'Claims trend visualisation', 'Customer segmentation dashboard'],
    tags: ['Power BI', 'SQL', 'Excel', 'Statistics'],
    link: 'https://github.com/manasakk363-tech',
  },
  {
    icon: '📦',
    badge: 'Mini Project',
    title: 'Sales Dataset Analysis',
    desc: 'End-to-end sales data project covering data cleaning, exploratory analysis, and visualisation. Delivered Tableau dashboards showcasing monthly trends, regional performance, and product-level insights for stakeholder review.',
    highlights: ['Monthly & regional sales trends', 'Product performance insights', 'Interactive Tableau dashboard'],
    tags: ['Tableau', 'Excel', 'Python', 'Data Cleaning'],
    link: 'https://github.com/manasakk363-tech',
  },
]

function ProjectCard({ p, delay }) {
  const [ref, inView] = useInView()
  return (
    <div ref={ref} className={`project-card fade-up${inView ? ' visible' : ''}`} style={{ transitionDelay: `${delay}s` }}>
      <div className="project-top">
        <div className="project-icon">{p.icon}</div>
        <span className="project-badge">{p.badge}</span>
      </div>
      <h3 className="project-title">{p.title}</h3>
      <p className="project-desc">{p.desc}</p>
      <ul className="project-highlights">
        {p.highlights.map(h => <li key={h}>{h}</li>)}
      </ul>
      <div className="project-tags">
        {p.tags.map(t => <span key={t} className="project-tag">{t}</span>)}
      </div>
      <a href={p.link} target="_blank" rel="noopener noreferrer" className="project-link">
        View on GitHub <span>→</span>
      </a>
    </div>
  )
}

export default function Projects() {
  const [hRef, hIn] = useInView()
  return (
    <section className="section projects" id="projects">
      <div className="container">
        <div className="section-header" ref={hRef}>
          <span className={`section-label fade-up${hIn ? ' visible' : ''}`}>My Work</span>
          <h2 className={`section-title fade-up delay-1${hIn ? ' visible' : ''}`}>
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className={`section-sub fade-up delay-2${hIn ? ' visible' : ''}`}>
            Real-world analytics projects demonstrating my ability to extract actionable insights from data.
          </p>
        </div>
        <div className="projects-grid">
          {projects.map((p, i) => <ProjectCard key={p.title} p={p} delay={i * 0.15} />)}
        </div>
      </div>
    </section>
  )
}
