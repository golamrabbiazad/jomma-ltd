package com.golamrabbiazad.jommaeserver.respository;

import com.golamrabbiazad.jommaeserver.model.Transactions;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TransactionsRepository extends JpaRepository<Transactions, Long> {
}
