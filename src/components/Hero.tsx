import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
const Hero = () => {
  const videos = ["/video-1.mp4", "/video-2.mp4"];
  const [currentVideo, setCurrentVideo] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVideo(prev => (prev + 1) % videos.length);
    }, 10000); // Switch video every 10 seconds

    return () => clearInterval(interval);
  }, [videos.length]);
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Background Videos with Overlay */}
      <div className="absolute inset-0">
        {videos.map((video, index) => <video key={index} autoPlay muted loop playsInline className={`w-full h-full object-cover absolute inset-0 transition-opacity duration-[2000ms] ${index === currentVideo ? 'opacity-70' : 'opacity-0'}`}>
            <source src={video} type="video/mp4" />
          </video>)}
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
      
      {/* Main Content - Bottom Positioned */}
      <div className="absolute bottom-16 left-0 right-0 z-10 flex flex-col items-center text-center w-full px-6">
        <div className="max-w-5xl">
          {/* Main Title */}
          <h1 className="text-[3rem] md:text-[4rem] lg:text-[5rem] xl:text-[6rem] font-light leading-none text-white tracking-[0.02em] mb-6">
            design & architecture
          </h1>
          
          {/* Subtitle */}
          <p className="text-base md:text-lg text-white/80 font-light tracking-[0.1em] max-w-2xl mx-auto">Construim o viață mai bună, fără compromisuri</p>
        </div>
      </div>
      
      {/* Write Us Button - Top Right */}
      <div className="absolute top-8 right-8 z-20">
        
      </div>
      
      {/* Year and Location - Top Right below button */}
      <div className="absolute top-20 right-8 text-right text-xs text-white/60 font-light tracking-widest">
        
      </div>
    </section>;
};
export default Hero;