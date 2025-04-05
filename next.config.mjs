/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false, // Desativa o Strict Mode
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'usc1.contabostorage.com',
                port: '',
                pathname: '/**',
                search: '',
            }
        ]
    }
};

export default nextConfig;
