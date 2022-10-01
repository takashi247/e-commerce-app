/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: (() => {
    let compilerConfig = {
      // activate styledComponents
      styledComponents: true,
    };

    if (process.env.NODE_ENV === 'production') {
      compilerConfig = {
        ...compilerConfig,
        // remove data-testid elements used for React Testing Library in production environment
        reactRemoveProperties: { properties: ['^data-testid$'] },
      }
    }

    return compilerConfig;
  }),
};

module.exports = nextConfig;
