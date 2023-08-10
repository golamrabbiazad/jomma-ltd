package com.golamrabbiazad.jommaeserver.model;

import jakarta.persistence.*;

@Entity
@Table(name = "products" )
public class Products {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "product_id")
    private Long product_id;

    @Column(name = "product_name", length = 200)
    private String product_name;

    @Column(name = "product_code", length = 50)
    private String product_code;

    @Column(name = "unit_price")
    private Double unit_price;

    @Column(name = "gain_loss")
    private Double gain_loss;

    @Column(name = "year_to_date")
    private Double year_to_date;

    @Column(name = "active_status", columnDefinition = "NUMBER(1) DEFAULT 1")
    private Integer active_status = 1;

    public Products() {
        // Default Constructor
    }

    public Products(String product_name, String product_code, Double unit_price, Double gain_loss, Double year_to_date) {
        this.product_name = product_name;
        this.product_code = product_code;
        this.unit_price = unit_price;
        this.gain_loss = gain_loss;
        this.year_to_date = year_to_date;
    }

    public Long getProduct_id() {
        return product_id;
    }

    public void setProduct_id(Long product_id) {
        this.product_id = product_id;
    }

    public String getProduct_name() {
        return product_name;
    }

    public void setProduct_name(String product_name) {
        this.product_name = product_name;
    }

    public String getProduct_code() {
        return product_code;
    }

    public void setProduct_code(String product_code) {
        this.product_code = product_code;
    }

    public Double getUnit_price() {
        return unit_price;
    }

    public void setUnit_price(Double unit_price) {
        this.unit_price = unit_price;
    }

    public Double getGain_loss() {
        return gain_loss;
    }

    public void setGain_loss(Double gain_loss) {
        this.gain_loss = gain_loss;
    }

    public Double getYear_to_date() {
        return year_to_date;
    }

    public void setYear_to_date(Double year_to_date) {
        this.year_to_date = year_to_date;
    }

    public Integer getActive_status() {
        return active_status;
    }

    public void setActive_status(Integer active_status) {
        this.active_status = active_status;
    }
}
