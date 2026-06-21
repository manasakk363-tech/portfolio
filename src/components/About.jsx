import useInView from '../hooks/useInView'

export default function About() {
  const [hRef, hIn] = useInView()
  const [lRef, lIn] = useInView()
  const [rRef, rIn] = useInView()

  return (
    <section className="section about" id="about">
      <div className="container">
        <div className="section-header" ref={hRef}>
          <span className={`section-label fade-up${hIn ? ' visible' : ''}`}>Who I Am</span>
          <h2 className={`section-title fade-up delay-1${hIn ? ' visible' : ''}`}>
            About <span className="gradient-text">Me</span>
          </h2>
        </div>

        <div className="about-grid">
          <div className={`about-visual fade-left${lIn ? ' visible' : ''}`} ref={lRef}>
            <div className="about-card">
              <div className="about-avatar">👩‍💻</div>
              <div className="about-card-name">Manasa K</div>
              <div className="about-card-role">Data Analyst · BI Developer</div>
              <ul className="about-info">
                <li className="about-info-row">
                  <span className="info-icon">🎓</span>
                  <span>B.Com — Govt. First Grade College Holehonnur</span>
                </li>
                <li className="about-info-row">
                  <span className="info-icon">🏆</span>
                  <span>SGPA 9.21 / 10 &nbsp;(2021 – 2024)</span>
                </li>
                <li className="about-info-row">
                  <span className="info-icon">📧</span>
                  <span>manasakk363@gmil.com</span>
                </li>
                <li className="about-info-row">
                  <span className="info-icon">📍</span>
                  <span>Holehonnur, Karnataka, India</span>
                </li>
                <li className="about-info-row">
                  <span className="info-icon" style={{ background: 'rgba(34,197,94,0.1)' }}>✅</span>
                  <span>Open to full-time opportunities</span>
                </li>
              </ul>
              <div className="about-float">
                <div className="float-num">9.21</div>
                <div className="float-label">B.Com SGPA</div>
              </div>
            </div>
          </div>

          <div className={`about-text fade-right${rIn ? ' visible' : ''}`} ref={rRef}>
            <h2>
              Turning Data Into<br />
              <span className="gradient-text">Business Insights</span>
            </h2>

            <p className="about-desc">
              Aspiring Business Analyst with a strong foundation in Excel, SQL,
              Power BI, and basic Python. Skilled in data cleaning, exploratory
              analysis, and building interactive dashboards that support
              business insights.
            </p>
            <p className="about-desc">
              Recently completed dual certifications from Coursera EXCELR and
              NASSCOM. Quick learner eager to contribute to data-driven
              decision-making in a professional environment.
            </p>

            <div className="highlights">
              <div className="highlight-item">
                <span className="hi-icon">📊</span>
                <div>
                  <div className="hi-title">Data Analysis</div>
                  <div className="hi-sub">Excel · SQL · Python</div>
                </div>
              </div>
              <div className="highlight-item">
                <span className="hi-icon">📈</span>
                <div>
                  <div className="hi-title">Visualization</div>
                  <div className="hi-sub">Power BI · Tableau</div>
                </div>
              </div>
              <div className="highlight-item">
                <span className="hi-icon">🎓</span>
                <div>
                  <div className="hi-title">Education</div>
                  <div className="hi-sub">B.Com Graduate</div>
                </div>
              </div>
              <div className="highlight-item">
                <span className="hi-icon">📜</span>
                <div>
                  <div className="hi-title">Certified</div>
                  <div className="hi-sub">Coursera &amp; NASSCOM</div>
                </div>
              </div>
            </div>

            <a
              href="https://www.linkedin.com/in/manasa-k-05a67a409/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              View LinkedIn Profile →
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
