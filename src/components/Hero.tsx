import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import livingRoom from "@/assets/living-room.jpg";
import darkInterior from "@/assets/dark-interior.jpg";
import bedroomLuxury from "@/assets/bedroom-luxury.jpg";

const Hero = () => {
  const images = [livingRoom, darkInterior, bedroomLuxury];
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage(prev => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Background Images with Overlay */}
      <div className="absolute inset-0">
        {images.map((image, index) => (
          <img 
            key={index} 
            src={image} 
            alt={`Elegant interior design ${index + 1}`} 
            className={`w-full h-full object-cover absolute inset-0 transition-opacity duration-[3000ms] ${
              index === currentImage ? 'opacity-70' : 'opacity-0'
            }`} 
          />
        ))}
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      
      {/* Main Content - Centered */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center w-full max-w-5xl px-6">
        {/* Main Title */}
        <h1 className="text-[3rem] md:text-[4rem] lg:text-[5rem] xl:text-[6rem] font-light leading-none text-white tracking-[0.02em] mb-6">
          design & architecture
        </h1>
        
        {/* Subtitle */}
        <p className="text-base md:text-lg text-white/80 font-light tracking-[0.1em] max-w-2xl">
          Îmbunătățim calitatea vieții, excluzând mediocritatea
        </p>
      </div>
      
      {/* Write Us Button - Top Right */}
      <div className="absolute top-8 right-8 z-20">
        <Button 
          variant="outline" 
          className="bg-transparent border-white/30 text-white hover:bg-white hover:text-black transition-smooth px-6 py-2 text-sm tracking-wider"
        >
          Scrie-ne
        </Button>
      </div>
      
      {/* Year and Location - Top Right below button */}
      <div className="absolute top-20 right-8 text-right text-xs text-white/60 font-light tracking-widest">
        <div>2024 București, România</div>
      </div>
    </section>
  );
};

export default Hero;