package com.banking.BankingApp.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.banking.BankingApp.model.Account;

@Repository
public interface AccountRepository extends JpaRepository<Account, Long> {

}
