import { Button } from "@/components/ui/button";
import bedroomImage from "@/assets/portfolio-bedroom.jpg";
import kitchenImage from "@/assets/portfolio-kitchen.jpg";
import livingRoomImage from "@/assets/living-room.jpg";
import darkInteriorImage from "@/assets/dark-interior.jpg";
import luxuryBedroomImage from "@/assets/bedroom-luxury.jpg";
import architectureImage from "@/assets/architecture-exterior.jpg";
import modernBedroomImage from "@/assets/modern-bedroom.jpg";
import restaurantBarImage from "@/assets/restaurant-bar.jpg";
import luxuryInteriorImage from "@/assets/luxury-interior.jpg";
const Services = () => {
  const projects = [
    {
      title: "EXTERIOR ARCHITECTURE",
      image: architectureImage,
      description: "Arhitectură exterior"
    },
    {
      title: "ELEGANT INTERIOR", 
      image: modernBedroomImage,
      description: "Interior modern"
    },
    {
      title: "RESTAURANT BAR",
      image: restaurantBarImage,
      description: "Design bar"
    },
    {
      title: "LUXURY INTERIOR",
      image: luxuryInteriorImage,
      description: "Interior de lux"
    }
  ];

  return (
    <section id="servicii" className="py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-6xl md:text-7xl font-light mb-20 leading-tight text-foreground">Galerie</h2>

          <div className="grid grid-cols-2 gap-y-6 gap-x-0">
            {projects.map((project, index) => (
              <div key={index} className="group overflow-hidden cursor-pointer">
                <div className="relative h-96 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="pt-4 text-foreground">
                  <h3 className="text-xl md:text-2xl font-light mb-1">{project.title}</h3>
                  <p className="text-sm opacity-75">{project.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-32 text-center">
            <Button variant="outline" size="lg" className="border-foreground text-foreground hover:bg-foreground hover:text-background">
              Vezi Toate Proiectele
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Services;