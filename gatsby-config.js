module.exports = {
  siteMetadata: {
    title: "Tiago Romero Garcia",
    description: "Software Engineer at Pinterest, driven by empathy, kindness and creativity.",
    twitter: "https://twitter.com/themindfuldev",
    github: "https://github.com/themindfuldev",
    linkedin: "https://linkedin.com/in/themindfuldev",
    dev: "https://dev.to/themindfuldev",
    twitterHandle: "@themindfuldev",
    facebookAppId: "703069473065942",
    avatar: "https://s.gravatar.com/avatar/5cac784a074b86d771fe768274f6860c?s=1200",
    url: "https://tiagorg.com"
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
