
import { useState } from 'react'
import gsap from 'gsap'

export default function AboutTabs({ items }) {
  const [activeIndex, setActiveIndex] = useState(0)

  const handleMouseMove = (event) => {
    const card = event.currentTarget
    const rect = card.getBoundingClientRect()

    const x = event.clientX - rect.left
    const y = event.clientY - rect.top

    const rotateY = ((x / rect.width) - 0.5) * 10
    const rotateX = ((y / rect.height) - 0.5) * -10

    gsap.to(card, {
      rotateX,
      rotateY,
      scale: 1.025,
      duration: 0.3,
      ease: 'power2.out',
      transformPerspective: 800
    })
  }

  const handleMouseLeave = (event) => {
    gsap.to(event.currentTarget, {
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      duration: 0.45,
      ease: 'power3.out'
    })
  }

  const activeItem = items[activeIndex]

  return (
    <div className="w-full">
      <div className="grid grid-cols-3 gap-2.5 sm:gap-4">
        {items.map((item, index) => {
          const isActive = activeIndex === index

          return (
            <button
              key={item.title}
              type="button"
              aria-pressed={isActive}
              onClick={() => setActiveIndex(index)}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className={`group relative flex min-h-[112px] flex-col items-center justify-center overflow-hidden rounded-2xl border p-2.5 text-center transition-colors duration-300 sm:min-h-[145px] sm:rounded-[22px] sm:p-4 ${
                isActive
                  ? 'border-[#45BEB3]/55 bg-[#45BEB3]/[0.09]'
                  : 'border-white/[0.10] bg-white/[0.035] hover:border-[#45BEB3]/40 hover:bg-[#45BEB3]/[0.06]'
              }`}
            >
              <span
                className={`absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 ${
                  isActive ? 'opacity-100' : ''
                }`}
                style={{
                  background:
                    'radial-gradient(circle at 50% 0%, rgba(69,190,179,0.16), transparent 70%)'
                }}
              />

              <span className="relative z-10 mb-2 text-[10px] font-semibold tracking-[0.18em] text-[#45BEB3] sm:mb-3 sm:text-xs">
                0{index + 1}
              </span>

              <span className="relative z-10 text-[10px] font-semibold leading-4 text-white sm:text-sm sm:leading-5 md:text-base">
                {item.title}
              </span>

              <span
                className={`relative z-10 mt-2 h-[2px] w-5 rounded-full transition-all duration-300 sm:mt-3 ${
                  isActive
                    ? 'w-9 bg-[#45BEB3]'
                    : 'bg-white/20 group-hover:w-8 group-hover:bg-[#45BEB3]'
                }`}
              />
            </button>
          )
        })}
      </div>

      <div
        key={activeItem.title}
        className="mt-4 rounded-2xl border border-white/[0.08] bg-white/[0.025] px-4 py-5 sm:mt-5 sm:rounded-3xl sm:px-7 sm:py-6"
      >
        <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#45BEB3] sm:text-xs">
          {activeItem.label}
        </span>

        <h3 className="mt-2 text-xl font-semibold leading-tight text-white sm:mt-3 sm:text-2xl md:text-3xl">
          {activeItem.title}
        </h3>

        <p className="mt-2 max-w-3xl text-xs leading-6 text-white/60 sm:mt-3 sm:text-sm sm:leading-7 md:text-base">
          {activeItem.description}
        </p>
      </div>
    </div>
  )
}
