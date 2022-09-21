const { defineConfig } = require("cypress");
const cypress = require("cypress");

module.exports = defineConfig({
  projectId: 'd76xms',
  e2e: {
    specPattern: 'cypress/e2e/**/*.e2e.{js,jsx,ts,tsx}',
    defaultCommandTimeout: 60000, // default 1 second
    failOnStatusCode: false,
    experimentalSessionAndOrigin: true,
    responseTimeout: 120000,
    // baseUrl: '',
    // supportFolder: 'cypress/e2e',
    // env: {},
    // port: '',
    pageLoadTimeout: 60000, // default 1 minute
    setupNodeEvents(on, config) {
      config.baseUrl = config.env['CYPRESS_BASE_URL'];
      return config;
    },
  },
});
