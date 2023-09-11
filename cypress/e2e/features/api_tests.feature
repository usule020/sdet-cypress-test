Feature:  I want to make api calls 
 
 Background:
     Given I land on the Swagger UI docs page

 Scenario: Unsuccessful add - missing name
     When I make a POST request against the endpoint add without a name
     Then an error message is returned prompting the user to enter a name

Scenario: Unsuccessful add - missing name and email
     When I make a POST request against the endpoint add without a name and email
     Then an error message is returned prompting the user to enter a name and email

Scenario: Successful add
     When I make a POST request against the endpoint add
     Then a 200 response message is returned with the response body

Scenario: Successful get
     When I make a GET request against the endpoint get
     Then a 200 response message is returned with the response body

Scenario: Unsuccessful get with id
     When I make a GET request against the endpoint get with an invalid id parameter
     Then a 404 Not Found response message is returned

Scenario: Successful get with id
     When I make a GET request against the endpoint get with a valid id parameter
     Then a 200 response message is returned with the response body