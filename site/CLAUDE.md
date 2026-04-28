# CLAUDE.md

Este é um template de landing page para clientes. Você está editando uma cópia dele para um cliente específico.

## REGRA DE OURO: NÃO REINVENTE

Este template **já funciona**. Seu trabalho é **preencher conteúdo**, não reescrever estrutura.

- **NÃO** reescreva componentes que já existem em `src/components/`.
- **NÃO** mude classes Tailwind de layout (grid, flex, responsividade) — já estão testadas.
- **NÃO** altere `src/App.tsx` exceto pra adicionar/remover seção quando o briefing pedir.
- **NÃO** instale dependências novas sem necessidade real.

## O QUE VOCÊ PODE E DEVE EDITAR

1. **`src/config/site.ts`** — TODO o conteúdo textual, URLs de imagem, telefone, cores. 90% do seu trabalho é aqui.
2. **`tailwind.config.js`** — paleta de cores (`primary`, `secondary`, `accent` + variantes `dark`/`light`) e fontes (`sans`, `display`). Se trocar fonte, atualize também `src/index.css` no import do Google Fonts.
3. **`public/images/`** — copie as imagens do cliente pra cá.
4. **`index.html`** — título e meta tags (nome da empresa, descrição).

## SEÇÕES DISPONÍVEIS

Todas as seções existem no template. As semi-fixas só renderizam se o array correspondente for não-vazio.

| Seção | Componente | Renderiza quando |
|---|---|---|
| Barra superior | `TopBar` | Sempre (hidden mobile) |
| Cabeçalho | `Header` | Sempre |
| Hero | `Hero` | Sempre |
| **Stats** | `Stats` | `site.stats.length > 0` |
| Serviços | `Services` | Sempre |
| **Processo** | `Processo` | `site.processo.length > 0` |
| Sobre | `About` | Sempre |
| **Galeria** | `Galeria` | `site.galeria.length > 0` |
| Depoimentos | `Testimonials` | `site.depoimentos.length > 0` |
| **Áreas** | `Areas` | `site.areas.length > 0` |
| **FAQ** | `FAQ` | `site.faq.length > 0` |
| Contato | `Contact` | Sempre |
| Rodapé | `Footer` | Sempre |

## CAMPOS EM site.ts

### Empresa & contato
- `empresa.logo` — caminho da logo (`"/images/logo.svg"`) ou `""` para usar nome em texto
- `empresa.descricao` — aparece no rodapé
- `contato.mapaEmbed` — src do iframe do Google Maps; `""` = não renderiza mapa
- `contato.mostrarFormulario` — `true`/`false`; `false` exibe apenas dados de contato
- `contato.formularioCampoTelefone` — `true`/`false`; controla campo telefone no form
- `social.youtube` — URL do canal (além de instagram e facebook)

### Navegação & seções
- `nav[]` — links do header e footer; `{ href: "#servicos", label: "Serviços" }`
- `secoes` — títulos editáveis de cada seção. Ex: `secoes.servicos.titulo`, `secoes.faq.subtitulo`
  - Chaves: `servicos`, `processo`, `galeria`, `depoimentos`, `areas`, `faq`

### Conteúdo dinâmico
- `hero.badges` — array de strings com diferenciais curtos exibidos no hero
- `stats[]` — objetos `{ valor, label }` ex: `{ valor: "10+", label: "Anos no mercado" }`
- `processo[]` — objetos `{ titulo, descricao, icone }` — passos do processo de atendimento
- `galeria[]` — objetos `{ src, alt, legenda? }` — fotos do trabalho/espaço (com lightbox)
- `areas[]` — objetos `{ nome, descricao? }` — cidades/regiões atendidas
- `faq[]` — objetos `{ pergunta, resposta }` — perguntas frequentes
- `depoimentos[].cargo` — cargo/função do autor (opcional)
- `depoimentos[].estrelas` — número 1-5; omitir = sem estrelas exibidas

## IMAGENS COM FALLBACK AUTOMÁTICO

O helper `img()` de `src/lib/image.ts` retorna a imagem local se existir, ou um placeholder via picsum.photos (seed determinístico pelo texto passado):

```ts
// Uso nos componentes (já feito). Não precisa chamar manualmente.
img("/images/hero.webp", "steel metal industry") // → local ou picsum
```

Se uma imagem não existir, o picsum será usado automaticamente. Sinalize no relatório.

## COMPONENTES CUSTOMIZADOS

Para seções específicas do cliente que não existem no template, crie em `src/components/custom/<Nome>.tsx` e importe no `App.tsx`. Não modifique os componentes existentes em `src/components/`.

## REGRAS DE COMUNICAÇÃO

- Seja direto. Não explique o que vai fazer antes de fazer — faça e reporte no fim.
- Não liste arquivos do projeto que eu já sei que existem.
- No fim, reporte em no máximo 5 linhas: o que mudou, se o build passou, próximo passo.
- Não gere código de exemplo no chat — edite o arquivo direto.

## FLUXO PADRÃO (siga exatamente esta ordem)

1. Leia `briefing.md` da pasta do cliente.
2. Leia `../_skills/criar-landing/SKILL.md` se ainda não leu nesta sessão.
3. Preencha `src/config/site.ts` com os dados do briefing.
4. Ajuste paleta em `tailwind.config.js` conforme briefing (ou mantenha default se não especificado).
5. Copie imagens de `../<cliente>/imagens/` pra `public/images/`.
6. Atualize `index.html` (title, meta description).
7. Rode `npm run build` pra validar.
8. Se build passou: commit + push. Se falhou: corrija antes de reportar.

## REGRAS TÉCNICAS CRÍTICAS (NUNCA VIOLE)

- Hero **sempre** usa `min-h-screen h-[100dvh]` — não mexa.
- Root wrapper **sempre** tem `overflow-x-hidden max-w-[100vw]` — não mexa.
- Botão WhatsApp **sempre** `fixed bottom-6 right-6 z-50` — não mexa.
- Formulários **nunca** enviam pra backend — sempre redirecionam pra WhatsApp via `https://wa.me/<numero>?text=<mensagem>`.
- Zero banco de dados. Zero API externa exceto WhatsApp.

## QUANDO TIVER DÚVIDA SOBRE CONTEÚDO

- Se o briefing não diz algo, **pergunte antes de inventar**.
- Nunca invente serviços, depoimentos, preços, endereços ou estatísticas que não estão no briefing.
- Se o cliente não forneceu imagem pra uma seção, `img()` usa Unsplash automaticamente — sinalize no relatório.

## DEPENDÊNCIAS DISPONÍVEIS

- `react`, `react-dom`, `typescript`, `vite`
- `tailwindcss` + plugins já configurados
- `framer-motion` — use só pra fade-in e slide-up leves
- `lucide-react` — ícones via whitelist em `src/lib/icons.ts`
- `clsx` — merge condicional de classes
