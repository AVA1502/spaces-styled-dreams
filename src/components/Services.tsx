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
    details: [
      "Album de temă de proiectare",
      "Brief complet cu clientul: stil, preferințe, buget, funcționalitate",
      "Fotografiile spațiului existent",
      "Lista dorințelor și a cerințelor speciale",
      "Exemple de referințe vizuale (moodboard-uri)"
    ],
    finishes: [
      "Elemente de încălzire",
      "Instalații sanitare", 
      "Materiale de finisaj",
      "Echipamente (bucătărie, audio, video)",
      "Mobilier (cu cod/articol)",
      "Mobilier la comandă",
      "Iluminat",
      "Uși și pereți despărțitori",
      "Electricitate",
      "Décor"
    ],
    link: "/interioare"
  }, {
    title: "SUPERVIZAREA DE DESIGN",
    image: luxuryBathroomMarble,
    description: "Consultăm șeful de echipă și alți subcontractori pe proiect. Ne deplasăm o dată pe săptămână pe șantier și realizăm rapoarte cu stadiul lucrărilor.",
    details: [
      "Consultăm șeful de echipă și alți subcontractori pe proiect",
      "Ne deplasăm o dată pe săptămână pe șantier",
      "În fiecare săptămână realizăm un video cu stadiul actual al lucrărilor",
      "Elaborăm planul pentru toate direcțiile de lucru",
      "Vizite în showroom-uri de materiale și mobilier",
      "Recepția materialelor și mobilierului pe șantier",
      "Supravegherea și gestionarea documentației",
      "Verificăm conformitatea lucrărilor cu proiectul de design",
      "Fotodocumentăm stadiul lucrărilor",
      "Creăm un chat comun cu informații despre proiect",
      "Aprobarea mostrelor de vopsea și finisaje"
    ],
    link: "#"
  }, {  
    title: "SPAȚII PUBLICE / COMUNITARE",
    image: modernLivingWarm,
    description: "Desene de măsurători, planuri de compartimentare, planuri pentru pardoseli și tavane, planuri pentru instalații, desfășurări ale pereților și randări 3D pentru toate camerele principale.",
    details: [
      "Desene de măsurători",
      "Plan de compartimentare cu amplasarea mobilierului",
      "Planuri de demolare a pereților",
      "Planuri de montaj a pereților noi",
      "Planuri pentru pardoseli cu specificarea materialelor",
      "Planuri pentru tavane, ținând cont de sistemele de aer condiționat",
      "Planuri pentru instalațiile și construcțiile sanitare",
      "Planuri pentru amplasarea întrerupătoarelor",
      "Planuri pentru amplasarea prizelor și a punctelor electrice",
      "Desfășurări ale pereților pentru toate camerele",
      "Detalii complexe, execuția îmbinărilor",
      "Randări 3D pentru toate camerele principale",
      "Set de fișe cu indicarea producătorilor și cantităților"
    ],
    link: "#"
  }, {
    title: "SUPRAVEGHEREA DE AUTOR",
    image: modernHallwayDesign,
    description: "Monitorizează cum se realizează lucrările pe șantier, verifică respectarea proiectului, face ajustări în documentație, ține legătura cu echipele și furnizorii.",
    details: [
      "Monitorizează cum se realizează lucrările pe șantier",
      "Verifică respectarea proiectului",
      "Face ajustări în documentație",
      "Ține legătura cu echipele și furnizorii",
      "Raportează clientului progresul"
    ],
    link: "#"
  }];

  return (
    <section id="servicii" className="pt-32 bg-background">
      <div className="w-full">
        <div className="w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 gap-x-8 w-full max-w-6xl mx-auto">
            {projects.map((project, index) => {
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