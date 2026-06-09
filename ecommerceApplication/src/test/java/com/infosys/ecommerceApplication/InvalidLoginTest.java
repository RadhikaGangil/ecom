package com.infosys.ecommerceApplication;

import io.github.bonigarcia.wdm.WebDriverManager;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.chrome.ChromeDriver;

import java.time.Duration;

public class InvalidLoginTest {

    public static void main(String[] args) {

        System.out.println("Invalid Login Test Started...");

        WebDriverManager.chromedriver().setup();

        WebDriver driver = new ChromeDriver();

        driver.manage().window().maximize();

        driver.manage().timeouts()
                .implicitlyWait(Duration.ofSeconds(10));

        try {

            // Open Login Page
            driver.get("http://localhost:5173/login");

            System.out.println("Step 1 ✅ Login Page Opened");

            // Wrong Email
            driver.findElement(
                    By.name("email"))
                    .sendKeys("wrong@gmail.com");

            System.out.println("Step 2 ✅ Wrong Email Entered");

            // Wrong Password
            driver.findElement(
                    By.name("password"))
                    .sendKeys("wrong123");

            System.out.println("Step 3 ✅ Wrong Password Entered");

            // Role
            driver.findElement(
                    By.name("role"))
                    .sendKeys("USER");

            System.out.println("Step 4 ✅ Role Selected");

            // Login Button
            WebElement loginButton =
                    driver.findElement(
                            By.cssSelector("button[type='submit']"));

            ((JavascriptExecutor) driver)
                    .executeScript(
                            "arguments[0].click();",
                            loginButton);

            System.out.println("Step 5 ✅ Login Button Clicked");

            Thread.sleep(5000);

            String currentUrl =
                    driver.getCurrentUrl();

            System.out.println(
                    "Current URL : " + currentUrl);

            // Verify Invalid Login
            if(currentUrl.contains("login")) {

                System.out.println(
                        "INVALID LOGIN TEST PASSED ✅");

            } else {

                System.out.println(
                        "INVALID LOGIN TEST FAILED ❌");
            }

            // Error Message Validation
            String pageSource =
                    driver.getPageSource();

            if(pageSource.contains("Invalid")
                    || pageSource.contains("USER NOT FOUND")
                    || pageSource.contains("PASSWORD")
                    || pageSource.contains("credentials")) {

                System.out.println(
                        "Error Message Displayed ✅");
            }

            System.out.println(
                    "T073 COMPLETED SUCCESSFULLY 🎉");

        }

        catch(Exception e){

            System.out.println(
                    "TEST FAILED ❌");

            e.printStackTrace();
        }

        finally {

            driver.quit();

            System.out.println(
                    "Browser Closed");
        }
    }
}