import { useEffect, useRef, useState } from 'react'
import { profile, stats } from '../data/content'
import TerminalWidget from './TerminalWidget'

function StatValue({ value }) {
  const [display, setDisplay] = useState('0')
  const ref = useRef(null)
  const done = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !done.current) {
            done.current = true
            const match = value.match(/^([\d.]+)(.*)$/)
            if (!match) { setDisplay(value); return }
            const target = parseFloat(match[1])
            const suffix = match[2]
            const isDecimal = match[1].includes('.')
            const duration = 1200
            const startTime = performance.now()
            function tick(now) {
              const progress = Math.min((now - startTime) / duration, 1)
              const eased = 1 - Math.pow(1 - progress, 3)
              const v = target * eased
              setDisplay((isDecimal ? v.toFixed(1) : Math.round(v)) + suffix)
              if (progress < 1) requestAnimationFrame(tick)
              else setDisplay(value)
            }
            requestAnimationFrame(tick)
            observer.disconnect()
          }
        })
      },
      { threshold: 0.4 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [value])

  return <h3 ref={ref}>{display}</h3>
}

export default function Hero() {
  return (
    <header id="home" className="hero-section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <p className="eyebrow">Hi, I'm</p>
            <h1 className="hero-name">{profile.name}</h1>
            <h2 className="hero-role">{profile.role}</h2>
            <p className="hero-stack">{profile.stack}</p>
            <p className="hero-desc">{profile.desc}</p>
            <div className="hero-btns">
              <a href={profile.github} target="_blank" rel="noopener" className="btn btn-purple">
                View My Github <i className="fa-solid fa-arrow-right ms-2"></i>
              </a>
              <a href="/assets/resume/Raj-QA-4.pdf" download className="btn btn-purple">
                Download Resume <i className="fa-solid fa-download ms-2"></i>
              </a>
            </div>
            <div className="hero-socials">
              <a href={profile.linkedin} target="_blank" rel="noopener"><i className="fa-brands fa-linkedin-in"></i></a>
              <a href={profile.github} target="_blank" rel="noopener"><i className="fa-brands fa-github"></i></a>
              <a href={'mailto:' + profile.email}><i className="fa-solid fa-envelope"></i></a>
              <a href={'tel:' + profile.phone}><i className="fa-solid fa-phone"></i></a>
            </div>
          </div>
          <div className="col-lg-6 text-center">
            <div className="hero-photo-wrap">
              <TerminalWidget />
            </div>
          </div>
        </div>

        <div className="stats-bar">
          {stats.map((s) => (
            <div className="stat-item" key={s.label}>
              <i className={s.icon + ' stat-icon ' + s.color}></i>
              <div><StatValue value={s.value} /><p>{s.label}</p></div>
            </div>
          ))}
        </div>
      </div>
    </header>
  )
}
