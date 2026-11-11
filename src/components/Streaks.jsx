
import { useEffect, useRef } from 'react'

const DEFAULT_COLORS = ['#ffffff', '#55D6A5', '#B5FFE0']

function hexToRgba(hex, alpha) {
  let value = hex.replace('#', '')

  if (value.length === 3) {
    value = value.split('').map((part) => part + part).join('')
  }

  const number = parseInt(value, 16)
  const red = (number >> 16) & 255
  const green = (number >> 8) & 255
  const blue = number & 255

  return `rgba(${red}, ${green}, ${blue}, ${alpha})`
}

function getDirection(direction) {
  const directions = {
    right: { x: 1, y: 0 },
    left: { x: -1, y: 0 },
    'top-right-to-bottom-left': {
      x: -Math.SQRT1_2,
      y: Math.SQRT1_2,
    },
  }

  return directions[direction] || directions.right
}

function createStreakSprite(color, glow, thickness) {
  const sprite = document.createElement('canvas')
  const context = sprite.getContext('2d')

  const spriteWidth = 256
  const spriteHeight = Math.max(32, Math.ceil(glow * 2.5 + thickness * 5))

  sprite.width = spriteWidth
  sprite.height = spriteHeight

  const gradient = context.createLinearGradient(0, 0, spriteWidth, 0)

  gradient.addColorStop(0, hexToRgba(color, 0))
  gradient.addColorStop(0.55, hexToRgba(color, 0.2))
  gradient.addColorStop(0.88, hexToRgba(color, 0.7))
  gradient.addColorStop(1, hexToRgba(color, 1))

  context.beginPath()
  context.moveTo(0, spriteHeight / 2)
  context.lineTo(spriteWidth, spriteHeight / 2)
  context.strokeStyle = gradient
  context.lineWidth = thickness
  context.lineCap = 'round'
  context.shadowColor = color
  context.shadowBlur = glow
  context.stroke()

  return sprite
}

