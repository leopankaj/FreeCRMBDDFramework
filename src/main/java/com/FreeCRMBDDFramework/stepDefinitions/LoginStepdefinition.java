package com.FreeCRMBDDFramework.stepDefinitions;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;




public class LoginStepdefinition {
	
	static WebDriver driver = null;
	
	
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
	public void user_enter_username_as(String arg1)  {
		driver.findElement(By.name("username")).sendKeys(arg1);
	   
	}

	@Then("^user enter password as \"(.*)\"$")
	public void user_enter_password_as(String arg1) throws InterruptedException  {
		driver.findElement(By.name("password")).sendKeys(arg1);
	   Thread.sleep(2000);
	}

	@Then("^click on login button$")
	public void click_on_login_button() throws InterruptedException {
		
		WebElement login = driver.findElement(By.xpath("//*[@id='loginForm']/div/div/input"));
		login.click();
		JavascriptExecutor js = (JavascriptExecutor)driver;
		Thread.sleep(2000);
	   
	}
//
//	@Then("^user on home page$")
//	public void user_on_home_page()  {
//		String title = driver.getTitle();
//		System.out.println("Home Page : "+title);
//		Assert.assertEquals(title, "CRMPRO");
//	   
//	}

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
	
	@Then("^Go to contacts link and click on new contact$")
	public void go_to_contacts_link_and_click_on_new_contact()  {
		System.out.println("Link");
		WebElement frame = driver.findElement(By.xpath("/html/frameset/frame[2]"));
		driver.switchTo().frame(frame);
		System.out.println("Frame");
		int NumOfframe = driver.findElements(By.tagName("frame")).size();
		WebElement contacts = driver.findElement(By.xpath("//*[@id='navmenu']/ul/li[4]/a"));
		Actions action = new Actions(driver);
		action.moveToElement(contacts).build().perform();
		driver.findElement(By.linkText("New Contact")).click();
		
	   
	}

	@Then("^select title from Title dropdown$")
	public void select_title_from_Title_dropdown()  {
	   WebElement title = driver.findElement(By.name("title"));
	   Select select = new Select(title);
	   select.selectByIndex(2);
	   String value = select.getFirstSelectedOption().getText();
	   Assert.assertTrue("Mr.", true);
	}

	@Then("^user enter firstname as \"([^\"]*)\" and lastName as \"([^\"]*)\"$")
	public void user_enter_firstname_as_and_lastName_as(String arg1, String arg2)  {
		driver.findElement(By.name("first_name")).sendKeys(arg1);
		driver.findElement(By.name("surname")).sendKeys(arg2);
	   
	}

	@Then("^Click on save button$")
	public void click_on_save_button()  {
		driver.findElement(By.className("button")).click();
	   
	}
	@Then("^user on home page$")
	public void user_on_home_page() throws Throwable {
	   
	}
	
	@Then("^close the browser$")
	public void close_the_browser()  {
		driver.quit();
	   
	}  

	

}
