import { Html, useProgress } from "@react-three/drei";
import { BackgroundGradient } from "../../ui/background-gradient";
import { useEffect } from "react";

const CanvasLoader = () => {
     const { progress } = useProgress();

     useEffect(() => {
          document.body.style.overflow = 'hidden';
          return () => {
               document.body.style.overflow = '';
          };
     }, []);

     return (
          <Html
               as='div'
               fullscreen
               style={{
                    zIndex: 50,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
               }}
          >
               <span className="spinner"></span>
               <div className=" w-2/3 md:w-1/3 mt-4">
                    <BackgroundGradient className="rounded-full bg-white/80 dark:bg-zinc-800/80 overflow-hidden">
                         <div className="bg-white dark:bg-zinc-700 rounded-xl overflow-hidden">
                              <div className="relative h-4 flex items-center justify-center">
                                   <div className='absolute top-0 bottom-0 left-0 rounded-xl bg-teal-400 dark:bg-teal-500' style={{ width: `${progress.toFixed(2)}%` }}></div>
                                   <div className="relative text-gray-800 dark:text-white font-medium text-xs">{progress.toFixed(2)}%</div>
                              </div>
                         </div>
                    </BackgroundGradient>
               </div>
          </Html >
     );
};

export default CanvasLoader;