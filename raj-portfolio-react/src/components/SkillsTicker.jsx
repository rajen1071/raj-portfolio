import { tickerTags } from '../data/content'

export default function SkillsTicker() {
  // duplicate the list so the CSS marquee loops seamlessly
  const doubled = [...tickerTags, ...tickerTags]

  return (
    <div className="ticker-wrap">
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
