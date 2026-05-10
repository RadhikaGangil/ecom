package com.infosys.ecommerceApplication.dto;

public class LoginResponse {

    private String token;

    private String role;

    // EMPTY CONSTRUCTOR
    public LoginResponse() {

    }

    // PARAMETERIZED CONSTRUCTOR
    public LoginResponse(
            String token,
            String role) {

        this.token = token;

        this.role = role;
    }

    // GET TOKEN
    public String getToken() {

        return token;
    }

    // SET TOKEN
    public void setToken(String token) {

        this.token = token;
    }

    // GET ROLE
    public String getRole() {

        return role;
    }

    // SET ROLE
    public void setRole(String role) {

        this.role = role;
    }
}