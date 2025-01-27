package com.devpipe.webshop.repositories;

import org.springframework.data.repository.CrudRepository;

import com.devpipe.webshop.models.User;

public interface UserRepository extends CrudRepository<User, Long> {
    User findByEmail(String email);
}
