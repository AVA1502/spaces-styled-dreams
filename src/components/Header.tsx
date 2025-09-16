const Header = () => {
  return <header className="fixed top-0 left-0 right-0 z-50 bg-background/70 backdrop-blur-sm">
      <div className="container mx-auto px-12 py-8">
        <nav className="flex items-center justify-between">
          
          
          <div className="hidden md:flex items-center gap-16">
            <a href="#despre" className="text-xs uppercase tracking-[0.15em] text-muted-foreground hover:text-foreground transition-quick font-light">Proiecte</a>
            <a href="#servicii" className="text-xs uppercase tracking-[0.15em] text-muted-foreground hover:text-foreground transition-quick font-light">Arhitectură</a>
            <a href="#portofoliu" className="text-xs uppercase tracking-[0.15em] text-muted-foreground hover:text-foreground transition-quick font-light">Interior</a>
            <a href="#contact" className="text-xs uppercase tracking-[0.15em] text-muted-foreground hover:text-foreground transition-quick font-light">Contact</a>
          </div>
          
          <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-light">
            hot walls
          </div>
        </nav>
      </div>
    </header>;
};
export default Header;