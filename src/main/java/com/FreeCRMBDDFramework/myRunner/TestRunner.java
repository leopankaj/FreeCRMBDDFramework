package com.FreeCRMBDDFramework.myRunner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features = "D:/workSpace_CucumberFramework/FreeCRMBDDFramework/src/main/java/com/FreeCRMBDDFramework/features/login.feature",// path of the feature file
glue={"com.FreeCRMBDDFramework.stepDefinitions"},//path of the step definition file
format = {"pretty","html:test-output" , "json:json_output/cucumber.json" , "junit:junit_xml/cucumber.xml"}, //to generate different types of reporting
dryRun = false, // verify one to one mapping with feature file  with step definition file
monochrome = true, // Generate prety console
strict = true // It will check any step is not defined in step definition file
)
public class TestRunner {

}
