import { useEffect, useState } from 'react'
import { dashboardImages, dashboardLinks } from '../data/content'
import Modal from './Modal'
import Reveal from './Reveal'

export default function EmailAnalytics() {
  const [idx, setIdx] = useState(0)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const id = setInterval(() => setIdx((i) => (i + 1) % dashboardImages.length), 4000)
    return () => clearInterval(id)
  }, [])

  function prev() { setIdx((i) => (i - 1 + dashboardImages.length) % dashboardImages.length) }
  function next() { setIdx((i) => (i + 1) % dashboardImages.length) }

  return (
    <section id="email-analytics" className="section-block">
      <div className="container">
        <p className="section-label">Email Analytics Dashboard</p>
        <div className="row align-items-center g-5">
          <div className="col-lg-7">
            <Reveal>
              <div className="laptop-mock">
                <div className="carousel">
                  <div className="carousel-inner">
                    <img src={'/' + dashboardImages[idx].src} alt={dashboardImages[idx].alt} />
                  </div>
                  <button className="carousel-control-prev" type="button" onClick={prev}>
                    <span className="carousel-control-prev-icon"></span>
                  </button>
                  <button className="carousel-control-next" type="button" onClick={next}>
                    <span className="carousel-control-next-icon"></span>
                  </button>
                  <div className="carousel-indicators">
                    {dashboardImages.map((_, i) => (
                      <button
                        key={i}
                        className={i === idx ? 'active' : ''}
                        onClick={() => setIdx(i)}
                        aria-label={'Slide ' + (i + 1)}
                      ></button>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
          <div className="col-lg-5">
            <Reveal delay={100}>
              <h4>Email Analytics Dashboard</h4>
              <p className="about-text">Real-time insights into email performance, campaign analytics, contact engagement and deliverability, built for the Restaurant Association Mautic instance - sign-ups, newsletters, registration forms and full campaign overview in one place.</p>
              <ul className="check-list">
                <li><i className="fa-solid fa-check"></i> Open Rate, Click Rate, Bounce Rate</li>
                <li><i className="fa-solid fa-check"></i> Campaign Performance Report</li>
                <li><i className="fa-solid fa-check"></i> Contact Engagement Analysis</li>
                <li><i className="fa-solid fa-check"></i> Newsletter &amp; Registration Form Tracking</li>
                <li><i className="fa-solid fa-check"></i> Filter by Date, Campaign, Segment</li>
              </ul>
              <button className="btn btn-purple" onClick={() => setOpen(true)}>
                Live Demo <i className="fa-solid fa-up-right-from-square ms-2"></i>
              </button>
            </Reveal>
          </div>
        </div>
      </div>

      <Modal open={open} onClose={() => setOpen(false)} title="Choose a Dashboard" sub="Pick which live dashboard you'd like to open">
        {dashboardLinks.map((d) => (
          <a key={d.url} href={d.url} target="_blank" rel="noopener" className="dashboard-link-btn">
            <span><i className={d.icon + ' me-2'}></i>{d.label}</span>
            <i className="fa-solid fa-arrow-right"></i>
          </a>
        ))}
      </Modal>
    </section>
  )
}
