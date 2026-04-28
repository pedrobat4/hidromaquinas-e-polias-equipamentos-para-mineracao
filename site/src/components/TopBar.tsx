import { Phone, Clock } from "lucide-react";
import { site } from "../config/site";

export default function TopBar() {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 hidden md:block bg-primary-dark text-white/80 text-xs h-[var(--topbar-h)]">
      <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
        <div className="flex items-center gap-5">
          <span className="flex items-center gap-1.5">
            <Phone size={12} /> {site.contato.telefone}
          </span>
          <span className="flex items-center gap-1.5">
            <Clock size={12} /> {site.contato.horario}
          </span>
        </div>
        <div className="flex items-center gap-4">
          {site.social.instagram && (
            <a href={site.social.instagram} target="_blank" rel="noopener" className="hover:text-accent-light transition">
              Instagram
            </a>
          )}
          {site.social.facebook && (
            <a href={site.social.facebook} target="_blank" rel="noopener" className="hover:text-accent-light transition">
              Facebook
            </a>
          )}
          {site.social.youtube && (
            <a href={site.social.youtube} target="_blank" rel="noopener" className="hover:text-accent-light transition">
              YouTube
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
