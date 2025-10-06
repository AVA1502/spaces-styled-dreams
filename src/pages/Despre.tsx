import Header from "@/components/Header";
import Footer from "@/components/Footer";
import marioPortrait from "@/assets/mario-portrait.jpg";

const Despre = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <div className="container mx-auto px-6 py-20">
          <div className="max-w-6xl mx-auto">
            <div className="text-xs uppercase tracking-widest text-muted-foreground mb-8">
              Povestea Noastră
            </div>
            
            <h1 className="text-6xl md:text-7xl font-light mb-20 leading-tight text-foreground">
              DESPRE
            </h1>

            <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
              {/* Image */}
              <div className="order-2 lg:order-1">
                <img 
                  src={marioPortrait} 
                  alt="Mario Gancearuc - Designer Interior" 
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* Content */}
              <div className="order-1 lg:order-2 space-y-6 text-foreground/80 leading-relaxed">
                <h2 className="text-3xl md:text-4xl font-light text-foreground mb-8">
                  Despre Mario Gancearuc & Mod Walls Studio
                </h2>
                
                <p>
                  Mă numesc Mario Gancearuc, iar designul a fost pasiunea mea încă din anii de studenție. Am absolvit în 2013 prestigioasa Universitate de Arhitectură și Urbanism „Ion Mincu", specializarea Design Interior, moment care a marcat începutul unui drum dedicat creativității, esteticii și transformării spațiilor în experiențe autentice.
                </p>

                <p>
                  În 2018 am avut primul meu proiect și prima experiență profesională, o etapă esențială care mi-a dat încrederea de a merge mai departe. Pas cu pas, prin multă muncă, nopți nedormite și nenumărate ore de dedicare, am pus bazele a ceea ce astăzi este propriul meu studio de design – Mod Walls.
                </p>

                <p>
                  Stilul meu este minimalist, pentru că mă regăsesc în simplitatea liniilor curate, în echilibrul proporțiilor și în rafinamentul detaliilor discrete. Pentru mine, minimalismul nu înseamnă gol sau auster, ci claritate, eleganță și armonie – un mod de a lăsa spațiul să respire și să transmită emoție.
                </p>

                <p>
                  Mod Walls nu a fost construit peste noapte. A fost rezultatul perseverenței, al ambiției și al curajului de a începe de la zero. Am muncit mult, de cele mai multe ori singur, pentru a contura un studio care să reflecte nu doar viziunea mea, ci și valorile în care cred: minimalism, rafinament și estetică atemporală.
                </p>

                <p>
                  Astăzi, alături de o echipă în creștere, îmi doresc să duc Mod Walls către noi orizonturi. Vreau să continui să mă dezvolt, să învăț și să creez proiecte unice, care inspiră și dau formă unor spații memorabile.
                </p>

                <p className="font-medium text-foreground">
                  Împreună cu echipa mea, cred în realizarea unor proiecte mari, capabile să spună povești, să transmită emoții și să redefinească modul în care oamenii trăiesc și simt spațiul din jurul lor.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Despre;
