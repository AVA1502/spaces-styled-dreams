const Header = () => {
  return <header className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-sm">
      <div className="container bg-black my-0 mx-0 px-[13px] py-[2px]">
        <nav className="flex items-center justify-center relative">
          {/* Left side navigation */}
          <div className="flex items-center gap-1 md:gap-2 absolute left-0 mx-0">
            <a href="/interioare" className="text-xs uppercase tracking-[0.15em] text-white/70 hover:text-white transition-quick font-light">
              Interioare
            </a>
            <a href="#arhitectura" className="text-xs uppercase tracking-[0.15em] text-white/70 hover:text-white transition-quick font-light">
              Arhitectură
            </a>
            <a href="#servicii" className="text-xs uppercase tracking-[0.15em] text-white/70 hover:text-white transition-quick font-light">
              Servicii
            </a>
            <a href="#contact" className="text-xs uppercase tracking-[0.15em] text-white/70 hover:text-white transition-quick font-light">
              Contact
            </a>
          </div>
          
          {/* Centered Logo */}
          <a href="/" className="text-xl uppercase tracking-[0.3em] text-white font-light hover:text-white/80 transition-quick cursor-pointer py-0 px-px mx-0 my-0">
            hot walls
          </a>
        </nav>
      </div>
    </header>;
};
export default Header;