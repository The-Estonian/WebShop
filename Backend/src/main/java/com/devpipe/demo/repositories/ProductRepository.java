package com.devpipe.demo.repositories;

import org.springframework.data.repository.CrudRepository;

import com.devpipe.demo.models.Product;

public interface ProductRepository extends CrudRepository<Product, Long> {

}
