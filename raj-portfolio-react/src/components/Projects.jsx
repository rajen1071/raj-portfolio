import { projects } from '../data/content'
import Reveal from './Reveal'

export default function Projects() {
  return (
    <section id="projects" className="section-block">
      <div className="container">
        <p className="section-label mb-3">Featured Projects</p>
        <div className="row g-4">
          {projects.map((p, i) => (
            <div className="col-md-6 col-lg-4" key={p.title}>
              <Reveal delay={i * 60}>
                <div className="project-card">
                  <div className="project-thumb"><img src={'/' + p.img} alt={p.title} /></div>
                  <h5>{p.title}</h5>
                  {p.url && <p className="project-url">{p.url}</p>}
                  <ul className="project-list">
                    {p.points.map((pt, j) => <li key={j}>{pt}</li>)}
                  </ul>
                </div>
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
