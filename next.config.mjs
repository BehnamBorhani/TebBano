import createNextIntlPlugin from "next-intl/plugin";

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "cdn.paziresh24.com",
            },
            {
                protocol: "https",
                hostname: "apigw.paziresh24.com",
            },
            {
                protocol: "https",
                hostname: "www.paziresh24.com",
            },
        ],
    },
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);