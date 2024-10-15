/** @type {import('next').NextConfig} */

import NextFederationPlugin from '@module-federation/nextjs-mf';

const getFederationConfig = (isServer) => ({
  name: "shell",
  remotes: {
    products: `products@http://localhost:3001/_next/static/${isServer ? "ssr" : "chunks"}/remoteEntry.js`,
  },
  filename: "static/chunks/remoteEntry.js",
  exposes: {},
  shared: {},
})

const nextConfig = {
  reactStrictMode: true,
  webpack(config, options) {
    const { isServer } = options;
    const mfConfig = getFederationConfig(isServer);
    config.plugins.push(new NextFederationPlugin(mfConfig));
    return config;
  }
};

export default nextConfig;
