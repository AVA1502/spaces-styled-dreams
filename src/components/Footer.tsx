const Footer = () => {
  return (
    <footer className="border-t border-border bg-background py-16">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 mb-16">
            <div className="space-y-4">
              <div className="text-sm uppercase tracking-widest text-foreground font-light">
                Elena Popescu
              </div>
              <div className="text-xs uppercase tracking-wider text-muted-foreground">
                Interior Design Studio
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="text-xs uppercase tracking-wider text-muted-foreground">Contact</div>
              <div className="space-y-2 text-sm">
                <div className="text-foreground">elena@popescudesign.ro</div>
                <div className="text-foreground">+40 755 123 456</div>
                <div className="text-foreground">București, România</div>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="text-xs uppercase tracking-wider text-muted-foreground">Social</div>
              <div className="space-y-2 text-sm">
                <div><a href="#" className="text-foreground hover:text-muted-foreground transition-quick">Instagram</a></div>
                <div><a href="#" className="text-foreground hover:text-muted-foreground transition-quick">LinkedIn</a></div>
                <div><a href="#" className="text-foreground hover:text-muted-foreground transition-quick">Behance</a></div>
              </div>
            </div>
          </div>
          
          <div className="pt-8 border-t border-border">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-xs text-muted-foreground">
                © {new Date().getFullYear()} Elena Popescu. Toate drepturile rezervate.
              </div>
              <div className="text-xs text-muted-foreground">
                Design & Development by Studio
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;