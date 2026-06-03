package com.infosys.ecommerceApplication.service.impl;

import com.infosys.ecommerceApplication.entity.Product;
import com.infosys.ecommerceApplication.repository.ProductRepository;
import com.infosys.ecommerceApplication.service.ProductService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductServiceImpl
        implements ProductService {

    @Autowired
    private ProductRepository productRepository;

    // Add Product
    @Override
    public Product addProduct(Product product) {

        return productRepository.save(product);
    }

    // Get Product By Id
    @Override
    public Product getProductById(Long id) {

        return productRepository
                .findById(id)
                .orElse(null);
    }

    // Get All Products
    @Override
    public List<Product> getAllProducts() {

        return productRepository.findAll();
    }

    // Search Products
    @Override
    public List<Product> searchProducts(
            String keyword) {

        return productRepository
                .findByNameContainingIgnoreCase(
                        keyword);
    }

    // Filter Products By Price
    @Override
    public List<Product> filterProductsByPrice(
            double price) {

        return productRepository
                .findByPriceLessThanEqual(
                        price);
    }

    // Delete Product
    @Override
    public void deleteProduct(Long id) {

        productRepository.deleteById(id);
    }
}
