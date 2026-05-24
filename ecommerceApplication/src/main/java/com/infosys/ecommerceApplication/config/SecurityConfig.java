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

    // AUTH MANAGER
    @Bean
    public AuthenticationManager authenticationManager(

            AuthenticationConfiguration config
    ) throws Exception {

        return config.getAuthenticationManager();
    }

    // SECURITY FILTER
    @Bean
    public SecurityFilterChain securityFilterChain(

            HttpSecurity http
    ) throws Exception {

        http

            // CORS
            .cors(cors -> {})

            // CSRF OFF
            .csrf(csrf -> csrf.disable())

            // STATELESS
            .sessionManagement(session ->

                session.sessionCreationPolicy(

                    SessionCreationPolicy.STATELESS
                )
            )

            // AUTHORIZATION
            .authorizeHttpRequests(auth ->

                auth

                    // AUTH
                    .requestMatchers(

                        "/api/auth/**"
                    )

                    .permitAll()

                    // PRODUCTS
                    .requestMatchers(

                        "/api/products/**"
                    )

                    .permitAll()

                    // CART
                    .requestMatchers(

                        "/api/cart/**"
                    )

                    .permitAll()

                    // ORDERS
                    .requestMatchers(

                        "/api/orders/**"
                    )

                    .permitAll()

                    // USERS
                    .requestMatchers(

                        "/api/users/**"
                    )

                    .permitAll()

                    // ANY OTHER
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

    // CORS CONFIG
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