import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import modernLiving from "@/assets/modern-living.jpg";
import modernLiving2 from "@/assets/modern-living-2.jpg";
import modernKitchen from "@/assets/modern-kitchen.jpg";
import modernKitchen2 from "@/assets/modern-kitchen-2.jpg";
import modernKitchen3 from "@/assets/modern-kitchen-3.jpg";
import modernOpenSpace from "@/assets/modern-open-space.jpg";
import modernKitchen4 from "@/assets/modern-kitchen-4.jpg";
import modernLiving3 from "@/assets/modern-living-3.jpg";
import modernLiving4 from "@/assets/modern-living-4.jpg";

const ModernMinimalism = () => {
  const projectSections = [
    // Hero image - full width
    {
      type: "hero",
      images: [{
        image: modernLiving,
        title: "Spațiu de Zi Principal"
      }]
    },
    // Three images in a row
    {
      type: "triple",
      images: [{
        image: modernLiving2,
        title: "Living Contemporary"
      }, {
        image: modernKitchen,
        title: "Bucătărie cu Insulă"
      }, {
        image: modernKitchen2,
        title: "Zona de Masă Integrată"
      }]
    },
    // Two images in a row
    {
      type: "double",
      images: [{
        image: modernKitchen3,
        title: "Bucătărie Liniară"
      }, {
        image: modernOpenSpace,
        title: "Spațiu Deschis"
      }]
    },
    // Single full-width image
    {
      type: "single",
      images: [{
        image: modernKitchen4,
        title: "Bucătărie cu Design Industrial"
      }]
    },
    // Two images in a row
    {
      type: "double",
      images: [{
        image: modernLiving3,
        title: "Living cu Lumină Naturală"
      }, {
        image: modernLiving4,
        title: "Zona de Relaxare"
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
              MODERN MINIMALISM
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
              Descoperă cum putem transforma spațiul tău într-un mediu modern și minimalist
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

export default ModernMinimalism;