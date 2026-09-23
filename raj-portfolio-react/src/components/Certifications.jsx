import { useState } from 'react'
import { certifications } from '../data/content'
import Modal from './Modal'
import Reveal from './Reveal'

export default function Certifications() {
  const [selected, setSelected] = useState(null)

  return (
    <section id="certifications" className="section-block">
      <div className="container">
        <p className="section-label">Certifications &amp; Achievements</p>
        <div className="row g-4">
          {certifications.map((c, i) => (
            <div className="col-md-6 col-lg-3" key={i}>
              <Reveal delay={i * 70}>
                <a className="cert-card" href="#" onClick={(e) => { e.preventDefault(); setSelected(c) }}>
                  <div className="cert-thumb">
                    <img src={'/' + c.img} alt={c.title} />
                    <span className="cert-view"><i className="fa-solid fa-magnifying-glass-plus"></i> View Certificate</span>
                  </div>
                  <div className="cert-body">
                    <h5>{c.title}</h5>
                    <p>{c.sub}</p>
                  </div>
                </a>
              </Reveal>
            </div>
          ))}
        </div>
      </div>

      <Modal open={!!selected} onClose={() => setSelected(null)} title={selected ? selected.title : 'Certificate'} sub={selected ? selected.sub : ''} large>
        {selected && <img src={'/' + selected.img} alt={selected.title} className="cert-modal-img" />}
      </Modal>
    </section>
  )
}
