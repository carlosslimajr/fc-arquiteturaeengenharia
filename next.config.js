// next.config.js
/* eslint-disable @typescript-eslint/no-var-requires */
const withImages = require('next-images')
const nextPWA = require('next-pwa')
const runtimeCaching = require('next-pwa/cache')
const withPlugins = require('next-compose-plugins')

const withPWA = nextPWA({
  pwa: {
    dest: 'public',
    disable: process.env.NODE_ENV === 'development',
    runtimeCaching
  }
})

module.exports = withImages({
  esModule: true,
  images: {
    disableStaticImages: true
  },
  withPWA
})
