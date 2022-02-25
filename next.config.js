/** @type {import('next').NextConfig} */
const path = require('path');
const withCSS = require('@zeit/next-css')
const { withPlugins } = require('next-compose-plugins');
const withTM = require('next-transpile-modules')(['sezy-design']);

module.exports = withPlugins([withTM], {
  basePath: process.env.BASE_PATH,
  reactStrictMode: true,
  env: {
    apiUrl: process.env.API_URL,
  },
  i18n: {
    // These are all the locales you want to support in
    // your application
    locales: ['en', 'vn'],
    // This is the default locale you want to be used when visiting
    defaultLocale: 'en',
    // This is a list of locale domains and the default locale they
    // should handle (these are only required when setting up domain routing)
    // Note: subdomains must be included in the domain value to be matched e.g. "fr.example.com".
    // domains: [
    //   {
    //     domain: 'example.com',
    //     defaultLocale: 'en-US',
    //   },
    //   {
    //     domain: 'example.nl',
    //     defaultLocale: 'nl-NL',
    //   },
    //   {
    //     domain: 'example.fr',
    //     defaultLocale: 'fr',
    //     // an optional http field can also be used to test
    //     // locale domains locally with http instead of https
    //     http: true,
    //   },
    // ],
  },
});