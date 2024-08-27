'use client';

import React, { Dispatch, FC, SetStateAction, Suspense, useEffect, useState } from 'react';
import { Html, OrbitControls, Preload, useGLTF, useProgress } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { useTheme } from 'next-themes';
import CanvasLoader from '@/components/Three/CanvasLoader/CanvasLoader';

interface ComputersProps {
     isMobile: boolean;
     rotationY: number;
}

const Computers = ({ isMobile, rotationY }: ComputersProps) => {
     const computer = useGLTF('/models/desktop_pc/scene.gltf');
     const { theme } = useTheme();

     return (
          <mesh rotation={[0, rotationY, 0]}>
               <hemisphereLight
                    intensity={!(theme === 'dark') ? 1 : 0.5}
                    groundColor={!(theme === 'dark') ? 'white' : 'black'}
               />
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

interface ComputersCanvasProps {
     setInit: Dispatch<SetStateAction<boolean>>;
}

const ComputersCanvas = ({ setInit }: ComputersCanvasProps) => {
     const [isMobile, setIsMobile] = useState(false);
     const [rotationY, setRotationY] = useState(0); // State to control the Y-axis rotation
     const [lastScrollTop, setLastScrollTop] = useState(0); // Track the last scroll position

     useEffect(() => {
          const mediaQuery = window.matchMedia('(max-width: 639px)');
          setIsMobile(mediaQuery.matches);

          const handleMediaQueryChange = (event: MediaQueryListEvent) => {
               setIsMobile(event.matches);
          };

          mediaQuery.addEventListener('change', handleMediaQueryChange);

          return () => {
               mediaQuery.removeEventListener('change', handleMediaQueryChange);
          };
     }, []);

     useEffect(() => {
          const handleScroll = () => {
               const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

               if (scrollTop > lastScrollTop) {
                    // Scrolling down
                    setRotationY((prev) => prev + 0.04);
               } else {
                    // Scrolling up
                    setRotationY((prev) => prev - 0.04);
               }

               setLastScrollTop(scrollTop);
          };

          window.addEventListener('scroll', handleScroll);

          return () => {
               window.removeEventListener('scroll', handleScroll);
          };
     }, [lastScrollTop]);

     const { progress } = useProgress();

     useEffect(() => {
          if (progress === 100) {
               setInit(true);
          }
     }, [progress]);

     return (
          <Canvas
               frameloop="demand"
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
                    <Computers isMobile={isMobile} rotationY={rotationY} />
                    <Preload all />
                    <Html
                         as="div"
                         wrapperClass="absolute !left-10 xl:!left-16 bottom-10 !transform-none !top-[unset]"
                    >
                         <div className="tags">{'</canvas>'}</div>
                    </Html>
               </Suspense>
          </Canvas>
     );
};

export default ComputersCanvas;
