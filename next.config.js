/** @type {import('next').NextConfig} */


const nextConfig = {
  // async headers() {
  //   return [
  //     {
  //       source: "/(.*)",
  //       headers: [
  //         {
  //           key: "X-Content-Type-Options",
  //           value: "nosniff",
  //         },
  //         {
  //           key: "X-Frame-Options",
  //           value: "SAMEORIGIN",
  //         },


  //         {
  //           key: "Referrer-Policy",
  //           value: "strict-origin-when-cross-origin",
  //         },
  //         {
  //           key: "Strict-Transport-Security",
  //           value: "max-age=31536000; includeSubDomains; preload",
  //         },
  //       ],
  //     },
  //   ];
  // },

};

module.exports = ({ ...nextConfig });
