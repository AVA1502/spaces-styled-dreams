import { useState } from "react";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Header = () => {
  const [open, setOpen] = useState(false);

  const menuItems = [
    { href: "/interioare", label: "Interioare" },
    { href: "/arhitectura", label: "Arhitectura" },
    { href: "/servicii", label: "Servicii" },
    { href: "/despre", label: "Despre" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-sm w-full">
      <div className="w-full bg-black my-0 mx-0 px-[13px] py-[2px]">
        <nav className="flex items-center justify-center relative w-full font-inter">
          {/* Mobile Menu Button - Left side */}
          <div className="absolute left-[13px] lg:hidden">
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <button className="text-white p-2">
                  <Menu className="h-5 w-5" />
                </button>
              </SheetTrigger>
              <SheetContent side="left" className="bg-black border-white/10 w-[280px]">
                <div className="flex flex-col gap-6 mt-8">
                  {menuItems.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="text-lg text-white/80 hover:text-white transition-quick font-bold"
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>

          {/* Desktop Navigation - Left side */}
          <div className="hidden lg:flex items-center gap-6 absolute left-[13px]">
            <a href="/interioare" className="text-[10px] text-white/60 hover:text-white transition-quick font-bold">
              Interioare
            </a>
            
            <a href="/arhitectura" className="text-[10px] text-white/60 hover:text-white transition-quick font-bold">
              Arhitectura
            </a>
            
            <a href="/servicii" className="text-[10px] text-white/60 hover:text-white transition-quick font-bold">
              Servicii
            </a>
            <a href="/despre" className="text-[10px] text-white/60 hover:text-white transition-quick font-bold">
              Despre
            </a>
            <a href="#contact" className="text-[10px] text-white/60 hover:text-white transition-quick font-bold">
              Contact
            </a>
          </div>
          
          {/* Centered Logo */}
          <a href="/" className="text-base tracking-normal text-white font-sans hover:text-white/80 transition-quick cursor-pointer">
            modwalls
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;