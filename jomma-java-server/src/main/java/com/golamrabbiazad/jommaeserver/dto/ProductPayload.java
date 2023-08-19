package com.golamrabbiazad.jommaeserver.dto;

public record ProductPayload(String product_name, String product_code, Double unit_price, Double gain_loss, Double year_to_date) {
}
