export default function AboutSection() {
  return (
    <section id="sobre" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <span className="text-[#c9a962] text-sm font-medium tracking-widest uppercase">
              Sobre Mim
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-[#1e3a5f] mt-4 font-semibold">
              Logan Andrade
            </h2>
            <div className="w-16 h-px bg-[#c9a962] mx-auto mt-6" />
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Photo */}
            <div className="relative">
              <div className="absolute -inset-3 border border-[#c9a962]/30 rounded-sm" />
              <img 
                src="/foto1.jpeg"
                alt="Logan Andrade"
                className="relative w-full rounded-sm"
              />
            </div>
            
            {/* Content */}
            <div className="space-y-6">
              <p className="text-[#1e3a5f]/80 leading-relaxed">
                Sou psicólogo clínico com formação em <strong className="text-[#1e3a5f]">Terapia Cognitivo-Comportamental</strong> e 
                especialização em transtornos de ansiedade, TOC e TDAH.
              </p>
              
              <p className="text-[#1e3a5f]/80 leading-relaxed">
                Minha abordagem é baseada na <strong className="text-[#1e3a5f]">psicoeducação</strong>: acredito que 
                quando você compreende seus próprios padrões de comportamento e crenças, ganha habilidades 
                para sustentar as mudanças mesmo após o término do tratamento.
              </p>
              
              <p className="text-[#1e3a5f]/80 leading-relaxed">
                A terapia é um espaço de acolhimento, livre de julgamentos, onde trabalhamos juntos 
                para que você desenvolva maior consciência sobre si mesmo e capacidade de fazer 
                escolhas alinhadas aos seus valores.
              </p>
              
              <div className="pt-4 border-t border-[#1e3a5f]/10">
                <div className="flex items-center gap-8">
                  <div>
                    <span className="text-sm text-[#1e3a5f]/60">CRP</span>
                    <p className="font-serif text-xl text-[#1e3a5f]">04/74564</p>
                  </div>
                  <div>
                    <span className="text-sm text-[#1e3a5f]/60">Abordagem</span>
                    <p className="font-serif text-xl text-[#1e3a5f]">TCC</p>
                  </div>
                  <div>
                    <span className="text-sm text-[#1e3a5f]/60">Atendimento</span>
                    <p className="font-serif text-xl text-[#1e3a5f]">Online</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
