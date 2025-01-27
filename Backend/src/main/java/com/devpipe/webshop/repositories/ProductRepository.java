package com.devpipe.webshop.repositories;

import org.springframework.data.repository.CrudRepository;

import com.devpipe.webshop.models.Product;

public interface ProductRepository extends CrudRepository<Product, Long> {

}
