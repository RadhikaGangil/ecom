package com.infosys.ecommerceApplication.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Cart {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String productName;

    private double price;

    private int quantity;

    private String imageUrl;

    // GET ID
    public Long getId() {

        return id;
    }

    // SET ID
    public void setId(Long id) {

        this.id = id;
    }

    // GET PRODUCT NAME
    public String getProductName() {

        return productName;
    }

    // SET PRODUCT NAME
    public void setProductName(
            String productName) {

        this.productName = productName;
    }

    // GET PRICE
    public double getPrice() {

        return price;
    }

    // SET PRICE
    public void setPrice(double price) {

        this.price = price;
    }

    // GET QUANTITY
    public int getQuantity() {

        return quantity;
    }

    // SET QUANTITY
    public void setQuantity(int quantity) {

        this.quantity = quantity;
    }

    // GET IMAGE URL
    public String getImageUrl() {

        return imageUrl;
    }

    // SET IMAGE URL
    public void setImageUrl(
            String imageUrl) {

        this.imageUrl = imageUrl;
    }
}