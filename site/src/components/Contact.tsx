import { useState } from "react";
import type { FormEvent, ReactNode } from "react";
import Section from "./Section";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { site } from "../config/site";
import { whatsappLink } from "../lib/whatsapp";

function InfoItem({ icon, label, value }: { icon: ReactNode; label: string; value: string }) {
  return (
    <div className="flex gap-4 items-start">
      <div className="w-12 h-12 rounded-xl bg-accent/10 text-accent-dark flex items-center justify-center flex-shrink-0">
        {icon}
      </div>
      <div className="min-w-0">
        <h4 className="font-display font-bold text-primary leading-tight mb-0.5">{label}</h4>
        <p className="text-secondary break-words">{value}</p>
      </div>
    </div>
  );
}

export default function Contact() {
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [mensagem, setMensagem] = useState("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const linhas = [
      `Olá, meu nome é ${nome}.`,
      site.contato.formularioCampoTelefone && telefone ? `Telefone: ${telefone}` : null,
      mensagem,
    ].filter(Boolean);
    window.open(whatsappLink(linhas.join("\n")), "_blank");
  }

  const showForm = site.contato.mostrarFormulario !== false;
  const showPhoneField = site.contato.formularioCampoTelefone !== false;

  return (
    <Section id="contato" className="bg-gray-50">
      <div className="text-center mb-14">
        <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-accent-dark mb-3">
          Contato
        </span>
        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-4 tracking-tightish text-balance">
          {site.cta_final.titulo}
        </h2>
        <p className="text-secondary max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
          {site.cta_final.texto}
        </p>
      </div>

      <div className={`grid grid-cols-1 ${showForm ? "lg:grid-cols-5" : "max-w-2xl mx-auto"} gap-10 lg:gap-12`}>
        <div className={`space-y-6 ${showForm ? "lg:col-span-2 lg:pt-2" : ""}`}>
          <InfoItem icon={<Phone size={22} />} label="Telefone" value={site.contato.telefone} />
          <InfoItem icon={<Mail size={22} />} label="E-mail" value={site.contato.email} />
          {site.contato.endereco && (
            <InfoItem icon={<MapPin size={22} />} label="Endereço" value={site.contato.endereco} />
          )}
          {site.contato.horario && (
            <InfoItem icon={<Clock size={22} />} label="Horário" value={site.contato.horario} />
          )}
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-2 mt-2 text-accent-dark font-semibold hover:gap-3 transition-all"
          >
            Prefere WhatsApp? Clique aqui →
          </a>
        </div>

        {showForm && (
          <form
            onSubmit={handleSubmit}
            className="lg:col-span-3 bg-white rounded-3xl shadow-ring p-7 md:p-10 space-y-5 border border-gray-100"
          >
            <div>
              <label className="block text-sm font-semibold text-primary mb-2">Nome</label>
              <input
                required
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                className="w-full px-4 py-3.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-accent/40 focus:border-accent outline-none transition placeholder:text-gray-400"
                placeholder="Seu nome completo"
              />
            </div>
            {showPhoneField && (
              <div>
                <label className="block text-sm font-semibold text-primary mb-2">Telefone</label>
                <input
                  type="tel"
                  inputMode="tel"
                  value={telefone}
                  onChange={(e) => setTelefone(e.target.value)}
                  className="w-full px-4 py-3.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-accent/40 focus:border-accent outline-none transition placeholder:text-gray-400"
                  placeholder="(00) 00000-0000"
                />
              </div>
            )}
            <div>
              <label className="block text-sm font-semibold text-primary mb-2">Mensagem</label>
              <textarea
                required
                value={mensagem}
                onChange={(e) => setMensagem(e.target.value)}
                rows={4}
                className="w-full px-4 py-3.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-accent/40 focus:border-accent outline-none transition resize-none placeholder:text-gray-400"
                placeholder="Como podemos te ajudar?"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-accent text-primary font-semibold py-4 rounded-xl hover:bg-accent-light transition flex items-center justify-center gap-2 shadow-soft"
            >
              <Send size={18} /> {site.cta_final.botao}
            </button>
            <p className="text-xs text-secondary text-center pt-1">
              Ao enviar, você será redirecionado para o WhatsApp.
            </p>
          </form>
        )}
      </div>

      {site.contato.mapaEmbed && (
        <div className="mt-14 md:mt-20">
          <div className="text-center mb-6">
            <span className="inline-flex items-center gap-2 text-secondary text-sm">
              <MapPin size={16} className="text-accent-dark" />
              {site.contato.endereco}
            </span>
          </div>
          <div className="rounded-3xl overflow-hidden shadow-ring h-80 md:h-96 border border-gray-100">
            <iframe
              src={site.contato.mapaEmbed}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização"
            />
          </div>
        </div>
      )}
    </Section>
  );
}
