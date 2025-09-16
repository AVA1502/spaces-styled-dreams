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
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-background">
      {/* Animated Background Images */}
      <div className="absolute inset-0">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Modern interior design ${index + 1}`}
            className={`w-full h-full object-cover absolute inset-0 transition-opacity duration-2000 ${
              index === currentImage ? 'opacity-40' : 'opacity-0'
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-background/50"></div>
      </div>
      
      {/* Year and Location - Top Right */}
      <div className="absolute top-12 right-12 text-right text-xs text-muted-foreground font-light tracking-widest">
        <div>2024 București, România</div>
      </div>
      
      {/* Main Content */}
      <div className="relative z-10 w-full px-12">
        <div className="max-w-4xl">
          <h1 className="text-[8rem] md:text-[12rem] lg:text-[16rem] font-light leading-[0.8] text-foreground tracking-[0.3em] mb-8">
            BLACK LINE
          </h1>
          <div className="text-sm md:text-base text-muted-foreground font-light tracking-[0.2em] mb-4">
            2024 București, România, 450 m²
          </div>
        </div>
      </div>
      
      {/* Bottom Info */}
      <div className="absolute bottom-12 left-12 text-xs text-muted-foreground font-light tracking-widest">
        <div className="mb-2">Elena Popescu</div>
        <div>Architect & Interior Designer</div>
      </div>

      {/* Image Progress Indicator */}
      <div className="absolute bottom-12 right-12 flex gap-2">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentImage ? 'bg-foreground' : 'bg-foreground/30'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;