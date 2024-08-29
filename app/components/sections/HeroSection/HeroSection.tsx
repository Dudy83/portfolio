'use client';

import { useState } from 'react';
import ComputersCanvas from '@/components/Three/ComputerCanvas/ComputerCanvas';
import { TypewriterEffect } from '@/components/ui/typewriter-effect';
import { About } from '@prisma/client';
import './HeroSection.scss';

interface HeroSectionProps {
     about: About;
}

export default function HeroSection({ about }: HeroSectionProps) {
     const [isCanvasInit, setIsCanvasInit] = useState(false);

     return (
          <header
               className={`relative -ml-4 sm:-ml-6 mb-20 h-[calc(100vh-116px)] min-w-[calc(100%+2rem)] sm:min-w-[calc(100%+3rem)]`}
          >
               <div className="pointer-events-auto absolute w-full bg-transparent h-full z-50 flex justify-center items-start top-0">
               </div>
               {isCanvasInit && (
                    <>
                         <div className="tags ml-8 mt-5">{'<header>'}</div>

                         <div
                              className={`absolute inset-0 top-[15px] sm:top-[60px] max-w-7xl mx-auto xl:px-16 px-10 mt-8 sm:mt-0`}
                         >
                              <div className="tags first">{'<h1>'}</div>
                              <div className="flex items-start justify-start flex-col ml-4">
                                   <TypewriterEffect
                                        cursorClassName="bg-transparent"
                                        words={[
                                             { text: about?.text1.split(' ')[0] || '', className: 'text-4xl md:text-6xl lg:text-7xl tracking-wide' },
                                             { text: about?.text1.split(' ')[1] || '', className: 'text-4xl md:text-6xl lg:text-7xl tracking-wide text-violet-600 dark:text-violet-600' },
                                        ]}
                                   />
                                   <TypewriterEffect
                                        cursorClassName="bg-transparent"
                                        words={[
                                             { text: about?.text2.split(' ')[0] || '', className: 'text-4xl md:text-6xl lg:text-7xl tracking-wide' },
                                             { text: about?.text2.split(' ')[1] || '', className: 'text-3xl md:text-4xl lg:text-5xl tracking-wide' },
                                             { text: about?.text2.split(' ')[2] || '', className: 'text-3xl md:text-6xl lg:text-7xl tracking-wide text-purple-500 dark:text-purple-500' },
                                        ]}
                                   />
                                   <TypewriterEffect
                                        className="mt-2"
                                        cursorClassName="text-3xl md:text-4xl lg:text-5xl bg-black dark:bg-white -mb-1 text-left"
                                        words={[
                                             { text: about?.text3.split(' ')[0] || '', className: 'text-3xl md:text-4xl lg:text-5xl tracking-wide' },
                                             { text: about?.text3.split(' ')[1] || '', className: 'text-3xl md:text-4xl lg:text-5xl tracking-wide' },
                                             { text: about?.text3.split(' ')[2] || '', className: 'text-3xl md:text-4xl lg:text-5xl tracking-wide text-teal-500 dark:text-teal-500' },
                                        ]}
                                   />
                              </div>

                              <div className="tags">{'</h1>'}</div>

                              <div className="ml-0 md:ml-12">
                                   <div className="tags first">{'<p>'}</div>
                                   <p
                                        className={`text-zinc-800 dark:text-white text-sm sm:text-base md:text-xl font-semibold tracking-tight ml-4`}
                                   >
                                        {about?.paragraph.split(' ').map((word, index) => (
                                             <span
                                                  className={[7, 9].includes(index) ? 'text-teal-500' : ([13, 15].includes(index) ? 'text-purple-500' : '')}
                                                  key={index}>
                                                  {word}{' '}
                                             </span>
                                        ))}
                                   </p>
                                   <div className="tags">{'</p>'}</div>
                                   <br className="hidden sm:block" />
                              </div>
                              <div className="tags">{'<canvas>'}</div>
                         </div>
                    </>
               )}
               <ComputersCanvas setInit={setIsCanvasInit} />
               {isCanvasInit && <div className="tags ml-8 mt-4">{'</header>'}</div>}
          </header>
     );
}
