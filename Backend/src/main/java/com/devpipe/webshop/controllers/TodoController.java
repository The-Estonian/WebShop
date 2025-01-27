package com.devpipe.webshop.controllers;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.devpipe.webshop.models.Todo;
import com.devpipe.webshop.models.User;
import com.devpipe.webshop.services.TodoService;
import com.devpipe.webshop.services.UserService;
import com.devpipe.webshop.util.JwtUtil;

import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;

@RestController
@RequestMapping("/api/todos")
public class TodoController {

    private final TodoService todoService;
    private JwtUtil jwtUtil;
    private final UserService userService;

    @Autowired
    public TodoController(TodoService todoService, JwtUtil jwtUtil, UserService userService) {
        this.todoService = todoService;
        this.jwtUtil = jwtUtil;
        this.userService = userService;
    }

    @GetMapping
    public ResponseEntity<Object> getAllTodos(HttpServletRequest request) {
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
            String email = jwtUtil.validateToken(token);
            User user = userService.getUserByEmail(email);
            List<Todo> todos = todoService.getAllTodos(user.getId());
            return ResponseEntity.ok(Map.of("auth", "success", "todoList", todos));
        }
        return ResponseEntity.status(HttpStatus.NOT_FOUND)
                .body(Map.of("auth", "failed", "message", "User not found"));
    }
}
