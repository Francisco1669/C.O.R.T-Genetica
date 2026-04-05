import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "cortgenetica.com.br" }],
        destination: "https://www.cortgeneticabrasil.com/:path*",
        permanent: true,
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.cortgenetica.com.br" }],
        destination: "https://www.cortgeneticabrasil.com/:path*",
        permanent: true,
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: "cortgeneticabrasil.com" }],
        destination: "https://www.cortgeneticabrasil.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
