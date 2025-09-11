import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  return (
    <section id="contact" className="py-32 bg-background border-t border-border">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-xs uppercase tracking-widest text-muted-foreground mb-8">
            Să Lucrăm Împreună
          </div>
          
          <h2 className="text-6xl md:text-7xl font-light mb-20 leading-tight text-foreground">
            CONTACT
          </h2>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Input 
                      placeholder="Nume" 
                      className="bg-transparent border-0 border-b border-border rounded-none px-0 py-4 focus:border-foreground transition-quick" 
                    />
                  </div>
                  <div>
                    <Input 
                      placeholder="Prenume" 
                      className="bg-transparent border-0 border-b border-border rounded-none px-0 py-4 focus:border-foreground transition-quick" 
                    />
                  </div>
                </div>
                
                <Input 
                  type="email" 
                  placeholder="Email" 
                  className="bg-transparent border-0 border-b border-border rounded-none px-0 py-4 focus:border-foreground transition-quick" 
                />
                
                <Input 
                  type="tel" 
                  placeholder="Telefon" 
                  className="bg-transparent border-0 border-b border-border rounded-none px-0 py-4 focus:border-foreground transition-quick" 
                />
                
                <Textarea 
                  placeholder="Descrierea proiectului..."
                  className="bg-transparent border-0 border-b border-border rounded-none px-0 py-4 min-h-24 focus:border-foreground transition-quick resize-none"
                />
              </div>
              
              <Button variant="dark" size="lg" className="mt-8">
                Trimite Mesajul
              </Button>
            </div>

            {/* Contact Information */}
            <div className="space-y-12">
              <div className="space-y-8">
                <div className="space-y-2">
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">Email</div>
                  <div className="text-lg text-foreground">elena@popescudesign.ro</div>
                </div>
                
                <div className="space-y-2">
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">Telefon</div>
                  <div className="text-lg text-foreground">+40 755 123 456</div>
                </div>
                
                <div className="space-y-2">
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">Locație</div>
                  <div className="text-lg text-foreground">București, România</div>
                </div>
              </div>

              <div className="pt-8 border-t border-border">
                <div className="space-y-4">
                  <h3 className="text-xl font-light text-foreground">Program de Lucru</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Luni - Vineri</span>
                      <span className="text-foreground">9:00 - 18:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Sâmbătă</span>
                      <span className="text-foreground">10:00 - 16:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Duminică</span>
                      <span className="text-foreground">Închis</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;