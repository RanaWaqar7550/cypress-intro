const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://aws-dev-learn.alw.sa',
    // supportFolder: 'cypress/e2e',
    specPattern: 'js,jsx,ts,tsx',
    defaultCommandTimeout: 1000, // default 1 second
    // port: '',
    pageLoadTimeout: 60000, // default 1 minute
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
