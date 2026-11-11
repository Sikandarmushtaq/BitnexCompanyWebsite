
import { memo, useCallback, useEffect, useMemo, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Environment, Lightformer } from '@react-three/drei'
import * as THREE from 'three'

const SHAPE_COUNT = 4
const TRANSITION_DURATION = 0.9
const SHAPE_INTERVAL = 4.2

const studioLights = [
  {
    id: 'top',
    position: [0, 4, 2],
    scale: [5, 1, 1],
    intensity: 4,
    color: '#ffffff',
  },
  {
    id: 'left',
    position: [-4, 0, 2],
    rotation: [0, 0, Math.PI / 5],
    scale: [1, 5, 1],
    intensity: 3,
    color: '#ffffff',
  },
  {
    id: 'right',
    position: [4, 1, 1],
    rotation: [0, 0, -Math.PI / 5],
    scale: [1, 4, 1],
    intensity: 2.5,
    color: '#dce8e5',
  },
  {
    id: 'bottom',
    position: [0, -4, 1],
    scale: [4, 1, 1],
    intensity: 2.5,
    color: '#45BEB3',
  },
]

function StudioEnvironment() {
  return (
    <Environment resolution={64} frames={1}>
      {studioLights.map((light) => (
        <Lightformer
          key={light.id}
          form="rect"
          position={light.position}
          rotation={light.rotation || [0, 0, 0]}
          scale={light.scale}
          intensity={light.intensity}
          color={light.color}
        />
      ))}
    </Environment>
  )
}

function MetallicShapes() {
  const groupsRef = useRef([])
  const elapsedRef = useRef(0)
  const activeShapeRef = useRef(0)
  const transitionRef = useRef({
    from: 0,
    to: 0,
    progress: 1,
  })

  const boostRef = useRef(0)
  const rotationSpeedRef = useRef(0.45)
  const nextShapeTimeRef = useRef(SHAPE_INTERVAL)

  const geometries = useMemo(() => ({
    ring: new THREE.TorusGeometry(1.15, 0.27, 28, 112),
    smallRing: new THREE.TorusGeometry(0.79, 0.19, 24, 96),
    cube: new THREE.BoxGeometry(1.75, 1.75, 1.75, 2, 2, 2),
    abstract: new THREE.IcosahedronGeometry(1.18, 1),
  }), [])

  const materials = useMemo(
    () =>
      Array.from({ length: SHAPE_COUNT }, (_, index) =>
        new THREE.MeshPhysicalMaterial({
          color: index === 3 ? '#d5e5e1' : '#cbd1d2',
          metalness: 0.94,
          roughness: index === 3 ? 0.22 : 0.16,
          clearcoat: 1,
          clearcoatRoughness: 0.08,
          envMapIntensity: 1.7,
          transparent: true,
          opacity: index === 0 ? 1 : 0,
          depthWrite: false,
        })
      ),
    []
  )

  // Release all geometries and materials when the scene unmounts.
  useEffect(() => {
    return () => {
      Object.values(geometries).forEach((geometry) => geometry.dispose())
      materials.forEach((material) => material.dispose())
    }
  }, [geometries, materials])

  // Start a smooth transition to the next geometry shape.
  const changeShape = useCallback(() => {
    const transition = transitionRef.current

    const currentShape =
      transition.progress >= 1
        ? activeShapeRef.current
        : transition.to

    const nextShape = (currentShape + 1) % SHAPE_COUNT

    transition.from = currentShape
    transition.to = nextShape
    transition.progress = 0

    activeShapeRef.current = nextShape
    nextShapeTimeRef.current = elapsedRef.current + SHAPE_INTERVAL
  }, [])

  // Make the next shape and rotation speed respond to user clicks.
  const handleShapeClick = useCallback(() => {
    changeShape()
    boostRef.current = 1.6
  }, [changeShape])

  useFrame((_, delta) => {
    const frameDelta = Math.min(delta, 0.04)

    elapsedRef.current += frameDelta

    if (
      transitionRef.current.progress >= 1 &&
      elapsedRef.current >= nextShapeTimeRef.current
    ) {
      changeShape()
    }

    boostRef.current = Math.max(0, boostRef.current - frameDelta)

    const targetSpeed = boostRef.current > 0 ? 3.2 : 0.45

    rotationSpeedRef.current = THREE.MathUtils.damp(
      rotationSpeedRef.current,
      targetSpeed,
      4,
      frameDelta
    )

    const transition = transitionRef.current

    if (transition.progress < 1) {
      transition.progress = Math.min(
        1,
        transition.progress + frameDelta / TRANSITION_DURATION
      )
    }

    const progress = transition.progress
    const eased = progress * progress * (3 - 2 * progress)
    const time = elapsedRef.current

    for (let index = 0; index < SHAPE_COUNT; index++) {
      const group = groupsRef.current[index]

      if (!group) continue

      let opacity = 0

      if (transition.from === transition.to) {
        opacity = index === transition.to ? 1 : 0
      } else if (index === transition.from) {
        opacity = 1 - eased
      } else if (index === transition.to) {
        opacity = eased
      }

      materials[index].opacity = opacity

      group.visible = opacity > 0.001
   group.scale.setScalar(1.13 * (0.94 + opacity * 0.06))

      group.rotation.y += rotationSpeedRef.current * frameDelta
      group.rotation.x = 0.43 + Math.sin(time * 0.45) * 0.09
      group.rotation.z = 0.18 + Math.sin(time * 0.32) * 0.07

      group.position.y = Math.sin(time * 0.55) * 0.045
    }
  })

  return (
    <>
      <group
        ref={(node) => {
          groupsRef.current[0] = node
        }}
      >
        <mesh
          geometry={geometries.ring}
          material={materials[0]}
          onClick={handleShapeClick}
        />
      </group>

      <group
        ref={(node) => {
          groupsRef.current[1] = node
        }}
      >
        <mesh
          geometry={geometries.cube}
          material={materials[1]}
          onClick={handleShapeClick}
        />
      </group>

      <group
        ref={(node) => {
          groupsRef.current[2] = node
        }}
        rotation={[0.2, 0, 0.3]}
      >
        <mesh
          geometry={geometries.smallRing}
          material={materials[2]}
          position={[-0.43, 0, 0]}
          onClick={handleShapeClick}
        />

        <mesh
          geometry={geometries.smallRing}
          material={materials[2]}
          position={[0.43, 0, 0]}
          rotation={[0.5, 0.85, 0.6]}
          onClick={handleShapeClick}
        />
      </group>

      <group
        ref={(node) => {
          groupsRef.current[3] = node
        }}
      >
        <mesh
          geometry={geometries.abstract}
          material={materials[3]}
          onClick={handleShapeClick}
        />
      </group>
    </>
  )
}

function HeroGeometry() {
  return (
    <div className="relative h-full w-full">
      <div className="pointer-events-none absolute inset-[5%] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(69,190,179,0.16),transparent_68%)]" />

      <Canvas
        camera={{ position: [0, 0, 6.8], fov: 40 }}
        dpr={[1, 1.2]}
        frameloop="always"
        performance={{ min: 0.7, max: 1, debounce: 250 }}
        gl={{
          alpha: true,
          antialias: true,
          powerPreference: 'high-performance',
          stencil: false,
        }}
      >
        <ambientLight intensity={0.4} />
        <directionalLight position={[3, 4, 5]} intensity={1.4} />
        <directionalLight
          position={[-4, -2, 3]}
          intensity={0.7}
          color="#45BEB3"
        />

        <StudioEnvironment />
        <MetallicShapes />
      </Canvas>
    </div>
  )
}

export default memo(HeroGeometry)
