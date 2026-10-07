import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/about",
        permanent: false,
      },
    ];
  },
  allowedDevOrigins: ["192.168.1.107"]
};

const withNextIntl = createNextIntlPlugin();

export default withNextIntl(nextConfig);
