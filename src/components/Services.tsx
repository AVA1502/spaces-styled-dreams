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
      title: "MINIMAL RESIDENCE",
      location: "București, 2024", 
      image: bedroomImage,
      description: "Interior minimalist"
    },
    {
      title: "URBAN LOFT", 
      location: "Cluj-Napoca, 2024",
      image: kitchenImage,
      description: "Spațiu industrial modern"
    },
    {
      title: "LUXURY SUITE",
      location: "Constanța, 2024",
      image: luxuryBedroomImage, 
      description: "Dormitor de lux"
    },
    {
      title: "DARK ELEGANCE",
      location: "Timișoara, 2023",
      image: darkInteriorImage,
      description: "Interior sofisticat"
    },
    {
      title: "CONTEMPORARY LIVING",
      location: "Iași, 2024", 
      image: livingRoomImage,
      description: "Salon modern"
    },
    {
      title: "MODERN ARCHITECTURE",
      location: "Brașov, 2024",
      image: architectureImage,
      description: "Arhitectură contemporană"
    },
    {
      title: "ELEGANT BEDROOM",
      location: "Sibiu, 2024",
      image: modernBedroomImage,
      description: "Interior modern de lux"
    }, 
    {
      title: "RESTAURANT BAR",
      location: "București, 2023",
      image: restaurantBarImage,
      description: "Design comercial sofisticat"
    },
    {
      title: "LUXURY INTERIOR",
      location: "Oradea, 2024", 
      image: luxuryInteriorImage,
      description: "Spațiu interior premium"
    }
  ];

  return (
    <section id="servicii" className="py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-6xl md:text-7xl font-light mb-20 leading-tight text-foreground">Galerie</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <div key={index} className="relative h-80 md:h-96 group overflow-hidden cursor-pointer">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-300" />
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-xl md:text-2xl font-light mb-1">{project.title}</h3>
                  <p className="text-sm opacity-90">{project.location}</p>
                  <p className="text-xs opacity-75 mt-1">{project.description}</p>
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