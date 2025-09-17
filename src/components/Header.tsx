const Header = () => {
  return <header className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-sm w-full">
      <div className="w-full bg-black my-0 mx-0 px-[13px] py-[2px]">
        <nav className="flex items-center justify-center relative w-full font-inter">
          {/* Left side navigation */}
          <div className="flex items-center gap-6 absolute left-[13px]">
            <a href="/interioare" className="text-[10px] text-white/60 hover:text-white transition-quick font-bold">
              Interioare
            </a>
            
            <a href="/arhitectura" className="text-[10px] text-white/60 hover:text-white transition-quick font-bold">
              Arhitectura
            </a>
            
            <a href="#servicii" className="text-[10px] text-white/60 hover:text-white transition-quick font-bold">
              Servicii
            </a>
            <a href="#contact" className="text-[10px] text-white/60 hover:text-white transition-quick font-bold">
              Contact
            </a>
          </div>
          
          {/* Centered Logo */}
          <a href="/" className="text-base tracking-normal text-white font-sans hover:text-white/80 transition-quick cursor-pointer">
            hot walls
          </a>
        </nav>
      </div>
    </header>;
};
export default Header;