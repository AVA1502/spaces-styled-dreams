import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Background Video with Overlay */}
      <div className="absolute inset-0">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="https://player.vimeo.com/external/434045526.sd.mp4?s=c27eeacb27607b05ecdc1d41be2d1a8c1db0e8a9&profile_id=164&oauth2_token_id=57447761" type="video/mp4" />
          {/* Fallback pentru browsere care nu suportă video */}
          <div className="w-full h-full bg-gradient-to-br from-zinc-900 to-black"></div>
        </video>
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/50"></div>
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