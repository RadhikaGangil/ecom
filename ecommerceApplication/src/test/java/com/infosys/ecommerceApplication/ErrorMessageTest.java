package com.infosys.ecommerceApplication;

import io.github.bonigarcia.wdm.WebDriverManager;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.chrome.ChromeDriver;

import java.time.Duration;

public class ErrorMessageTest {

    public static void main(String[] args) {

        System.out.println("Error Message Test Started...");

        WebDriverManager.chromedriver().setup();

        WebDriver driver = new ChromeDriver();

        driver.manage().window().maximize();

        driver.manage().timeouts()
                .implicitlyWait(Duration.ofSeconds(10));

        try {

            driver.get("http://localhost:5173/login");

            System.out.println("Login Page Opened ✅");

            // Wrong Credentials

            driver.findElement(
                    By.name("email"))
                    .sendKeys("wrong@gmail.com");

            driver.findElement(
                    By.name("password"))
                    .sendKeys("wrong123");

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

            String pageSource =
                    driver.getPageSource();

            if(pageSource.contains("Invalid")
                    || pageSource.contains("credentials")
                    || pageSource.contains("USER NOT FOUND")) {

                System.out.println(
                        "Error Message Verified ✅");

            } else {

                System.out.println(
                        "Error Message Not Found ❌");
            }

            System.out.println(
                    "T074 Completed Successfully 🎉");

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