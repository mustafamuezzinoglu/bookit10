Feature: Delete Student


Scenario Outline: Create student a teacher and verify status code 201
Given I logged Bookit api as "teacher"
When I delete student "<id>"
Then status code should be 200
Examples:
  |600|
  |615|
  |632|
  |633|
  |634|
  |638|
  |639|
  |644|
  |646|
  |647|
  |648|
  |649|
  |650|
  |661|
  |668|
  |669|
  |671|
  |676|
  |686|
  |690|
  |691|
  |692|

