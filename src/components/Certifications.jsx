import useInView from '../hooks/useInView'

const certs = [
  {
    icon: '🏆',
    title: 'Certificate of Excellence – Data Analyst',
    issuer: 'Coursera × EXCELR',
    date: '2026',
    desc: 'Comprehensive data analytics programme covering statistical analysis, data visualisation, SQL, Excel, and business intelligence tools including Power BI.',
  },
  {
    icon: '📜',
    title: 'Certificate Program in Data Analyst',
    issuer: 'NASSCOM',
    date: 'June 2026',
    desc: 'National-level certification in data analytics covering Python basics, SQL, Tableau, data cleaning methodologies, and business analytics fundamentals.',
  },
]

function CertCard({ c, delay }) {
  const [ref, inView] = useInView()
  return (
    <div ref={ref} className={`cert-card fade-up${inView ? ' visible' : ''}`} style={{ transitionDelay: `${delay}s` }}>
      <div className="cert-badge">{c.icon}</div>
      <div className="cert-body">
        <div className="cert-title">{c.title}</div>
        <div className="cert-issuer">{c.issuer}</div>
        <div className="cert-date">📅 {c.date}</div>
        <p className="cert-desc">{c.desc}</p>
      </div>
      <div className="cert-check">✓</div>
    </div>
  )
}

export default function Certifications() {
  const [hRef, hIn] = useInView()
  return (
    <section className="section certifications" id="certifications">
      <div className="container">
        <div className="section-header" ref={hRef}>
          <span className={`section-label fade-up${hIn ? ' visible' : ''}`}>Achievements</span>
          <h2 className={`section-title fade-up delay-1${hIn ? ' visible' : ''}`}>
            My <span className="gradient-text">Certifications</span>
          </h2>
          <p className={`section-sub fade-up delay-2${hIn ? ' visible' : ''}`}>
            Industry-recognised credentials that validate my skills in data analytics.
          </p>
        </div>
        <div className="cert-grid">
          {certs.map((c, i) => <CertCard key={c.title} c={c} delay={i * 0.15} />)}
        </div>
      </div>
    </section>
  )
}
