package com.FreeCRMBDDFramework.stepDefinitions;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import org.openqa.selenium.support.ui.WebDriverWait;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;




public class LoginStepdefinition {
	
	WebDriver driver;
	
	
	@Given("^user is allready on login page$")
	public void user_is_allready_on_login_page(){
		System.setProperty("webdriver.chrome.driver", "D:\\workSpace_CucumberFramework\\FreeCRMBDDFramework\\src\\main\\java\\com\\FreeCRMBDDFramework\\drivers\\drivers\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS);
		driver.get("https://www.freecrm.com/");
		System.out.println(" Title of the page : "+driver.getTitle());
		
	}
	
	@When("^title of login page is Free CRM$")
	public void title_of_login_page_is_Free_CRM() {
	 String title = driver.getTitle();
	 System.out.println("Title of login page : "+title);
	 Assert.assertEquals(title, "#1 Free CRM software in the cloud for sales and service");
	}

	@Then("^user enter username as \"(.*)\"$")
	public void user_enter_username(String arg)  {
		driver.findElement(By.name("username")).sendKeys(arg);
	   
	}

	@Then("^user enter password as \"(.*)\"$")
	public void user_enter_password_as(String arg) throws InterruptedException  {
		driver.findElement(By.name("password")).sendKeys(arg);
	   Thread.sleep(2000);
	}

	@Then("^click on login button$")
	public void click_on_login_button() throws InterruptedException {
		
		WebElement login = driver.findElement(By.xpath("//*[@id='loginForm']/div/div/input"));
		login.click();
		JavascriptExecutor js = (JavascriptExecutor)driver;
		Thread.sleep(2000);
	   
	}

	@Then("^user on home page$")
	public void user_on_home_page()  {
		String title = driver.getTitle();
		System.out.println("Home Page : "+title);
		Assert.assertEquals(title, "CRMPRO");
	   
	}

//	@Then("^click on logout$")
//	public void click_on_logout() throws InterruptedException  {
//		
//		WebDriverWait wait = new WebDriverWait(driver, 10);
//		driver.findElement(By.xpath("//*[@href='https://www.freecrm.com/index.cfm?logout=1']/i")).click();
//		
//	}

//	@Then("^verify login page$")
//	public void verify_login_page()  {
//		 String title = driver.getTitle();
//		 System.out.println("Title of login page : "+title);
//		 Assert.assertEquals(title, "#1 Free CRM software in the cloud for sales and service");
//	   
//	}

	@Then("^close the browser$")
	public void close_the_browser()  {
		driver.quit();
	   
	}  

	

}
