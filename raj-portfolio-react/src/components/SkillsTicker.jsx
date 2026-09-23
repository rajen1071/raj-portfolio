import { useState } from 'react'
import { orbitTech } from '../data/content'

// Splits the tag list into two rings (outer/inner) that rotate in opposite
// directions at different speeds -- a common technique for a busy list
// (27 tags) that still reads as one coherent, professional orbit rather
// than a single crowded ring.
function splitRings(items) {
  const outer = items.filter((_, i) => i % 2 === 0)
  const inner = items.filter((_, i) => i % 2 === 1)
  return [outer, inner]
}

function OrbitRing({ items, className, radiusVar }) {
  return (
    <div className={'orbit-ring ' + className}>
      {items.map((tag, i) => {
        const angle = (360 / items.length) * i
        return (
          <div className="orbit-item" style={{ '--angle': angle + 'deg', '--radius': radiusVar }} key={tag}>
            <div className="orbit-pill-spin">
              <OrbitPill tag={tag} />
            </div>
          </div>
        )
      })}
    </div>
  )
}

function OrbitPill({ tag }) {
  const [active, setActive] = useState(false)
  return (
    <button
      type="button"
      className={'orbit-pill' + (active ? ' active' : '')}
      onClick={() => setActive((v) => !v)}
      aria-pressed={active}
    >
      {tag}
    </button>
  )
}

export default function SkillsTicker() {
  const [outer, inner] = splitRings(orbitTech)

  return (
    <section className="orbit-section" aria-label="Technologies and testing topics">
      <div className="container">
        <p className="orbit-heading">Technologies &amp; Testing Topics</p>
        <div className="orbit-stage">
          <div className="orbit-center" aria-hidden="true">
            <i className="fa-solid fa-code"></i>
          </div>
          <OrbitRing items={outer} className="orbit-ring-outer" radiusVar="280px" />
          <OrbitRing items={inner} className="orbit-ring-inner" radiusVar="130px" />
        </div>
      </div>
    </section>
  )
}
