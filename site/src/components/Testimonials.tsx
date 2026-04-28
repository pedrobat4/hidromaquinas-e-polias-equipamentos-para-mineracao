import Section from "./Section";
import { site } from "../config/site";
import { Quote, Star } from "lucide-react";

function Stars({ n }: { n: number }) {
  const total = Math.max(0, Math.min(5, Math.round(n)));
  return (
    <div className="flex gap-0.5 mb-3" aria-label={`${total} de 5 estrelas`}>
      {[1, 2, 3, 4, 5].map((i) => (
        <Star
          key={i}
          size={16}
          className={i <= total ? "fill-accent text-accent" : "text-white/20"}
        />
      ))}
    </div>
  );
}

export default function Testimonials() {
  if (!site.depoimentos.length) return null;
  const cfg = site.secoes.depoimentos;
  return (
    <Section id="depoimentos" className="bg-primary text-white relative overflow-hidden">
      <div
        className="absolute inset-0 bg-grain opacity-10 pointer-events-none"
        aria-hidden
      />
      <div className="text-center mb-14 relative z-10">
        <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-accent-light mb-3">
          Depoimentos
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 relative z-10">
        {site.depoimentos.map((d, i) => (
          <article
            key={i}
            className="bg-primary-light/40 rounded-3xl p-7 md:p-8 backdrop-blur-sm border border-white/10 hover:border-accent/40 transition-colors flex flex-col"
          >
            <Quote className="text-accent mb-4" size={32} />
            {typeof d.estrelas === "number" && <Stars n={d.estrelas} />}
            <p className="text-white/90 leading-relaxed mb-7 italic flex-1 text-[15px]">
              "{d.texto}"
            </p>
            <div className="flex items-center gap-3 pt-4 border-t border-white/10">
              {d.foto ? (
                <img
                  src={d.foto}
                  alt={d.nome}
                  className="w-12 h-12 rounded-full object-cover ring-2 ring-accent/30"
                />
              ) : (
                <div className="w-12 h-12 rounded-full bg-accent/20 text-accent font-display font-bold flex items-center justify-center">
                  {d.nome.charAt(0)}
                </div>
              )}
              <div>
                <div className="font-semibold leading-tight">{d.nome}</div>
                {d.cargo && (
                  <div className="text-white/60 text-xs mt-0.5">{d.cargo}</div>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
