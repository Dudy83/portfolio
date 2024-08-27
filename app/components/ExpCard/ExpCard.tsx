import React, { useEffect, useId, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ScanEye, SquareArrowOutUpRight } from "lucide-react";
import { useOutsideClick } from "@/hooks/useClickOutside";
import { cn } from "@/lib/utils";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import { Cover } from "@/components/ui/cover";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { Experience } from "@prisma/client";

interface Card3DProps {
     experiences: Experience[];
}

function Card3D({ experiences }: Card3DProps) {
     const [active, setActive] = useState<(typeof experiences)[number] | boolean | null>(
          null
     );
     const ref = useRef<HTMLDivElement>(null);
     const id = useId();

     useEffect(() => {
          function onKeyDown(event: KeyboardEvent) {
               if (event.key === "Escape") {
                    setActive(false);
               }
          }

          if (active && typeof active === "object") {
               document.body.style.overflow = "hidden";
          } else {
               document.body.style.overflow = "auto";
          }

          window.addEventListener("keydown", onKeyDown);
          return () => window.removeEventListener("keydown", onKeyDown);
     }, [active]);

     useOutsideClick(ref, () => setActive(null));

     return (
          <>
               <AnimatePresence>
                    {active && typeof active === "object" && (
                         <motion.div
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              exit={{ opacity: 0 }}
                              className="fixed inset-0 bg-black/20 h-full w-full z-10"
                         />
                    )}
               </AnimatePresence>
               <AnimatePresence>
                    {active && typeof active === "object" ? (
                         <div className="fixed inset-0  grid place-items-center z-[100]">
                              <motion.button
                                   key={`button-${active.title}-${id}`}
                                   layout
                                   initial={{
                                        opacity: 0,
                                   }}
                                   animate={{
                                        opacity: 1,
                                   }}
                                   exit={{
                                        opacity: 0,
                                        transition: {
                                             duration: 0.05,
                                        },
                                   }}
                                   className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
                                   onClick={() => setActive(null)}
                              >
                                   <CloseIcon />
                              </motion.button>
                              <motion.div
                                   layoutId={`card-${active.title}-${id}`}
                                   ref={ref}
                                   className="w-full max-w-[500px] h-full md:h-fit md:max-h-[90%] flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden"
                              >
                                   <motion.div layoutId={`image-${active.title}-${id}`}>
                                        <div className={cn("h-80 flex-center bg-gradient-to-br w-full object-cover rounded-xl overflow-hidden group-hover/card:shadow-xl", active.backgroundClassName)}>
                                             <Image
                                                  src={active.imageUrl}
                                                  height="196"
                                                  width="196"
                                                  className=""
                                                  alt="thumbnail"
                                             />
                                        </div>
                                   </motion.div>

                                   <div>
                                        <div className="flex justify-between items-start p-4">
                                             <div className="">
                                                  <motion.h3
                                                       layoutId={`title-${active.title}-${id}`}
                                                       className="font-bold text-neutral-700 dark:text-neutral-200"
                                                  >
                                                       {active.title}
                                                  </motion.h3>
                                                  <motion.p
                                                       layoutId={`description-${active.description}-${id}`}
                                                       className="text-neutral-600 dark:text-neutral-400"
                                                  >
                                                       {active.description}
                                                  </motion.p>
                                             </div>

                                             <motion.a
                                                  layoutId={`button-${active.title}-${id}`}
                                                  href={active.ctaLink}
                                                  target="_blank"
                                                  className="flex-center px-4 py-3 text-sm rounded-full font-bold bg-black dark:bg-white dark:text-black text-white "
                                             >
                                                  <SquareArrowOutUpRight size={18} strokeWidth={1.5} />
                                                  <p className="ml-1">{active.ctaText}</p>
                                             </motion.a>
                                        </div>
                                        <div className="pt-4 relative px-4">
                                             <motion.div
                                                  layout
                                                  initial={{ opacity: 0 }}
                                                  animate={{ opacity: 1 }}
                                                  exit={{ opacity: 0 }}
                                                  className="text-neutral-600 text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400 [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
                                             >
                                                  <p>{active.content}</p>
                                             </motion.div>
                                        </div>
                                   </div>
                              </motion.div>
                         </div>
                    ) : null}
               </AnimatePresence>
               <div className="w-full">
                    <div className="relative wrap w-full xl:px-16 px-0 h-full flex-center flex-col">

                         <span className='bg-violet-500 w-[11px] h-[11px] mx-auto rounded-full'></span>
                         <div className="absolute bg-gradient-to-b from-violet-500 via-purple-500 to-indigo-500 dark:bg-zinc-700 h-full w-[3px] left-1/2 -translate-x-[2px]" />
                         <span className='absolute bg-indigo-500 w-[11px] h-[11px] bottom-0 mx-auto rounded-full'></span>

                         {experiences.map((exp, index) => (
                              <div key={index} className={cn("mb-8 flex justify-between items-center w-full space-y-8 lg:space-y-0", index % 2 === 1 ? 'flex-col lg:flex-row' : 'flex-col lg:flex-row-reverse')}>
                                   <div className={"flex justify-center order-1 w-full lg:w-5/12 text-xl font-medium tracking-tighter"}>
                                        <div className={cn("w-fit flex", (index % 2 === 1 ? 'lg:ml-auto' : 'lg:mr-auto'))}>
                                             <BackgroundGradient isRounded={false}>
                                                  <Cover><p className="aurore text-2xl text-nowrap">{exp.duration}</p></Cover>
                                             </BackgroundGradient>
                                        </div>

                                   </div>
                                   <div className="z-20  order-1">
                                        <BackgroundGradient animate={false} className="rounded-full">
                                             <div className="flex items-center bg-transparent w-12 h-12 rounded-full">
                                                  <h1 className="mx-auto text-white font-semibold text-2xl aurore mt-2">{index + 1}</h1>
                                             </div>
                                        </BackgroundGradient>
                                   </div>
                                   <div className="order-1 w-full lg:w-5/12">
                                        <motion.div
                                             layoutId={`card-${exp.title}-${id}`}
                                             key={`card-${exp.title}-${id}`}
                                             onClick={() => setActive(exp)}
                                             className="cursor-pointer"
                                        >
                                             <CardContainer className="w-full inter-var">
                                                  <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full sm:w-[30rem] h-auto rounded-xl p-4 border  ">
                                                       <motion.div className='flex space-x-4'>
                                                            <motion.div layoutId={`image-${exp.title}-${id}`}>
                                                                 <CardItem translateZ="100" className="w-full">
                                                                      <div className={cn("h-20 lg:h-24 w-20 lg:w-24 p-4 flex-center bg-gradient-to-br object-cover rounded-xl overflow-hidden group-hover/card:shadow-xl", exp.backgroundClassName)}>
                                                                           <Image
                                                                                src={exp.imageUrl}
                                                                                height="196"
                                                                                width="196"
                                                                                className=""
                                                                                alt="thumbnail"
                                                                           />
                                                                      </div>

                                                                 </CardItem>
                                                            </motion.div>

                                                            <motion.div>
                                                                 <motion.div
                                                                      layoutId={`title-${exp.title}-${id}`}

                                                                 >
                                                                      <CardItem
                                                                           translateZ="50"
                                                                           className="text-lg lg:text-xl font-bold text-black dark:text-white w-full"
                                                                      >
                                                                           {exp.title}
                                                                      </CardItem>
                                                                 </motion.div>
                                                                 <motion.div
                                                                      layoutId={`description-${exp.description}-${id}`}
                                                                      className="text-neutral-600 dark:text-neutral-400 text-center lg:text-left"
                                                                 >
                                                                      <CardItem
                                                                           as="p"
                                                                           translateZ="60"
                                                                           className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300 text-left"
                                                                      >
                                                                           {exp.description}
                                                                      </CardItem>
                                                                 </motion.div>
                                                            </motion.div>

                                                            <div className="flex flex-1 justify-end items-center mt-auto">
                                                                 <motion.div
                                                                      layoutId={`button-${exp.title}-${id}`}
                                                                 >
                                                                      <CardItem
                                                                           translateZ={20}
                                                                           as="button"
                                                                           className="flex-center px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                                                                      >
                                                                           <ScanEye size={18} strokeWidth={1.5} />
                                                                           <p className="ml-1">Détails</p>
                                                                      </CardItem>
                                                                 </motion.div>
                                                            </div>
                                                       </motion.div>
                                                  </CardBody>
                                             </CardContainer>
                                        </motion.div>

                                   </div>
                              </div>
                         ))}
                    </div>
               </div>
          </>
     );
}

const CloseIcon = () => {
     return (
          <motion.svg
               initial={{
                    opacity: 0,
               }}
               animate={{
                    opacity: 1,
               }}
               exit={{
                    opacity: 0,
                    transition: {
                         duration: 0.05,
                    },
               }}
               xmlns="http://www.w3.org/2000/svg"
               width="24"
               height="24"
               viewBox="0 0 24 24"
               fill="none"
               stroke="currentColor"
               strokeWidth="2"
               strokeLinecap="round"
               strokeLinejoin="round"
               className="h-4 w-4 text-black"
          >
               <path stroke="none" d="M0 0h24v24H0z" fill="none" />
               <path d="M18 6l-12 12" />
               <path d="M6 6l12 12" />
          </motion.svg>
     );
};

export default Card3D;
