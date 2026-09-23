import { useEffect, useState } from 'react'

const links = ['about', 'experience', 'skills', 'projects', 'automation', 'email-analytics', 'certifications']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('')
  const [open, setOpen] = useState(false)

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 20)
      let current = ''
      links.forEach((id) => {
        const el = document.getElementById(id)
        if (el && window.scrollY >= el.offsetTop - 100) current = id
      })
      setActive(current)
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  function go(id) {
    const el = document.getElementById(id)
    if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' })
    setOpen(false)
  }

  return (
    <nav className={'navbar navbar-expand-lg fixed-top custom-navbar' + (scrolled ? ' scrolled' : '')}>
      <div className="container-fluid px-0">
        <a className="navbar-brand" href="#home" onClick={(e) => { e.preventDefault(); go('home') }}>
          <img className="brand-logo" src="/assets/profile/rn-logo.png" alt="Raj Narayan - QA Analyst & Automation Tester" />
        </a>
        <button className="navbar-toggler" type="button" onClick={() => setOpen(!open)}>
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={'collapse navbar-collapse' + (open ? ' show' : '')}>
          <ul className="navbar-nav mx-auto nav-links">
            {links.map((id) => (
              <li className="nav-item" key={id}>
                <a
                  className={'nav-link' + (active === id ? ' active' : '')}
                  href={'#' + id}
                  onClick={(e) => { e.preventDefault(); go(id) }}
                >
                  {id === 'email-analytics' ? 'Email Analytics' : id.charAt(0).toUpperCase() + id.slice(1)}
                </a>
              </li>
            ))}
          </ul>
          <a href="/assets/resume/Raj-QA-4.pdf" download className="btn btn-purple d-none d-lg-inline-flex">Download Resume</a>
        </div>
      </div>
    </nav>
  )
}
