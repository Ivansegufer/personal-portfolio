/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    PAGES: ["Inicio", "Acerca de mi", "Habilidades", "Projectos", "Contactame"],
  },
};

module.exports = nextConfig;
