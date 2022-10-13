const publicRuntimeConfig =
    process.env.NODE_ENV === "development"
        ? {
              NEXT_PUBLIC_API_ROOT_URL: process.env.NEXT_PUBLIC_API_ROOT_URL || "",
              NEXT_PUBLIC_HASURA_END_POINT: process.env.NEXT_PUBLIC_HASURA_END_POINT || "",
              NEXT_PUBLIC_HASURA_ADMIN_SECRET: process.env.NEXT_PUBLIC_HASURA_ADMIN_SECRET || "",
          }
        : {
              NEXT_PUBLIC_API_ROOT_URL: process.env.NEXT_PUBLIC_API_ROOT_URL || "",
              NEXT_PUBLIC_HASURA_END_POINT: process.env.NEXT_PUBLIC_HASURA_END_POINT || "",
              NEXT_PUBLIC_HASURA_ADMIN_SECRET: process.env.NEXT_PUBLIC_HASURA_ADMIN_SECRET || "",
          };

const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
        domains: ["st3.depositphotos.com", ""],
    },
    publicRuntimeConfig: {
        ...publicRuntimeConfig,
    },
};

module.exports = nextConfig;
