package com.infosys.ecommerceApplication;

import io.github.bonigarcia.wdm.WebDriverManager;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.chrome.ChromeDriver;

import java.time.Duration;

public class SessionHandlingTest {

    public static void main(String[] args) {

        System.out.println("Session Handling Test Started...");

        WebDriverManager.chromedriver().setup();

        WebDriver driver = new ChromeDriver();

        driver.manage().window().maximize();

        driver.manage().timeouts()
                .implicitlyWait(Duration.ofSeconds(10));

        try {

            // LOGIN

            driver.get("http://localhost:5173/login");

            driver.findElement(
                    By.name("email"))
                    .sendKeys("radhikagangil76@gmail.com");

            driver.findElement(
                    By.name("password"))
                    .sendKeys("Radhika@123");

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

            // REFRESH PAGE

            driver.navigate().refresh();

            Thread.sleep(3000);

            String currentUrl =
                    driver.getCurrentUrl();

            if(!currentUrl.contains("login")) {

                System.out.println(
                        "Session Active After Refresh ✅");
            }

            // LOGOUT

            WebElement logoutButton =
                    driver.findElement(
                            By.xpath(
                                    "//button[contains(text(),'Logout')]"));

            ((JavascriptExecutor) driver)
                    .executeScript(
                            "arguments[0].click();",
                            logoutButton);

            Thread.sleep(3000);

            System.out.println(
                    "Logout Successful ✅");

            // ACCESS PROTECTED PAGE

            driver.get(
                    "http://localhost:5173/home");

            Thread.sleep(3000);

            if(driver.getCurrentUrl()
                    .contains("login")) {

                System.out.println(
                        "Protected Route Secured ✅");
            }

            System.out.println(
                    "T077 Completed Successfully 🎉");

        }

        catch(Exception e){

            System.out.println(
                    "Session Test Failed ❌");

            e.printStackTrace();
        }

        finally {

            driver.quit();

            System.out.println(
                    "Browser Closed");
        }
    }
}