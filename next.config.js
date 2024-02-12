const path = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  images: {
    domains: ['images.ctfassets.net', 'downloads.ctfassets.net'],
  },
  alias: {
    '@': path.resolve(__dirname, './'),
  },
};
