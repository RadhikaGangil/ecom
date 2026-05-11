package com.infosys.ecommerceApplication.service.impl;

import com.infosys.ecommerceApplication.entity.Order;

import com.infosys.ecommerceApplication.repository.CartRepository;
import com.infosys.ecommerceApplication.repository.OrderRepository;

import com.infosys.ecommerceApplication.service.OrderService;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Service;

import org.springframework.transaction.annotation.Transactional;

@Service
public class OrderServiceImpl

        implements OrderService {

    @Autowired
    private OrderRepository orderRepository;

    @Autowired
    private CartRepository cartRepository;

    // TRANSACTION LOGIC
    @Transactional
    @Override
    public Order placeOrder(Order order) {

        // SAVE ORDER
        Order savedOrder =

                orderRepository.save(order);

        // CLEAR CART
        cartRepository.deleteAll();

        return savedOrder;
    }
}