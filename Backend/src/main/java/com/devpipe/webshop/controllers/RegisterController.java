package com.devpipe.webshop.controllers;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.devpipe.webshop.models.User;
import com.devpipe.webshop.services.UserService;
import com.devpipe.webshop.util.PasswordUtil;

@RestController
@RequestMapping("/api/register")
public class RegisterController {
    private final UserService userService;

    @Autowired
    public RegisterController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping
    public ResponseEntity<?> createUser(@RequestBody User user) {
        User checkEmail = userService.getUserByEmail(user.getEmail());
        if (checkEmail == null) {
            user.setPassword(PasswordUtil.hashPassword(user.getPassword()));
            userService.saveUser(user);
            return ResponseEntity.ok(Map.of("register", "success"));
        } else {
            return ResponseEntity.ok(Map.of("register", "fail", "message", "Email already taken!"));
        }
    }

}
