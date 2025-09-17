import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import newArchitecture1 from "@/assets/new-architecture-1.jpg";
import newArchitecture2 from "@/assets/new-architecture-2.jpg";
import newArchitecture3 from "@/assets/new-architecture-3.jpg";
import newArchitecture4 from "@/assets/new-architecture-4.jpg";
import newArchitecture5 from "@/assets/new-architecture-5.jpg";
import newArchitecture6 from "@/assets/new-architecture-6.jpg";
import newArchitecture7 from "@/assets/new-architecture-7.jpg";
import newArchitecture8 from "@/assets/new-architecture-8.jpg";
import newArchitecture9 from "@/assets/new-architecture-9.jpg";
import newArchitecture10 from "@/assets/new-architecture-10.jpg";

const Architecture = () => {
  const projects = [
    {
      title: "ARHITECTURĂ CONTEMPORANĂ",
      image: newArchitecture1,
      description: "Design modern cu finisaje din lemn și beton"
    },
    {
      title: "CASĂ CU PISCINĂ",
      image: newArchitecture2,
      description: "Arhitectură contemporană cu spații deschise"
    },
    {
      title: "INTERIOR MINIMALIST",
      image: newArchitecture3,
      description: "Spații curate cu accente de marmură verde"
    },
    {
      title: "BUCĂTĂRIE MODERNĂ",
      image: newArchitecture4,
      description: "Design funcțional cu tavan din lemn"
    },
    {
      title: "EXTERIOR CU PISCINĂ",
      image: newArchitecture5,
      description: "Arhitectură în harmonie cu peisajul"
    },
    {
      title: "LIVING CU FERESTRE MARI",
      image: newArchitecture6,
      description: "Spații luminoase cu vedere la grădină"
    },
    {
      title: "TERASĂ ACOPERITĂ",
      image: newArchitecture7,
      description: "Zonă de relaxare cu vedere la piscină"
    },
    {
      title: "VEDERE AERIANĂ",
      image: newArchitecture8,
      description: "Ansamblu arhitectural în peisaj natural"
    },
    {
      title: "ȘEMINEU CU MARMURĂ",
      image: newArchitecture9,
      description: "Centru focal cu materiale premium"
    },
    {
      title: "BUCĂTĂRIE INTEGRATĂ",
      image: newArchitecture10,
      description: "Design integrat cu vedere la exterior"
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-black">
        <div className="w-full">
          <div className="text-center">
            <h1 className="text-6xl md:text-8xl font-light mb-8 leading-tight text-white tracking-wider">
              ARHITECTURĂ
            </h1>
          </div>
        </div>
      </section>

      {/* Projects Gallery */}
      <section className="bg-black">
        <div className="w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            {projects.map((project, index) => (
              <div 
                key={index} 
                className="group overflow-hidden cursor-pointer block"
              >
                <div className="relative h-screen overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                  />
                </div>
                
                <div className="p-8 text-white bg-black">
                  <h3 className="text-2xl md:text-3xl font-light mb-2 tracking-wide">
                    {project.title}
                  </h3>
                  <p className="text-sm opacity-75">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-black py-20">
        <div className="w-full px-8">
          <div className="text-center">
            <h2 className="text-4xl md:text-6xl font-light text-white mb-8 tracking-wide">
              SOLICITĂ CONSULTAȚIE
            </h2>
            <p className="text-lg text-white/75 mb-12 max-w-2xl mx-auto">
              Transformă ideea ta în realitate cu soluții arhitecturale inovatoare și funcționale
            </p>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-black transition-colors duration-300">
              Contactează-ne
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Architecture;