@smoke
Feature: User Verification

  Scenario:  verify information about logged user
    Given I logged Bookit api using "lfinnisz@yolasite.com" and "lissiefinnis"
    When I get the current user information from api
    Then status code should be 200

  Scenario: verify information about logged user from api and database
    Given I logged Bookit api using "lfinnisz@yolasite.com" and "lissiefinnis"
    When I get the current user information from api
    Then the information about current user from api and database should match


  Scenario:  three point verification (UI, API, Database)
    Given user logs in using "lfinnisz@yolasite.com" "lissiefinnis"
    And user is on the my self page
    Given I logged Bookit api using "lfinnisz@yolasite.com" and "lissiefinnis"
    When I get the current user information from api
    Then UI,API,Database user information must be match

 @db
  Scenario Outline: three point verification (UI, API, Database) Data Driven Tests
    Given user logs in using "<email>" "<password>"
    And user is on the my self page
    Given I logged Bookit api using "<email>" and "<password>"
    When I get the current user information from api
    Then UI,API,Database user information must be match

    Examples:
      | email                    | password     |
      | mforkerh@dailymail.co.uk | mariusforker |
      | blyst6@si.edu            | barbabaslyst |

