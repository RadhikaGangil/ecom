package com.infosys.ecommerceApplication.controller;

import com.infosys.ecommerceApplication.entity.Order;

import com.infosys.ecommerceApplication.repository.OrderRepository;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController

@RequestMapping("/api/orders")

@CrossOrigin(origins = "http://localhost:5173")

public class OrderController {

    @Autowired
    private OrderRepository orderRepository;

    // SAVE ORDER
    @PostMapping
    public Order placeOrder(

            @RequestBody Order order) {

        return orderRepository.save(order);
    }

    // GET ORDERS
    @GetMapping
    public List<Order> getOrders() {

        return orderRepository.findAll();
    }
}