import { projects } from '../data/content'

export default function Projects() {
  return (
    <section id="projects" className="section-block">
      <div className="container">
        <p className="section-label mb-3">Featured Projects</p>
        <div className="row g-4">
          {projects.map((p) => (
            <div className="col-md-6 col-lg-4" key={p.title}>
              <div className="project-card">
                <div className="project-thumb"><img src={'/' + p.img} alt={p.title} /></div>
                <h5>{p.title}</h5>
                {p.url && <p className="project-url">{p.url}</p>}
                <ul className="project-list">
                  {p.points.map((pt, i) => <li key={i}>{pt}</li>)}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
