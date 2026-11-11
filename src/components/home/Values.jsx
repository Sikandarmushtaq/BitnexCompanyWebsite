
import { values } from '../../data/content.js'

export default function Values() {
  return (
    <section className="section">
      <div className="container-x">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold sm:text-4xl">
            What sets our approach apart?
          </h2>

          <p className="mt-4 text-lg">
            We combine technical expertise, thoughtful execution and a
            commitment to building solutions that serve real business goals.
          </p>
        </div>

        <div className="mt-14 grid gap-x-10 gap-y-12 sm:grid-cols-2">
          {values.map((value) => (
            <div key={value.title} className="border-t-2 border-navy pt-6">
              <h3 className="text-xl font-semibold">{value.title}</h3>
              <p className="mt-3 leading-relaxed">{value.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
