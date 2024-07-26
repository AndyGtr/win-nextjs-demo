/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "standalone",
    images: {
      domains: ['cdn.builder.io', 'win-nextjs-demo-220724-bvfdf6e4fhchhzbq.ukwest-01.azurewebsites.net', 'www.giveadram.net', 'builder.io', 'localhost'],
    },
    async headers() {
      return [
        {
          source: '/(.*)',
          headers: [
            {
              key: 'Content-Security-Policy',
              value: `
                default-src 'self';
                script-src 'self' 'unsafe-eval' 'unsafe-inline' https://cdn.builder.io;
                connect-src 'self' https://apikeys.civiccomputing.com https://cc.cdn.civiccomputing.com https://connect.facebook.net https://www.googletagmanager.com https://region1.google-analytics.com https://pagead2.googlesyndication.com https://cdn.builder.io;
                img-src 'self' data: https://cdn.builder.io https://builder-demo-fe-api.scm.azurewebsites.net https://builder.io;
                style-src 'self' 'unsafe-inline';
                font-src 'self';
              `.trim().replace(/\s+/g, ' ')
            }
          ]
        }
      ]
    }
};

export default nextConfig;
