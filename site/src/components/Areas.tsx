import Section from "./Section";
import { MapPinned } from "lucide-react";
import { site } from "../config/site";

export default function Areas() {
  if (!site.areas.length) return null;
  const cfg = site.secoes.areas;
  return (
    <Section id="areas" className="bg-primary text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-grain opacity-10 pointer-events-none" aria-hidden />
      <div className="text-center mb-12 relative z-10">
        <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-accent-light mb-3">
          Cobertura
        </span>
        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-4 tracking-tightish text-balance">
          {cfg.titulo}
        </h2>
        {cfg.subtitulo && (
          <p className="text-white/70 max-w-2xl mx-auto text-base md:text-lg">
            {cfg.subtitulo}
          </p>
        )}
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-5xl mx-auto relative z-10">
        {site.areas.map((a, i) => (
          <div
            key={i}
            className="bg-primary-light/40 backdrop-blur-sm rounded-2xl p-5 border border-white/10 hover:border-accent/60 hover:-translate-y-0.5 transition-all"
          >
            <MapPinned className="text-accent mb-2.5" size={22} />
            <h4 className="font-display font-bold text-white text-base leading-tight">
              {a.nome}
            </h4>
            {a.descricao && (
              <p className="text-white/60 text-xs mt-1.5 leading-relaxed">
                {a.descricao}
              </p>
            )}
          </div>
        ))}
      </div>
    </Section>
  );
}
