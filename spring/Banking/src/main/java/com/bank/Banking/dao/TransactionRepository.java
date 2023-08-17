package com.bank.Banking.dao;


import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.bank.Banking.model.Transaction;

@Repository
public interface TransactionRepository extends JpaRepository<Transaction, Long> {
	@Query("select transaction from Transaction transaction where transaction.accFrom=?1 or transaction.accTo=?1")
	public List<Transaction> findByAccountNumber(long accno);
}
