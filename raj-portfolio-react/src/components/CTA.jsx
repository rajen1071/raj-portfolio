import { profile } from '../data/content'

export default function CTA() {
  return (
    <section className="cta-section">
      <div className="container">
        <div className="cta-box d-flex flex-column flex-md-row justify-content-between align-items-center">
          <div className="d-flex align-items-center mb-3 mb-md-0">
            <div className="cta-icon"><i className="fa-solid fa-comments"></i></div>
            <div className="ms-3">
              <h5 className="mb-0">Let's Work Together</h5>
              <p className="mb-0">Have a project in mind or want to discuss an opportunity?</p>
            </div>
          </div>
          <a href={'tel:' + profile.phone} className="btn btn-light-purple">Get In Touch <i className="fa-solid fa-paper-plane ms-2"></i></a>
        </div>
      </div>
    </section>
  )
}
