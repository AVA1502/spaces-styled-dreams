import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  return (
    <section id="contact" className="py-32 bg-background border-t border-border">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto">
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
        </div>
      </div>
    </section>
  );
};

export default Contact;