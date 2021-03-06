module.exports = {
  pathPrefix: "/hello-gatsby",
  siteMetadata: {
    title: `slk333|Awew33`
  },
  plugins: [
    `gatsby-plugin-twitter`,
    `gatsby-transformer-remark`,

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`
      }
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },
  ]
};
