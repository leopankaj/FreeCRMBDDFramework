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
    }
  ],
  "line": 20,
  "name": "Free CRM login feature",
  "description": "",
  "id": "free-crm-login-feature",
  "keyword": "Feature",
  "tags": [
    {
      "line": 19,
      "name": "@loginTest"
    }
  ]
});
formatter.scenario({
  "line": 22,
  "name": "Free CRM login Test Scenario",
  "description": "",
  "id": "free-crm-login-feature;free-crm-login-test-scenario",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 24,
  "name": "user is allready on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "title of login page is Free CRM",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "user enter username",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "user enter password",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "click on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "user on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepdefinition.user_is_allready_on_login_page()"
});
formatter.result({
  "duration": 7591703785,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepdefinition.title_of_login_page_is_Free_CRM()"
});
formatter.result({
  "duration": 16390572,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepdefinition.user_enter_username()"
});
formatter.result({
  "duration": 133515521,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepdefinition.user_enter_password()"
});
formatter.result({
  "duration": 2356203835,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepdefinition.click_on_login_button()"
});
formatter.result({
  "duration": 7925309458,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepdefinition.user_on_home_page()"
});
formatter.result({
  "duration": 12061662,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepdefinition.close_the_browser()"
});
formatter.result({
  "duration": 1409747682,
  "status": "passed"
});
});