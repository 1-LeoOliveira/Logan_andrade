import { Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-12 bg-[#152a42]">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            {/* Logo and Social */}
            <div className="flex items-center gap-6">
              <img 
                src="/logo_investida.png"
                alt="Logan Andrade"
                className="w-32"
              />
              <a 
                href="https://www.instagram.com/psiloganandrade" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/60 hover:text-[#c9a962] transition-colors"
              >
                <Instagram className="w-5 h-5" />
                <span className="text-sm">@psiloganandrade</span>
              </a>
            </div>
            
            {/* Navigation */}
            <nav className="flex flex-wrap justify-center gap-6 text-sm">
              <a href="#sobre" className="text-white/60 hover:text-white transition-colors">
                Sobre
              </a>
              <a href="#especialidades" className="text-white/60 hover:text-white transition-colors">
                Especialidades
              </a>
              <a href="#terapia" className="text-white/60 hover:text-white transition-colors">
                A Terapia
              </a>
              <a href="#primeira-sessao" className="text-white/60 hover:text-white transition-colors">
                Primeira Sessão
              </a>
              <a href="#contato" className="text-white/60 hover:text-white transition-colors">
                Contato
              </a>
            </nav>
          </div>
          
          <div className="mt-10 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/40">
            <p>© {new Date().getFullYear()} Logan Andrade. Todos os direitos reservados.</p>
            <p>CRP 04/74564 | Psicólogo Clínico</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
