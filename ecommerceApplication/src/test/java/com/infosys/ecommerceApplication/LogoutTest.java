package com.infosys.ecommerceApplication;

import io.github.bonigarcia.wdm.WebDriverManager;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.chrome.ChromeDriver;

import java.time.Duration;

public class LogoutTest {

    public static void main(String[] args) {

        System.out.println("Logout Test Started...");

        WebDriverManager.chromedriver().setup();

        WebDriver driver = new ChromeDriver();

        driver.manage().window().maximize();

        driver.manage().timeouts()
                .implicitlyWait(Duration.ofSeconds(10));

        try {

            // LOGIN FIRST

            driver.get("http://localhost:5173/login");

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

            System.out.println(
                    "Login Successful ✅");

            // LOGOUT

            WebElement logoutButton =
                    driver.findElement(
                            By.xpath(
                                    "//button[contains(text(),'Logout')]"
                            ));

            ((JavascriptExecutor) driver)
                    .executeScript(
                            "arguments[0].click();",
                            logoutButton);

            Thread.sleep(3000);

            System.out.println(
                    "Logout Button Clicked ✅");

            String currentUrl =
                    driver.getCurrentUrl();

            System.out.println(
                    "Current URL : " + currentUrl);

            if(currentUrl.contains("login")) {

                System.out.println(
                        "LOGOUT SUCCESSFUL ✅");

            } else {

                System.out.println(
                        "LOGOUT FAILED ❌");
            }

            System.out.println(
                    "T076 Completed Successfully 🎉");

        }

        catch(Exception e){

            System.out.println(
                    "Logout Test Failed ❌");

            e.printStackTrace();
        }

        finally {

            driver.quit();

            System.out.println(
                    "Browser Closed");
        }
    }
}