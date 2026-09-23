import useReveal from '../hooks/useReveal'

export default function Reveal({ children, className = '', delay = 0 }) {
  const [ref, visible] = useReveal()
  return (
    <div
      ref={ref}
      className={'reveal' + (visible ? ' reveal-visible' : '') + (className ? ' ' + className : '')}
      style={{ transitionDelay: visible ? delay + 'ms' : '0ms' }}
    >
      {children}
    </div>
  )
}
