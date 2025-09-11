import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-interior.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-background">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Modern architectural interior design" 
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-background/40"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6">
        <div className="max-w-2xl">
          <div className="text-xs uppercase tracking-widest text-muted-foreground mb-4">
            2024 Romania
          </div>
          <h1 className="text-6xl md:text-8xl font-light mb-8 leading-none text-foreground">
            DESIGN
            <br />
            INTERIOR
          </h1>
          
          <p className="text-lg text-muted-foreground leading-relaxed max-w-md mb-12">
            Spații moderne care îmbină funcționalitatea cu estetica minimalistă. 
            Design arhitectural de excepție.
          </p>
        </div>
        
        {/* Project Info */}
        <div className="absolute bottom-12 right-12 text-right text-sm text-muted-foreground">
          <div>Elena Popescu</div>
          <div>Architect & Interior Designer</div>
        </div>
      </div>
    </section>
  );
};

export default Hero;