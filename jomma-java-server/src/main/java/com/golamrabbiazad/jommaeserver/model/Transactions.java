package com.golamrabbiazad.jommaeserver.model;

import jakarta.persistence.*;

import java.time.LocalDateTime;

@Entity
@Table(name = "transactions" )
public class Transactions {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "transaction_id")
    private Long transaction_id;

    @Column(name = "user_id")
    private Integer user_id = 1;

    @JoinColumn(name = "product_id")
    @ManyToOne(cascade = CascadeType.REMOVE)
    private Products product_id;

    @Column(name = "order_amount")
    private Double order_amount;

    @Column(name = "created_on")
    private LocalDateTime created_on;

    public Transactions() {
        // Default constructors
    }

    public Transactions(Products product_id, Double order_amount) {
        this.product_id = product_id;
        this.order_amount = order_amount;
    }

    public Long getTransaction_id() {
        return transaction_id;
    }

    public void setTransaction_id(Long transaction_id) {
        this.transaction_id = transaction_id;
    }

    public Integer getUser_id() {
        return user_id;
    }

    public void setUser_id(Integer user_id) {
        this.user_id = user_id;
    }

    public Products getProduct_id() {
        return product_id;
    }

    public void setProduct_id(Products product_id) {
        this.product_id = product_id;
    }

    public Double getOrder_amount() {
        return order_amount;
    }

    public void setOrder_amount(Double order_amount) {
        this.order_amount = order_amount;
    }

    public LocalDateTime getCreated_on() {
        return created_on;
    }

    public void setCreated_on(LocalDateTime created_on) {
        this.created_on = created_on;
    }
}
