import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import architecturePoolExterior from "@/assets/architecture-pool-exterior.jpg";
import architectureInteriorLiving from "@/assets/architecture-interior-living.jpg";
import architectureBathroom from "@/assets/architecture-bathroom.jpg";
import architectureLivingSpace from "@/assets/architecture-living-space.jpg";
import architectureKitchen from "@/assets/architecture-kitchen.jpg";
import architectureExterior2 from "@/assets/architecture-exterior-2.jpg";
import architectureInteriorWindows from "@/assets/architecture-interior-windows.jpg";
import architectureCoveredArea from "@/assets/architecture-covered-area.jpg";
import architectureAerial from "@/assets/architecture-aerial.jpg";
import architectureOpenPlan from "@/assets/architecture-open-plan.jpg";

const Architecture = () => {
  const projectSections = [
    // Hero image - full width
    {
      type: "hero",
      images: [{
        image: architecturePoolExterior,
        title: "Arhitectură Contemporană cu Piscină"
      }]
    },
    // Three images in a row
    {
      type: "triple",
      images: [{
        image: architectureInteriorLiving,
        title: "Living cu Perete Marmură"
      }, {
        image: architectureBathroom,
        title: "Baie Contemporană"
      }, {
        image: architectureLivingSpace,
        title: "Spațiu de Zi Modern"
      }]
    },
    // Two images in a row
    {
      type: "double",
      images: [{
        image: architectureKitchen,
        title: "Bucătărie Open Space"
      }, {
        image: architectureExterior2,
        title: "Exterior cu Piscină"
      }]
    },
    // Single full-width image
    {
      type: "single",
      images: [{
        image: architectureInteriorWindows,
        title: "Living cu Ferestre Panoramice"
      }]
    },
    // Two images in a row
    {
      type: "double",
      images: [{
        image: architectureCoveredArea,
        title: "Terasă Acoperită"
      }, {
        image: architectureAerial,
        title: "Vedere Aeriană"
      }]
    },
    // Single full-width image
    {
      type: "single",
      images: [{
        image: architectureOpenPlan,
        title: "Plan Deschis cu Perete Statement"
      }]
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 bg-black">
        <div className="w-full px-8">
          <div className="flex justify-between items-start">
            <h1 className="text-6xl md:text-8xl font-light text-white tracking-wider">
              ARHITECTURĂ
            </h1>
            <div className="text-right text-white opacity-75 text-lg">
              
            </div>
          </div>
        </div>
      </section>

      {/* Project Gallery */}
      <section className="bg-black px-8 pb-16">
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
                    <h3 className="text-2xl text-white font-light tracking-wide">
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
                        <h3 className="text-xl text-white font-light tracking-wide">
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
                        <h3 className="text-xl text-white font-light tracking-wide">
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
                    <h3 className="text-2xl text-white font-light tracking-wide">
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