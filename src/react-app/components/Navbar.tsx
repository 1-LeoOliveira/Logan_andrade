import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#sobre", label: "Sobre" },
  { href: "#especialidades", label: "Especialidades" },
  { href: "#terapia", label: "A Terapia" },
  { href: "#primeira-sessao", label: "Primeira Sessão" },
  { href: "#contato", label: "Contato" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isMobileMenuOpen
          ? "bg-[#faf8f5]/95 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo and Name */}
          <a href="#" className="flex items-center gap-3 group">
            <img
              src="/baleia_logo.png"
              alt="Logo"
              className="w-16 h-16 object-contain transition-transform duration-300 group-hover:scale-105"
            />
            <div className="flex flex-col">
              <span className="font-serif text-xl font-semibold tracking-wide text-[#1e3a5f] transition-colors duration-300 group-hover:text-[#c9a962]">
                Logan Andrade
              </span>
              <span className="text-[10px] tracking-widest uppercase text-[#1e3a5f]/60">
                Psicólogo Clínico
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-[#1e3a5f]/70 hover:text-[#1e3a5f] transition-colors duration-300 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#c9a962] after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contato"
              className="px-6 py-2.5 text-sm font-medium rounded-full bg-[#1e3a5f] text-[#faf8f5] transition-all duration-300 hover:bg-[#c9a962] hover:text-[#1e3a5f] hover:scale-105 hover:shadow-lg"
            >
              Agendar
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-[#1e3a5f] transition-transform duration-300 hover:scale-110"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-[#faf8f5] shadow-lg border-t border-[#1e3a5f]/10">
            <div className="flex flex-col gap-4 p-6">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-[#1e3a5f]/70 hover:text-[#1e3a5f] transition-colors duration-300"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contato"
                onClick={() => setIsMobileMenuOpen(false)}
                className="inline-flex items-center justify-center px-6 py-3 bg-[#1e3a5f] text-[#faf8f5] font-medium rounded-full transition-all duration-300 hover:bg-[#c9a962] hover:text-[#1e3a5f] hover:scale-105"
              >
                Agendar Sessão
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
