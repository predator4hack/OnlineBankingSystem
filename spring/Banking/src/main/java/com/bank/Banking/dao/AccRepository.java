package com.bank.Banking.dao;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.bank.Banking.model.Account;

@Repository
public interface AccRepository extends JpaRepository<Account, Long> {
	
}
