import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Să Discutăm Proiectul Tău
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Îți ofer o consultație gratuită pentru a discuta ideile tale și a crea împreună spațiul perfect pentru tine.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="shadow-elegant">
            <CardHeader>
              <CardTitle className="text-2xl text-primary">Trimite-mi un mesaj</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Nume</label>
                  <Input placeholder="Numele tău" className="transition-smooth" />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Prenume</label>
                  <Input placeholder="Prenumele tău" className="transition-smooth" />
                </div>
              </div>
              
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">Email</label>
                <Input type="email" placeholder="email@exemplu.com" className="transition-smooth" />
              </div>
              
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">Telefon</label>
                <Input type="tel" placeholder="+40 700 000 000" className="transition-smooth" />
              </div>
              
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">Tipul proiectului</label>
                <Input placeholder="ex: Amenajare apartament, redesign living" className="transition-smooth" />
              </div>
              
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">Descrierea proiectului</label>
                <Textarea 
                  placeholder="Povestește-mi despre viziunea ta și ce îți dorești să realizăm împreună..."
                  className="min-h-32 transition-smooth"
                />
              </div>
              
              <Button variant="hero" className="w-full">
                Trimite Mesajul
              </Button>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="shadow-card hover:shadow-elegant transition-smooth">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-primary mb-4">Informații Contact</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-accent rounded-full flex items-center justify-center mr-4">
                      <span className="text-primary font-bold">📧</span>
                    </div>
                    <div>
                      <div className="font-medium">Email</div>
                      <div className="text-muted-foreground">elena@popescudesign.ro</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-accent rounded-full flex items-center justify-center mr-4">
                      <span className="text-primary font-bold">📱</span>
                    </div>
                    <div>
                      <div className="font-medium">Telefon</div>
                      <div className="text-muted-foreground">+40 755 123 456</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-accent rounded-full flex items-center justify-center mr-4">
                      <span className="text-primary font-bold">📍</span>
                    </div>
                    <div>
                      <div className="font-medium">Locație</div>
                      <div className="text-muted-foreground">București, România</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-accent shadow-gold">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold text-primary mb-4">
                  Consultația Inițială Este Gratuită!
                </h3>
                <p className="text-primary/80 mb-6">
                  Programează o întâlnire pentru a discuta proiectul tău și a primi sfaturi personalizate.
                </p>
                <Button variant="hero">
                  Programează Consultația
                </Button>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-primary mb-4">Program de Lucru</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Luni - Vineri</span>
                    <span className="text-muted-foreground">9:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sâmbătă</span>
                    <span className="text-muted-foreground">10:00 - 16:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Duminică</span>
                    <span className="text-muted-foreground">Închis</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;