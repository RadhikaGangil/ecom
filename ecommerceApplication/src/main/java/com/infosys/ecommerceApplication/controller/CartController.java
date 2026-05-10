package com.infosys.ecommerceApplication.controller;

import com.infosys.ecommerceApplication.entity.Cart;

import com.infosys.ecommerceApplication.repository.CartRepository;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.PutMapping;

import java.util.List;

@RestController

@RequestMapping("/api/cart")

@CrossOrigin("*")
public class CartController {

    @Autowired
    private CartRepository cartRepository;

    // ADD TO CART
    @PostMapping
    public Cart addToCart(

            @RequestBody Cart cart) {

        return cartRepository.save(cart);
    }

    // GET ALL CART ITEMS
    @GetMapping
    public List<Cart> getCartItems() {

        return cartRepository.findAll();
    }

    // UPDATE CART ITEM
    @PutMapping("/{id}")
    public Cart updateCartItem(

            @PathVariable Long id,

            @RequestBody Cart updatedCart) {

        Cart cart = cartRepository
                .findById(id)
                .orElse(null);

        if (cart != null) {

            cart.setProductName(
                    updatedCart.getProductName());

            cart.setPrice(
                    updatedCart.getPrice());

            cart.setQuantity(
                    updatedCart.getQuantity());

            cart.setImageUrl(
                    updatedCart.getImageUrl());

            return cartRepository.save(cart);
        }

        return null;
    }

    // DELETE CART ITEM
    @DeleteMapping("/{id}")
    public String removeCartItem(

            @PathVariable Long id) {

        cartRepository.deleteById(id);

        return "Item Removed From Cart";
    }
}