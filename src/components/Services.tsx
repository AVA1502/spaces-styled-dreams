import { Button } from "@/components/ui/button";
import bedroomImage from "@/assets/portfolio-bedroom.jpg";
import kitchenImage from "@/assets/portfolio-kitchen.jpg";

const Services = () => {
  const projects = [
    {
      title: "MINIMAL RESIDENCE",
      location: "București, 2024",
      area: "120 m²",
      image: bedroomImage,
      description: "Apartament contemporan cu design minimalist și materiale naturale"
    },
    {
      title: "URBAN LOFT", 
      location: "Cluj-Napoca, 2024",
      area: "90 m²",
      image: kitchenImage,
      description: "Spațiu industrial transformat în locuință modernă și funcțională"
    }
  ];

  return (
    <section id="servicii" className="py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-xs uppercase tracking-widest text-muted-foreground mb-8">
            Proiecte Selectate
          </div>
          
          <h2 className="text-6xl md:text-7xl font-light mb-20 leading-tight text-foreground">
            PORTOFOLIU
          </h2>

          <div className="space-y-24">
            {projects.map((project, index) => (
              <div key={index} className="grid lg:grid-cols-2 gap-12 items-center">
                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="space-y-2">
                    <h3 className="text-3xl md:text-4xl font-light text-foreground">
                      {project.title}
                    </h3>
                    <div className="text-sm uppercase tracking-wider text-muted-foreground">
                      {project.location} — {project.area}
                    </div>
                  </div>
                  
                  <p className="text-lg text-muted-foreground leading-relaxed max-w-md">
                    {project.description}
                  </p>
                  
                  <Button variant="minimal" size="sm">
                    Vezi Proiectul
                  </Button>
                </div>
                
                <div className={`relative overflow-hidden ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <img 
                    src={project.image} 
                    alt={`${project.title} - Design interior modern`}
                    className="w-full h-96 object-cover transition-smooth hover:scale-105"
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-32 text-center">
            <Button variant="dark" size="lg">
              Vezi Toate Proiectele
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;