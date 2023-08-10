package com.golamrabbiazad.jommaeserver.controller;

import com.golamrabbiazad.jommaeserver.dto.TransactionsPayload;
import com.golamrabbiazad.jommaeserver.model.Transactions;
import com.golamrabbiazad.jommaeserver.service.TransactionsService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/transactions")
@CrossOrigin(origins = "http://localhost:3000")
public class TransactionsController {

    private final TransactionsService transactionsService;

    public TransactionsController(TransactionsService transactionsService) {
        this.transactionsService = transactionsService;
    }

    @GetMapping
    List<Transactions> getAllTransactions() {
        return transactionsService.getTransactions();
    }

    @PostMapping
    ResponseEntity<String> placeOrder(@RequestBody TransactionsPayload[] payloads) {
        return transactionsService.createTransaction(payloads);
    }
}
