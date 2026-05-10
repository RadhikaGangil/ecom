package com.infosys.ecommerceApplication.repository;

import com.infosys.ecommerceApplication.entity.Product;

import org.springframework.data.jpa.repository.JpaRepository;

import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProductRepository
        extends JpaRepository<Product, Long> {

    // Search By Name
    List<Product> findByNameContainingIgnoreCase(
            String name);

    // Filter By Price
    List<Product> findByPriceLessThanEqual(
            double price);
}