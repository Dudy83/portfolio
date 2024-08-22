'use client';

import { useState } from "react";
import ComputersCanvas from "../ComputerCanvas/ComputerCanvas";
import { TextGenerateEffect } from "../ui/text-generate-effect";
import './HeroSection.scss';
import { LampContainer } from "../ui/lamp";
import { motion } from "framer-motion";

const HeroSection = () => {
     const [isCanvasInit, setIsCanvasInit] = useState(false);

     return (
          <header className={`relative w-full h-[75vh] mx-auto`}>
               {isCanvasInit && (
                    <div
                         className={`absolute inset-0 top-[15px] sm:top-[60px] max-w-7xl mx-auto xl:px-16 px-0 flex flex-row items-start gap-5 animate__animated animate__fadeIn`}
                    >
                         <div className='flex flex-col justify-center items-center mt-1'>
                              <div className='w-5 h-5 rounded-full bg-teal-500' />
                              <div className='w-1 sm:h-80 h-40 bg-gradient-to-b from-teal-500 to-transparent' />
                         </div>

                         <div className="md:ml-2">
                              <div>
                                   <div className="tags first">{'<h1>'}</div>
                                   <TextGenerateEffect className="text-3xl md:text-4xl lg:text-5xl tracking-wide" words='Bonjour !' />
                                   <TextGenerateEffect className="text-3xl md:text-4xl lg:text-5xl  tracking-wide text-teal-500" words='Je suis Guillaume,' duration={1} />
                                   <TextGenerateEffect className="text-3xl md:text-4xl lg:text-5xl tracking-wide" words='Développeur Web Fullstack' duration={1.5} />
                                   <div className="tags animate__animated animate__fadeIn animate__delay-1s">{'</h1>'}</div>
                              </div>

                              <div className="ml-0 md:ml-12 animate__animated animate__fadeIn animate__delay-1s">
                                   <div className="tags first">{'<p>'}</div>
                                   <p className={`text-zinc-800 dark:text-white text-base md:text-xl font-semibold tracking-tight`}>
                                        Je vous <span className="text-teal-500">accompagne</span> dans vos <span className="text-teal-500">projets </span>
                                        pour <span className="text-teal-500">sublimer <span className="text-zinc-800 dark:text-white">&</span> transformer </span><br className="hidden sm:block" />
                                        votre activité avec <span className="text-teal-500">créativité <span className="text-zinc-800 dark:text-white">&</span> expertise</span>.
                                   </p>
                                   <div className="tags">{'</p>'}</div>
                                   <br className="hidden sm:block" />
                                   <div className="tags first">{'<canvas>'}</div>
                              </div>

                         </div>
                    </div>
               )}
               <ComputersCanvas setInit={setIsCanvasInit} />
          </header>
     );
};

export default HeroSection;
