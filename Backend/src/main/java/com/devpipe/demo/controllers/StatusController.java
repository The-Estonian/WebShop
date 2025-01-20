package com.devpipe.demo.controllers;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import jakarta.servlet.http.Cookie;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;

import com.devpipe.demo.util.JwtUtil;

import jakarta.servlet.http.HttpServletRequest;

@RestController
@RequestMapping("/api/status")
public class StatusController {

    @Autowired
    private JwtUtil jwtUtil;

    @GetMapping
    public Map<String, String> handleStatus(HttpServletRequest request) {
        String token = null;
        Cookie[] cookies = request.getCookies();
        if (cookies != null) {
            for (Cookie cookie : cookies) {
                if ("devpipe_token".equals(cookie.getName())) {
                    token = cookie.getValue();
                    break;
                }
            }
        }
        if (token != null && jwtUtil.validateToken(token) != null) {
            String username = jwtUtil.validateToken(token); // Get the username (subject)
            // send back more userinfo
            return Map.of("auth", "success", "username", username);
        } else {
            return Map.of("auth", "failed");
        }
    }
}
