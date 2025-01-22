package com.devpipe.demo.controllers;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.devpipe.demo.models.User;
import com.devpipe.demo.services.UserService;
import com.devpipe.demo.util.PasswordUtil;

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
        user.setPassword(PasswordUtil.hashPassword(user.getPassword()));
        userService.saveUser(user);
        return ResponseEntity.ok(Map.of("register", "success"));
    }

}
