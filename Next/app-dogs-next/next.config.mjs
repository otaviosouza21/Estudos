/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns: [
            {
                protocol:'https',
                hostname:'dogs.origamid.dev'
            }
        ]
    }
};

export default nextConfig;
