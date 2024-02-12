const path = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  images: {
    domains: ['images.ctfassets.net', 'downloads.ctfassets.net'],
  },
  webpack: (config) => {
    config.resolve.alias['@'] = path.resolve(__dirname, './');
    return config;
  },
};
