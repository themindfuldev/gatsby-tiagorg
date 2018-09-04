module.exports = {
  siteMetadata: {
    title: "Tiago Romero Garcia",
    description: "Front-end architect in San Francisco, conference speaker and article writer.",
    twitter: "https://twitter.com/themindfuldev",
    github: "https://github.com/themindfuldev",
    linkedin: "https://www.linkedin.com/in/themindfuldev",
    dev: "https://dev.to/themindfuldev"
  },
  pathPrefix: '/',
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/posts`,
        name: "posts",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 630,
            },
          },
          "gatsby-remark-copy-linked-files",
        ],
      },
    },      
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-60254345-1",
        // Puts tracking script in the head instead of the body
        head: false,
        // Setting this parameter is optional
        anonymize: false,
        // Setting this parameter is also optional
        respectDNT: true,
        // Avoids sending pageview hits from custom paths
        exclude: [],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`
  ],
}
