export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center bg-[#faf8f5] pt-20">
      <div className="container mx-auto px-6 py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="order-2 lg:order-1">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#1e3a5f] font-semibold mb-4">
              Psicólogo Clínico
            </h1>
            <p className="text-[#c9a962] text-lg tracking-wider mb-6">CRP 04/74564</p>
            
            <p className="text-lg md:text-xl text-[#1e3a5f]/70 font-light leading-relaxed mb-8">
              Terapia Cognitivo-Comportamental para ajudar você a compreender seus padrões, 
              superar desafios e construir uma vida com mais autonomia e bem-estar.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#contato"
                className="inline-flex items-center justify-center px-8 py-4 bg-[#c9a962] text-[#1e3a5f] font-medium rounded-full transition-all duration-300 hover:bg-[#1e3a5f] hover:text-white hover:scale-105 hover:shadow-lg"
              >
                Agendar Sessão
              </a>
              <a 
                href="#sobre"
                className="inline-flex items-center justify-center px-8 py-4 border border-[#1e3a5f]/30 text-[#1e3a5f] font-medium rounded-full transition-all duration-300 hover:bg-[#1e3a5f] hover:text-white hover:border-[#1e3a5f] hover:scale-105 hover:shadow-lg"
              >
                Saiba Mais
              </a>
            </div>
          </div>
          
          {/* Photo */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative">
              <img 
                src="/foto2.jpeg"
                alt="Logan Andrade - Psicólogo Clínico"
                className="w-full max-w-md lg:max-w-lg rounded-2xl shadow-xl object-cover"
              />
              {/* Decorative element */}
              <div className="absolute -bottom-4 -left-4 w-full h-full border-2 border-[#c9a962] rounded-2xl -z-10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
