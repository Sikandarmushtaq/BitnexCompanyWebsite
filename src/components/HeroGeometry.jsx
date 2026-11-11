import { memo, useCallback, useEffect, useMemo, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Environment, Lightformer } from '@react-three/drei'
import * as THREE from 'three'

const SHAPE_COUNT = 5
const TRANSITION_DURATION = 0.9
const SHAPE_INTERVAL = 4.2

// Logo outline points traced from the logo image (pixel coordinates).
const LOGO_TEAL = [
  [[12.0,32.88],[11.38,33.38],[10.88,34.38],[11.0,47.25],[11.12,47.38],[11.12,106.25],[11.5,108.62],[11.5,110.62],[12.0,113.75],[13.25,116.12],[13.75,119.38],[15.38,122.25],[15.88,124.0],[19.62,129.62],[22.0,131.88],[23.38,133.88],[28.38,138.5],[32.88,141.25],[34.38,142.38],[36.5,143.12],[39.12,144.62],[41.62,145.12],[45.38,146.5],[47.75,147.0],[61.12,147.25],[65.88,146.5],[68.0,145.62],[71.88,144.5],[74.62,143.12],[75.62,142.25],[76.25,140.38],[76.25,120.38],[75.88,119.38],[75.25,118.88],[74.25,119.0],[71.0,122.25],[68.25,123.62],[67.38,124.25],[66.12,124.75],[63.5,126.38],[61.88,126.75],[59.25,126.88],[56.25,127.38],[54.5,127.38],[47.25,126.25],[43.12,124.25],[39.25,121.38],[38.0,120.12],[37.0,118.75],[35.88,117.62],[33.5,114.12],[31.75,109.25],[31.0,105.75],[31.12,102.0],[31.0,101.88],[30.88,91.12],[31.0,91.0],[31.12,77.25],[30.88,72.62],[30.75,54.62],[30.62,51.62],[30.38,50.5],[30.12,47.25],[29.5,45.62],[28.75,44.5],[27.25,41.25],[25.75,39.25],[23.75,37.25],[22.62,36.5],[21.75,35.62],[17.0,33.25],[14.0,32.62],[12.75,32.62]],
  [[58.38,33.88],[58.25,34.38],[58.25,38.12],[58.38,38.25],[58.25,49.12],[58.62,50.38],[59.75,51.25],[63.0,52.12],[65.5,52.25],[78.75,52.12],[79.25,52.38],[79.88,53.25],[80.12,54.25],[79.88,55.75],[80.0,58.38],[79.75,59.88],[80.0,61.0],[80.5,62.0],[81.25,62.75],[84.62,65.25],[86.12,66.88],[87.75,68.0],[89.38,69.5],[90.0,70.38],[93.25,73.75],[95.12,76.38],[96.38,79.0],[97.25,79.88],[97.88,80.88],[98.75,81.62],[99.38,81.62],[99.75,81.25],[100.12,80.12],[100.12,76.0],[100.0,75.88],[100.12,65.75],[100.25,65.62],[100.12,54.12],[100.62,52.88],[101.25,52.38],[102.0,52.12],[118.25,52.0],[120.62,51.5],[121.5,51.0],[122.0,50.12],[122.12,34.5],[121.75,33.38],[121.0,32.62],[120.62,32.5],[114.0,32.38],[113.88,32.25],[106.12,32.25],[106.0,32.38],[91.88,32.38],[91.75,32.25],[62.88,32.38],[61.12,32.25],[59.88,32.5],[59.12,32.88]],
]

const LOGO_DARK = [
  [[34.62,62.75],[34.12,63.25],[33.88,63.88],[33.88,90.62],[34.38,91.38],[34.75,91.25],[35.75,89.38],[37.75,86.88],[39.62,85.0],[42.88,82.62],[45.62,81.12],[46.62,80.88],[47.75,80.25],[49.88,79.88],[51.88,79.12],[53.75,79.0],[59.38,79.12],[61.25,79.88],[63.0,80.12],[65.5,81.12],[69.5,83.38],[73.12,86.62],[75.75,89.88],[77.62,93.25],[78.0,94.62],[78.5,95.5],[78.75,96.38],[78.75,97.25],[79.62,100.0],[79.75,145.25],[81.0,149.5],[81.75,150.75],[82.12,151.88],[83.88,154.62],[86.75,157.75],[88.5,159.12],[91.62,161.0],[95.0,162.38],[98.25,162.75],[99.0,163.0],[99.75,163.0],[100.25,162.75],[100.62,161.88],[100.62,103.38],[100.12,95.12],[99.38,93.0],[99.12,90.88],[97.88,87.12],[96.0,82.75],[93.75,78.75],[89.5,73.0],[85.25,68.75],[82.88,66.88],[77.62,63.38],[73.25,61.25],[68.12,59.38],[66.38,59.12],[63.38,58.25],[60.5,58.12],[57.5,57.62],[53.88,57.62],[51.75,58.0],[46.88,58.38],[45.5,58.88],[42.38,59.5],[38.0,61.12]],
]

