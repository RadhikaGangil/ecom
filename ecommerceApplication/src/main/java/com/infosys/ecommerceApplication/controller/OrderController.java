package com.infosys.ecommerceApplication.controller;

import com.infosys.ecommerceApplication.entity.Order;

import com.infosys.ecommerceApplication.service.OrderService;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController

@RequestMapping("/api/orders")

@CrossOrigin("*")
public class OrderController {

    @Autowired
    private OrderService orderService;

    // CHECK OUT
    @PostMapping
    public Order placeOrder(

            @RequestBody Order order) {

        return orderService.placeOrder(order);
    }
}