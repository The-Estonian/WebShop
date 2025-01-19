package com.devpipe.demo.controllers;

import java.util.Map;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/login")
// @CrossOrigin(origins = "http://localhost:5173")
public class LoginController {

    @PostMapping
    public Map<String, String> sayHello() {
        return Map.of("login", "success");
    }

}
