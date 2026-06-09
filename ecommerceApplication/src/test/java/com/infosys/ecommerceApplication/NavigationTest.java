package com.infosys.ecommerceApplication;

import io.github.bonigarcia.wdm.WebDriverManager;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.time.Duration;

public class NavigationTest {

    public static void main(String[] args) {

        WebDriverManager.chromedriver().setup();

        WebDriver driver = new ChromeDriver();

        driver.manage().window().maximize();

        // T068 - Implicit Wait
        driver.manage().timeouts()
                .implicitlyWait(Duration.ofSeconds(10));

        try {

            // Home Page Open
            driver.get("http://localhost:5173");

            System.out.println("Home Page Opened");

            System.out.println(
                    "Page Title : "
                            + driver.getTitle()
            );

            System.out.println(
                    "Current URL : "
                            + driver.getCurrentUrl()
            );

            // Navigate to Login Page
            driver.get("http://localhost:5173/login");

            System.out.println(
                    "Login Page Opened"
            );

            // T068 - Explicit Wait
            WebDriverWait wait =
                    new WebDriverWait(
                            driver,
                            Duration.ofSeconds(10)
                    );

            WebElement loginButton =
                    wait.until(
                            ExpectedConditions
                                    .elementToBeClickable(
                                            By.tagName("button")
                                    )
                    );

            System.out.println(
                    "Explicit Wait Applied ✅"
            );

            // Email Field Check
            WebElement emailField =
                    driver.findElement(
                            By.cssSelector(
                                    "input[type='email']"
                            )
                    );

            if (emailField.isDisplayed()) {

                System.out.println(
                        "Email Field Found ✅"
                );
            }

            // Password Field Check
            WebElement passwordField =
                    driver.findElement(
                            By.cssSelector(
                                    "input[type='password']"
                            )
                    );

            if (passwordField.isDisplayed()) {

                System.out.println(
                        "Password Field Found ✅"
                );
            }

            if (loginButton.isDisplayed()) {

                System.out.println(
                        "Login Button Found ✅"
                );
            }

            System.out.println(
                    "T068 - Implement Waits Completed ✅"
            );

        }

        catch (Exception e) {

            System.out.println(
                    "Navigation Test Failed ❌"
            );

            e.printStackTrace();
        }

        finally {

            driver.quit();
        }
    }
}