"use client";
import './ExperienceSection.scss';
import React from "react";
import HeaderSection from "@/components/sections/HeaderSection/HeaderSection";
import Card3D from '../../ExpCard/ExpCard';
import { Experience } from '@prisma/client';

interface ExperiencesProps {
     experiences: Experience[];
}

const ExperiencesSection = ({ experiences }: ExperiencesProps) => {
     return (
          <section className="my-10 pt-10">
               <div className="tags ml-2">{'<section>'}</div>
               <div className='ml-4 lg:ml-0'>
                    <HeaderSection
                         title='Expériences'
                         description={'Découvrez les différentes expériences qui ont façonné mon parcours'}
                         centered={true}
                    />
               </div>
               <div className="cards-container"><Card3D experiences={experiences} /></div>
               <div className="tags ml-2">{'</section>'}</div>
          </section>
     )
}

export default ExperiencesSection
