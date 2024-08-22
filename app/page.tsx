import HeroSection from './components/HeroSection/HeroSection';

export default function Home() {
     return (
          <>
               <div className="tags first !ml-0 mt-10 animate__animated animate__fadeIn animate__delay-1s">{'<html>'}</div>
               <HeroSection />
               <div className="tags !ml-0 animate__animated animate__fadeIn animate__delay-1s">{'</html>'}</div>
          </>
     )
}
