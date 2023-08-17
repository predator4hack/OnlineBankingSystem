package com.bank.Banking.dao;


import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.bank.Banking.model.Account;

@Repository
public interface AccRepository extends JpaRepository<Account, Long> {
	@Query("select account from Account account where account.user.userId=?1")
	public List<Account> findByUsername(String username);
}
