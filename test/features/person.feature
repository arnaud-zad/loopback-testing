Feature: Person feature
  As a user of the api
  I want to access to person data
  So that I can make interactions with person data

  Scenario: List people
    When I make a GET request to "/api/people"
    Then The status code should be 200
    Then The content type should be 'json'
    