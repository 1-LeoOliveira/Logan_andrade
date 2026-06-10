import { MessageCircle, Target, History, Lightbulb } from "lucide-react";

const steps = [
  {
    icon: MessageCircle,
    title: "Conhecendo Você",
    description: "Exploramos sua história de vida, contexto familiar e experiências que moldaram quem você é hoje."
  },
  {
    icon: Target,
    title: "Identificando a Queixa",
    description: "Entendemos juntos o que te trouxe à terapia e como esses desafios impactam sua vida."
  },
  {
    icon: History,
    title: "Explorando Padrões",
    description: "Buscamos identificar crenças, padrões de comportamento e possíveis insatisfações."
  },
  {
    icon: Lightbulb,
    title: "Definindo Objetivos",
    description: "Estabelecemos metas claras para o tratamento, alinhadas aos seus valores e expectativas."
  }
];

export default function FirstSessionSection() {
  return (
    <section id="primeira-sessao" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <span className="text-[#c9a962] text-sm font-medium tracking-widest uppercase">
              Primeira Sessão
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-[#1e3a5f] mt-4 font-semibold">
              Como Funciona
            </h2>
            <div className="w-16 h-px bg-[#c9a962] mx-auto mt-6" />
            <p className="text-[#1e3a5f]/70 mt-8 max-w-2xl mx-auto">
              A primeira sessão é um momento de acolhimento e conhecimento mútuo. 
              Sem pressão, sem julgamentos — apenas o início de uma jornada de autoconhecimento.
            </p>
          </div>
          
          {/* Steps */}
          <div className="relative">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {steps.map((step, index) => (
                <div key={index} className="relative text-center">
                  <div className="relative z-10 w-20 h-20 bg-[#faf8f5] border-2 border-[#1e3a5f]/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:border-[#c9a962] transition-colors">
                    <step.icon className="w-8 h-8 text-[#1e3a5f]" />
                    <span className="absolute -top-2 -right-2 w-8 h-8 bg-[#c9a962] rounded-full flex items-center justify-center text-white font-medium text-sm">
                      {index + 1}
                    </span>
                  </div>
                  <h3 className="font-serif text-xl text-[#1e3a5f] mb-3">{step.title}</h3>
                  <p className="text-[#1e3a5f]/70 text-sm leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Info cards */}
          <div className="mt-20 grid md:grid-cols-3 gap-6">
            <div className="p-8 bg-[#faf8f5] rounded-sm text-center">
              <p className="text-[#c9a962] text-sm font-medium tracking-wider uppercase mb-2">Público</p>
              <p className="font-serif text-2xl text-[#1e3a5f]">Adultos (18+)</p>
              <p className="text-[#1e3a5f]/60 text-sm mt-2">Jovens adultos, adultos e idosos</p>
            </div>
            <div className="p-8 bg-[#faf8f5] rounded-sm text-center">
              <p className="text-[#c9a962] text-sm font-medium tracking-wider uppercase mb-2">Modalidade</p>
              <p className="font-serif text-2xl text-[#1e3a5f]">100% Online</p>
              <p className="text-[#1e3a5f]/60 text-sm mt-2">Sessões por videochamada</p>
            </div>
            <div className="p-8 bg-[#faf8f5] rounded-sm text-center">
              <p className="text-[#c9a962] text-sm font-medium tracking-wider uppercase mb-2">Atendimento</p>
              <p className="font-serif text-2xl text-[#1e3a5f]">Particular</p>
              <p className="text-[#1e3a5f]/60 text-sm mt-2">Investimento no seu bem-estar</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
