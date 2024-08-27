import HeroSection from '@/components/sections/HeroSection/HeroSection';
import TechnosSection from '@/components/sections/TechnoSection/TechnoSection';
import ExperiencesSection from '@/components/sections/ExperienceSection/ExperienceSection';
import ProjectsSection from '@/components/sections/ProjectSection/ProjectSection';
import ctx from '@/lib/api/api';
import ContactSection from './components/sections/ContactSection/ContactSection';



export default async function Home() {
     const [about, experiences, technos, projects] = await Promise.all([
          ctx.getAboutData(),
          ctx.getExperiencesData(),
          ctx.getTechnosData(),
          ctx.getProjectsData()
     ]);

     return (
          <>
               <div className="tags first !ml-0 mt-10">{'<html>'}</div>
               <div id="about"><HeroSection about={about} /></div>
               <div id="experience"><ExperiencesSection experiences={experiences} /></div>
               <div id="tools"><TechnosSection technos={technos} /></div>
               <div id="projects"><ProjectsSection projects={projects} /></div>
               <div id="contact"><ContactSection /></div>
               <div className="tags !ml-0">{'</html>'}</div>
          </>
     )
}
