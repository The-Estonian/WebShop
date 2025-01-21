package com.devpipe.demo.controllers;

import java.util.Map;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.devpipe.demo.util.PasswordUtil;

import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletResponse;

@RestController
@RequestMapping("/api/logout")
public class LogoutController {

    @PostMapping
    public Map<String, String> handleLogout(HttpServletResponse response) {
        Cookie cookie = new Cookie("devpipe_token", "");
        cookie.setHttpOnly(true);
        cookie.setSecure(false); // set to true in prod for https
        cookie.setPath("/");
        cookie.setMaxAge(0);
        response.addCookie(cookie);

        return Map.of("logout", "success");
    }
}
