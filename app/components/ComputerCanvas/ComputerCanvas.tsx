'use client';

import React, { Dispatch, FC, SetStateAction, Suspense, useEffect, useState } from 'react';
import { Html, OrbitControls, Preload, useGLTF, useProgress } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { useTheme } from 'next-themes';
import CanvasLoader from '@/components/Loader/Loader';

const Computers: FC<{ isMobile: boolean }> = ({ isMobile }) => {
     const computer = useGLTF('/models/desktop_pc/scene.gltf');
     const { theme } = useTheme();

     return (
          <mesh>
               <hemisphereLight intensity={!(theme === 'dark') ? 1 : 0.5} groundColor={!(theme === 'dark') ? 'white' : 'black'} />
               <spotLight
                    position={[-20, 50, 10]}
                    angle={0.12}
                    penumbra={1}
                    intensity={1}
                    castShadow
                    shadow-mapSize={1024}
               />
               <pointLight intensity={1} />
               <primitive
                    object={computer.scene}
                    scale={isMobile ? 0.45 : 0.75}
                    position={isMobile ? [0, -3, -1.5] : [0, -3.25, -1.5]}
                    rotation={[-0.01, -0.2, -0.1]}
               />
          </mesh>
     );
};

const ComputersCanvas: FC<{ setInit: Dispatch<SetStateAction<boolean>> }> = ({ setInit }) => {
     const [isMobile, setIsMobile] = useState(false);

     useEffect(() => {
          const mediaQuery = window.matchMedia('(max-width: 500px)');
          setIsMobile(mediaQuery.matches);

          const handleMediaQueryChange = (event: MediaQueryListEvent) => {
               setIsMobile(event.matches);
          };

          mediaQuery.addEventListener('change', handleMediaQueryChange);

          return () => {
               mediaQuery.removeEventListener('change', handleMediaQueryChange);
          };
     }, []);

     const { progress } = useProgress();

     useEffect(() => {
          if (progress === 100) {
               setInit(true);
          }
     }, [progress]);

     return (
          <Canvas
               frameloop='demand'
               shadows
               dpr={[1, 2]}
               camera={{ position: [20, 3, 30], fov: 15 }}
               gl={{ preserveDrawingBuffer: true }}
          >
               <Suspense fallback={<CanvasLoader />}>
                    <OrbitControls
                         enableZoom={false}
                         autoRotate={true}
                         autoRotateSpeed={0.5}
                         maxPolarAngle={Math.PI / 2}
                         minPolarAngle={Math.PI / 2}
                    />
                    <Computers isMobile={isMobile} />
                    <Preload all />
                    <Html
                         as='div'
                         wrapperClass='absolute !left-10 md:!left-20 xl:!left-40 bottom-10 !transform-none !top-[unset]'
                    >
                         <div className='tags animate__animated animate__fadeIn '>{'</canvas>'}</div>

                    </Html>
               </Suspense>
          </Canvas>

     );
};

export default ComputersCanvas;