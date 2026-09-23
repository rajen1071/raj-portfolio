import { useEffect, useRef, useState } from 'react'
import { terminalScript } from '../data/content'

export default function TerminalWidget() {
  const [lines, setLines] = useState([])
  const [typing, setTyping] = useState('')
  const [stats, setStats] = useState({ total: 0, pass: 0, fail: 0, rate: 0 })
  const bodyRef = useRef(null)
  const startedRef = useRef(false)

  useEffect(() => {
    if (!bodyRef.current) return
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !startedRef.current) {
            startedRef.current = true
            runScript()
            observer.disconnect()
          }
        })
      },
      { threshold: 0.3 }
    )
    observer.observe(bodyRef.current)
    return () => observer.disconnect()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  function runScript(lineIdx = 0) {
    if (lineIdx >= terminalScript.length) {
      setTimeout(() => finishAndAnimateStats(), 300)
      return
    }
    const line = terminalScript[lineIdx]
    typeLine(line.text, 0, line.type, lineIdx)
  }

  function typeLine(text, charIdx, type, lineIdx) {
    if (charIdx <= text.length) {
      setTyping(text.slice(0, charIdx))
      setTimeout(() => typeLine(text, charIdx + 1, type, lineIdx), type === 'cmd' ? 55 : 18)
    } else {
      setLines((prev) => [...prev, { text, type }])
      setTyping(null)
      setTimeout(() => runScript(lineIdx + 1), 260)
    }
  }

  function finishAndAnimateStats() {
    const passCount = terminalScript.filter((l) => l.type === 'pass').length
    const failCount = terminalScript.filter((l) => l.type === 'fail').length
    const total = passCount + failCount
    const rate = Math.round((passCount / total) * 100)
    animateCount(total, passCount, failCount, rate)
    setTimeout(resetTerminal, 4500)
  }

  function animateCount(total, pass, fail, rate) {
    const duration = 700
    const startTime = performance.now()
    function tick(now) {
      const progress = Math.min((now - startTime) / duration, 1)
      setStats({
        total: Math.round(total * progress),
        pass: Math.round(pass * progress),
        fail: Math.round(fail * progress),
        rate: Math.round(rate * progress),
      })
      if (progress < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }

  function resetTerminal() {
    setLines([])
    setTyping('')
    setStats({ total: 0, pass: 0, fail: 0, rate: 0 })
    setTimeout(() => runScript(0), 400)
  }

  const currentLine = typing !== null && typing !== undefined ? terminalScript[lines.length] : null

  return (
    <div className="terminal-card">
      <div className="terminal-titlebar">
        <span className="term-dot dot-red"></span>
        <span className="term-dot dot-yellow"></span>
        <span className="term-dot dot-green"></span>
        <span className="terminal-name">flipkart-login.spec.js — regression run</span>
      </div>
      <div className="terminal-body" ref={bodyRef}>
        {lines.map((l, i) => (
          <span className={'t-line t-' + l.type} key={i}>{l.text}</span>
        ))}
        {currentLine && (
          <span className={'t-line t-' + currentLine.type}>
            {typing}<span className="t-cursor"></span>
          </span>
        )}
      </div>
      <div className="terminal-stats">
        <div className="term-stat"><h4>{stats.total}</h4><p>Test Cases</p></div>
        <div className="term-stat"><h4 id="statPass">{stats.pass}</h4><p>Passed</p></div>
        <div className="term-stat"><h4 id="statFail">{stats.fail}</h4><p>Failed</p></div>
        <div className="term-stat"><h4 id="statRate">{stats.rate}%</h4><p>Pass Rate</p></div>
      </div>
    </div>
  )
}
