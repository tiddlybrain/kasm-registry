/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'export',
  distDir: '../public',
  env: {
    name: 'Tiddlybrain Registry',
    description: 'Collection of Kasm workspaces for development',
    icon: 'https://tiddlybrain.github.io/kasm-registry/1.1/logo.svg',
    listUrl: 'https://tiddlybrain.github.io/kasm-registry/',
    contactUrl: 'https://github.com/tiddlybrain/kasm-registry/issues',
  },
  reactStrictMode: true,
  basePath: '/kasm-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
