/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',            // static export => works on Vercel + Netlify
  trailingSlash: true,         // avoid routing issues on static hosts
  images: { unoptimized: true } // static export + next/image
};

export default nextConfig;
