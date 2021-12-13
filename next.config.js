// next.config.js
/* eslint-disable @typescript-eslint/no-var-requires */
const withImages = require('next-images')
const nextPWA = require('next-pwa')
const runtimeCaching = require('next-pwa/cache')
const withPlugins = require('next-compose-plugins')

const withPWA = nextPWA({
  pwa: {
    dest: 'public',
    // disable: process.env.NODE_ENV === 'development',
    runtimeCaching
  }
})

// module.exports = withPlugins([
//   [
//     withImages,
//     {
//       esModule: true,
//       images: {
//         disableStaticImages: true
//       }
//     }
//   ],
//   nextPWA,
//   {
//     dest: 'public',
//     runtimeCaching
//   }
// ])

module.exports = withPlugins([
  [
    withImages,
    {
      esModule: true,
      images: {
        disableStaticImages: true
      }
    }
  ],
  [
    nextPWA,
    {
      pwa: {
        dest: 'public',
        runtimeCaching
      }
    }
  ]
])
