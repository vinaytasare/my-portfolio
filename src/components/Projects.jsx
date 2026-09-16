const CheckIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg>
)
const ArrowIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
)

const projects = [
  {
    tag: 'Healthcare',
    title: 'Healthcare Hub',
    desc: 'A backend system for a healthcare application, with RESTful APIs for efficient data exchange and a chatbot restricted to safe, healthcare-only queries.',
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7 7-7z"/></svg>,
    highlights: [
      'Normalized Oracle SQL schema for data consistency',
      'Controller–Service–Repository layered architecture',
      'Integrated Google Gemini AI chatbot for patient queries',
    ],
    tech: ['Java', 'Spring Boot', 'Spring Data JPA', 'REST APIs', 'Oracle SQL'],
    link: 'https://github.com/vinaytasare',
  },
  {
    tag: 'Mini Project',
    title: 'Library Management System',
    desc: 'A system to manage books, members, and borrowing operations, with a relational schema built for scale and clean issue/return workflows.',
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>,
    highlights: [
      'REST APIs for book catalog, issue/return, and users',
      'Relational schema in Oracle DB for books & transactions',
      'Modular, scalable backend service structure',
    ],
    tech: ['Java', 'Spring Boot', 'Oracle DB'],
    link: 'https://github.com/vinaytasare',
  },
]

function ProjectCard({ p }) {
  return (
    <div className="project-card">
      <div className="project-top">
        <div>
          <span className="project-tag">{p.tag}</span>
          <h3>{p.title}</h3>
        </div>
        <div className="project-icon">{p.icon}</div>
      </div>

      <p className="desc">{p.desc}</p>

      <ul className="project-list">
        {p.highlights.map((h) => (
          <li key={h}><CheckIcon /> {h}</li>
        ))}
      </ul>

      <div className="project-tech">
        {p.tech.map((t) => <span key={t}>{t}</span>)}
      </div>

      <a href={p.link} target="_blank" rel="noopener noreferrer" className="project-link">
        View on GitHub <ArrowIcon />
      </a>
    </div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="reveal">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Portfolio</span>
          <h2>Projects I've built</h2>
          <p>Backend-focused applications where I designed the data model, built the APIs, and wired the whole system together.</p>
        </div>

        <div className="project-grid">
          {projects.map((p) => <ProjectCard p={p} key={p.title} />)}
        </div>
      </div>
    </section>
  )
}
