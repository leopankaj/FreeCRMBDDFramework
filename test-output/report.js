$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("D:/workSpace_CucumberFramework/FreeCRMBDDFramework/src/main/java/com/FreeCRMBDDFramework/features/login.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: your.email@your.domain.com"
    },
    {
      "line": 2,
      "value": "#Keywords Summary :"
    },
    {
      "line": 3,
      "value": "#Feature: List of scenarios."
    },
    {
      "line": 4,
      "value": "#Scenario: Business rule through list of steps with arguments."
    },
    {
      "line": 5,
      "value": "#Given: Some precondition step"
    },
    {
      "line": 6,
      "value": "#When: Some key actions"
    },
    {
      "line": 7,
      "value": "#Then: To observe outcomes or validation"
    },
    {
      "line": 8,
      "value": "#And,But: To enumerate more Given,When,Then steps"
    },
    {
      "line": 9,
      "value": "#Scenario Outline: List of steps for data-driven as an Examples and \u003cplaceholder\u003e"
    },
    {
      "line": 10,
      "value": "#Examples: Container for s table"
    },
    {
      "line": 11,
      "value": "#Background: List of steps run before each of the scenarios"
    },
    {
      "line": 12,
      "value": "#\"\"\" (Doc Strings)"
    },
    {
      "line": 13,
      "value": "#| (Data Tables)"
    },
    {
      "line": 14,
      "value": "#@ (Tags/Labels):To group Scenarios"
    },
    {
      "line": 15,
      "value": "#\u003c\u003e (placeholder)"
    },
    {
      "line": 16,
      "value": "#\"\""
    },
    {
      "line": 17,
      "value": "## (Comments)"
    },
    {
      "line": 18,
      "value": "#Sample Feature Definition Template"
    },
    {
      "line": 19,
      "value": "#@LoginPageTest"
    },
    {
      "line": 20,
      "value": "#Feature: Free CRM login feature"
    },
    {
      "line": 22,
      "value": "#Scenario: Free CRM login Test Scenario"
    },
    {
      "line": 24,
      "value": "#Given user is allready on login page"
    },
    {
      "line": 25,
      "value": "#When title of login page is Free CRM"
    },
    {
      "line": 26,
      "value": "#Then user enter username"
    },
    {
      "line": 27,
      "value": "#And user enter password"
    },
    {
      "line": 28,
      "value": "#Then click on login button"
    },
    {
      "line": 29,
      "value": "#Then user on home page"
    },
    {
      "line": 30,
      "value": "#And close the browser"
    },
    {
      "line": 33,
      "value": "#Feature: Free CRM login feature"
    },
    {
      "line": 34,
      "value": "# Scenario without Example keyowrd"
    },
    {
      "line": 35,
      "value": "#Scenario: Free CRM login Test Scenario"
    },
    {
      "line": 37,
      "value": "#Given user is allready on login page"
    },
    {
      "line": 38,
      "value": "#When title of login page is Free CRM"
    },
    {
      "line": 39,
      "value": "#Then user enter username as \"soumya456\""
    },
    {
      "line": 40,
      "value": "#And user enter password as \"$oumya@12\""
    },
    {
      "line": 41,
      "value": "#Then click on login button"
    },
    {
      "line": 42,
      "value": "#Then user on home page"
    },
    {
      "line": 43,
      "value": "#And close the browser"
    }
  ],
  "line": 45,
  "name": "Free CRM login feature",
  "description": "",
  "id": "free-crm-login-feature",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 46,
      "value": "# Scenario without Example keyowrd"
    }
  ],
  "line": 47,
  "name": "Free CRM login Test Scenario",
  "description": "",
  "id": "free-crm-login-feature;free-crm-login-test-scenario",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 49,
  "name": "user is allready on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 50,
  "name": "title of login page is Free CRM",
  "keyword": "When "
});
formatter.step({
  "line": 51,
  "name": "user enter username as \"\u003cemployeeid\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 52,
  "name": "user enter password as \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 53,
  "name": "click on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 54,
  "name": "user on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 55,
  "name": "close the browser",
  "keyword": "And "
});
formatter.examples({
  "line": 57,
  "name": "",
  "description": "",
  "id": "free-crm-login-feature;free-crm-login-test-scenario;",
  "rows": [
    {
      "cells": [
        "employeeid",
        "password"
      ],
      "line": 58,
      "id": "free-crm-login-feature;free-crm-login-test-scenario;;1"
    },
    {
      "cells": [
        "soumya456",
        "$oumya@12"
      ],
      "line": 59,
      "id": "free-crm-login-feature;free-crm-login-test-scenario;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 59,
  "name": "Free CRM login Test Scenario",
  "description": "",
  "id": "free-crm-login-feature;free-crm-login-test-scenario;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 49,
  "name": "user is allready on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 50,
  "name": "title of login page is Free CRM",
  "keyword": "When "
});
formatter.step({
  "line": 51,
  "name": "user enter username as \"soumya456\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 52,
  "name": "user enter password as \"$oumya@12\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 53,
  "name": "click on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 54,
  "name": "user on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 55,
  "name": "close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepdefinition.user_is_allready_on_login_page()"
});
formatter.result({
  "duration": 13812323000,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepdefinition.title_of_login_page_is_Free_CRM()"
});
formatter.result({
  "duration": 5661508,
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
  "duration": 191350678,
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
  "duration": 2331885472,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepdefinition.click_on_login_button()"
});
formatter.result({
  "duration": 15775030185,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepdefinition.user_on_home_page()"
});
formatter.result({
  "duration": 15012209,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepdefinition.close_the_browser()"
});
formatter.result({
  "duration": 614843154,
  "status": "passed"
});
});