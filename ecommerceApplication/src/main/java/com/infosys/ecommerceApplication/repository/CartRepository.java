package com.infosys.ecommerceApplication.repository;

import com.infosys.ecommerceApplication.entity.Cart;

import org.springframework.data.jpa.repository.JpaRepository;

public interface CartRepository
        extends JpaRepository<Cart, Long> {

}