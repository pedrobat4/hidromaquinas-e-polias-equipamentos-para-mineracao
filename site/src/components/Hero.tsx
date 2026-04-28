import { motion } from "framer-motion";
import { ArrowRight, ArrowDown } from "lucide-react";
import { site } from "../config/site";
import { whatsappLink } from "../lib/whatsapp";
import { img } from "../lib/image";

export default function Hero() {
  return (
    <section
      className="relative w-full min-h-screen h-[100dvh] flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${img(site.hero.imagemBg, site.empresa.nome)})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* layered overlays — depth + readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/85 via-primary/65 to-primary-dark/95" />
      <div className="absolute inset-0 bg-grain opacity-40 mix-blend-overlay pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white via-white/0 to-transparent z-[1] pointer-events-none" />

      <motion.div
        initial="hidden"
        animate="show"
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
        }}
        className="relative z-10 max-w-3xl mx-auto text-center px-4 md:px-6"
      >
        {site.hero.badges.length > 0 && (
          <motion.div
            variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-wrap justify-center gap-2 mb-6"
          >
            {site.hero.badges.map((b, i) => (
              <span
                key={i}
                className="bg-white/10 backdrop-blur-md text-white text-xs md:text-sm font-medium px-4 py-1.5 rounded-full border border-white/25"
              >
                {b}
              </span>
            ))}
          </motion.div>
        )}

        <motion.h1
          variants={{ hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0 } }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.05] tracking-tightish mb-5 text-balance"
        >
          {site.hero.titulo}
        </motion.h1>

        <motion.p
          variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-base md:text-lg text-white/85 mb-8 max-w-xl mx-auto leading-relaxed"
        >
          {site.hero.subtitulo}
        </motion.p>

        <motion.div
          variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex items-center justify-center"
        >
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener"
            className="group inline-flex items-center gap-2 bg-accent text-primary font-semibold px-8 py-4 rounded-full text-base md:text-lg hover:bg-accent-light hover:shadow-2xl transition-all shadow-xl"
          >
            {site.hero.ctaTexto}
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </motion.div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10">
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={24} className="text-white/50" />
        </motion.div>
      </div>
    </section>
  );
}
