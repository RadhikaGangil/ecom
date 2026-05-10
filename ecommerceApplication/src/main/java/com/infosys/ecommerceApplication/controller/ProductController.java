package com.infosys.ecommerceApplication.controller;

import com.infosys.ecommerceApplication.entity.Product;
import com.infosys.ecommerceApplication.service.ProductService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/products")
@CrossOrigin(origins = "http://localhost:5173")

public class ProductController {

    @Autowired
    private ProductService productService;

    // Add Product
    @PostMapping("/add")
    public Product addProduct(
            @RequestBody Product product) {

        return productService.addProduct(product);
    }

    // Get All Products
    @GetMapping
    public List<Product> getAllProducts() {

        return productService.getAllProducts();
    }

    // Get Product By Id
    @GetMapping("/{id}")
    public Product getProductById(
            @PathVariable Long id) {

        return productService.getProductById(id);
    }

    // Search Products
    @GetMapping("/search")
    public List<Product> searchProducts(
            @RequestParam String keyword) {

        return productService.searchProducts(keyword);
    }

    // Filter Products By Price
    @GetMapping("/filter")
    public List<Product> filterProducts(
            @RequestParam double price) {

        return productService.filterProductsByPrice(price);
    }
}