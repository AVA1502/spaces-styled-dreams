const About = () => {
  return (
    <section id="despre" className="py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-xs uppercase tracking-widest text-muted-foreground mb-8">
            Despre Designer
          </div>
          
          <h2 className="text-6xl md:text-7xl font-light mb-12 leading-tight text-foreground">
            ARHITECTURĂ
            <br />
            <span className="text-muted-foreground">INTERIOR</span>
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-8">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Cu peste 10 ani de experiență în proiectarea spațiilor contemporane, 
                Elena Popescu creează interioare minimaliste care îmbină funcționalitatea 
                cu estetica modernă.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Fiecare proiect este abordat cu atenție la detalii și respect pentru 
                personalitatea clientului, rezultând în spații unice și intemporale.
              </p>
            </div>
            
            <div className="space-y-12">
              <div className="border-l border-border pl-6">
                <div className="text-4xl font-light text-foreground mb-2">200+</div>
                <div className="text-sm uppercase tracking-wider text-muted-foreground">Proiecte Finalizate</div>
              </div>
              
              <div className="border-l border-border pl-6">
                <div className="text-4xl font-light text-foreground mb-2">10+</div>
                <div className="text-sm uppercase tracking-wider text-muted-foreground">Ani Experiență</div>
              </div>
              
              <div className="border-l border-border pl-6">
                <div className="text-4xl font-light text-foreground mb-2">15+</div>
                <div className="text-sm uppercase tracking-wider text-muted-foreground">Premii Internaționale</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;