export default function Streaks({
  count = 110,
  speed = 14,
  length = 135,
  colors = DEFAULT_COLORS,
  opacity = 0.85,
  glow = 16,
  thickness = 1.2,
  direction = 'right',
  interactive = false,
  repelRadius = 150,
  repelStrength = 35,
  className = '',
  style = {},
}) {
  const canvasRef = useRef(null)
  const colorSignature = colors.join('|')

  useEffect(() => {
    const canvas = canvasRef.current

    if (!canvas) return

    const context = canvas.getContext('2d', {
      alpha: true,
      desynchronized: true,
    })

    if (!context) return

    let width = 0
    let height = 0
    let animationId = 0
    let lastTime = 0
    let running = false
    let streaks = []

    const movement = getDirection(direction)
    const angle = Math.atan2(movement.y, movement.x)

    const perpendicular = {
      x: -movement.y,
      y: movement.x,
    }

    const palette = colorSignature.split('|').filter(Boolean)
    const spriteHeight = Math.max(32, Math.ceil(glow * 2.5 + thickness * 5))

    const sprites = new Map(
      palette.map((color) => [
        color,
        createStreakSprite(color, glow, thickness),
      ])
    )

    const pointer = {
      x: -1000,
      y: -1000,
      active: false,
    }

    const motionPreference = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    )

    const reducedMotion = motionPreference.matches

    // Create all particles without updating React state.
    function createStreaks() {
      streaks = Array.from({ length: count }, () => {
        const color = palette[Math.floor(Math.random() * palette.length)]

        return {
          x: Math.random() * width,
          y: Math.random() * height,
          speed: speed * (0.75 + Math.random() * 0.5),
          length: length * (0.7 + Math.random() * 0.6),
          opacity: opacity * (0.55 + Math.random() * 0.45),
          sprite: sprites.get(color),
          offset: 0,
        }
      })
    }

    // Resize the canvas without changing its displayed dimensions.
    function resizeCanvas() {
      const rect = canvas.getBoundingClientRect()

      if (!rect.width || !rect.height) return

      width = rect.width
      height = rect.height

      const dpr = Math.min(window.devicePixelRatio || 1, 1.5)

      canvas.width = Math.round(width * dpr)
      canvas.height = Math.round(height * dpr)

      context.setTransform(dpr, 0, 0, dpr, 0, 0)

      createStreaks()
    }

    // Track cursor movement only for interactive Hero streaks.
    function handlePointerMove(event) {
      const rect = canvas.getBoundingClientRect()

      pointer.x = event.clientX - rect.left
      pointer.y = event.clientY - rect.top

      pointer.active =
        pointer.x >= 0 &&
        pointer.x <= width &&
        pointer.y >= 0 &&
        pointer.y <= height
    }

    // Move particles and respawn them outside the visible canvas.
    function moveStreak(streak, delta) {
      if (reducedMotion) return

      streak.x += movement.x * streak.speed * delta
      streak.y += movement.y * streak.speed * delta

      if (direction === 'right' && streak.x - streak.length > width) {
        streak.x = -streak.length
        streak.y = Math.random() * height
      }

      if (direction === 'left' && streak.x + streak.length < 0) {
        streak.x = width + streak.length
        streak.y = Math.random() * height
      }

      if (direction === 'top-right-to-bottom-left') {
        if (
          streak.x < -streak.length ||
          streak.y > height + streak.length
        ) {
          if (Math.random() > 0.5) {
            streak.x = width + Math.random() * streak.length
            streak.y = Math.random() * height
          } else {
            streak.x = Math.random() * width
            streak.y = -Math.random() * streak.length
          }
        }
      }
    }

    // Draw each pre-rendered streak and apply optional cursor repulsion.
    function drawStreak(streak, delta) {
      moveStreak(streak, delta)

      let targetOffset = 0

      if (interactive && pointer.active) {
        const dx = streak.x - pointer.x
        const dy = streak.y - pointer.y
        const distanceSquared = dx * dx + dy * dy

        if (distanceSquared < repelRadius * repelRadius) {
          const distance = Math.sqrt(distanceSquared)
          const intensity = 1 - distance / repelRadius
          const side = dx * perpendicular.x + dy * perpendicular.y

          targetOffset =
            (side >= 0 ? 1 : -1) * repelStrength * intensity
        }
      }

      const easing = 1 - Math.pow(0.82, delta)

      streak.offset += (targetOffset - streak.offset) * easing

      const headX = streak.x + perpendicular.x * streak.offset
      const headY = streak.y + perpendicular.y * streak.offset

      context.save()
      context.translate(headX, headY)
      context.rotate(angle)
      context.globalAlpha = streak.opacity

      context.drawImage(
        streak.sprite,
        -streak.length,
        -spriteHeight / 2,
        streak.length,
        spriteHeight
      )

      context.restore()
    }

    // Render the animation independently from React.
    function animate(time) {
      if (!running) return

      const delta = lastTime
        ? Math.min((time - lastTime) / 16.6667, 1.5)
        : 1

      lastTime = time

      context.clearRect(0, 0, width, height)

      for (let index = 0; index < streaks.length; index++) {
        drawStreak(streaks[index], delta)
      }

      animationId = requestAnimationFrame(animate)
    }

    // Start animation only when the tab is visible.
    function startAnimation() {
      if (running || document.hidden) return

      running = true
      lastTime = 0

      if (reducedMotion) {
        context.clearRect(0, 0, width, height)
        streaks.forEach((streak) => drawStreak(streak, 0))
        return
      }

      animationId = requestAnimationFrame(animate)
    }

    // Pause rendering when the browser tab is hidden.
    function stopAnimation() {
      running = false
      cancelAnimationFrame(animationId)
      animationId = 0
      lastTime = 0
    }

    function handleVisibilityChange() {
      if (document.hidden) {
        stopAnimation()
      } else {
        startAnimation()
      }
    }

    const resizeObserver = new ResizeObserver(resizeCanvas)

    resizeObserver.observe(canvas)

    if (interactive) {
      window.addEventListener('pointermove', handlePointerMove, {
        passive: true,
      })
    }

    document.addEventListener('visibilitychange', handleVisibilityChange)

    resizeCanvas()
    startAnimation()

    return () => {
      stopAnimation()
      resizeObserver.disconnect()

      if (interactive) {
        window.removeEventListener('pointermove', handlePointerMove)
      }

      document.removeEventListener(
        'visibilitychange',
        handleVisibilityChange
      )

      sprites.forEach((sprite) => {
        sprite.width = 0
        sprite.height = 0
      })
    }
  }, [
    count,
    speed,
    length,
    colorSignature,
    opacity,
    glow,
    thickness,
    direction,
    interactive,
    repelRadius,
    repelStrength,
  ])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={className}
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 0,
        ...style,
      }}
    />
  )
}
