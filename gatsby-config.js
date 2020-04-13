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
        path: `${__dirname}/src/assets/images`,
      },
    },
    'gatsby-plugin-react-leaflet',
    // 'gatsby-plugin-offline',
  ],
};
