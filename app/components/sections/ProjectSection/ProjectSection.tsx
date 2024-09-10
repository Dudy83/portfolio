import './ProjectSection.scss'
import React from "react";
import HeaderSection from "@/components/sections/HeaderSection/HeaderSection";
import ProjectCarousel from '../../ProjectCarousel/ProjectCarousel';
import { Project } from '@prisma/client';

interface ProjectsProps {
     projects: Project[];
}

const ProjectsSection = ({ projects }: ProjectsProps) => {
     return (
          <>
               <section className="mt-10 min-h-[28rem] xl:min-h-[35rem]">
                    <div className="tags ml-2">{'<section>'}</div>
                    <div className="ml-4 mb-10">
                         <HeaderSection
                              title='Projets'
                              description={'Les différents projets qui ont forgés mon expérience'}
                         />
                    </div>


                    <ProjectCarousel projects={projects} />
               </section>
               <div className="tags ml-2 mt-auto">{'</section>'}</div>
          </>
     );
}

export default ProjectsSection