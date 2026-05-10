package com.infosys.ecommerceApplication.service;

import com.infosys.ecommerceApplication.entity.Product;

import java.util.List;

public interface ProductService {

    // Add Product
    Product addProduct(Product product);

    // Get All Products
    List<Product> getAllProducts();

    // Get Product By Id
    Product getProductById(Long id);

    // Search Products
    List<Product> searchProducts(String keyword);

    // Filter Products By Price
    List<Product> filterProductsByPrice(double price);
}