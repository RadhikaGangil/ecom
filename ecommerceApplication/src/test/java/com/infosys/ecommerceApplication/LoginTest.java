package com.infosys.ecommerceApplication;

import io.github.bonigarcia.wdm.WebDriverManager;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class LoginTest {

    public static void main(String[] args) throws InterruptedException {

        WebDriverManager.chromedriver().setup();

        WebDriver driver = new ChromeDriver();

        driver.manage().window().maximize();

        driver.get("http://localhost:5173/login");

        Thread.sleep(2000);

        driver.findElement(
                By.cssSelector("input[type='email']")
        ).sendKeys("your_email@gmail.com");

        driver.findElement(
                By.cssSelector("input[type='password']")
        ).sendKeys("your_password");

        driver.findElement(
                By.tagName("button")
        ).click();

        Thread.sleep(3000);

        System.out.println(
                "Current URL : " +
                driver.getCurrentUrl()
        );

        if(!driver.getCurrentUrl().contains("login")) {

            System.out.println(
                    "LOGIN SUCCESSFUL ✅"
            );

        } else {

            System.out.println(
                    "LOGIN FAILED ❌"
            );
        }

        driver.quit();
    }
}