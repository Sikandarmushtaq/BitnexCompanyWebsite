import { useEffect, useRef, useState } from 'react'
import PageHero from '../components/PageHero.jsx'
import CTA from '../components/CTA.jsx'
import { skills } from '../data/content.js'

const reasons = [
  { title: 'Reliable and Connected', desc: 'Our clients have trusted us to make complex decisions and we have always delivered on our promise. We believe strong long-term relationships based on moral grounds are critical for the growth of any organization.' },
  { title: 'Leaders and Process-Oriented', desc: 'Hire developers who know the ins & outs of the industry and are committed to delivering value to every client. We simplify processes by outlining every step and deliver products without compromising on quality.' },
  { title: 'Efficient and Competent', desc: 'Our focus is the timely delivery of the product, so you have more time to market it. We have highly experienced developers in our team who are skilled in a diverse set of technologies.' },
]

function Bars() {
  const ref = useRef(null)
  const [show, setShow] = useState(false)
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setShow(true); obs.disconnect() } }, { threshold: 0.3 })
    obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])
  return (
    <ul ref={ref} className="space-y-6">
      {skills.map((s) => (
        <li key={s.label}>
          <div className="flex justify-between font-display text-sm font-semibold text-navy">
            <span>{s.label}</span><span>{s.value}%</span>
          </div>
          <div className="mt-2 h-2.5 overflow-hidden rounded-full bg-slate-200" role="progressbar" aria-valuenow={s.value} aria-valuemin="0" aria-valuemax="100" aria-label={s.label}>
            <div className="h-full rounded-full bg-teal transition-[width] duration-1000 ease-out" style={{ width: show ? `${s.value}%` : 0 }} />
          </div>
        </li>
      ))}
    </ul>
  )
}

export default function About() {
  return (
    <>
      <PageHero
        title="About Us"
        text="At Bitnex Technologies LLC, we prioritize our customers’ needs and direct our efforts towards the ultimate goal of providing optimal solutions. Our primary mission is to provide innovative services with uncompromising quality."
      />

      <section className="section">
        <div className="container-x">
          <h2 className="max-w-xl text-3xl font-bold sm:text-4xl">Why choose Bitnex Technologies LLC?</h2>
          <div className="mt-14 grid gap-10 md:grid-cols-3">
            {reasons.map((r) => (
              <div key={r.title} className="rounded-3xl bg-mist p-8">
                <div className="h-1 w-10 rounded-full bg-teal" />
                <h3 className="mt-6 text-xl font-semibold">{r.title}</h3>
                <p className="mt-3 leading-relaxed">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-navy text-slate-300">
        <div className="container-x grid gap-14 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold text-white sm:text-4xl">What defines Bitnex Technologies LLC?</h2>
            <p className="mt-6 leading-relaxed">
              Bitnex Technologies LLC is committed to creating a superior digital presence for its clients. Whether your online business is based in the US or across the globe, we aim to increase your revenue through cutting-edge technology.
            </p>
            <p className="mt-4 leading-relaxed">
              Our team is dedicated to making sure your target audience not only finds you on the web, but also promotes your business and helps you achieve higher rankings. To get there, we consider every detail and take into account the latest trends in technology.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-white sm:text-4xl">Bitnex Technologies LLC Virtuoso</h2>
            <p className="mt-6 leading-relaxed">
              Our goal is to create holistic IT solutions tailored to your needs while attracting the ideal target audience to improve the reach of your online business.
            </p>
            <p className="mt-4 leading-relaxed">
              Whether you need a cutting-edge website, a user-friendly application, or a customized software solution, Bitnex Technologies LLC is your trusted partner in navigating the complexities of the digital realm.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-x grid items-center gap-14 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold sm:text-4xl">We handle and solve your IT problems.</h2>
            <p className="mt-5 text-lg leading-relaxed">
              Do you want to improve the design of your website or create a new application? Bitnex Technologies LLC is your all-in-one solution for all digital requirements.
            </p>
          </div>
          <Bars />
        </div>
      </section>

      <CTA />
    </>
  )
}
