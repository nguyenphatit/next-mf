/** @type {import('next').NextConfig} */

import NextFederationPlugin from '@module-federation/nextjs-mf';

const getFederationConfig = () => ({
  name: "products",
  remotes: {},
  filename: "static/chunks/remoteEntry.js",
  exposes: {
    "./products-listing-page": "./src/components/products-listing-page.tsx",
  },
  shared: {},
});

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['fakestoreapi.com']
  },
  webpack(config, options) {
    const { isServer } = options;
    const mfConfig = getFederationConfig(isServer);
    config.plugins.push(new NextFederationPlugin(mfConfig));
    return config;
  }
};

export default nextConfig;
