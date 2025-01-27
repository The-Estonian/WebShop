package com.devpipe.webshop.repositories;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.devpipe.webshop.models.Todo;

public interface TodoRepository extends CrudRepository<Todo, Long> {
    List<Todo> findByUserId(Long userId);
}
