const skillGroups = [
  {
    title: 'Programming Languages',
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>,
    chips: [
      { label: 'Java', color: '#2563eb' },
      { label: 'SQL', color: '#f59e0b' },
      { label: 'JavaScript', color: '#eab308' },
    ],
  },
  {
    title: 'Backend & Frameworks',
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 12l2-2 4 4 8-8 2 2-10 10z"/></svg>,
    chips: [
      { label: 'Spring Boot', color: '#22c55e' },
      { label: 'Spring MVC', color: '#16a34a' },
      { label: 'Spring Data JPA', color: '#0ea5e9' },
      { label: 'Hibernate', color: '#a855f7' },
      { label: 'RESTful APIs', color: '#ec4899' },
    ],
  },
  {
    title: 'Database',
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v14c0 1.7 3.6 3 8 3s8-1.3 8-3V5"/><path d="M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3"/></svg>,
    chips: [
      { label: 'Oracle Database', color: '#f97316' },
      { label: 'PL/SQL', color: '#dc2626' },
    ],
  },
  {
    title: 'Frontend',
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="14" rx="2"/><path d="M8 21h8M12 18v3"/></svg>,
    chips: [
      { label: 'HTML5', color: '#f97316' },
      { label: 'CSS3', color: '#3b82f6' },
      { label: 'Bootstrap', color: '#7c3aed' },
      { label: 'React.js', color: '#06b6d4' },
    ],
  },
  {
    title: 'Core Concepts',
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/></svg>,
    chips: [
      { label: 'OOP', color: '#6366f1' },
      { label: 'Collections', color: '#8b5cf6' },
      { label: 'Exception Handling', color: '#ec4899' },
      { label: 'JDBC', color: '#0ea5e9' },
      { label: 'CRUD Operations', color: '#22c55e' },
      { label: 'MVC Architecture', color: '#f59e0b' },
    ],
  },
  {
    title: 'Developer Tools',
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>,
    chips: [
      { label: 'Git', color: '#111827' },
      { label: 'GitHub', color: '#1f2937' },
      { label: 'Postman', color: '#f97316' },
      { label: 'Swagger/OpenAPI', color: '#22c55e' },
      { label: 'Eclipse', color: '#7c3aed' },
      { label: 'VS Code', color: '#3b82f6' },
    ],
  },
]

const webDev = {
  title: 'Web Development',
  icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15 15 0 0 1 0 20 15 15 0 0 1 0-20z"/></svg>,
  chips: [
    { label: 'Responsive Web Design', color: '#6366f1' },
    { label: 'REST API Integration', color: '#ec4899' },
    { label: 'Form Validation', color: '#22c55e' },
    { label: 'API Development', color: '#0ea5e9' },
  ],
}

function SkillCard({ group }) {
  return (
    <div className="skill-card">
      <div className="skill-card-head">
        <div className="skill-icon">{group.icon}</div>
        <h4>{group.title}</h4>
      </div>
      <div className="chip-row">
        {group.chips.map((c) => (
          <span key={c.label} className="chip" style={{ background: c.color }}>{c.label}</span>
        ))}
      </div>
    </div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="reveal">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Technical Skills</span>
          <h2>Tools I build with</h2>
          <p>The languages, frameworks, and tools I use to take an application from idea to a working backend.</p>
        </div>

        <div className="skill-grid">
          {skillGroups.map((g) => <SkillCard group={g} key={g.title} />)}
        </div>

        <div style={{ marginTop: 22 }}>
          <SkillCard group={webDev} />
        </div>
      </div>
    </section>
  )
}
