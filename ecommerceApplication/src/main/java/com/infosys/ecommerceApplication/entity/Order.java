package com.infosys.ecommerceApplication.entity;

import jakarta.persistence.*;

@Entity

@Table(name = "orders")
public class Order {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String customerName;

    private String address;

    private double totalAmount;

    private String paymentMethod;

    // GET ID
    public Long getId() {

        return id;
    }

    public void setId(Long id) {

        this.id = id;
    }

    // GET CUSTOMER NAME
    public String getCustomerName() {

        return customerName;
    }

    public void setCustomerName(
            String customerName) {

        this.customerName = customerName;
    }

    // GET ADDRESS
    public String getAddress() {

        return address;
    }

    public void setAddress(
            String address) {

        this.address = address;
    }

    // GET TOTAL AMOUNT
    public double getTotalAmount() {

        return totalAmount;
    }

    public void setTotalAmount(
            double totalAmount) {

        this.totalAmount = totalAmount;
    }

    // GET PAYMENT METHOD
    public String getPaymentMethod() {

        return paymentMethod;
    }

    public void setPaymentMethod(
            String paymentMethod) {

        this.paymentMethod = paymentMethod;
    }
}