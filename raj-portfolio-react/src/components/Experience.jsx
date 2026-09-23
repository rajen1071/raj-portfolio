import { useState } from 'react'
import { experience } from '../data/content'
import Reveal from './Reveal'

export default function Experience() {
  const [active, setActive] = useState(experience[0].id)
  const current = experience.find((e) => e.id === active)

  return (
    <section id="experience" className="section-block alt-bg">
      <div className="container">
        <p className="section-label">Work Experience</p>
        <div className="exp-tabs-wrap">
          <Reveal className="exp-tabs-list-wrap">
            <div className="exp-tabs-list">
              {experience.map((e) => (
                <button
                  key={e.id}
                  type="button"
                  className={'exp-tab-btn' + (active === e.id ? ' active' : '')}
                  onClick={() => setActive(e.id)}
                >
                  <span className="exp-tab-logo"><img src={'/' + e.logo} alt={e.name} /></span>
                  {e.name}
                </button>
              ))}
            </div>
          </Reveal>

          <Reveal delay={100} className="exp-tabs-panels-wrap">
            <div className="exp-tabs-panels">
              <div className="exp-panel active">
                <h4>{current.title} <span className="exp-panel-at">{current.at}</span></h4>
                <p className="exp-panel-meta">{current.meta}</p>
                {current.location && <p className="exp-panel-location">{current.location}</p>}
                <ul className="exp-check-list">
                  {current.points.map((p, i) => <li key={i}>{p}</li>)}
                </ul>
                {current.progression.length > 0 && (
                  <div className="exp-progression">
                    {current.progression.map((p, i) => (
                      <div className="exp-prog-item" key={i}><span>{p.role}</span><span>{p.period}</span></div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
