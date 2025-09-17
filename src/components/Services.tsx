import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
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
  const projects = [{
    title: "ARHITECTURĂ",
    image: architectureImage,
    description: "Proiecte arhitecturale contemporane",
    link: "/arhitectura"
  }, {
    title: "INTERIOARE",
    image: modernBedroomImage,
    description: "Design interior modern și elegant",
    link: "/interioare"
  }, {
    title: "RESTAURANT BAR",
    image: restaurantBarImage,
    description: "Design comercial și HoReCa",
    link: "#"
  }, {
    title: "LUXURY INTERIOR",
    image: luxuryInteriorImage,
    description: "Interioare de lux personalizate",
    link: "#"
  }];
  return <section id="servicii" className="pt-32 bg-background">
      <div className="w-full">
        <div className="w-full">
          

          <div className="grid grid-cols-2 gap-y-8 gap-x-0 w-full">
            {projects.map((project, index) => 
              <Link 
                key={index} 
                to={project.link} 
                className="group overflow-hidden cursor-pointer block"
                onClick={() => console.log(`Navigating to: ${project.link}`)}
              >
                <div className="relative h-96 overflow-hidden">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
                </div>
                <div className="pt-6 text-foreground">
                  <h3 className="text-xl md:text-2xl font-light mb-1">{project.title}</h3>
                  <p className="text-sm opacity-75">{project.description}</p>
                </div>
              </Link>
            )}
          </div>

          <div className="py-32 text-center">
            <Button variant="outline" size="lg" className="border-foreground text-foreground hover:bg-foreground hover:text-background">
              Vezi Toate Proiectele
            </Button>
          </div>
        </div>
      </div>
    </section>;
};
export default Services;