package com.golamrabbiazad.jommaeserver;

import com.golamrabbiazad.jommaeserver.model.Products;
import com.golamrabbiazad.jommaeserver.respository.ProductsRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.util.ArrayList;

@SpringBootApplication
public class JommaEserverApplication {
    public static void main(String[] args) {
        SpringApplication.run(JommaEserverApplication.class, args);
    }

    @Bean
    CommandLineRunner commandLineRunner(ProductsRepository productsRepository) {
        return args -> {
            ArrayList<Products> items = new ArrayList<>();
            Products item1 = new Products("Islami Bank Bangladesh Ltd", "ISLAMIBANK", 32.60, 3.00, 1.2);
            Products item2 = new Products("Grameenphone Ltd", "GP", 286.60, 2.00, 0.00);
            Products item3 = new Products("Bangladesh Export Import Company Ltd (Beximco)", "BEXIMCO", 115.60, 1.00, 0.05);
            Products item4 = new Products("The City Bank Ltd", "CITYBANK", 21.40, 1.45, -1.8);

            items.add(item1);
            items.add(item2);
            items.add(item3);
            items.add(item4);
            productsRepository.saveAll(items);
        };
    }
}
