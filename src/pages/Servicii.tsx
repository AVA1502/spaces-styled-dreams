import Header from "@/components/Header";
import Services from "@/components/Services";
import Footer from "@/components/Footer";

const Servicii = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-light text-foreground mb-4">
              Servicii
            </h1>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Oferim servicii complete de design interior și arhitectură pentru a vă transforma viziunea în realitate
            </p>
          </div>
        </div>
        <Services />
      </main>
      <Footer />
    </div>
  );
};

export default Servicii;