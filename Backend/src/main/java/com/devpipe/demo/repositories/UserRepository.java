package com.devpipe.demo.repositories;

import org.springframework.data.repository.CrudRepository;

import com.devpipe.demo.models.User;

public interface UserRepository extends CrudRepository<User, Long> {
    User findByEmail(String email);
}
