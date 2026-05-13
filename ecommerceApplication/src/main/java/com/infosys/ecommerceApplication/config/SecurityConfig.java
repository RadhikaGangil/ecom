package com.infosys.ecommerceApplication.config;

import com.infosys.ecommerceApplication.security.JwtFilter;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import org.springframework.security.authentication.AuthenticationManager;

import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;

import org.springframework.security.config.annotation.web.builders.HttpSecurity;

import org.springframework.security.config.http.SessionCreationPolicy;

import org.springframework.security.web.SecurityFilterChain;

import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import org.springframework.web.cors.CorsConfiguration;

import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import org.springframework.web.filter.CorsFilter;

import java.util.List;

@Configuration
public class SecurityConfig {

    @Autowired
    private JwtFilter jwtFilter;

    // AUTHENTICATION MANAGER
    @Bean
    public AuthenticationManager authenticationManager(

            AuthenticationConfiguration config
    ) throws Exception {

        return config.getAuthenticationManager();
    }

    // SECURITY FILTER CHAIN
    @Bean
    public SecurityFilterChain securityFilterChain(

            HttpSecurity http
    ) throws Exception {

        http

            // ENABLE CORS
            .cors(cors -> {})

            // DISABLE CSRF
            .csrf(csrf -> csrf.disable())

            // SESSION MANAGEMENT
            .sessionManagement(session ->

                session.sessionCreationPolicy(

                    SessionCreationPolicy.STATELESS
                )
            )

            // AUTHORIZE REQUESTS
            .authorizeHttpRequests(auth ->

                auth

                    // AUTH APIs
                    .requestMatchers(

                        "/api/auth/**"
                    )

                    .permitAll()

                    // PRODUCT APIs
                    .requestMatchers(

                        "/api/products/**"
                    )

                    .permitAll()

                    // CART APIs
                    .requestMatchers(

                        "/api/cart/**"
                    )

                    .permitAll()

                    // ORDER APIs
                    .requestMatchers(

                        "/api/orders/**"
                    )

                    .permitAll()

                    // ANY OTHER REQUEST
                    .anyRequest()

                    .authenticated()
            )

            // JWT FILTER
            .addFilterBefore(

                jwtFilter,

                UsernamePasswordAuthenticationFilter.class
            );

        return http.build();
    }

    // CORS CONFIGURATION
    @Bean
    public CorsFilter corsFilter() {

        CorsConfiguration configuration =

                new CorsConfiguration();

        configuration.setAllowCredentials(true);

        configuration.setAllowedOrigins(

                List.of(

                        "http://localhost:5173"
                )
        );

        configuration.setAllowedHeaders(

                List.of("*")
        );

        configuration.setAllowedMethods(

                List.of("*")
        );

        UrlBasedCorsConfigurationSource source =

                new UrlBasedCorsConfigurationSource();

        source.registerCorsConfiguration(

                "/**",

                configuration
        );

        return new CorsFilter(source);
    }
}