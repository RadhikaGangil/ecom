package com.infosys.ecommerceApplication;

import io.github.bonigarcia.wdm.WebDriverManager;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import java.time.Duration;

public class RegisterTest {

    public static void main(String[] args) {

        WebDriverManager.chromedriver().setup();

        WebDriver driver = new ChromeDriver();

        driver.manage().window().maximize();

        driver.manage().timeouts()
                .implicitlyWait(Duration.ofSeconds(10));

        try {

            // Open Register Page
            driver.get("http://localhost:5173/register");

            System.out.println("Register Page Opened");

            Thread.sleep(3000);

            // Name
            WebElement nameField =
                    driver.findElement(
                            By.name("name"));

            nameField.sendKeys(
                    "Radhika Gangil");

            System.out.println(
                    "Name Entered");

            // Email
            WebElement emailField =
                    driver.findElement(
                            By.name("email"));

            emailField.sendKeys(
                    "radhika"
                    + System.currentTimeMillis()
                    + "@gmail.com");

            System.out.println(
                    "Email Entered");

            // Password
            WebElement passwordField =
                    driver.findElement(
                            By.name("password"));

            passwordField.sendKeys(
                    "Radhika@123");

            System.out.println(
                    "Password Entered");

            // Role
            WebElement roleField =
                    driver.findElement(
                            By.name("role"));

            roleField.sendKeys(
                    "USER");

            System.out.println(
                    "Role Selected");

            Thread.sleep(2000);

            // Register Button
            WebElement registerButton =
                    driver.findElement(
                            By.cssSelector(
                                    "button[type='submit']"));

            registerButton.click();

            System.out.println(
                    "Register Button Clicked");

            Thread.sleep(5000);

            System.out.println(
                    "T070 Registration Flow Completed ✅");

        }

        catch (Exception e) {

            System.out.println(
                    "Registration Failed ❌");

            e.printStackTrace();
        }

        finally {

            driver.quit();
        }
    }
}