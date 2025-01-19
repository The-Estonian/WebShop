package com.devpipe.demo.controllers;

import java.util.Map;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.devpipe.demo.util.PasswordUtil;

@RestController
@RequestMapping("/api/login")
public class LoginController {

    @PostMapping
    public Map<String, String> handleLogin(@RequestBody Map<String, String> credentials) {
        // System.out.println("Username: " + credentials.get("login"));
        // System.out.println("Password: " + credentials.get("password"));

        String rawPassword = "yourpassword";
        String hashedPassword = PasswordUtil.hashPassword(credentials.get("password"));

        if (credentials.get("login").equals(
                "test@example.com") && PasswordUtil.matchPassword(rawPassword, hashedPassword)) {
            return Map.of("login", "success");
        } else {
            return Map.of("login", "fail");
        }
    }

}
