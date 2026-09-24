import { orbitTech } from '../data/content'

// Horizontal, continuously-scrolling technology/topic strip -- the original
// design. orbitTech is the full merged list (the original 6 tags plus every
// topic requested for the redesign, deduped); doubling it lets the CSS
// marquee loop seamlessly from -50% back to 0%.
export default function SkillsTicker() {
  const doubled = [...orbitTech, ...orbitTech]

  return (
    <div className="ticker-wrap" aria-label="Technologies and testing topics">
      <div className="ticker-track">
        {doubled.map((tag, i) => (
          <span className="ticker-item" key={i}>
            {tag}
            <span className="ticker-plus">+</span>
          </span>
        ))}
      </div>
    </div>
  )
}
