package com.infosys.ecommerceApplication.dto;

public class LoginRequest {

    private String email;

    private String password;

    private String role;

    // GET EMAIL
    public String getEmail() {

        return email;
    }

    public void setEmail(String email) {

        this.email = email;
    }

    // GET PASSWORD
    public String getPassword() {

        return password;
    }

    public void setPassword(String password) {

        this.password = password;
    }

    // GET ROLE
    public String getRole() {

        return role;
    }

    public void setRole(String role) {

        this.role = role;
    }
}