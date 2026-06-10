import { Brain, Heart, Focus, Users, RefreshCw, Shield } from "lucide-react";

const expertiseAreas = [
  {
    icon: Brain,
    title: "TOC",
    description: "Transtorno Obsessivo-Compulsivo, pensamentos intrusivos e rituais compulsivos"
  },
  {
    icon: Heart,
    title: "Ansiedade e Depressão",
    description: "Transtornos de ansiedade, pensamento acelerado, tristeza e perda de sentido"
  },
  {
    icon: Focus,
    title: "TDAH",
    description: "Desatenção, desorganização, procrastinação e dificuldade de foco"
  },
  {
    icon: Shield,
    title: "Fobias",
    description: "Medos específicos que limitam sua vida e causam sofrimento"
  },
  {
    icon: Users,
    title: "Autoestima e Relacionamentos",
    description: "Insegurança, baixa autoestima e dificuldades nos relacionamentos"
  },
  {
    icon: RefreshCw,
    title: "Reabilitação Cognitiva",
    description: "Transtornos neurocognitivos e perda de autonomia (atendimento domiciliar em BH)"
  }
];

export default function ExpertiseSection() {
  return (
    <section id="especialidades" className="py-24 bg-[#1e3a5f]">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <span className="text-[#c9a962] text-sm font-medium tracking-widest uppercase">
              Áreas de Atuação
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-white mt-4 font-semibold">
              Como Posso Ajudar
            </h2>
          </div>
          
          {/* Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {expertiseAreas.map((area, index) => (
              <div 
                key={index}
                className="group p-8 bg-white border border-[#1e3a5f]/10 rounded-sm hover:shadow-lg transition-all duration-300 text-center"
              >
                <area.icon className="w-10 h-10 text-[#c9a962] mb-6 mx-auto group-hover:scale-110 transition-transform" />
                <h3 className="font-serif text-2xl text-[#1e3a5f] mb-3">{area.title}</h3>
                <p className="text-[#1e3a5f]/70 leading-relaxed">{area.description}</p>
              </div>
            ))}
          </div>
          
          {/* Common concerns */}
          <div className="mt-16 p-8 bg-white/5 border border-white/10 rounded-sm">
            <h3 className="font-serif text-2xl text-white mb-6 text-center">
              Você se identifica com algum desses sentimentos?
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                "Pensamentos que não param",
                "Sensação de incapacidade",
                "Medo de ser julgado",
                "Angústia constante",
                "Dificuldade de concentração",
                "Procrastinação",
                "Insegurança",
                "Perda de autonomia"
              ].map((concern, index) => (
                <span 
                  key={index}
                  className="px-4 py-2 bg-[#c9a962]/20 text-[#c9a962] text-sm rounded-full"
                >
                  {concern}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
