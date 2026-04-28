import { site } from "../config/site";
import { whatsappLink } from "../lib/whatsapp";
import { MessageCircle } from "lucide-react";

const InstagramIcon = (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);
const FacebookIcon = (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);
const YoutubeIcon = (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
  </svg>
);

export default function Footer() {
  return (
    <footer className="bg-primary-dark text-white/70 pt-16 pb-10 px-4 md:px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12">
        <div className="lg:col-span-5">
          {site.empresa.logo ? (
            <img
              src={site.empresa.logo}
              alt={site.empresa.nome}
              className="h-10 w-auto mb-4 brightness-0 invert"
            />
          ) : (
            <h3 className="font-display font-bold text-white text-2xl mb-3 tracking-tightish">
              {site.empresa.nome}
            </h3>
          )}
          <p className="text-sm leading-relaxed max-w-sm">{site.empresa.descricao}</p>
          <div className="flex items-center gap-3 mt-6">
            {site.social.instagram && (
              <a
                href={site.social.instagram}
                target="_blank"
                rel="noopener"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-accent hover:text-primary text-white flex items-center justify-center transition-colors"
              >
                {InstagramIcon}
              </a>
            )}
            {site.social.facebook && (
              <a
                href={site.social.facebook}
                target="_blank"
                rel="noopener"
                aria-label="Facebook"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-accent hover:text-primary text-white flex items-center justify-center transition-colors"
              >
                {FacebookIcon}
              </a>
            )}
            {site.social.youtube && (
              <a
                href={site.social.youtube}
                target="_blank"
                rel="noopener"
                aria-label="YouTube"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-accent hover:text-primary text-white flex items-center justify-center transition-colors"
              >
                {YoutubeIcon}
              </a>
            )}
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener"
              aria-label="WhatsApp"
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-accent hover:text-primary text-white flex items-center justify-center transition-colors"
            >
              <MessageCircle size={18} />
            </a>
          </div>
        </div>

        <div className="lg:col-span-3">
          <h4 className="font-display font-bold text-white mb-4 text-base tracking-tightish">
            Contato
          </h4>
          <div className="space-y-2 text-sm">
            <p>{site.contato.telefone}</p>
            <p className="break-all">{site.contato.email}</p>
            {site.contato.endereco && <p className="leading-relaxed">{site.contato.endereco}</p>}
            {site.contato.horario && <p className="text-white/50">{site.contato.horario}</p>}
          </div>
        </div>

        <div className="lg:col-span-4">
          <h4 className="font-display font-bold text-white mb-4 text-base tracking-tightish">
            Navegação
          </h4>
          <nav className="flex flex-col gap-2 text-sm">
            {site.nav.map((l) => (
              <a key={l.href} href={l.href} className="hover:text-accent-light transition w-fit">
                {l.label}
              </a>
            ))}
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-8 mt-12 border-t border-white/10 text-center text-xs text-white/50">
        © {new Date().getFullYear()} {site.empresa.nome}. Todos os direitos reservados.
      </div>
    </footer>
  );
}
