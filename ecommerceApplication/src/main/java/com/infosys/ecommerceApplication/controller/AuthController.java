package com.infosys.ecommerceApplication.controller;

import com.infosys.ecommerceApplication.dto.LoginRequest;
import com.infosys.ecommerceApplication.dto.LoginResponse;
import com.infosys.ecommerceApplication.dto.RegisterRequest;

import com.infosys.ecommerceApplication.service.UserService;

import jakarta.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")

@CrossOrigin(origins = {
        "http://localhost:5173",
        "http://127.0.0.1:5173"
})

public class AuthController {

    @Autowired
    private UserService userService;

    // REGISTER API
    @PostMapping("/register")
    public String registerUser(
            @Valid @RequestBody RegisterRequest request) {

        return userService.registerUser(request);
    }

    // LOGIN API
    @PostMapping("/login")
    public LoginResponse loginUser(
            @Valid @RequestBody LoginRequest request) {

        return userService.loginUser(request);
    }
}
