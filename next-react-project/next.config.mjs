/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  // add github hostname to allowed image domains
  images: {
    domains: ["github.com"],
  },
};

export default nextConfig;
