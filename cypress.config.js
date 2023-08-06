
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "63t5qk",
  env: {
    url: "www.saucedemo.com"
  },
  retries:{
    runMode: 1

  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: 'cypress/integration/test/*.js',
    screenshotsFolder: 'cypress/failure/screenshots',
    defaultCommandTimeout: 6000
  }
});
