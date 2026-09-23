import { useState } from 'react'
import { profile, timeline, aboutTimeline } from '../data/content'
import Modal from './Modal'
import Reveal from './Reveal'

export default function About() {
  const [open, setOpen] = useState(false)

  return (
    <section id="about" className="section-block">
      <div className="container">
        <p className="section-label">About Me</p>
        <div className="row">
          <div className="col-lg-5">
            <Reveal>
              <p className="about-text">I am a QA Engineer with 4.2+ years of strong expertise in Manual Testing, Test Automation, Mautic Email Automation, SQL, API Testing and Dashboard Development.</p>
              <p className="about-text">I enjoy solving problems, improving processes and building automation workflows that create real business impact.</p>
              <button className="btn btn-purple" onClick={() => setOpen(true)}>
                More About Me <i className="fa-solid fa-arrow-right ms-2"></i>
              </button>
            </Reveal>
          </div>
          <div className="col-lg-7">
            <Reveal delay={100}>
              <div className="timeline-wrap">
                {timeline.map((t) => (
                  <div className="timeline-item" key={t.year}>
                    <div className={'timeline-icon ' + t.tl}><i className={t.icon}></i></div>
                    <h4>{t.year}</h4><p>{t.label}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>

      <Modal open={open} onClose={() => setOpen(false)} title="About Me" sub="My journey - the full story" large>
        <div className="about-intro-header">
          <div className="about-intro-text">
            <h3 className="about-intro-heading">Hey! I'm <span>{profile.name}</span> and I'm a <span>QA Analyst &amp; Automation Tester</span>.</h3>
            <p>With a background that started in the BPO/KPO industry, I bring a problem-solving mindset and strong analytical skills to software testing. My early years in process and client-support roles taught me how to handle complex workflows under pressure - skills that translate seamlessly into QA.</p>
            <p>Now a QA Analyst with 4+ years of expertise in Manual Testing, Selenium Automation, Java, SQL and API Testing, I specialize in building reliable test automation and insightful dashboards. I'm passionate about improving software quality and collaborating with teams that value precision.</p>
          </div>
          <div className="about-intro-side">
            <div className="about-intro-photo">
              <img src="/assets/profile/profile.png" alt={profile.name} />
            </div>
            <div className="about-intro-socials">
              <a href={profile.linkedin} target="_blank" rel="noopener"><i className="fa-brands fa-linkedin-in"></i></a>
              <a href={profile.github} target="_blank" rel="noopener"><i className="fa-brands fa-github"></i></a>
              <a href={'mailto:' + profile.email}><i className="fa-solid fa-envelope"></i></a>
              <a href={'tel:' + profile.phone}><i className="fa-solid fa-phone"></i></a>
            </div>
          </div>
        </div>

        <p className="about-intro">Here's a timeline of what I've been up to.</p>

        <div className="about-timeline">
          {aboutTimeline.map((block) => (
            <div className="about-year-block" key={block.year}>
              <span className="about-year-dot"></span>
              <h6>{block.year}</h6>
              <ul className="about-check-list">
                {block.items.map((it, i) => <li key={i}>{it}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </Modal>
    </section>
  )
}
