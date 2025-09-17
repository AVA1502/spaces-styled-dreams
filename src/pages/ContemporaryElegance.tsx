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

const ContemporaryElegance = () => {
  const projectImages = [
    {
      image: contemporaryLiving,
      title: "Salon Principal"
    },
    {
      image: contemporaryLiving2,
      title: "Zona de Relaxare"
    },
    {
      image: contemporaryDining,
      title: "Spațiu de Luat Masa"
    },
    {
      image: contemporaryDining2,
      title: "Bucătărie Deschisă"
    },
    {
      image: contemporaryKitchen,
      title: "Bucătărie Modernă"
    },
    {
      image: contemporaryKitchen2,
      title: "Insulă Centrală"
    },
    {
      image: contemporaryBedroom,
      title: "Dormitor Principal"
    },
    {
      image: contemporaryMaster,
      title: "Dormitor & Baie"
    },
    {
      image: contemporaryBathroom,
      title: "Baie Contemporană"
    },
    {
      image: contemporaryStorage,
      title: "Spațiu de Depozitare"
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-0 bg-black">
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
      <section className="bg-black">
        <div className="w-full">
          {projectImages.map((item, index) => (
            <div key={index} className="relative">
              <div className="relative h-screen w-full overflow-hidden group">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-black/10 transition-opacity duration-300 group-hover:bg-black/20"></div>
                
                {/* Image Title Overlay */}
                <div className="absolute bottom-8 left-8 text-white">
                  <h3 className="text-2xl md:text-3xl font-light tracking-wide">
                    {item.title}
                  </h3>
                </div>
              </div>
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
              Descoperă cum putem transforma spațiul tău într-un mediu contemporan elegant
            </p>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-white text-white hover:bg-white hover:text-black transition-colors duration-300"
            >
              Contactează-ne
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContemporaryElegance;