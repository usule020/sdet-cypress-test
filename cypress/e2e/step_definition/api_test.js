/**
 * Imported the Given, When, Then from the code dependancy @badeball/cypress-cucumber-preprocessor  
 */
import {Given, When, Then} from '@badeball/cypress-cucumber-preprocessor';

/**
 * This Given step definition verifies whether the Swagger UI page is available by checking the page title
 * This Given applies to all the scenarios
 */
Given('I land on the Swagger UI docs page', () => {
cy.visit('/');
cy.title('Swagger UI')
})

/**
 * This When step definition sends a POST request without the name field in the JSON payload
 */
When('I make a POST request against the endpoint add without a name', () => {
    cy.visit('/')
    cy.request({
    method: 'POST',
    url: '/API/add',
    failOnStatusCode: false,
    body: {
      Email: "john@doe.com",
      Phone: "07499111222",
      Address: "191 Wood ln",
      City: "London",
      Zip: "W12 7FP",
      Country: "UK",
      Notes: "Hello"
    }}).as('requestcall');
})

/**
 * This Then step definition responses back with sends an error message prompting the user to enter a name 
 */
Then('an error message is returned prompting the user to enter a name', () => {
    cy.get('@requestcall').then((response) => {
        expect(response.status).to.eq(400)
        expect(response.body.errors.Name).to.include("The Name field is required.")
      })
})

/**
 * This When step definition sends a POST request without the name and email field in the JSON payload
 */
When('I make a POST request against the endpoint add without a name and email', () => {
  cy.visit('/')
  cy.request({
  method: 'POST',
  url: '/API/add',
  failOnStatusCode: false,
  body: {
    Phone: "07499111222",
    Address: "191 Wood ln",
    City: "London",
    Zip: "W12 7FP",
    Country: "UK",
    Notes: "Hello"
  }}).as('requestcall');
})

/**
 * This Then step definition responses back with sends an error message prompting the user to enter a name and email
 */
Then('an error message is returned prompting the user to enter a name and email', () => {
  cy.get('@requestcall').then((response) => {
      expect(response.status).to.eq(400)
      expect(response.body.errors.Name).to.include("The Name field is required.")
      expect(response.body.errors.Email).to.include("The Email field is required.")
    })
})

/**
 * This When step definition sends a POST request with all valid fields in the JSON payload
 */ 
When("I make a POST request against the endpoint add", () => {
  cy.request({
    method: 'POST',
    url: '/API/add',
    failOnStatusCode: false,
    body: {
      Name: "John Doe",
      Email: "john@doe.com",
      Phone: "07499111222",
      Address: "191 Wood ln",
      City: "London",
      Zip: "W12 7FP",
      Country: "UK",
      Notes: "hello"
    }}).as('requestcall')
})

/**
 * This Then step definition responses back with a 200 code
 */
Then("a 200 response message is returned with the response body", () => {
  cy.get('@requestcall').then((response) => {
    expect(response.status).to.eq(200)
    expect(response.body).to.not.be.empty
  })
})

/**
 * This When step definition sends a GET request 
 */ 
When("I make a GET request against the endpoint get", () => {
  cy.request({
    method: 'GET',
    url: '/API/get',
    failOnStatusCode: false
    }).as('requestcall')

})

/**
 * This When step definition sends a GET request with an invalid id parameter
 */  
When("I make a GET request against the endpoint get with an invalid id parameter", () => {
  cy.request({
    method: 'GET',
    url: '/API/get/1cedd95b-da95-4231-bc05-ba23a9f8b697',
    failOnStatusCode: false
    }).as('requestcall')
    

})

/**
 * This Then step definition sends a error response with a message Not found
 */  
Then("a 404 Not Found response message is returned", () => {
  cy.get('@requestcall').then((response) => {
    expect(response.status).to.eq(404)
    expect(response.body.title).to.include("Not Found")
  })
})

/**
 * This When step definition sends GET request with a valid id parameter
 */ 
When("I make a GET request against the endpoint get with a valid id parameter", () => {
  cy.visit('/')
  cy.request({
  method: 'GET',
  url: '/API/get/c241a259-58b0-4936-b27d-6a393f0c95eb',
  failOnStatusCode: false
  }).as('requestcall')
})