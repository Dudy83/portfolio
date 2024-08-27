import React from "react";
import {
     Carousel,
     CarouselContent,
     CarouselItem,
     CarouselNext,
     CarouselPrevious,
} from "@/components/ui/carousel";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { TechnoItem } from "@prisma/client";
import { useState } from "react";
import { Card, CardDescription, CardTitle } from "@/components/ui/card-hover-effect";


interface TechnoCarouselProps {
     items: TechnoItem[]
     className: string
}

const TechnoCarousel = ({
     items,
     className,
}: TechnoCarouselProps) => {
     let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

     return (
          <Carousel className={cn("w-full max-w-xs relative", className)}>
               <CarouselContent>
                    {items.map((item, index) => (
                         <CarouselItem key={index}>
                              <div className="p-1 h-full">
                                   <Link
                                        href={item?.link || "#"}
                                        className="relative group block p-2 h-full w-full"
                                        onMouseEnter={() => setHoveredIndex(index)}
                                        onMouseLeave={() => setHoveredIndex(null)}
                                   >
                                        <AnimatePresence>
                                             {hoveredIndex === index && (
                                                  <motion.span
                                                       className="absolute inset-0 h-full w-full bg-teal-200/50 dark:bg-teal-900/[0.8] block rounded-3xl"
                                                       layoutId="hoverBackground"
                                                       initial={{ opacity: 0 }}
                                                       animate={{ opacity: 1, transition: { duration: 0.15 } }}
                                                       exit={{ opacity: 0, transition: { duration: 0.15, delay: 0.2 } }}
                                                  />
                                             )}
                                        </AnimatePresence>
                                        <Card>
                                             <CardTitle>
                                                  <Image src={item.imageUrl} width={64} height={64} alt={item.title} />
                                                  <p className="w-fit">{item.title}</p>
                                             </CardTitle>
                                             <CardDescription>{item.description}</CardDescription>
                                        </Card>
                                   </Link>
                              </div>
                         </CarouselItem>
                    ))}
               </CarouselContent>
               <CarouselPrevious />
               <CarouselNext />
          </Carousel>
     );
};

export default TechnoCarousel;
