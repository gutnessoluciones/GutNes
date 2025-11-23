import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Comentado para Vercel - descomentarexport para FTP
  // output: 'export',
  images: {
    unoptimized: true
  }
};

export default nextConfig;
