"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { SquareArrowOutUpRight } from "lucide-react";

export const PinContainer = ({
     children,
     href,
     isHover,
     className,
     containerClassName,
}: {
     children: React.ReactNode;
     href?: string;
     isHover?: boolean;
     className?: string;
     containerClassName?: string;
}) => {
     const [isHovered, setIsHovered] = useState(isHover);

     const [transform, setTransform] = useState(
          "translate(-50%,-50%) rotateX(0deg)"
     );

     const onMouseEnter = () => {
          setTransform("translate(-50%,-50%) rotateX(40deg) scale(0.8)");
          setIsHovered(true); // Set hover state to false

     };
     const onMouseLeave = () => {
          setTransform("translate(-50%,-50%) rotateX(0deg) scale(1)");
          setIsHovered(false); // Set hover state to false
     };

     const colors = [
          'bg-sky-500/75 dark:bg-sky-500/30',
          'bg-neutral-500/75 dark:bg-neutral-500/30',
          'bg-teal-500/75 dark:bg-teal-500/30',
          'bg-green-500/75 dark:bg-green-500/30',
          'bg-blue-500/75 dark:bg-blue-500/30',
          'bg-yellow-500/30 dark:bg-yellow-500/30'
     ];


     useEffect(() => {
          isHover ? onMouseEnter() : onMouseLeave();
     }, [isHover])

     return (
          <div
               className={cn(
                    "relative group/pin z-50 mx-4",
                    containerClassName
               )}
               onMouseEnter={onMouseEnter}
               onMouseLeave={onMouseLeave}
          >
               <div
                    style={{
                         perspective: "1000px",
                         transform: "rotateX(70deg) translateZ(0deg)",
                    }}
                    className="absolute left-1/2 top-1/2 ml-[0.09375rem] -translate-x-1/2 -translate-y-1/2 w-full"
               >
                    <div
                         style={{
                              transform: transform,
                         }}
                         className={cn(
                              "absolute left-1/2 p-4 top-1/2 min-w-full flex justify-start items-start  rounded-2xl  shadow-[0_8px_16px_rgb(0_0_0/0.4)] border border-white/[0.1] group-hover/pin:border-white/[0.2] transition duration-700",
                              colors[Math.floor(Math.random() * colors.length)],
                              isHovered ? 'border-white/[0.2]' : ''
                         )}
                    >
                         <div className={cn(" relative z-50 ", className)} style={{ width: 'calc(100% + 30px)', marginLeft: '-30px', marginTop: '-30px' }}>{children}</div>
                    </div>
               </div>
               <PinPerspective href={href} isHovered={isHovered} />
          </div>
     );
};

export const PinPerspective = ({
     href,
     isHovered
}: {
     href?: string;
     isHovered?: boolean;
}) => {

     useEffect(() => {
     }, [isHovered])

     return (
          <motion.div className={cn("w-96 h-80 flex items-center opacity-0 justify-center group-hover/pin:opacity-100 z-[60] transition duration-500", isHovered ? 'opacity-100' : '')}>
               <div className=" w-full h-full -mt-7 flex-none inset-0">
                    <div className="absolute top-0 inset-x-0  flex justify-center">
                         <a
                              className="mx-auto w-fit relative cursor-none flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10"
                              href={href}
                              target="_blank"
                         >
                              <span className="relative z-20 flex-center space-x-1 text-white text-sm font-bold py-0.5">
                                   <p>Voir le projet</p>
                                   <SquareArrowOutUpRight size={18} strokeWidth={1.5} />

                              </span>

                              <span className={cn("absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover/btn:opacity-40", isHovered ? 'opacity-40' : '')}></span>
                         </a>
                    </div>

                    <div
                         style={{
                              perspective: "1000px",
                              transform: "rotateX(70deg) translateZ(0)",
                         }}
                         className="absolute left-1/2 top-1/2 ml-[0.09375rem] mt-4 -translate-x-1/2 -translate-y-1/2"
                    >
                         <>
                              <motion.div
                                   initial={{
                                        opacity: 0,
                                        scale: 0,
                                        x: "-50%",
                                        y: "-50%",
                                   }}
                                   animate={{
                                        opacity: [0, 1, 0.5, 0],
                                        scale: 1,

                                        z: 0,
                                   }}
                                   transition={{
                                        duration: 6,
                                        repeat: Infinity,
                                        delay: 0,
                                   }}
                                   className="absolute left-1/2 top-1/2  h-[11.25rem] w-[11.25rem] rounded-[50%] bg-sky-500/[0.08] shadow-[0_8px_16px_rgb(0_0_0/0.4)]"
                              ></motion.div>
                              <motion.div
                                   initial={{
                                        opacity: 0,
                                        scale: 0,
                                        x: "-50%",
                                        y: "-50%",
                                   }}
                                   animate={{
                                        opacity: [0, 1, 0.5, 0],
                                        scale: 1,

                                        z: 0,
                                   }}
                                   transition={{
                                        duration: 6,
                                        repeat: Infinity,
                                        delay: 2,
                                   }}
                                   className="absolute left-1/2 top-1/2  h-[11.25rem] w-[11.25rem] rounded-[50%] bg-sky-500/[0.08] shadow-[0_8px_16px_rgb(0_0_0/0.4)]"
                              ></motion.div>
                              <motion.div
                                   initial={{
                                        opacity: 0,
                                        scale: 0,
                                        x: "-50%",
                                        y: "-50%",
                                   }}
                                   animate={{
                                        opacity: [0, 1, 0.5, 0],
                                        scale: 1,

                                        z: 0,
                                   }}
                                   transition={{
                                        duration: 6,
                                        repeat: Infinity,
                                        delay: 4,
                                   }}
                                   className="absolute left-1/2 top-1/2  h-[11.25rem] w-[11.25rem] rounded-[50%] bg-sky-500/[0.08] shadow-[0_8px_16px_rgb(0_0_0/0.4)]"
                              ></motion.div>
                         </>
                    </div>

                    <>
                         <motion.div className={cn("absolute right-1/2 bottom-1/2 bg-gradient-to-b from-transparent to-cyan-500 translate-y-[14px] w-px h-20 group-hover/pin:h-40 blur-[2px]", isHovered ? 'h-40' : '')} />
                         <motion.div className={cn("absolute right-1/2 bottom-1/2 bg-gradient-to-b from-transparent to-cyan-500 translate-y-[14px] w-px h-20 group-hover/pin:h-40", isHovered ? 'h-40' : '')} />
                         <motion.div className="absolute right-1/2 translate-x-[1.5px] bottom-1/2 bg-cyan-600 translate-y-[14px] w-[4px] h-[4px] rounded-full z-40 blur-[3px]" />
                         <motion.div className="absolute right-1/2 translate-x-[0.5px] bottom-1/2 bg-cyan-300 translate-y-[14px] w-[2px] h-[2px] rounded-full z-40 " />
                    </>
               </div>
          </motion.div>
     );
};