const LOGO_HEIGHT = 2.3
const LOGO_DEPTH = 0.3

// Turns the traced outlines into centred, scaled 3D extrusions.
function buildLogoGeometries() {
  const points = [...LOGO_TEAL, ...LOGO_DARK].flat()
  const xs = points.map((point) => point[0])
  const ys = points.map((point) => point[1])

  const centerX = (Math.min(...xs) + Math.max(...xs)) / 2
  const centerY = (Math.min(...ys) + Math.max(...ys)) / 2
  const scale = LOGO_HEIGHT / (Math.max(...ys) - Math.min(...ys))

  const toShape = (outline) =>
    new THREE.Shape(
      outline.map(
        ([x, y]) =>
          new THREE.Vector2((x - centerX) * scale, -(y - centerY) * scale)
      )
    )

  const options = {
    depth: LOGO_DEPTH,
    bevelEnabled: true,
    bevelThickness: 0.04,
    bevelSize: 0.03,
    bevelSegments: 5,
  }

  const build = (outlines) => {
    const geometry = new THREE.ExtrudeGeometry(outlines.map(toShape), options)
    geometry.translate(0, 0, -LOGO_DEPTH / 2)
    return geometry
  }

  return { teal: build(LOGO_TEAL), dark: build(LOGO_DARK) }
}

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

  const geometries = useMemo(() => {
    const logo = buildLogoGeometries()

    return {
      ring: new THREE.TorusGeometry(1.15, 0.27, 28, 112),
      smallRing: new THREE.TorusGeometry(0.79, 0.19, 24, 96),
      cube: new THREE.BoxGeometry(1.75, 1.75, 1.75, 2, 2, 2),
      abstract: new THREE.IcosahedronGeometry(1.18, 1),
      // bT logo parts (same metallic look as the other shapes)
      logoTeal: logo.teal,
      logoDark: logo.dark,
    }
  }, [])

  const materials = useMemo(
    () =>
      Array.from({ length: SHAPE_COUNT }, (_, index) =>
        new THREE.MeshPhysicalMaterial({
          color: index === 4 ? '#d5e5e1' : '#cbd1d2',
          metalness: 0.94,
          roughness: index === 4 ? 0.22 : 0.16,
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
      {/* bT logo (first shape) */}
      <group
        ref={(node) => {
          groupsRef.current[0] = node
        }}
      >
        <mesh
          geometry={geometries.logoTeal}
          material={materials[0]}
          onClick={handleShapeClick}
        />
        <mesh
          geometry={geometries.logoDark}
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
          geometry={geometries.ring}
          material={materials[1]}
          onClick={handleShapeClick}
        />
      </group>

      <group
        ref={(node) => {
          groupsRef.current[2] = node
        }}
      >
        <mesh
          geometry={geometries.cube}
          material={materials[2]}
          onClick={handleShapeClick}
        />
      </group>

      <group
        ref={(node) => {
          groupsRef.current[3] = node
        }}
        rotation={[0.2, 0, 0.3]}
      >
        <mesh
          geometry={geometries.smallRing}
          material={materials[3]}
          position={[-0.43, 0, 0]}
          onClick={handleShapeClick}
        />

        <mesh
          geometry={geometries.smallRing}
          material={materials[3]}
          position={[0.43, 0, 0]}
          rotation={[0.5, 0.85, 0.6]}
          onClick={handleShapeClick}
        />
      </group>

      <group
        ref={(node) => {
          groupsRef.current[4] = node
        }}
      >
        <mesh
          geometry={geometries.abstract}
          material={materials[4]}
          onClick={handleShapeClick}
        />
      </group>
    </>
  )
}

function HeroGeometry() {
  return (
    <div className="relative w-full h-full">
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
