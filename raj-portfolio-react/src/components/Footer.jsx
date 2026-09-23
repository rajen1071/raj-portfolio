import { profile } from '../data/content'

export default function Footer() {
  return (
    <footer id="contact" className="footer-section">
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-4">
            <a className="navbar-brand" href="#home">
              <span className="logo-badge"><img src="/assets/profile/rn-logo.png" alt={profile.name} /></span>
              <span className="logo-text">{profile.name}</span>
            </a>
            <p className="footer-desc">QA Engineer | Automation Tester<br />Email Automation Specialist</p>
            <div className="hero-socials mt-3">
              <a href={profile.linkedin} target="_blank" rel="noopener"><i className="fa-brands fa-linkedin-in"></i></a>
              <a href={profile.github} target="_blank" rel="noopener"><i className="fa-brands fa-github"></i></a>
              <a href={'mailto:' + profile.email}><i className="fa-solid fa-envelope"></i></a>
              <a href={'tel:' + profile.phone}><i className="fa-solid fa-phone"></i></a>
            </div>
          </div>
          <div className="col-6 col-lg-2">
            <h6>Quick Links</h6>
            <ul className="footer-links">
              <li><a href="#about">About</a></li>
              <li><a href="#experience">Experience</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#automation">Automation</a></li>
              <li><a href="#email-analytics">Email Analytics</a></li>
              <li><a href="#certifications">Certifications</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          <div className="col-6 col-lg-3">
            <h6>Technologies</h6>
            <ul className="footer-links">
              <li>Java</li><li>Selenium</li><li>Mautic</li><li>SQL</li><li>Postman</li><li>JIRA</li>
            </ul>
          </div>
          <div className="col-lg-3">
            <h6>Contact</h6>
            <ul className="footer-links">
              <li><i className="fa-solid fa-envelope me-2"></i><a href={'mailto:' + profile.email}>{profile.email}</a></li>
              <li><i className="fa-solid fa-phone me-2"></i><a href={'tel:' + profile.phone}>{profile.phoneDisplay}</a></li>
              <li><i className="fa-solid fa-location-dot me-2"></i>{profile.location}</li>
            </ul>
            <a href="/assets/resume/Raj-QA-4.pdf" download className="btn btn-purple mt-2">Download Resume <i className="fa-solid fa-download ms-2"></i></a>
          </div>
        </div>
        <hr />
        <div className="d-flex justify-content-between flex-wrap footer-bottom">
          <p>© 2026 {profile.name}. All rights reserved.</p>
          <a href="#home" className="back-top"><i className="fa-solid fa-chevron-up"></i></a>
        </div>
      </div>
    </footer>
  )
}
