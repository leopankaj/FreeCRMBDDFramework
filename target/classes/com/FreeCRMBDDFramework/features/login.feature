#Author: your.email@your.domain.com
#Keywords Summary :
#Feature: List of scenarios.
#Scenario: Business rule through list of steps with arguments.
#Given: Some precondition step
#When: Some key actions
#Then: To observe outcomes or validation
#And,But: To enumerate more Given,When,Then steps
#Scenario Outline: List of steps for data-driven as an Examples and <placeholder>
#Examples: Container for s table
#Background: List of steps run before each of the scenarios
#""" (Doc Strings)
#| (Data Tables)
#@ (Tags/Labels):To group Scenarios
#<> (placeholder)
#""
## (Comments)
#Sample Feature Definition Template
#@LoginPageTest
#Feature: Free CRM login feature 

#Scenario: Free CRM login Test Scenario

#Given user is allready on login page
#When title of login page is Free CRM
#Then user enter username
#And user enter password
#Then click on login button
#Then user on home page
#And close the browser


Feature: Free CRM login feature 
# Scenario without Example keyowrd
Scenario: Free CRM login Test Scenario

Given user is allready on login page
When title of login page is Free CRM
Then user enter username as "soumya456"
And user enter password as "$oumya@12"
Then click on login button
Then user on home page
And close the browser