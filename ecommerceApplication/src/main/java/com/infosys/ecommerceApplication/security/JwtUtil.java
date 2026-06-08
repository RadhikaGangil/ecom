package com.infosys.ecommerceApplication.security;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;

import org.springframework.stereotype.Component;

import javax.crypto.SecretKey;
import java.util.Date;

@Component
public class JwtUtil {

    // 256+ BIT SECRET KEY
    private final SecretKey SECRET_KEY =
            Keys.hmacShaKeyFor(
                    "thisIsASecretKeyForJwtAuthentication256BitsLong123456789"
                            .getBytes()
            );

    // GENERATE TOKEN
    public String generateToken(String email) {

        return Jwts.builder()

                .setSubject(email)

                .setIssuedAt(
                        new Date()
                )

                .setExpiration(
                        new Date(
                                System.currentTimeMillis()
                                        + 1000 * 60 * 60
                        )
                )

                .signWith(
                        SECRET_KEY,
                        SignatureAlgorithm.HS256
                )

                .compact();
    }

    // EXTRACT EMAIL
    public String extractEmail(String token) {

        Claims claims = Jwts.parser()

                .setSigningKey(
                        SECRET_KEY
                )

                .parseClaimsJws(
                        token
                )

                .getBody();

        return claims.getSubject();
    }

    // VALIDATE TOKEN
    public boolean validateToken(String token) {

        try {

            Jwts.parser()

                    .setSigningKey(
                            SECRET_KEY
                    )

                    .parseClaimsJws(
                            token
                    );

            return true;

        } catch (Exception e) {

            return false;
        }
    }
}