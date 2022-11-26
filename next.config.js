/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: [
      "links.papareact.com",
      "platform-lookaside.fbsbx.com",
      "www.google.com",
      "scontent.fhan4-3.fna.fbcdn.net"
    ],
  },
  experimental: {
    appDir: true,
  },
};
