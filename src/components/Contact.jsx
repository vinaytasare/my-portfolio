import { useState } from 'react'

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mppwawvb'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setStatus('success')
        setForm({ name: '', email: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="reveal">
      <div className="container">
        <div className="contact-panel">
          <div className="contact-left">
            <h2>Let's build something reliable together</h2>
            <p>I'm open to backend developer roles and freelance work. Reach out and I'll get back to you as soon as I can.</p>

            <div className="contact-methods">
              <div className="contact-method">
                <div className="ci">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 6l-10 7L2 6"/><rect x="2" y="4" width="20" height="16" rx="2"/></svg>
                </div>
                <div><div className="cl">Email</div><div className="cv">vinaytasare123@gmail.com</div></div>
              </div>

              <div className="contact-method">
                <div className="ci">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.68 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.32 1.85.55 2.81.68A2 2 0 0 1 22 16.92z"/></svg>
                </div>
                <div><div className="cl">Phone</div><div className="cv">+91 96890 73927</div></div>
              </div>

              <div className="contact-method">
                <div className="ci">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                </div>
                <div><div className="cl">Location</div><div className="cv">Amravati, Maharashtra, India</div></div>
              </div>
            </div>
          </div>

          <div className="contact-card">
            <h3>Send a message</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <label htmlFor="name">Name</label>
                <input id="name" name="name" type="text" required placeholder="Your name" value={form.name} onChange={handleChange} />
              </div>
              <div className="form-row">
                <label htmlFor="email">Email</label>
                <input id="email" name="email" type="email" required placeholder="you@example.com" value={form.email} onChange={handleChange} />
              </div>
              <div className="form-row">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" required placeholder="What would you like to talk about?" value={form.message} onChange={handleChange} />
              </div>
              <button type="submit" className="form-submit" disabled={status === 'sending'}>
                {status === 'sending' ? 'Sending...' : 'Send Message'}
              </button>
              {status === 'success' && (
                <p className="form-status form-status-ok">Thanks! Your message has been sent — I'll get back to you soon.</p>
              )}
              {status === 'error' && (
                <p className="form-status form-status-err">Something went wrong. Please try again, or email me directly at vinaytasare123@gmail.com.</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}