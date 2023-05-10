const { defineConfig } = require('cypress')

module.exports = defineConfig({
  //chromeWebSecurity: false,
  requestTimeout: 20000,
  defaultCommandTimeout: 10000,
  viewportWidth: 1920,
  viewportHeight: 1080,
  video: false,
  pageLoadTimeout: 100000,
  watchForFileChanges: false,
  numTestsKeptInMemory: 4,
  retries: {
    runMode: 1,
    openMode: 0,
  },
  e2e: {
    setupNodeEvents(on, config) {
    },
    baseUrl: 'https://www.tesla.com/'
  },
})