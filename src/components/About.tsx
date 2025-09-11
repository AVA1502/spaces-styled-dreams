import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <section id="despre" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Despre Mine
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Cu peste 10 ani de experiență în design interior, am ajutat sute de familii 
              să își transforme locuințele în spații care reflectă personalitatea și nevoile lor unice.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Specializată în designul contemporan cu accente clasice, creez interioare 
              care îmbină funcționalitatea cu estetica, folosind materiale premium și 
              soluții inovatoare de amenajare.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <Card className="shadow-card hover:shadow-elegant transition-smooth">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-primary mb-2">200+</div>
                  <div className="text-sm text-muted-foreground">Proiecte Finalizate</div>
                </CardContent>
              </Card>
              
              <Card className="shadow-card hover:shadow-elegant transition-smooth">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-primary mb-2">10+</div>
                  <div className="text-sm text-muted-foreground">Ani Experiență</div>
                </CardContent>
              </Card>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-accent rounded-2xl p-8 shadow-gold">
              <h3 className="text-2xl font-bold text-primary mb-4">Filosofia Mea</h3>
              <blockquote className="text-lg italic text-primary/80 leading-relaxed">
                "Fiecare spațiu are propria sa poveste. Rolul meu este să o descopăr 
                și să o transform într-un design care inspiră și aduce bucurie în fiecare zi."
              </blockquote>
              <cite className="block text-right mt-4 font-semibold text-primary">- Elena Popescu</cite>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;