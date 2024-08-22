import { Html, useProgress } from "@react-three/drei";
import './Loader.scss';

const CanvasLoader = () => {
     const { progress } = useProgress();
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
               <div className="bg-zinc-200 dark:bg-zinc-700 rounded-xl overflow-hidden w-2/3 md:w-1/3 my-8">
                    <div className="relative h-4 flex items-center justify-center">
                         <div className='absolute top-0 bottom-0 left-0 rounded-xl bg-teal-400 dark:bg-teal-500' style={{ width: `${progress.toFixed(2)}%` }}></div>
                         <div className="relative text-gray-800 dark:text-white font-medium text-xs">{progress.toFixed(2)}%</div>
                    </div>
               </div>
          </Html>
     );
};

export default CanvasLoader;