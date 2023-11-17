const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: "./src/specs/**.{js,jsx,ts,tsx}",
    baseUrl: "https://magento.softwaretestingboard.com/",
    projectId: "basiccypress",
  },
  reporter: 'mochawesome',
  defaultCommandTimeout: 4000,
});
