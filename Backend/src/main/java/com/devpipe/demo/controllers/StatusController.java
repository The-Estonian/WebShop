package com.devpipe.demo.controllers;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import com.devpipe.demo.util.JwtUtil;

import jakarta.servlet.http.HttpServletResponse;

@RestController
@RequestMapping("/api/status")
public class StatusController {

    @Autowired
    private JwtUtil jwtUtil;

    @PostMapping
    public Map<String, String> handleStatus(@RequestBody Map<String, String> credentials,
            HttpServletResponse response) {
        if (jwtUtil.validateToken(credentials.get("devpipe_token")) != null) {
            return Map.of("auth", "success");
        } else {
            return Map.of("auth", "failed");
        }
    }
}
