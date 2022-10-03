/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    compiler: {
        styledComponents: true,
    },
    trailingSlash: true,
    images: {
        domains: ["res.cloudinary.com", "github.com"],
        loader: "custom"
    },
};

module.exports = nextConfig;
