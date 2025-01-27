package com.devpipe.webshop.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.devpipe.webshop.models.Todo;
import com.devpipe.webshop.repositories.TodoRepository;

@Service
public class TodoService {
    private final TodoRepository todoRepository;

    @Autowired
    public TodoService(TodoRepository todoRepository) {
        this.todoRepository = todoRepository;
    }

    public Todo saveTodo(Todo todo) {
        return todoRepository.save(todo);
    }

    public Optional<Todo> getTodoById(Long id) {
        return todoRepository.findById(id);
    }

    public List<Todo> getAllTodos(Long userId) {
        return todoRepository.findByUserId(userId);
    }

    public void deleteTodo(Long id) {
        todoRepository.deleteById(id);
    }
}
