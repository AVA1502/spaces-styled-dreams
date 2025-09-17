import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import bedroomImage from "@/assets/portfolio-bedroom.jpg";
import kitchenImage from "@/assets/portfolio-kitchen.jpg";
import livingRoomImage from "@/assets/living-room.jpg";
import darkInteriorImage from "@/assets/dark-interior.jpg";
import luxuryBedroomImage from "@/assets/bedroom-luxury.jpg";
import interior1Image from "@/assets/interior-1.jpg";
import interior2Image from "@/assets/interior-2.jpg";
import interior3Image from "@/assets/interior-3.jpg";
import interior4Image from "@/assets/interior-4.jpg";
import interior5Image from "@/assets/interior-5.jpg";
import heroInteriorImage from "@/assets/hero-interior.jpg";
import designerPortraitImage from "@/assets/designer-portrait.jpg";

const Interioare = () => {
  const projects = [
    {
      title: "LUXURY SUITE",
      image: luxuryBedroomImage,
      description: "Design de lux cu accente elegante și atmosferă relaxantă"
    },
    {
      title: "DARK ELEGANCE",
      image: darkInteriorImage,
      description: "Interior sofisticat cu tonuri întunecate și accente rafinate"
    },
    {
      title: "CONTEMPORARY LIVING",
      image: livingRoomImage,
      description: "Spațiu modern cu linii curate și funcționalitate optimă"
    },
    {
      title: "MODERN SANCTUARY",
      image: interior1Image,
      description: "Design minimalist cu geometrie precisă și estetică contemporană"
    },
    {
      title: "REFINED COMFORT",
      image: interior2Image,
      description: "Ambient elegant cu detalii atent selectate și atmosferă caldă"
    },
    {
      title: "ARCHITECTURAL VISION",
      image: interior3Image,
      description: "Concept inovator cu elemente arhitecturale distinctive"
    },
    {
      title: "WARM ELEGANCE",
      image: interior4Image,
      description: "Spațiu primitor cu tonuri naturale și texturi rafinate"
    },
    {
      title: "SOPHISTICATED DESIGN",
      image: interior5Image,
      description: "Design premium cu atenție la detalii și materiale selecte"
    },
    {
      title: "HERO INTERIOR",
      image: heroInteriorImage,
      description: "Spațiu spectaculos cu design dramatic și impact vizual puternic"
    },
    {
      title: "DESIGNER STUDIO",
      image: designerPortraitImage,
      description: "Studio creativ cu elemente artistice și mobilier de autor"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-6xl md:text-8xl font-light mb-8 leading-tight text-foreground">
              Interioare
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Descoperă o colecție curată de spații interioare care redefinesc eleganța modernă și funcționalitatea contemporană.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Gallery */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="space-y-24">
              {projects.map((project, index) => (
                <div key={index} className="grid lg:grid-cols-2 gap-12 items-center">
                  <div className={`space-y-6 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <div className="space-y-2">
                      <h3 className="text-3xl md:text-4xl font-light text-foreground">
                        {project.title}
                      </h3>
                    </div>
                    
                    <p className="text-lg text-muted-foreground leading-relaxed max-w-md">
                      {project.description}
                    </p>
                    
                    <Button variant="outline" size="sm">
                      Vezi Detalii
                    </Button>
                  </div>
                  
                  <div className={`relative overflow-hidden ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <img 
                      src={project.image} 
                      alt={`${project.title} - Design interior modern`} 
                      className="w-full h-96 object-cover transition-all duration-500 hover:scale-105" 
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-32 text-center">
              <Button variant="default" size="lg">
                Solicită Consultație
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Interioare;