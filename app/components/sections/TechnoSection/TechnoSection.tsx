"use client";
import React from "react";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import HeaderSection from "@/components/sections/HeaderSection/HeaderSection";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BackgroundGradient } from "@/components/ui/background-gradient";
import { Prisma } from "@prisma/client";
import TechnoCarousel from "@/components/TechnoCarousel/TechnoCarousel";

export type TechnosProps = Prisma.TechnoTypeGetPayload<{
     include: {
          items: true;
     };
}>;

interface TechnosSectionProps {
     technos: TechnosProps[];
}

const TechnosSection = ({ technos }: TechnosSectionProps) => {
     return (
          <section className="my-10">
               <div className="tags ml-2">{'<section>'}</div>
               <div className="ml-4">
                    <HeaderSection
                         title='Technologies'
                         description={'les technologies que je maîtrise et qui m\'accompagnent'}
                    />
               </div>
               <Tabs defaultValue={technos[0]?.name || ''} className="w-full flex-center flex-col mt-10">
                    <div className="w-fit mb-5">
                         <BackgroundGradient className="rounded-full bg-white/80 dark:bg-zinc-800/80 overflow-hidden">
                              <TabsList>
                                   {technos.map((techno) => (
                                        <TabsTrigger
                                             key={techno.id}
                                             className="rounded-full text-xs md:text-sm"
                                             value={techno.name}
                                        >
                                             {techno.name}
                                        </TabsTrigger>
                                   ))}
                              </TabsList>
                         </BackgroundGradient>
                    </div>
                    {technos.map((techno) => (
                         <TabsContent key={techno.id} value={techno.name}>
                              <HoverEffect items={techno.items} className="hidden md:grid" />
                              <TechnoCarousel items={techno.items} className="md:hidden" />
                         </TabsContent>
                    ))}
               </Tabs>
               <div className="tags ml-2">{'</section>'}</div>
          </section>
     );
}

export default TechnosSection;

