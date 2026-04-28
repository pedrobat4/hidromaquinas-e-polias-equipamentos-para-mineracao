import Section from "./Section";
import { site } from "../config/site";
import { getIcon } from "../lib/icons";

export default function Processo() {
  if (!site.processo.length) return null;
  const cfg = site.secoes.processo;
  return (
    <Section id="processo">
      <div className="text-center mb-14 md:mb-20">
        <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-accent-dark mb-3">
          Etapas
        </span>
        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-4 tracking-tightish text-balance">
          {cfg.titulo}
        </h2>
        {cfg.subtitulo && (
          <p className="text-secondary max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
            {cfg.subtitulo}
          </p>
        )}
      </div>
      <div className="relative">
        {/* connector line on desktop */}
        <div
          className="hidden lg:block absolute top-14 left-12 right-12 h-px border-t-2 border-dashed border-gray-200 z-0"
          aria-hidden
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 relative z-10">
          {site.processo.map((p, i) => {
            const Icon = p.icone ? getIcon(p.icone) : null;
            return (
              <div
                key={i}
                className="bg-white rounded-3xl p-7 md:p-8 shadow-soft hover:shadow-ring transition h-full border border-gray-100"
              >
                <div className="flex items-start gap-3 mb-5">
                  <span className="font-display text-4xl font-bold text-accent leading-none">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {Icon && (
                    <div className="ml-auto w-11 h-11 rounded-xl bg-primary/5 text-primary flex items-center justify-center">
                      <Icon size={20} />
                    </div>
                  )}
                </div>
                <h3 className="font-display text-xl font-bold text-primary mb-2 tracking-tightish leading-tight">
                  {p.titulo}
                </h3>
                <p className="text-secondary leading-relaxed text-sm">{p.descricao}</p>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
