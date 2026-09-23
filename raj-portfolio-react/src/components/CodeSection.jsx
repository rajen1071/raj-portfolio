import { codeCards } from '../data/content'

export default function CodeSection() {
  return (
    <section className="section-block alt-bg">
      <div className="container">
        <p className="section-label">Code &amp; Problem Solving</p>
        <div className="row g-4">
          {codeCards.map((c) => (
            <div className="col-md-4" key={c.title}>
              <div className="code-card">
                <div className="code-icon"><img src={'/' + c.icon} alt={c.title} /></div>
                <h5>{c.title}</h5>
                <p>{c.desc}</p>
                <a href="#" className={c.link}>{c.cta} <i className="fa-solid fa-arrow-right ms-1"></i></a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
