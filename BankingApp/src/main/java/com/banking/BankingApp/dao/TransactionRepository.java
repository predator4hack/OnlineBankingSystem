package com.banking.BankingApp.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;


import com.banking.BankingApp.model.Transaction;
@Repository
public interface TransactionRepository extends JpaRepository<Transaction, Integer> {

	@Query("select transaction from Transaction transaction where transaction.accountfrom=?1 or transaction.accountto=?1")
	public List<Transaction> findByAccountNumber(long accountno);
	

}
