package com.devpipe.webshop.controllers;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CookieValue;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.devpipe.webshop.models.User;
import com.devpipe.webshop.models.UserDTO;
import com.devpipe.webshop.services.UserService;
import com.devpipe.webshop.util.JwtUtil;

@RestController
@RequestMapping("/api/profile")
public class ProfileController {

    private final UserService userService;
    private JwtUtil jwtUtil;

    @Autowired
    public ProfileController(UserService userService, JwtUtil jwtUtil) {
        this.userService = userService;
        this.jwtUtil = jwtUtil;
    }

    @GetMapping
    public ResponseEntity<?> handleProfile(@CookieValue("devpipe_token") String token) {
        if (token == null || token.isEmpty()) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
                    .body(Map.of("login", "fail", "message", "Token not provided"));
        }

        try {
            String email = jwtUtil.validateToken(token);
            User user = userService.getUserByEmail(email);
            if (user == null) {
                return ResponseEntity.status(HttpStatus.NOT_FOUND)
                        .body(Map.of("login", "fail", "message", "User not found"));
            }
            UserDTO userDTO = new UserDTO(user.getEmail());
            return ResponseEntity.ok(userDTO);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
                    .body(Map.of("login", "fail", "message", "Invalid or expired token"));

        }
    }
}
