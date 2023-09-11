/**
 * This line imports the defineConfig function from the 'cypress' module. 
 * defineConfig is used to create and configure the Cypress configuration object.
 */
const { defineConfig } = require('cypress')


/**
 * This code block defines the Cypress configuration using defineConfig. 
 * It specifies various configuration options within an e2e object. 
 * This options includes: baseUrl, specPattern, chromeWebSecurity and defaultCommandTimeout
 */
module.exports = defineConfig({
  e2e: {
    setupNodeEvents,
    baseUrl: 'https://linetencustomerapi.azurewebsites.net',
    specPattern: "cypress/e2e/features/*.feature",
    chromeWebSecurity: false,
    defaultCommandTimeout: 10000
 },
});

/**
 * These lines import the cypress-cucumber-preprocessor and browserify dependencies. 
 * The cucumber-preprocessor aims to provide a developer experience and behavior similar to Cucumber, which can be used with Cypress
 * The browserify dependency helps the preprocessor to interact with Cypress with the browser.
 */
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const browserify = require("@badeball/cypress-cucumber-preprocessor/browserify");


async function setupNodeEvents(on, config) {
// The addCucumberPreprocessorPlugin function is required for the preprocessor to be able to generate JSON reports after each run
await preprocessor.addCucumberPreprocessorPlugin(on, config);
on("file:preprocessor", browserify.default(config));
return config;
}

