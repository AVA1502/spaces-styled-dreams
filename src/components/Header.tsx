import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-sm">
      <div className="container mx-auto px-6 py-6">
        <nav className="flex items-center justify-between">
          <div className="text-sm uppercase tracking-widest text-foreground font-light">
            Elena Popescu
          </div>
          
          <div className="hidden md:flex items-center gap-12">
            <a href="#despre" className="text-sm uppercase tracking-wider text-muted-foreground hover:text-foreground transition-quick">Proiecte</a>
            <a href="#servicii" className="text-sm uppercase tracking-wider text-muted-foreground hover:text-foreground transition-quick">Arhitectură</a>
            <a href="#portofoliu" className="text-sm uppercase tracking-wider text-muted-foreground hover:text-foreground transition-quick">Interior</a>
            <a href="#contact" className="text-sm uppercase tracking-wider text-muted-foreground hover:text-foreground transition-quick">Contact</a>
          </div>
          
          <div className="text-sm uppercase tracking-widest text-muted-foreground">
            București
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;