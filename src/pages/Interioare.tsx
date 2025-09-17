import Header from "@/components/Header";
import Footer from "@/components/Footer";
import interiorProject1 from "@/assets/interior-project-1.jpg";
import interiorProject2 from "@/assets/interior-project-2.jpg";

const Interioare = () => {
  const projects = [
    {
      title: "CONTEMPORARY ELEGANCE",
      image: interiorProject1,
      description: "Design modern cu linii curate și materialе naturale"
    },
    {
      title: "MODERN MINIMALISM",
      image: interiorProject2,
      description: "Design minimalist cu elemente de beton și lemn natural"
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
              <a 
                key={index} 
                href={index === 0 ? "/interioare/contemporary-elegance" : "/interioare/modern-minimalism"}
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
              </a>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Interioare;