
import { useEffect, useRef } from 'react'

export default function CursorFollower({ enabled = true }) {
  const cursorRef = useRef(null)

  useEffect(() => {
    if (!enabled) return

    const cursor = cursorRef.current

    if (!cursor) return

    const media = window.matchMedia('(hover: hover) and (pointer: fine)')

    if (!media.matches) return

    let targetX = 0
    let targetY = 0
    let currentX = 0
    let currentY = 0
    let animationId = 0
    let visible = false

    function animate() {
      currentX += (targetX - currentX) * 0.2
      currentY += (targetY - currentY) * 0.2

      cursor.style.transform =
        `translate3d(${currentX}px, ${currentY}px, 0)`

      const distance =
        Math.abs(targetX - currentX) + Math.abs(targetY - currentY)

      if (distance > 0.25) {
        animationId = requestAnimationFrame(animate)
      } else {
        animationId = 0
      }
    }

    function handlePointerMove(event) {
      if (event.pointerType === 'touch') return

      targetX = event.clientX + 13
      targetY = event.clientY + 13

      if (!visible) {
        currentX = targetX
        currentY = targetY

        cursor.style.transform =
          `translate3d(${currentX}px, ${currentY}px, 0)`

        visible = true
        cursor.style.opacity = '1'
      }

      if (!animationId) {
        animationId = requestAnimationFrame(animate)
      }
    }

    function handlePointerOut(event) {
      if (!event.relatedTarget) {
        visible = false
        cursor.style.opacity = '0'
        cancelAnimationFrame(animationId)
        animationId = 0
      }
    }

    function handleWindowBlur() {
      visible = false
      cursor.style.opacity = '0'
      cancelAnimationFrame(animationId)
      animationId = 0
    }

    document.addEventListener('pointermove', handlePointerMove, {
      passive: true,
    })

    document.addEventListener('pointerout', handlePointerOut)
    window.addEventListener('blur', handleWindowBlur)

    return () => {
      cancelAnimationFrame(animationId)
      document.removeEventListener('pointermove', handlePointerMove)
      document.removeEventListener('pointerout', handlePointerOut)
      window.removeEventListener('blur', handleWindowBlur)
    }
  }, [enabled])

  if (!enabled) return null

  return (
    <div
      ref={cursorRef}
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[100] h-5 w-5 rounded-full border border-white/90 opacity-0 mix-blend-difference"
      style={{
        willChange: 'transform',
        marginLeft: '-10px',
        marginTop: '-10px',
      }}
    />
  )
}
