const education = [
  {
    year: '2021 — 2025',
    title: 'Bachelor of Engineering (B.E.) in Computer Science',
    org: 'Sant Gadge Baba Amravati University, Amravati, Maharashtra',
  },
  {
    year: '2020 — 2021',
    title: 'Higher Secondary (12th Grade)',
    org: 'Matoshree Vimalabai Deshmukh Mahavidyalaya, Amravati, Maharashtra',
  },
  {
    year: '2018 — 2019',
    title: 'Secondary School (10th Grade)',
    org: 'Shri Shivaji Multi Purpose Higher Secondary School, Amravati, Maharashtra',
  },
]

const certs = [
  {
    title: 'Java Full Stack Development Training',
    sub: 'Naresh i Technologies, Hyderabad',
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 10v6M2 10l10-5 10 5-10 5-10-5z"/><path d="M6 12v5c0 1.66 2.69 3 6 3s6-1.34 6-3v-5"/></svg>,
  },
  {
    title: 'HackerRank Java Certificate',
    sub: 'Demonstrated skills in Java, OOP, and problem-solving',
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 15a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"/><path d="M8.5 13.5L7 22l5-3 5 3-1.5-8.5"/></svg>,
  },
  {
    title: 'HackerRank SQL Certificate',
    sub: 'Proficiency in queries, joins, and database operations',
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v14c0 1.7 3.6 3 8 3s8-1.3 8-3V5"/><path d="M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3"/></svg>,
  },
]

export default function Education() {
  return (
    <section id="education" className="reveal">
      <div className="container edu-cert-grid">
        <div>
          <span className="eyebrow">Education</span>
          <h2 style={{ marginBottom: 32 }}>Academic background</h2>
          <div className="timeline">
            {education.map((e) => (
              <div className="timeline-item" key={e.title}>
                <div className="timeline-dot"></div>
                <span className="yr">{e.year}</span>
                <h4>{e.title}</h4>
                <div className="org">{e.org}</div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <span className="eyebrow">Training & Certifications</span>
          <h2 style={{ marginBottom: 32 }}>Courses & credentials</h2>
          <div className="cert-list">
            {certs.map((c) => (
              <div className="cert-item" key={c.title}>
                <div className="cert-icon">{c.icon}</div>
                <div>
                  <h4>{c.title}</h4>
                  <p>{c.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}