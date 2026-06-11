import { Video, MapPin, MessageCircle } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contato" className="py-24 bg-[#1e3a5f] relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#c9a962]/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Section header */}
          <span className="text-[#c9a962] text-sm font-medium tracking-widest uppercase">
            Entre em Contato
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-white mt-4 mb-6 font-semibold">
            Dê o Primeiro Passo
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto mb-12">
            Agende sua primeira sessão e comece sua jornada de autoconhecimento 
            e transformação. Estou aqui para te acompanhar nesse processo.
          </p>
          
          {/* Contact methods */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="p-8 bg-white/5 border border-white/10 rounded-sm group hover:bg-white/10 transition-colors">
              <Video className="w-10 h-10 text-[#c9a962] mx-auto mb-4" />
              <h3 className="font-serif text-xl text-white mb-2">Terapia Online</h3>
              <p className="text-white/60 text-sm mb-4">
                Sessões de terapia por videochamada, de qualquer lugar do Brasil
              </p>
              <a
                href="https://wa.me/5531994568337"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#c9a962] transition-all duration-300 hover:text-white hover:translate-x-1"
              >
                <MessageCircle className="w-4 h-4" />
                Agendar via WhatsApp
              </a>
            </div>
            
            <div className="p-8 bg-white/5 border border-white/10 rounded-sm group hover:bg-white/10 transition-colors">
              <MapPin className="w-10 h-10 text-[#c9a962] mx-auto mb-4" />
              <h3 className="font-serif text-xl text-white mb-2">Reabilitação Cognitiva</h3>
              <p className="text-white/60 text-sm mb-4">
                Atendimento a domicílio exclusivo para Belo Horizonte
              </p>
              <a
                href="https://wa.me/5531994568337"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#c9a962] transition-all duration-300 hover:text-white hover:translate-x-1"
              >
                <MessageCircle className="w-4 h-4" />
                Solicitar informações
              </a>
            </div>
          </div>
          
          {/* CTA Button */}
          <a 
            href="https://wa.me/5531994568337" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 px-12 py-5 bg-[#c9a962] text-[#1e3a5f] font-semibold text-lg rounded-full transition-all duration-300 hover:bg-white hover:scale-105 hover:shadow-xl shadow-lg shadow-[#c9a962]/20"
          >
            <MessageCircle className="w-5 h-5" />
            Agendar Primeira Sessão
          </a>
          
          <p className="text-white/60 text-base mt-6">
            (31) 99456-8337
          </p>
          
          <p className="text-white/40 text-sm mt-2">
            Resposta em até 24 horas úteis
          </p>
        </div>
      </div>
    </section>
  );
}
