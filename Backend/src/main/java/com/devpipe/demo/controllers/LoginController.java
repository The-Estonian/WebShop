package com.devpipe.demo.controllers;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.devpipe.demo.models.User;
import com.devpipe.demo.services.UserService;
import com.devpipe.demo.util.JwtUtil;
import com.devpipe.demo.util.PasswordUtil;

import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletResponse;

@RestController
@RequestMapping("/api/login")
public class LoginController {
    private final UserService userService;
    private JwtUtil jwtUtil;

    @Autowired
    public LoginController(UserService userService, JwtUtil jwtUtil) {
        this.userService = userService;
        this.jwtUtil = jwtUtil;
    }

    @PostMapping
    public Map<String, String> handleLogin(@RequestBody Map<String, String> credentials, HttpServletResponse response) {

        User user = userService.getUserByEmail((credentials.get("email")));
        if (user == null) {
            return Map.of("login", "fail", "message", "User not found");
        }

        if (PasswordUtil.matchPassword(credentials.get("password"),
                user.getPassword())) {
            System.out.println("ACCESS GRANTED!");
            String token = jwtUtil.generateToken(credentials.get("email"));

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
            return Map.of("login", "fail", "message", "Invalid email or password");
        }
    }

}
