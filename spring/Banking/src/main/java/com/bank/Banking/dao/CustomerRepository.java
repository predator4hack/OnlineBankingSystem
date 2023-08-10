package com.bank.Banking.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.bank.Banking.model.Customer;

@Repository
public interface CustomerRepository extends JpaRepository<Customer, String> {
	
}
