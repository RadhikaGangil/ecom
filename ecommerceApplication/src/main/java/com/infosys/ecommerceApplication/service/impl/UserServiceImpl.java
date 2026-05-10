package com.infosys.ecommerceApplication.service.impl;

import com.infosys.ecommerceApplication.dto.LoginRequest;
import com.infosys.ecommerceApplication.dto.LoginResponse;
import com.infosys.ecommerceApplication.dto.RegisterRequest;

import com.infosys.ecommerceApplication.entity.Role;
import com.infosys.ecommerceApplication.entity.User;

import com.infosys.ecommerceApplication.repository.UserRepository;

import com.infosys.ecommerceApplication.security.JwtUtil;

import com.infosys.ecommerceApplication.service.UserService;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.security.crypto.password.PasswordEncoder;

import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl
        implements UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private JwtUtil jwtUtil;

    // REGISTER USER
    @Override
    public String registerUser(
            RegisterRequest request) {

        User user = new User();

        // NAME
        user.setName(
                request.getName());

        // EMAIL
        user.setEmail(
                request.getEmail());

        // PASSWORD ENCRYPTION
        user.setPassword(

                passwordEncoder.encode(
                        request.getPassword()));

        // ROLE
        user.setRole(
                Role.USER);

        // SAVE USER
        userRepository.save(user);

        return "User Registered Successfully";
    }

    // LOGIN USER
    @Override
    public LoginResponse loginUser(
            LoginRequest request) {

        User user = userRepository
                .findByEmail(
                        request.getEmail())
                .orElse(null);

        // USER NOT FOUND
        if (user == null) {

            return new LoginResponse(
                    null,
                    "USER NOT FOUND");
        }

        // PASSWORD CHECK
        if (!passwordEncoder.matches(

                request.getPassword(),

                user.getPassword())) {

            return new LoginResponse(
                    null,
                    "INVALID PASSWORD");
        }

        // SUCCESS
        return new LoginResponse(

                "LOGIN_SUCCESS",

                user.getRole().name());
    }
}