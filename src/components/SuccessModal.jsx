import { useEffect, useRef } from 'react'
import site from '../config/site.js'

export default function SuccessModal({ open, onClose, name }) {
  const btnRef = useRef(null)

  useEffect(() => {
    if (!open) return
    btnRef.current?.focus()
    const onKey = (e) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', onKey)
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = prev
    }
  }, [open, onClose])

  if (!open) return null

  return (
    <div className="fixed inset-0 z-[100] grid place-items-center p-5">
      <div className="absolute inset-0 bg-navy/60 backdrop-blur-sm animate-[fade_.2s_ease-out]" onClick={onClose} aria-hidden="true" />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="success-title"
        className="relative w-full max-w-md rounded-3xl bg-white p-8 text-center shadow-2xl animate-[pop_.25s_ease-out]"
      >
        <button onClick={onClose} aria-label="Close" className="absolute right-4 top-4 rounded-full p-2 text-slate-400 hover:bg-mist hover:text-navy">
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M6 6l12 12M18 6 6 18" /></svg>
        </button>
        <span className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-teal-light text-teal-dark">
          <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m5 12.5 4.5 4.5L19 7.5" /></svg>
        </span>
        <h2 id="success-title" className="mt-6 text-2xl font-bold">
          Thank you{name ? `, ${name.split(' ')[0]}` : ''}!
        </h2>
        <p className="mt-3 leading-relaxed">
          Your message has been received. Our team will contact you soon, usually within one business day.
        </p>
        <p className="mt-3 text-sm text-slate-500">
          Need help sooner? Call <a href={site.phoneHref} className="font-medium text-teal-dark underline underline-offset-2">{site.phone}</a>
        </p>
        <button ref={btnRef} onClick={onClose} className="btn-primary mt-7 w-full">Close</button>
      </div>
    </div>
  )
}
