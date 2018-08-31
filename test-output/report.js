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
    }
  ],
  "line": 33,
  "name": "Free CRM login feature",
  "description": "",
  "id": "free-crm-login-feature",
  "keyword": "Feature"
});
formatter.scenario({
  "comments": [
    {
      "line": 34,
      "value": "# Scenario without Example keyowrd"
    }
  ],
  "line": 35,
  "name": "Free CRM login Test Scenario",
  "description": "",
  "id": "free-crm-login-feature;free-crm-login-test-scenario",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 37,
  "name": "user is allready on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 38,
  "name": "title of login page is Free CRM",
  "keyword": "When "
});
formatter.step({
  "line": 39,
  "name": "user enter username as \"soumya456\"",
  "keyword": "Then "
});
formatter.step({
  "line": 40,
  "name": "user enter password as \"$oumya@12\"",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "click on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 42,
  "name": "user on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 43,
  "name": "close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepdefinition.user_is_allready_on_login_page()"
});
formatter.result({
  "duration": 14198983890,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepdefinition.title_of_login_page_is_Free_CRM()"
});
formatter.result({
  "duration": 13821762,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "soumya456",
      "offset": 24
    }
  ],
  "location": "LoginStepdefinition.user_enter_username(String)"
});
formatter.result({
  "duration": 932685369,
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
  "duration": 2074033932,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepdefinition.click_on_login_button()"
});
formatter.result({
  "duration": 12140792802,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepdefinition.user_on_home_page()"
});
formatter.result({
  "duration": 14761239,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepdefinition.close_the_browser()"
});
formatter.result({
  "duration": 681720748,
  "status": "passed"
});
});