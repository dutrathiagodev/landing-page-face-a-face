// Prefixa os arquivos de /public com o caminho base do site (GitHub Pages).
export function asset(path: string) {
  return `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${path}`;
}
