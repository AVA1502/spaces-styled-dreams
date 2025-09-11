import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import bedroomImage from "@/assets/portfolio-bedroom.jpg";
import kitchenImage from "@/assets/portfolio-kitchen.jpg";

const Services = () => {
  const services = [
    {
      title: "Design Complet Interior",
      description: "De la concept la implementare, creez designuri complete pentru toate tipurile de spații.",
      features: ["Planuri 3D", "Selecția materialelor", "Coordonarea lucrărilor", "Styling final"]
    },
    {
      title: "Consultanță Design",
      description: "Sfaturi profesionale pentru optimizarea spațiului și alegerea culorilor și mobilierului.",
      features: ["Analiza spațiului", "Recomandări stilistice", "Planuri de amenajare", "Lista de cumpărături"]
    },
    {
      title: "Redesign Parțial",
      description: "Reîmprospătarea spațiilor existente cu modificări minime dar cu impact maxim.",
      features: ["Rearanjarea mobilierului", "Accente decorative", "Soluții de depozitare", "Iluminat optimizat"]
    }
  ];

  return (
    <section id="servicii" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Servicii
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Oferim soluții complete de design interior, adaptate nevoilor și bugetului fiecărui client.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="shadow-card hover:shadow-elegant transition-smooth group">
              <CardHeader>
                <CardTitle className="text-xl text-primary group-hover:text-secondary transition-quick">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-gradient-accent rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Portfolio Preview */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-primary mb-8">Portofoliu Selectat</h3>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="group relative overflow-hidden rounded-2xl shadow-card hover:shadow-elegant transition-smooth">
            <img 
              src={bedroomImage} 
              alt="Design dormitor modern elegant" 
              className="w-full h-80 object-cover group-hover:scale-105 transition-smooth"
            />
            <div className="absolute inset-0 bg-gradient-hero opacity-0 group-hover:opacity-70 transition-smooth"></div>
            <div className="absolute bottom-6 left-6 text-white opacity-0 group-hover:opacity-100 transition-smooth">
              <h4 className="text-xl font-bold mb-2">Dormitor Modern</h4>
              <p className="text-sm">Design elegant cu accente minimaliste</p>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-2xl shadow-card hover:shadow-elegant transition-smooth">
            <img 
              src={kitchenImage} 
              alt="Design bucătărie modernă cu finisaje premium" 
              className="w-full h-80 object-cover group-hover:scale-105 transition-smooth"
            />
            <div className="absolute inset-0 bg-gradient-hero opacity-0 group-hover:opacity-70 transition-smooth"></div>
            <div className="absolute bottom-6 left-6 text-white opacity-0 group-hover:opacity-100 transition-smooth">
              <h4 className="text-xl font-bold mb-2">Bucătărie Premium</h4>
              <p className="text-sm">Funcționalitate și eleganță în perfectă armonie</p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Button variant="secondary" size="lg">
            Vezi Toate Proiectele
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;