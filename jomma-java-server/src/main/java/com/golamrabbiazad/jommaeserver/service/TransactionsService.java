package com.golamrabbiazad.jommaeserver.service;

import com.golamrabbiazad.jommaeserver.dto.TransactionsPayload;
import com.golamrabbiazad.jommaeserver.model.Products;
import com.golamrabbiazad.jommaeserver.model.Transactions;
import com.golamrabbiazad.jommaeserver.respository.ProductsRepository;
import com.golamrabbiazad.jommaeserver.respository.TransactionsRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Service
public class TransactionsService {
    private final TransactionsRepository transactionsRepository;
    private final ProductsRepository productsRepository;


    public TransactionsService(TransactionsRepository transactionsRepository,
                               ProductsRepository productsRepository) {
        this.transactionsRepository = transactionsRepository;
        this.productsRepository = productsRepository;
    }

    public List<Transactions> getTransactions() {
        return transactionsRepository.findAll();
    }

    public ResponseEntity<String> createTransaction(TransactionsPayload[] trxPayload) {
        List<Transactions> transactionsList = new ArrayList<>();

        for (TransactionsPayload payload : trxPayload) {
            Products products = productsRepository
                    .findById(payload.product_id())
                    .orElseThrow(() -> new IllegalArgumentException("Product not found"));

            // Create a new transaction
            Transactions transactions = new Transactions();
            transactions.setProduct_id(products);
            transactions.setOrder_amount(payload.unit_price());
            transactions.setCreated_on(LocalDateTime.now());

            transactionsList.add(transactions);
        }

        // Save all transactions to the database
        transactionsRepository.saveAll(transactionsList);

        String responseMessage = """
                {"message": "Order placed successfully"}
                """;
        return ResponseEntity.status(201).body(responseMessage);
    }
}
