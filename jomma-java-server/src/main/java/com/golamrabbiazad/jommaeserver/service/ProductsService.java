package com.golamrabbiazad.jommaeserver.service;

import com.golamrabbiazad.jommaeserver.model.Products;
import com.golamrabbiazad.jommaeserver.respository.ProductsRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductsService {
    private final ProductsRepository productsRepository;

    public ProductsService(ProductsRepository productsRepository) {
        this.productsRepository = productsRepository;
    }

    public List<Products> getProducts() {
        return productsRepository.findAllActiveProducts();
    }
}
