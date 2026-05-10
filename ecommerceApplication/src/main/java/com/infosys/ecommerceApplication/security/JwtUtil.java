// // package com.infosys.ecommerceApplication.security;

// // import io.jsonwebtoken.Claims;
// // import io.jsonwebtoken.Jwts;
// // import io.jsonwebtoken.SignatureAlgorithm;

// // import org.springframework.stereotype.Component;

// // import java.util.Date;

// // @Component
// // public class JwtUtil {

// //         // SECRET KEY
// //         private final String SECRET_KEY = "mysecretkeymysecretkeymysecretkey";

// //         // GENERATE TOKEN
// //         public String generateToken(
// //                         String email) {

// //                 return Jwts.builder()

// //                                 .setSubject(email)

// //                                 .setIssuedAt(
// //                                                 new Date())

// //                                 .setExpiration(

// //                                                 new Date(
// //                                                                 System.currentTimeMillis()
// //                                                                                 + 1000 * 60 * 60))

// //                                 .signWith(

// //                                                 SignatureAlgorithm.HS256,

// //                                                 SECRET_KEY)

// //                                 .compact();
// //         }

// //         // EXTRACT EMAIL
// //         public String extractEmail(
// //                         String token) {

// //                 Claims claims = Jwts.parser()

// //                                 .setSigningKey(
// //                                                 SECRET_KEY)

// //                                 .parseClaimsJws(
// //                                                 token)

// //                                 .getBody();

// //                 return claims.getSubject();
// //         }

// //         // VALIDATE TOKEN
// //         public boolean validateToken(
// //                         String token) {

// //                 try {

// //                         Jwts.parser()

// //                                         .setSigningKey(
// //                                                         SECRET_KEY)

// //                                         .parseClaimsJws(
// //                                                         token);

// //                         return true;

// //                 } catch (Exception e) {

// //                         return false;
// //                 }
// //         }
// // }

// package com.infosys.ecommerceApplication.security;

// import io.jsonwebtoken.Jwts;

// import io.jsonwebtoken.SignatureAlgorithm;

// import org.springframework.stereotype.Component;

// import java.util.Date;

// @Component
// public class JwtUtil {

//     // SECRET KEY
//     private final String SECRET_KEY =
//             "mysecretkeymysecretkeymysecretkey";

//     // GENERATE TOKEN
//     public String generateToken(
//             String email
//     ) {

//         return Jwts.builder()

//                 .setSubject(email)

//                 .setIssuedAt(
//                         new Date()
//                 )

//                 .setExpiration(

//                         new Date(
//                                 System.currentTimeMillis()
//                                         + 1000 * 60 * 60
//                         )
//                 )

//                 .signWith(

//                         SignatureAlgorithm.HS256,

//                         SECRET_KEY
//                 )

//                 .compact();
//     }
// }
package com.infosys.ecommerceApplication.security;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

import org.springframework.stereotype.Component;

import java.util.Date;

@Component
public class JwtUtil {

        // SECRET KEY
        private final String SECRET_KEY = "mysecretkeymysecretkeymysecretkey";

        // GENERATE TOKEN
        public String generateToken(
                        String email) {

                return Jwts.builder()

                                .setSubject(email)

                                .setIssuedAt(
                                                new Date())

                                .setExpiration(

                                                new Date(
                                                                System.currentTimeMillis()
                                                                                + 1000 * 60 * 60))

                                .signWith(

                                                SignatureAlgorithm.HS256,

                                                SECRET_KEY)

                                .compact();
        }

        // EXTRACT EMAIL
        public String extractEmail(
                        String token) {

                Claims claims = Jwts.parser()

                                .setSigningKey(
                                                SECRET_KEY)

                                .parseClaimsJws(
                                                token)

                                .getBody();

                return claims.getSubject();
        }

        // VALIDATE TOKEN
        public boolean validateToken(
                        String token) {

                try {

                        Jwts.parser()

                                        .setSigningKey(
                                                        SECRET_KEY)

                                        .parseClaimsJws(
                                                        token);

                        return true;

                } catch (Exception e) {

                        return false;
                }
        }
}