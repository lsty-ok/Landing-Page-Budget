import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

const Particles = () => {
  const count = 3000
  const points = useRef()

  // Bikin posisi awal grid partikel (60x50 titik)
  const [positions] = useMemo(() => {
    const pos = new Float32Array(count * 3)
    let index = 0
    for (let i = 0; i < 60; i++) {
      for (let j = 0; j < 50; j++) {
        pos[index * 3] = (i - 30) * 0.4     // X axis
        pos[index * 3 + 1] = 0              // Y axis (akan dianimasikan)
        pos[index * 3 + 2] = (j - 25) * 0.4 // Z axis
        index++
      }
    }
    return [pos]
  }, [count])

  // Hitung gelombang setiap frame
  useFrame((state) => {
    if (!points.current) return
    const time = state.clock.getElapsedTime()
    const posAttribute = points.current.geometry.attributes.position
    
    for (let i = 0; i < count; i++) {
        const x = posAttribute.getX(i)
        const z = posAttribute.getZ(i)
        
        // Rumus matematika Math.sin & Math.cos untuk membuat ombak halus
        const y = Math.sin(time * 1.5 + x * 0.5) * 0.4 + Math.cos(time * 1.2 + z * 0.4) * 0.4
        
        // Posisikan gelombang agak di bawah
        posAttribute.setY(i, y - 2.5) 
    }
    posAttribute.needsUpdate = true
  })

  return (
    <points ref={points} rotation={[-0.1, 0, 0]}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      {/* Warna lime green BudJet + transparan agar elegan */}
      <pointsMaterial size={0.06} color="#c2d948" transparent opacity={0.9} sizeAttenuation={true} />
    </points>
  )
}

const HeroWave = () => {
  return (
    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0, pointerEvents: 'none' }}>
      <Canvas camera={{ position: [0, 0, 10], fov: 60 }} dpr={[1, 2]}>
        {/* Fog membuat batas ujung ombak memudar ke warna putih background Hero */}
        <fog attach="fog" args={['#ffffff', 5, 14]} />
        <ambientLight intensity={1} />
        <Particles />
      </Canvas>
    </div>
  )
}

export default HeroWave
