const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: "./src/specs/**.{js,jsx,ts,tsx}",
    baseUrl: "https://opensource-demo.orangehrmlive.com/web/index.php",
    projectId: "basiccypress",
  },
  defaultCommandTimeout: 4000,
});
