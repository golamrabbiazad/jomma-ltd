package com.golamrabbiazad.jommaeserver.controller;

import com.golamrabbiazad.jommaeserver.model.Products;
import com.golamrabbiazad.jommaeserver.service.ProductsService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/products")
@CrossOrigin(origins = "http://localhost:3000")
public class ProductsController {
    private final ProductsService productsService;

    public ProductsController(ProductsService productsService) {
        this.productsService = productsService;
    }

    @GetMapping
    List<Products> getAllProducts() {
        return productsService.getProducts();
    }
}
