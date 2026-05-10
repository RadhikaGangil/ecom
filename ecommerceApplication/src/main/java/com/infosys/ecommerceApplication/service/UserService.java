package com.infosys.ecommerceApplication.service;

import com.infosys.ecommerceApplication.dto.LoginRequest;

import com.infosys.ecommerceApplication.dto.LoginResponse;

import com.infosys.ecommerceApplication.dto.RegisterRequest;

public interface UserService {

    String registerUser(
            RegisterRequest request);

    LoginResponse loginUser(
            LoginRequest request);
}