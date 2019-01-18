module.exports = {
  pathPrefix: "/hello-gatsby",
    siteMetadata: {
      title: `slk333|Awew33`,
    },
    plugins: [
        `gatsby-transformer-remark`,

        {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `src`,
          path: `${__dirname}/src/`,
        },
      },
    
    ]
  }
