'use client';

import React, { Dispatch, FC, Suspense, useEffect, useState, useMemo } from 'react';
import { Html, OrbitControls, Preload, useProgress } from '@react-three/drei';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import QRCode from 'qrcode';
import * as THREE from 'three';
import CanvasLoader from '@/components/Three/CanvasLoader/CanvasLoader';

interface CubeProps {
     isMobile: boolean;
}

const QRCodeCube: FC<CubeProps> = ({ isMobile }) => {
     const qrTexture = useMemo(() => {
          const canvas = document.createElement('canvas');
          canvas.width = 256;
          canvas.height = 256;

          // Generate the QR code with the dynamic URL
          QRCode.toCanvas(
               canvas,
               `${window.location.origin}/files/cv/gz.pdf`,
               { width: 256, margin: 1 }
          );

          const texture = new THREE.CanvasTexture(canvas);
          texture.needsUpdate = true;
          return texture;
     }, []);

     return (
          <mesh>
               <boxGeometry args={[1, 1, 1]} />
               <meshBasicMaterial
                    map={qrTexture}
                    color="white" // Set the base color of the cube to white
               />
          </mesh>
     );
};

// This component will handle the FOV logic
const AdaptiveCamera = ({ isMobile }: { isMobile: boolean }) => {
     const { camera } = useThree() as any;

     useEffect(() => {
          // Dynamically update the FOV based on isMobile state
          camera.fov = isMobile ? 20 : 10;
          camera.updateProjectionMatrix(); // Important: Update the projection matrix after changing FOV
     }, [isMobile, camera]);

     return null; // This component only handles camera settings and doesn't need to render anything
};

const QRCodeCanvas = () => {
     const [isMobile, setIsMobile] = useState(false);

     useEffect(() => {
          const mediaQuery = window.matchMedia('(max-width: 767px)');
          setIsMobile(mediaQuery.matches);

          const handleMediaQueryChange = (event: MediaQueryListEvent) => {
               setIsMobile(event.matches);
          };

          mediaQuery.addEventListener('change', handleMediaQueryChange);

          return () => {
               mediaQuery.removeEventListener('change', handleMediaQueryChange);
          };
     }, []);

     return (
          <Canvas
               frameloop="demand"
               shadows
               dpr={[1, 2]}
               camera={{ position: [3, 3, 5], fov: 10 }} // Initial fov set to a default value
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
                    {/* Handle FOV adjustment here */}
                    <AdaptiveCamera isMobile={isMobile} />
                    <QRCodeCube isMobile={isMobile} />
                    <Preload all />
                    <Html
                         as="div"
                         wrapperClass="absolute !left-10 xl:!left-16 bottom-10 !transform-none !top-[unset]"
                    >
                    </Html>
               </Suspense>
          </Canvas>
     );
};

export default QRCodeCanvas;
