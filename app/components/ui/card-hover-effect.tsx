import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import { PinContainer } from "./3d-pin";
import { TechnoItem } from "@prisma/client";

export const HoverEffect = ({
     items,
     className,
}: {
     items: TechnoItem[];
     className?: string;
}) => {
     let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

     return (
          <div
               className={cn(
                    "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",
                    className
               )}
          >
               {items.map((item, idx) => (
                    <Link
                         href={item?.link}
                         key={idx}
                         className="relative group block p-2 h-full w-full"
                         onMouseEnter={() => setHoveredIndex(idx)}
                         onMouseLeave={() => setHoveredIndex(null)}
                    >
                         <AnimatePresence>
                              {hoveredIndex === idx && (
                                   <motion.span
                                        className="absolute inset-0 h-full w-full bg-teal-200/50 dark:bg-teal-900/[0.8] block  rounded-3xl"
                                        layoutId="hoverBackground"
                                        initial={{ opacity: 0 }}
                                        animate={{
                                             opacity: 1,
                                             transition: { duration: 0.15 },
                                        }}
                                        exit={{
                                             opacity: 0,
                                             transition: { duration: 0.15, delay: 0.2 },
                                        }}
                                   />
                              )}
                         </AnimatePresence>
                         <Card>
                              <CardTitle className="">
                                   <Image src={item.imageUrl} width={64} height={64} alt={item.title} />
                                   <p className="w-fit">{item.title}</p>
                              </CardTitle>
                              <CardDescription>{item.description}</CardDescription>
                         </Card>

                    </Link>
               ))}
          </div>
     );
};

export const Card = ({
     className,
     children,
}: {
     className?: string;
     children: React.ReactNode;
}) => {
     return (
          <div
               className={cn(
                    "rounded-2xl h-full w-full p-4 overflow-hidden bg-white/90 dark:bg-black/50 border border-zinc-200 dark:border-white/[0.2] group-hover:border-teal-400 dark:group-hover:border-teal-600 relative z-20",
                    className
               )}
          >
               <div className="relative z-50">
                    <div className="p-4">{children}</div>
               </div>
          </div>
     );
};
export const CardTitle = ({
     className,
     children,
}: {
     className?: string;
     children: React.ReactNode;
}) => {
     return (
          <h4 className={cn("text-zinc-800 dark:text-zinc-100 font-bold tracking-wide mt-4 w-fit flex-center flex-col space-y-2", className)}>
               {children}
          </h4>
     );
};
export const CardDescription = ({
     className,
     children,
}: {
     className?: string;
     children: React.ReactNode;
}) => {
     return (
          <p
               className={cn(
                    "mt-8 text-zinc-500 dark:text-zinc-400 tracking-wide leading-relaxed text-sm",
                    className
               )}
          >
               {children}
          </p>
     );
};
