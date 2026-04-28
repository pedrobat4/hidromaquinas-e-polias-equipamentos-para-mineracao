export function img(local: string | undefined, fallbackQuery: string, w = 1200): string {
  if (local && local.trim().length > 0) return local;
  const seed = encodeURIComponent(fallbackQuery || "placeholder");
  const h = Math.round(w * 0.66);
  return `https://picsum.photos/seed/${seed}/${w}/${h}`;
}
