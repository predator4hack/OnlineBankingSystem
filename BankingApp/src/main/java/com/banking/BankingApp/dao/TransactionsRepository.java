package com.banking.BankingApp.dao;


import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.banking.BankingApp.model.Transactions;




@Repository
public interface TransactionsRepository extends JpaRepository<Transactions, Integer> {
	@Query("select transaction from Transactions transaction where transaction.accountfrom=?1 or transaction.accountto=?1")
	public List<Transactions> findByAccountNumber(long accountno);
}