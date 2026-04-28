import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { site } from "../config/site";
import { whatsappLink } from "../lib/whatsapp";
import TopBar from "./TopBar";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <TopBar />
      <header
        className={`fixed left-0 right-0 z-40 transition-all duration-300 top-0 md:top-[var(--topbar-h)] ${
          scrolled ? "bg-primary shadow-lg" : "bg-primary/85 backdrop-blur-md"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6 h-[var(--header-h)] flex items-center justify-between gap-6">
          <a href="#" className="flex items-center gap-3 shrink-0">
            {site.empresa.logo ? (
              <img src={site.empresa.logo} alt={site.empresa.nome} className="h-10 w-auto" />
            ) : (
              <span className="font-display font-bold text-xl text-white tracking-tightish">
                {site.empresa.nome}
              </span>
            )}
          </a>
          <nav className="hidden md:flex items-center gap-8">
            {site.nav.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm font-medium text-white/85 hover:text-accent-light transition-colors"
              >
                {l.label}
              </a>
            ))}
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener"
              className="bg-accent text-primary font-semibold px-5 py-2.5 rounded-full text-sm hover:bg-accent-light transition-colors"
            >
              Fale conosco
            </a>
          </nav>
          <button
            className="md:hidden text-white"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        {open && (
          <div className="md:hidden bg-primary-light border-t border-white/10">
            <nav className="flex flex-col p-4 gap-4">
              {site.nav.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-sm font-medium text-white/90 hover:text-accent-light"
                >
                  {l.label}
                </a>
              ))}
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener"
                className="bg-accent text-primary font-semibold px-4 py-3 rounded-full text-sm text-center"
              >
                Fale conosco
              </a>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
