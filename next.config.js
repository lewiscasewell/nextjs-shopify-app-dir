/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.shopify.com",
        port: "",
        pathname: "/s/files/1/0758/9514/4730/files/**",
      },
    ],
  },
};

module.exports = nextConfig;
