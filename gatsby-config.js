module.exports = {
  siteMetadata: {
    title: `Markable - `,
    siteUrl: `https://www.markable.so`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        icon: `src/images/icon.png`,
        name: `Markable`,
        short_name: `Markable`,
        start_url: `/`
      },
    },
    {
      resolve: `gatsby-plugin-plausible`,
      options: {
        domain: `https://markable.so/`,
      },
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-styled-components",
    "gatsby-plugin-image",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};
