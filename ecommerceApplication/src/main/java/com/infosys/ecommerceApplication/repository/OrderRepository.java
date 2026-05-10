package com.infosys.ecommerceApplication.repository;

import com.infosys.ecommerceApplication.entity.Order;

import org.springframework.data.jpa.repository.JpaRepository;

public interface OrderRepository

        extends JpaRepository<Order, Long> {

}