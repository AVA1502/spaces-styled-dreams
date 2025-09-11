import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          <div className="text-2xl font-bold text-primary">
            Elena Popescu
            <span className="block text-xs font-normal text-muted-foreground">Interior Design</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#despre" className="text-foreground hover:text-primary transition-quick">Despre</a>
            <a href="#servicii" className="text-foreground hover:text-primary transition-quick">Servicii</a>
            <a href="#portofoliu" className="text-foreground hover:text-primary transition-quick">Portofoliu</a>
            <a href="#contact" className="text-foreground hover:text-primary transition-quick">Contact</a>
          </div>
          
          <Button variant="secondary" size="sm">
            Consultație Gratuită
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;