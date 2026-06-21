import { useState } from 'react'
import useInView from '../hooks/useInView'

const WEB3FORMS_KEY = 'dfd00b61-3178-401a-8681-0387d3b1fcfa'

export default function Contact() {
  const [hRef, hIn] = useInView()
  const [lRef, lIn] = useInView()
  const [rRef, rIn] = useInView()

  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState(null)

  const onChange = e => setForm(p => ({ ...p, [e.target.name]: e.target.value }))

  const onSubmit = async e => {
    e.preventDefault()
    setStatus('loading')
    const data = new FormData()
    data.append('access_key', WEB3FORMS_KEY)
    data.append('name', form.name)
    data.append('email', form.email)
    data.append('subject', form.subject || 'Portfolio Contact')
    data.append('message', form.message)
    try {
      const res = await fetch('https://api.web3forms.com/submit', { method: 'POST', body: data })
      const json = await res.json()
      if (json.success) {
        setStatus('success')
        setForm({ name: '', email: '', subject: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    } finally {
      setTimeout(() => setStatus(null), 5000)
    }
  }

  return (
    <section className="section contact" id="contact">
      <div className="container">
        <div className="section-header" ref={hRef}>
          <span className={`section-label fade-up${hIn ? ' visible' : ''}`}>Let's Connect</span>
          <h2 className={`section-title fade-up delay-1${hIn ? ' visible' : ''}`}>
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className={`section-sub fade-up delay-2${hIn ? ' visible' : ''}`}>
            Have an opportunity or project in mind? I'd love to hear from you!
          </p>
        </div>

        <div className="contact-grid">
          {/* Left */}
          <div className={`contact-info fade-left${lIn ? ' visible' : ''}`} ref={lRef}>
            <h3>Let's Work Together</h3>
            <p>
              I'm actively seeking roles in data analysis, business intelligence,
              and reporting. Whether it's a full-time role, internship, or a
              freelance project — let's talk data!
            </p>

            <div className="contact-methods">
              <div className="c-method">
                <div className="c-method-icon">✉️</div>
                <div>
                  <div className="c-method-label">Email</div>
                  <div className="c-method-val">manasakk363@gmil.com</div>
                </div>
              </div>
              <div className="c-method">
                <div className="c-method-icon">💼</div>
                <div>
                  <div className="c-method-label">LinkedIn</div>
                  <div className="c-method-val">manasa-k-05a67a409</div>
                </div>
              </div>
              <div className="c-method">
                <div className="c-method-icon">🎓</div>
                <div>
                  <div className="c-method-label">Education</div>
                  <div className="c-method-val">B.Com — SGPA 9.21/10</div>
                </div>
              </div>
            </div>

            <div className="contact-socials">
              <a href="https://www.linkedin.com/in/manasa-k-05a67a409/" target="_blank" rel="noopener noreferrer" className="contact-soc-btn">
                💼 LinkedIn
              </a>
              <a href="https://github.com/manasakk363-tech" target="_blank" rel="noopener noreferrer" className="contact-soc-btn">
                🐙 GitHub
              </a>
            </div>
          </div>

          {/* Right */}
          <div className={`fade-right${rIn ? ' visible' : ''}`} ref={rRef}>
            <div className="form-wrap">
              <div className="form-title">Send a Message ✉️</div>
              <form onSubmit={onSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">Name *</label>
                    <input name="name" type="text" className="form-input" placeholder="Your full name" value={form.name} onChange={onChange} required />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Email *</label>
                    <input name="email" type="email" className="form-input" placeholder="your@email.com" value={form.email} onChange={onChange} required />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Subject</label>
                  <input name="subject" type="text" className="form-input" placeholder="What's this about?" value={form.subject} onChange={onChange} />
                </div>

                <div className="form-group">
                  <label className="form-label">Message *</label>
                  <textarea name="message" className="form-textarea" placeholder="Tell me about the opportunity..." value={form.message} onChange={onChange} required />
                </div>

                <button type="submit" className="form-btn" disabled={status === 'loading'}>
                  {status === 'loading' ? '⏳ Sending...' : '🚀 Send Message'}
                </button>

                {status === 'success' && (
                  <div className="form-status success">✅ Message sent! I'll get back to you soon.</div>
                )}
                {status === 'error' && (
                  <div className="form-status error">❌ Something went wrong. Please try again.</div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
