"use client";
import React, { useEffect } from 'react'
import { CarouselPrevious, CarouselNext, type CarouselApi } from "@/components/ui/carousel"
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay"
import { PinContainer } from "@/components/ui/3d-pin";
import { FollowerPointerCard } from "@/components/ui/following-pointer";
import {
     Carousel,
     CarouselContent,
     CarouselItem
} from "@/components/ui/carousel"
import { LinkPreview } from '@/components/ui/link-preview';
import { cn } from "@/lib/utils";
import { Project } from '@prisma/client';

const LinkPreviewWrapper = ({
     link,
     children

}: {
     link: string;
     children: string | React.ReactNode
}) => (
     <div>
          <LinkPreview url={link} className="font-bold">
               {children}
          </LinkPreview>
     </div>
);

interface ProjectCarouselProps {
     projects: Project[]
}

const ProjectCarousel = ({ projects }: ProjectCarouselProps) => {
     const [api, setApi] = React.useState<CarouselApi | null>(null);
     const [middleItemIndex, setMiddleItemIndex] = React.useState<number | null>(null);
     const [slideIndex, setSlideIndex] = React.useState<number>(0);

     useEffect(() => {
          if (!api) {
               return;
          }

          const initialMiddleIndex = (document.body.offsetWidth >= 1024 ? 2 : 0);

          const getMiddleItemIndex = () => {
               const visibleSlides = api.slidesInView();
               return visibleSlides[initialMiddleIndex];
          };

          setMiddleItemIndex(initialMiddleIndex);

          api.on("scroll", (c) => {
               const middleIndex = getMiddleItemIndex();
               setMiddleItemIndex(middleIndex);
               setSlideIndex(c.selectedScrollSnap());
          });
     }, [api]);

     return (
          <div>
               <Carousel
                    setApi={setApi}
                    opts={{
                         align: "start",
                    }}
                    plugins={[
                         Autoplay({
                         }),
                    ]}
                    className="carousel-projects w-full mx-auto max-w-xs md:max-w-5xl lg:max-w-7xl xl:min-w-[80vw] xl:max-w-[80vw] xl:left-[10vw] xl:right-[10vw] xl:absolute"
               >
                    <CarouselContent>
                         {projects.map((project, index) => (
                              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 xl:basis-1/5">
                                   <FollowerPointerCard
                                        id={slideIndex}
                                        title={
                                             <LinkPreviewWrapper
                                                  link={project.href}
                                             >
                                                  {project.title}
                                             </LinkPreviewWrapper>
                                        }
                                   >
                                        <div className="relative w-full mx-auto">
                                             <div className="w-full group">
                                                  <PinContainer
                                                       className="w-full"
                                                       href={project.href}
                                                       isHover={index === middleItemIndex}
                                                  >
                                                       <div className="relative flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2">
                                                            <div className={cn("absolute inset-0 transition-transform duration-300 group-hover:rotate-0", (middleItemIndex !== project.id && (index % 2 === 1 ? 'rotate-[10deg]' : 'rotate-[-10deg]')))}>
                                                                 {project.coverUrl ? <Image className="rounded-2xl" src={project.coverUrl} fill={true} objectFit="cover" alt={project.title} />
                                                                      : <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-violet-500 via-purple-500 to-blue-50"></div>}
                                                            </div>
                                                            <div className="flex-center p-6 h-40 w-40 mx-auto" >
                                                                 <div className="relative w-full h-full">
                                                                      <Image src={project.imageUrl} fill={true} objectFit="contain" alt={project.title} />
                                                                 </div>
                                                            </div>
                                                       </div>
                                                       <h3 className={cn(
                                                            "max-w-xs mt-3 ml-6 font-semibold text-base text-slate-100",
                                                            (middleItemIndex !== project.id && (index % 2 === 1 ? 'text-left' : 'text-right'))
                                                       )}>
                                                            {project.title}
                                                       </h3>
                                                  </PinContainer>
                                             </div>
                                        </div>
                                   </FollowerPointerCard>
                              </CarouselItem>
                         ))}
                    </CarouselContent>
                    <CarouselPrevious className='xl:hidden' />
                    <CarouselNext className='xl:hidden' />
               </Carousel>
          </div>
     )
}

export default ProjectCarousel