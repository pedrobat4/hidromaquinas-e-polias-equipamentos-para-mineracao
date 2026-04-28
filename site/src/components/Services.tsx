import Section from "./Section";
import { site } from "../config/site";
import { getIcon } from "../lib/icons";
import { whatsappLink } from "../lib/whatsapp";
import { ArrowUpRight } from "lucide-react";

export default function Services() {
  if (!site.servicos.length) return null;
  const cfg = site.secoes.servicos;
  return (
    <Section id="servicos" className="bg-gray-50">
      <div className="text-center mb-14 md:mb-20">
        <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-accent-dark mb-3">
          O que fazemos
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {site.servicos.map((servico, i) => {
          const Icon = getIcon(servico.icone);
          return (
            <article
              key={i}
              className="group relative bg-white rounded-3xl shadow-soft hover:shadow-ring transition-all duration-300 hover:-translate-y-1 p-7 md:p-8 flex flex-col border border-gray-100"
            >
              {servico.imagem && (
                <div className="overflow-hidden rounded-2xl mb-6 -mx-1">
                  <img
                    src={servico.imagem}
                    alt={servico.titulo}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
              )}
              <div className="w-14 h-14 bg-accent/10 text-accent-dark rounded-2xl flex items-center justify-center mb-5 group-hover:bg-accent group-hover:text-primary transition-colors">
                <Icon size={26} />
              </div>
              <h3 className="font-display text-2xl font-bold text-primary mb-3 tracking-tightish leading-tight">
                {servico.titulo}
              </h3>
              <p className="text-secondary leading-relaxed flex-1 text-[15px]">
                {servico.descricao}
              </p>
              <a
                href={whatsappLink(`Olá! Tenho interesse no serviço: ${servico.titulo}`)}
                target="_blank"
                rel="noopener"
                className="mt-7 text-accent-dark font-semibold text-sm inline-flex items-center gap-1.5 group/cta"
              >
                Saiba mais
                <ArrowUpRight size={16} className="group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-0.5 transition-transform" />
              </a>
            </article>
          );
        })}
      </div>
    </Section>
  );
}
