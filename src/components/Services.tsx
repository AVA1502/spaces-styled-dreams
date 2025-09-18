import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import architectureImage from "@/assets/architecture-exterior.jpg";
import modernInteriorCeramic from "@/assets/modern-interior-ceramic.jpg";
import luxuryBathroomMarble from "@/assets/luxury-bathroom-marble.jpg";
import modernLivingWarm from "@/assets/modern-living-warm.jpg";
import modernHallwayDesign from "@/assets/modern-hallway-design.jpg";

const Services = () => {
  const projects = [{
    title: "DESIGN REZIDENȚIAL",
    image: modernInteriorCeramic,
    description: "Brief complet cu clientul: stil, preferințe, buget, funcționalitate. Album de temă de proiectare cu fotografiile spațiului existent, lista dorințelor și exemple de referințe vizuale (moodboard-uri).",
    link: "/interioare"
  }, {
    title: "SUPERVIZAREA DE DESIGN",
    image: luxuryBathroomMarble,
    description: "Consultăm șeful de echipă și subcontractori pe proiect. Ne deplasăm săptămânal pe șantier și realizăm rapoarte cu stadiul lucrărilor. Gestionăm documentația pentru achiziția materialelor.",
    link: "#"
  }, {  
    title: "SPAȚII PUBLICE / COMUNITARE",
    image: modernLivingWarm,
    description: "Desene de măsurători, planuri de compartimentare, planuri pentru pardoseli și tavane, planuri pentru instalații, desfășurări ale pereților și randări 3D pentru toate camerele principale.",
    link: "#"
  }, {
    title: "ARHITECTURĂ",
    image: architectureImage,
    description: "Proiecte arhitecturale contemporane cu finisaje premium și spații funcționale",
    link: "/arhitectura"
  }, {
    title: "SUPRAVEGHEREA DE AUTOR",
    image: modernHallwayDesign,
    description: "Monitorizează cum se realizează lucrările pe șantier, verifică respectarea proiectului, face ajustări în documentație, ține legătura cu echipele și furnizorii.",
    link: "#"
  }];

  return (
    <section id="servicii" className="pt-32 bg-background">
      <div className="w-full">
        <div className="w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-8 gap-x-8 w-full">
            {projects.slice(0, 3).map((project, index) => {
              if (project.link === "#") {
                return (
                  <div key={index} className="group overflow-hidden cursor-not-allowed block opacity-50">
                    <div className="relative h-96 overflow-hidden">
                      <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                    </div>
                    <div className="pt-6 text-foreground">
                      <h3 className="text-xl md:text-2xl font-light mb-1">{project.title}</h3>
                      <p className="text-sm opacity-75">{project.description}</p>
                    </div>
                  </div>
                );
              }
              return (
                <Link 
                  key={index} 
                  to={project.link} 
                  className="group overflow-hidden cursor-pointer block hover:opacity-90 transition-opacity"
                  onClick={(e) => {
                    console.log(`Clicking on: ${project.title} - ${project.link}`);
                    e.preventDefault();
                    window.location.href = project.link;
                  }}
                >
                  <div className="relative h-96 overflow-hidden">
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
                  </div>
                  <div className="pt-6 text-foreground">
                    <h3 className="text-xl md:text-2xl font-light mb-1">{project.title}</h3>
                    <p className="text-sm opacity-75">{project.description}</p>
                  </div>
                </Link>
              );
            })}
          </div>
          
          {/* Second row with 2 services centered */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 gap-x-8 w-full max-w-4xl mx-auto mt-8">
            {projects.slice(3).map((project, index) => {
              if (project.link === "#") {
                return (
                  <div key={index + 3} className="group overflow-hidden cursor-not-allowed block opacity-50">
                    <div className="relative h-96 overflow-hidden">
                      <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                    </div>
                    <div className="pt-6 text-foreground">
                      <h3 className="text-xl md:text-2xl font-light mb-1">{project.title}</h3>
                      <p className="text-sm opacity-75">{project.description}</p>
                    </div>
                  </div>
                );
              }
              return (
                <Link 
                  key={index + 3} 
                  to={project.link} 
                  className="group overflow-hidden cursor-pointer block hover:opacity-90 transition-opacity"
                  onClick={(e) => {
                    console.log(`Clicking on: ${project.title} - ${project.link}`);
                    e.preventDefault();
                    window.location.href = project.link;
                  }}
                >
                  <div className="relative h-96 overflow-hidden">
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
                  </div>
                  <div className="pt-6 text-foreground">
                    <h3 className="text-xl md:text-2xl font-light mb-1">{project.title}</h3>
                    <p className="text-sm opacity-75">{project.description}</p>
                  </div>
                </Link>
              );
            })}
          </div>

          <div className="py-32 text-center">
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