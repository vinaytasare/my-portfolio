const stats = [
  { num: '2', label: 'Backend Projects' },
  { num: '2025', label: 'CSE Graduate' },
  { num: '7+', label: 'Core Technologies' },
  { num: '3', label: 'Certifications' },
]

const highlights = [
  {
    title: 'Layered Architecture',
    sub: 'Controller–Service–Repository',
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg>,
  },
  {
    title: 'REST API Design',
    sub: 'Clean, documented endpoints',
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 17V7a2 2 0 0 1 2-2h9l5 5v7a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z"/><path d="M15 5v4h4"/></svg>,
  },
  {
    title: 'Oracle SQL',
    sub: 'Normalized schema design',
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v14c0 1.7 3.6 3 8 3s8-1.3 8-3V5"/><path d="M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3"/></svg>,
  },
  {
    title: 'Git & GitHub',
    sub: 'Feature branching, PRs',
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 20l9-9-9-9-9 9 9 9z"/><path d="M12 20V4"/></svg>,
  },
]

export default function About() {
  return (
    <section id="about" className="reveal">
      <div className="container about-grid">
        <div>
          <div className="stat-card">
            <div className="stat-cols">
              {stats.map((s, i) => (
                <div key={s.label} style={i >= 2 ? { marginTop: 18 } : undefined}>
                  <div className="stat-num">{s.num}</div>
                  <div className="stat-label">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div>
          <span className="eyebrow">About Me</span>
          <h2>A backend developer who likes things well-structured</h2>
          <div className="about-copy" style={{ marginTop: 22 }}>
            <p>
              I'm a <strong>Backend Developer</strong> with hands-on experience building REST APIs
              and database-driven applications using <strong>Java and Spring Boot</strong>. I have a
              strong grip on object-oriented programming, layered architecture, and Oracle SQL —
              and I care about writing code that's easy for the next person to read.
            </p>
            <p>
              I'm a Computer Science graduate from Sant Gadge Baba Amravati University, and I
              completed a Java Full Stack Development training at Naresh i Technologies, Hyderabad.
              I'm eager to keep learning and to contribute to real-world software that people
              actually rely on.
            </p>
          </div>

          <div className="about-highlights">
            {highlights.map((h) => (
              <div className="highlight" key={h.title}>
                {h.icon}
                <div>
                  <div className="highlight-title">{h.title}</div>
                  <div className="highlight-sub">{h.sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
} 