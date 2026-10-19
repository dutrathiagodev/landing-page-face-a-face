import type { NextConfig } from "next";

// No GitHub Pages o site fica em /<nome-do-repositório>. Localmente o caminho é a raiz.
const basePath = process.env.PAGES_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath,
  images: { unoptimized: true },
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
};

export default nextConfig;
