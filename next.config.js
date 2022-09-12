const publicRuntimeConfig =
    process.env.NODE_ENV === "development"
        ? {
              NEXT_PUBLIC_API_ROOT_URL: process.env.NEXT_PUBLIC_API_ROOT_URL || "",
          }
        : {
              NEXT_PUBLIC_API_ROOT_URL: process.env.NEXT_PUBLIC_API_ROOT_URL || "",
          };

const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    publicRuntimeConfig: {
        ...publicRuntimeConfig,
    },
};

module.exports = nextConfig;
