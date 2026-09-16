import profileImg from '../assets/profile.png'

export default function Hero() {
  const techPills = [
    { label: 'Java', color: '#2563eb' },
    { label: 'SQL', color: '#f59e0b' },
    { label: 'Spring Boot', color: '#ec4899' },
    { label: 'Hibernate', color: '#22c55e' },
    { label: 'REST APIs', color: '#a855f7' },
  ]

  return (
    <section className="hero" id="home">
      <div className="blob blob-1"></div>
      <div className="blob blob-2"></div>
      <div className="blob blob-3"></div>

      <div className="container hero-grid">
        <div>
          <div className="hero-hi">Hey there! I'm</div>
          <h1>Vinay<br />Tasare</h1>
          <div className="hero-role">
            I'm a <span className="accent">Backend Developer</span>
            <span className="cursor"></span>
          </div>
          <p className="lead">
            I build REST APIs and database-driven applications with Java and Spring Boot —
            focused on clean, layered architecture and code that's easy to maintain.
          </p>

          <div className="pill-row">
            {techPills.map((p) => (
              <span key={p.label} className="tech-pill" style={{ background: p.color }}>
                {p.label}
              </span>
            ))}
          </div>

          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">View My Work</a>
            <a href={`${import.meta.env.BASE_URL}resume.pdf`} download className="btn btn-ghost">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
              Resume
            </a>
            <a href="#contact" className="btn btn-ghost">Let's Talk</a>
          </div>

          <div className="social-row">
            <span>Follow me:</span>
            <a href="https://github.com/vinaytasare" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.57.1.78-.25.78-.55v-2.15c-3.2.7-3.87-1.34-3.87-1.34-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.23-1.28-5.23-5.68 0-1.25.45-2.28 1.19-3.08-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.24 2.76.12 3.05.74.8 1.19 1.83 1.19 3.08 0 4.41-2.69 5.38-5.25 5.67.41.36.78 1.06.78 2.14v3.17c0 .3.21.66.79.55A10.51 10.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z"/></svg>
            </a>
            <a href="https://linkedin.com/in/vinay-tasare" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.15 1.45-2.15 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.61 0 4.28 2.38 4.28 5.47v6.27zM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45z"/></svg>
            </a>
            <a href="mailto:vinaytasare123@gmail.com" aria-label="Email">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 6l-10 7L2 6"/><rect x="2" y="4" width="20" height="16" rx="2"/></svg>
            </a>
          </div>
        </div>

        <div className="avatar-wrap">
          <div className="avatar-ring"></div>

          <div className="avatar-inner">
            <img src={profileImg} alt="Vinay Tasare" className="avatar-photo" />
          </div>
        </div>
      </div>
    </section>
  )
}