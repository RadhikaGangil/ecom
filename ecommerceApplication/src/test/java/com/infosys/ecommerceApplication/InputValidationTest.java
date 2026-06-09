package com.infosys.ecommerceApplication;

import io.github.bonigarcia.wdm.WebDriverManager;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import java.time.Duration;

public class InputValidationTest {

    public static void main(String[] args) {

        WebDriverManager.chromedriver().setup();

        WebDriver driver = new ChromeDriver();

        driver.manage().window().maximize();

        driver.manage().timeouts()
                .implicitlyWait(Duration.ofSeconds(10));

        try {

            driver.get("http://localhost:5173/register");

            System.out.println("Register Page Opened ✅");

            // Empty Form Submit
            driver.findElement(
                    By.cssSelector("button[type='submit']")
            ).click();

            System.out.println(
                    "Empty Field Validation Tested ✅"
            );

            Thread.sleep(2000);

            // Invalid Email Test
            driver.findElement(
                    By.name("name")
            ).sendKeys("Radhika");

            driver.findElement(
                    By.name("email")
            ).sendKeys("radhikagangil76@gmail.com");

            driver.findElement(
                    By.name("password")
            ).sendKeys("Radhika@123");

            driver.findElement(
                    By.cssSelector("button[type='submit']")
            ).click();

            System.out.println(
                    "Invalid Email Validation Tested ✅"
            );

            Thread.sleep(2000);

            System.out.println(
                    "T071 Completed Successfully 🎉"
            );

        }

        catch(Exception e) {

            System.out.println(
                    "Validation Test Failed ❌"
            );

            e.printStackTrace();
        }

        finally {

            driver.quit();
        }
    }
}