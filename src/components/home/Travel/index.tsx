import React from 'react';
import { createRoot } from 'react-dom/client'
import { Canvas, useFrame, useLoader } from '@react-three/fiber'
import { Mesh } from 'three';
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import globe from './globe.jpg'
function MyRotatingBox() {
  const myMesh = React.useRef<Mesh>(null!);

  const colorMap = useLoader(TextureLoader, globe)


  useFrame(({ clock }) => {
    const a = clock.getElapsedTime() * 0.25;
    myMesh.current.rotation.y = a;
  });

  return (
    <mesh ref={myMesh}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial map={colorMap} />
    </mesh>
  );
}

export const Travel = () => {
  return (
    <div className='flex flex-col md:flex-row w-screen h-screen'>
      <div className='flex justify-center items-center md:w-1/2 md:h-full'>
        <h1 className='press-start text-lg'>🚧 UNDER CONSTRUCTION..COME BACK LATER 🚧</h1>
      </div>
      <div className='w-full h-full md:w-1/2'>
        <Canvas>
          <MyRotatingBox />
          <ambientLight intensity={0.5} />
          <directionalLight />
        </Canvas>
      </div>
    </div>
  )
}