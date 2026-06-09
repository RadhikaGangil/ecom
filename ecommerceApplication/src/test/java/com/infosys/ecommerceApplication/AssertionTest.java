package com.infosys.ecommerceApplication;

import io.github.bonigarcia.wdm.WebDriverManager;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.chrome.ChromeDriver;

import org.testng.Assert;

import java.time.Duration;

public class AssertionTest {

    public static void main(String[] args) {

        System.out.println("Assertion Test Started...");

        WebDriverManager.chromedriver().setup();

        WebDriver driver = new ChromeDriver();

        driver.manage().window().maximize();

        driver.manage().timeouts()
                .implicitlyWait(Duration.ofSeconds(10));

        try {

            driver.get("http://localhost:5173/login");

            System.out.println("Login Page Opened ✅");

            driver.findElement(
                    By.name("email"))
                    .sendKeys(
                            "radhikagangil76@gmail.com"
                    );

            driver.findElement(
                    By.name("password"))
                    .sendKeys(
                            "Radhika@123"
                    );

            driver.findElement(
                    By.name("role"))
                    .sendKeys("USER");

            WebElement loginButton =
                    driver.findElement(
                            By.cssSelector(
                                    "button[type='submit']"));

            ((JavascriptExecutor) driver)
                    .executeScript(
                            "arguments[0].click();",
                            loginButton);

            Thread.sleep(5000);

            String currentUrl =
                    driver.getCurrentUrl();

            System.out.println(
                    "Current URL : " + currentUrl);

            // Assertion
            Assert.assertTrue(
                    currentUrl.contains("home"),
                    "User not redirected to Home Page"
            );

            System.out.println(
                    "Assertion Passed ✅");

            System.out.println(
                    "T075 Completed Successfully 🎉");

        }

        catch(Exception e){

            System.out.println(
                    "Assertion Failed ❌");

            e.printStackTrace();
        }

        finally {

            driver.quit();

            System.out.println(
                    "Browser Closed");
        }
    }
}