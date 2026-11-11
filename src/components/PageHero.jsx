export default function PageHero({ title, text }) {
  return (
    <section className="relative overflow-hidden bg-navy">
      <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full border-[40px] border-teal/15" aria-hidden="true" />
      <div className="container-x relative py-20 sm:py-24">
        <h1 className="max-w-2xl text-4xl font-bold text-white sm:text-5xl">{title}</h1>
        {text && <p className="mt-5 max-w-xl text-lg leading-relaxed text-slate-300">{text}</p>}
      </div>
      <div className="h-1.5 w-full bg-teal" />
    </section>
  )
}
