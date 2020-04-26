module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "portfolio"
  title: 'Jeremy Dost', // Navigation and Site Title
  titleAlt: 'Personal site of Jeremy Dost', // Title for JSONLD
  description: 'Personal site of Jeremy Dost: technologist and visual artist',
  headline: 'Just messing around on the web', // Headline for schema.org JSONLD
  url: 'https://www.jeremydost.com', // Domain of your site. No trailing slash!
  siteLanguage: 'en', // Language Tag on <html> element
  logo: '/logos/logo-1024.png', // Used for SEO
  ogLanguage: 'en_US', // Facebook Language

  // JSONLD / Manifest
  favicon: 'src/favicon.png', // Tthis Used for manifest favicon generation
  shortName: 'jdost', // shortname for manifest. MUST be shorter than 12 characters
  author: 'Jeremy Dost', // Based on LekoArts prismic starter Author for schemaORGJSONLD
  themeColor: '#3D63AE',
  backgroundColor: '#EBEDF2',

  twitter: '@jezza', // Twitter Username
  facebook: 'gatsby-prismic', // TODO change this Facebook Site Name
  googleAnalyticsID: 'UA-164609516-1',

  skipNavId: 'reach-skip-nav', // ID for the "Skip to content" a11y feature
}
