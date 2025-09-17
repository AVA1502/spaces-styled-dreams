const Header = () => {
  return <header className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-sm">
      <div className="container bg-black my-0 mx-0 px-[13px] py-[2px]">
        <nav className="flex items-center justify-between w-full font-inter">
          {/* Left side navigation */}
          <div className="flex items-center gap-6">
            <a href="/interioare" className="text-[10px] text-white/60 hover:text-white transition-quick font-extralight">
              Interioare
            </a>
            <a href="#arhitectura" className="text-[10px] text-white/60 hover:text-white transition-quick font-extralight">
              Arhitectură
            </a>
            <a href="#servicii" className="text-[10px] text-white/60 hover:text-white transition-quick font-extralight">
              Servicii
            </a>
            <a href="#contact" className="text-[10px] text-white/60 hover:text-white transition-quick font-extralight">
              Contact
            </a>
          </div>
          
          {/* Right side Logo */}
          <a href="/" className="text-lg tracking-normal text-white font-extralight hover:text-white/80 transition-quick cursor-pointer">
            hot walls
          </a>
        </nav>
      </div>
    </header>;
};
export default Header;