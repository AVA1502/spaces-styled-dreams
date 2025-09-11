const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Elena Popescu</h3>
            <p className="text-primary-foreground/80 mb-4">
              Design interior de excepție pentru spații care inspiră și transformă.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-primary-foreground/80 hover:text-secondary transition-quick">
                Instagram
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-secondary transition-quick">
                Facebook
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-secondary transition-quick">
                LinkedIn
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Servicii</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li><a href="#" className="hover:text-secondary transition-quick">Design Complet Interior</a></li>
              <li><a href="#" className="hover:text-secondary transition-quick">Consultanță Design</a></li>
              <li><a href="#" className="hover:text-secondary transition-quick">Redesign Parțial</a></li>
              <li><a href="#" className="hover:text-secondary transition-quick">Styling & Decorare</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>📧 elena@popescudesign.ro</li>
              <li>📱 +40 755 123 456</li>
              <li>📍 București, România</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-primary-foreground/60">
          <p>&copy; {new Date().getFullYear()} Elena Popescu Interior Design. Toate drepturile rezervate.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;