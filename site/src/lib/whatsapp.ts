import { site } from "../config/site";

export function whatsappLink(mensagem?: string): string {
  const texto = mensagem ?? `Olá! Tenho interesse em saber mais sobre ${site.empresa.nome}.`;
  return `https://wa.me/${site.contato.whatsapp}?text=${encodeURIComponent(texto)}`;
}
