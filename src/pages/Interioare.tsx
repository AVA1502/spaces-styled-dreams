import Header from "@/components/Header";
import Footer from "@/components/Footer";
import interiorProject1 from "@/assets/interior-project-1.jpg";
import interiorProject2 from "@/assets/interior-project-2.jpg";

const Interioare = () => {
  const projects = [
    {
      title: "CONTEMPORARY ELEGANCE",
      image: interiorProject1,
      year: "2024",
      location: "București",
      area: "189 m²"
    },
    {
      title: "MODERN INDUSTRIAL",
      image: interiorProject2,
      year: "2024", 
      location: "București",
      area: "240 m²"
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
              INTERIOARE
            </h1>
          </div>
        </div>
      </section>

      {/* Projects Gallery */}
      <section className="bg-black">
        <div className="w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            {projects.map((project, index) => (
              <div key={index} className="group relative overflow-hidden cursor-pointer">
                <div className="relative h-screen overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                  />
                  <div className="absolute inset-0 bg-black/20 transition-opacity duration-300 group-hover:bg-black/40"></div>
                </div>
                
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <h3 className="text-2xl md:text-3xl font-light mb-2 tracking-wide">
                    {project.title}
                  </h3>
                  <p className="text-sm opacity-75">
                    {project.year} {project.location}, {project.area}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Interioare;