import { Button } from "@/components/ui/button";
import bedroomImage from "@/assets/portfolio-bedroom.jpg";
import kitchenImage from "@/assets/portfolio-kitchen.jpg";
import livingRoomImage from "@/assets/living-room.jpg";
import darkInteriorImage from "@/assets/dark-interior.jpg";
import luxuryBedroomImage from "@/assets/bedroom-luxury.jpg";
import interior1Image from "@/assets/interior-1.jpg";
import interior2Image from "@/assets/interior-2.jpg";
import interior3Image from "@/assets/interior-3.jpg";
const Services = () => {
  const projects = [{
    title: "MINIMAL RESIDENCE",
    location: "București, 2024",
    area: "120 m²",
    image: bedroomImage,
    description: "Apartament contemporan cu design minimalist și materiale naturale, focusat pe funcționalitate și eleganță discretă"
  }, {
    title: "URBAN LOFT",
    location: "Cluj-Napoca, 2024",
    area: "90 m²",
    image: kitchenImage,
    description: "Spațiu industrial transformat în locuință modernă și funcțională cu accente de metal și lemn masiv"
  }, {
    title: "LUXURY SUITE",
    location: "Constanța, 2024",
    area: "150 m²",
    image: luxuryBedroomImage,
    description: "Dormitor de lux cu textile premium și iluminat ambiental, creat pentru confort maxim și relaxare"
  }, {
    title: "DARK ELEGANCE",
    location: "Timișoara, 2023",
    area: "110 m²",
    image: darkInteriorImage,
    description: "Interior sofisticat cu tonuri întunecate și accente aurii, exprimând rafinament și personalitate"
  }, {
    title: "CONTEMPORARY LIVING",
    location: "Iași, 2024",
    area: "130 m²",
    image: livingRoomImage,
    description: "Salon modern cu mobilier contemporan și spații deschise, perfect pentru viața de zi cu zi"
  }, {
    title: "MODERN SANCTUARY",
    location: "Brașov, 2023",
    area: "95 m²",
    image: interior1Image,
    description: "Cameră cu design curat și linii geometrice, îmbinând funcționalitatea cu estetica modernă"
  }, {
    title: "REFINED COMFORT",
    location: "Sibiu, 2024",
    area: "140 m²",
    image: interior2Image,
    description: "Spațiu elegant cu mobilier selectat cu grijă și detalii rafinate pentru un ambient cald și primitor"
  }, {
    title: "ARCHITECTURAL VISION",
    location: "Oradea, 2023",
    area: "160 m²",
    image: interior3Image,
    description: "Design inovator cu elemente arhitecturale distinctive și materiale de înaltă calitate"
  }];
  return <section id="servicii" className="py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          
          
          <h2 className="text-6xl md:text-7xl font-light mb-20 leading-tight text-foreground">Galerie</h2>

          <div className="space-y-24">
            {projects.map((project, index) => <div key={index} className="grid lg:grid-cols-2 gap-12 items-center">
                
                
                <div className={`relative overflow-hidden ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  
                </div>
              </div>)}
          </div>

          <div className="mt-32 text-center">
            <Button variant="dark" size="lg">
              Vezi Toate Proiectele
            </Button>
          </div>
        </div>
      </div>
    </section>;
};
export default Services;