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
  const projectSections = [
    // Hero image - full width
    {
      type: "hero",
      images: [{
        image: newArchitecture2,
        title: "Arhitectură Contemporană cu Piscină"
      }]
    },
    // Three images in a row
    {
      type: "triple",
      images: [{
        image: newArchitecture1,
        title: "Intrare Contemporană cu Lemn"
      }, {
        image: newArchitecture3,
        title: "Living cu Perete Marmură Verde"
      }, {
        image: newArchitecture4,
        title: "Bucătărie cu Insulă și Marmură"
      }]
    },
    // Two images in a row
    {
      type: "double",
      images: [{
        image: newArchitecture5,
        title: "Vedere Laterală cu Piscină"
      }, {
        image: newArchitecture6,
        title: "Living cu Ferestre Panoramice"
      }]
    },
    // Single full-width image
    {
      type: "single",
      images: [{
        image: newArchitecture8,
        title: "Vedere Aeriană a Proiectului"
      }]
    },
    // Two images in a row
    {
      type: "double",
      images: [{
        image: newArchitecture7,
        title: "Terasă Acoperită cu Vezi la Piscină"
      }, {
        image: newArchitecture9,
        title: "Interior Open Space cu Șemineu"
      }]
    },
    // Single full-width image
    {
      type: "single",
      images: [{
        image: newArchitecture10,
        title: "Bucătărie cu Tavan din Lemn"
      }]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 bg-background">
        <div className="w-full px-8">
          <div className="flex justify-between items-start">
            <h1 className="text-6xl md:text-8xl font-light text-foreground tracking-wider">
              ARHITECTURĂ
            </h1>
            <div className="text-right text-foreground opacity-75 text-lg">
              <p>Proiecte arhitecturale contemporane</p>
              <p>cu finisaje premium și spații funcționale</p>
            </div>
          </div>
        </div>
      </section>

      {/* Project Gallery */}
      <section className="bg-background px-8 pb-16">
        <div className="w-full space-y-16">
          {projectSections.map((section, sectionIndex) => (
            <div key={sectionIndex} className="w-full">
              {section.type === "hero" && (
                <div className="w-full">
                  <div className="relative h-[80vh] overflow-hidden group mb-8">
                    <img 
                      src={section.images[0].image} 
                      alt={section.images[0].title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                    />
                  </div>
                  <div className="mb-8">
                    <h3 className="text-2xl text-foreground font-light tracking-wide">
                      {section.images[0].title}
                    </h3>
                  </div>
                </div>
              )}

              {section.type === "triple" && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {section.images.map((item, index) => (
                    <div key={index} className="group">
                      <div className="relative h-[50vh] overflow-hidden mb-6">
                        <img 
                          src={item.image} 
                          alt={item.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                        />
                      </div>
                      <div className="mb-8">
                        <h3 className="text-xl text-foreground font-light tracking-wide">
                          {item.title}
                        </h3>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {section.type === "double" && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {section.images.map((item, index) => (
                    <div key={index} className="group">
                      <div className="relative h-[60vh] overflow-hidden mb-6">
                        <img 
                          src={item.image} 
                          alt={item.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                        />
                      </div>
                      <div className="mb-8">
                        <h3 className="text-xl text-foreground font-light tracking-wide">
                          {item.title}
                        </h3>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {section.type === "single" && (
                <div className="w-full">
                  <div className="relative h-[70vh] overflow-hidden group mb-8">
                    <img 
                      src={section.images[0].image} 
                      alt={section.images[0].title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                    />
                  </div>
                  <div className="mb-8">
                    <h3 className="text-2xl text-foreground font-light tracking-wide">
                      {section.images[0].title}
                    </h3>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-background py-20">
        <div className="w-full px-8">
          <div className="text-center">
            <h2 className="text-4xl md:text-6xl font-light text-foreground mb-8 tracking-wide">
              SOLICITĂ CONSULTAȚIE
            </h2>
            <p className="text-lg text-foreground/75 mb-12 max-w-2xl mx-auto">
              Transformă ideea ta în realitate cu soluții arhitecturale inovatoare și funcționale
            </p>
            <Button variant="outline" size="lg" className="border-foreground text-foreground hover:bg-foreground hover:text-background transition-colors duration-300">
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