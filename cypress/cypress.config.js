const { defineConfig } = require("cypress");
const { removeDirectory } = require('cypress-delete-downloads-folder');


module.exports = defineConfig({
  reporter:'cypress-moechawesome-reporter',
  e2e: {
    setupNodeEvents(on, config) {
      // Implement node event listeners here

      require('cypress-mochawesome-reporter/plugin')(on)
    },
    baseUrl: "https://example.cypress.io/",
    chromeWebSecurity: false,
    env: {
      hideXhr: true,
      amazon: "https://www.amazon.de/",
      google: "https://www.google.com/",
      saucedemo: "https://www.saucedemo.com/v1/"
    }
  }
});

