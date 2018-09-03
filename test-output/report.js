$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("D:/workSpace_CucumberFramework/FreeCRMBDDFramework/src/main/java/com/FreeCRMBDDFramework/features/createNewContact.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "# Scenario with Example keyowrd"
    }
  ],
  "line": 2,
  "name": "Free CRM create contact",
  "description": "",
  "id": "free-crm-create-contact",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Free CRM create new contact Scenario",
  "description": "",
  "id": "free-crm-create-contact;free-crm-create-new-contact-scenario",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "user is allready on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "title of login page is Free CRM",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "user enter username as \"\u003cemployeeid\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user enter password as \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "click on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "Go to contacts link and click on new contact",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "select title from Title dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "user enter firstname as \"\u003cfirstname\u003e\" and lastName as \"\u003clastname\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Click on save button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "user on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "close the browser",
  "keyword": "And "
});
formatter.examples({
  "line": 18,
  "name": "",
  "description": "",
  "id": "free-crm-create-contact;free-crm-create-new-contact-scenario;",
  "rows": [
    {
      "cells": [
        "employeeid",
        "password",
        "firstname",
        "lastname"
      ],
      "line": 19,
      "id": "free-crm-create-contact;free-crm-create-new-contact-scenario;;1"
    },
    {
      "cells": [
        "soumya456",
        "$oumya@12",
        "Pankaj",
        "Kumar"
      ],
      "line": 20,
      "id": "free-crm-create-contact;free-crm-create-new-contact-scenario;;2"
    },
    {
      "cells": [
        "soumya456",
        "$oumya@12",
        "Raj",
        "Kumar"
      ],
      "line": 21,
      "id": "free-crm-create-contact;free-crm-create-new-contact-scenario;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 20,
  "name": "Free CRM create new contact Scenario",
  "description": "",
  "id": "free-crm-create-contact;free-crm-create-new-contact-scenario;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "user is allready on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "title of login page is Free CRM",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "user enter username as \"soumya456\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user enter password as \"$oumya@12\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "click on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "Go to contacts link and click on new contact",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "select title from Title dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "user enter firstname as \"Pankaj\" and lastName as \"Kumar\"",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Click on save button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "user on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepdefinition.user_is_allready_on_login_page()"
});
formatter.result({
  "duration": 8417905817,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepdefinition.title_of_login_page_is_Free_CRM()"
});
formatter.result({
  "duration": 12998365,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "soumya456",
      "offset": 24
    }
  ],
  "location": "LoginStepdefinition.user_enter_username_as(String)"
});
formatter.result({
  "duration": 79554657,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$oumya@12",
      "offset": 24
    }
  ],
  "location": "LoginStepdefinition.user_enter_password_as(String)"
});
formatter.result({
  "duration": 2086952848,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepdefinition.click_on_login_button()"
});
formatter.result({
  "duration": 8875587161,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepdefinition.go_to_contacts_link_and_click_on_new_contact()"
});
formatter.result({
  "duration": 7312503203,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepdefinition.select_title_from_Title_dropdown()"
});
formatter.result({
  "duration": 137428103,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Pankaj",
      "offset": 25
    },
    {
      "val": "Kumar",
      "offset": 50
    }
  ],
  "location": "LoginStepdefinition.user_enter_firstname_as_and_lastName_as(String,String)"
});
formatter.result({
  "duration": 162472632,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepdefinition.click_on_save_button()"
});
formatter.result({
  "duration": 103740625,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepdefinition.user_on_home_page()"
});
formatter.result({
  "duration": 59287,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepdefinition.close_the_browser()"
});
formatter.result({
  "duration": 685383225,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Free CRM create new contact Scenario",
  "description": "",
  "id": "free-crm-create-contact;free-crm-create-new-contact-scenario;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "user is allready on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "title of login page is Free CRM",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "user enter username as \"soumya456\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user enter password as \"$oumya@12\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "click on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "Go to contacts link and click on new contact",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "select title from Title dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "user enter firstname as \"Raj\" and lastName as \"Kumar\"",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Click on save button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "user on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepdefinition.user_is_allready_on_login_page()"
});
formatter.result({
  "duration": 8679749530,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepdefinition.title_of_login_page_is_Free_CRM()"
});
formatter.result({
  "duration": 13555501,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "soumya456",
      "offset": 24
    }
  ],
  "location": "LoginStepdefinition.user_enter_username_as(String)"
});
formatter.result({
  "duration": 135143319,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$oumya@12",
      "offset": 24
    }
  ],
  "location": "LoginStepdefinition.user_enter_password_as(String)"
});
formatter.result({
  "duration": 2336671163,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepdefinition.click_on_login_button()"
});
formatter.result({
  "duration": 6867889208,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepdefinition.go_to_contacts_link_and_click_on_new_contact()"
});
formatter.result({
  "duration": 7447757617,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepdefinition.select_title_from_Title_dropdown()"
});
formatter.result({
  "duration": 150248606,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Raj",
      "offset": 25
    },
    {
      "val": "Kumar",
      "offset": 47
    }
  ],
  "location": "LoginStepdefinition.user_enter_firstname_as_and_lastName_as(String,String)"
});
formatter.result({
  "duration": 162208054,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepdefinition.click_on_save_button()"
});
formatter.result({
  "duration": 75383200,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepdefinition.user_on_home_page()"
});
formatter.result({
  "duration": 26873,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepdefinition.close_the_browser()"
});
formatter.result({
  "duration": 592657605,
  "status": "passed"
});
});