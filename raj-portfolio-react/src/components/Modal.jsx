import { useEffect } from 'react'

export default function Modal({ open, onClose, title, sub, large, children }) {
  useEffect(() => {
    function onKey(e) { if (e.key === 'Escape') onClose() }
    if (open) {
      document.addEventListener('keydown', onKey)
      document.body.style.overflow = 'hidden'
    }
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open, onClose])

  if (!open) return null

  return (
    <div className="rmodal-backdrop" onClick={onClose}>
      <div
        className={'rmodal-dialog' + (large ? ' rmodal-lg' : '')}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="cert-modal-content">
          <div className="modal-header">
            <div>
              <h5 className="modal-title">{title}</h5>
              {sub && <p className="modal-sub">{sub}</p>}
            </div>
            <button type="button" className="btn-close btn-close-white" onClick={onClose} aria-label="Close"></button>
          </div>
          <div className="modal-body">{children}</div>
        </div>
      </div>
    </div>
  )
}
