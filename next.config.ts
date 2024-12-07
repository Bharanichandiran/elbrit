// next.config.ts
import type { NextConfig } from 'next';

const config: NextConfig = {
  future: {
    webpack5: true,
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      // Ensure styled-jsx resolves correctly on the client-side
      config.resolve.alias['styled-jsx/style'] = 'styled-jsx/style';
    }
    return config;
  },
};

export default config;
