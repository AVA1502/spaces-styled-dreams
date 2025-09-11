import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-interior.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Luxurious interior design showcase" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-70"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-6 max-w-4xl">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Design Interior
          <span className="block bg-gradient-accent bg-clip-text text-transparent">
            de Excepție
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 text-white/90 leading-relaxed">
          Transformăm spațiile în experiențe memorabile prin design elegant și funcțional, 
          adaptat stilului tău unic de viață.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button variant="hero" size="lg">
            Explorează Portofoliul
          </Button>
          <Button variant="elegant" size="lg" className="bg-white/10 text-white border-white/20 hover:bg-white/20">
            Consultație Gratuită
          </Button>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;