package com.infosys.ecommerceApplication.controller;

import com.infosys.ecommerceApplication.dto.UpdateProfileRequest;
import com.infosys.ecommerceApplication.dto.ChangePasswordRequest;

import com.infosys.ecommerceApplication.entity.User;

import com.infosys.ecommerceApplication.repository.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.security.crypto.password.PasswordEncoder;

import org.springframework.web.bind.annotation.*;

@RestController

@RequestMapping("/api/users")

@CrossOrigin(origins = "http://localhost:5173")

public class UserController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    // UPDATE PROFILE
    @PutMapping("/{id}")
    public User updateProfile(

            @PathVariable Long id,

            @RequestBody UpdateProfileRequest request
    ) {

        User user =

                userRepository.findById(id)

                        .orElse(null);

        if(user == null) {

            return null;
        }

        // UPDATE NAME
        if(request.getName() != null) {

            user.setName(

                    request.getName()
            );
        }

        // UPDATE EMAIL
        if(request.getEmail() != null) {

            user.setEmail(

                    request.getEmail()
            );
        }

        userRepository.save(user);

        return user;
    }

    // CHANGE PASSWORD
    @PutMapping("/{id}/password")
    public String changePassword(

            @PathVariable Long id,

            @RequestBody ChangePasswordRequest request
    ) {

        User user =

                userRepository.findById(id)

                        .orElse(null);

        if(user == null) {

            return "User Not Found";
        }

        // VERIFY OLD PASSWORD
        if(

            !passwordEncoder.matches(

                request.getOldPassword(),

                user.getPassword()
            )
        ) {

            return "Old Password Incorrect";
        }

        // UPDATE PASSWORD
        user.setPassword(

                passwordEncoder.encode(

                        request.getNewPassword()
                )
        );

        userRepository.save(user);

        return "Password Updated Successfully";
    }
}