import { skills } from '../data/content'

export default function Skills() {
  return (
    <section id="skills" className="section-block alt-bg">
      <div className="container">
        <p className="section-label">Skills &amp; Expertise</p>
        <div className="row g-4">
          {skills.map((s) => (
            <div className="col-md-6 col-lg-4" key={s.title}>
              <div className={'skill-card ' + s.border}>
                <div className="skill-icon"><img src={'/' + s.icon} alt={s.title} /></div>
                <h5>{s.title}</h5>
                <ul>{s.items.map((it) => <li key={it}>{it}</li>)}</ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
