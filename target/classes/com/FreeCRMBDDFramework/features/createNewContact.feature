# Scenario with Example keyowrd
Feature: Free CRM create contact

Scenario Outline: Free CRM create new contact Scenario
								
Given user is allready on login page
When title of login page is Free CRM 
Then user enter username as "<employeeid>"
And user enter password as "<password>"
Then click on login button
Then Go to contacts link and click on new contact
And select title from Title dropdown
And user enter firstname as "<firstname>" and lastName as "<lastname>"
And Click on save button
Then user on home page
And close the browser

Examples:
      |	employeeid | password | firstname| lastname |
      | soumya456  | $oumya@12| Pankaj   | Kumar    |
      | soumya456  | $oumya@12| Raj   	 | Kumar    |
			