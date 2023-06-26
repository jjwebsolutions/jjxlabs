/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.goopics.net",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
