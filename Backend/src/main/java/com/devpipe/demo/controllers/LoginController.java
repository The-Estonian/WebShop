package com.devpipe.demo.controllers;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.devpipe.demo.util.JwtUtil;
import com.devpipe.demo.util.PasswordUtil;

import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletResponse;

@RestController
@RequestMapping("/api/login")
public class LoginController {

    @Autowired
    private JwtUtil jwtUtil;

    @PostMapping
    public Map<String, String> handleLogin(@RequestBody Map<String, String> credentials, HttpServletResponse response) {

        String rawPassword = "yourpassword";
        String hashedPassword = PasswordUtil.hashPassword(credentials.get("password"));

        if (credentials.get("login").equals(
                "test@example.com") && PasswordUtil.matchPassword(rawPassword, hashedPassword)) {

            String token = jwtUtil.generateToken(credentials.get("login"));

            Cookie cookie = new Cookie("devpipe_token", token);
            cookie.setHttpOnly(true);
            cookie.setSecure(false); // set to true in prod for https
            cookie.setPath("/");
            cookie.setMaxAge(24 * 60 * 60);
            response.addHeader("Set-Cookie", cookie.getName() + "=" + cookie.getValue() +
                    "; HttpOnly; Secure=" + cookie.getSecure() +
                    "; Path=" + cookie.getPath() +
                    "; Max-Age=" + cookie.getMaxAge() +
                    "; SameSite=Lax");

            return Map.of("login", "success");
        } else {
            return Map.of("login", "fail");
        }
    }

}
