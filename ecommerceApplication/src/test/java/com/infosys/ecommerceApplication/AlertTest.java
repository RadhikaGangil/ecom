package com.infosys.ecommerceApplication;

import io.github.bonigarcia.wdm.WebDriverManager;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import java.time.Duration;

public class AlertTest {

    public static void main(String[] args) {

        WebDriverManager.chromedriver().setup();

        WebDriver driver = new ChromeDriver();

        driver.manage().window().maximize();

        driver.manage().timeouts()
                .implicitlyWait(Duration.ofSeconds(10));

        try {

            // Open Login Page
            driver.get("http://localhost:5173/login");

            System.out.println(
                    "Login Page Opened"
            );

            // Invalid Email
            driver.findElement(
                    By.cssSelector(
                            "input[type='email']"
                    )
            ).sendKeys("wrong@gmail.com");

            // Invalid Password
            driver.findElement(
                    By.cssSelector(
                            "input[type='password']"
                    )
            ).sendKeys("wrong123");

            // Click Login
            driver.findElement(
                    By.tagName("button")
            ).click();

            Thread.sleep(3000);

            // Check Error Message in Page Source
            String pageContent =
                    driver.getPageSource();

            if(pageContent.contains("Invalid")
                    || pageContent.contains("Error")
                    || pageContent.contains("Credentials")) {

                System.out.println(
                        "Error Message Popup Handled ✅"
                );

            } else {

                System.out.println(
                        "No Error Popup Found ⚠"
                );
            }

            System.out.println(
                    "T069 - Handle Alerts & Popups Completed ✅"
            );

        }

        catch(Exception e) {

            System.out.println(
                    "Alert Test Failed ❌"
            );

            e.printStackTrace();
        }

        finally {

            driver.quit();
        }
    }
}