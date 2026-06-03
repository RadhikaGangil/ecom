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

        // EMAIL EXISTS CHECK
        if (userRepository.findByEmail(
                request.getEmail()).isPresent()) {

            return "Email Already Registered";
        }

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
        Role role = Role.USER;

        if (request.getRole() != null
                && !request.getRole().isBlank()) {

            try {

                role = Role.valueOf(
                        request.getRole().toUpperCase());

            } catch (IllegalArgumentException ex) {

                return "Invalid Role";
            }
        }

        user.setRole(role);

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

        if (request.getRole() != null
                && !request.getRole().isBlank()
                && !user.getRole().name().equalsIgnoreCase(
                        request.getRole())) {

            return new LoginResponse(
                    null,
                    "ROLE DOES NOT MATCH");
        }

        // GENERATE JWT TOKEN
        String token = jwtUtil.generateToken(
                user.getEmail());

        // SUCCESS
        return new LoginResponse(

                token,

                user.getRole().name());
    }
}
