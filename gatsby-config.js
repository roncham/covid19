//const accessToken = process.env.GOOGLE_SERVICE_ACCOUNT_CREDENTIALS;
module.exports = {
  plugins: [
    'gatsby-plugin-resolve-src',
    'gatsby-plugin-sass',
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-4041486-24",
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: true,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
        // Delays sending pageview hits on route update (in milliseconds)
        pageTransitionDelay: 0,
        // Any additional optional fields
        sampleRate: 5,
        siteSpeedSampleRate: 10,
        cookieDomain: "covid19.pegasusteam.com",
        //cookieExpires: 0,
      },
    },
    'gatsby-plugin-react-leaflet',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp'
    // 'gatsby-plugin-offline',
  ]
};
