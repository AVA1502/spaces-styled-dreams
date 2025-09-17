import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import contemporaryBedroom from "@/assets/contemporary-bedroom.jpg";
import contemporaryBathroom from "@/assets/contemporary-bathroom.jpg";
import contemporaryStorage from "@/assets/contemporary-storage.jpg";
import contemporaryKitchen from "@/assets/contemporary-kitchen.jpg";
import contemporaryLiving from "@/assets/contemporary-living.jpg";
import contemporaryLiving2 from "@/assets/contemporary-living-2.jpg";
import contemporaryKitchen2 from "@/assets/contemporary-kitchen-2.jpg";
import contemporaryDining from "@/assets/contemporary-dining.jpg";
import contemporaryDining2 from "@/assets/contemporary-dining-2.jpg";
import contemporaryMaster from "@/assets/contemporary-master.jpg";
import contemporaryDining3 from "@/assets/contemporary-dining-3.jpg";
import contemporaryLiving3 from "@/assets/contemporary-living-3.jpg";
const ContemporaryElegance = () => {
  const projectSections = [
  // Hero image - full width
  {
    type: "hero",
    images: [{
      image: contemporaryLiving,
      title: "Salon Principal"
    }]
  },
  // Three images in a row
  {
    type: "triple",
    images: [{
      image: contemporaryLiving2,
      title: "Zona de Relaxare"
    }, {
      image: contemporaryDining,
      title: "Spațiu de Luat Masa"
    }, {
      image: contemporaryDining3,
      title: "Zona de Dining"
    }]
  },
  // Two images in a row
  {
    type: "double",
    images: [{
      image: contemporaryDining2,
      title: "Bucătărie Deschisă"
    }, {
      image: contemporaryKitchen,
      title: "Bucătărie Modernă"
    }]
  },
  // Single full-width image
  {
    type: "single",
    images: [{
      image: contemporaryKitchen2,
      title: "Insulă Centrală"
    }]
  },
  // Three images in a row
  {
    type: "triple",
    images: [{
      image: contemporaryBedroom,
      title: "Dormitor Principal"
    }, {
      image: contemporaryBathroom,
      title: "Baie Contemporană"
    }, {
      image: contemporaryStorage,
      title: "Spațiu de Depozitare"
    }]
  },
  // Two images in a row
  {
    type: "double",
    images: [{
      image: contemporaryMaster,
      title: "Dormitor & Baie"
    }, {
      image: contemporaryLiving3,
      title: "Living cu TV"
    }]
  }];
  return <div className="min-h-screen bg-black">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 bg-black">
        <div className="w-full px-8">
          <div className="flex justify-between items-start">
            <h1 className="text-6xl md:text-8xl font-light text-white tracking-wider">
              CONTEMPORARY ELEGANCE
            </h1>
            <div className="text-right text-white opacity-75 text-lg">
              <p>2024 București, 189 m²</p>
            </div>
          </div>
        </div>
      </section>

      {/* Project Gallery */}
      <section className="bg-black px-8 pb-16">
        <div className="w-full space-y-16">
          {projectSections.map((section, sectionIndex) => <div key={sectionIndex} className="w-full">
              {section.type === "hero" && <div className="w-full">
                  <div className="relative h-[80vh] overflow-hidden group mb-8">
                    <img src={section.images[0].image} alt={section.images[0].title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  </div>
                  
                </div>}

              {section.type === "triple" && <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {section.images.map((item, index) => <div key={index} className="group">
                      <div className="relative h-[50vh] overflow-hidden mb-6">
                        <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                      </div>
                      
                    </div>)}
                </div>}

              {section.type === "double" && <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {section.images.map((item, index) => <div key={index} className="group">
                      <div className="relative h-[60vh] overflow-hidden mb-6">
                        <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                      </div>
                      
                    </div>)}
                </div>}

              {section.type === "single" && <div className="w-full">
                  <div className="relative h-[70vh] overflow-hidden group mb-8">
                    <img src={section.images[0].image} alt={section.images[0].title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  </div>
                  
                </div>}
            </div>)}
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
              Descoperă cum putem transforma spațiul tău într-un mediu contemporan elegant
            </p>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-black transition-colors duration-300">
              Contactează-ne
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>;
};
export default ContemporaryElegance;