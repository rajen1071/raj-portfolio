import { automationProjects } from '../data/content'
import Reveal from './Reveal'

export default function Automation() {
  return (
    <section id="automation" className="section-block alt-bg">
      <div className="container">
        <p className="section-label mb-3">Automation Projects</p>
        <div className="row g-4">
          {automationProjects.map((a, i) => (
            <div className="col-md-6 col-lg-4" key={a.title}>
              <Reveal delay={i * 60}>
                <div className="auto-card">
                  <h6><i className={a.icon + ' ' + a.color}></i> {a.title}</h6>
                  <ul>{a.items.map((it) => <li key={it}>{it}</li>)}</ul>
                  <span className="tag-line">{a.tags}</span>
                </div>
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
