import { useEffect, useState } from "react";
import interior1 from "@/assets/interior-1.jpg";
import interior2 from "@/assets/interior-2.jpg";
import interior3 from "@/assets/interior-3.jpg";
import interior4 from "@/assets/interior-4.jpg";
import interior5 from "@/assets/interior-5.jpg";
const Hero = () => {
  const images = [interior1, interior2, interior3, interior4, interior5];
  const [currentImage, setCurrentImage] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage(prev => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);
  return <section className="relative min-h-screen flex flex-col items-center justify-center bg-background px-12">
      {/* Year and Location - Top Right */}
      <div className="absolute top-12 right-12 text-right text-xs text-muted-foreground font-light tracking-widest">
        <div>2024 București, România</div>
      </div>
      
      {/* Main Content - Title */}
      <div className="text-center mb-12">
        <h1 className="text-[2rem] md:text-[2.5rem] lg:text-[3rem] font-light leading-none text-foreground tracking-[0.05em] lowercase whitespace-nowrap">
          design & architecture
        </h1>
      </div>
      
      {/* Centered Image Carousel */}
      <div className="relative w-full max-w-4xl aspect-[16/10] rounded-lg overflow-hidden">
        {images.map((image, index) => (
          <img 
            key={index} 
            src={image} 
            alt={`Modern interior design ${index + 1}`} 
            className={`w-full h-full object-cover absolute inset-0 transition-opacity duration-2000 ${
              index === currentImage ? 'opacity-100' : 'opacity-0'
            }`} 
          />
        ))}
      </div>

      {/* Image Progress Indicator */}
      <div className="mt-8 flex gap-2">
        {images.map((_, index) => (
          <div 
            key={index} 
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentImage ? 'bg-foreground' : 'bg-foreground/30'
            }`} 
          />
        ))}
      </div>
    </section>;
};
export default Hero;