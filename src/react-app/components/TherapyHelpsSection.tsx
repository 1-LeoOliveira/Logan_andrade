import { Check, ArrowRight } from "lucide-react";

const benefits = [
  "Maior consciência sobre seus padrões de comportamento",
  "Capacidade de identificar e questionar crenças disfuncionais",
  "Habilidades para enfrentar situações desafiadoras",
  "Maior autonomia nas tomadas de decisão",
  "Elaboração emocional de experiências difíceis",
  "Técnicas que você leva para a vida toda"
];

export default function TherapyHelpsSection() {
  return (
    <section id="terapia" className="py-24 bg-[#faf8f5]">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <div>
              <span className="text-[#c9a962] text-sm font-medium tracking-widest uppercase">
                A Terapia
              </span>
              <h2 className="font-serif text-4xl md:text-5xl text-[#1e3a5f] mt-4 mb-8 font-semibold">
                Como a Terapia Pode Transformar Sua Vida
              </h2>
              
              <p className="text-[#1e3a5f]/80 leading-relaxed mb-8">
                A terapia tem a função de instrumentalizar você com técnicas de identificação 
                e avaliação do próprio comportamento, buscando fomentar escolhas alinhadas aos 
                seus princípios e valores.
              </p>
              
              <p className="text-[#1e3a5f]/80 leading-relaxed mb-8">
                O ganho de consciência sobre seu comportamento, sobre as influências do contexto 
                e das pessoas, permite maior capacidade de tomada de decisão e favorece a 
                elaboração emocional de situações desafiadoras.
              </p>
              
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-[#1e3a5f] rounded-full flex items-center justify-center mt-0.5">
                      <Check className="w-4 h-4 text-white" />
                    </span>
                    <span className="text-[#1e3a5f]/80">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Highlight box */}
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-[#1e3a5f]/10 to-[#c9a962]/10 rounded-sm blur-xl" />
              <div className="relative bg-white p-10 rounded-sm shadow-lg">
                <div className="w-16 h-16 bg-[#1e3a5f] rounded-full flex items-center justify-center mb-8">
                  <span className="font-serif text-3xl text-[#c9a962]">"</span>
                </div>
                
                <p className="font-serif text-2xl text-[#1e3a5f] leading-relaxed mb-8">
                  A terapia é um espaço de acolhimento e busca por melhorias, 
                  livre de julgamentos, baseado na parceria terapêutica e no sigilo.
                </p>
                
                <div className="pt-6 border-t border-[#1e3a5f]/10">
                  <p className="text-[#1e3a5f] font-medium">Logan Andrade</p>
                  <p className="text-[#1e3a5f]/60 text-sm">Psicólogo Clínico</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Barriers to therapy */}
          <div className="mt-24">
            <div className="text-center mb-12">
              <h3 className="font-serif text-3xl text-[#1e3a5f] mb-4">
                O Que Pode Estar Te Impedindo?
              </h3>
              <p className="text-[#1e3a5f]/70 max-w-2xl mx-auto">
                Muitas pessoas deixam de buscar ajuda por receios comuns. Você não está sozinho.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { barrier: "Não sei se terapia funciona", response: "A TCC é baseada em evidências científicas" },
                { barrier: "Tenho medo de ser julgado", response: "A terapia é um espaço de escuta livre de juízos de valor" },
                { barrier: "Não consigo enfrentar meus problemas", response: "Vamos no seu ritmo, com acolhimento" },
                { barrier: "Acho que deveria resolver sozinho", response: "Buscar ajuda é um ato de coragem" }
              ].map((item, index) => (
                <div key={index} className="p-6 bg-white rounded-sm border border-[#1e3a5f]/10">
                  <p className="text-[#1e3a5f]/60 text-sm mb-3 line-through">{item.barrier}</p>
                  <ArrowRight className="w-4 h-4 text-[#c9a962] mb-3" />
                  <p className="text-[#1e3a5f] font-medium">{item.response}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
