package com.golamrabbiazad.jommaeserver.service;

import com.golamrabbiazad.jommaeserver.dto.ProductPayload;
import com.golamrabbiazad.jommaeserver.exception.CustomException;
import com.golamrabbiazad.jommaeserver.model.Products;
import com.golamrabbiazad.jommaeserver.respository.ProductsRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class ProductsService {
    private final ProductsRepository productsRepository;

    public ProductsService(ProductsRepository productsRepository) {
        this.productsRepository = productsRepository;
    }

    public List<Products> getProducts() {
        return productsRepository.findAllActiveProducts().stream().limit(10).collect(Collectors.toList());
    }
    public ResponseEntity<String> addProduct(ProductPayload[] payload) {
        for (ProductPayload productPayload : payload) {
            if (productsRepository.existsByProductCode(productPayload.product_code())) {
                throw new CustomException("Product already exists");
            }
            Products products = new Products();
            products.setProduct_name(productPayload.product_name());
            products.setProduct_code(productPayload.product_code());
            products.setUnit_price(productPayload.unit_price());
            products.setGain_loss(productPayload.gain_loss());
            products.setYear_to_date(productPayload.year_to_date());

            productsRepository.save(products);
        }

        String responseMessage = """
                {"message": "Product added successfully"}
                """;
        return ResponseEntity.status(201).body(responseMessage);
    }
}
